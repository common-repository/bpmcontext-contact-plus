<?php

//ajax calls for contact forms
//quick contact form
add_action( 'wp_ajax_qcf_validate_form', 'bpm_form_plugin_override_ajax' );
add_action( 'wp_ajax_nopriv_qcf_validate_form', 'bpm_form_plugin_override_ajax' );
//jetpack
//add_action( 'grunion_pre_message_sent' , 'bpm_form_plugin_override_jetpack' , 10 , 3);
//contact form 7
add_action( 'wpcf7_before_send_mail', 'bpm_form_plugin_override_cf7' );
//responsive contact form
add_action('wp_ajax_ai_action', 'bpm_form_plugin_override_ajax');
add_action('wp_ajax_nopriv_ai_action', 'bpm_form_plugin_override_ajax');
//cforms2
//add_action( 'wp_ajax_submitcform', 'bpm_form_plugin_override_ajax' );
//add_action( 'wp_ajax_nopriv_submitcform', 'bpm_form_plugin_override_ajax' );
//gravity forms
//add_action( 'gform_pre_submission', 'bpm_form_plugin_override_ajax' );
//caldera forms
//add_action( 'wp_ajax_cf_process_ajax_submit', 'bpm_form_plugin_override_ajax' );
//add_action( 'wp_ajax_nopriv_cf_process_ajax_submit', 'bpm_form_plugin_override_ajax' );
//formcraft
//add_action('formcraft_after_save', 'bpm_form_plugin_override_formcraft', 10, 4);
//ninja forms
add_action( 'ninja_forms_post_process', 'bpm_ninja_forms_processing' );

function bpm_ninja_forms_processing(){

    global $ninja_forms_processing;

    //Get all the user submitted values
    $all_fields = $ninja_forms_processing->get_all_fields();

    global $bpm_page_id;
    $bpm_page_id = $_REQUEST['page_id'];

    $values_array = array();;
    $values_array['bpm_action'] = 'ninja-forms';

    if( is_array( $all_fields ) ){ //Make sure $all_fields is an array.
        //Loop through each of our submitted values.
        foreach( $all_fields as $field_id => $user_value ){
          //Update an external database with each value
            $values_array['ninja_forms_field_' . $field_id] = $user_value;
        }

        bpm_form_plugin_override($values_array);

    }
}



add_action('admin_init', 'bpm_contact_form_get_last_plugin_list');

function bpm_form_get_page_id($values_array){

    $page_id = null;
    $unset_array = array();

    //simple basic contact form handler
    if( isset($values_array['scf_key'])) {
        $page_id = $values_array['page_id'];
        $unset_array['Submit'] = 'Submit';
    }
    //caldera forms
    if( isset($values_array['_cf_cr_pst'])) {
        $page_id = $values_array['_cf_cr_pst'];
        $unset_array['_cf_cr_pst'] = '_cf_cr_pst';
    }
    //quick contact form
    if( isset($values_array['qcfsubmit'])) {
        $page_id = $values_array['page_id'];
        $unset_array['qcfsubmit'] = 'qcfsubmit';
    }

    if( ! $page_id){
        $url = '';
        if(isset($_SERVER['HTTP_REFERER'])) $url = $_SERVER['HTTP_REFERER'] ;
        $options = get_option('bpm_form_permalinks');

        if($options && $url) {
            foreach ( $options as $key => $value ) {
                if ( $value == $url ) {
                    $page_id = $key;
                }
            }
        }
    }

    return array('page_id' => $page_id , 'unset_array' => $unset_array);

}

function bpm_form_get_values($values_array , $options){

    //responsive contact form handler
    switch($values_array['action']){
        case  'ai_action':
            $strArray = explode("&", $values_array['fdata']);
            if($strArray) {
                foreach ($strArray as $item) {
                    $array = explode("=", $item);
                    if ($array[0] != 'submit') $values_array[$array[0]] = urldecode($array[1]);
                    $values_array['action'] = 'bpm_ai_action';
                }
            }
            break;
        case 'grunion-contact-form':
            $contact_form_id = 'g'.$_REQUEST['contact-form-id'];
            if($options['form_map']) {
                foreach ($options['form_map'] as $item) {
                    $array = explode('-',$item['id']);
                    $this_item = str_replace($array[0] , $contact_form_id , $item['id']);
                    $values_array[$item['id']] = $_REQUEST[$this_item];
                }
            }
            if($options['textareas']) {
                foreach ($options['textareas'] as $item) {
                    $array = explode('-',$item);
                    $this_item = str_replace($array[0] , $contact_form_id , $item);
                    $values_array[$item] = $_REQUEST[$this_item];
                }
            }
            break;
    }

    return $values_array;

}


function bpm_contact_form_get_form_elements($short_code_content, $page_id, $slug_id){

    $outstring = '';

    switch($slug_id){
        case 'ninja-forms':
            $tag = "ninja_forms";

            preg_match_all( '/' . get_shortcode_regex() . '/s', $short_code_content, $matches );
            $out = array();
            if( isset( $matches[2] ) )
            {
                foreach( (array) $matches[2] as $key => $value )
                {
                    if( $tag === $value )
                        $out[] = shortcode_parse_atts( $matches[3][$key] );
                }
            }

            if(isset($out[0]['id'])) {
                $array = ninja_forms_get_fields_by_form_id($out[0]['id']);

                for($x=0;$x<sizeof($array);$x++){
                    switch($array[$x]['type']){
                        case '_text':
                            $outstring .= '<input name="ninja_forms_field_'.$array[$x]['id'].'" placeholder="'.$array[$x]['data']['label'].'" type="text" />';
                            break;
                        case '_textarea':
                            $outstring .= '<textarea name="ninja_forms_field_'.$array[$x]['id'].'" placeholder="'.$array[$x]['data']['label'].'"  />';
                            break;
                    }
                }

            }

        break;
        case 'formbuilder':
            ob_start();
            $outstring = do_shortcode(' ' . $short_code_content . ' ');
            ob_end_clean();
            break;
        case 'formcraft-form-builder':
        case 'contact-form-7-to-database-extension-formcraft-form-builder':
            if (function_exists("add_formcraft_form")) {
                ob_start();
                add_formcraft_form($short_code_content);
                $outstring=ob_get_contents();
                ob_end_clean();
            }
            break;
        case 'responsive-contact-form':
    		if(esc_attr(get_option("ai_visible_name"))=="on") $outstring .= '<input name="ai_name" placeholder="Name" type="text" />';
            $outstring .= '<input name="ai_email" placeholder="Email" type="text" />';
            if(esc_attr(get_option('ai_visible_phone'))=="on") $outstring .= '<input name="ai_phone" placeholder="Phone" type="text" />';
            if(esc_attr(get_option('ai_visible_website'))=="on") $outstring .= '<input name="ai_website" placeholder="Website" type="text" />';
            if(esc_attr(get_option('ai_visible_subject'))=="on") $outstring .= '<input name="ai_subject" placeholder="Subject" type="text" />';
            if(esc_attr(get_option('ai_visible_comment'))=="on") $outstring .= '<textarea name="ai_comment" placeholder="Comment"  />';

            break;
        default:
            $outstring = do_shortcode(' ' . $short_code_content . ' ');

    }

    return $outstring;
}

function bpm_contact_us_exclude_field( $field_name , $slug_id ){

    $exclude_list = array();
    $include_field = true;
    $must_contain = null;

    switch($slug_id) {
        case 'contact-coldform':
            $exclude_list[] = 'page_id';
            $exclude_list[] = 'coldform_response';
            $exclude_list[] = 'coldform_verify';
            $exclude_list[] = 'coldform_key';
            $exclude_list[] = 'coldform_submit';
            break;
        case 'simple-basic-contact-form':
            $exclude_list[] = 'page_id';
            $exclude_list[] = 'scf_key';
            $exclude_list[] = 'submit';
            $exclude_list[] = 'scf-nonce';
            $exclude_list[] = 'scf_response';
            break;
        case 'quick-contact-form':
            $exclude_list[] = 'id';
            $exclude_list[] = 'answer';
            $exclude_list[] = 'thesum';
            $exclude_list[] = 'qcfsubmit';
            break;
        case 'contact-form-7':
        case 'contact-form-7-to-database-extension-contact-form-7':
            $exclude_list[] = '_wpcf7';
            $exclude_list[] = '_wpcf7_version';
            $exclude_list[] = '_wpcf7_locale';
            $exclude_list[] = '_wpcf7_unit_tag';
            $exclude_list[] = '_wpnonce';
            $exclude_list[] = '_wpcf7_is_ajax_call';
            $exclude_list[] = 'page_id';
            break;
        case 'responsive-contact-form':
            $exclude_list[] = 'fdata';
            $exclude_list[] = 'action';
            break;
        case 'formbuilder':
            $must_contain = 'formBuilderForm';
            break;
    }

    if($must_contain){
        if(strpos( $field_name , $must_contain ) === false) $include_field = false;
    }

    if(in_array(strtolower($field_name) , array_map('strtolower', $exclude_list))) $include_field = false;

    return $include_field;
}


function bpm_form_plugin_override_formcraft($content, $meta, $raw_content, $integrations) {

    $values_array = $raw_content;
    bpm_form_plugin_override($values_array);
}

function bpm_form_plugin_override_jetpack($post_id , $all_values , $extra_values){

    //jetpack prefixes the fields ... need to figure out how to bypass this issue.
    //bpm_form_plugin_override($_REQUEST);

    return true;
}


function bpm_form_plugin_override_cf7(){

    global $bpm_page_id;
    $bpm_page_id = $_REQUEST['page_id'];

    $values_array = $_REQUEST;
    $values_array['bpm_action'] = 'cf7';

    bpm_form_plugin_override($values_array);
}

class BPM_WPSE_CollectShortcodeAttributes
{
    private $text      = '';
    private $shortcode = '';
    private $atts      = array();

    public function init( $shortcode = '', $text = '' )
    {
        $this->shortcode = esc_attr( $shortcode );
        if( shortcode_exists( $this->shortcode )
            && has_shortcode( $text, $this->shortcode )
        )
        {
            add_filter( "shortcode_atts_{$this->shortcode}",
                array( $this, 'collect' ), 10, 3 );
            $this->text = do_shortcode( $text );
            remove_filter( "shortcode_atts_{$this->shortcode}",
                array( $this, 'collect' ), 10 );
        }
        return $this;
    }

    public function collect( $out, $pair, $atts )
    {
        $this->atts[] = $atts;
        return $out;
    }

    public function get_attributes()
    {
        return $this->atts;
    }
}
?>