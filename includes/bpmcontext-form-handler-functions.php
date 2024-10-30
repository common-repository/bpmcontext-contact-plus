<?php

function bpm_contact_form_get_current_site(){

    $current_site = 0;

    if (function_exists('get_current_site')) {
        $current_site = get_current_site();
        $current_site = $current_site->id;
    }

    return $current_site;
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

function bpm_contact_form_find_shortcode($string , $do_it_anyway = false) {

    if(!shortcode_exists($string)) {
        // shortcode was not registered (yet?)
        //write_log('Not Found: ' . $string);
        return null;
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
                $found_codes[$page->ID] = array('page_id' => $page->ID, 'page_name' => $page->post_title);
            }
        }
    }

    $args = array('s' => '[' . $string . ' ');

    $the_query = new WP_Query( $args );

    if ( $the_query->have_posts() ) {

        while ( $the_query->have_posts() ) {
            $found_query = $the_query->the_post();
            $found_codes[get_the_ID()] = array('page_id' => get_the_ID() , 'page_name' => get_the_title());
        }

    }

    $hold_codes = array();
    if($found_codes) {
        foreach ($found_codes as $value) {
            $hold_codes[] = $value;
        }
    }

    return $hold_codes;

}


function bpm_contact_form_get_last_plugin_list(){

    global $allowed_plugins_array;

    $slug_prefix = '';
    $name_prefix = '';

    if (function_exists('is_plugin_active')) {
        if (is_plugin_active('contact-form-7-to-database-extension/contact-form-7-db.php')) {
            update_option('bpm_contact_db', 1);
            $name_prefix = 'Contact Form DB - ';
            $slug_prefix = 'contact-form-7-to-database-extension-';
        }
    }else{
        $option = get_option('bpm_contact_db');

        if($option) {
            $name_prefix = 'Contact Form DB - ';
            $slug_prefix = 'contact-form-7-to-database-extension-';
        }
    }

    //contact form 7
    $allowed_plugins_array['contact-form-7']['name']                = $name_prefix.'Contact Form 7';
    $allowed_plugins_array['contact-form-7']['url']                 = 'https://wordpress.org/plugins/contact-form-7/';
    $allowed_plugins_array['contact-form-7']['slug']                = $slug_prefix.'contact-form-7';
    $allowed_plugins_array['contact-form-7']['plugin_slug']         = 'contact-form-7';
    $allowed_plugins_array['contact-form-7']['plugin_file']         = 'wp-contact-form-7.php';
    $allowed_plugins_array['contact-form-7']['shortcode']           = 'contact-form-7';
    $allowed_plugins_array['contact-form-7']['editor_page']         = array('php-page' => 'admin.php' , 'get_var' => 'page' , 'get_val' => 'wpcf7');
    $allowed_plugins_array['contact-form-7']['form_action']         = array('action' => 'bpm_action' , 'value' => 'cf7');

    //Fast Secure Contact Form
/**
    $allowed_plugins_array['si-contact-form']['name'] = $name_prefix.'Fast Secure Contact Form';
    $allowed_plugins_array['si-contact-form']['url'] = 'https://wordpress.org/plugins/si-contact-form/';
    $allowed_plugins_array['si-contact-form']['slug'] = $slug_prefix .'si-contact-form';
    $allowed_plugins_array['si-contact-form']['plugin_slug'] = 'si-contact-form';
    $allowed_plugins_array['si-contact-form']['plugin_file'] = 'si-contact-form.php';
    $allowed_plugins_array['si-contact-form']['shortcode'] = 'si-contact-form';
    $allowed_plugins_array['quick-contact-form']['editor_page']         = array('php-page' => 'options-general.php' , 'get_var' => 'page' , 'get_val' => 'quick-contact-form/settings.php'); *
**/
    //Jetpack
    /**
     * not supported until we figure out the prefixing
     */
/**
    $allowed_plugins_array['jetpack']['name'] = $name_prefix.'Jetpack';
    $allowed_plugins_array['jetpack']['url'] = 'https://wordpress.org/plugins/jetpack/';
    $allowed_plugins_array['jetpack']['slug'] = $slug_prefix .'jetpack';
    $allowed_plugins_array['jetpack']['plugin_slug'] = 'jetpack';
    $allowed_plugins_array['jetpack']['plugin_file'] = 'jetpack.php';
    $allowed_plugins_array['jetpack']['shortcode'] = 'contact-form';
    $allowed_plugins_array['quick-contact-form']['editor_page']         = array('php-page' => 'options-general.php' , 'get_var' => 'page' , 'get_val' => 'quick-contact-form/settings.php');
    $allowed_plugins_array['jetpack']['form_action'] = array('action' => 'action' , 'value' => 'grunion-contact-form');
**/

    //Gravity Forms
/**
    $allowed_plugins_array['gravityforms']['name'] = $name_prefix.'Gravity Forms';
    $allowed_plugins_array['gravityforms']['url'] = 'http://www.gravityforms.com/';
    $allowed_plugins_array['gravityforms']['slug'] = $slug_prefix .'gravityforms';
    $allowed_plugins_array['gravityforms']['plugin_slug'] = 'gravityforms';
    $allowed_plugins_array['gravityforms']['plugin_file'] = 'gravityforms.php';
    $allowed_plugins_array['gravityforms']['shortcode'] = 'gravityform';
    $allowed_plugins_array['quick-contact-form']['editor_page']         = array('php-page' => 'options-general.php' , 'get_var' => 'page' , 'get_val' => 'quick-contact-form/settings.php');
    $allowed_plugins_array['gravityforms']['form_action'] = array('action' => 'gform_submit' , 'value' => '*');
**/
    //Formidible Forms
    /**
     * not supported until we figure out how to handle the item_meta in the form manager
     */
/**
    $allowed_plugins_array['formidable']['name']                    = $name_prefix.'Formidable Forms';
    $allowed_plugins_array['formidable']['url']                     = 'https://wordpress.org/plugins/formidable/';
    $allowed_plugins_array['formidable']['slug']                    = $slug_prefix .'formidable';
    $allowed_plugins_array['formidable']['plugin_slug']             = 'formidable';
    $allowed_plugins_array['formidable']['plugin_file']             = 'formidable.php';
    $allowed_plugins_array['quick-contact-form']['editor_page']         = array('php-page' => 'options-general.php' , 'get_var' => 'page' , 'get_val' => 'quick-contact-form/settings.php');
    $allowed_plugins_array['formidable']['shortcode']               = 'formidable';
    $allowed_plugins_array['formidable']['form_action']             = array('action' => 'action' , 'value' => 'formidable');
**/
    //WR Contact Forms
/**
    $allowed_plugins_array['wr-contactform']['name']                = $name_prefix.'WR Contact Forms';
    $allowed_plugins_array['wr-contactform']['url']                 = 'https://wordpress.org/plugins/wr-contactform/';
    $allowed_plugins_array['wr-contactform']['slug']                = $slug_prefix .'wr-contactform';
    $allowed_plugins_array['wr-contactform']['plugin_slug']         = 'wr-contactform';
    $allowed_plugins_array['wr-contactform']['plugin_file']         = 'main.php';
    $allowed_plugins_array['quick-contact-form']['editor_page']         = array('php-page' => 'options-general.php' , 'get_var' => 'page' , 'get_val' => 'quick-contact-form/settings.php');
    $allowed_plugins_array['wr-contactform']['shortcode']           = 'wr_contactform';
    $allowed_plugins_array['wr-contactform']['form_action']         = array('action' => 'action' , 'value' => 'wr');
**/
    //QUForm

    //Ninja Forms

    $allowed_plugins_array['ninja-forms']['name']                   = $name_prefix.'Ninja Forms';
    $allowed_plugins_array['ninja-forms']['url']                    = 'https://wordpress.org/plugins/ninja-forms/';
    $allowed_plugins_array['ninja-forms']['slug']                   = $slug_prefix .'ninja-forms';
    $allowed_plugins_array['ninja-forms']['plugin_slug']            = 'ninja-forms';
    $allowed_plugins_array['ninja-forms']['plugin_file']            = 'ninja-forms.php';
    $allowed_plugins_array['ninja-forms']['shortcode']              = 'ninja_forms';
    $allowed_plugins_array['quick-contact-form']['editor_page']     = array('php-page' => 'options-general.php' , 'get_var' => 'page' , 'get_val' => 'quick-contact-form/settings.php');
    $allowed_plugins_array['ninja-forms']['form_action']            = array('action' => 'bpm_action' , 'value' => 'ninja-forms');

    //Caldera Forms
/**
    $allowed_plugins_array['caldera-forms']['name']                 = $name_prefix.'Caldera Forms';
    $allowed_plugins_array['caldera-forms']['url']                  = 'https://wordpress.org/plugins/caldera-forms/';
    $allowed_plugins_array['caldera-forms']['slug']                 = $slug_prefix .'caldera-forms';
    $allowed_plugins_array['caldera-forms']['plugin_slug']          = 'caldera-forms';
    $allowed_plugins_array['caldera-forms']['plugin_file']          = 'caldera-core.php';
    $allowed_plugins_array['caldera-forms']['shortcode']            = 'caldera_form';
    $allowed_plugins_array['quick-contact-form']['editor_page']         = array('php-page' => 'options-general.php' , 'get_var' => 'page' , 'get_val' => 'quick-contact-form/settings.php');
    $allowed_plugins_array['caldera-forms']['form_action']          = array('action' => 'cfajax' , 'value' => '*');
**/
    //Enfold Theme Forms


    //CFormsII
/**
    $allowed_plugins_array['cforms2']['name']                       = $name_prefix.'Cforms II';
    $allowed_plugins_array['cforms2']['url']                        = 'https://wordpress.org/plugins/cforms2/';
    $allowed_plugins_array['cforms2']['slug']                       = $slug_prefix .'cforms2';
    $allowed_plugins_array['cforms2']['plugin_slug']                = 'cforms2';
    $allowed_plugins_array['cforms2']['plugin_file']                = 'cforms.php';
    $allowed_plugins_array['cforms2']['shortcode']                  = 'cforms';
    $allowed_plugins_array['quick-contact-form']['editor_page']         = array('php-page' => 'options-general.php' , 'get_var' => 'page' , 'get_val' => 'quick-contact-form/settings.php');
    $allowed_plugins_array['cforms2']['form_action']                = array('action' => 'action' , 'value' => 'submitcform');
**/
    //Formcraft premium
/**
    $allowed_plugins_array['formcraft-form-builder']['name']        = $name_prefix.'Formcraft';
    $allowed_plugins_array['formcraft-form-builder']['url']         = 'https://wordpress.org/plugins/formcraft-form-builder/';
    $allowed_plugins_array['formcraft-form-builder']['slug']        = $slug_prefix .'formcraft-form-builder';
    $allowed_plugins_array['formcraft-form-builder']['plugin_slug'] = 'formcraft-form-builder';
    $allowed_plugins_array['formcraft-form-builder']['plugin_file'] = 'formcraft-main.php';
    $allowed_plugins_array['formcraft-form-builder']['shortcode']   = 'fcb';
    $allowed_plugins_array['quick-contact-form']['editor_page']         = array('php-page' => 'options-general.php' , 'get_var' => 'page' , 'get_val' => 'quick-contact-form/settings.php');
    $allowed_plugins_array['formcraft-form-builder']['form_action'] = array('action' => 'action' , 'value' => 'submitcform');
**/
    $slug_prefix = '';
    $name_prefix = '';

    //Quick Contact Forms
    $allowed_plugins_array['quick-contact-form']['name']                = 'Quick Contact Form';
    $allowed_plugins_array['quick-contact-form']['url']                 = 'https://wordpress.org/plugins/quick-contact-form/';
    $allowed_plugins_array['quick-contact-form']['slug']                = 'quick-contact-form';
    $allowed_plugins_array['quick-contact-form']['plugin_slug']         = 'quick-contact-form';
    $allowed_plugins_array['quick-contact-form']['plugin_file']         = 'quick-contact-form.php';
    $allowed_plugins_array['quick-contact-form']['shortcode']           = 'qcf';
    $allowed_plugins_array['quick-contact-form']['editor_page']         = array('php-page' => 'options-general.php' , 'get_var' => 'page' , 'get_val' => 'quick-contact-form/settings.php');
    $allowed_plugins_array['quick-contact-form']['form_action']         = array('action' => 'qcfsubmit' , 'value' => '*');

    //Responsive Contact Form
    $allowed_plugins_array['responsive-contact-form']['name']           = __('Responsive Contact Form', 'aicontactform');
    $allowed_plugins_array['responsive-contact-form']['url']            = 'https://wordpress.org/plugins/responsive-contact-form/';
    $allowed_plugins_array['responsive-contact-form']['slug']           = 'responsive-contact-form';
    $allowed_plugins_array['responsive-contact-form']['plugin_slug']    = 'responsive-contact-form';
    $allowed_plugins_array['responsive-contact-form']['plugin_file']    = 'ai-responsive-contact-form.php';
    $allowed_plugins_array['responsive-contact-form']['shortcode']      = 'ai_contact_form';
    $allowed_plugins_array['responsive-contact-form']['editor_page']    = array('php-page' => 'admin.php' , 'get_var' => 'page' , 'get_val' => 'ai_contact');
    $allowed_plugins_array['responsive-contact-form']['form_action']    = array('action' => 'action' , 'value' => 'bpm_ai_action');

    //Coldform Contact Form
	$allowed_plugins_array['contact-coldform']['name']                  = __('Contact Coldform', 'coldform');
	$allowed_plugins_array['contact-coldform']['url']                   = 'https://wordpress.org/plugins/contact-coldform/';
	$allowed_plugins_array['contact-coldform']['slug']                  = 'contact-coldform';
    $allowed_plugins_array['contact-coldform']['plugin_slug']           = 'contact-coldform';
	$allowed_plugins_array['contact-coldform']['plugin_file']           = 'contact-coldform.php';
	$allowed_plugins_array['contact-coldform']['shortcode']             = 'coldform';
    $allowed_plugins_array['contact-coldform']['editor_page']           = array('php-page' => 'options-general.php' , 'get_var' => 'page' , 'get_val' => 'contact-coldform/contact-coldform.php');
    $allowed_plugins_array['contact-coldform']['form_action']           = array('action' => 'coldform_submit' , 'value' => '*');

    //Simple Basic Contact Form
    $allowed_plugins_array['simple-basic-contact-form']['name']         = __('Simple Basic Contact Form', 'scf');
    $allowed_plugins_array['simple-basic-contact-form']['url']          = 'https://wordpress.org/plugins/simple-basic-contact-form/';
    $allowed_plugins_array['simple-basic-contact-form']['slug']         = 'simple-basic-contact-form';
    $allowed_plugins_array['simple-basic-contact-form']['plugin_slug']  = 'simple-basic-contact-form';
    $allowed_plugins_array['simple-basic-contact-form']['plugin_file']  = 'simple-basic-contact-form.php';
    $allowed_plugins_array['simple-basic-contact-form']['shortcode']    = 'simple_contact_form';
    $allowed_plugins_array['simple-basic-contact-form']['editor_page']  = array('php-page' => 'options-general.php' , 'get_var' => 'page' , 'get_val' => 'simple-basic-contact-form/simple-basic-contact-form.php');
    $allowed_plugins_array['simple-basic-contact-form']['form_action']  = array('action' => 'scf_key' , 'value' => 'process');

    //formbuilder
    /**
     * need to figure out the request information to map to the form manager
     */
/**
    $allowed_plugins_array['formbuilder']['name']                       = 'Formbuilder';
    $allowed_plugins_array['formbuilder']['url']                        = 'https://wordpress.org/plugins/formbuilder/';
    $allowed_plugins_array['formbuilder']['slug']                       = 'formbuilder';
    $allowed_plugins_array['formbuilder']['plugin_slug']                = 'formbuilder';
    $allowed_plugins_array['formbuilder']['plugin_file']                = 'formbuilder.php';
    $allowed_plugins_array['formbuilder']['shortcode']                  = 'contact-form';
//    $allowed_plugins_array['formbuilder']['editor_page']                = array('php-page' => 'options-general.php' , 'get_var' => 'page' , 'get_val' => 'quick-contact-form/settings.php');
    $allowed_plugins_array['formbuilder']['form_action']                = array('action' => 'action' , 'value' => 'grunion-contact-form');
**/

    return $allowed_plugins_array;
}