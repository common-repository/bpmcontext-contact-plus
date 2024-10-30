<?php

/**
 * Created by PhpStorm.
 * User: fred
 * Date: 4/12/16
 * Time: 9:26 AM
 */

if ( !class_exists('bpmcontext_form_manager') ) {


    class bpmcontext_form_manager
    {

        function __construct()
        {

        }

        function bpm_get_form_fields_by_page($page_id)
        {

            $this_form_info = $this->get_all_forms($page_id);

            if ($this_form_info) {

                $post = get_post($page_id, ARRAY_A);
                return $this->bpm_get_form_fields($post['post_content'], $page_id, $this_form_info[0]['source']);

            } else {
                return array();
            }

        }

        function bpm_get_form_fields($short_code_content, $page_id, $slug_id)
        {

            $outstring = $this->bpm_contact_form_get_form_elements($short_code_content, $page_id, $slug_id);

            $form_items = array();
            $found_array = array();

            $options = get_option('bpm_contact_us_options_' . bpm_contact_form_get_current_site());
            if (!$options) $options = array();

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

                    $infobox_name = '';
                    $is_email = null;
                    $is_subject = null;
                    $ignore = null;
                    $visible = null;

                    foreach ($options as $item) {
                        if ($item['form'] == $page_id && $item['source'] == $slug_id && $item['email_field'] == substr($name_match[0], 6, -1)) $is_email = 1;
                        if ($item['form'] == $page_id && $item['source'] == $slug_id && $item['subject_field'] == substr($name_match[0], 6, -1)) $is_subject = 1;
                        if ($item['form'] == $page_id && $item['source'] == $slug_id && $item['form_map']) {
                            foreach ($item['form_map'] as $item_field) {

                                if ($item_field['id'] == substr($name_match[0], 6, -1)) {
                                    $infobox_name = $item_field['infobox_name'];
                                    $visible = $item_field['visible'];
                                }
                            }
                        }
                    }

                    $include_field = $this->bpm_contact_form_exclude_field(substr($name_match[0], 6, -1), $slug_id);
                    if(in_array(substr($name_match[0], 6, -1) , $found_array)) $include_field = false;

                    if ($include_field) {
                        $found_array[] = substr($name_match[0], 6, -1);
                        $form_items['fields'][$x] = array('type' => 'text', 'name' => substr($name_match[0], 6, -1), 'label' => $label, 'infobox_name' => $infobox_name, 'is_email' => $is_email, 'is_subject' => $is_subject, 'ignore' => $ignore, 'visible' => $visible);
                    }
                }
            }

            $pattern = "/<\s* input [^>]+ >/xi";
            preg_match_all($pattern, $outstring, $matches);
            $matches = array_merge($select_matches, $matches[0]);


            for ($x = 0; $x < sizeof($matches); $x++) {
                $type_success = preg_match($type_pattern, $matches[$x], $type_match);
                $name_success = preg_match($name_pattern, $matches[$x], $name_match);
                $label_success = preg_match($label_pattern, $matches[$x], $label_match);
                $placeholder_success = preg_match($placeholder_pattern, $matches[$x], $placeholder_match);

                if ($name_success && $type_success) {
                    $label = '';

                    if ($placeholder_success) {
                        $label = substr($placeholder_match[0], 13, -1);
                    } else {
                        if ($label_success) {
                            $label = substr($label_match[0], 7, -1);
                        }
                    }

                    $is_email = 0;
                    $is_subject = 0;
                    $infobox_name = '';
                    $visible = '';
                    $ignore = '';

                    foreach ($options as $item) {
                        if ($item['form'] == $page_id && $item['source'] == $slug_id && $item['email_field'] == substr($name_match[0], 6, -1)) $is_email = 1;
                        if ($item['form'] == $page_id && $item['source'] == $slug_id && $item['subject_field'] == substr($name_match[0], 6, -1)) $is_subject = 1;
                        if ($item['form'] == $page_id && $item['source'] == $slug_id && $item['form_map']) {
                            foreach ($item['form_map'] as $item_field) {
                                if ($item_field['id'] == substr($name_match[0], 6, -1)) {
                                    $infobox_name = $item_field['infobox_name'];
                                    $visible = $item_field['visible'];

                                }
                            }
                        }
                    }

                    $include_field = $this->bpm_contact_form_exclude_field(substr($name_match[0], 6, -1), $slug_id);

                    if (substr($type_match[0], 6, -1) != 'submit' && $include_field) {
                        $form_items['fields'][$x] = array('type' => substr($type_match[0], 6, -1), 'name' => substr($name_match[0], 6, -1), 'label' => $label, 'infobox_name' => $infobox_name, 'is_email' => $is_email, 'is_subject' => $is_subject, 'ignore' => $ignore, 'visible' => $visible);
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

        }

        function get_all_forms($page_id = null)
        {

            global $allowed_plugins_array;

            $all_forms_array = array();
            $permalinks = array();
            $found_array = array();

            foreach ($allowed_plugins_array as $temp_array) {
                $this_slug = $temp_array['plugin_slug'] . '/' . $temp_array['plugin_file'];
                if (is_plugin_active($this_slug)) {
                    $this_plugin_pages = bpm_contact_form_find_shortcode($temp_array['shortcode']);

                    for ($x = 0; $x < sizeof($this_plugin_pages); $x++) {
                        if (($page_id && $page_id == $this_plugin_pages[$x]['page_id']) || !$page_id) {
                            if(!in_array($this_plugin_pages[$x]['page_id'], $found_array)){
                                $found_array[$this_plugin_pages[$x]['page_id']] = $this_plugin_pages[$x]['page_id'];
                                $permalinks[$this_plugin_pages[$x]['page_id']] = get_permalink($this_plugin_pages[$x]['page_id']);
                                $all_forms_array[] = array('plugin' => $temp_array['name'], 'form_id' => $this_plugin_pages[$x]['page_id'], 'source' => $temp_array['slug'], 'page_name' => $this_plugin_pages[$x]['page_name']);
                            }
                        }
                    }
                }
            }

            update_option('bpm_form_permalinks' , $permalinks);
            return $all_forms_array;
        }

        function bpm_contact_form_get_values($values_array)
        {

            //responsive contact form handler
            if ($values_array['action'] == 'ai_action') {
                $strArray = explode("&", $values_array['fdata']);
                foreach ($strArray as $item) {
                    $array = explode("=", $item);
                    if ($array[0] != 'submit') $values_array[$array[0]] = urldecode($array[1]);
                    $values_array['action'] = 'bpm_ai_action';
                }
            }

            return $values_array;

        }

        function bpm_contact_form_get_form_elements($short_code_content, $page_id, $slug_id)
        {

            $outstring = '';

            switch ($slug_id) {
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
                                case '_list':
                                    $outstring .= '<input name="ninja_forms_field_'.$array[$x]['id'].'" placeholder="'.$array[$x]['data']['label'].'" type="text" />';
                                    break;
                                case '_checkbox':
                                    //how to handle
                                    $outstring .= '<input name="ninja_forms_field_'.$array[$x]['id'].'" placeholder="'.$array[$x]['data']['label'].'" type="text" />';
                                    break;
                                case '_number':
                                case '_rating':
                                    $outstring .= '<input name="ninja_forms_field_'.$array[$x]['id'].'" placeholder="'.$array[$x]['data']['label'].'" type="text" />';
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
                        $outstring = ob_get_contents();
                        ob_end_clean();
                    }
                    break;
                case 'responsive-contact-form':
                    if (esc_attr(get_option("ai_visible_name")) == "on") $outstring .= '<input name="ai_name" placeholder="Name" type="text" />';
                    $outstring .= '<input name="ai_email" placeholder="Email" type="text" />';
                    if (esc_attr(get_option('ai_visible_phone')) == "on") $outstring .= '<input name="ai_phone" placeholder="Phone" type="text" />';
                    if (esc_attr(get_option('ai_visible_website')) == "on") $outstring .= '<input name="ai_website" placeholder="Website" type="text" />';
                    if (esc_attr(get_option('ai_visible_subject')) == "on") $outstring .= '<input name="ai_subject" placeholder="Subject" type="text" />';
                    if (esc_attr(get_option('ai_visible_comment')) == "on") $outstring .= '<textarea name="ai_comment" placeholder="Comment"  />';

                    break;
                default:
                    $outstring = do_shortcode(' ' . $short_code_content . ' ');

            }

            return $outstring;
        }

        function bpm_contact_form_exclude_field($field_name, $slug_id)
        {

            $exclude_list = array();
            $include_field = true;
            $must_contain = null;

            $exclude_list[] = '_wpnonce';

            switch ($slug_id) {
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
                    $exclude_list[] = '_wpcf7_is_ajax_call';
                    $exclude_list[] = 'page_id';
                    break;
                case 'responsive-contact-form':
                    $exclude_list[] = 'fdata';
                    $exclude_list[] = 'action';
                    break;
                case 'formbuilder':
                    $exclude_list[] = '_wp_http_referer';
                    $exclude_list[] = 'action';
                    $exclude_list[] = 'contact-form-id';
                    break;
            }

            if ($must_contain) {
                if (strpos($field_name, $must_contain) === false) $include_field = false;
            }

            if (in_array(strtolower($field_name), array_map('strtolower', $exclude_list))) $include_field = false;

            return $include_field;
        }


        function create_infobox($id, $data = null, $name = null, $selected = null, $addl_class = null, $onchange_function = null)
        {

            $this->sksort($data, 'name', true);
            $onchange_function_info = '';
            if ($onchange_function) $onchange_function_info = 'onchange="' . $onchange_function . '(this)"';

            $html_line = '<select id="' . $id . '" class="bpm_contact_us_form_field bpm-select ' . $addl_class . '" name="' . $name . '" ' . $onchange_function_info . '>';

            for ($x = 0; $x < sizeof($data); $x++) {
                if ($selected && $selected['value'] == $data[key($data)]['value']) {
                    $html_line .= '<option value="' . $data[key($data)]['value'] . '" selected>' . $data[key($data)]['name'] . '</option>';
                } else {
                    $html_line .= '<option value="' . $data[key($data)]['value'] . '" >' . $data[key($data)]['name'] . '</option>';
                }
                next($data);
            }

            $html_line .= '</select>';

            return $html_line;

        }

        function get_form_name( $form_id ){

            return get_the_title( $form_id );

        }

        function sksort(&$array, $subkey="id", $sort_ascending=false) {

            if (count($array))
                $temp_array[key($array)] = array_shift($array);

                    foreach($array as $key => $val){
                        $offset = 0;
                        $found = false;
                        foreach($temp_array as $tmp_key => $tmp_val)
                        {
                            if(!$found and strtolower($val[$subkey]) > strtolower($tmp_val[$subkey]))
                            {
                                $temp_array = array_merge(    (array)array_slice($temp_array,0,$offset),
                                                            array($key => $val),
                                                            array_slice($temp_array,$offset)
                                                          );
                                $found = true;
                            }
                            $offset++;
                        }
                        if(!$found) $temp_array = array_merge($temp_array, array($key => $val));
                    }

                    if ($sort_ascending) $array = array_reverse($temp_array);

                    else $array = $temp_array;
            }

        function options_for_form( $form_id ){

            $options = get_option('bpm_contact_us_options_'.bpm_contact_form_get_current_site());
            $this_option = array();
            $mainkey = '';

            $form_info = $this->get_all_forms($form_id);
            if($options) {
                foreach ($options as $key => $item) {
                    $mainkey = $key;
                    if ($item['form'] == $form_id) {
                        $this_option = $item;
                        $this_option['key'] = $key;
                        $this_option['mainkey'] = $key;
                    }
                }
            }

            $this_option['source'] = $form_info[0]['source'];
            if( ! $this_option['key'] ) $this_option['mainkey'] = $mainkey;

            return $this_option;

        }


    } //end of form manager class

} //end of check for existing form manager class