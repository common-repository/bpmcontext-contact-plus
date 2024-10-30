
jQuery(document).ready(bpm_form_open_bpmcontext);

function bpm_form_open_bpmcontext() {

    var bpm_form_processing = false;

    jQuery('#bpm_contact_form_saved_message').hide();
    jQuery( 'body').append(jQuery('#bpm_contact_form_activity_overlay').detach());

    jQuery( '.bpm-form-education-header' ).click(function() {

        if (bpm_form_processing) return;
        bpm_form_processing = true;

        var open_status = 0;

        if (jQuery('#bpm-form-education-header').height() > 100){
            open_status = 1;
            jQuery('#bpm-form-education-header').animate({'height': '4.5em'}, 500 , function() {
             // Animation complete.
                jQuery('.bpm-form-education-content').hide();
                jQuery('#bpm-form-education-header').css('overflow' ,'none');

          });

            bpm_form_processing = false;
        }else{

            jQuery('.bpm-form-education-content').show();
            open_status = 0;
            jQuery('#bpm-form-education-header').animate({'height': 384}, 500, function() {
                jQuery('#bpm-form-education-header').css('overflow', 'scroll');
            });
            bpm_form_processing = false;
        }

            var data = {
                'action': 'bpm_update_education_open_status',
                'open_status': open_status
            };

            jQuery.post(ajaxurl, data, function (wp_result) {

            });

    });

    jQuery( '.bpm_contact_enabled_list_id' ).click(function() {
        return false;
    });

    if( ! bpm_form_params ) return;

    //ONLY connect if this user has created and account, has logged into bpmcontext from THIS server.  Otherwise, require them to setup and account AND opt-in
    if (bpm_form_params.bpm_login_status == 1) {
        //setup contact us form management

        jQuery.getJSON('https://' + bpm_form_params.bpm_server + '/' + bpm_form_params.bpm_api + '/bpmcontext_wordpress.php?callback=?', 'action=get_contact_us_analytics&site_id=' + bpm_form_params.current_site +'&page_info='+bpm_form_params.page_info, function (result) {

            if(result) {
                //setup page
                //account dropdown

                    var data = {
                        'action': 'update_contact_us_analytics',
                        'data': result.page_data,
                        'activity_table': bpm_form_params.page_info,
                        'account_list' : result.accounts,
                        'user_list' : result.users,
                        'workspaces' : result.workspaces
                    };

                    jQuery.post(ajaxurl, data, function (wp_result) {

                        var result_json = JSON.parse(wp_result);
                        var new_html = result_json.data;
                        jQuery('#bpm-form-analytics').html(new_html);

                    });

            }
        });
    }



    jQuery('#bpm_contact_form_save_button').click(function(e) {
        if (jQuery('#bpm_contact_form_save_button').hasClass('disabled')){
            e.preventDefault();
            return false;
        }else{
            bpm_contact_form_save();
        }
    });

    jQuery('#bpm_contact_enabled_id').click(function(){

        bpm_contact_form_validate_contact_settings();

        jQuery(window).bind('beforeunload', function(){
            return 'Are you sure you want to leave?';
        });

    });

    jQuery('.bpm_contact_form_visible').click(function() {

        bpm_contact_form_validate_contact_settings();

        jQuery(window).bind('beforeunload', function(){
            return 'Are you sure you want to leave?';
        });

    });

    if(!jQuery('#bpm_contact_form_api_key').text()){
        jQuery('#bpm_contact_form_save_button').removeClass('disabled').show();
    }



}

function bpm_form_change_activity_list(){
    if (bpm_form_params.bpm_login_status == 1) {
        jQuery('#bpm_form_change_activity_list').submit();
    }
}


function bpm_admin_update_parent_page_list(selected_object){

    if(!bpm_form_params.workspaces) return;

    jQuery(window).bind('beforeunload', function(){
        return 'Are you sure you want to leave?';
    });

    var accountid = jQuery('#bpm_contact_form_account_id').val();

    switch(selected_object.id){

        case 'bpm_contact_form_account_id':

            //update destination workspace dropdown
            if(bpm_form_params.workspaces[accountid]){
                var html_line = '';
                jQuery.each(bpm_form_params.workspaces[accountid],function(this_index, this_value) {
                    html_line = html_line.concat('<option value="'+this_value['value']+'">'+this_value['name']+'</option>')
                });
                jQuery('#bpm_contact_form_workspace_id').html(html_line);

                var destination_workspace = jQuery('#bpm_contact_form_workspace_id').val();

                if(bpm_form_params.workspaces[accountid][destination_workspace]) {
                    html_line = '';
                    jQuery.each(bpm_form_params.workspaces[accountid][destination_workspace]['parent_pages'], function (this_index, this_value) {
                        html_line = html_line.concat('<option value="' + this_value['value'] + '">' + this_value['name'] + '</option>')
                    });
                    jQuery('#bpm_contact_form_workspace_parent_id').html(html_line);
                }else{
                    html_line = '<option value="0">No Parent Pages Configured</option>';
                    jQuery('#bpm_contact_form_workspace_parent_id').html(html_line);
                }
            }else{
                html_line = '<option value="0">No Workspaces Configured</option>';
                jQuery('#bpm_contact_form_workspace_id').html(html_line);
                html_line = '<option value="0">No Parent Pages Configured</option>';
                jQuery('#bpm_contact_form_workspace_parent_id').html(html_line);
            }

            html_line = '';
            //update process owner
            jQuery.each(bpm_form_params.users[accountid],function(this_index, this_value) {
                    html_line = html_line.concat('<option value="'+this_value['value']+'">'+this_value['name']+'</option>')
                });
            jQuery('#bpm_contact_form_process_owner_id').html(html_line);
            jQuery('#bpm_contact_form_process_doer_id').html(html_line);
            //update process doer

            break;
        case 'bpm_contact_form_workspace_id':
            var destination_workspace = jQuery('#bpm_contact_form_workspace_id').val();

            if(bpm_form_params.workspaces[accountid][destination_workspace]) {
                    html_line = '';
                    jQuery.each(bpm_form_params.workspaces[accountid][destination_workspace]['parent_pages'], function (this_index, this_value) {
                        html_line = html_line.concat('<option value="' + this_value['value'] + '">' + this_value['name'] + '</option>')
                    });
                    jQuery('#bpm_contact_form_workspace_parent_id').html(html_line);
                }else{
                    html_line = '<option value="0">No Parent Pages Configured</option>';
                    jQuery('#bpm_contact_form_workspace_parent_id').html(html_line);
                }
            break;

    }

    bpm_contact_form_validate_contact_settings();

}

function bpm_contact_form_validate_contact_settings() {

    var form_fields = bpm_contact_form_get_fields();

    var ok_to_save = true;

    if( form_fields['dest_workspace'] == 0)     ok_to_save = false;
    if( form_fields['workspace_parent'] == 0)   ok_to_save = false;
    if( form_fields['process_owner'] == 0)      ok_to_save = false;
    if( form_fields['process_doer'] == 0)       ok_to_save = false;
    if( form_fields['email_field'] == 0)        ok_to_save = false;
    if( form_fields['subject_field'] == 0)      ok_to_save = false;

    if(ok_to_save){
        jQuery('#bpm_contact_form_save_button').removeClass('disabled').show();
    }else{
        jQuery('#bpm_contact_form_save_button').addClass('disabled').hide();
    }

}

function bpm_contact_form_get_fields(){

    var form_fields = [];
    form_fields['fields'] = [];

    form_fields['form_id']             = jQuery('#bpm_contact_form_id').text();
    form_fields['api_key']             = jQuery('#bpm_contact_form_api_key').text();
    form_fields['main_api_key']        = jQuery('#bpm_contact_form_mainapi_key').text();
    form_fields['plugin_source']       = jQuery('#bpm_contact_form_plugin').text();
    form_fields['account_id']          = jQuery('#bpm_contact_form_account_id').val();
    form_fields['dest_workspace']      = jQuery('#bpm_contact_form_workspace_id').val();
    form_fields['workspace_parent']    = jQuery('#bpm_contact_form_workspace_parent_id').val();
    form_fields['process_owner']       = jQuery('#bpm_contact_form_process_owner_id').val();
    form_fields['process_doer']        = jQuery('#bpm_contact_form_process_doer_id').val();
    form_fields['email_field']         = jQuery('#bpm_contact_form_email_field_id').val();
    form_fields['subject_field']       = jQuery('#bpm_contact_form_subject_field_id').val();
    form_fields['enabled']             = '0';
    if (jQuery('#bpm_contact_enabled_id').attr("checked")) form_fields['enabled'] = 1;

    jQuery('.bpm_contact_us_field_dd_info').each( function(this_index, this_value) {

        var field_id = jQuery(this).data('id');
        var visible = 0;
        var ignore   = 0;

        if (jQuery('#bpm_contact_form_visible_'+field_id).attr("checked")) visible = 1;

        form_fields['fields'].push({field_name : jQuery(this).text() , infobox_name: jQuery('#bpm_contact_form_infobox_'+field_id).val() , visible: visible , ignore : ignore});

    });

    return form_fields;
}

function bpm_contact_form_save(){


    var form_fields = bpm_contact_form_get_fields();

    var api_key         = form_fields['api_key'];
    var main_api_key    = form_fields['main_api_key'];
    var accountid       = form_fields['account_id'];
    var plugin_id       = form_fields['plugin_source'];
    var user_id         = form_fields['process_owner'];
    var template_id     = form_fields['dest_workspace'];
    var parent_page     = form_fields['workspace_parent'];
    var selected_form   = form_fields['form_id'];
    var route_to        = form_fields['process_doer'];
    var enabled         = form_fields['enabled'];
    var email_field     = form_fields['email_field'];
    var subject_field   = form_fields['subject_field'];

    var querystring = 'action=get_contact_us_api_key&apikey=' + api_key + '&accountid=' + accountid + '&plugin_id=' + plugin_id + '&userid=' + user_id + '&templateid=' + template_id + '&parentpage=' + parent_page + '&forminfo='+selected_form +'&isenabled=' + enabled + '&routeto=' + route_to + '&mainapikey='+main_api_key+'&site_id='+bpm_form_params.current_site;

    if(accountid && plugin_id && user_id && template_id && parent_page && selected_form) {

        jQuery('#bpm_contact_form_activity_overlay').show();

        jQuery.getJSON('https://' + bpm_form_params.bpm_server + '/' + bpm_form_params.bpm_api + '/bpmcontext_wordpress.php?callback=?', querystring, function (result) {

            if (result['apikey']) {

                jQuery('#bpm_contact_form_save_button').addClass('disabled').hide();

                api_key = result['apikey'];
                var nonce = result['nonce'];

                //get field databpm_contact_form_save_button
                var field_array = [];
                jQuery.each(form_fields['fields'], function(field_id , value) {

                    var this_id         = jQuery('#bpm_contact_us_field_dd_info_'+field_id).text();
                    var infobox_name    = jQuery('#bpm_contact_form_infobox_'+field_id +' option:selected').text();
                    var visible         = value['visible'];
                    var ignore          = value['ignore'];

                    field_array.push({id:this_id, page_id: selected_form, infobox_name:infobox_name, visible:visible, ignore:ignore});
                });

                var text_areas = [];
                jQuery('.bpm_contact_form_textarea').each(function() {
                    text_areas.push(jQuery(this).data('field_id'));
                });

                if(result.mail_key){
                    jQuery('#bpm_email_forwarding_message').text('The email address to use for this workspace is '+result.mail_key+'@reply.bpmcontext.com');
                }

                var data = {
                    'action': 'bpm_contact_form_update',
                    'bpm_admin_action': 'update',
                    'bpm_admin_contact_us_api_key' : api_key,
                    'bpm_admin_contact_us_enabled' : enabled,
                    'bpm_admin_contact_us_form' : selected_form,
                    'bpm_admin_contact_us_form_source' : plugin_id,
                    'bpm_admin_contact_us_nonce' : nonce,
                    'bpm_form_settings' : field_array,
                    'bpm_email_field' : email_field,
                    'bpm_subject_field' : subject_field,
                    'bpm_textareas' : text_areas

                };
//bpm_email_field
                jQuery.post(ajaxurl, data, function(result) {

                    jQuery('#bpm_contact_form_activity_overlay').hide();
                    jQuery('#bpm_contact_form_saved_message').show().fadeOut( 6000 );
                    jQuery(window).unbind('beforeunload');

                });

            }else{
                if(result['message']){
                    alert(result['message']);
                }
            }
        });
    }
}