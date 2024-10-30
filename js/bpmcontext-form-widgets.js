/**
 * Created by fred on 5/5/16.
 */


if (typeof bpmcontext_context_plus !== 'function') {

    var bpmcontext_context_plus = function () {

        this.bpm_load_contact_inquiry_manager = function(){
            bpm_settings['bpm_contact_get_inquiry_data'] = false;
            return '<div id="bpm_contact_inquiry_manager_container" class="bpm_widget_container"></div><script>bpmcontext_context_plus.show_inquiry_manager();</script>';
        }

        this.bpm_load_contact_inquiry_manager_emals = function(){
            return '<div id="bpm_contact_inquiry_manager_emails_container" class="bpm_widget_container" style="max-height:15em;overflow-y:auto;overflow-x:hidden;"></div><script>bpmcontext_context_plus.bpm_inquiry_get_email_list();</script>';
        }

        this.bpm_inquiry_get_email_list = function(){

            if( bpm_settings['bpm_contact_get_inquiry_data'] ) {
                bpmcontext.bpm_get_data({action: 'get_inquiry_manager_info'}, 'bpmcontext_context_plus.contact_inquiry_manager_screen_one');
            }
        }

        this.show_email = function(email_index){

            if(bpm_settings['bpm_email_item_'+email_index]){
                jQuery('#bpm_email_item_data_'+email_index).animate({height: "0"},500,function(){
                    jQuery('#bpm_email_item_data_'+email_index).remove();
                    bpm_settings['bpm_email_item_'+email_index] = null;
                });
            }else {

                var result = bpm_settings['INQUIRY_DATA']['email_list'];
                var html_line = '';
                html_line = html_line.concat('<div id="bpm_email_item_data_' + email_index + '" class="bpm-email-holder">');

                jQuery(result).each(function (index, value) {
                    if (value['this_index'] == email_index) {
                        html_line = html_line.concat(value['message']);
                    }
                })

                html_line = html_line.concat('</div>');
                bpm_settings['bpm_email_item_' + email_index] = 1;
                jQuery('#bpm_email_item_' + email_index).after(html_line);
                jQuery('#bpm_email_item_data_' + email_index).animate({height: "15em"});
            }

        }

        this.show_inquiry_manager_emails = function(){

            var html_line = '';
            html_line = html_line.concat('<div class="bpm-row full-width" style="border-bottom:solid 1px grey;margin-bottom:.25em;">');
            html_line = html_line.concat('<div class="bpm-large-6 bpm-columns bpm-bold" >' + bpm_trans_array['bpm_lng_email_from'] + '</div>');
            html_line = html_line.concat('<div class="bpm-large-3 bpm-columns bpm-bold" >' + bpm_trans_array['bpm_lng_email_date'] + '</div>');
            html_line = html_line.concat('<div class="bpm-large-3 bpm-columns text-center bpm-bold" >' + bpm_trans_array['bpm_lng_email_status'] + '</div>');
            html_line = html_line.concat('</div>');

            var result = bpm_settings['INQUIRY_DATA']['email_list'];

            jQuery(result).each(function (index, value) {

                var message_status = 'bpm-not-read fi-minus';
                switch(value['message_status']){
                    case 'open':
                    case 'click':
                        message_status = 'bpm-read fi-check bpm-green';
                        break;
                    case 'rejected':
                    case 'hard-bounce':
                    case 'soft-bounce':
                        message_status = 'bpm-rejected fi-x bpm-red';
                        break;
                    case 'deferral':
                        message_status = 'bpm-email-deferred fa fa-clock-o';
                        break;
                    case 'spam':
                        message_status = 'bpm-marked-as-spam fa fa-trash-o bpm-yellow';
                        break;
                    case 'inbound':
                        message_status = 'bpm-initial-email fa fa-inbox bpm-green';
                        break;

                }

                html_line = html_line.concat('<div id="bpm_email_item_'+value['this_index']+'" class="bpm-row full-width" style="border-bottom:solid 1px lightgrey;">');
                html_line = html_line.concat('<div class="bpm-large-6 bpm-columns bpm_links" onclick="bpmcontext_context_plus.show_email('+value['this_index']+')">'+value['author_name']+'</div>');
                html_line = html_line.concat('<div class="bpm-large-3 bpm-columns" >'+value['message_date']+'</div>');
                html_line = html_line.concat('<div class="bpm-large-3 bpm-columns text-center" ><span class="bpm-demo-button '+message_status+'">&nbsp;</span></div>');
                html_line = html_line.concat('</div>');

            });

            jQuery('#bpm_contact_inquiry_manager_emails_container').html(html_line);

            this.bpm_make_email_qtips();

        }

        this.bpm_make_email_qtips = function(){

            var contentobj = {text: 'This message has not yet been read by the recipient'};
            jQuery('.bpm-not-read').each(function() {
                jQuery(this).qtip({
                    content: contentobj,
                    style: {
                            classes: 'qtip-bootstrap'
                        }
                });
             })


            contentobj = {text: 'This is a received email message'};
            jQuery('.bpm-initial-email').each(function() {
                jQuery(this).qtip({
                    content: contentobj,
                    style: {
                            classes: 'qtip-bootstrap'
                        }
                });
             })

            contentobj = {text: 'This message has been read by the recipient'};
            jQuery('.bpm-read').each(function() {
                jQuery(this).qtip({
                    content: contentobj,
                    style: {
                            classes: 'qtip-bootstrap'
                        }
                });
             })

            contentobj = {text: 'This message has been deferred and will be delivered soon.  This is usually due to the mailbox being over their quota or some other connection issue.'};
            jQuery('.bpm-email-deferred').each(function() {
                jQuery(this).qtip({
                    content: contentobj,
                    style: {
                            classes: 'qtip-bootstrap'
                        }
                });
             })

            contentobj = {text: 'This message has been rejected by the recipients email system'};
            jQuery('.bpm-rejected').each(function() {
                jQuery(this).qtip({
                    content: contentobj,
                    style: {
                            classes: 'qtip-bootstrap'
                        }
                });
             })

            contentobj = {text: 'This message has been marked as spam by the recipients email system'};
            jQuery('.bpm-marked-as-spam').each(function() {
                jQuery(this).qtip({
                    content: contentobj,
                    style: {
                            classes: 'qtip-bootstrap'
                        }
                });
             })

        }

        this.show_inquiry_manager = function() {

            var hide_me = false;
            if( bpm_settings['USERID'] != bpm_settings['WFOWNER'] ) hide_me = true;
            if( bpm_settings['WFSTATUS'] != 1 ) hide_me = true;
//            if( !bpm_settings['PUB_CUST'] ) hide_me = true;

            if( bpm_settings['USERTYPE'] == 'admin' ) hide_me = false;

            if (hide_me) {
                bpm_settings['bpm_contact_get_inquiry_data'] = true;
                jQuery('#bpm_acc_bpm_load_contact_inquiry_manager').hide();
                return;
            }

            jQuery('#bpm_acc_bpm_load_contact_inquiry_manager').addClass('bpm_widget_border');

            bpm_settings['bpm_contaxt_inquiry_message']     = '';
            bpm_settings['bpm_contaxt_inquiry_user_name']   = '';
            bpm_settings['bpm_contaxt_inquiry_email']       = '';

            bpmcontext.bpm_get_data({action:'get_inquiry_manager_info'} , 'bpmcontext_context_plus.contact_inquiry_manager_screen_one');
        }

        this.contact_inquiry_manager_screen_one = function(result) {

            if(result.INQUIRY_DATA){
                bpm_settings['INQUIRY_DATA'] = result.INQUIRY_DATA;
                this.show_inquiry_manager_emails();
            }

            if(result.INQUIRY_DATA.error){

                if(result.INQUIRY_DATA.show_email){
                    this.contact_inquiry_manager_email_only();
                }else{
                    jQuery('#bpm_contact_inquiry_manager_container').html('Error: ' + result.INQUIRY_DATA.error);
                }

            }else {
                if(result.INQUIRY_DATA) {

                    bpm_settings['bpm_contact_inquiry_customer'] = null;

                    this.bpm_contact_inquiry_pick_form();

                }else{
                    jQuery('#bpm_acc_bpm_load_contact_inquiry_manager').hide();
                }
            }
        }

        this.bpm_contact_inquiry_pick_form = function(){

            var result = bpm_settings['INQUIRY_DATA'];

            if(!bpmcontext.bpm_validateEmail(result.user_email)){
                this.bpm_contact_inquiry_no_email();
            }else {

                if(! bpm_settings['INQUIRY_DATA']['OPTIONS']['inquiry_mgmt_email']) {
                        this.contact_inquiry_manager_email_only();
                }else {
                    if (bpm_settings['INQUIRY_DATA'].user_exists) {
                        this.contact_inquiry_manager_contact_exists();
                    } else {
                        this.contact_inquiry_manager_contact_does_not_exist();
                    }
                }
            }
        }

        this.contact_inquiry_manager_email_only = function(){

            var result = bpm_settings['INQUIRY_DATA'];

            var html_line = '';

            var email_message = bpm_trans_array['bpm_lng_send_email_only_message_free'];

            if(bpm_settings['cp_prods_integrated']) email_message = bpm_trans_array['bpm_lng_send_email_only_message'];

            html_line = html_line.concat('<div class="bpm-row full-width">');
            html_line = html_line.concat('<div class="bpm-large-12 bpm-columns" >' + email_message + '</div>');
            html_line = html_line.concat('</div><br>');

            html_line =html_line.concat('<div id="bpm_contact_inquiry_create_email" class="bpm-row">');
            html_line =html_line.concat('<div class="bpm-large-6 bpm-columns ">'+bpm_trans_array['bpm_lng_email']+':</div>');
            html_line =html_line.concat('<div class="bpm-large-6 bpm-columns "><a href="mailto:'+result.user_email+result.email_subject+'" target="_blank">Create E-Mail</a> </div>');
            html_line =html_line.concat('</div><br>');

            if(bpm_settings['cp_prods_integrated']) {

                html_line = html_line.concat('<div class="bpm-row full-width">');
                html_line = html_line.concat('<div class="bpm-large-12 bpm-columns" >' + bpm_trans_array['bpm_lng_message'] + '</div>');
                html_line = html_line.concat('</div>');

                var text_message = '';
                if (bpm_settings['bpm_contaxt_inquiry_message']) text_message = bpm_settings['bpm_contaxt_inquiry_message'];

                html_line = html_line.concat('<div class="bpm-row full-width">');
                html_line = html_line.concat('<div class="bpm-large-12 bpm-columns" ><textarea class="bpm_message_textarea" id="bpm_inquiry_message">' + text_message + '</textarea></div>');
                html_line = html_line.concat('</div><br>');

                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left"><a id="bpm_contact_inquiry_delete_button" onClick="bpmcontext_context_plus.bpm_contact_inquiry_delete(99);" class="button bpm-small bpm_nodecoration bpm-gray" ><span class="fa fa-trash-o">&nbsp;</span>&nbsp;' + bpm_trans_array['bpm_lng_delete_page'] + '...</a></div>');
                html_line = html_line.concat('<div class="bpm-small-9 bpm-large-9 bpm-columns text-right"><a id="bpm_contact_inquiry_reply_only_button"  onClick="bpmcontext_context_plus.contact_inquiry_manager_contact_recap(7)" class="button bpm-small bpm_nodecoration">' + bpm_trans_array['bpm_lng_reply'] + '</a></div>');
                html_line = html_line.concat('</div>');
            }

            jQuery('#bpm_contact_inquiry_manager_container').html(html_line);
        }

        this.bpm_contact_inquiry_no_email = function(){

            var result = bpm_settings['INQUIRY_DATA'];

            var message = bpm_trans_array['bpm_lng_email_supplied_is_invalid'];
            if(result.error){
                message = result.error;
            }

            var html_line = '';

            html_line = html_line.concat('<div class="bpm-row full-width">');
            html_line = html_line.concat('<div class="bpm-large-12 bpm-columns" >' + message + '</div>');
            html_line = html_line.concat('</div><br><br><br>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-left"><a id="bpm_contact_inquiry_delete_button" onClick="bpmcontext_context_plus.bpm_contact_inquiry_delete(99);" class="button bpm-small bpm_nodecoration bpm-gray" ><span class="fa fa-trash-o">&nbsp;</span>&nbsp;' + bpm_trans_array['bpm_lng_delete_page'] + '...</a></div>');
            html_line = html_line.concat('</div>');

            jQuery('#bpm_contact_inquiry_manager_container').html(html_line);

        }

        this.contact_inquiry_return_from_add_customer = function(result){

            if(result.INQUIRY_DATA) {
                bpm_settings['INQUIRY_DATA'] = result.INQUIRY_DATA;
                bpm_settings['bpm_contact_inquiry_customer'] = result.INQUIRY_ACCOUNT.currrent_page_id;

            }
            this.bpm_contact_inquiry_pick_form();
        }

        this.execute_add_customer = function(){

            var error_list = [];
            var customer_id = jQuery('#bpm_contact_inquiry_customer').val();
            var customer_name = '';
            var customer_location_name = '';

            if(customer_id > 0) {
                //adding a location - make sure its not blank
                if (!bpmcontext.bpm_test_field_for_blank(jQuery('#bpm_contact_inquiry_customer_location_name').val())) error_list.push('bpm_contact_inquiry_customer_location_name');
                customer_location_name = jQuery('#bpm_contact_inquiry_customer_location_name').val();
            }else{
                //adding a customer and maybe a location also
                if (!bpmcontext.bpm_test_field_for_blank(jQuery('#bpm_contact_inquiry_customer_name').val())) error_list.push('bpm_contact_inquiry_customer_name');
                customer_name = jQuery('#bpm_contact_inquiry_customer_name').val();
                customer_location_name = jQuery('#bpm_contact_inquiry_customer_location_name').val();
            }

            if(error_list.length > 0) {
                jQuery(error_list).each(function (index, value) {
                    jQuery('#' + value).css('border-color', 'red');
                });
                return;
            }

            var add_vars = {};
            add_vars['action'] = 'add_contact_account';
            add_vars['parent_page'] = customer_id;
            add_vars['customer_name'] = customer_name;
            add_vars['customer_location_name'] = customer_location_name;

            bpmcontext.bpm_get_data(add_vars , 'bpmcontext_context_plus.contact_inquiry_return_from_add_customer');


        }

        this.customer_dd_change = function(){

            var result = bpm_settings['INQUIRY_DATA'];

            var customer_id = jQuery('#bpm_contact_inquiry_customer').val();
            if(customer_id > 0) {
                bpm_settings['bpm_contact_inquiry_customer'] = customer_id;
            }else{
                bpm_settings['bpm_contact_inquiry_customer'] = null;
            }

            jQuery('#bpm_contact_inquiry_add_customer').show();
            if(customer_id > 0){
                jQuery('#bpm_contact_inquiry_add_customer').hide();
            }

            if( result['PUB_CUST_CONTACT_FORM'] && result['PUB_CUSTLOC_CONTACT_FORM']){
                return;
            }

            jQuery('#bpm_contact_inquiry_move_button').show();
            jQuery('#bpm_contact_inquiry_reply_only_button').show();
            jQuery('#bpm_contact_inquiry_invite_and_reply_only_button').show();

            jQuery.each(bpm_settings['INQUIRY_DATA'].account_list,function(index, value) {
               if(value['page_id'] == customer_id){
                   if(value['library_id'] == 1 && !result['PUB_CUST_CONTACT_FORM']) jQuery('#bpm_contact_inquiry_move_button').hide();
                   if(value['library_id'] == 2 && !result['PUB_CUSTLOC_CONTACT_FORM']) jQuery('#bpm_contact_inquiry_move_button').hide();
                   if(value['library_id'] == 1 && !result['PUB_CUST_CONTACT']) jQuery('#bpm_contact_inquiry_reply_only_button').hide();
                   if(value['library_id'] == 2 && !result['PUB_CUSTLOC_CONTACT']) jQuery('#bpm_contact_inquiry_reply_only_button').hide();
               }
            });

            if(customer_id == 0) jQuery('#bpm_contact_inquiry_move_button').hide();
            if(customer_id == 0) jQuery('#bpm_contact_inquiry_invite_and_reply_only_button').hide();

        }

        this.contact_inquiry_make_cust_dd = function(inc_customer , inc_customer_location , selected_customer_id){

            var html_line = '<select id="bpm_contact_inquiry_customer" onchange="bpmcontext_context_plus.customer_dd_change()">';

            if(!selected_customer_id){
                html_line = html_line.concat('<option value="0" selected>Select Customer...</option>');
            }else{
                html_line = html_line.concat('<option value="0" >Select Customer...</option>');
            }

            jQuery.each(bpm_settings['INQUIRY_DATA'].account_list,function(index, value) {
                var selected = '';
                if(selected_customer_id && selected_customer_id == value['page_id']) selected = 'selected';
                if((inc_customer_location && value['library_id'] == 2) || (inc_customer && value['library_id'] == 1)) {
                    html_line = html_line.concat('<option value="' + value['page_id'] + '" '+selected+'>' + value['page_title'] + '</option>');
                }
            });

            html_line = html_line.concat('</select>');

            return html_line;
        }

        this.make_footer = function(){

            return '<div style="height:1em">&nbsp;</div>';
        }

        this.contact_inquiry_add_new_customer = function(){


            var html_line = '<div class="bpm-row">';
            html_line = html_line.concat('<div class="bpm-large-12 bpm-columns ">' + bpm_trans_array['bpm_lng_create_new_customer_or_location'] + '</div>');
            html_line = html_line.concat('</div><br>');

            html_line =html_line.concat('<div class="bpm-row">');
            html_line =html_line.concat('<div class="bpm-large-6 bpm-columns ">'+bpm_trans_array['bpm_lng_select_customer']+':</div>');
            html_line =html_line.concat('<div class="bpm-large-6 bpm-columns ">'+this.contact_inquiry_make_cust_dd(true , false , bpm_settings['bpm_contact_inquiry_customer'])+'</div>');
            html_line =html_line.concat('</div>');

            var add_hide_class = '';
            if(bpm_settings['bpm_contact_inquiry_customer']) add_hide_class = 'bpm-hide';

            html_line =html_line.concat('<div class="bpm-row '+add_hide_class+'" id="bpm_contact_inquiry_add_customer">');
            html_line =html_line.concat('<div class="bpm-large-6 bpm-columns ">'+bpm_trans_array['bpm_lng_or_add_customer']+':</div>');
            html_line =html_line.concat('<div class="bpm-large-6 bpm-columns "><input type="text" id="bpm_contact_inquiry_customer_name"></div>');
            html_line =html_line.concat('</div><br>');

            html_line =html_line.concat('<div class="bpm-row">');
            html_line =html_line.concat('<div class="bpm-large-6 bpm-columns ">'+bpm_trans_array['bpm_lng_add_customer_location']+':</div>');
            html_line =html_line.concat('<div class="bpm-large-6 bpm-columns "><input type="text" id="bpm_contact_inquiry_customer_location_name"></div>');
            html_line =html_line.concat('</div><br>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-right"><a onClick="bpmcontext_context_plus.contact_inquiry_manager_contact_action(11);" class="button bpm-small bpm_nodecoration" >' + bpm_trans_array['bpm_lng_create'] + '</a>&nbsp;<a onClick="bpmcontext_context_plus.contact_inquiry_manager_contact_action(10)" class="button bpm-small bpm_nodecoration">' + bpm_trans_array['bpm_lng_back'] + '</a></div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat(this.make_footer());

            jQuery('#bpm_contact_inquiry_manager_container').html(html_line);
        }

        this.contact_inquiry_manager_contact_does_not_exist = function() {

            var result = bpm_settings['INQUIRY_DATA'];

            var html_line = '';
//            html_line = html_line.concat('<div class="bpm-row">');
//            html_line = html_line.concat('<div class="bpm-large-12 bpm-columns ">' + bpm_trans_array['bpm_lng_contact_does_not_exist'] + '</div>');
//            html_line = html_line.concat('</div><br>');

            html_line =html_line.concat('<div id="bpm_contact_inquiry_create_email" class="bpm-row">');
            html_line =html_line.concat('<div class="bpm-large-6 bpm-columns ">'+bpm_trans_array['bpm_lng_email']+':</div>');
            html_line =html_line.concat('<div class="bpm-large-6 bpm-columns "><a href="mailto:'+result.user_email+result.email_subject+'" target="_blank">Create E-Mail</a> </div>');
            html_line =html_line.concat('</div><br>');

            if( !result['PUB_CUST_CONTACT'] && !result['PUB_CUSTLOC_CONTACT']){

                html_line = html_line.concat('<div class="bpm-row full-width">');
                html_line = html_line.concat('<div class="bpm-large-12 bpm-columns" >' + bpm_trans_array['bpm_lng_no_cust_contact_message'] + '</div>');
                html_line = html_line.concat('</div>');

            }else {

                if (bpm_settings['INQUIRY_DATA'].account_list) {
                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-large-6 bpm-columns ">Select Customer / Location:</div>');
                    html_line = html_line.concat('<div class="bpm-large-5 bpm-columns ">' + this.contact_inquiry_make_cust_dd(true , true , bpm_settings['bpm_contact_inquiry_customer']) + '</div>');
                    html_line = html_line.concat('<div class="bpm-large-1 bpm-columns "><a onclick="bpmcontext_context_plus.contact_inquiry_add_new_customer()">Add</a></div>');
                    html_line = html_line.concat('</div>');
                }

                var email_parts = result.user_email.split('@');

                var user_name = this.format_mail_to_name(email_parts[0]);
                if(bpm_settings['bpm_contaxt_inquiry_user_name']) user_name = bpm_settings['bpm_contaxt_inquiry_user_name'];

                html_line =html_line.concat('<div class="bpm-row">');
                html_line =html_line.concat('<div class="bpm-large-6 bpm-columns ">'+bpm_trans_array['bpm_lng_name']+':</div>');
                html_line =html_line.concat('<div class="bpm-large-6 bpm-columns "><input type="text" id="bpm_contact_inquiry_user_name" value="'+user_name+'"> </div>');
                html_line =html_line.concat('</div><br>');

                html_line = html_line.concat('<div class="bpm-row full-width">');
                html_line = html_line.concat('<div class="bpm-large-12 bpm-columns" >' + bpm_trans_array['bpm_lng_message'] + '</div>');
                html_line = html_line.concat('</div>');

                var text_message = '';
                if(bpm_settings['bpm_contaxt_inquiry_message']) text_message = bpm_settings['bpm_contaxt_inquiry_message'];

                html_line = html_line.concat('<div class="bpm-row full-width">');
                html_line = html_line.concat('<div class="bpm-large-12 bpm-columns" ><textarea class="bpm_message_textarea" id="bpm_inquiry_message">'+text_message+'</textarea></div>');
                html_line = html_line.concat('</div><br>');

                var hide_move_class = '';
                var hide_invite_class = '';
                if (!result['PUB_CUST_CONTACT_FORM'] && !result['PUB_CUSTLOC_CONTACT_FORM']) hide_move_class = 'bpm-hide';
                if(!bpm_settings['bpm_contact_inquiry_customer']){
                    hide_move_class = 'bpm-hide';
                }

                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left"><a id="bpm_contact_inquiry_delete_button" onClick="bpmcontext_context_plus.bpm_contact_inquiry_delete(99);" class="button bpm-small bpm_nodecoration bpm-gray" ><span class="fa fa-trash-o">&nbsp;</span>&nbsp;' + bpm_trans_array['bpm_lng_delete_page'] + '...</a></div>');
                html_line = html_line.concat('<div class="bpm-small-9 bpm-large-9 bpm-columns text-right"><a id="bpm_contact_inquiry_move_button" onClick="bpmcontext_context_plus.contact_inquiry_manager_contact_recap(5);" class="button bpm-small bpm_nodecoration" >' + bpm_trans_array['bpm_lng_create_case'] + '</a>&nbsp;<a id="bpm_contact_inquiry_reply_only_button"  onClick="bpmcontext_context_plus.contact_inquiry_manager_contact_recap(6)" class="button bpm-small bpm_nodecoration">' + bpm_trans_array['bpm_lng_reply_only'] + '</a></div>');
                html_line = html_line.concat('</div>');
            }

            html_line = html_line.concat(this.make_footer());

//            bpm_settings['bpm_contact_inquiry_customer'] = null;

            jQuery('#bpm_contact_inquiry_manager_container').html(html_line);
        }

        this.format_mail_to_name = function(str){

            str = str.replace(/\./g,' ');
            str = str.replace(/_/g, ' ');

            return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        }

        this.contact_inquiry_manager_contact_recap = function(action){

            var result = bpm_settings['INQUIRY_DATA'];

            var customer_name = jQuery('#bpm_contact_inquiry_customer option:selected').text();
            var user_name = jQuery('#bpm_contact_inquiry_user_name').val();

            if( ! customer_name ) customer_name = result['account_name'];
            if( ! user_name ) user_name = result['user_real_name'];

            bpm_settings['bpm_contaxt_inquiry_message'] = jQuery('#bpm_inquiry_message').val();
            bpm_settings['bpm_contaxt_inquiry_user_name'] = jQuery('#bpm_contact_inquiry_user_name').val();
            bpm_settings['bpm_contaxt_inquiry_email'] = result.user_email;
            bpm_settings['bpm_contaxt_inquiry_subject'] = result.email_subject;

            var obj_height = jQuery('#bpm_contact_inquiry_manager_container').height();

            var html_line = '';

            html_line = html_line.concat('<div class="bpm-row full-width">');
            html_line = html_line.concat('<div class="bpm-large-12 bpm-columns" >' + bpm_trans_array['bpm_lng_recap_message_' + action] + '</div>');
            html_line = html_line.concat('</div><br>');

            if(customer_name) {

                html_line = html_line.concat('<div class="bpm-row full-width">');
                html_line = html_line.concat('<div class="bpm-large-6 bpm-columns" >' + bpm_trans_array['bpm_lng_Customer'] + '</div>');
                html_line = html_line.concat('<div class="bpm-large-6 bpm-columns" >' + customer_name + '</div>');
                html_line = html_line.concat('</div><br>');

            }

            if(user_name) {
                html_line = html_line.concat('<div class="bpm-row full-width">');
                html_line = html_line.concat('<div class="bpm-large-6 bpm-columns" >' + bpm_trans_array['bpm_lng_name'] + '</div>');
                html_line = html_line.concat('<div class="bpm-large-6 bpm-columns" >' + user_name + '</div>');
                html_line = html_line.concat('</div><br>');
            }

            html_line = html_line.concat('<div class="bpm-row full-width">');
            html_line = html_line.concat('<div class="bpm-large-6 bpm-columns" >' + bpm_trans_array['bpm_lng_message'] + '</div>');
            html_line = html_line.concat('<div class="bpm-large-6 bpm-columns" >' + bpm_settings['bpm_contaxt_inquiry_message'] + '</div>');
            html_line = html_line.concat('</div><br>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-right"><a onClick="bpmcontext_context_plus.contact_inquiry_manager_contact_action('+action+');" class="button bpm-small bpm_nodecoration" >' + bpm_trans_array['bpm_lng_continue'] + '</a>&nbsp;<a onClick="bpmcontext_context_plus.contact_inquiry_manager_contact_action(10)" class="button bpm-small bpm_nodecoration">' + bpm_trans_array['bpm_lng_back'] + '</a></div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat(this.make_footer());

            jQuery('#bpm_contact_inquiry_manager_container').html(html_line);

            jQuery('#bpm_contact_inquiry_manager_container').height(obj_height);

        }

        this.bpm_contact_inquiry_delete = function(action){

            var obj_height = jQuery('#bpm_contact_inquiry_manager_container').height();

            var html_line = '';

            html_line = html_line.concat('<div class="bpm-row full-width">');
            html_line = html_line.concat('<div class="bpm-large-12 bpm-columns" >' + bpm_trans_array['bpm_lng_delete_this_inquiry'] + '</div>');
            html_line = html_line.concat('</div><br><br><br><br>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-right"><a onClick="bpmcontext_context_plus.contact_inquiry_manager_contact_action('+action+');" class="button bpm-small bpm_nodecoration" >' + bpm_trans_array['bpm_lng_yes_delete'] + '</a>&nbsp;<a onClick="bpmcontext_context_plus.contact_inquiry_manager_contact_action(10)" class="button bpm-small bpm_nodecoration">' + bpm_trans_array['bpm_lng_cancel'] + '</a></div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat(this.make_footer());

            jQuery('#bpm_contact_inquiry_manager_container').html(html_line);

            jQuery('#bpm_contact_inquiry_manager_container').height(obj_height);

        }

        this.contact_inquiry_manager_contact_action = function(action){

            var add_vars = {};
            var result = bpm_settings['INQUIRY_DATA'];
            bpm_settings['contact_inquiry_action'] = action;

            switch(action) {
                case 99:
                    //delete this contact form
                    add_vars['delete'] = 'yes';
                    break;
                case 10:
                    this.bpm_contact_inquiry_pick_form();
                    return;
                    break;
                case 11:
                    //save new customer
                    this.execute_add_customer();
                    return;
                    break;
                case 1:
                    //invite, add user and move
                    add_vars['move'] = 'yes';
                    add_vars['name'] = bpm_settings['bpm_contaxt_inquiry_user_name'];
                    break;
                case 2:
                    //invite, add user, send talat and dont move
                    add_vars['move'] = 'no';
                    add_vars['name'] = bpm_settings['bpm_contaxt_inquiry_user_name'];
                    break;
                case 3:
                    //send talat and mpve
                    add_vars['customer'] = result['account_page_id'];
                    add_vars['move'] = 'yes';
                    break;
                case 4:
                    //send talat and dont
                    add_vars['customer'] = result['account_page_id'];
                    add_vars['move'] = 'no';
                    break;
                case 5:
                    //invite user and move
                    add_vars['customer'] = result['account_page_id'];
                    add_vars['move'] = 'yes';
                    break;
                case 6:
                    //invite user and dont move
                    add_vars['customer'] = result['account_page_id'];
                    add_vars['move'] = 'no';
                    break;
                case 7:
                    //send email only
                    add_vars['move'] = 'no';
                    break;
            }

            add_vars['customer']        = bpm_settings['bpm_contact_inquiry_customer'];
            add_vars['invite_message']  = bpm_settings['bpm_contaxt_inquiry_message'];
            add_vars['email']           = bpm_settings['bpm_contaxt_inquiry_email'];
            add_vars['subject']         = bpm_settings['bpm_contaxt_inquiry_subject'];
            add_vars['action'] = 'manage_contact_form';
            add_vars['cf_action'] = action;

            bpmcontext.bpm_get_data(add_vars , 'bpmcontext_context_plus.contact_inquiry_return_from_manage_inquiry_execute');
        }

        this.contact_inquiry_return_from_manage_inquiry_execute = function(result){

            if(result.INQUIRY_RESULT.goto_page_id){
                //load new page for the moved document
                jQuery('#bpm_acc_bpm_load_contact_inquiry_manager').hide();
                bpm_is_loading = 0;
                bpmcontext.bpm_refresh_page_loading();
                bpmcontext.bpm_load_page('pageid=' + result.INQUIRY_RESULT.goto_page_id + '&domain=' + bpm_current_domain + '&action=bpmcontext');
            }else{
                //show confirmation that we are done screen
                if(result.INQUIRY_RESULT.DISCUSSIONS) {
                    jQuery('#acc_' + result.INQUIRY_RESULT.DISCUSSIONS_ID).html(bpmcontext.bpm_create_discussion(result.INQUIRY_RESULT.DISCUSSIONS_ID, result.INQUIRY_RESULT.DISCUSSIONS));
                }
                if(result['INQUIRY_RESULT']['email_list']){
                    bpm_settings['INQUIRY_DATA']['email_list'] = result['INQUIRY_RESULT']['email_list'];
                    this.show_inquiry_manager_emails();
                }

                bpmcontext_context_plus.show_contact_manager_confirmation();
            }
        }

        this.show_contact_manager_confirmation = function(){

            var html_line = '<div class="bpm-row">';
            html_line =html_line.concat('<div class="bpm-large-12 bpm-columns ">'+bpm_trans_array['bpm_lng_reply_sent']+'. '+bpm_trans_array['bpm_lng_use_the_workflow_menu']+'</div>');
            html_line =html_line.concat('</div><br>');

            html_line = html_line.concat(this.make_footer());

            jQuery('#bpm_contact_inquiry_manager_container').html(html_line);
        }

        this.contact_inquiry_manager_contact_exists = function(){

            var result = bpm_settings['INQUIRY_DATA'];

            var html_line = '';
/**
            html_line = html_line.concat('<div class="bpm-row">');
            if(result.user_status == 'A') {
                html_line = html_line.concat('<div class="bpm-large-12 bpm-columns ">' + bpm_trans_array['bpm_lng_contact_exists'] + '</div>');
            }else {
                html_line = html_line.concat('<div class="bpm-large-12 bpm-columns ">' + bpm_trans_array['bpm_lng_contact_exists_invite'] + '</div>');
            }
            html_line =html_line.concat('</div><br>');
**/
            var account_name = '';
            if(result.account_name) account_name = result.account_name;

            html_line =html_line.concat('<div class="bpm-row">');
            html_line =html_line.concat('<div class="bpm-large-6 bpm-columns ">'+bpm_trans_array['bpm_lng_contact_account_name']+':</div>');
            html_line =html_line.concat('<div class="bpm-large-6 bpm-columns ">'+account_name+'</div>');
            html_line =html_line.concat('</div>');

            html_line =html_line.concat('<div class="bpm-row">');
            html_line =html_line.concat('<div class="bpm-large-6 bpm-columns ">'+bpm_trans_array['bpm_lng_email']+':</div>');
            html_line =html_line.concat('<div class="bpm-large-6 bpm-columns "><a href="mailto:'+result.user_email+result.email_subject+'" target="_blank">Create E-Mail</a> </div>');
            html_line =html_line.concat('</div><br>');

            html_line =html_line.concat('<div class="bpm-row full-width">');
            html_line =html_line.concat('<div class="bpm-large-12 bpm-columns" >' + bpm_trans_array['bpm_lng_message'] + '</div>');
            html_line =html_line.concat('</div>');

            var text_message = '';
            if(bpm_settings['bpm_contaxt_inquiry_message']) text_message = bpm_settings['bpm_contaxt_inquiry_message'];

            html_line =html_line.concat('<div class="bpm-row full-width">');
            html_line =html_line.concat('<div class="bpm-large-12 bpm-columns" ><textarea class="bpm_message_textarea" id="bpm_inquiry_message">'+text_message+'</textarea></div>');
            html_line =html_line.concat('</div><br>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left"><a id="bpm_contact_inquiry_delete_button" onClick="bpmcontext_context_plus.bpm_contact_inquiry_delete(99);" class="button bpm-small bpm_nodecoration bpm-gray" ><span class="fa fa-trash-o">&nbsp;</span>&nbsp;' + bpm_trans_array['bpm_lng_delete_page'] + '...</a></div>');
            html_line = html_line.concat('<div class="bpm-small-9 bpm-large-9 bpm-columns text-right"><a id="bpm_contact_inquiry_move_button" onClick="bpmcontext_context_plus.contact_inquiry_manager_contact_recap(5);" class="button bpm-small bpm_nodecoration" >' + bpm_trans_array['bpm_lng_create_case'] + '</a>&nbsp;<a id="bpm_contact_inquiry_reply_only_button"  onClick="bpmcontext_context_plus.contact_inquiry_manager_contact_recap(6)" class="button bpm-small bpm_nodecoration">' + bpm_trans_array['bpm_lng_reply_only'] + '</a></div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat(this.make_footer());

            jQuery('#bpm_contact_inquiry_manager_container').html(html_line);

        }


        this.bpm_contact_form_get_map_widget = function(geodata){
            return '<div id="bpm_contact_map_container" style="margin: -4em 1em;"></div><script>bpmcontext_context_plus.show_map_data();</script>';
        };

        this.show_map_data = function(){

                jQuery(window).on('resize', function () {
                    map.resize();
                });

                var map = new Datamap({
                    scope: 'world',
                    responsive: true,
                    element: document.getElementById('bpm_contact_map_container'),
                    geographyConfig: {
                        popupOnHover: false
                    }
                });

            if(bpm_settings['contact_map']) {

                map.addPlugin('pins', function (layer, data, options) {
                    var self = this,
                        fillData = this.options.fills,
                        svg = this.svg;

                    if (!data || (data && !data.slice)) {
                        throw "Datamaps Error - bubbles must be an array";
                    }

                    var bubbles = layer.selectAll('image.datamaps-pins').data(data, JSON.stringify);

                    bubbles.enter()
                        .append('image')
                        .attr('class', 'datamaps-pin')
                        .attr('xlink:href', 'http://a.tiles.mapbox.com/v3/marker/pin-m+3bb2d0@2x.png')
                        .attr('height', 40)
                        .attr('width', 40)
                        .attr('x', function (datum) {
                            var latLng;
                            if (datumHasCoords(datum)) {
                                latLng = self.latLngToXY(datum.latitude, datum.longitude);
                            } else if (datum.centered) {
                                latLng = self.path.centroid(svg.select('path.' + datum.centered).data()[0]);
                            }
                            if (latLng) return latLng[0] - 20;
                        })
                        .attr('y', function (datum) {
                            var latLng;
                            if (datumHasCoords(datum)) {
                                latLng = self.latLngToXY(datum.latitude, datum.longitude);
                            } else if (datum.centered) {
                                latLng = self.path.centroid(svg.select('path.' + datum.centered).data()[0]);
                            }
                            if (latLng) return latLng[1] - 20;
                        })

                        .on('mouseover', function (datum) {
                            var $this = d3.select(this);

                            if (options.popupOnHover) {
                                self.updatePopup($this, datum, options, svg);
                            }
                        })
                        .on('mouseout', function (datum) {
                            var $this = d3.select(this);

                            if (options.highlightOnHover) {
                                //reapply previous attributes
                                var previousAttributes = JSON.parse($this.attr('data-previousAttributes'));
                                for (var attr in previousAttributes) {
                                    $this.style(attr, previousAttributes[attr]);
                                }
                            }

                            d3.selectAll('.datamaps-hoverover').style('display', 'none');
                        })


                    bubbles.exit()
                        .transition()
                        .delay(options.exitDelay)
                        .attr("height", 0)
                        .remove();

                    function datumHasCoords(datum) {
                        return typeof datum !== 'undefined' && typeof datum.latitude !== 'undefined' && typeof datum.longitude !== 'undefined';
                    }

                });

                map.pins(bpm_settings['contact_map'], {
                    popupOnHover: true,
                    popupTemplate: function (data) {
                        return "<div class='hoverinfo'>" + data.name + "<br>Total contacts: "+data.count+"</div>";
                    }
                });
            }
        }
    }
}
jQuery(document).ready(function(){

    bpmcontext_context_plus = new bpmcontext_context_plus();

});