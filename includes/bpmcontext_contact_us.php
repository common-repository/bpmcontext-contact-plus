<?php
/**
 * Created by PhpStorm.
 * User: fred
 * Date: 2/11/16
 * Time: 2:10 PM
 */


add_action( 'plugins_loaded', 'bpm_form_plugin_override' );
add_action( 'wp_ajax_form_update_contact_us', 'bpm_contact_form_update_contact_us' );
add_action( "bpmcontext_before_send_mail", "bpm_contact_form_admin_do_contact_us_workflow" );

function bpm_contact_form_onboarding_html(){

    return '  <li data-id="bpm_homepage_form_map_header" data-button="Close" data-callback="bpmcontext_context_plus.testalert" data-options="tip_location:bottom;prev_button: false" >
                <h3 >See where your inquiries are generated</h3 >
            </li >';
}

function bpm_form_plugin_override($values_array = array()) {

    if(!$values_array) $values_array = $_REQUEST;

    $options = get_option('bpm_contact_us_options_'.bpm_contact_form_get_current_site());

    $page_id =  get_the_ID();

    if( ! $page_id ){

        global $bpm_page_id;
        $page_id = $bpm_page_id;
    }


    $unset_array = array();

    if( ! $page_id ) $info_array = bpm_form_get_page_id($values_array);

    if($info_array) {
        $page_id = $info_array['page_id'];
        $unset_array = $info_array['unset_array'];
    }

    if(!$options || ! $page_id) return;

    global $allowed_plugins_array;

    if(!$allowed_plugins_array) bpm_contact_form_get_last_plugin_list();

    $is_bpm_managed = false;
    $this_api_key = '';
    $this_api = '';

    for($x=0;$x<sizeof($options);$x++){
        if($options[key($options)]['form'] == $page_id && $options[key($options)]['enabled'] == 1 ){

            foreach ($allowed_plugins_array as $temp_array) {

                if($temp_array['slug'] == $options[key($options)]['source']){

                    if(isset($values_array[$temp_array['form_action']['action']]) && ($temp_array['form_action']['value'] == '*' || $values_array[$temp_array['form_action']['action']] == $temp_array['form_action']['value'])){
                        $is_bpm_managed = true;
                        $this_api = current($options);
                        $this_api_key = key($options);

                        $values_array = bpm_form_get_values($_REQUEST , $options[key($options)]);
                        unset($values_array[$temp_array['form_action']['action']]);
                    }
                }
            }
        }
        next($options);
    }

    if($is_bpm_managed){

        $additional_fields = array();

        //set naming fields
        $bpm_naming_rule_1 = '';
        $bpm_naming_rule_2 = '';
        $bpm_subject_text = '';

        if($values_array[$this_api['email_field']]) $bpm_naming_rule_1 = $values_array[$this_api['email_field']];
        if($values_array[$this_api['subject_field']]) $bpm_naming_rule_2 = $values_array[$this_api['subject_field']];

        if($this_api['textareas']) {
            foreach ($this_api['textareas'] as $value) {
                $bpm_subject_text .= $values_array[$value];
            }
        }

        $main_fields = array('bpm_naming_rule_1'=>$bpm_naming_rule_1, 'bpm_naming_rule_2'=>$bpm_naming_rule_2, 'message'=>$bpm_subject_text);

        //map fields using form setup information
        foreach($values_array as $key => $value){
            if(!isset($unset_array[$key]) && $this_api['form_map'] ){
                foreach($this_api['form_map'] as $this_key => $this_value) {
                    if ($key == $this_value['id'] && ($this_value['ignore'] == 'no' || $this_value['ignore'] == 0)) {
                        $additional_fields[$this_value['infobox_name']] = $values_array[$this_value['id']];
                    }
                }
            }
        }

        $message = array();
        $message['skip_mail'] = bpm_form_api_send_contact_me_form($main_fields, $this_api_key, $additional_fields , $this_api['source']);

        global $bpm_contact_form;
        $bpm_contact_form = $message;

    }
}



function bpm_form_plugin_override_ajax(){

    global $bpm_page_id;

    $url = $_SERVER['HTTP_REFERER'] ;
    $options = get_option('bpm_form_permalinks');
    if($options) {
        foreach ( $options as $key => $value ) {
            if ( $value == $url ) {
                $bpm_page_id = $key;
            }
        }
    }

    $values_array = bpm_form_get_values($_REQUEST , false);

    bpm_form_plugin_override($values_array);

    return true;

}

function bpm_contact_form_admin_do_contact_us_workflow($message) {

    $options = get_option('bpm_contact_us_options_'.bpm_contact_form_get_current_site());

    $is_bpm_managed = false;

    if(!$options) return;

    for($x=0;$x<sizeof($options);$x++){
        if($options[key($options)]['form'] == $message['form'] && $options[key($options)]['enabled'] == 1 && $options[key($options)]['source'] == $message['fields']['form-id']){
            $is_bpm_managed = true;
        }
        if($options[key($options)]['form'] == 0 && $options[key($options)]['enabled'] == 1 && $options[key($options)]['source'] == $message['fields']['form-id']){
            $is_bpm_managed = true;
        }
        next($options);
    }

    if ($is_bpm_managed) {
        $message['skip_mail'] = $is_bpm_managed;
    }

    global $bpm_contact_form;
    $bpm_contact_form = $message;

    return $message;
}


function bpm_contact_form_update_contact_us(){

    if ($_REQUEST['bpm_admin_action']) {

        global $bpm_server_info;

        $site_id = bpm_contact_form_get_current_site();

        $querystring = 'https://'.$bpm_server_info['bpm_server'].'/'.$bpm_server_info['bpm_api'].'/bpmcontext_wordpress.php?nonce='.$_REQUEST['bpm_admin_contact_us_nonce'].'&apikey=' . $_REQUEST['bpm_admin_contact_us_api_key'] . '&action='.$_REQUEST['bpm_admin_action'].'&site_id='.$site_id;

        //add infoboxes
        if(isset($_REQUEST['bpm_form_settings'])) {
            for ($x = 0; $x < sizeof($_REQUEST['bpm_form_settings']); $x++) {
                if($_REQUEST['bpm_form_settings'][$x]['ignore'] == 'no' || $_REQUEST['bpm_form_settings'][$x]['ignore'] == 0) {
                    $querystring .= "&info_name[$x]=" . str_replace(' ','_',$_REQUEST['bpm_form_settings'][$x]['infobox_name']);
                    $querystring .= "&info_visible[$x]=" . $_REQUEST['bpm_form_settings'][$x]['visible'];
                }
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


function bpm_form_setup_contact_us($get_type)
{

    $options = get_option('bpm_contact_us_options');

    if($options){
        update_option( 'bpm_contact_us_options_'.bpm_contact_form_get_current_site() , $options );
        delete_option( 'bpm_contact_us_options' );
    }

    global $allowed_plugins_array;

    ksort($allowed_plugins_array);

    $this_slug = '';

    switch($get_type) {
        case 'plugins_allowed':

            $active_plugin_array = array();
            $permalinks  = array();

            for ($x = 0; $x<sizeof($allowed_plugins_array);$x++) {

                $temp_array = current($allowed_plugins_array);

                if(isset($temp_array['plugin_slug'])) $this_slug = $temp_array['plugin_slug'] . '/' . $temp_array['plugin_file'];

                if (is_plugin_active($this_slug)) {

                    //plugin is activated
                    $has_forms = false;
                    $form_fields = array();

                    $bpm = new bpmcontext_sdk_manager();
                    $page_array = $bpm->bpm_find_shortcode($temp_array['shortcode']);

                    for ($y = 0; $y < sizeof($page_array); $y++) {
                        $post = get_post($page_array[$y], ARRAY_A );
                        $form_fields[$page_array[$y]] = bpm_form_get_form_fields( $post['post_content'] , $page_array[$y] , $temp_array['slug'] );
                        if(sizeof($form_fields[$page_array[$y]])) $has_forms = true;
                        $form_fields[$page_array[$y]]['title'] = get_the_title($page_array[$y]);
                        $form_fields[$page_array[$y]]['id'] = $page_array[$y];
                        $permalinks[$page_array[$y]] = get_permalink($page_array[$y]);

                    }

                    if(sizeof($page_array) && $has_forms) {
                        $active_plugin_array[$x] = current($allowed_plugins_array);
                        $active_plugin_array[$x]['forms'] = $form_fields;
                    }

                }
                next($allowed_plugins_array);
            }
            update_option('bpm_form_permalinks' , $permalinks);
            return $active_plugin_array;
            break;
        case 'plugins_allowed_all':

            return $allowed_plugins_array;
            break;
        case 'plugins_allowed_keys':
            $options = get_option('bpm_contact_us_options_'.bpm_contact_form_get_current_site());
            return $options;
            break;

    }

}

function bpm_form_api_send_contact_me_form($fields, $api_key, $additional_fields = array() , $slug_id){

    $querystring = '';

    if(!is_array($fields)) return;
    if(!$fields['bpm_naming_rule_1']) $fields['bpm_naming_rule_1'] = 'No From Email';
    if(!$fields['bpm_naming_rule_2']) $fields['bpm_naming_rule_2'] = 'No Subject';

    for($x=0;$x<sizeof($fields);$x++){
        $querystring .= "&".key($fields)."=" . rawurlencode(nl2br(current($fields)));
        next($fields);
    }

    if(is_array($additional_fields)) {
        for ($x = 0; $x < sizeof($additional_fields); $x++) {
            if(bpm_contact_us_exclude_field( key($additional_fields) , $slug_id )) {
                $querystring .= "&" . str_replace(' ', '_', key($additional_fields)) . "=" . rawurlencode(nl2br(current($additional_fields)));
            }
            next($additional_fields);
        }
    }

    //get ip address
    $querystring .= '&ipaddress=' . bpm_form_get_client_ip();
    $querystring .= '&site_id=' . bpm_contact_form_get_current_site();

    if($api_key) {

        global $bpm_server_info;;

        $querystring = 'https://'.$bpm_server_info['bpm_server'].'/'.$bpm_server_info['bpm_api'].'/bpmcontext_wordpress.php?apikey=' . $api_key . $querystring;

        $response = wp_remote_get($querystring);

        if (is_array($response) && !is_wp_error($response)) {

            $result = $response['body'];
            $pos = strrpos($result, "Failed");

            if ($pos === false) {
                return true;
            } else {
                return false;
            }
        }
    }
        return false;

}

function bpm_form_get_client_ip()
    {
        $ipaddress = '';
        if (getenv('HTTP_CLIENT_IP'))
            return getenv('HTTP_CLIENT_IP');
        else if (getenv('HTTP_X_FORWARDED_FOR'))
            return getenv('HTTP_X_FORWARDED_FOR');
        else if (getenv('HTTP_X_FORWARDED'))
            return getenv('HTTP_X_FORWARDED');
        else if (getenv('HTTP_FORWARDED_FOR'))
            return getenv('HTTP_FORWARDED_FOR');
        else if (getenv('HTTP_FORWARDED'))
            return getenv('HTTP_FORWARDED');
        else if (getenv('REMOTE_ADDR'))
            return getenv('REMOTE_ADDR');
        else
            return 'UNKNOWN';

}

function bpm_form_get_form_fields($short_code_content, $page_id, $slug_id){

    try {
        $outstring = bpm_contact_form_get_form_elements($short_code_content, $page_id, $slug_id);

        $form_items = array();
        $options = get_option('bpm_contact_us_options_'.bpm_contact_form_get_current_site());
        if( ! $options) $options = array();

        $name_pattern = '~name=(["\'])([^"\']+)\1~';
        $type_pattern = '~type=(["\'])([^"\']+)\1~';
        $label_pattern = '~value=(["\'])([^"\']+)\1~';
        $placeholder_pattern = '~placeholder=(["\'])([^"\']+)\1~';

        $pattern = "/<\s* select [^>]+ >/xi";
        preg_match_all($pattern, $outstring, $select_matches);
        $select_matches = $select_matches[0];

        for ($x = 0; $x < sizeof($select_matches); $x++) {
            $name_success = preg_match($name_pattern, $select_matches[$x], $name_match);
            $label_success = preg_match($label_pattern, $select_matches[$x], $label_match);
            $placeholder_success = preg_match($placeholder_pattern, $select_matches[$x], $placeholder_match);

            if ($name_success) {
                $label = '';

                if ($placeholder_success) {
                    $label = substr($placeholder_match[0], 13, -1);
                } else {
                    if ($label_success) {
                        $label = substr($label_match[0], 7, -1);
                    }
                }
                $visible = 0;
                $ignore = 0;
                $is_subject = 0;
                $is_email = 0;
                $infobox_name = '';

                if($options) {
                    foreach ($options as $item) {
                        if ($item['form'] == $page_id && $item['source'] == $slug_id && $item['email_field'] == substr($name_match[0], 6, -1)) $is_email = 1;
                        if ($item['form'] == $page_id && $item['source'] == $slug_id && $item['subject_field'] == substr($name_match[0], 6, -1)) $is_subject = 1;
                        if ($item['form'] == $page_id && $item['source'] == $slug_id && $item['form_map']) {
                            foreach ($item['form_map'] as $item_field) {
                                if ($item_field['id'] == substr($name_match[0], 6, -1)) {
                                    $infobox_name = $item_field['infobox_name'];
                                    if ($item_field['visible'] == 1 || $item_field['visible'] == 'yes') $visible = 1;
                                    if ($item_field['ignore'] == 1 || $item_field['ignore'] == 'yes') $ignore = 1;
                                }
                            }
                        }
                    }
                }

                $include_field = bpm_contact_us_exclude_field(substr($name_match[0], 6, -1), $slug_id);

                if ($include_field) {
                    $form_items['fields'][$x] = array('type' => 'text', 'name' => substr($name_match[0], 6, -1), 'label' => $label, 'infobox_name' => $infobox_name, 'is_email' => $is_email, 'is_subject' => $is_subject, 'ignore' => $ignore, 'visible' => $visible);
                }
            }
        }

        $pattern = "/<\s* input [^>]+ >/xi";
        preg_match_all($pattern, $outstring, $matches);
        $matches = array_merge($select_matches , $matches[0]);


        for ($x = 0; $x < sizeof($matches); $x++) {
            $type_success = preg_match($type_pattern, $matches[$x], $type_match);
            $name_success = preg_match($name_pattern, $matches[$x], $name_match);
            $label_success = preg_match($label_pattern, $matches[$x], $label_match);
            $placeholder_success = preg_match($placeholder_pattern, $matches[$x], $placeholder_match);

            if ($name_success && $type_success){
                $label  = '';

                if($placeholder_success){
                    $label = substr($placeholder_match[0], 13, -1);
                }else {
                    if ($label_success) {
                        $label = substr($label_match[0], 7, -1);
                    }
                }

                $is_email = 0;
                $is_subject = 0;
                $infobox_name = '';
                $visible = '';
                $ignore = '';

                foreach($options as $item){
                    if($item['form'] == $page_id && $item['source'] == $slug_id && $item['email_field'] == substr($name_match[0], 6, -1)) $is_email = 1;
                    if($item['form'] == $page_id && $item['source'] == $slug_id && $item['subject_field'] == substr($name_match[0], 6, -1)) $is_subject = 1;
                    if($item['form'] == $page_id && $item['source'] == $slug_id && $item['form_map']) {
                        foreach ($item['form_map'] as $item_field) {
                            if ($item_field['id'] == substr($name_match[0], 6, -1)){
                                $infobox_name = $item_field['infobox_name'];
                                if($item_field['visible'] == 1 || $item_field['visible'] == 'yes') $visible = 1;
                                if($item_field['ignore'] == 1 || $item_field['ignore'] == 'yes') $ignore = 1;
                            }
                        }
                    }
                }

               $include_field = bpm_contact_us_exclude_field(substr($name_match[0], 6, -1) , $slug_id );

               if( substr($type_match[0], 6, -1) != 'submit' && $include_field){
                   $form_items['fields'][$x] = array('type' => substr($type_match[0], 6, -1), 'name' => substr($name_match[0], 6, -1), 'label' => $label , 'infobox_name' => $infobox_name, 'is_email'=>$is_email, 'is_subject' => $is_subject , 'ignore'=>$ignore, 'visible'=>$visible);
               }

            }
        }

        $pattern = "/<\s* textarea [^>]+ >/xi";
        preg_match_all($pattern, $outstring, $matches);
        $matches = $matches[0];

        for ($x = 0; $x < sizeof($matches); $x++) {
            $name_success = preg_match($name_pattern, $matches[$x], $name_match);
            if ($name_success) $form_items['textarea'][$x] = array('name' => substr($name_match[0], 6, -1));
        }

        return $form_items;

    }catch (Exception $e) {

        return array();
    }

}

if (!function_exists('bpm_app_debug')) {
    function bpm_app_debug($message){
        echo '<div style="margin-left:15em;">';
        echo '<pre>';
        print_r($message);
        echo '</pre>';
        echo '</div>';
    }
}
if (!function_exists('write_log')) {
    function write_log ( $log )  {
        if ( is_array( $log ) || is_object( $log ) ) {
            error_log( print_r( $log, true ) );
        } else {
            error_log( $log );
        }
    }
}

?>