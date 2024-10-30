<?php

if ( ! class_exists('bpmcontext_sdk_manager') ) {

    class bpmcontext_sdk_manager
    {

        function __construct()
        {

        }

        function bpm_load_actions()
        {
            require_once 'config.php';
            require_once 'includes/bpmcontext_language_for_js.php';
            require_once 'includes/bpmcontext_html_main.php';

            add_action( 'init', array( $this , 'bpm_load_textdomain') );

            //register all javascript files and css files
            add_action('wp_enqueue_scripts', array( $this ,'bpm_register_scripts' ) , 50);

            add_action('admin_enqueue_scripts', array( $this ,'bpm_register_scripts' ) , 50);
            add_action( 'admin_enqueue_scripts', array( $this ,'bpm_enqueue_scripts_admin') , 51);

            add_action( 'wp_ajax_bpm_update_dev_code', array( $this ,'bpm_update_dev_code' ));
            add_action( 'wp_ajax_bpm_clear_theme_css', array( $this ,'bpm_clear_theme_css' ));
            add_action( 'wp_ajax_bpm_update_product_info', array( $this ,'bpm_update_product_info' ));
            add_action( 'wp_ajax_bpm_installed_solutions', array( $this ,'bpm_installed_solutions' ));
            add_action( 'wp_ajax_bpm_update_theme_css', array( $this ,'bpm_update_theme_css') );
            add_action( 'wp_ajax_bpm_update_display_wizard', array( $this ,'bpm_update_display_wizard' ));
            add_action( 'wp_ajax_bpm_update_login_header', array( $this ,'bpm_update_login_header' ));
            add_action( 'wp_ajax_bpm_update_theme_template', array( $this ,'bpm_update_theme_template' ));
            add_action( 'wp_ajax_bpm_set_bpm_has_account', array( $this ,'bpm_set_bpm_has_account' ));

            add_action( 'wp_ajax_bpm_health_check', array( $this ,'bpm_health_check' ));
            add_action( 'wp_ajax_nopriv_bpm_health_check', array( $this ,'bpm_health_check' ));

            add_action('admin_menu', array( $this ,'bpm_options_add_page' ));
            add_action('admin_init', array( $this ,'bpm_options_init' ));

        	add_action('admin_notices', array($this, 'bpm_run_product_nags'));

            add_shortcode( 'BPMContext_Content', array( $this , 'bpm_shortcode_handler') );

        }


        function bpm_update_product_info(){

            if(isset($_REQUEST['theme_info'])){
                $this->bpm_remote_update_theme_css($_REQUEST['theme_info']);
            }

            $update_status = array('updates' => 0 );
            if(isset($_REQUEST['value'])){
                $options = get_option('bpm_products');
                if($options){
                    if($options != $_REQUEST['value']){
                        $update_status = array('updates' => 1 );
                    }
                }
                update_option('bpm_products', $_REQUEST['value']);
            }
            global $current_user;
            $user_id = $current_user->ID;
            $admins = get_option('bpm_i_am_admin');
            if( ! $admins ) $admins = array();
            if(isset($_REQUEST['imadmin'])) $admins[$user_id] = $_REQUEST['imadmin'];
            update_option('bpm_i_am_admin', $admins);

            wp_send_json( $update_status );
        }

        function bpm_installed_solutions(){
            if($_REQUEST['installed']){
            global $bpm_solution_sets;
                if($bpm_solution_sets) {
                    foreach ($bpm_solution_sets as $index => $value) {
                        update_option('bpm_installed_'.$index , 1);
                    }
                }
            }
        }

        function bpm_set_bpm_has_account(){
            update_option('bpm_has_account' , 1);

        }

        function bpm_about_options(){
            $bpm_html = new bpmcontext_sdk_html_manager();
            echo $bpm_html->bpm_get_support_content();
        }

        function bpm_display_support(){
            $bpm_html = new bpmcontext_sdk_html_manager();
            echo $bpm_html->bpm_get_support_content();
        }

        function bpm_display_theme_settings(){
            $bpm_html = new bpmcontext_sdk_html_manager();
            echo $bpm_html->bpm_get_theme_settings_content();
        }

        function bpm_is_my_admin_page(){

            if( is_admin()) {

                global $pagenow;

                if ($pagenow == 'admin.php' && isset($_GET['page']) && ($_REQUEST['page'] == 'bpm_theme_options' || $_REQUEST['page'] == 'bpm_form_options' || $_GET['page'] == 'bpm_support_options' || $_GET['page'] == 'bpm_options' || $_GET['page'] == 'bpm_about_options' || $_REQUEST['page'] == 'bpm_options_help' || $_REQUEST['page'] == 'bpm_extensions_options')) {
                    return true;
                }
            }

            return false;
        }

        function bpm_options_init(){

            register_setting('bpm_options_options', 'bpm_site_options', array($this, 'bpm_options_validate'));

            global $current_user;
            $user_id = $current_user->ID;
            if (isset($_GET['bpm_admin_ignore']) && '0' == $_GET['bpm_admin_ignore']) {
                add_user_meta($user_id, 'bpm_ignore_notice', 'true', true);
            }
        }

        function bpm_options_add_page() {
        /*
        * Setup Admin menu item if not setup by another plugin
        */
            global $admin_menu_items;
            global $submenu;

            if( ! $this->bpm_is_on_menu(true)) {
                $menu_alerts = '&nbsp;<span class="update-plugins count-1">
                                <span class="plugin-count">1</span>
                            </span>';
            }else{
                $menu_alerts = '';
            }

            $options = get_option('bpm_has_account');

//            if(get_option('reactivate')){
//                delete_option('reactivate');
//                $this->bpm_set_dashboard_page();
//            }

            if($options) {

                if ( ! is_multisite() ) {
                    if (strlen(get_option('bpm_redirect_to')) > 0){
                        $redirect_to = get_option('bpm_redirect_to');
                        delete_option('bpm_redirect_to');
                        wp_redirect('admin.php?page=' . $redirect_to);
                    }
                }else{
                    delete_option('bpm_redirect_to');
                }

                if (empty ($GLOBALS['admin_page_hooks']['bpm_options'])){
                    add_menu_page(__('BPMContext', 'bpmcontext'), __('BPMContext'.$menu_alerts, 'bpmcontext'), 'manage_options', 'bpm_options', array( $this ,'bpm_options_do_page'), 'dashicons-welcome-widgets-menus', '79.5');
                    add_submenu_page('bpm_options', 'About', 'About '.$menu_alerts, 'manage_options', 'bpm_options');
                }

                $bpm_extension_alert = 0;
                $bpm_products = get_option('bpm_products');
                if( $bpm_products ){
                    for($x=0;$x<sizeof($bpm_products);$x++){
//                        if($bpm_products[$x]['can_install'] || $bpm_products[$x]['can_update']){
//                            $bpm_extension_alert++;
//                        }
                    }
                }

                if( $bpm_extension_alert  ) {
                    $extension_alerts = '&nbsp;<span class="update-plugins count-'.$bpm_extension_alert.'">
                                    <span class="plugin-count">'.$bpm_extension_alert.'</span>
                                </span>';
                }else{
                    $extension_alerts = '';
                }

                $admin_menu_items[] = array('name' => __('Extensions', '') .$extension_alerts,
                    'title' => __('Extensions', 'bpmcontext') ,
                    'user_rights' => 'manage_options',
                    'page_slug' => 'bpm_extensions_options',
                    'callback' => 'bpm_display_extension_settings',
                    'sdk' => true);

                $admin_menu_items[] = array('name' => __('Theme Settings', ''),
                    'title' => __('Theme Settings', 'bpmcontext'),
                    'user_rights' => 'manage_options',
                    'page_slug' => 'bpm_theme_options',
                    'callback' => 'bpm_display_theme_settings',
                    'sdk' => true);

                $admin_menu_items[] = array('name' => __('Support', ''),
                    'title' => __('Support', 'bpmcontext'),
                    'user_rights' => 'manage_options',
                    'page_slug' => 'bpm_support_options',
                    'callback' => 'bpm_display_support',
                    'sdk' => true);

                $admin_menu_items[] = array('name' => __('Help Center', ''),
                    'title' => __('Help Center', 'bpmcontext'),
                    'user_rights' => 'manage_options',
                    'page_slug' => 'bpm_options_help',
                    'callback' => 'bpm_options_do_page',
                    'sdk' => true);

                foreach ($admin_menu_items as $value) {
                    if (
                        isset($submenu['bpm_options'])
                        && in_array($value['page_slug'], wp_list_pluck($submenu['bpm_options'], 2))
                    ) {
                        // Submenu exists.
                    } else {
                        // Submenu doesn't exist.
                        if (isset($value['sdk'])) {
                            add_submenu_page('bpm_options', $value['title'], $value['name'], $value['user_rights'], $value['page_slug'], array($this, $value['callback']));
                        } else {
                            add_submenu_page('bpm_options', $value['title'], $value['name'], $value['user_rights'], $value['page_slug'], $value['callback']);
                        }
                    }
                }
            }else{

                if (empty ($GLOBALS['admin_page_hooks']['bpm_options'])){
                    add_menu_page(__('BPMContext', 'bpmcontext'), __('BPMContext'.$menu_alerts, 'bpmcontext'), 'manage_options', 'bpm_options', array( $this ,'bpm_options_do_new_acct_page'), 'dashicons-welcome-widgets-menus', '79.5');
                }
            }

           if(BPM_FORM_DEBUG) add_submenu_page('bpm_options', __('Debug','bpmcontext'), __('Debug','bpmcontext'), 'manage_options', 'bpm_debug_options' , array($this, 'bpm_debug_reset' ) );
        }

        function bpm_run_product_nags(){

            if( ! $this->bpm_is_my_admin_page() || $_REQUEST['page'] == 'bpm_extensions_options') {
                return;
            }

            $product_alert_message = '';
            $bpm_products = get_option('bpm_products');
            $bpm_viewed = get_option('bpm_products_viewed');

            if( ! $bpm_viewed ){
                $bpm_viewed = array();
                $_REQUEST['bpm_product_info_ignore'] = 1;
            }

            if($bpm_products){
                $new_products = 0;
                for($x=0;$x<sizeof($bpm_products);$x++){

                    if(isset($_REQUEST['bpm_product_info_ignore'])) $bpm_viewed[$bpm_products[$x]['product_id']] = 1;

                    if( ! isset($bpm_viewed[$bpm_products[$x]['product_id']])) {
                        $bpm_viewed[$bpm_products[$x]['product_id']] = 1;
                        if (strlen($product_alert_message) > 0) $product_alert_message .= ', ';
                        $product_alert_message .= $bpm_products[$x]['prod_desc'];
                        $new_products++;
                    }
                }

                if(isset($_REQUEST['bpm_product_info_ignore']))  update_option('bpm_products_viewed', $bpm_viewed);

                if($product_alert_message) {
                    $extension = 'extensions';
                    if($new_products == 1)  $extension = 'extension';
                    $product_alert_message = $new_products . ' new '.$extension.'.  Click <a href="admin.php?page=bpm_extensions_options">here</a> to see what\'s new<br>New '.$extension.': '.$product_alert_message;
                    echo '<div class="updated" style="max-width: 67em;"><p>';
                    printf(__('We recently added '. $product_alert_message . ' | <a href="?page=' . $_REQUEST['page'] . '&bpm_product_info_ignore=0">Hide Notice</a>'));
                    echo '</p></div>';
                }
            }
        }

        function bpm_display_extension_settings(){

            //setup html
            $bpm_html = new bpmcontext_sdk_html_manager();
            echo $bpm_html->bpm_get_htmladmin();

            $bpm_products = get_option('bpm_products');

            echo '<div class="bpm-admin-extensions-overlay bpm-hide text-center" ></div>';
            echo '<div id="bpm_admin_extensions_page" class="bpm_admin_extensions_page">';
            if($bpm_products){
                $prod_type = 'Templates';

                if(isset($_REQUEST['bpm_prod_type'])){
                    $prod_type = $_REQUEST['bpm_prod_type'];
                }else{
                    $prod_type = 'Workspace Suites';
                }

                $bpm_catagory_selected_class = '';

                $header_line = '<div class="bpm_product_selection_menu">';
                if($prod_type == 'all') $bpm_catagory_selected_class = 'bpm_product_catagory_link_selected';
                $header_line .= '<span class="bpm_product_catagory"><a class="bpm_product_catagory_link '.$bpm_catagory_selected_class.'" href="admin.php?page=bpm_extensions_options&bpm_prod_type=all">All</a></span>';
                $header_items = array();
                for($x=0;$x<sizeof($bpm_products);$x++){
                    if( ! isset($header_items[$bpm_products[$x]['prod_type']])) {
                        $header_items[$bpm_products[$x]['prod_type']] = 1;
                        $bpm_product_type_name = $bpm_products[$x]['prod_type'];
                        if($bpm_products[$x]['prod_type'] == 'Templates') $bpm_product_type_name = 'Workspace Suites';
                        $bpm_catagory_selected_class = '';
                        if(strtolower($bpm_products[$x]['prod_type']) == strtolower($prod_type)) $bpm_catagory_selected_class = 'bpm_product_catagory_link_selected';
                         $header_line .= '<span class="bpm_product_catagory"><a class="bpm_product_catagory_link '.$bpm_catagory_selected_class.'" href="admin.php?page=bpm_extensions_options&bpm_prod_type=' . $bpm_products[$x]['prod_type'] . '">' . $bpm_product_type_name . '</a></span>';
                    }
                }
                //todo: add search box
//                $header_line .= '<div style="float:right;width:10em;border:solid 1px black;margin-right:2em;">&nbsp;</div>';
                $header_line .= '</div>';

                echo $header_line;

                $display_array = array();
                for($x=0;$x<sizeof($bpm_products);$x++){
                    if( ! isset($display_array[$bpm_products[$x]['product_id']])) {
                        $display_array[$bpm_products[$x]['product_id']] = 1;
                        if (strtolower($bpm_products[$x]['prod_type']) == strtolower($prod_type) || $prod_type == 'all') echo $this->bpm_create_product_badge($bpm_products[$x]);
                    }
                }
            }

            echo '</div>';
        }

        function bpm_create_product_badge($product_info )
        {

            //determine button action
            $button_action = 'Activate';
            $can_activate = 0;
            $can_manage = 0;
            $can_update = 0;
            $account_list = array();
            if ($product_info['installs_allowed'] > 0 && !isset($product_info['accounts']) && $product_info['installs_allowed']) {
                $can_activate = 1;
            }
            if ($product_info['installs_allowed'] > 0 && isset($product_info['accounts']) && $product_info['installs_allowed']) {
                $can_manage = 1;
            }
            if ($product_info['prod_price'] > 0) $button_action = 'Buy';
            if (isset($product_info['can_update'])) $can_update = $product_info['can_update'];

            if(isset($product_info['accounts'])) {
                for ($x = 0; $x < sizeof($product_info['accounts']); $x++) {
                    $account_list[$product_info['accounts'][$x]['account_id']] = 1;
                }
            }

            if($can_activate)   $button_action = 'Activate';
            if($can_manage)     $button_action = 'Manage';
            if(($can_activate || $can_manage) && $can_update) $button_action = 'Update';

            $html_line =  '<div id="bpm_product_badge_'.$product_info['product_id'].'" class="bpm_product_badge_holder">';

            $html_line .= '<div id="bpm_product_badge_icon_'.$product_info['product_id'].'" class="bpm_product_badge_icon_holder">';
            $html_line .= '<span class="bpm_product_badge_icon fa '.$product_info['product_image'].' fa-5x">&nbsp;</span>';
            $html_line .= '</div>';

            $html_line .= '<div id="bpm_product_name_'.$product_info['product_id'].'" class="bpm_product_name_holder">';
            $html_line .= $product_info['product_name'];
            $html_line .= '</div>';

            $bpm_price = 'Free';
            if($product_info['prod_price'] > 0){
                $bpm_period = ' per month';
                if($product_info['bill_period']=='Annual') $bpm_period = ' per year';
                $bpm_price = '$'.number_format($product_info['prod_price'],0,".",",") . $bpm_period;
            }

            $html_line .= '<div id="bpm_product_status_'.$product_info['product_id'].'" class="bpm_product_status_holder">';
            $html_line .= $bpm_price;
            $html_line .= '</div>';

            $html_line .= '<div id="bpm_product_short_desc_'.$product_info['product_id'].'" class="bpm_product_short_desc_holder">';
            $html_line .= $product_info['short_desc'];
            $html_line .= '</div>';

            global $bpm_server_info;
            $bpm_web_id = 0;
            $bpm_web_slug = '';

            if(isset($product_info['product_web_id']))   $bpm_web_id = $product_info['product_web_id'];
            if(isset($product_info['product_web_slug'])) $bpm_web_slug = $product_info['product_web_slug'];

            //add buy button

            $html_line .= '<div id="bpm_product_action_'.$product_info['product_id'].'" class="bpm_product_action_button_holder">';
            $html_line .= '<div id="bpm_product_action_button_'.$product_info['product_id'].'" data-webid="'.$bpm_web_id.'" data-action="'.$button_action.'" data-installs="'.$product_info['installs_allowed'].'" data-prod_id="'.$product_info['product_id'] .'" data-mktsite="'.$bpm_server_info['bpm_marketing'].'" class="bpm_product_action_button bpm-hide">';
            $html_line .= $button_action;
            $html_line .= '</div>';

            //add more information button
            $html_line .= '<div id="bpm_product_more_info_button_'.$product_info['product_id'].'" data-webslug="'.$bpm_web_slug.'" data-mktsite="'.$bpm_server_info['bpm_marketing'].'" class="bpm_product_more_info_button">More Info</div>';

            $html_line .= '</div>';

            $html_line .= '</div>'; // end of badge div

            //create manage div
            if( $button_action != 'Buy'){

                global $current_user;
                $user_id = $current_user->ID;
                $admins = get_option('bpm_i_am_admin');
                if( ! $admins ) $admins = array();
                $my_accounts = array();
                if(isset($admins[$user_id])) $my_accounts = $admins[$user_id];


                $html_line .= '<div class="bpm_extension_manager_holder bpm-hide" id="bpm_extension_manager_'.$product_info['product_id'].'" >';

                $html_line .= '<div class="bpm_extension_manager_title">'. $product_info['product_name'].'</div>';

                $installs_message = '';
                if($product_info['installs_allowed'] < 100){
                    $installs_message = 'Click up to '.$product_info['installs_allowed'].' accounts to activate and install.';
                }
                $html_line .= '<div class="bpm_extension_installs_message">Click the checkbox to activate workspace suites in your account. '.$installs_message.'</div>';

                $html_line .= '<div class="bpm_ext_act_list"><table style="width:80%;margin:2em;">';
                for($x=0;$x<sizeof($my_accounts);$x++){
                    $checked = '';
                    if(isset($account_list[$my_accounts[$x]['account_id']])) $checked = 'checked';
                    $html_line .= '<tr class="bpm_extension_manager_row"><td>' . $my_accounts[$x]['name'] . '</td><td style="text-align:right"><input type="checkbox" data-ischecked="'.$checked.'"  data-prod_id="'.$product_info['product_id'] .'" class="bpm_extension_manager_acct_checkbox bpm_extension_manager_acct_'.$product_info['product_id'].'" id="bpm_extension_manager_acct_'.$product_info['product_id'].'_'.$my_accounts[$x]['account_id'].'" value="'.$my_accounts[$x]['account_id'].'" '.$checked.'></td></tr>';
                }
                $html_line .= '</table></div>';

                $html_line .= '<div class="bpm_product_action_button_holder">';
                $html_line .= '<div data-webid="'.$bpm_web_id.'" data-prod_id="'.$product_info['product_id'] .'" class="bpm_product_manager_cancel_button">';
                $html_line .= 'Cancel';
                $html_line .= '</div>';
                $html_line .= '<div data-webid="'.$bpm_web_id.'" data-prod_id="'.$product_info['product_id'] .'" class="bpm_product_manager_save_button">';
                $html_line .= 'Save';
                $html_line .= '</div>';
                $html_line .= '<div id="bpm_extension_manager_acct_alert_message_'.$product_info['product_id'] .'" class="bpm_extension_manager_acct_alert_message bpm-hide">You have already selected the maximum number of installs.</div>';
                $html_line .= '</div>';
                $html_line .= '<div id="bpm_extension_manager_overlay_'.$product_info['product_id'].'" class="bpm-admin-overlay bpm-hide"><div class="bpm-admin-activity" ><span class="fa fa-spinner fa-spin" >&nbsp;</span></div></div>';
                $html_line .= '</div>';

            }

            return $html_line;
        }

        function bpm_options_do_new_acct_page(){

            $bpm_html = new bpmcontext_sdk_html_manager();
            echo $bpm_html->bpm_sdk_get_html_new_account_page();

//            $this->bpm_set_dashboard_page();

        }

        function bpm_debug_reset(){

            delete_option('bpm_has_account');

        }
        // Sanitize and validate input. Accepts an array, return a sanitized array.
        function bpm_options_validate($input) {

            $theme = wp_get_theme();
            $theme_name = str_replace(' ', '_', strtolower($theme->get( 'Name' )));

            if(isset($input['custom_css_'.$theme_name])) $input['login_button_name']  =  wp_filter_nohtml_kses($input['custom_css_'.$theme_name]);

            return $input;
        }

        function bpm_options_do_page() {

            if($this->bpm_is_my_admin_page() ) {

                //setup html
                $bpm_html = new bpmcontext_sdk_html_manager();
                $html_string = $bpm_html->bpm_get_htmladmin();

                echo '<div id="bpm_settings">';
                settings_fields('bpm_options_options');
                echo '</div>';

                echo $html_string;
            }

        }

        function bpm_update_dev_code(){
            if($_REQUEST['dev_code']){
                update_option('bpm_dev_code', $_REQUEST['dev_code']);
            }
        }

        function bpm_clear_theme_css(){

            delete_option('bpm_site_options');

        }

        function bpm_update_login_header(){

            if($_REQUEST['value'] == 'yes') update_option('bpm_show_login_header' , 'checked' );
            if($_REQUEST['value'] == 'no')  update_option('bpm_show_login_header' , 'no' );

        }

        function bpm_update_theme_template(){

            $page_array = $this->bpm_find_shortcode('BPMContext_Content');

            if(!$page_array){

                $url = wp_get_referer();
                $page_array[] = url_to_postid( $url );

            }

            if($page_array) {
                for ($x = 0; $x < sizeof($page_array); $x++) {
                    update_post_meta( $page_array[$x], '_wp_page_template', $_POST['page'] );
                }
            }
        }

        function bpm_update_display_wizard(){

            if($_POST['data'] == 1) {
                add_option('bpm_display_wizard', '1', null, 'no');
            }else {
                $options = get_option('bpm_display_wizard');

                if ($options) {
                    delete_option('bpm_display_wizard');
                } else {
                    add_option('bpm_display_wizard', '1', null, 'no');
                }
            }
        }

        function bpm_update_theme_css(){

            $theme = wp_get_theme();
            $theme_name = str_replace(' ', '_', strtolower($theme->get( 'Name' )));

            $update = 0;

            $options = get_option('bpm_site_options');
            $lock_themes = get_option('bpm_site_locked_options');
            if($options) $update = 1;

            $lock_themes[$theme_name] = $theme_name;

            $options['custom_css_' . $theme_name] = $_REQUEST['bpm_site_options']['custom_css_' . $theme_name];

            if($update){
                update_option('bpm_site_options', $options);
            }else{
                add_option('bpm_site_options', $options);
            }

            update_option('bpm_site_locked_options' , $lock_themes);

        }

        function bpm_remote_update_theme_css($theme_info_array){

            $options = get_option('bpm_site_options');
            $lock_themes = get_option('bpm_site_locked_options');

            for($x=0;$x<sizeof($theme_info_array);$x++) {

                $theme_name = $theme_info_array[$x]['name'];

                if( ! $lock_themes[$theme_name]) {

                    $options['custom_css_' . $theme_name] = $theme_info_array[$x]['css'];

                }
            }

            update_option('bpm_site_options', $options);
        }


        function bpm_deregister_scripts(){

            wp_deregister_script('js_bpmcontext_content_page');

        }

        function bpm_register_scripts(){

            $current_page =  get_the_ID();

            $page_array = $this->bpm_find_shortcode('BPMContext_Content');

            global $bpm_server_info;

            if(($page_array && in_array($current_page, $page_array)) ||  $this->bpm_is_my_admin_page()) {

                wp_register_script('modernizer',                  plugins_url( 'js/vendor/modernizr.js', __FILE__ ) , array(), '2.7.1', true);
                wp_register_script('foundation',                  plugins_url( 'js/foundation.min.js', __FILE__ ), array(), '5.1.1', true);
                wp_register_script('foundation-joyride',          plugins_url( 'js/foundation/foundation.joyride.js', __FILE__ ), array(), '5.1.9', true);
                wp_register_script('tree_table',                  plugins_url( 'js/jquery.treetable.js', __FILE__ ), array(), '4.2.4', true);
                wp_register_script('dropzone',                    plugins_url( 'js/dropzone.js', __FILE__ ), array(), '4.2.4', true);
                wp_register_script('moment',                      plugins_url( 'js/moment.min.js', __FILE__ ), array(), '4.2.4', true);
                wp_register_script('fullcalendar',                plugins_url( 'js/fullcalendar.min.js', __FILE__ ), array(), '4.2.4', true);
                wp_register_script('timepicker',                  plugins_url( 'js/jquery.datetimepicker.min.js', __FILE__ ), array(), '4.2.4', true);
                wp_register_script('tinymce_text',                plugins_url( 'js/tinymce/tinymce.min.js', __FILE__ ), array(), '4.2.4', true);
                wp_register_script('img_picker',                  plugins_url( 'js/image-picker.min.js', __FILE__ ), array(), '4.2.4', true);
                wp_register_script('text_fill',                   plugins_url( 'js/textfill.min.js', __FILE__ ), array(), '4.2.4', true);
                wp_register_script('debounce',                    plugins_url( 'js/debounce.js', __FILE__ ), array(), '4.2.4', true);
                wp_register_script('qtip',                        plugins_url( 'js/qtip.jquery.min.js', __FILE__ ), array(), '4.2.4', true);
                wp_register_script('jquery_touch',                plugins_url( 'js/jquery.touch.min.js', __FILE__ ), array(), '4.2.4', true);
                wp_register_script('js_bpmcontext',               plugins_url( 'js/bpmcontext.js', __FILE__ ), array(), $bpm_server_info['bpm_file_version'], true);
                wp_register_script('js_bpmcontext_admin',         plugins_url( 'js/bpmcontext_admin.js', __FILE__ ), array(), $bpm_server_info['bpm_file_version'], true);

                wp_register_style('normalize',                    plugins_url( "css/normalize.css", __FILE__ ), array(), '5.1.1', 'screen');
                wp_register_style('foundation',                   plugins_url( "css/foundation.css", __FILE__ ), array(), '5.1.1', 'screen');
                wp_register_style('icons',                        plugins_url( "css/foundation-icons.css", __FILE__ ), array(), '3.0.0', 'screen');
                wp_register_style('tree_table',                   plugins_url( "css/treetable/jquery.treetable.css", __FILE__ ), array(), '3.2.1', 'screen');
                wp_register_style('tree_table_theme',             plugins_url( "css/treetable/jquery.treetable.theme.default.css", __FILE__ ), array(), '3.2.1', 'screen');
                wp_register_style('font-awesome',                 plugins_url( 'css/font-awesome.min.css', __FILE__ ), array(), '4.6', 'screen');
                wp_register_style('dropzone',                     plugins_url( "css/dropzone.css", __FILE__ ), array(), '1.0.0', 'screen');
                wp_register_style('fullcalendar-css',             plugins_url( "css/fullcalendar.min.css", __FILE__ ), array(), '1.0.0', 'screen');
                wp_register_style('timepicker-css',               plugins_url( "css/jquery.datetimepicker.css", __FILE__ ), array(), '1.0.0', 'screen');
                wp_register_style('qtip-css',                     plugins_url( "css/qtip.jquery.min.css", __FILE__ ), array(), '1.0.0', 'screen');
                wp_register_style('img_picker',                   plugins_url( "css/image-picker.css", __FILE__ ), array(), '1.0.0', 'screen');
                wp_register_style('css_bpmcontext',               plugins_url( 'css/bpmcontext.css', __FILE__ ), array(), $bpm_server_info['bpm_file_version'], 'screen');
                wp_register_style('img_picker',                   plugins_url( "css/image-picker.css", __FILE__ ), array(), '1.0.0', 'screen');

            }

            $page_array = $this->bpm_find_shortcode('BPMContext_Content');

            if( ! sizeof($page_array)){
                $this->bpm_set_dashboard_page();
            }

            if($page_array && in_array($current_page, $page_array) && !is_admin()) {

                //apply theme specific styles
                $theme = wp_get_theme();
                $theme_name = str_replace(' ', '_', strtolower($theme->get( 'Name' )));

                if( file_exists(plugin_dir_path(__FILE__) . 'css/theme_styles/developer_theme.css') ) {
                    wp_register_style('css_bpmcontext_fullwidth', plugins_url( 'css/theme_styles/developer_theme.css', __FILE__ ));
                }else if( file_exists(plugin_dir_path(__FILE__) . 'css/theme_styles/'.$theme_name.'.css') ){
                    wp_register_style('css_bpmcontext_fullwidth', plugins_url('css/theme_styles/'.$theme_name.'.css', __FILE__ ));
                }else{
                    wp_register_style('css_bpmcontext_fullwidth', plugins_url('css/theme_styles/bpmcontext_fullwidth.css', __FILE__ ));
                }

                wp_enqueue_script(array(  'modernizer', 'foundation', 'tree_table', 'tinymce_text', 'img_picker', 'text_fill', 'masonry','debounce', 'qtip' ,'js_bpmcontext', 'foundation-joyride', 'jquery-ui-datepicker', 'jquery-ui-autocomplete', 'jquery-ui-widget', 'jquery-ui-sortable', 'jquery-ui-draggable', 'dropzone','jquery_touch' , 'timepicker' , 'moment', 'fullcalendar'));

                //apply theme specific styles
                $theme = wp_get_theme();
                $theme_name = str_replace(' ', '_', strtolower($theme->get( 'Name' )));

                $options = get_option('bpm_site_options');

                if(isset($options['custom_css_'.$theme_name])) {
                    $custom_css = $options['custom_css_'.$theme_name];
                    wp_add_inline_style('css_bpmcontext', $custom_css);
                }

                wp_enqueue_style(array( 'normalize', 'css_bpmcontext', 'foundation', 'icons', 'tree_table', 'tree_table_theme', 'font-awesome', 'dropzone', 'timepicker-css',  'img_picker', 'qtip-css', 'css_bpmcontext_theme_mods', 'css_bpmcontext_fullwidth' , 'fullcalendar-css'));

                $admin_bar = 0;
                if (is_admin_bar_showing()) {
                    //add space for header bar
                    $admin_bar = 1;
                }

                $template_names = array();
                $curLang = substr(get_bloginfo('language'), 0, 2);

                if (!$curLang) $curLang = 'en';

                $theme = wp_get_theme();
                $theme_name = str_replace(' ', '_', strtolower($theme->get('Name')));

                $templates = wp_get_theme()->get_page_templates();

                $has_full_width = 0;
                if($templates) {
                    foreach ($templates as $template_name => $template_filename) {
                        $template_names[] = array('name' => $template_filename, 'file' => $template_name);
                        if (stristr($template_name, 'full') && stristr($template_name, 'width')) {
                            $has_full_width = 1;
                        }
                    }
                }

                $using_full_width = 0;
                $template_name = get_page_template();
                if (stristr($template_name, 'full') && stristr($template_name, 'width')) {
                    $using_full_width = 1;
                }

                $options = get_option('bpm_has_account');

                $has_logged_in = 0;
                if ($options) $has_logged_in = 1;

                $options = get_option('bpm_display_wizard');
                $display_wizard = 1;
                if ($options) $display_wizard = 0;

                $wp_admin = 0;
                if(current_user_can( 'edit_others_posts' )){
                    $wp_admin  = 1;
                }else{
                    $display_wizard = 0;
                }

                $login_url = '';

                $page_array = $this->bpm_find_shortcode('BPMContext_Content');
                if ($page_array) {
                    $the_page = $page_array[0];
                    $login_url = get_page_link($the_page);
                }

                $params = array(
                    'images_dir' => plugins_url() . '/bpmcontext/images/',
                    'html_dir' => plugins_url() . '/bpmcontext/html/',
                    'css_dir' => plugins_url() . '/bpmcontext/css/',
                    'plugin_url' => plugins_url(),
                    'admin_bar' => $admin_bar,
                    'current_theme' => $theme_name,
                    'has_logged_in' => $has_logged_in,
                    'language' => $curLang,
                    'has_full_width' => $has_full_width,
                    'using_full_width' => $using_full_width,
                    'display_wizard' => $display_wizard,
                    'bpm_server' => $bpm_server_info['bpm_server'],
                    'bpm_api' => $bpm_server_info['bpm_api'],
                    'wp_admin' => $wp_admin,
                    'on_navigation' => $this->bpm_is_on_menu(),
                    'login_url' => $login_url,
                    'current_site' => $this->bpm_get_current_site()
                );

                $params['ajaxurl'] = admin_url('admin-ajax.php');

                if (current_user_can('manage_options')) {
                    ob_start();
                    edit_post_link('Edit this Post');
                    $outstring = ob_get_contents();
                    ob_end_clean();
                    $params['edit_post'] = $outstring;
                }

                //add right boxes
                global $bpm_right_boxes;
                $params['right_boxes'] = $bpm_right_boxes;

                global $bpm_workspace_widgets;
                $params['custom_sections'] = $bpm_workspace_widgets;

                //add homepage widets
                global $bpm_home_page_widgets;
                $params['home_page'] = $bpm_home_page_widgets;

                $dev_code_options = get_option('bpm_dev_code');
                if($dev_code_options){
                    $params['dev_code'] = $dev_code_options;
                }else{
                    $params['dev_code'] = null;
                }

                global $bpm_site_type_token;
                $params['site_token'] = $bpm_site_type_token;

                global $bpm_solution_sets;
                if($bpm_solution_sets) {
                    foreach ($bpm_solution_sets as $index => $value) {
                        $params['bpm_installed'][] = $index;
                        if (!get_option('bpm_installed_'.$index)) {
                            $params['load_solutions'][] = $value;
                        }
                    }
                }

                wp_localize_script('js_bpmcontext', 'bpm_sdk_params', $params);

                wp_localize_script('js_bpmcontext', 'bpm_params_templates', $template_names);

                $bpm_trans_array = bpm_sdk_get_trans_array();
                wp_localize_script('js_bpmcontext', 'bpm_trans_array', $bpm_trans_array);

            }else if( $this->bpm_is_my_admin_page()){

               wp_enqueue_style(array( 'icons', 'css_bpmcontext', 'font-awesome', 'qtip-css'));
               $custom_css = "
                        .wp-submenu{
                                margin-left: 0 !important;
                        }";
               wp_add_inline_style('css_bpmcontext', $custom_css);

               wp_enqueue_script(array( 'modernizer', 'foundation', 'js_bpmcontext', 'js_bpmcontext_admin',  'debounce', 'qtip',  'jquery-ui-draggable', 'jquery_touch'));

            }elseif(!is_admin()){

                wp_register_script('js_bpmcontext_menu_header',  plugins_url( 'js/bpmcontext_missing_menu.js', __FILE__ ), array(), $bpm_server_info['bpm_file_version'], true);
                wp_register_style('css_bpmcontext_missing_menu', plugins_url( 'css/bpmcontext_missing_menu.css', __FILE__ ), array(), $bpm_server_info['bpm_file_version'], 'screen');

                if( wp_get_theme() == 'Twenty Sixteen') {
                    $custom_css = ".bpm_menu_notice{margin-top:1em;}";
                    wp_add_inline_style('css_bpmcontext_missing_menu', $custom_css);
                }
                wp_enqueue_style(array( 'css_bpmcontext_missing_menu' ));


                $login_url = '';
                $page_array = $this->bpm_find_shortcode('BPMContext_Content');
                if ($page_array) {
                    $the_page = $page_array[0];
                    $login_url = get_page_link($the_page);
                }

                $options = get_option('bpm_show_login_header');

                $on_menu = $this->bpm_is_on_menu();

                if($options){
                   if($options == 'checked'){
                       $on_menu = 0;
                   }else{
                       $on_menu = 1;
                   }
                }

                $admin_bar = 0;
                if (is_admin_bar_showing()) {
                    //add space for header bar
                    $admin_bar = 1;
                }

                $params = array('on_navigation' => $on_menu,
                                'admin_menu_bar' => $admin_bar,
                                'login_url' => $login_url );

                wp_enqueue_script(array( 'js_bpmcontext_menu_header' ));
                wp_localize_script('js_bpmcontext_menu_header', 'bpm_menu_params', $params);

            }
}

        function bpm_load_textdomain()
        {
            load_plugin_textdomain('bpmcontext', false, dirname(plugin_basename(__FILE__)) . '/languages');
        }

        //add features to page if shortcode is present
        function bpm_shortcode_handler()
        {

            $bpm_html = new bpmcontext_sdk_html_manager();
            $html_string = $bpm_html->bpm_sdk_get_html_main();
            if (is_array($html_string) && !is_wp_error($html_string)) {
                $html_string = $html_string['body'];
            }

            return $html_string;

        }

        function bpm_enqueue_scripts_admin(){

            if( $this->bpm_is_my_admin_page()) {

                $login_url = '';
                $page_array = $this->bpm_find_shortcode('BPMContext_Content');
                if ($page_array) {
                   $the_page = $page_array[0];
                   $login_url = get_page_link($the_page);

                }
                $templates = wp_get_theme()->get_page_templates();

                $has_full_width = 0;

                $template_names = array();

                if($templates) {
                    foreach ($templates as $template_name => $template_filename) {
                        $template_names[] = array('name' => $template_filename, 'file' => $template_name);
                        if (stristr($template_name, 'full') && stristr($template_name, 'width')) {
                            $has_full_width = 1;
                        }
                    }
                }

                $options = get_option('bpm_has_account');

                $has_logged_in = 0;

                if ($options) $has_logged_in = 1;

                $contact_tab = 0;
                $current_tab = isset($_GET['tab']) ? $_GET['tab'] : 'bpm_tab_general';
                if ($current_tab == 'bpm_tab_contact') $contact_tab = 1;

                $options = get_option('bpm_display_wizard');
                $display_wizard = 1;
                if ($options) $display_wizard = 0;

                $wp_admin = 0;
                if(current_user_can( 'edit_others_posts' )) $wp_admin  = 1;

                global $bpm_server_info;

                $theme = wp_get_theme();
                $theme_name = str_replace(' ', '_', strtolower($theme->get('Name')));

                $curLang = substr(get_bloginfo('language'), 0, 2);

                if (!$curLang) $curLang = 'en';

                $admin_page = '';
                if(isset($_REQUEST['page'])) $admin_page = $_REQUEST['page'];

                $params = array(
                   'images_dir' => plugins_url() . '/bpmcontext/images/',
                   'html_dir' => plugins_url() . '/bpmcontext/html/',
                   'css_dir' => plugins_url() . '/bpmcontext/css/',
                   'plugin_url' => plugins_url() . '/bpmcontext',
                   'login_url' => $login_url,
                   'has_logged_in' => $has_logged_in,
                   'has_full_width' => $has_full_width,
                   'current_theme' => $theme_name,
                   'language' => $curLang,
                   'admin_page' => $admin_page,
                   'bpm_server' => $bpm_server_info['bpm_server'],
                   'bpm_api' => $bpm_server_info['bpm_api'],
                   'admin_tab' => $contact_tab,
                   'display_wizard' => $display_wizard,
                   'wp_admin' => $wp_admin,
                   'current_site' => $this->bpm_get_current_site()
                );

                $dev_code_options = get_option('bpm_dev_code');
                if($dev_code_options){
                    $params['dev_code'] = $dev_code_options;
                }else{
                    $params['dev_code'] = null;
                }

                global $bpm_site_type_token;
                $params['site_token'] = $bpm_site_type_token;

                $params['ajaxurl'] = admin_url('admin-ajax.php');

                $bpm_trans_array = bpm_sdk_get_trans_array();
                wp_localize_script('js_bpmcontext', 'bpm_sdk_trans_array', $bpm_trans_array);

                wp_localize_script( 'js_bpmcontext', 'bpm_sdk_params_templates', $template_names );

                wp_localize_script('js_bpmcontext', 'bpm_sdk_params', $params);

            }
        }

        function bpm_find_shortcode($string , $do_it_anyway = false) {

            if($do_it_anyway) {
                //continue
            }else{
//                if( (is_admin() && ! $this->bpm_is_my_admin_page())) return;
            }


            if ( !is_search () ) {
                remove_filter('the_posts', 'relevanssi_query');
                remove_filter('posts_request', 'relevanssi_prevent_default_request');
                remove_filter('query_vars', 'relevanssi_query_vars');
            }

            // replace get_pages with get_posts
            // if you want to search in posts
            $pages = get_pages();
            $found_codes = array();

            if($pages) {
                foreach ($pages as $page) {
                    if (has_shortcode($page->post_content, $string)) {
                        $found_codes[$page->ID] = $page->ID;
                    }
                }
            }

            // if you want to search in posts
            $pages = get_pages();

            foreach($pages as $page) {
                if(has_shortcode($page->post_content, $string)) {
                    $found_codes[$page->ID] = $page->ID;
                }
            }

            $hold_codes = array();
            foreach($found_codes as $value){
                $hold_codes[] = $value;
            }

            return $hold_codes;

        }

        function bpm_get_current_site(){

            $current_site = 0;

            if (function_exists('get_current_site')) {
                $current_site = get_current_site();
                $current_site = $current_site->id;
            }

            return $current_site;
        }

        function bpm_is_on_menu($do_it_anyway = false){

            $page_array = $this->bpm_find_shortcode('BPMContext_Content' , $do_it_anyway);

            if( ! $page_array) return false;

            $locations = get_nav_menu_locations();
            $menu_array = array();

            if($locations) {
                foreach ($locations as $location => $description) {

                    $menu_items = wp_get_nav_menu_items($description);
                    if ($menu_items) {
                        foreach ($menu_items as $menu_item) {
                            $menu_array[$menu_item->object_id] = $menu_item->object_id;
                        }
                    }
                }
            }

            for($x=0;$x<sizeof($page_array);$x++){
                if(isset($menu_array[$page_array[$x]])) return true;
            }

            return false;
        }

        function bpm_set_dashboard_page(){

            $on_menu = $this->bpm_is_on_menu(true);
            $new_template_slug = '';

            $page_array = $this->bpm_find_shortcode('BPMContext_Content');

            $the_page_id = null;

            if( sizeof($page_array) > 0){
                $the_page_id = $page_array[0];
            }

            if ( ! $on_menu ) {

                if($the_page_id < 1) {

                    $templates = wp_get_theme()->get_page_templates();
                    if ($templates) {
                        foreach ($templates as $template_name => $template_filename) {
                            if (stristr($template_name, 'full') && stristr($template_name, 'width')) {
                                $new_template_slug = $template_name;
                            }
                        }
                    }

                    $_p = array();
                    $_p['post_name'] = 'bpmcontext-dashboard';
                    $_p['post_content'] = "[BPMContext_Content]";
                    $_p['post_status'] = 'publish';
                    $_p['post_type'] = 'page';
                    $_p['comment_status'] = 'closed';
                    $_p['ping_status'] = 'closed';
                    $_p['post_title'] = 'Dashboard';
                    if ($new_template_slug) {
                        $_p['page_template'] = $new_template_slug;
                    }
                    $_p['post_category'] = array(1);

                    $the_page_id = wp_insert_post($_p);
                }

                $locations = get_theme_mods('nav_menu_locations');

                if($locations) {
                    $menu = wp_get_nav_menu_object(reset($locations));
                    if ($menu) {
                        $menu_item_data = array(
                            'menu-item-object-id' => $the_page_id,
                            'menu-item-parent-id' => 0,
                            'menu-item-position' => 0,
                            'menu-item-title' => 'Dashboard',
                            'menu-item-object' => 'page',
                            'menu-item-type' => 'post_type',
                            'menu-item-status' => 'publish'
                        );
                        wp_update_nav_menu_item($menu->term_id, 0, $menu_item_data);
                    }
                }
            }
        }

        function bpm_health_check(){

            $update_status = array('status' => 'Standing By');

            wp_send_json( $update_status );
            die();
        }


    }//end of bpmcontext class
}//end of check for class exists
