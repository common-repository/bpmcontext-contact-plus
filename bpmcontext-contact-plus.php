<?php
/*
  Plugin Name: BPMContext - Contact Plus
  Plugin URI: https://bpmcontext.com
  Description: Contact Plus for BPMContext provides a complete inquiry management solution in WordPress using your existing contact form plugins
  Version: 3.1.9
  Author: BPMContext
  Author URI: https://bpmcontext.com
  License: GPLv2+ or later
  Text Domain: bpmcontext-form
*/

global $bpm_sdk_version , $bpm_server_info;

$bpm_server_info['bpm_marketing']   = 'bpmcontext.com';
$bpm_this_sdk_version = 319;

if( $bpm_this_sdk_version > $bpm_sdk_version ) {
    $bpm_sdk_version = $bpm_this_sdk_version;
    $bpm_server_info['bpm_server']      = 'bpm.bpmcontext.com';
    $bpm_server_info['bpm_api']         = 'api_v3_1_9';
}

update_option('bpmcontext-contact-plus-sdk',$bpm_this_sdk_version);

add_action('admin_init', 'bpm_form_load_sdk' , 1 );
add_action('init', 'bpm_form_load_sdk' , 1 );

function bpm_form_load_sdk(){

    if ( ! function_exists( 'get_plugins' ) ) {
        require_once ABSPATH . 'wp-admin/includes/plugin.php';
    }

    $plugins = get_plugins();

    if( is_plugin_active( 'bpmcontext/bpmcontext.php' ) ) {
        if (isset($plugins['bpmcontext/bpmcontext.php'])) {
            $version = $plugins['bpmcontext/bpmcontext.php']['Version'];
            $version = explode('.',$version);

            if($version[0] < 3){
                //add message to the user
                deactivate_plugins('bpmcontext/bpmcontext.php');

                if( ! function_exists('bpm_add_to_allowed_plugins')) {
                    add_action( "bpmcontext_add_to_allowed_plugins", "bpm_add_to_allowed_plugins" );
                    function bpm_add_to_allowed_plugins($plugin_array){
                            return true;
                    }
                }
            }
        }
    }

    global $bpm_sdk_version, $bpm_sdk;

    $bpm_this_sdk_version = get_option('bpmcontext-contact-plus-sdk');

    if($bpm_this_sdk_version >=  $bpm_sdk_version) {

        require_once 'includes/bpm-sdk/start.php';

        if( ! $bpm_sdk ) {

            $bpm_sdk = new bpmcontext_sdk_manager();
            $bpm_sdk->bpm_load_actions();
        }

    }

}

require_once 'includes/bpmcontext-form-grid-list-class.php';
require_once 'includes/bpmcontext-form-grid-list-plugins.php';
require_once 'includes/bpmcontext-form-grid-list-features.php';
require_once 'includes/bpmcontext-form-grid-list-activity.php';
require_once 'includes/bpmcontext-form-handler-functions.php';
require_once 'includes/bpmcontext-form-manager-class.php';
require_once 'includes/bpmcontext_contact_form_handler.php';
require_once 'includes/bpmcontext_contact_us.php';

if( ! isset($allowed_plugins_array) ) $allowed_plugins_array = array();

/**
 * start of bpomcontext sdk setup
 */
global $bpm_solution_sets;
$bpm_solution_sets['contact_plus'] = 8;

global $bpm_plugin_name;
$bpm_plugin_name = 'Contact Plus';

global $bpm_workspace_widgets;
$bpm_workspace_widgets[] = array( 'position' => 1, 'icon' => 'fa fa-paper-plane-o' , 'name' => 'Manage Inquiry', 'callback' => 'bpmcontext_context_plus.bpm_load_contact_inquiry_manager', 'id' => 'bpm_load_contact_inquiry_manager', 'title' => 'Manage Inquiry', 'width' => 2, 'height' => '60em', 'template_library_id' => 157, 'domain'=> null);
$bpm_workspace_widgets[] = array( 'position' => 1, 'icon' => 'fa fa-paper-plane-o' , 'name' => 'Manage Inquiry', 'callback' => 'bpmcontext_context_plus.bpm_load_contact_inquiry_manager', 'id' => 'bpm_load_contact_inquiry_manager', 'title' => 'Manage Inquiry', 'width' => 2, 'height' => '60em', 'template_library_id' => 164, 'domain'=> null);

$bpm_workspace_widgets[] = array( 'position' => 1, 'icon' => 'fa fa-envelope-o' , 'name' => 'Inquiry Emails', 'callback' => 'bpmcontext_context_plus.bpm_load_contact_inquiry_manager_emals', 'id' => 'bpm_load_contact_inquiry_manager_emails', 'title' => 'Inquiry Emails', 'width' => 2, 'height' => '60em', 'template_library_id' => 157, 'domain'=> null);

global $bpm_right_boxes;
$bpm_right_boxes['event_data']  = array('name'=>'event_data');
$bpm_right_boxes['contactform'] = array('name'=>'contactform');
$bpm_right_boxes['infobox']     = array('name'=>'infobox');
$bpm_right_boxes['tutorial']    = array('name'=>'tutorial');
$bpm_right_boxes['cust_supp']   = array('name'=>'cust_supp');
$bpm_right_boxes['subscribers'] = array('name'=>'subscribers');
$bpm_right_boxes['history']     = array('name'=>'history');
$bpm_right_boxes['sharing']     = array('name'=>'sharing');
$bpm_right_boxes['changelog']   = array('name'=>'changelog');

global $bpm_home_page_widgets;
$bpm_home_page_widgets['promoted'] = array('name'=>'promoted', 'title' => 'Newsfeed');
$bpm_home_page_widgets['custom'][] = array('name'=>'custom' , 'callback'=>'bpmcontext_context_plus.bpm_contact_form_get_map_widget', 'id'=>'bpm_homepage_form_map', 'title'=>'Contact Form Map for All Inquiries', 'width'=>2);
$bpm_home_page_widgets['calendar']      = array('name'=>'calendar', 'title' => 'Calendar');
$bpm_home_page_widgets['directory']     = array('name'=>'directory', 'width'=>2, 'title'=>'Directory');
$bpm_home_page_widgets['recent'] = array('name'=>'recent', 'width'=>1, 'title'=>'Recent Changes');
$bpm_home_page_widgets['notifications'] = array('name'=>'notifications', 'width'=>1 , 'title'=>'Notifications');
$bpm_home_page_widgets['bookmarks'] = array('name'=>'bookmarks', 'width'=>1 , 'title' => 'Bookmarks');
$bpm_home_page_widgets['subscriptions'] = array('name'=>'subscriptions', 'width'=>1 , 'title'=>'Subscriptions');
$bpm_home_page_widgets['myhistory'] = array('name'=>'myhistory', 'width'=>1, 'title'=>'My History');

global $bpm_site_type_token;
$bpm_site_type_token = 'jhdfj-b43f-878390a1d9ca0';


global $bpm_left_menu;

global $bpm_onboarding;

//$bpm_onboarding['joyride_11'][] = bpm_contact_form_onboarding_html();

//create array to add to wp-admin settings menu
global $admin_menu_items;

$admin_menu_items[] = array('name' => __('Contact Plus',''),
                             'title' => __('Contact Plus','bpm_intranet_plus'),
                             'user_rights' => 'manage_options',
                             'page_slug' => 'bpm_form_options',
                             'callback' => 'bpm_contact_form_display_options');

global $bpm_first_redirect;

$bpm_first_redirect = 'bpm_form_options';
/**
 * end of bpmcontext sdk setup
 */


global $bpm_server_info;
add_action( 'wp_ajax_bpm_contact_form_update', 'bpm_contact_form_update_v3' );
add_action( 'admin_init', 'bpm_contact_form_redirect');

//Activate then redirect to the contact plus page
register_activation_hook( __FILE__, 'bpm_contact_form_activate' );
function bpm_contact_form_activate() {
    global $bpm_first_redirect;

	update_option( 'bpm_activation_redirect', true );
    update_option('reactivate', 1);
    update_option('bpm_redirect_to', $bpm_first_redirect);
}

function bpm_contact_form_redirect() {
    if (get_option('bpm_activation_redirect', false)) {
        delete_option('bpm_activation_redirect');
        if ( ! is_multisite() ) {
            wp_redirect("admin.php?page=bpm_options");
            exit;
        }
    }
}

// Add settings link on plugin page
$plugin = plugin_basename(__FILE__);
add_filter("plugin_action_links_$plugin", 'bpm_contact_form_settings_link' );
function bpm_contact_form_settings_link($links) {
    $settings_link = '<a href="https://support.bpmcontext.com" target="_blank">'.__('Support Site', 'bpmcontext').'</a>';
    array_unshift($links, $settings_link);
    if(get_option('bpm_has_account')) {
        $settings_link = '<a href="admin.php?page=bpm_form_options">Settings</a>';
    }else{
        $settings_link = '<a href="admin.php?page=bpm_options">Settings</a>';
    }
    array_unshift($links, $settings_link);
    return $links;
}

add_action('wp_enqueue_scripts', 'bpm_form_register_front_end_scripts' );
add_action('admin_enqueue_scripts', 'bpm_form_register_scripts' );

function bpm_form_register_front_end_scripts(){

    global $bpm_server_info;

    wp_register_script('js_bpmcontext_form_mapping_d3', 'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.3/d3.min.js', array(), $bpm_server_info['bpm_file_version'], true);
    wp_register_script('js_bpmcontext_form_mapping_topojson', 'https://cdnjs.cloudflare.com/ajax/libs/topojson/1.6.9/topojson.min.js', array(), $bpm_server_info['bpm_file_version'], true);
    wp_register_script('js_bpmcontext_form_mapping', plugins_url( 'js/datamaps.world.min.js', __FILE__ ), array(), $bpm_server_info['bpm_file_version'], true);

    wp_register_script('js_bpmcontext_form_widgets', plugins_url( 'js/bpmcontext-form-widgets.js', __FILE__ ), array(), $bpm_server_info['bpm_file_version'], true);

    wp_enqueue_script(array( 'js_bpmcontext_form_mapping_d3', 'js_bpmcontext_form_mapping_topojson', 'js_bpmcontext_form_mapping',  'js_bpmcontext_form_widgets'));
}

function bpm_form_admin_page(){

    if(substr($_REQUEST['page'], 0 , 4) == 'bpm_') return true;
    return false;
}

function bpm_form_register_scripts(){

    if( ! bpm_form_admin_page()) return;

    global $bpm_server_info;

    wp_register_script('js_bpmcontext_form', plugins_url( 'js/bpmcontext-form-functions.js', __FILE__ ), array(), $bpm_server_info['bpm_file_version'], true);

    wp_enqueue_script(array( 'js_bpmcontext_form' ));

    wp_register_style('css_bpmcontext_form', plugins_url( 'css/bpmcontext-form-manager.css', __FILE__ ), array(), $bpm_server_info['bpm_file_version'], 'screen');
    wp_register_style('font-awesome', plugins_url( 'css/font-awesome.min.css', __FILE__ ), array(), $bpm_server_info['bpm_file_version'], 'screen');

    wp_enqueue_style(array( 'css_bpmcontext_form' , 'font-awesome'));

    global $bpm_server_info;

    $is_ed_open = get_option('bpm_contact_plus_education_open');

    $options = get_option('bpm_has_account');

    $has_logged_in = 0;
    if ($options) $has_logged_in = 1;

    $params = array(
        'ed_open' => $is_ed_open,
        'current_site' => bpm_contact_form_get_current_site(),
        'bpm_server' => $bpm_server_info['bpm_server'],
        'bpm_api' => $bpm_server_info['bpm_api'],
        'bpm_login_status' => $has_logged_in
        );

    if (current_user_can('manage_options')) {
        $params['ajaxurl'] = admin_url('admin-ajax.php');
    }

    if(!isset($_REQUEST['activity_table'])) {
        $params['page_info'] = 'open_status';
    }else{
        $params['page_info'] = $_REQUEST['activity_table'];
    }

    if(isset($_REQUEST['action']) && $_REQUEST['action'] == 'bpm_form_options_edit') {

        $options = get_option('bpm_contact_us_options_' . bpm_contact_form_get_current_site());

        if ($options) {
            foreach ($options as $key => $option_item) {
                if ($option_item['form'] == $_REQUEST['form_id']) {
                    $params['api_key'] = $key;
                }
            }
        }

        $params['workspaces']   = get_option( 'bpm_contact_form_workspaces' );
        $params['users']        = get_option( 'bpm_contact_form_users' );

    }

    $contact_us      = bpm_form_setup_contact_us('plugins_allowed');
    $contact_us_list = bpm_form_setup_contact_us('plugins_allowed_all');
    $contact_us_keys = bpm_form_setup_contact_us('plugins_allowed_keys');

    if ($contact_us) $params['has_contact_us'] = 1;

    wp_localize_script('js_bpmcontext_form', 'bpm_contact_us', $contact_us);
    wp_localize_script('js_bpmcontext_form', 'bpm_contact_us_list', $contact_us_list);
    wp_localize_script('js_bpmcontext_form', 'bpm_contact_us_keys', $contact_us_keys);

    wp_localize_script('js_bpmcontext_form', 'bpm_form_params', $params);

}

function bpm_contact_admin_tabs( ) {

    if( ! isset($_REQUEST['form_id'])) return '';
    $current = 'homepage';

    if(isset($_REQUEST['tab'])) $current = $_REQUEST['tab'];

    $account = '';

    if(! isset($_REQUEST['account']) || $_REQUEST['account'] < 1 ){
        $current = 'homepage';
        $tabs = array( 'homepage' => 'Settings' );
    }else{
        $tabs = array( 'homepage' => 'Settings', 'autoresponder' => 'Autoresponder Setup', 'emailmgr' => 'Email Template Manager' );
        $account = '&account='.$_REQUEST['account'];
    }

    $html_line = '';

    $html_line .= '<div id="icon-themes" class="icon32"><br></div>';
    $html_line .= '<h2 class="nav-tab-wrapper">';
    foreach( $tabs as $tab => $name ){
        $class = ( $tab == $current ) ? ' nav-tab-active' : '';
        $html_line .= "<a id='bpm-contact-plus-$tab' class='bpm-hide nav-tab$class' href='?page=bpm_form_options&action=bpm_form_options_edit$account&form_id=".$_REQUEST['form_id']."&mail_key=".$_REQUEST['mail_key']."&tab=$tab'>$name</a>";

    }
    $html_line .= '</h2>';

    return $html_line;
}

function bpm_contact_form_display_options(){

    $tab = 'homepage';

    if(isset($_REQUEST['tab']) && isset($_REQUEST['account'])) $tab = $_REQUEST['tab'];

    switch($tab){
        case 'homepage':
            bpm_contact_display_homepage();
            break;
        case 'autoresponder':
            bpm_contact_display_autoresponder();
            break;
        case 'emailmgr':
            bpm_contact_display_emailmgr();
            break;
    }

}

function bpm_contact_display_autoresponder(){

    $html_line = bpm_contact_admin_tabs();

    $html_line .= '<div style="max-width: 70em;">';
    $html_line .= '<div id="bpm_contact_mail_to_key" class="bpm-hide">'.$_REQUEST['mail_key'].'</div>';
    $html_line .= '<div id="bpm_contact_form_id" class="bpm-hide">'.$_REQUEST['form_id'].'</div>';
    $html_line .= '<div id="bpm_contact_account" class="bpm-hide">'.$_REQUEST['account'].'</div>';
    $settings = array(
        'textarea_rows' => 15,
        'tabindex' => 1
    );

    $form_id = $_REQUEST['form_id'];

    $default_autoresponder = 'Thank you for your inquiry.  We will get back to you shortly.';
    $html_line .= '<h2 class="bpm-email-header-title">Auto Responder Text</h2>';
    $html_line .= '<h4 class="bpm-email-header-title">This text will be used for auto responder emails to the person submitting the contact form.</h4>';

    ob_start();
    wp_editor(get_option('bpm_autoresponder_text_'.$form_id , $default_autoresponder), 'bpmautorespondertext');
    $html_line .= ob_get_contents();
    ob_end_clean();

    $auto_subject = get_option('bpm_autoresponder_subject_'.$form_id , 'Thank you for your inquiry');

    $is_enabled = '';
    if(get_option('bpm_autoresponder_enabled_'.$form_id)){
        $is_enabled = 'checked';
    }

    $html_line .= '<div style="margin-top:2em;font-size:1.25em;">Enable autoresponder emails when a contact form is submitted?&nbsp;&nbsp;<input type="checkbox" id="bpm_autoresponder" name="bpm_autoresponder" value="1" '.$is_enabled.'>';
    $html_line .= '<div style="margin-top:1em;">Autoreply Subject:&nbsp;&nbsp;<input style="width:20em" type="text" id="bpm_autoresponder_subject" name="bpm_autoresponder" value="'.$auto_subject.'">';

    $html_line .= '<div style="float:right;"><span id="bpm_save_autoresponder" class="bpm-hide bpm-green">Saving</span> <input id="bpm_admin_submit_autoresponder_save" class="button button-primary " type="submit" onclick="bpm_contact_plus_save_autoresponder(1);" name="submit" value="Save">&nbsp;&nbsp;<input id="bpm_admin_submit_emailmgr_preview" class="button button-primary " type="submit" onclick="bpm_contact_plus_save_autoresponder(2);" name="submit" value="Send Test Email"></div>';


    $html_line .= bpm_contact_tinymce_Advanced_installed();

    $html_line .= '</div>';

    echo $html_line;

}

function bpm_contact_tinymce_Advanced_installed(){
    if ( ! is_plugin_active('tinymce-advanced/tinymce-advanced.php')) {
        return '<div style="margin-top:2em;font-size:1em;">We recommend using <a href="https://wordpress.org/plugins/tinymce-advanced/" target="_blank">TinyMCE Advanced</a> to provide the most options when editing your email responders and email template formats.</div>';
    }
}

add_action( 'wp_ajax_bpm_update_education_open_status', 'bpm_update_education_open_status' );

function bpm_update_education_open_status(){
    update_option('bpm_contact_plus_education_open' , $_REQUEST['open_status']);
    $outstring['data'] = array('status' => 'done' , 'value' => $_REQUEST['open_status']);
    $jsonp = json_encode($outstring);
    echo $jsonp;
    exit;
}

add_action( 'wp_ajax_bpm_contact_update_autoresponder', 'bpm_contact_update_autoresponder' );

function bpm_contact_update_autoresponder(){

    $form_id = $_REQUEST['form_id'];

    if(isset($_REQUEST['bpm_autoresponder_text'])) update_option('bpm_autoresponder_text_'.$form_id ,rawurldecode($_REQUEST['bpm_autoresponder_text']));
    if(isset($_REQUEST['bpm_autoresponder_subject'])) update_option('bpm_autoresponder_subject_'.$form_id ,rawurldecode($_REQUEST['bpm_autoresponder_subject']));

    $enabled = 0;
    if(isset($_REQUEST['bpm_autoresponder_enabled'])){
        $enabled = 1;
    }
    update_option('bpm_autoresponder_enabled_'.$form_id , $enabled);

    $outstring['data'] = array('status' => 'done');
    $jsonp = json_encode($outstring);
    echo $jsonp;

}

add_action( 'wp_ajax_bpm_contact_update_email_template', 'bpm_contact_update_email_template' );

function bpm_contact_update_email_template(){

    $form_id = $_REQUEST['form_id'];

    if(isset($_REQUEST['bpm_email_header'])) update_option('bpm_email_header_'.$form_id , rawurldecode($_REQUEST['bpm_email_header']));
    if(isset($_REQUEST['bpm_email_footer'])) update_option('bpm_email_footer_'.$form_id , rawurldecode($_REQUEST['bpm_email_footer']));

    $outstring['data'] = array('status' => 'done');
    $jsonp = json_encode($outstring);
    echo $jsonp;

}
function bpm_contact_display_emailmgr(){

    $html_line = bpm_contact_admin_tabs();

    $html_line .= '<div style="max-width: 70em;">';
    $html_line .= '<div id="bpm_contact_mail_to_key" class="bpm-hide">'.$_REQUEST['mail_key'].'</div>';
    $html_line .= '<div id="bpm_contact_form_id" class="bpm-hide">'.$_REQUEST['form_id'].'</div>';
    $html_line .= '<div id="bpm_contact_account" class="bpm-hide">'.$_REQUEST['account'].'</div>';

    $settings = array(
        'textarea_rows' => 15,
        'tabindex' => 1
    );

    $html_line .= '<h2 class="bpm-email-header-title">Email Template Header</h2>';

    $form_id = $_REQUEST['form_id'];

    ob_start();
    wp_editor(get_option('bpm_email_header_'.$form_id , ''), 'bpmemailheader', $settings);

    echo '<h2 class="bpm-email-footer-title">Email Template Footer</h2>';

    wp_editor(get_option('bpm_email_footer_'.$form_id), 'bpmemailfooter', $settings);
    $html_line .= ob_get_contents();
    ob_end_clean();

    $html_line .= '<div style="margin-top:2em;float:right;"><span id="bpm_save_email_format" class="bpm-hide bpm-green">Saving</span><input id="bpm_admin_submit_emailmgr_save" class="button button-primary " type="submit" onclick="bpm_contact_plus_save_email_format(1);" name="submit" value="Save"> &nbsp;&nbsp;<input id="bpm_admin_submit_emailmgr_preview" class="button button-primary " type="submit" onclick="bpm_contact_plus_save_email_format(2);" name="submit" value="Send Test Email"></div>';

    $html_line .= '</div>';

    $html_line .= bpm_contact_tinymce_Advanced_installed();

    echo $html_line;
}

function bpm_contact_display_homepage(){

    $html_line = bpm_contact_admin_tabs();

    global $allowed_plugins_array;

    if( ! $allowed_plugins_array) {
        $allowed_plugins_array = bpm_contact_form_get_last_plugin_list();
    }

    $form_handler = new bpmcontext_form_manager();

    $html_line .= '<div class="wrap" id="bpmcontext-contact-options">';

    $data[] = array('value' => 'open_status' , 'name' => 'Open Status');
    $data[] = array( 'value' => 'forms_recieved', 'name' => 'Inquiries Received' );

    if(!isset($_REQUEST['activity_table'])) {
        $selected[] = array('value' => 'open_status' , 'name' => 'Open Status');
    }else{
        $selected[] = array('value' => $_REQUEST['activity_table'] , 'name' => 'Open Status');
    }

    $activity_dd = $form_handler->create_infobox($data[0]['value'], $data, 'activity_table', $selected[0], '', 'bpm_form_change_activity_list');

    $bpm_sdk = new bpmcontext_sdk_html_manager();

    if(isset($_REQUEST['action']) && $_REQUEST['action'] == 'bpm_form_options_edit'){

        $form_name = $form_handler->get_form_name($_REQUEST['form_id']);
        $html_line .= $bpm_sdk->bpm_create_admin_header( 'Contact Plus Settings - Editing '.$form_name , true , false);

        $html_line .= bpm_contact_form_create_education('detail');

        $html_line .= '<div class="bpm-form-grid-elementcontainer">';
        $html_line .= '<div class="bpm-form-grid-column-detail">' .bpm_contact_form_edit_or_add_form() . '</div>';
    }else {

        $html_line .= $bpm_sdk->bpm_create_admin_header( 'Contact Plus Settings' , true);

        $html_line .= bpm_contact_form_create_education('main');

        $html_line .= '<div class="bpm-form-grid-elementcontainer">
                  <div class="bpm-form-grid-column-header-wide">Available Contact Forms</div>
                  <div class="bpm_education_subheading"><br>Click form landing page name to edit settings and connect to Contact Plus.</div>
                  <div class="bpm-form-grid-column-inner-wide">' . bpm_contact_form_create_form_grid() . '</div>
               </div>';
        $html_line .= '<div class="bpm-form-grid-elementcontainer">';
        $html_line .= '<div class="bpm-form-grid-column">
                    <div class="bpm-form-grid-column-header">Compatible Plugins</div>
                    <div class="bpm_education_subheading">A list of form plugins available to use with Contact Plus</div>
                    <div class="bpm-form-grid-column-inner">' . bpm_contact_form_create_plugin_list() . '</div>
                  ';


        $html_line .= '
                    <div class="bpm-form-grid-column-header">Installed Features</div>
                    <div class="bpm_education_subheading">List of Contact Plus Features that are Installed</div>
                    <div class="bpm-form-grid-column-inner">' . bpm_contact_form_create_feature_list() . '</div>
                  </div>';


        $html_line .= '<div class="bpm-form-grid-column-center">&nbsp;</div>';
        $html_line .= '<div class="bpm-form-grid-column">
                        <form method="get" id="bpm_form_change_activity_list" action="">
                        <input type="hidden" name="page" value="' .esc_attr( $_REQUEST['page'] ) . '" />
                        <div class="bpm-form-grid-column-header bpm_div_inline" style="width:49%">Inquiry Activity</div><div class="bpm_div_inline" style="width:51%;">'.$activity_dd.'</div>
                        </form>
                        <div class="bpm_education_subheading">Select report type to view Open Inquiries or Inquiries Received</div>
                        <div class="bpm-form-grid-column-inner" id="bpm-form-analytics">' . bpm_contact_form_create_inquiry_stats() . '</div>
                  </div>';
        $html_line .= '</div>';
    }
    $html_line .= '</div>';

    echo $html_line;
}

function bpm_contact_form_create_education($page_type = 'main'){

    $html_line = '<div id="bpm-form-education-header" class="bpm-form-education-holder">';
    if($page_type == 'main') {
        $html_line .= '<div class="bpm-form-education-header"><h2><span class="fa fa-plus"></span>&nbsp;&nbsp;About Contact Plus Web-to-Lead Management</h2></div>';
    }else{
        $html_line .= '<div class="bpm-form-education-header"><h2><span class="fa fa-plus"></span>&nbsp;&nbsp;Connecting Forms to Contact Plus using Contact Plus</h2></div>';
    }
    $html_line .= '<div class="bpm-form-education-content bpm-hide">';

    if($page_type == 'main') {
        $html_line .= '<hr><p>Supercharge your lead management process when you move from email notifications to workflow. Many forms send submissions to email. Data sent to an email is where issues occur with lost emails or misplaced leads. Contact Plus provides lead management with web-to-lead workflow. </p>';

        $html_line .= '<h3><strong>How ContactPlus Works</strong></h3>';
        $html_line .= '<p>When a website visitor submits a contact form, this triggers an email notification to subscribed users as well as adds the content of a contact form submission to a new workspace.  You will see all the inquiry data in the new workspace. Workspaces store the form data, email messages, files and visitor information together. Workspace sections are editable and keep the conversation going letting you reply quickly, send questions to others and get things done directly in each workspace&nbsp;&nbsp;&nbsp;   <a href="https://cl.ly/2Q3n1G263313" target="_blank">Video</a></p>';

        $html_line .= '<h3><strong>Area in your website to manage contact form data</strong></h3>';
        $html_line .= '<p>ContactPlus is a plugin that lets you save submitted contact form data and works for one or more forms on your website. ContactPlus is added using a shortcode in the dashboard page. Each contact form that you setup will send data to a new workspace that is published to your dashboard. Only logged in users can access the workspace dashboard from a password-protected login.&nbsp;&nbsp;&nbsp;   <a href="https://cl.ly/2e2n0F3m2g3V" target="_blank">Video</a></p>';

        $html_line .= '<h3><strong>Works with one or more forms</strong></h3>';
        $html_line .= '<p>If you have multiple forms, each department can be configured to receive notifications for their specific form. All users can subscribe to receive notifications too.  </p>';

        $html_line .= '<h3><strong>Manage all email messages in one place</strong></h3>';
        $html_line .= '<p>Contact Plus is designed to centralize data and management of contact form inquiries including new messages, your email communications and follow-up (including files). Centralize communications for groups, departments and teams right on your website.  </p>';

        $html_line .= '<h3><strong>View and edit data, files and emails</strong></h3>';
        $html_line .= '<p>A new workspace displays the form data along with additional sections where users can add content and files and manage email replies. The workspace can be accessed only by users you invite to work with you with a secure login on the frontend. </p>';

        $html_line .= '<h3><strong>Organize form submissions for each department process</strong></h3>';
        $html_line .= '<p>A workspace acts like a WordPress post and is automatically published for each submitted form. It displays form data, content, files, emails, list of subscribers, change log/history. A workspace is organized according to category and subcategories based on the included Workspace Templates in your account.  The layout is editable by an administrator, no code required. A workspace menu appears on the parent workspace, for example Marketing workspace displays a menu of submitted marketing contact forms.  </p>';

        $html_line .= '<h3><strong>Collaborate with departments for case management </strong></h3>';
        $html_line .= '<p>ContactPlus settings will configure contact form data to departments: Sales, Marketing or Operations or you can add your own. A full list of all submitted forms can be viewed on the workspace site by user, department or workspace template name.</p>';

    }else{
        $html_line .= '<p>This page allows you to setup the connection between your form and Contact Plus.</p>';
        $html_line .= '<p>When people submit a form that is connected to Contact Plus, the inquiry will be routed to the \'Assign Inquiries To\' user.  That person will recieve an email and will have a notification in their account on the frontend.</p>';
        $html_line .= '<p>From the frontend, other registered users that have been invited can view the inquiries along with a widget that shows how many are currently open and the history of inquries received. </p>';
        $html_line .= '<p>For Help Center articles, go to the Contact Plus menu item on the left and search for \'Contact\'.</p>';
    }
    $html_line .= '</div>';

    $html_line .= '</div>';

    return $html_line;
}

function bpm_contact_form_edit_or_add_form(){

    $form_handler = new bpmcontext_form_manager();
    $form_data['account'] = array();
    $demo_mode = true;
    $email_selected = array();
    $subject_selected = array();

    $options    = $form_handler->options_for_form( $_REQUEST['form_id'] );
    $accounts   = get_option( 'bpm_contact_form_accounts' );

    if( $options && $accounts  ) {
        //get data from server for dropdowns etc
        $demo_mode = false;

        //set appi_key for form
        $api_key = '<div class="bpm-hide" id="bpm_contact_form_api_key">'.$options['key'].'</div>';
        $api_key .= '<div class="bpm-hide" id="bpm_contact_form_mainapi_key">'.$options['mainkey'].'</div>';
        $api_key .= '<div class="bpm-hide" id="bpm_contact_form_plugin">'.$options['source'].'</div>';
        $api_key .= '<div class="bpm-hide" id="bpm_contact_form_id">'.$_REQUEST['form_id'].'</div>';

        //create account dropdown
        $account_list         = array();
        $account_selected     = array( 'value' => $options['account_id'], 'name' => $options['account'] );

        for ( $x = 0; $x < sizeof( $accounts ); $x ++ ) {
            $account_list[] = array( 'value' => key( $accounts ), 'name' => current( $accounts ) );
            next( $accounts );
        }

        if( ! $options['account_id'] ){
            $account_selected = $account_list[0];
            $options['account_id'] = $account_selected['value'];
        }

        $form_data['account'] = $form_handler->create_infobox( 'bpm_contact_form_account_id', $account_list, 'bpm_form_email_field', $account_selected, '', 'bpm_admin_update_parent_page_list' );;

        //create destination workspace display or dropdown
        $workspaces = get_option( 'bpm_contact_form_workspaces' );
        if ( isset($workspaces[$options['account_id']]) ) {
            $workspace_selected = array('value' => $options['workspace_id']);
            $ws_data = $workspaces[$options['account_id']];
        }else{
            //show error - no workspaces available
            $ws_data[] = array('value' => 0 , 'name' => 'No Workspaces Configured');
            $workspace_selected = array('value' => 0);
        }

        if( ! $options['workspace_id']){
            reset($ws_data);
            $options['workspace_id'] = $ws_data[key($ws_data)]['value'];
        }

        $form_data['workspaces'] = $form_handler->create_infobox('bpm_contact_form_workspace_id', $ws_data , 'bpm_form_email_field', $workspace_selected, '', 'bpm_admin_update_parent_page_list');

         //parent page dropdown
        //parent name of selected workspace type
        if ( isset($workspaces[$options['account_id']][$options['workspace_id']]['parent_pages']) ) {
            $ws_pages = $workspaces[$options['account_id']][$options['workspace_id']]['parent_pages'];
            $workspace_parent_selected = array('value' => $options['parent_page_id']);
        }else{
            //no parent pages defined for contact forms
            $ws_pages[] = array('value' => 0 , 'name' => 'No Parent Pages Configured');
            $workspace_parent_selected = array('value' => 0);
        }

        $form_data['parent_pages'] = $form_handler->create_infobox('bpm_contact_form_workspace_parent_id', $ws_pages, 'bpm_form_email_field', $workspace_parent_selected, '', 'bpm_admin_update_parent_page_list');

        $infoboxes = array();
        if ( isset($workspaces[$options['account_id']][$options['workspace_id']]['infoboxes']) ) {
            $infoboxes = $workspaces[$options['account_id']][$options['workspace_id']]['infoboxes'];
        }

        $user_list = get_option('bpm_contact_form_users');

        //process owner dropdown
        $user_selected = array('value' => $options['owner_id']);
        $account_id = $options['account_id'];

        $form_data['owner'] = $form_handler->create_infobox('bpm_contact_form_process_owner_id', $user_list[$account_id], 'bpm_form_email_field', $user_selected, '', 'bpm_admin_update_parent_page_list');;

        //assign task to user name
        $user_selected = array('value' => $options['doer_id']);
        $form_data['assign_to'] = $form_handler->create_infobox('bpm_contact_form_process_doer_id', $user_list[$account_id], 'bpm_form_email_field', $user_selected, '', 'bpm_admin_update_parent_page_list');;

        //is enabled
        $is_enabled = 'checked';
        if(isset($options['enabled']) && $options['enabled'] == 0) $is_enabled = '';
        $form_data['enabled'] = '<input id="bpm_contact_enabled_id" type="checkbox" name="enabled" value="1" '.$is_enabled.'>';


    }else{
        //if no data then create demo data
        $form_data['account'] = '<select class="bpm_contact_us_form_field bpm-select"><option selected>Test Company</option><option>ABC WIdget Company</option></select>';
        $form_data['workspaces'] = 'Contact Us';
        $form_data['workspaces_name'] = 'Department';
        $form_data['parent_pages'] = '<select class="bpm_contact_us_form_field bpm-select"><option selected>Sales</option><option>Marketing</option></select>';
        $form_data['owner'] = '<select class="bpm_contact_us_form_field bpm-select"><option selected>Bob Jones</option><option>Liz Mon</option></select>';
        $form_data['assign_to'] = '<select class="bpm_contact_us_form_field bpm-select"><option selected>Bob Jones</option><option>Liz Mon</option></select>';
        $form_data['enabled'] = '<input type="checkbox" name="enabled" value="1" checked>';

        //else create using stored data

    }

    $field_list = $form_handler->bpm_get_form_fields_by_page( $_REQUEST['form_id'] );

    $data = array();
    if($field_list['fields']) {
        foreach ($field_list['fields'] as $value) {
            //create email and subject field dropdowns
            if ($value['infobox_name']) {
                $label = $value['infobox_name'];
            } else {
                $label = $value['name'];
                if ($value['label']) $label .= ' (' . $value['label'] . ')';
            }
            if ($value['is_email']) $email_selected = array('value' => $value['name'], 'name' => $label);
            if ($value['is_subject']) {
                $subject_selected = array('value' => $value['name'], 'name' => $label);
            }
            if (!$subject_selected) {
                if (stripos($label, 'subject') === false) {
                } else {
                    $subject_selected = array('value' => $value['name']);
                }
            }

            if (!$email_selected) {
                if (stripos($label, 'email') != false) {
                    $email_selected = array('value' => $value['name']);
                }
            }

            $data[] = array('value' => $value['name'], 'name' => $label);
        }
    }

    $textareas = '';
    if($field_list['textarea']) {
        foreach ($field_list['textarea'] as $value) {
            //create text areas
            $textareas .= '<div class="bpm_contact_form_textarea bpm-hide" data-field_id="' . $value['name'] . '"></div>';
        }
    }

    if($data) {
        $form_data['email_field'] = $form_handler->create_infobox('bpm_contact_form_email_field_id', $data, 'bpm_form_email_field', $email_selected, '', 'bpm_admin_update_parent_page_list');
        $form_data['subject_field'] = $form_handler->create_infobox('bpm_contact_form_subject_field_id', $data, 'bpm_form_subject_field', $subject_selected, '', 'bpm_admin_update_parent_page_list');
    }

    if($demo_mode){
        $save_button = '<a id="bpm-demo-button" class="add-new-h2" >No Save in Demo Mode</a>';
    }else{
        $save_button = '<div class="bpm_contact_inline "><a id="bpm_contact_form_save_button" class="add-new-h2 disabled bpm-hide" >Save</a>&nbsp;&nbsp;</div><div id="bpm_contact_form_saved_message" class="bpm_contact_form_saved_message bpm-hide">'.__('Saved', 'bpmcontext-form').'</div>';
    }

    ob_start();
    echo '<div class="bpm-form-grid-column-header">Email to Workflow Option&nbsp;&nbsp;</div>';

    if($workspaces[$options['account_id']][$options['workspace_id']]['can_forward_email']){
        echo '<div id="bpm-contact-plus-email-piping" class="bpm-hide">';
        if($options['mail_to_api_key']){
            echo '<div class="bpm_education_subheading bpm-add-horizontal-space">The email addresss to use for this workspace is <span id="bpm_mail_key">'.$options['mail_to_api_key'].'</span>@reply.bpmcontext.com</div>';
        }else{
            echo '<div id="bpm_email_forwarding_message" class="bpm_education_subheading bpm-add-horizontal-space">Click Save below to generate an email address to use the Email to Workflow feature.</div>';
            $save_button = '<div class="bpm_contact_inline "><a id="bpm_contact_form_save_button" class="add-new-h2" >Save</a>&nbsp;&nbsp;</div><div id="bpm_contact_form_saved_message" class="bpm_contact_form_saved_message bpm-hide">'.__('Saved', 'bpmcontext-form').'</div>';
        }
        echo '</div>';

    }
        echo '<div id="bpm-contact-plus-email-piping-upgrade" class="bpm-hide bpm_education_subheading bpm-add-horizontal-space">This is a premium feature that allows you to forward an email address to your BPMContext account.  The system will then create a workspace and assign it to the person assigned to this inquiry type. You can purchase this option <a href="https://bpmcontext.com" target="_blank" >here</a>.</div>';


    echo '<br><br>';

    echo '<div class="bpm-form-grid-column-header">Edit Settings&nbsp;&nbsp;'.$save_button.'</div>';
    if($demo_mode) {
	    echo '<div class="bpm_education_subheading bpm-add-horizontal-space"><p><strong>Login to Contact Plus to enable editing.</strong></p>
Contact Plus is for web to lead or case management. By connecting web forms to Contact Plus you go one step further than email.
Assign and manage tasks for leads or cases such as support with your team members.</div>';
    }else{
	    echo '<div class="bpm_education_subheading bpm-add-horizontal-space">Use for web-to-lead or case management tasks  (Note: does not support attachment uploads)</div>';
    }
    echo $api_key;
    echo $textareas;
    echo '<div id="bpm_contact_form_activity_overlay" class="bpm-admin-overlay bpm-hide text-center"><div class="bpm-admin-activity"><span class="fa fa-spinner fa-spin">&nbsp;</span></div></div>';
    echo '<div class="bpm-form-grid-column-inner">';
    echo '
        <table class="bpm-form-table">
          <tbody>';

    if($form_data['account']){
        echo'  <tr class="bpm-form-table-tr">
                  <td class="bpm-form-table-td" style="width:70%">Contact Plus Account:</td>
                  <td class="bpm-form-table-td">'.$form_data['account'].'</td>
                </tr>';
    }


    echo'  <tr class="bpm-form-table-tr">
              <td class="bpm-form-table-td">Destination Workspace:<br><span class="bpm-form-subtitle">Name of the Workspace template in BPMContext</span></td>
              <td class="bpm-form-table-td">'.$form_data['workspaces'].'</td>
            </tr>
            <tr class="bpm-form-table-tr">
              <td class="bpm-form-table-td">Parent page for Contact Inquiries:<br><span class="bpm-form-subtitle">Select the managing Department to create the inquiry under</span></td>
              <td class="bpm-form-table-td">'.$form_data['parent_pages'].'</td>
            </tr>
            <tr class="bpm-form-table-tr">
              <td class="bpm-form-table-td">Process Owner:<br><span class="bpm-form-subtitle">Select the user to manage and close out inquiries</span></td>
              <td class="bpm-form-table-td">'.$form_data['owner'].'</td>
            </tr>
            <tr class="bpm-form-table-tr">
              <td class="bpm-form-table-td">Assign Inquiries to:<br><span class="bpm-form-subtitle">Select the user to assign inquries to (can be the same as the process owner)</span></td>
              <td class="bpm-form-table-td">'.$form_data['assign_to'].'</td>
            </tr>
            <tr class="bpm-form-table-tr">
              <td class="bpm-form-table-td">Email Field:<br><span class="bpm-form-subtitle">This is used for document naming - select the form field for the email address</span></td>
              <td class="bpm-form-table-td">'.$form_data['email_field'].'</td>
            </tr>
            <tr class="bpm-form-table-tr">
              <td class="bpm-form-table-td">Subject Field:<br><span class="bpm-form-subtitle">This is used for document naming - select the form field for the inquiry subject. </span><br><span class="bpm-form-subtitle"> If subject not available, then use any item in dropdown.</span></td>
              <td class="bpm-form-table-td">'.$form_data['subject_field'].'</td>
            </tr>
            <tr class="bpm-form-table-tr">
              <td class="bpm-form-table-td">Form Enabled:<br><span class="bpm-form-subtitle">If not enabled then the inquriy will follow the default process for the plugin</span></td>
              <td class="bpm-form-table-td">'.$form_data['enabled'].'</td>
            </tr>
            <tr class="bpm-form-table-tr">
              <td class="bpm-form-table-td bpm-mid-table-header" colspan="2">Form Fields<br><span class="bpm-form-subtitle">Map your form fields to Infobox fields to be populated on the inquiry page. Edit field names if needed by clicking the pencil icon.</span></td>
            </tr>';
    echo '  </tbody>
        </table>';

    echo '
        <table class="bpm-form-table">
          <tbody>';
    echo'  <tr class="bpm-form-table-tr">
                <td class="bpm-form-table-td">Form Field</td>
                <td class="bpm-form-table-td">Infobox Name</td>
                <td class="bpm-form-table-td">Visible?</td>
            </tr>';

    $field_count = 0;
    $found_array = array();


    for($x=0;$x<sizeof($infoboxes);$x++){
        $found = false;
        for($y=0;$y<sizeof($data);$y++){
            if ($infoboxes[$x]['value'] == $data[$y]['value']) $found = true;
        }
        if($found == false) $data[] = array('value' => $infoboxes[$x]['value'] , 'name' => $infoboxes[$x]['name']);
    }
    if($field_list['fields']) {
        foreach ($field_list['fields'] as $value) {

            $label = $value['name'];
            if ($value['label']) $label .= ' (' . $value['label'] . ')';

            if ($value['infobox_name']) {
                $name = $value['infobox_name'];
            } else {
                $name = $value['name'];
            }

            $selected = array('value' => $value['name'], 'name' => $name);

            if (!$value['infobox_name']) {
                if ($subject_selected['value'] == $value['name']) {
                    $selected = array('value' => 'Subject', 'name' => 'Subject');
                }
                if ($email_selected['value'] == $value['name']) {
                    $selected = array('value' => 'From_Email', 'name' => 'From Email');
                }
            }

            $infobox_dd = $form_handler->create_infobox('bpm_contact_form_infobox_' . $field_count, $data, $name, $selected, 'bpm_contact_us_field_dd', 'bpm_admin_update_parent_page_list');
            $selected = null;

            $visible_checked = 'checked';

            if( isset($value['visible'])) if ($value['visible'] == 0 && $value['visible'] != null) $visible_checked = '';

            $id_div = '<div id="bpm_contact_us_field_dd_info_' . $field_count . '" class="bpm_contact_us_field_dd_info bpm-hide" data-id="' . $field_count . '" ">' . $value['name'] . '</div>';

            if (!in_array($value['name'], $found_array)) {
                $found_array[] = $value['name'];

                $infobox_editor = '<input type="text" id="bpm_form_infobox_edit_field_name_' . $field_count . '" class="bpm-infobox-edit-field bpm-hide" value="' . $value['name'] . '">';
                $button = '<a onclick="bpmcontext.bpm_edit_infobox_name(this)" id="bpm_form_infobox_open_edit_field_' . $field_count . '"><span class="fa fa-pencil "></span></a><a onclick="bpmcontext.bpm_save_edit_infobox_name(this)" id="bpm_form_infobox_open_save_field_' . $field_count . '" class="bpm-hide"><span class="fa fa-save"></span></a>';

                echo '  <tr class="bpm-form-table-tr">
                    <td class="bpm-form-table-td">' . $id_div . $label . '</td>
                    <td class="bpm-form-table-td">' . $infobox_dd . $infobox_editor . '&nbsp;&nbsp;' . $button . '</td>
                    <td class="bpm-form-table-td">	<input id="bpm_contact_form_visible_' . $field_count . '" class="bpm_contact_form_visible" type="checkbox" name="visible" value="1" ' . $visible_checked . '></td>
                </tr>';

                $field_count++;
            }

        }
    }

    echo '  </tbody>
        </table>';
    echo '</div>';


    $outstring=ob_get_contents();
    ob_end_clean();

    return $outstring;
}

function bpm_contact_form_create_form_grid(){

	$form_list = new bpmcontext_contact_form_grid();
	$form_list->prepare_items();

    ob_start();
    echo '<form method="get" action="">';
	echo '<input type="hidden" name="page" value="' .esc_attr( $_REQUEST['page'] ) . '" />';
	echo $form_list->display();
    echo '</form>';
    $outstring=ob_get_contents();
    ob_end_clean();

    return $outstring;
}

function bpm_contact_form_create_inquiry_stats(){

    $form_list = new bpmcontext_contact_form_grid_activity();
	$form_list->prepare_items();
    ob_start();
	echo $form_list->display();
    $outstring=ob_get_contents();
    ob_end_clean();

    return $outstring;

}


function bpm_contact_form_create_plugin_list(){

    global $allowed_plugins_array;

    $form_list = new bpmcontext_contact_form_grid_plugins();
	$form_list->prepare_items();
    ob_start();
	echo $form_list->display();
    $outstring=ob_get_contents();
    ob_end_clean();

    return $outstring;
}

function bpm_contact_form_create_feature_list(){

    global $allowed_plugins_array;

    $form_list = new bpmcontext_contact_form_grid_features();
	$form_list->prepare_items();
    ob_start();
	echo $form_list->display();
    $outstring=ob_get_contents();
    ob_end_clean();

    return $outstring;
}

add_action( 'wp_ajax_update_contact_us_analytics', 'bpm_contact_form_update_contact_us_analytics' );

function bpm_contact_form_update_contact_us_analytics(){

    if(isset($_REQUEST['activity_table'])) $current_page = $_REQUEST['activity_table'];
    if(isset($_REQUEST['data'])) $data_options = $_REQUEST['data'];

    delete_option('bpm_contact_form_analytics_open_status' );
    delete_option('bpm_contact_form_analytics_forms_recieved' );

    if(isset($_REQUEST['account_list'])) update_option('bpm_contact_form_accounts' , $_REQUEST['account_list']);
    if(isset($_REQUEST['workspaces'])) update_option('bpm_contact_form_workspaces' , $_REQUEST['workspaces']);
    if(isset($_REQUEST['user_list'])) update_option('bpm_contact_form_users' , $_REQUEST['user_list']);

	if(isset($current_page) && isset($data_options)) {
        update_option('bpm_contact_form_analytics_' . $current_page, $data_options);
    }
        $outstring['data'] = bpm_contact_form_create_inquiry_stats();
        $jsonp = json_encode($outstring);
        echo $jsonp;

    exit;
}

function bpm_contact_form_update_v3(){

    if ($_REQUEST['bpm_admin_action']) {

        global $bpm_server_info;

        $site_id = bpm_contact_form_get_current_site();

        $querystring = 'https://'.$bpm_server_info['bpm_server'].'/'.$bpm_server_info['bpm_api'].'/bpmcontext_wordpress.php?nonce='.$_REQUEST['bpm_admin_contact_us_nonce'].'&apikey=' . $_REQUEST['bpm_admin_contact_us_api_key'] . '&action='.$_REQUEST['bpm_admin_action'].'&site_id='.$site_id;

        //add infoboxes
        if(isset($_REQUEST['bpm_form_settings'])) {
            for ($x = 0; $x < sizeof($_REQUEST['bpm_form_settings']); $x++) {
                    $querystring .= "&info_name[$x]=" . str_replace(' ','_',$_REQUEST['bpm_form_settings'][$x]['infobox_name']);
                    $querystring .= "&info_visible[$x]=" . $_REQUEST['bpm_form_settings'][$x]['visible'];
            }
        }

        $response = wp_remote_get($querystring);

        if (is_array($response) && !is_wp_error($response)) {

            $options = null;
            $current_options = get_option('bpm_contact_us_options_'.bpm_contact_form_get_current_site());
            $result = $response['body'];
            $api_keys = json_decode($result, true);

            if(isset($api_keys['apidata'])) $api_keys = $api_keys['apidata'];

            if($api_keys) {
                for ($x = 0; $x < sizeof($api_keys); $x++) {
                    $options[$api_keys[$x]['api_key']] = array('enabled' => $api_keys[$x]['is_enabled'],
                                                               'form' => $api_keys[$x]['form_info'],
                                                               'mail_to_api_key' => $api_keys[$x]['mail_to_api_key'],
                                                               'source' => $api_keys[$x]['plugin_id'],
                                                               'account' => $api_keys[$x]['account_display_name'],
                                                               'account_id' => $api_keys[$x]['account_id'],
                                                               'owner' => $api_keys[$x]['real_name'],
                                                               'owner_id' => $api_keys[$x]['real_id'],
                                                               'doer' => $api_keys[$x]['doer_name'],
                                                               'doer_id' => $api_keys[$x]['doer_id'],
                                                               'workspace_name' => $api_keys[$x]['workspace_name'],
                                                               'workspace_id'=> $api_keys[$x]['template_id'],
                                                               'parent_page' => $api_keys[$x]['page_title'],
                                                               'parent_page_id' => $api_keys[$x]['page_id']);
                    if(isset($current_options[$api_keys[$x]['api_key']])){
                        //update api key
                        $options[$api_keys[$x]['api_key']]['email_field'] = $current_options[$api_keys[$x]['api_key']]['email_field'];
                        $options[$api_keys[$x]['api_key']]['subject_field'] = $current_options[$api_keys[$x]['api_key']]['subject_field'];
                        $options[$api_keys[$x]['api_key']]['form_map'] = $current_options[$api_keys[$x]['api_key']]['form_map'];
                        $options[$api_keys[$x]['api_key']]['textareas'] = $current_options[$api_keys[$x]['api_key']]['textareas'];

                    }
                }
            }

            //add email field and subject field to options
            $options[$_REQUEST['bpm_admin_contact_us_api_key']]['email_field'] = $_REQUEST['bpm_email_field'];
            $options[$_REQUEST['bpm_admin_contact_us_api_key']]['subject_field'] = $_REQUEST['bpm_subject_field'];

            //add form map to options
            $options[$_REQUEST['bpm_admin_contact_us_api_key']]['form_map'] = $_REQUEST['bpm_form_settings'];
            $options[$_REQUEST['bpm_admin_contact_us_api_key']]['textareas'] = $_REQUEST['bpm_textareas'];

            update_option('bpm_contact_us_options_'.bpm_contact_form_get_current_site(), $options);

            $json_menu['data'] = get_option('bpm_contact_us_options_'.bpm_contact_form_get_current_site());

            $jsonp = json_encode($json_menu);
            echo $jsonp;
            exit;

        }
    }

    if ($_REQUEST['bpm_admin_action'] = 'get') {
        if ($_REQUEST['bpm_admin_contact_us_api_key']) $options = get_option('bpm_contact_us_options_'.bpm_contact_form_get_current_site());
        if (!$options) $options = array();
        $jsonp = json_encode($options);
        echo $_REQUEST['bpm_admin_contact_us_callback'] . '(' . $jsonp . ')';
        exit;
    }
}

add_action('admin_init', 'bpm_form_ai_bpm_nag_ignore',1);
function bpm_form_ai_bpm_nag_ignore() {

    global $current_user;
    $user_id = $current_user->ID;
    if ( isset($_GET['ai_bpm_nag_ignore']) && '0' == $_GET['ai_bpm_nag_ignore'] ) {
        add_user_meta($user_id, 'ai_bpm_ignore_notice', 'true', true);
        unset($_GET['ai_bpm_nag_ignore']);
    }
}
?>