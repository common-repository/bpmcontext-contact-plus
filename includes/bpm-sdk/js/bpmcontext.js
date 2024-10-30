if(!bpm_plugin_hook) {
    var bpm_plugin_hook = [];
}
if(!bpm_settings) var bpm_settings = [];

if(!bpm_trans_array) var bpm_trans_array = [];

if (typeof bpm_sdk_params !== 'undefined') bpm_params = bpm_sdk_params;
if (typeof bpm_sdk_params_templates !== 'undefined') bpm_params_templates = bpm_sdk_params_templates;
if (typeof bpm_sdk_trans_array !== 'undefined') bpm_trans_array = bpm_sdk_trans_array;

bpm_settings['bpm_login_status'] = 0;
bpm_settings['bpm_server'] = bpm_params.bpm_server;
bpm_settings['bpm_help_server'] = 'https://support.bpmcontext.com/wp-admin/admin-ajax.php';
bpm_settings['bpm_api'] = bpm_params.bpm_api;
bpm_settings['page_menu_height'] = 520;
bpm_settings['has_page_menu_on_toolbar'] = 1;
bpm_settings['tutorial_mode'] = 0;
bpm_settings['tutorial_step'] = 0;
bpm_settings['tutorial_id'] = 0;
bpm_settings['bpm_screen_width_narrow'] = 1;
bpm_settings['show_now'] = 0;
bpm_settings['bpm_location'] = 'page';
bpm_settings['bpm_is_back_button'] = 0;

var bpm_pageid, bpm_current_domain;
var bpm_get_string = '';
var bpm_current_section = 0;
var bpm_current_disc = 0;
var bpm_text_history = [];
var bpm_text_promote = [];
var bpm_user_role = 0;
var bpm_page_has_children = 0;
var bpm_selected_folder = 0;
var bpm_reflow = 0;
var bpm_template, bpm_mobile_template, bpm_medium_template;
var bpm_confirm_option = 0;
var bpm_dashboard = [];
var bpm_route_users, bpm_route_back_users;
var bpm_action_button_val;
var bpm_page_naming = [];
var bpm_current_create_page = 0;
var bpm_quick_docs;
var bpm_is_root;
var bpm_disc_list = [];
var bpm_child_links_data = [];
var bpm_first_field = '';
var bpm_context_map_count = 0;
var bpm_is_loading = 0;
var bpm_user_list = '';
var bpm_talat_list = [];
var bpm_sharing_list = [];
var bpm_current_message_id = 0;
var bpm_my_page = 0;
var bpm_folder_list = [];
var bpm_first_notification = '';
var bpm_reload_type = 0;
var bpm_page_status = 0;
var bpm_delete_from = 0;
var bpm_start;
var bpm_child_link_create_id = 0;
var bpm_child_link_create_name = '';
var bpm_is_processing = 0;
var bpm_version_files = [];
var bpm_delete_from_source = '';

var bpm_infobox_data, bpm_infobox_data_users;
var bpm_user_details;
var bpm_page_links_title = '';
var bpm_reply_talat_page_id = 0;
var bpm_reply_talat_message_id = 0;
var bpm_payment = '';

if (typeof bpmcontext !== 'function'){

    var bpmcontext = function () {
        var executeFunctionByName;
        var bpm_open_bpmcontext;
        var bpm_open_search_widget;
        var bpm_open_search_widget_run_search;
        var bpm_close_search_widget;
        var bpm_close_links_widget;
        var bpm_make_get_string;
        var load_handlers;
        var bpm_create_notification_bubble;
        var bpm_getQueryVariable;
        var bpm_show_login;
        var bpm_build_page;
        var bpm_update_history_button;
        var bpm_save_password;
        var bpm_reshow_login;
        var bpm_showGetPassword;
        var bpm_make_homepage_widget;
        var bpm_manage_widget;
        var bpm_set_url_links;
        var bpm_show_new_account;
        var bpm_open_side_modal;
        var bpm_create_recent_dropdown;
        var bpm_create_notifications_dropdown;
        var bpm_create_account_process;
        var bpm_test_field_for_blank;
        var bpm_refresh_page_loading;
        var bpm_update_dashboard;
        var bpm_submitLogIn;
        var bpm_validate_login;
        var bpm_showError;
        var bpm_logout_bpmcontext;
        var bpm_set_email;
        var bpm_validateEmail;
        var bpm_create_discussion;
        var bpm_create_home_page_items;
        var bpm_promoted_dismiss;
        var bpm_promote_to_home_page_action;
        var bpm_change_hp_image;
        var bpm_hp_cancel_promote;
        var bpm_hp_promote;
        var bpm_get_discussion_list;
        var bpm_delete_discussion;
        var bpm_reset_disc_toolbar;
        var bpm_confirm_delete_discussion;
        var bpm_highlight_disc;
        var bpm_send_post;
        var bpm_get_date_display;
        var bpm_convertUTCDateToLocalDate;
        var bpm_disc_show_more_less;
        var bpm_cancel_post;
        var bpm_search_bar;
        var bpm_expand_discussion;
        var bpm_close_disc;
        var bpm_create_text;
        var bpm_text_placeholder;
        var bpm_set_disc_expand_button;
        var bpm_create_readonly_text;
        var bpm_edit_text;
        var bpm_view_text_history;
        var bpm_close_text;
        var bpm_splitString;
        var bpm_save_text;
        var bpm_create_attachment;
        var bpm_create_file_list;
        var bpm_file_show_versions;
        var bpm_confirm_version_delete;
        var bpm_get_file_icon;
        var bpm_clear_search_grid;
        var bpm_search_grid;
        var bpm_file_load_files;
        var bpm_make_folder_tree;
        var bpm_file_button;
        var bpm_delete_files;
        var bpm_guid;
        var bpm_create_tagged_page_links;
        var bpm_create_child_links;
        var bpm_load_child_links;
        var bpm_make_links_grid;
        var bpm_make_section_links_grid;
        var bpm_create_page;
        var bpm_make_page_content;
        var bpm_create_spreadsheet;
        var bpm_create_alert;
        var bpm_close_alert;
        this.make_widget_list = make_widget_list;
        this.bpm_save_home_page_widgets = bpm_save_home_page_widgets;
        this.bpm_close_generic = bpm_close_generic;
        this.bpm_show_action_button = bpm_show_action_button;
        this.bpm_open_add_page = bpm_open_add_page;
        this.bpm_create_add_page_name = bpm_create_add_page_name;
        this.bpm_create_new_page = bpm_create_new_page;
        this.bpm_set_toolbar_options = bpm_set_toolbar_options;
        this.bpm_confirm_yes_with_publish = bpm_confirm_yes_with_publish;
        this.bpm_confirm_yes = bpm_confirm_yes;
        this.bpm_load_page = bpm_load_page;
        this.bpm_confirm_no = bpm_confirm_no;
        this.bpm_add_to_talat_list = bpm_add_to_talat_list;
        this.bpm_remove_from_talat_list = bpm_remove_from_talat_list;
        this.bpm_make_user_list = bpm_make_user_list;
        this.bpm_make_route_list = bpm_make_route_list;
        this.bpm_action_button = bpm_action_button;
        this.bpm_send_stop_sharing = bpm_send_stop_sharing;
        this.bpm_change_name = bpm_change_name;
        this.bpm_clear_ws_tutorial = bpm_clear_ws_tutorial;
        this.bpm_show_ws_tutorial = bpm_show_ws_tutorial;
        this.bpm_save_workspace = bpm_save_workspace;
        this.bpm_ws_manager_general_info = bpm_ws_manager_general_info;
        this.bpm_get_pub_dd = bpm_get_pub_dd;
        this.bpm_open_acct_mgr = bpm_open_acct_mgr;
        this.bpm_buy_ws_message = bpm_buy_ws_message;
        this.bpm_open_support = bpm_open_support;
        this.bpm_save_support_text = bpm_save_support_text;
        this.bpm_cancel_support_text = bpm_cancel_support_text;
        this.bpm_add_template = bpm_add_template;
        this.bpm_ws_manager_section = bpm_ws_manager_section;
        this.bpm_ws_add_default_sections = bpm_ws_add_default_sections;
        this.bpm_ws_add_section = bpm_ws_add_section;
        this.bpm_ws_remove_section = bpm_ws_remove_section;
        this.bpm_ws_remove_info = bpm_ws_remove_info;
        this.bpm_ws_add_info = bpm_ws_add_info;
        this.bpm_ws_manager_infoboxes = bpm_ws_manager_infoboxes;
        this.bpm_ws_dd_config_add_info = bpm_ws_dd_config_add_info;
        this.bpm_ws_dd_config_remove_info = bpm_ws_dd_config_remove_info;
        this.bpm_change_dropdown_config_set = bpm_change_dropdown_config_set;
        this.bpm_ws_config_info = bpm_ws_config_info;
        this.bpm_save_dropdown = bpm_save_dropdown;
        this.bpm_close_config = bpm_close_config;
        this.bpm_make_yes_no_dd = bpm_make_yes_no_dd;
        this.bpm_ws_manager_naming = bpm_ws_manager_naming;
        this.bpm_ws_enable_save = bpm_ws_enable_save;
        this.bpm_ws_disable_save = bpm_ws_disable_save;
        this.bpm_update_default_rules = bpm_update_default_rules;
        this.bpm_ws_create_naming_dd = bpm_ws_create_naming_dd;
        this.bpm_ws_manager_sharing = bpm_ws_manager_sharing;
        this.bpm_routing_section_display = bpm_routing_section_display;
        this.bpm_ws_manager_routing = bpm_ws_manager_routing;
        this.bpm_create_time_dd = bpm_create_time_dd;
        this.bpm_edit_template = bpm_edit_template;
        this.bpm_create_user_dropdown = bpm_create_user_dropdown;
        this.bpm_edit_wf_goal = bpm_edit_wf_goal;
        this.bpm_edit_wf_escalate = bpm_edit_wf_escalate;
        this.bpm_make_shared_checkbox = bpm_make_shared_checkbox;
        this.bpm_make_naming_type_dd = bpm_make_naming_type_dd;
        this.bpm_update_naming_target = bpm_update_naming_target;
        this.bpm_ws_dd_config_add_routing = bpm_ws_dd_config_add_routing;
        this.bpm_ws_dd_config_remove_routing = bpm_ws_dd_config_remove_routing;
        this.bpm_ws_dd_config_remove_naming = bpm_ws_dd_config_remove_naming;
        this.bpm_ws_dd_config_add_naming = bpm_ws_dd_config_add_naming;
        this.bpm_make_naming_target_dd = bpm_make_naming_target_dd;
        this.bpm_make_section_type_text = bpm_make_section_type_text;
        this.bpm_update_config_icon = bpm_update_config_icon;
        this.bpm_make_section_type_dd = bpm_make_section_type_dd;
        this.bpm_make_section_visible_dd = bpm_make_section_visible_dd;
        this.bpm_ws_manager_add_actions = bpm_ws_manager_add_actions;
        this.bpm_reset_routing_plus = bpm_reset_routing_plus;
        this.bpm_reset_naming_plus = bpm_reset_naming_plus;
        this.bpm_reset_section_plus = bpm_reset_section_plus;
        this.bpm_reset_info_plus = bpm_reset_info_plus;
        this.bpm_reset_name_plus = bpm_reset_name_plus;
        this.bpm_reset_routing_plus = bpm_reset_routing_plus;
        this.bpm_create_text_field = bpm_create_text_field;
        this.bpm_create_ws_save_message = bpm_create_ws_save_message;
        this.bpm_cancel_workspace_not_confirmed = bpm_cancel_workspace_not_confirmed;
        this.bpm_cancel_workspace_confirmed = bpm_cancel_workspace_confirmed;
        this.bpm_cancel_workspace = bpm_cancel_workspace;
        this.bpm_set_ws_content_height = bpm_set_ws_content_height;
        this.bpm_action = bpm_action;
        this.bpm_subscribe_or_unsubscribe_page = bpm_subscribe_or_unsubscribe_page;
        this.bpm_save_talat = bpm_save_talat;
        this.bpm_close_talat = bpm_close_talat;
        this.bpm_open_help_widget = bpm_open_help_widget;
        this.bpm_help_widget_load_popular = bpm_help_widget_load_popular;
        this.bpm_get_help_item = bpm_get_help_item;
        this.bpm_back_help_widget = bpm_back_help_widget;
        this.bpm_help_widget_search = bpm_help_widget_search;
        this.bpm_close_general_feedback = bpm_close_general_feedback;
        this.bpm_open_general_feedback = bpm_open_general_feedback;
        this.bpm_save_settings_support_text = bpm_save_settings_support_text;
        this.bpm_save_help_center_support_text = bpm_save_help_center_support_text;
        this.bpm_close_help_widget = bpm_close_help_widget;
        this.bpm_run_main_tutorial = bpm_run_main_tutorial;
        this.bpm_run_next_tutorial_step = bpm_run_next_tutorial_step;
        this.bpm_close_tour_reveal = bpm_close_tour_reveal;
        this.bpm_open_reveal = bpm_open_reveal;
        this.bpm_do_joyride = bpm_do_joyride;
        this.bpm_create_chardin = bpm_create_chardin;
        this.bpm_set_tutorial_actions = bpm_set_tutorial_actions;
        this.bpm_clear_tutorial = bpm_clear_tutorial;
        this.bpm_open_add_pages_menu = bpm_open_add_pages_menu;
        this.bpm_template_wizard = bpm_template_wizard;
        this.bpm_get_wizard_width_dd = bpm_get_wizard_width_dd;
        this.bpm_admin_wizard_reset_all_css = bpm_admin_wizard_reset_all_css;
        this.bpm_admin_wizard_update_css = bpm_admin_wizard_update_css;
        this.bpm_admin_wizard_reset_css = bpm_admin_wizard_reset_css;
        this.bpm_admin_wizard_test_css = bpm_admin_wizard_test_css;
        this.bpm_get_item = bpm_get_item;
        this.bpm_admin_wizard_update_template = bpm_admin_wizard_update_template;
        this.bpm_spot_joyride = bpm_spot_joyride;
        this.bpm_remove_talat_user = bpm_remove_talat_user;
        this.bpm_open_modal = bpm_open_modal;
        this.bpm_set_admin_buttons = bpm_set_admin_buttons;
        this.bpm_add_talat_users = bpm_add_talat_users;
        this.bpm_create_notifications_target = bpm_create_notifications_target;
        this.bpm_show_functional_tutorial = bpm_show_functional_tutorial;
        this.bpm_SortByName = bpm_SortByName;
        this.bpm_make_talat_window = bpm_make_talat_window;
        this.bpm_make_notifications_window = bpm_make_notifications_window;
        this.bpm_make_subscriptions_window = bpm_make_subscriptions_window;
        this.bpm_create_quick_docs = bpm_create_quick_docs;
        this.bpm_create_quick_docs_config = bpm_create_quick_docs_config;
        this.bpm_add_to_quick_doc_list = bpm_add_to_quick_doc_list;
        this.bpm_create_quick_doc_target = bpm_create_quick_doc_target;
        this.bpm_cust_supp_tabs = bpm_cust_supp_tabs;
        this.bpm_make_cust_supplier_list = bpm_make_cust_supplier_list;
        this.bpm_page_type_tabs = bpm_page_type_tabs;
        this.bpm_load_page_type = bpm_load_page_type;
        this.bpm_make_page_type_list = bpm_make_page_type_list;
        this.bpm_add_to_sub_list = bpm_add_to_sub_list;
        this.bpm_left_action = bpm_left_action;
        this.bpm_make_directory = bpm_make_directory;
        this.bpm_make_directory_html = bpm_make_directory_html;
        this.bpm_make_left_report = bpm_make_left_report;
        this.bpm_acct_mgr = bpm_acct_mgr;
        this.bpm_cancel_create_user = bpm_cancel_create_user;
        this.bpm_admin_action = bpm_admin_action;
        this.bpm_create_user = bpm_create_user;
        this.bpm_deactivate_user = bpm_deactivate_user;
        this.bpm_deactivate_user_action = bpm_deactivate_user_action;
        this.bpm_activate_user = bpm_activate_user;
        this.bpm_confirm_no_user_change = bpm_confirm_no_user_change;
        this.bpm_univite_user = bpm_univite_user;
        this.bpm_delete_user = bpm_delete_user;
        this.bpm_delete_user_action = bpm_delete_user_action;
        this.bpm_create_user_list = bpm_create_user_list;
        this.bpm_add_to_cart = bpm_add_to_cart;
        this.bpm_load_admin_page = bpm_load_admin_page;
        this.bpm_get_cart_qty = bpm_get_cart_qty;
        this.bpm_create_statement_list = bpm_create_statement_list;
        this.bpm_create_cart_list = bpm_create_cart_list;
        this.bpm_format_number = bpm_format_number;
        this.bpm_create_inv_list = bpm_create_inv_list;
        this.bpm_create_products = bpm_create_products;
        this.bpm_reinstall = bpm_reinstall;
        this.bpm_uninstall = bpm_uninstall;
        this.bpm_display_extension_list = bpm_display_extension_list;
        this.bpm_filter_extensions = bpm_filter_extensions;
        this.bpm_create_extension_list = bpm_create_extension_list;
        this.bpm_install = bpm_install;
        this.bpm_display_extension = bpm_display_extension;
        this.bpm_create_cart = bpm_create_cart;
        this.bpm_purchase_confirm = bpm_purchase_confirm;
        this.bpm_cart_purchased = bpm_cart_purchased;
        this.bpm_save_address = bpm_save_address;
        this.bpm_create_address_html = bpm_create_address_html;
        this.bpm_create_payment = bpm_create_payment;
        this.bpm_toTitleCase = bpm_toTitleCase;
        this.bpm_create_workspace_report = bpm_create_workspace_report;
        this.bpm_create_login_url = bpm_create_login_url;
        this.bpm_update_url = bpm_update_url;
        this.bpm_create_right_side = bpm_create_right_side;
        this.bpm_create_contact_us = bpm_create_contact_us;
        this.bpm_open_contact_us = bpm_open_contact_us;
        this.bpm_create_cust_supp = bpm_create_cust_supp;
        this.bpm_prep_for_lng = bpm_prep_for_lng;
        this.bpm_create_user_page = bpm_create_user_page;
        this.bpm_create_user_page_reveal = bpm_create_user_page_reveal;
        this.bpm_save_user_pref = bpm_save_user_pref;
        this.bpm_run_tutorial = bpm_run_tutorial;
        this.bpm_in_array = bpm_in_array;
        this.bpm_create_tutorial = bpm_create_tutorial;
        this.bpm_edit_calendar_item = bpm_edit_calendar_item;
        this.bpm_expand_accord = bpm_expand_accord;
        this.bpm_load_context_map = bpm_load_context_map;
        this.bpm_open_template_manager = bpm_open_template_manager;
        this.bpm_create_context_map = bpm_create_context_map;
        this.bpm_add_context_map_child = bpm_add_context_map_child;
        this.bpm_open_context_map = bpm_open_context_map;
        this.bpm_create_context_map_target = bpm_create_context_map_target;
        this.bpm_create_change_log = bpm_create_change_log;
        this.bpm_show_history = bpm_show_history;
        this.bpm_create_sharing = bpm_create_sharing;
        this.bpm_send_invite = bpm_send_invite;
        this.bpm_invite_user = bpm_invite_user;
        this.bpm_create_routing_history = bpm_create_routing_history;
        this.bpm_create_subscribers = bpm_create_subscribers;
        this.bpm_create_event_box = bpm_create_event_box;
        this.bpm_create_infobox = bpm_create_infobox;
        this.bpm_info_action = bpm_info_action;
        this.bpm_update_qtip_display = bpm_update_qtip_display;
        this.bpm_open_generic_reveal = bpm_open_generic_reveal;
        this.bpm_create_infobox_reveal = bpm_create_infobox_reveal;
        this.bpm_save_infobox = bpm_save_infobox;
        this.bpm_remove_event_info = bpm_remove_event_info;
        this.bpm_cancel_password = bpm_cancel_password;
        this.bpm_set_right_content_options = bpm_set_right_content_options;
        this.bpm_show_talat_messages = bpm_show_talat_messages;
        this.bpm_talat_dismiss = bpm_talat_dismiss;
        this.bpm_talat_reply = bpm_talat_reply;
        this.bpm_config_talat = bpm_config_talat;
        this.bpm_go_to_dashboard = bpm_go_to_dashboard;
        this.bpm_go_to_new_account = bpm_go_to_new_account;
        this.bpm_admin_login = bpm_admin_login;
        this.bpm_admin_lost_password = bpm_admin_lost_password;
        this.bpm_admin_add_contact_us_forms = bpm_admin_add_contact_us_forms;
        this.bpm_dynamicSort = bpm_dynamicSort;
        this.bpm_on_change_contact_us_account_list = bpm_on_change_contact_us_account_list;
        this.bpm_admin_add_form = bpm_admin_add_form;
        this.bpm_set_contact_forms_click = bpm_set_contact_forms_click;
        this.bpm_contact_form_make_savable = bpm_contact_form_make_savable;
        this.bpm_admin_get_form_fields_dropdown = bpm_admin_get_form_fields_dropdown;
        this.bpm_admin_check_contact_us_form = bpm_admin_check_contact_us_form;
        this.bpm_build_contact_us_editor = bpm_build_contact_us_editor;
        this.bpm_expand_contact_us_editor = bpm_expand_contact_us_editor;
        this.bpm_contact_form_field_ignore = bpm_contact_form_field_ignore;
        this.bpm_edit_infobox_name = bpm_edit_infobox_name;
        this.bpm_save_edit_infobox_name = bpm_save_edit_infobox_name;
        this.bpm_contact_us_change_selected_form = bpm_contact_us_change_selected_form;
        this.bpm_admin_get_is_error = bpm_admin_get_is_error;
        this.bpm_save_event_info = bpm_save_event_info;
        this.bpm_admin_get_is_enabled_checkbox = bpm_admin_get_is_enabled_checkbox;
        this.bpm_admin_get_set_api_button = bpm_admin_get_set_api_button;
        this.bpm_admin_get_plugin_dropdown = bpm_admin_get_plugin_dropdown;
        this.bpm_admin_on_change_plugin_dd = bpm_admin_on_change_plugin_dd;
        this.bpm_admin_get_form_dest_ws_dropdown = bpm_admin_get_form_dest_ws_dropdown;
        this.bpm_admin_update_parent_page_list_old = bpm_admin_update_parent_page_list_old;
        this.bpm_admin_get_form_parent_page_dropdown = bpm_admin_get_form_parent_page_dropdown;
        this.bpm_admin_get_form_initiator_dropdown = bpm_admin_get_form_initiator_dropdown;
        this.bpm_admin_get_form_assignee_dropdown = bpm_admin_get_form_assignee_dropdown;
        this.bpm_admin_get_form_to_manage = bpm_admin_get_form_to_manage;
        this.bpm_admin_get_contact_us_api = bpm_admin_get_contact_us_api;
        this.bpm_admin_create_dropdown = bpm_admin_create_dropdown;
        this.bpm_close_generic_reveal = bpm_close_generic_reveal;
        this.bpm_show_tutorial = bpm_show_tutorial;

        this.bpm_get_help_video = function( tip_id ){

            var tip_content = '';

            jQuery.each(bpm_settings['bpm_qtips'], function(index, value) {
                if(value.this_index == tip_id) {

                    jQuery('#' + value.target).qtip('hide');

                    var video_link = value.video_link;
                    var title = 'Help Video';
                    if(value.title) title = 'Video: ' + value.title;

                    tip_content = '<img src="'+video_link+'" style="width:100%;;">'
                    bpmcontext.bpm_open_generic_reveal(title, tip_content, false);

                }
            });

        }

        this.bpm_create_tips = function(){

            if(bpm_settings['qtip_display'] == 0){
                //destroy all tips
                jQuery('*').qtip('hide');
                jQuery('*').qtip('disable');
                return;
            }

            if(bpm_settings['bpm_qtips'] && bpm_settings['qtip_display'] > 0) {

                jQuery.each(bpm_settings['bpm_qtips'], function(index, value) {

                    var content = value.content;
                    if(value.support_url || value.video_link){
                        var video_link = '';
                        var support_url = '';
                        if(value.video_link){
                            video_link = '<a onclick="bpmcontext.bpm_get_help_video( '+value.this_index+' )"><span class="fa fa-video-camera ">&nbsp;</span></a>';
                            if(!bpm_settings['bpm_video_link']) bpm_settings['bpm_video_link'] = [];
                            bpm_settings['bpm_video_link'].push({tip_id: value.this_index, html: video_link + '&nbsp;&nbsp;&nbsp;&nbsp;'});
                        }
                        if(value.support_url){
                            support_url = '&nbsp;&nbsp;&nbsp;&nbsp;<a onclick="bpmcontext.bpm_get_help_item('+value.support_url+', '+value.this_index+' )">More...</a>';
                        }

                        var activity = '<div id="bpm_qtip_overlay_'+value.this_index+'" class="bpm-admin-overlay bpm-hide text-center"><div class="bpm-admin-activity"><span class="fa fa-spinner fa-spin">&nbsp;</span></div></div>';
                        content = '<div id="bpm_qtip_'+value.this_index+'">' + content +'<div class="bpm_qtip_footer">'+video_link+support_url+'</div>'+activity+'</div>';
                    }

                    var content_obj = {};
                    if(value.title) {
                        content_obj = {title: value.title, text: content};
                    }else{
                        content_obj = {text: content};
                    }

                    jQuery('#' + value.target).qtip('hide');

                    var position = {};
                    if( value.position_at && value.position_my) {
                        position = {
                            my: value.position_my,
                            at: value.position_at,
                            target: jQuery('#'+value.target)
                        };
                    }
                    jQuery('#'+value.target).qtip({
                        content: content_obj,
                        style: {
                            classes: 'qtip-bootstrap',
                            width: '18em'
                        },
                        hide: {
                            fixed: true,
                            event: 'unfocus mouseleave',
                            delay: 500
                        },
                        show: {
                             solo: true
                         },
                        position: position
                    })
                })
            }
        }

        this.bpm_reset_tips = function(tip_id){

            jQuery.each(bpm_settings['bpm_qtips'], function(index, value) {
                if(value.this_index == tip_id){

                    var content = value.content;
                    if(value.support_url || value.video_link){
                        var video_link = '';
                        var support_url = '';
                        if(value.video_link){
                            video_link = '<a onclick="bpmcontext.bpm_get_help_video( '+value.this_index+' )"><span class="fa fa-video-camera ">&nbsp;</span></a>';
                        }
                        if(value.support_url){
                            support_url = '&nbsp;&nbsp;&nbsp;&nbsp;<a onclick="bpmcontext.bpm_get_help_item('+value.support_url+', '+value.this_index+' )">More...</a>';
                        }

                        var activity = '<div id="bpm_qtip_overlay_'+value.this_index+'" class="bpm-admin-overlay bpm-hide text-center"><div class="bpm-admin-activity"><span class="fa fa-spinner fa-spin">&nbsp;</span></div></div>';
                        content = '<div id="bpm_qtip_'+value.this_index+'">' + content +'<div class="bpm_qtip_footer">'+video_link+support_url+'</div>'+activity+'</div>';
                    }

                    var content_obj = {};
                    if(value.title) {
                        content_obj = {title: value.title, text: content};
                    }else{
                        content_obj = {text: content};
                    }

                    var position = {};
                    if(value.position_at && value.position_my) {
                        position = {
                            my: value.position_my,
                            at: value.position_at,
                            target: jQuery('#' + value.target)
                        };
                    }

                    jQuery('#'+value.target).qtip({
                        content: content_obj,
                        style: {
                            classes: 'qtip-bootstrap',
                            width: '18em'
                        },
                        hide: {
                            fixed: true,
                            event: 'unfocus mouseleave',
                            delay: 500
                        },
                        show: {
                             solo: true
                        },
                        position: position
                    })
                }
            })
        }

        this.bpm_rename_my_name = function(){
            bpmcontext.bpm_create_user_page_reveal();
            jQuery('#bpm_user_profile_save_message').hide();
            jQuery('#bpm_edit_user_profile').foundation('reveal', 'open');
        }

        this.bpm_rename_homepage = function(){
            jQuery('#bpm_admin_rename_field').val(bpm_settings['bpm_current_page_name']);
            jQuery('#bpm_rename_error_alert').hide();
            jQuery('#bpm_rename_window').foundation('reveal', 'open');
        }

        this.bpm_create_new_account = function(){
            this.bpm_create_account_process('main_admin');
        }

        this.bpm_admin_show_new_welcome = function(){
            jQuery('#bpm_initial_login').hide();
            jQuery('#bpm_initial_message').show();
            jQuery('#bpm_admin_new_login_account').show();
            jQuery('#bpm_admin_new_login_show_all').hide();
            jQuery('#bpm_create_account_error_message').hide();
            jQuery('#bpm_new_acct_login_message').show();
        }

        this.bpm_admin_show_new_login = function(){
            jQuery('#bpm_initial_login').show();
            jQuery('#bpm_initial_message').hide();
            jQuery('#bpm_admin_new_login_account').hide();
            jQuery('#bpm_admin_new_login_show_all').show();
            jQuery('#bpm_create_account_error_message').hide();
            jQuery('#bpm_new_acct_login_message').hide();
        }

        this.bpm_open_bpmcontext = function(){

            bpm_start = Date.now();

            if(jQuery('#bpm_options_fields').length){
                jQuery('#bpm_options_fields').html(jQuery('#bpm_settings').html());
                if(bpm_params.has_full_width==1){
                    jQuery('#bpm_has_full_width').show();
                }else{
                    jQuery('#bpm_has_no_full_width').show();
                }
                return;
            }

            if(!jQuery('#bpm_content_area').length) return;

            jQuery('#bpm_page_loading_alert').show();
            jQuery('#bpm_page_area').hide();

            this.bpm_make_get_string();

            if(jQuery('#bpm_content_area') !== null) {

                bpm_template = jQuery('#bpm_content_area').html();

                jQuery('#bpm_content_area').css('z-index','1000');

                if(bpm_settings['bpm_login_status']==1) {
                    jQuery('#bpm_login_area').hide();
                }

                jQuery('#bpm_content_area').html(bpm_template);

                jQuery('#bpm_content_area').css('z-index','1000');

                var this_url = window.location.href.split('?');
                var query_string = 'url=' + this_url[0];
                if(bpm_get_string) query_string = query_string.concat('&' + bpm_get_string);

                if(bpm_settings['third_party_cookie'] == 'no'){
                    bpmcontext.show_third_party_cookie_message();
                    return;
                }

                if(bpm_params.has_logged_in) {

                    jQuery.each(bpm_params.load_solutions, function(index, value){
                        query_string = query_string.concat('&load_solution[]=' + value);
                    });

                    jQuery.each(bpm_params.bpm_installed, function(index, value){
                        query_string = query_string.concat('&bpm_installed[]=' + value);
                    });
                    jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/' + bpm_settings['bpm_api'] + '/bpmcontext_wordpress.php?callback=?', query_string, function (result) {
                        if (result) {
                            bpm_settings['bpm_login_status'] = Number(result.LOGGEDIN);
                            jQuery('#bpm_page_loading_alert').hide();

                            if (bpm_settings['bpm_login_status'] == 1) {
                                jQuery('#bpm_page_area').show();

                                if(result.solutions_installed) {
                                    var data = {
                                        'action': 'bpm_installed_solutions',
                                        'installed' : 1
                                    };

                                    jQuery.post(bpm_params.ajaxurl, data, function (result) {

                                    });
                                }

                                bpmcontext.bpm_build_page(result);

                            } else {
                                if (result.HASACCT == 1) {
                                    jQuery('#bpm_create_account_button_area').hide();
                                }
                                bpmcontext.bpm_show_login();
                            }
                        } else {
                            bpmcontext.bpm_show_login();
                        }
                    });
                }else{
                    bpm_settings['bpm_login_status'] = 0;
                }
            }
            this.load_handlers();
        } //end of function bpm_open_bpmcontext

        this.bpm_save_help_doc_widget = function(preview){

            jQuery('.bpm_tutorial_widget_button').hide();
            var post_text = encodeURIComponent(tinymce.activeEditor.getContent());
            var query_string = '&action=update_help_doc_widget&libid=' + bpm_settings['TEMPLATELIBID'] + '&status='+preview+'&content=' + post_text;
            jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/' + bpm_settings['bpm_api'] + '/bpmcontext_wordpress.php?callback=?', bpm_get_string + query_string, function (result) {
                if (result) {
                    bpm_settings['help_doc_content'] = result.help_doc_content;
                    if(bpm_settings['help_doc_content'][0]['status'] == 1){
                        jQuery('#bpm_homepage_help_docs_header_title').text('About thie Workspace Type Preview');
                    }else{
                        jQuery('#bpm_homepage_help_docs_header_title').text('About thie Workspace Type');
                    }
                    jQuery('#bpm_help_doc_widget_info').html( bpm_settings['help_doc_content'][0]['content']);
                }
                jQuery('.bpm_tutorial_widget_button').show();
            });
        }


        this.bpm_edit_help_doc_widget = function(){

            var content = '';

            if(bpm_settings['help_doc_content'].length > 0) content = bpm_settings['help_doc_content'][0]['content'];

            var html_line = '<textarea id="bpm_edit_help_doc_preview" rows="10">'+content+'</textarea>';

            html_line = html_line.concat('<div class="bpm-row" style="margin-top:1em">');
            html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns text-left">&nbsp;</div>');
            html_line = html_line.concat('<div class="bpm-large-6 bpm-small-6 bpm-columns text-right"><a onClick="bpmcontext.bpm_save_help_doc_widget(1);" class="button bpm-small bpm_tutorial_widget_button bpm_nodecoration" >Preview</a>&nbsp;<a onClick="bpmcontext.bpm_save_help_doc_widget(2);" class="button bpm-small  bpm_tutorial_widget_button bpm_nodecoration" >Save</a>&nbsp;<a onClick="bpmcontext.bpm_close_help_doc_widget()" class="button bpm-small  bpm_tutorial_widget_button bpm_nodecoration" >Cancel</a></div>');
            html_line = html_line.concat('</div>');

            jQuery('#bpm_help_doc_widget_info').html(html_line);

            tinymce.init({
                        selector: "#bpm_edit_help_doc_preview",
                        menubar: false,
                        height: 220,
                        maxLength: 3000,
                        statusbar: false,
                        content_css : bpm_params.css_dir + "tinymce.content.css",
                        plugins: [
                            "insertdatetime media table contextmenu paste link code"
                        ],
                        imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions',
                        toolbar: "bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | styleselect | image link | removeformat | code",
                        removeformat : [
                            {selector : 'b,strong,em,i,font,u,strike', remove : 'all', split : true, expand : false, block_expand : true, deep : true},
                            {selector : 'span', attributes : ['style', 'class'], remove : 'empty', split : true, expand : false, deep : true},
                            {selector : '*', attributes : ['style', 'class'], split : false, expand : false, deep : true}
                        ]
                    });

        }

        this.bpm_close_help_doc_widget = function(){

            var tutorial_id = 10000 + Number(bpm_settings['TEMPLATELIBID']);
            bpmcontext.bpm_clear_tutorial(tutorial_id);

            jQuery('#bpm_help_doc_widget').hide();
            jQuery('#bpm_help_doc_widget_display').show();
            jQuery('#bpm_widget_area').masonry({
                  // options
                  itemSelector: '.grid-item',
                  columnWidth: '.grid-sizer',
                  gutter: '.gutter-sizer',
                  percentPosition: true });
        }

        this.bpm_close_search_widget = function(){

            bpm_settings['SEARCHRESULT'] = null;
            bpm_settings['SEARCHTERM'] = null;
            jQuery('#bpm_search_results').html('');
            jQuery('#bpm_search_terms').val('');
            jQuery('#bpm_search_result_count').hide();
            jQuery('#bpm_search_widget').hide();
            jQuery('#bpm_widget_area').masonry({
                  // options
                  itemSelector: '.grid-item',
                  columnWidth: '.grid-sizer',
                  gutter: '.gutter-sizer',
                  percentPosition: true });
        }

        this.bpm_close_links_widget = function(){

            jQuery('#bpm_all_links_acc').hide();
            jQuery('#bpm_widget_area').masonry({
                  // options
                  itemSelector: '.grid-item',
                  columnWidth: '.grid-sizer',
                  gutter: '.gutter-sizer',
                  percentPosition: true });
        }

        this.bpm_open_help_doc_widget = function(data_only){

            if(!data_only){
                if( bpm_settings['help_doc_content'].length > 0) {
                    if (bpm_settings['help_doc_content'][0]['status'] == 1) jQuery('#bpm_homepage_help_docs_header_title').text('About thie Workspace Template Preview');
                }
                    jQuery('#bpm_help_doc_widget').show();
                    jQuery('#bpm_widget_area').masonry({
                        // options
                        itemSelector: '.grid-item',
                        columnWidth: '.grid-sizer',
                        gutter: '.gutter-sizer',
                        percentPosition: true
                    });
                    return '';

            }

            var html_line = '';
            var content = '';

            if(bpm_settings['help_doc_content'].length > 0) content = bpm_settings['help_doc_content'][0]['content'];

                html_line = html_line.concat('<div id="bpm_help_doc_widget_info" class="bpm_help_doc_widget_info" style="min-height:20em">');
                html_line = html_line.concat(content);
                html_line = html_line.concat('</div>');

                return html_line;

        }

        this.bpm_open_search_widget = function(data_only){

            if(!data_only){

                jQuery('#bpm_search_widget').show();
                jQuery('#bpm_widget_area').masonry({
                      // options
                      itemSelector: '.grid-item',
                      columnWidth: '.grid-sizer',
                      gutter: '.gutter-sizer',
                      percentPosition: true });
                return '';
            }

            var html_line = '';


            html_line = html_line.concat('<div id="bpm_search_results" class="bpm_search_results">');
            if(bpm_settings['SEARCHRESULT']) {
                html_line = html_line.concat(bpmcontext.bpm_make_left_report(bpm_settings['SEARCHRESULT'], 'search', true));
            }

            html_line = html_line.concat('</div>');

            return html_line;
        }

        this.bpm_search_bar = function(){

            var html_line = '';
            var search_term = '';
            if(bpm_settings['SEARCHTERM']) search_term = bpm_settings['SEARCHTERM'];
            var show_result_count = 'bpm-hide';
            var search_results = '';
            if(bpm_settings['SEARCHRESULT']){
                show_result_count = '';
                if(bpm_settings['SEARCHRESULT'].length > 30) {
                    search_results = 'Search Results: 30+';
                }else{
                    search_results = 'Search Results: ' + bpm_settings['SEARCHRESULT'].length;
                }
            }

            html_line = html_line.concat('<nav class="top-bar" data-topbar role="navigation">');

            html_line = html_line.concat('<section class="top-bar-section">');

            html_line = html_line.concat('<ul class="right">');
            html_line = html_line.concat('<li id="bpm_search_result_count" class="'+show_result_count+'" style="color:white;width:10em;margin-top:.7em;">'+search_results+'</li>');
            html_line = html_line.concat('</ul>');

            html_line = html_line.concat('<ul class="left">');

            html_line = html_line.concat('<li class="has-form">');
            html_line = html_line.concat('<div class="row ">');

            html_line = html_line.concat('<div class="large-8 small-9 columns">');
            html_line = html_line.concat('<input id="bpm_search_terms" type="text" placeholder="Search in this account" size="50" value="'+search_term+'">');
            html_line = html_line.concat('</div>');
            html_line = html_line.concat('<div class="large-4 small-3 columns">');
            html_line = html_line.concat('&nbsp;<a onclick="bpmcontext.bpm_open_search_widget_run_search()" class="button bpm_small_bar_button" id="bpm_search_results_button">Search</a>');
            html_line = html_line.concat('</div>');
            html_line = html_line.concat('</div>');
            html_line = html_line.concat('</li>');

            html_line = html_line.concat('</ul>');
            html_line = html_line.concat('</section>');
            html_line = html_line.concat('</nav>');

            return html_line;
        }

        this.bpm_open_search_widget_run_search = function(){

            var query_string = '&action=search&search='+encodeURIComponent(jQuery('#bpm_search_terms').val());
            bpm_settings['SEARCHTERM'] = jQuery('#bpm_search_terms').val();

            if(!bpm_settings['SEARCHTERM']) return;

            jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/' + bpm_settings['bpm_api'] + '/bpmcontext_wordpress.php?callback=?', bpm_get_string + query_string, function (result) {
                if(result) {
                    bpm_settings['SEARCHRESULT'] = result.SEARCHRESULT;
                    jQuery('#bpm_search_results').html(bpmcontext.bpm_make_left_report(bpm_settings['SEARCHRESULT'], 'search',true));
                    if(bpm_settings['SEARCHRESULT'].length > 30){
                        jQuery('#bpm_search_result_count').text('Search Results: 30+').show();
                    }else {
                        jQuery('#bpm_search_result_count').text('Search Results: ' + bpm_settings['SEARCHRESULT'].length).show();
                    }
                    bpmcontext.bpm_set_url_links();
                }
            });

        }


        this.bpm_make_get_string = function(){

            if(this.bpm_getQueryVariable('action')){

                if(this.bpm_getQueryVariable('action')=='bpmcontext') {

                    bpm_get_string = '';

                    jQuery('#bpm_login_area').hide();
                    jQuery('#bpm_page_area').show();


                    if (this.bpm_getQueryVariable('domain')) {
                        bpm_current_domain = this.bpm_getQueryVariable('domain');
                        bpm_get_string = bpm_get_string.concat('&domain='+bpm_current_domain);
                    }

                    var document_width = jQuery( document ).width();
                    var bpm_div_width = jQuery( '#bpm_content_area' ).width();

                    if (bpm_div_width < 900) bpm_get_string = bpm_get_string.concat('&width='+bpm_div_width);
                    var adj_width = document_width * .60;
                    if(bpm_div_width < document_width * .60) bpm_get_string = bpm_get_string.concat('&adjwidth='+adj_width);

                    if (this.bpm_getQueryVariable('pageid')) {
                        bpm_pageid = this.bpm_getQueryVariable('pageid');
                        bpm_get_string = bpm_get_string.concat('&pageid='+bpm_pageid);
                    }
                    if (this.bpm_getQueryVariable('viewas')) {
                        var bpm_viewas = this.bpm_getQueryVariable('viewas');
                        bpm_get_string = bpm_get_string.concat('&viewas='+bpm_viewas);
                    }
                    if (bpm_params.language.length) {
                        bpm_get_string = bpm_get_string.concat('&lang='+bpm_params.language);
                    }
                }
            }
        };//end of functino bpm_make_get_string

        this.load_handlers = function(){

            jQuery(window).on("popstate", function () {
                // if this is a bpmcontext page then load it

                if( ! bpm_params.has_logged_in) return;

                if (history.state && "BPMContext_Page" === history.state.page) {

                    bpm_settings['bpm_is_back_button'] = 1;
                    bpmcontext.bpm_refresh_page_loading();

                    jQuery.getJSON('https://'+bpm_settings['bpm_server']+'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', history.state.name, function(result){
                        bpm_settings['bpm_login_status'] = Number(result.LOGGEDIN);

                        jQuery('#bpm_content_area').html(bpm_template);

                        jQuery('#bpm_page_loading_alert').hide();
                        bpmcontext.bpm_build_page(result);
                    });
                }
            });

            jQuery('#bpm_search_terms').keypress(function (e) {
                if (e.which == 13) {
                    bpmcontext.bpm_open_search_widget_run_search();
                    return false;
                }
            });

            jQuery('.bpm_password_login').keypress(function (e) {
                if (e.which == 13) {
                    bpmcontext.bpm_submitLogIn(this, 3);
                    return false;
                }
            });

            jQuery('.bpm_email_login').keypress(function (e) {
                if (e.which == 13) {
                    bpmcontext.bpm_submitLogIn(this, 2);
                    return false;
                }
            });

            jQuery('#bpm_edit_TALAT_text').on('keyup keypress', function(e) {
                var code = e.keyCode || e.which;
                if (code == 13) {
                    if(bpm_is_processing==0) {
                        bpm_is_processing = 1;
                        jQuery(this).val(jQuery(this).val() + '\n');
                        setTimeout(function() {
                            bpm_is_processing = 0;
                        },200);
                    }
                    e.preventDefault();
                    return false;
                }
            });

            jQuery('.bpm_quick_post_input').on('keydown', function(e){
               if(e.which == 13){
                   var el = jQuery(this);
                   var this_id = jQuery(this).prop('id');
                   bpmcontext.bpm_send_post(this_id.substring(20));
               }
            });

            jQuery('.bpm_search_pages_input').on('keydown', function(e){
                if(e.which == 13){
                    var el = jQuery(this);
                    var this_id = jQuery(this).prop('id');
                    bpmcontext.bpm_search_grid(this_id.substring(23));
                }
            });

            jQuery('.bpm_clear_help_search').click(function() {
                jQuery('#bpm_help_widget_search').val('');
                jQuery('#bpm_help_widget_content_title').text(bpm_trans_array['bpm_lng_popular_articles']);
                jQuery('#bpm_help_widget_clear_search').hide();
                bpmcontext.bpm_help_widget_load_popular();
            });

            jQuery('#bpm_help_widget_search').on('keydown', function(e){
                if(e.which == 13){
                    bpmcontext.bpm_help_widget_search();
                }
            });

            jQuery('#bpm_admin_rename_field').on('keydown', function(e){
                if(e.which == 13){
                    bpmcontext.bpm_change_name();
                }
            });

            jQuery('.bpm_add_folder_input').on('keydown', function(e){
                if(e.which == 13){
                    var el = jQuery(this);
                    var this_id = jQuery(this).prop('id').substring(15);
                    bpmcontext.bpm_file_button(this_id,4);
                }
            });

            jQuery('.bpm_rename_folder_input').on('keydown', function(e){
                if(e.which == 13){
                    var el = jQuery(this);
                    var this_id = jQuery(this).prop('id').substring(18);
                    bpmcontext.bpm_file_button(this_id,9);
                }
            });

        }//end of load_handlers function

        this.bpm_show_login = function(){

            jQuery('#bpm_login_area').show();
            jQuery('#bpm_page_area').hide();

            if(bpmcontext.bpm_getQueryVariable('newacct')){
                jQuery('#bpm_new_account_email').val(bpmcontext.bpm_getQueryVariable('newacct'));
                bpmcontext.bpm_show_new_account();
            }

            if(bpmcontext.bpm_getQueryVariable('show_newacct')){
                bpmcontext.bpm_show_new_account();
            }
        }//end if show login function

        this.bpm_getQueryVariable = function(variable){
            var query = window.location.search.substring(1);
            var vars = query.split("&");
            for (var i=0;i<vars.length;i++) {
                var pair = vars[i].split("=");
                if(pair[0] == variable){return pair[1];}
            }
            return(false);
        } //end of bpm_getQueryVariable

        this.bpm_create_notification_bubble = function(main_id, this_id, total_messages){

            if(!total_messages) return '';

            var notification_html = '&nbsp;<span id="'+main_id+'" class="fa-stack"  style="font-size: 1em;">';
            notification_html = notification_html.concat('<i class="fa fa-square fa-stack-2x" style="color:red;"></i>');
            notification_html = notification_html.concat('<i id="'+this_id+'" class="fa fa-inverse fa-stack-1x" style="color:white;font-weight: bold">'+total_messages+'</i>');
            notification_html = notification_html.concat('</span>');
            return notification_html;

        }//end of bpm_create_notification_bubble

        this.bpm_build_page = function(result){
var line_number = new Error().lineNumber;
//console.log("Load to Line "+ line_number +" load took " + (Date.now() - bpm_start) + " milliseconds");
            if(bpm_params.has_logged_in == 0 && bpm_params.admin_bar == 1 && bpm_params.ajaxurl) {

                var data = {
                    'action': 'bpm_set_bpm_has_account'
                };

                jQuery.post(bpm_params.ajaxurl, data, function (result) {
                    bpm_params.has_logged_in = 1;
                });
            }

            jQuery('#bpm_login_area').hide();
            jQuery('#bpm_page_area').show();

            bpm_settings['bpm_has_shared'] = 0;
            bpm_settings['bpm_show_placeholder'] = [];

            this.bpm_refresh_page_loading();

            bpm_page_naming = [];
            bpm_is_loading = 0;

            jQuery('#bpm_confirm_password_html').html('');
            jQuery('#bpm_password_html').html('');

            bpm_settings['page_menu_list'] = '';

            var bpm_add_pages = '';

            if(bpm_settings['bpm_login_status']==1) {
                //update has logged in
        //console.log("To here page load took " + (Date.now() - bpm_start) + " milliseconds");
                bpm_settings['bpm_location'] = 'page';

                jQuery('#bpm_content_area').show();

                //refresh TALAT content to null
                jQuery('#bpm_edit_TALAT_text').html('');

                //update domain
                if(result.CURRENTCONTEXT) {
                    if(bpm_current_domain != result.CURRENTCONTEXT){
                        //unset dashboard data to get updated data
                        bpm_dashboard = [];

                    }
                    bpm_current_domain = result.CURRENTCONTEXT;
                    if(bpm_settings['bpm_is_back_button']==0) {

                        var url_string = window.location.href.split('?')[1];
                        var has_part = [];
                        has_part['domain'] = '';
                        has_part['pageid'] = '';
                        has_part['action'] = '';
                        var name = '';

                        if(url_string) {

                        var url_parts = url_string.split('&');

                             jQuery.each(url_parts, function (index, value) {
                                var url_var = value.split('=');
                                var this_value = url_var[1];
                                var ignore = false;

                                switch (url_var[0]) {
                                    case 'domain':
                                        this_value = bpm_current_domain;
                                        has_part['domain'] = true;
                                        break;
                                    case 'pageid':
                                        this_value = result.PAGEID;
                                        has_part['pageid'] = true;
                                        break;
                                    case 'action':
                                        this_value = 'bpmcontext';
                                        has_part['action'] = true;
                                        break;
                                    case 'newacct':
                                        ignore = true;
                                        break;
                                }
                                if(!ignore) name = name.concat(url_var[0] + '=' + this_value + '&');
                            });
                        }

                        if(!has_part['domain']) name = name.concat('domain='+bpm_current_domain+'&');
                        if(!has_part['pageid']) name = name.concat('pageid='+result.PAGEID+'&');
                        if(!has_part['action']) name = name.concat('action=bpmcontext');

                        if(name.slice(-1) == '&') name = name.slice(0, -1);

                        var state = {name: name, page: 'BPMContext_Page'};
                        window.history.pushState(state, "BPMContext", '?' + name);
                    }
                    bpm_settings['bpm_is_back_button'] = 0;
                }

                //set all variables into bpm_settings array
                jQuery.each(result, function (index, value) {
                    bpm_settings[index] = value;
                });

                this.bpm_check_plugin_hook('bpm_on_settings_done', true);

                this.bpm_make_get_string();

                if(bpm_settings['USERTYPE']){
                    bpm_user_role = bpm_settings['USERTYPE'];
                }

                bpm_settings['is_sending_post'] = 0;

                if(result.WFSTATUS){
                    bpm_page_status = result.WFSTATUS;
                }

                if(result.SHOWCUSTMENU == '1'){
                    jQuery('#left_customers').show();
                }else{
                    jQuery('#left_customers').hide();
                }

                if(result.SHOWSUPPMENU == '1'){
                    jQuery('#left_suppliers').show();
                }else{
                    jQuery('#left_suppliers').hide();
                }

                //setup breadcrumbs
                var i = 1;
                var bpm_breadcrumb_size = result.BREADCRUMBS.length;
                if(result.USERPAGE){
                    bpm_my_page = result.USERPAGE;
                }

                var bpm_breadcrumb_string = '';

                jQuery.each(result.BREADCRUMBS,function(index, value){
                    if(i==1){
                        bpm_is_root = 1;
                        //first breadcrumb
                        if(bpm_user_role == 'external') {
                            bpm_breadcrumb_string = bpm_breadcrumb_string.concat('<li class="bpm_ul_li current"><a class="bpm_bold" >'+result.ACCTNAME+'</a></li>');
                        }
                        //bpm_load_page(bpm_get_string + '&action=bpmcontext', 1);
                        bpm_settings['bpm_home_page'] = 'pageid=' + value['id'] + '&domain=' + bpm_current_domain + '&action=bpmcontext';
                        bpm_breadcrumb_string = bpm_breadcrumb_string.concat('<li class="bpm_breadcrumb_ul_li"><a id="bpm_root_breadcrumb" style="color:#333;font-weight:bold;" class="url_links" href="?pageid=' + value['id'] + '&domain=' + bpm_current_domain + '&action=bpmcontext"><span class="fi-home" style="margin-right:.5rem"></span>' + value['name'] + '</a></li>');

                    }else {
                        bpm_is_root = 0;
                        if(i == result.BREADCRUMBS.length) var this_class = 'id="bpm_last_breadcrumb"';
                        bpm_breadcrumb_string = bpm_breadcrumb_string.concat('<li class="bpm_breadcrumb_ul_li"><a '+this_class+' style="color:#333;font-weight:bold;"  class="url_links" href="?pageid='+value['id']+'&domain=' + bpm_current_domain + '&action=bpmcontext">'+ value['name'] +'</a></li>');
                    }
                    bpm_settings['bpm_current_page_name'] = value['name'];
                    i++;
               });
                jQuery('#bpm_breadcrumbs').prepend(bpm_breadcrumb_string);

                if(result.QUICKDOCS) {
                    bpm_quick_docs = result.QUICKDOCS;
                }

                if(Number(result.CUSTPANEL) > 0) {
                    jQuery('#bpm_show_cust_loc').show();
                }
                if(Number(result.SUPPPANEL) > 0) {
                    jQuery('#bpm_show_cust_loc').show();
                }
                //setup toolbar
                bpm_set_toolbar_options(result);

                //add context list
                if(result.CONTEXTLIST) {
                    var bpm_context_list = '';

                    jQuery.each(result.CONTEXTLIST, function (index, value) {
                        bpm_context_list = bpm_context_list.concat('<li class="bpm_ul_li"><a class="url_links bpm_context_change bpm_nodecoration" href="?domain=' + value['id'] + '&action=bpmcontext">'+value['name']+'</a></li>');
                    });

                    jQuery('#bpm_left_context_list').show();
                    jQuery('#bpm_context_list').html(bpm_context_list);

                }else{
                    jQuery('#bpm_left_context_list').hide();
                }

                //hide options on toolbar if draft
                if(result.WFSTATUS == 0) {
                    jQuery('#bpm_toolbar_options').hide();
                }

                //add 'add pages' to the toolbar
                if(result.TOOLBAR_ADD && result.WFSTATUS > 0) {
                    jQuery.each(result.TOOLBAR_ADD, function (index, value) {
                        var this_title = '';
                        if(bpm_trans_array['bpm_template_name_'+ value['name'].replace(' ','_')]){
                            this_title = bpm_trans_array['bpm_template_name_'+ value['name'].replace(' ','_')];
                        }else{
                            this_title = value['name'];
                        }
                        if(value['naming']) {
                            bpm_page_naming[value['id']] = value['naming'];
                        }

                        bpm_add_pages = bpm_add_pages.concat('<li class="bpm_ul_li"><a class="bpm_nodecoration bpm_add_page_menu_item" id="bpm_add_page_' + value['id'] + '" onClick="bpmcontext.bpm_open_add_page(this);">' + this_title + '</a></li>');
                    });
                    jQuery('#bpm_toolbar_add_page').prepend(bpm_add_pages);
                }else{
                    jQuery('#bpm_add_pages_dd').hide();
                }
                //add view as dropview values

                if(result.VIEWAS) {
                    var bpm_add_viewas = '';
                    jQuery.each(result.VIEWAS,function(index, value){
                        bpm_add_viewas = bpm_add_viewas.concat('<li class="bpm_ul_li"><a class="bpm_action bpm_nodecoration url_links" id="bpm_view_as_'+value['id']+'" href="?pageid='+bpm_pageid+'&viewas=' + value['id'] + '&action=bpmcontext">'+bpm_trans_array['bpm_lng_'+value['name'].replace(' ','_')]+'</a></li>');
                    });
                    jQuery('#bpm_view_as_dd').prepend(bpm_add_viewas);
                }else{
                    //hide toolbar button
                    jQuery('#bpm_view_as_dd_button').hide();
                }
                //stop sharing button
                if(result.STOPSHARING) {
                    switch(result.STOPSHARING){
                        case 0:
                            //show restart sharing button
                            jQuery('#bpm_stop_sharing').hide();
                            jQuery('#bpm_restart_sharing').show();
                            break;
                        case 1:
                            if(result.WFSTATUS > 0){
                                //show stop sharing button
                                jQuery('#bpm_stop_sharing').show();
                                jQuery('#bpm_restart_sharing').hide();
                            }else{
                                //hide stop sharing button
                                jQuery('#bpm_stop_sharing').hide();
                                jQuery('#bpm_restart_sharing').hide();
                            }
                            break;
                        default:
                            //hide sharing button
                            jQuery('#bpm_stop_sharing').hide();
                            jQuery('#bpm_restart_sharing').hide();
                    }
                }

                var bpm_folder_trees = [];
                var bpm_folder_trees_folders = [];
                var bpm_sections = '';
                var home_page_section = '';
                var home_page_section_top = '<div id="bpm_widget_area" class="grid" style="width:100%"><div class="grid-sizer"></div><div class="gutter-sizer"></div>';
                var bpm_show_title = true;

                if(result.SECTIONINFO){

                    var bpm_sections_last  = '';
                    var bpm_has_links = 0;
                    var bpm_links_id = 0;
                    var bpm_link_count = [];
                    var bpm_links_content = [];
                    var bpm_links_sections = [];
                    var bpm_links_ids = [];
                    var bpm_links_title = '';
                    bpm_disc_list = [];
                    bpm_text_history = [];
                    var last_index = 0;

                    bpm_sections = bpm_sections.concat('<div id="bpm_acc_section_main" class="bpm_widget_box_section grid-item grid-item--width2" >');

                    jQuery.each(result.SECTIONINFO['sections'],function(index, value){

                        last_index = index;
                        if(bpm_params['custom_sections']) bpm_sections = bpm_sections.concat(bpmcontext.add_custom_section(index));

                        var is_shared = '';
                        var shared_message = '';
                        if(value['isShared'] && bpm_user_role != 'external'){
                            is_shared = '<div style="float:right;display: inline;color:black;font-size:1.2em;margin-right:1em;" class="fi-torsos"></div>';
                            if(bpm_settings['is_shared_ext'] == 1){
                                    shared_message = ' <span style="color:gray;font-size:.8em"> - ' + bpm_trans_array['bpm_lng_shared_with'] + ' All Users (External users cannot edit)</span>';
                            }else {
                                shared_message = ' <span style="color:gray;font-size:.8em"> - ' + bpm_trans_array['bpm_lng_shared_with'] + ' ' + value['shared_with'] + ' ' + bpm_trans_array['bpm_lng_users'].toLowerCase() + '</span>';
                            }
                            bpm_settings['bpm_has_shared'] = 1;
                        }
                        var this_title = '';
                        if(bpm_trans_array['bpm_section_name_'+ value['title'].replace(' ','_')]){
                            this_title = bpm_trans_array['bpm_section_name_'+ value['title'].replace(' ','_')];
                        }else{
                            this_title = value['title'];
                        }

                        this_title = this_title.concat(shared_message);
                        if( bpm_settings['TEMPLATELIBID'] != 25 || value['SecType'] == 9) {
                            //if(Number(value['SecType']) != 9) bpm_sections = bpm_sections.concat('<div id="bpm_acc_section_' + value['THISID'] + '" class="bpm_widget_box grid-item grid-item--width2" style="max-height:20em;height:20em;">');
                            switch (Number(value['SecType'])) {
                                case 1:
                                    if (bpm_settings['bpm_load_promote'] == 1) {
                                        if (!bpm_settings['bpm_promote_section'] && value['content'].length) bpm_settings['bpm_promote_section'] = value['THISID'];
                                    }
                                case 14:
                                    //text section
                                    bpm_text_history[value['THISID']] = value['history'];
                                    bpm_text_promote[value['THISID']] = value['content'].length;
                                    bpm_sections = bpm_sections.concat('<ul class="accordion"  id="bpm_acc_' + value['THISID'] + '" data-accordion><li class="accordion-navigation"><a href="#acc_' + value['THISID'] + '" id="bpm_top_bar_' + value['THISID'] + '" class="bpm_top_bar bpm_nodecoration fi-clipboard-pencil bpm_text_section">&nbsp;' + this_title + '<div style="float:right;display: inline;" class="fi-pencil"></div> ' + is_shared + '</a> <div id="acc_' + value['THISID'] + '" class="active bpm_text_section bpm_section_height" > ' + bpmcontext.bpm_create_text(value['THISID'], value['content']) + '</div> </li>  </ul>');
                                    break;
                                case 6:
                                    //discussion section
                                    bpm_disc_list.push(value['THISID']);
                                    bpm_sections = bpm_sections.concat('<ul class="accordion" id="bpm_acc_' + value['THISID'] + '" data-accordion><li class="accordion-navigation"><a href="#acc_' + value['THISID'] + '" id="bpm_top_bar_' + value['THISID'] + '" class="bpm_nodecoration fi-comments">&nbsp;' + this_title + is_shared + '</a> <div id="acc_' + value['THISID'] + '" class="active bpm_discussion_section bpm_section_height">' + bpmcontext.bpm_create_discussion(value['THISID'], value['content']) + '</div> </li>  </ul>');
                                    break;
                                case 10:
                                    //attachments section
                                    if (value['THISID']) bpm_folder_trees.push(value['THISID']);
                                    if (value['folders']) bpm_folder_trees_folders[value['THISID']] = value['folders'];
                                    var folder_icon = '';
                                    var folder_icon_plugin = '';
                                    if (bpm_settings['bpm_folder_icon']) {
                                        /**
                                        var this_title = '';
                                        if (bpm_trans_array['bpm_section_name_' + value['title'].replace(' ', '_')]) {
                                            this_title = bpm_trans_array['bpm_section_name_' + value['title'].replace(' ', '_')];
                                        } else {
                                            this_title = value['title'];
                                        }
                                         **/
                                        this_title = this_title.concat(bpm_settings['bpm_attachment_folder_name']);
                                        this_title = this_title.concat(shared_message);

                                        folder_icon_plugin = '<span class="' + bpm_settings['bpm_folder_icon'] + '"></span>';

                                    } else {
                                        folder_icon = 'fi-folder';
                                    }
                                    if (bpm_settings['TEMPLATELIBID'] != 25) bpm_sections = bpm_sections.concat('<ul class="accordion" id="bpm_acc_' + value['THISID'] + '" data-accordion><li class="accordion-navigation"><a href="#acc_' + value['THISID'] + '" id="bpm_top_bar_' + value['THISID'] + '" class="bpm_nodecoration bpm_top_bar ' + folder_icon + '">' + folder_icon_plugin + '&nbsp;' + this_title + '<div style="float:right;display: inline;" class="fi-pencil"></div>' + is_shared + '</a> <div id="acc_' + value['THISID'] + '" class="active bpm_attachments_section bpm_section_height"> ' + bpmcontext.bpm_create_attachment(value['THISID'], value['content'], value['folders']) + ' </div> </li>  </ul>');
                                    break;
                                case 12:
                                    //read-only text section
                                    if (bpm_settings['TEMPLATELIBID'] != 25) bpm_sections = bpm_sections.concat('<ul class="accordion"  id="bpm_acc_' + value['THISID'] + '" data-accordion><li class="accordion-navigation"><a href="#acc_' + value['THISID'] + '" id="bpm_top_bar_' + value['THISID'] + '" class="bpm_nodecoration bpm_top_bar fi-lock">&nbsp;' + this_title + is_shared + '</a> <div id="acc_' + value['THISID'] + '" class="active bpm_text_section bpm_section_height"> ' + bpmcontext.bpm_create_readonly_text(value['THISID'], value['content']) + '</div> </li>  </ul>');
                                    break;
                                case 9:
                                    //links section
                                    if (value['favorite'] == 1) {
                                        var bpm_content_array = [];
                                        bpm_content_array.push(value['content']);
                                        var this_count = value['linkCount'];
                                        if (!bpm_settings['TEMPLATELIBID'] == 25) bpm_sections_last = bpm_sections_last.concat('<ul class="accordion" id="bpm_acc_' + value['THISID'] + '" data-accordion><li class="accordion-navigation"><a href="#acc_' + value['THISID'] + '" id="bpm_top_bar_' + value['THISID'] + '" class="bpm_nodecoration bpm_top_bar fi-list-thumbnails">&nbsp;' + this_title + '&nbsp;(' + this_count + ')<div style="float:right;display: inline;" class="fi-pencil"></div>' + is_shared + '</a> <div id="acc_' + value['THISID'] + '" class="active bpm_links_section bpm_section_height"> ' + bpmcontext.bpm_create_tagged_page_links(value['THISID'], bpm_content_array, this_title, this_count, value['add_button']) + ' </div></li> </ul>');
                                    }
                                    bpm_links_id = value['THISID'];
                                    bpm_links_title = this_title;
                                    bpm_links_content.push(value['content']);
                                    if (value['linkCount'] > 0)  bpm_has_links++;
                                    bpm_links_sections.push(this_title);
                                    bpm_links_ids.push(value['THISID']);
                                    bpm_link_count.push(value['linkCount']);
                                    break;
                                case 5:
                                    //spreadsheet section
                                    if (bpm_settings['TEMPLATELIBID'] != 25) bpm_sections = bpm_sections.concat('<ul class="accordion"  id="bpm_acc_' + value['THISID'] + '" data-accordion><li class="accordion-navigation"><a href="#acc_' + value['THISID'] + '" id="bpm_top_bar_' + value['THISID'] + '" class="bpm_nodecoration bpm_top_bar fi-thumbnails">&nbsp;' + this_title + '<div style="float:right;display: inline;" class="fi-pencil"></div>' + is_shared + '</a> <div id="acc_' + value['THISID'] + '" class="active bpm_text_section bpm_section_height"> ' + bpmcontext.bpm_create_spreadsheet(value['THISID'], value['content']) + '</div> </li>  </ul>');
                                    break;

                            }
                            //if(Number(value['SecType']) != 9) bpm_sections = bpm_sections.concat('</div>');
                        }
                    });

                    bpm_sections = bpm_sections.concat('</div>');

                    if(bpm_params['custom_sections']) bpm_sections = bpm_sections.concat(bpmcontext.add_custom_section(last_index));

                    if(bpm_has_links > 0){
                        bpm_page_links_title = '';

                        var alert_message = '';
                        alert_message = alert_message.concat('<div data-alert class="alert-box success radius bpm-hide" id="bpm_page_menu_messages">');
                        alert_message = alert_message.concat('<a href="#" class="close">&times;</a>');
                        alert_message = alert_message.concat('</div>');

                        var bpm_sections_last_final = '';
                        var hide_page_menu = '';
                        if(bpm_settings['has_page_menu_on_toolbar']) hide_page_menu = 'bpm-hide';

                        bpm_sections_last_final = bpm_sections_last_final.concat('<div class="bpm_widget_box grid-item grid-item--width2 bpm-hide" >' + bpmcontext.bpm_make_homepage_widget(bpmcontext.bpm_create_child_links(bpm_links_id, bpm_links_content, bpm_links_sections, bpm_link_count, bpm_links_ids), 'bpm_all_links_acc', bpm_trans_array['bpm_lng_page_links'], false , '40em') + '</div>');
                    }

                    if(bpm_sections_last) bpm_sections = bpm_sections_last.concat(bpm_sections);


                    //setup homepage widgets
                    var bpm_homepage_grid = 1;
                    if(jQuery( '#bpm_content_area' ).width() > 1200){
                        bpm_homepage_grid = 2;
                    }



                    var hide_search_class = 'bpm-hide';
                    if(bpm_settings['SEARCHRESULT'])  hide_search_class = '';

                    home_page_section_top = home_page_section_top.concat('<div id="bpm_help_doc_widget" class="bpm_widget_box grid-item grid-item--width2 '+hide_search_class+'">'+bpmcontext.bpm_make_homepage_widget( bpmcontext.bpm_open_help_doc_widget(true), 'bpm_homepage_help_docs', 'About this Workspace Template', '20em','20em')+'</div>');
                    home_page_section_top = home_page_section_top.concat('<div id="bpm_search_widget" class="bpm_widget_box grid-item grid-item--width2 '+hide_search_class+'">'+bpmcontext.bpm_make_homepage_widget( bpmcontext.bpm_open_search_widget(true), 'bpm_homepage_search', 'Search')+'</div>');


                    if(bpm_params.home_page && bpm_settings['TEMPLATELIBID'] == 25) {
                        bpm_show_title = false;
                        home_page_section = home_page_section.concat('<div id="bpm_search_widget" class="bpm_widget_box grid-item grid-item--width2 '+hide_search_class+'">'+bpmcontext.bpm_make_homepage_widget( bpmcontext.bpm_open_search_widget(true), 'bpm_homepage_search', 'Search')+'</div>');
                        jQuery.each(bpm_params.home_page, function (index, value) {

                            var width_class = '';
                            if(value['width'] == 2){
                                width_class = 'grid-item--width2';
                            }
                            var hide_this= false;
                            jQuery.each(bpm_settings['homepage_widgets'], function(test_index, text_value){
                                if(text_value['widget_id']==index) hide_this = true;
                            })
                            if(hide_this) return true;

                            switch(index){
                                case 'calendar':
                                    home_page_section = home_page_section.concat('<div class="bpm_widget_box grid-item grid-item--width2">'+bpmcontext.bpm_make_homepage_widget( '<div id="bpm_calendar"></div>','bpm_event_calendar', 'Calendar','52em')+'</div>');
                                    break;
                                case 'recent':
                                    if(result.dashboard.RECENT.length ) home_page_section = home_page_section.concat('<div class="bpm_widget_box grid-item '+width_class+'">'+bpmcontext.bpm_make_homepage_widget( bpmcontext.bpm_make_left_report(result.dashboard.RECENT, 'recent',true),'bpm_homepage_recent', 'Recent Changes')+'</div>');
                                    break;
                                case 'bookmarks':
                                    if(result.dashboard.BOOKMARKS.length ) home_page_section = home_page_section.concat('<div class="bpm_widget_box grid-item '+width_class+'">'+bpmcontext.bpm_make_homepage_widget( bpmcontext.bpm_make_left_report(result.dashboard.BOOKMARKS, 'recent',true),'bpm_homepage_bookmarks', 'Bookmarks')+'</div>');
                                    break;
                                case 'subscriptions':
                                    if(result.dashboard.SUBSCRIBED.length) home_page_section = home_page_section.concat('<div class="bpm_widget_box grid-item '+width_class+'">'+bpmcontext.bpm_make_homepage_widget( bpmcontext.bpm_make_left_report(result.dashboard.SUBSCRIBED, 'recent',true),'bpm_homepage_subscriptions', 'Subscriptions')+'</div>');
                                    break;
                                case 'myhistory':
                                    home_page_section = home_page_section.concat('<div class="bpm_widget_box grid-item '+width_class+'">'+bpmcontext.bpm_make_homepage_widget( bpmcontext.bpm_make_left_report(result.dashboard.MYHISTORY, 'recent',true),'bpm_homepage_history', 'My History')+'</div>');
                                    break;
                                case 'directory':
                                    bpm_dashboard[5] = result.dashboard.DIRECTORY;
                                    if(bpm_dashboard[5]) home_page_section = home_page_section.concat('<div class="bpm_widget_box grid-item '+width_class+'">'+bpmcontext.bpm_make_homepage_widget( bpmcontext.bpm_make_directory(bpm_dashboard[5]),'bpm_employee_directory', 'Directory')+'</div>');
                                    break;
                                case 'promoted':
                                    bpm_settings['load_recent_to_homepage'] = 0;
                                    if(result.HOMEPAGEITEMS) {
                                        home_page_section_top = home_page_section_top.concat('<div class="bpm_widget_box grid-item grid-item--width2" >' + bpmcontext.bpm_make_homepage_widget(bpmcontext.bpm_create_home_page_items(result), 'bpm_homepage_newsfeed', 'Newsfeed', '30em') + '</div>');
                                    }
                                    break;
                                case 'notifications':
                                    if(result.dashboard.NOTIFICATIONS.wfdocs.length) home_page_section = home_page_section.concat('<div class="bpm_widget_box grid-item '+width_class+'">'+bpmcontext.bpm_make_homepage_widget( bpmcontext.bpm_make_left_report(result.dashboard.NOTIFICATIONS.wfdocs, 'recent',true),'bpm_homepage_notifications', 'Notifications')+'</div>');
                                    break;
                                case 'custom':
                                    jQuery.each(bpm_params.home_page.custom, function (this_index, this_value) {
                                        if(this_value['domain'] && this_value['domain'] != bpm_current_domain) return true;
                                        var hide_this= false;
                                        jQuery.each(bpm_settings['homepage_widgets'], function(test_index, test_value){
                                            if(test_value['widget_id']==this_value['id']) hide_this = true;
                                        })
                                        if(hide_this) return true;
                                        var width_class = '';
                                        if(this_value['width'] == 2){
                                            width_class = 'grid-item--width2';
                                        }
                                        home_page_section = home_page_section.concat('<div class="bpm_widget_box grid-item ' + width_class + '" >' + bpmcontext.bpm_make_homepage_widget(bpmcontext.executeFunctionByName(this_value['callback'], window), 'bpm_homepage_'+this_value['id'], this_value['title'], false , this_value['height']) + '</div>');
                                    });
                                    break;
                            }

                        });
                    }
                    if(home_page_section_top) home_page_section = home_page_section_top.concat(home_page_section);
                    if(home_page_section) bpm_sections = home_page_section.concat(bpm_sections + '</div>');

                    if(bpm_has_links > 0){
                        if(bpm_sections_last_final) bpm_sections = bpm_sections_last_final.concat(bpm_sections);

                    }

                    var page_name = bpm_settings['bpm_current_page_name'];
                    if((bpm_settings['TEMPLATELIBID'] == 25 && !result.HOMEPAGEITEMS)){
                        page_name = "Recent Activity";
                    }
                    var page_name_html = '';
                    if(bpm_show_title) {
                        page_name_html = page_name_html.concat('<div class="bpm-row bpm-page-title" style="margin-top:.25em;margin-bottom:1em; margin-left:.2rem;margin-right:.2rem;">');
                        page_name_html = page_name_html.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-center" style="height:34px;margin-bottom:.5em;" id="bpm_page_name"><span>' + page_name + '</span></div>');
                        page_name_html = page_name_html.concat('</div>');
                    }

                    if((bpm_settings['TEMPLATELIBID'] == 25 && !result.HOMEPAGEITEMS) || bpm_settings['TEMPLATELIBID'] != 25 ) {
                        bpm_sections = page_name_html.concat(bpm_sections);
                    }


                    if(result.DELETED_STATUS == 2) {
                        bpm_sections = bpm_trans_array['bpm_lng_page_deleted'];
                    }
                    jQuery('#bpm_main_content').prepend(bpm_sections);

                    jQuery('#bpm_page_name').textfill({
                        maxFontPixels: 32,
                        changeLineHeight: true
                    });

                    jQuery('#bpm_toolbar_page_menu').hide();

                    if(bpm_settings['has_page_menu_on_toolbar']){
                        //add page menu options to the toolbar

                        if(bpm_settings['page_menu_list']) {
                            jQuery('#bpm_toolbar_page_menu_dd').html(bpm_settings['page_menu_list']);
                            jQuery('#bpm_toolbar_page_menu').show();
                        }
                    }

                    if(bpm_page_status == 0) {
                        jQuery.each(bpm_settings['bpm_show_placeholder'], function (index, value) {
                            //show placeholder for attachments
                            jQuery('#bpm_file_placeholder_' + value).show();
                            jQuery('#bpm_file_area_' + value).hide();
                        });
                    }

                    if(jQuery('#bpm_top_bar_999999').length) jQuery('#bpm_top_bar_999999').html(bpm_page_links_title);

                    if(bpm_user_role == 'external'){
                        jQuery('#left_directory_item').hide();
                        jQuery('.bpm_lng_promote').hide();
                    }else {
                        jQuery('#left_directory_item').show();
                        jQuery('.bpm_lng_promote').show();
                    }

                    if(bpm_user_role == 'admin'){
                        jQuery('.bpm_admin_only').show();
                    }

                    if(bpm_settings['ISBPMADMIN']){
                        jQuery('.bpm-no-bpm-admin').hide();
                    }

                    if(bpm_params.admin_bar == 1){
                        jQuery('#bpm_admin_bar_header').show();
                    }
                    jQuery('#bpm_content_area').show();

                    bpm_create_right_side(result);

                    jQuery('#bpm_content').height( jQuery("#bpm_pageBarLeft").height() + 20 );
                    jQuery('.bpm_quick_post_input').prop('placeholder', bpm_trans_array['bpm_lng_add_a_comment']);
                    jQuery('.bpm_add_folder_input').prop('placeholder', bpm_trans_array['bpm_lng_folder_name']);
                    jQuery('.bpm_rename_folder_input').prop('placeholder', bpm_trans_array['bpm_lng_rename_folder_placeholder']);
                    jQuery('.bpm_search_pages_input').prop('placeholder', bpm_trans_array['bpm_lng_search_page_names_placeholder']);

                    if(result.GETMSGS){
                        this.bpm_create_alert(result.GETMSGS);
                    }

                    bpmcontext.bpm_check_plugin_hook('bpm_on_page_display', false);
var line_number = new Error().lineNumber;
//console.log("Load to Line "+ line_number +" load took " + (Date.now() - bpm_start) + " milliseconds");
                    this.bpm_update_dashboard(result.dashboard);
var line_number = new Error().lineNumber;
//console.log("Load to Line "+ line_number +" load took " + (Date.now() - bpm_start) + " milliseconds");

                    if(bpm_reflow==0) {
                        jQuery(document).foundation();
                        bpm_reflow = 1;
                    }else{
                        jQuery(document).foundation('topbar', 'reflow');
                        jQuery(document).foundation('tab', 'reflow');
                        jQuery(document).foundation('dropdown', 'reflow');
                        jQuery(document).foundation('tooltip', 'reflow');
                    }

var line_number = new Error().lineNumber;
//console.log("Load to Line "+ line_number +" load took " + (Date.now() - bpm_start) + " milliseconds");

                    var show_my_name = true;
                    if(bpm_settings['TEMPLATELIBID'] == 25 && bpm_user_role == 'admin' && (bpm_settings['bpm_current_page_name'] == 'Company Name' || bpm_settings['bpm_current_page_name'] == 'Company')){
                        //show change company name alert
                        jQuery('#bpm_main_change_name').show();
                        show_my_name = false;
                    }

                    if(show_my_name && bpm_settings['TEMPLATELIBID'] == 25 && bpm_settings['USERDETAILS']['name'] == 'My Name' ){
                        //show change company name alert
                        jQuery('#bpm_main_change_my_name').show();
                    }

                    if(bpm_settings['TEMPLATELIBID'] == 25) jQuery('#bpm_widget_area').masonry({
                              // options
                              itemSelector: '.grid-item',
                              columnWidth: '.grid-sizer',
                              gutter: '.gutter-sizer',
                              percentPosition: true });

                    jQuery(document).on('closed.fndtn.reveal', '.reveal-modal', function () {

                        jQuery('.bpm_toolbar_options_dd').show();
                        if(bpm_settings['refresh_page']==1){
                            bpm_settings['refresh_page'] = 0;
                            bpmcontext.bpm_refresh_page_loading();
                        }
                        if(bpm_settings['reload_page'] == 1){
                            bpm_settings['reload_page'] = 0;
                            bpmcontext.bpm_refresh_page_loading();
                            bpm_load_page(bpm_get_string + '&action=bpmcontext', 1);
                        }
                        if(bpm_settings['bpm_hide_wizard'] == 1 && bpm_params.ajaxurl){
                            var data = {
                                'action': 'bpm_update_display_wizard',
                                'data': 1
                            };

                            jQuery.post(bpm_params.ajaxurl, data, function (result) {

                            });
                        }
                    });

                    jQuery('.bpm-account-manager').hide();
                    jQuery('#bpm_theme_width_button').hide();

                    if(bpm_settings['help_doc_content'].length > 0 && bpm_settings['TEMPLATELIBID'] != 25 && bpm_settings['TEMPLATELIBID'] > 0 && bpmcontext.bpm_show_tutorial(Number(bpm_settings['TEMPLATELIBID']) + 10000)){
                        if(bpm_settings['help_doc_content'][0]['status'] == 2 || bpm_settings['ISBPMADMIN'] ) bpmcontext.bpm_open_help_doc_widget();
                    }else{
                        if(bpm_settings['help_doc_content'].length > 0 || bpm_settings['ISBPMADMIN']){
                            if(bpm_settings['TEMPLATELIBID'] > 0 && bpm_settings['TEMPLATELIBID']  != 25) jQuery('#bpm_help_doc_widget_display').show();
                        }
                    }

                    if(bpm_settings['is_primary_admin']) {
                        jQuery('#bpm_toolbar_admin_extensions').show();
                    }

                    if(bpm_user_role == 'external') jQuery('#bpm_user_homepage_manager').hide();
                    //setup history buttons
                    this.bpm_update_history_button();
                    jQuery('#bpm_new_account').foundation('reveal', 'close');

                    //setup discussion expand buttons
                    jQuery.each(bpm_disc_list,function(index, value) {
                        bpmcontext.bpm_set_disc_expand_button(value);
                    });

                    jQuery.each(bpm_folder_trees,function(index, value) {
                        bpmcontext.bpm_make_folder_tree(value, bpm_folder_trees_folders[value]);
                    });

                    jQuery('#bpm_main_loading_alert').hide();
                    jQuery('#bpm_context_loading_alert').hide();
                    jQuery('#bpm_main_publishing_alert').hide();
                    jQuery('#bpm_main_routing_alert').hide();

                    if(result.RESETPASSWORD == 1){
                        jQuery('#bpm_cancel_password').hide();
                        jQuery('#bpm_confirm_password_html').html('<input id="bpm_confirm_password_field" type="password" size="20" /> <small id="bpm_password_error" class="error" style="display: none;">'+bpm_trans_array['bpm_lng_password_no_match']+'</small>');
                        jQuery('#bpm_password_html').html('<input id="bpm_password_field" type="password" size="20" />');

                        jQuery('.bpm_confirm_password_field').keypress(function (e) {
                            if (e.which == 13) {
                                bpmcontext.bpm_save_password();
                                return false;
                            }
                        });

                        jQuery('.bpm_password_field').keypress(function (e) {
                            if (e.which == 13) {
                                bpmcontext.bpm_save_password();
                                return false;
                            }
                        });

                        jQuery('#bpm_reset_password_window').foundation('reveal', 'open');
                    }

                    jQuery( ".title-header" ).hide();
                    jQuery('.bpm_hide_button').hide();

                    if(bpm_page_status == 0) {
                        jQuery('.bpm_section_top_bar_bpm_acc_all').show();
                    }
                    if(bpm_settings['bpm_load_promote']==1 && bpm_user_role != 'external'){
                        bpm_settings['bpm_load_promote'] = 0;
                        if(bpm_settings['bpm_promote_section'] && bpm_settings['WORKFLOWTYPE'] == 1) this.bpm_hp_promote(bpm_settings['bpm_promote_section'], true);

                    }

                    if(bpm_settings['show_now'] > 0 && bpm_settings['RESETPASSWORD'] != 1){
                        bpm_settings['tutorial_mode'] = 1;
                        this.bpm_set_tutorial_actions();
                        this.bpm_run_main_tutorial(bpm_settings['show_now']);
                    }

                    if(bpm_settings['show_now'] > 0 && bpm_settings['RESETPASSWORD'] == 1){
                        bpm_settings['RUN_TUT_AFTER_RESET_PWD'] = bpm_settings['show_now'];
                    }

                    if(bpm_current_domain < 6300){
                        jQuery('#left_quick_docs_item').show();
                    }

                    bpmcontext.make_attachments_sortable();

                    this.bpm_update_qtip_display();

                    var date = new Date();
                    var d = date.getDate();
                    var m = date.getMonth();
                    var y = date.getFullYear();
                    var tooltip = jQuery('<div/>').qtip({
                                        id: 'bpm_calendar',
                                        prerender: true,
                                        content: {
                                            text: ' ',
                                            title: {
                                                button: true
                                            }
                                        },
                                        position: {
                                            my: 'bottom center',
                                            at: 'top center',
                                            target: 'mouse',
                                            viewport: jQuery('#bpm_calendar'),
                                            adjust: {
                                                mouse: false,
                                                scroll: false
                                            }
                                        },
                                        show: false,
                                        hide: false,
                                        style: 'qtip-bootstrap'
                                    }).qtip('api');

                    jQuery('#bpm_calendar').fullCalendar({
                        height: 500,
                        eventClick: function(data, event, view) {
                            var footer = '<a class="url_links bpm_nodecoration" href="?domain=' + bpm_current_domain + '&action=bpmcontext&pageid=' + data.page_index + '">'+data.page_title+'</a>';
                            var date_format = 'MMMM Do YYYY h:mm a';
                            var today_msg = '';
                            if(moment(data.start).format('MMMM Do YYYY') == moment(data.end).format('MMMM Do YYYY')){
                                date_format = 'h:mm a';
                                today_msg = 'Today at ';
                            }
                            var content = '<div class="bpm-row"><div class="bpm-large-4 bpm-small-4 bpm-columns text-left"><b>Start:</b></div><div class="bpm-large-8 bpm-small-8 bpm-columns text-left"> '+today_msg + moment(data.start).format(date_format)+'</div></div>' +
                                (data.end && '<div class="bpm-large-4 bpm-small-4 bpm-columns text-left"><b>End:</b></div><div class="bpm-large-8 bpm-small-8 bpm-columns text-left">'+today_msg + moment(data.end).format(date_format)+'</div></div>' || '') +
                                '<br><br><div class="bpm-row"><div class="bpm-large-12 bpm-small-12 bpm-columns text-left">' + footer + '</div></div>';

                            tooltip.set({
                                'content.text': content,
                                'content.title': data.title
                            })
                            .reposition(event).show(event);
                            bpmcontext.bpm_set_url_links();
                        },
                        dayClick: function() { tooltip.hide() },
                        eventResizeStart: function() { tooltip.hide() },
                        eventDragStart: function() { tooltip.hide() },
                        viewDisplay: function() { tooltip.hide() },
                        header: {
                            left: 'prev,next',
                            center: 'title',
                            right: 'month,basicWeek,basicDay'
                        },
                        events: bpm_settings['EVENT_DATA']
                    });
                    this.bpm_set_url_links();

                    if(bpm_params.admin_bar && bpm_params.wp_admin ) {
                        if (bpm_params.admin_bar == 1 && bpm_params.wp_admin == 1) {
                            //check if we need to run the width wizard
                            var div_width = parseInt(jQuery("#bpm_content_area").css('width'), 10);
                            var window_width = jQuery(window).width();
                            var document_width = jQuery(document).width();
                            if ((bpm_user_role == 'admin' && div_width < 900 && document_width > 1000 && window_width > 1000 && bpm_params.admin_bar == 1 && bpm_params.wp_admin == 1)) {

                                jQuery('#bpm_theme_width_button').show();
                            }
                        }

                        if (bpm_params.display_wizard == 1 && bpm_params.admin_bar == 1 && bpm_params.wp_admin == 1) {
                            if (bpm_params.display_wizard == 1) {
                                if ((div_width < 900 && document_width > 1000 && window_width > 1000)) {
                                    //this page is smoshed
                                    bpm_settings['bpm_hide_wizard'] = 1;
                                    this.bpm_template_wizard();
                                    jQuery('#bpm_admin_template_wizard').foundation('reveal', 'open');
                                }
                            }
                        }
                    }

                    this.load_handlers();
                    bpmcontext.is_read_only();
var line_number = new Error().lineNumber;
//console.log("Load to Line "+ line_number +" load took " + (Date.now() - bpm_start) + " milliseconds");
                }//end of build page routine

                //handler setup


            }else{
                if(result.HASACCT == 1){
                    jQuery('#bpm_create_account_button_area').hide();
                }
                this.bpm_show_login();
            }

        } // end if bpm_build_page function


        this.make_attachments_sortable = function(){
            jQuery('#bpm_file_sort').sortable({
                update: function(event, ui) {
                    var this_item = ui.item[0].id;
                    var idsInOrder = jQuery('#bpm_file_sort').sortable("toArray");
                    var index = jQuery.inArray(ui.item[0].id, idsInOrder);
                    var query_args = {};
                    var file_index = this_item.split('_');
                    query_args['action'] = 'update_file_order';
                    query_args['file_index'] = file_index[4];
                    query_args['position'] = index;
                    bpmcontext.bpm_get_data(query_args);

                }
            });
        }

        this.bpm_make_homepage_widget = function(content , id, title , max_height, height){

            if(! max_height){
                max_height = 'max-height:20em';
            }else{
                if(id == 'bpm_homepage_newsfeed') {
                    max_height = 'height:' + max_height;
                }else {
                    max_height = 'max-height:' + max_height;
                }
            }
            if(height) {
                max_height = 'height:'+height+';max-height:'+height+';';
            }

            if(id == 'bpm_event_calendar'){
                max_height = 'height:420px;max-height:420px;';
                content = '<div style="height:1em;">&nbsp;</div>' + content;
            }
            if(id == 'bpm_homepage_help_docs'){
                max_height = 'height:22em;max-height:22em;';
            }

            var html_line = ' <ul class="accordion" data-accordion id="'+id+'" >';
            html_line = html_line.concat('<li class="accordion-navigation bpm_ul_li">');
            var icon_line = '<div class="fi-list bpm-demo-button" style="float:right;display: inline;color:black;font-size:1.2em;margin-right:1em;" ></div>';
            var dropdown_line = '<ul id="bpm_widget_drop_'+id+'" class="f-dropdown" data-dropdown-content aria-hidden="true" tabindex="-1">';
            dropdown_line = dropdown_line.concat('<li><a data-id="'+id+'" onclick="bpmcontext.bpm_manage_widget(\''+id+'\')" >Hide Widget</a></li>');
            dropdown_line = dropdown_line.concat('</ul>');

            var search_overlay = '';

            if(id == 'bpm_homepage_search'){
                dropdown_line = '';
                icon_line = '<div class="fi-x bpm-demo-button" onclick="bpmcontext.bpm_close_search_widget()" style="float:right;display: inline;color:black;font-size:1.2em;margin-right:1em;" ></div>';
            }
            if(id == 'bpm_homepage_help_docs'){
                //if((bpm_settings['ISBPMADMIN'] && !bpmcontext.bpm_show_tutorial(Number(bpm_settings['TEMPLATELIBID']) + 10000)) || (bpm_settings['ISBPMADMIN'] && bpm_settings['help_doc_content'].length == 0 )){
                if(bpm_settings['ISBPMADMIN']){
                    dropdown_line = '';
                icon_line = '<div class="fi-clipboard-pencil bpm-demo-button" onclick="bpmcontext.bpm_edit_help_doc_widget()" style="float:right;display: inline;color:black;font-size:1.2em;margin-right:1em;" ></div>';
                }else {
                    dropdown_line = '';
                    icon_line = '<div class="fi-x bpm-demo-button" onclick="bpmcontext.bpm_close_help_doc_widget()" style="float:right;display: inline;color:black;font-size:1.2em;margin-right:1em;" ></div>';
                }
            }
            if(id == 'bpm_all_links_acc'){
                dropdown_line = '';
                icon_line = '<div class="fi-x bpm-demo-button" onclick="bpmcontext.bpm_close_links_widget()" style="float:right;display: inline;color:black;font-size:1.2em;margin-right:1em;" ></div>';
            }



            html_line = html_line.concat('<a data-dropdown="bpm_widget_drop_'+id+'"  id="'+id+'_header" class="bpm_nodecoration" style="cursor:default;"><span id="'+id+'_header_title">'+title+'</span>'+icon_line+'</a>'+dropdown_line);

            if(id == 'bpm_homepage_search') html_line = html_line.concat(bpmcontext.bpm_search_bar());

            if(id == 'bpm_homepage_newsfeed' || id == 'bpm_homepage_search') {
                html_line = html_line.concat('<div style="overflow-y:auto;overflow-x:hidden;'+max_height+';">');
            }else{
                html_line = html_line.concat('<div style="overflow-y:scroll;overflow-x:hidden;'+max_height+';">');
            }
            html_line = html_line.concat(content);
            html_line = html_line.concat('<br><br></div>');
            html_line = html_line.concat('</li>');
            html_line = html_line.concat('</ul>');

            return html_line;
        } //end of bpm_make_homepage_widget

        this.bpm_set_url_links = function(){

            jQuery.each(bpm_settings['hide_for_is_shared_ext'],function(index, value) {
                jQuery(value).hide();
            })

            jQuery('.bpm-debounce-button').click(jQuery.debounce(1000, function(e) {

                if(jQuery(this).attr('disabled')) return;

                var this_id = jQuery(this).prop('id');

                switch(this_id){
                    case 'bpm_save_workspace':
                        jQuery(this).css('background-color','gray').attr('disabled', 'disabled');
                        bpmcontext.bpm_save_workspace();
                        break;
                    case 'bpm_create_user_button':
                        jQuery(this).css('background-color','gray').attr('disabled', 'disabled');
                        if(bpm_settings['adding_user'] == 1) return;
                        bpm_settings['adding_user'] = 1;
                        bpmcontext.bpm_create_user(2);
                    break;
                }

            }));

            jQuery( ".side-nav-item" ).click(function() {
                jQuery(this).parent().siblings().removeClass('active');
                jQuery(this).parent().addClass('active');
            });

            jQuery( ".bpm_top_bar" ).click(function() {


                if(bpmcontext.is_read_only()) return;


                if(bpm_user_role == 'external' && bpm_settings['is_shared_ext'] == 1){
                    return;
                }

                if(bpm_page_status > 0) {

                    if (bpm_is_processing == 0) {
                        bpm_is_processing = 1;

                        var this_id = jQuery(this).prop('id').substr(12);

                        if(this_id == '999999'){
                            if (jQuery('#bpm_all_links_acc').height() < 100) {
                                if(bpm_settings['has_page_menu_on_toolbar']) jQuery('#bpm_all_links_acc').show();
                                jQuery("#bpm_section_top_bar_bpm_acc_" + this_id).show();
                                jQuery('#bpm_all_links_acc').animate({height: bpm_settings['page_menu_height'] + "px"} , 'slow');
                            }else{
                                jQuery('#bpm_all_links_acc').animate({height: "62px"} , 'slow', function(){
                                    jQuery("#bpm_section_top_bar_bpm_acc_" + this_id).hide();
                                    if(bpm_settings['has_page_menu_on_toolbar']) jQuery('#bpm_all_links_acc').hide();
                                });
                            }

                        }else {
                            var open_status = jQuery("#bpm_section_top_bar_bpm_acc_" + this_id).css('display');
                            if (open_status == 'none') {
                                jQuery("#bpm_section_top_bar_bpm_acc_" + this_id).show();
                                if (jQuery(this).hasClass('bpm_text_section')) {
                                }
                            } else {
                                jQuery("#bpm_section_top_bar_bpm_acc_" + this_id).hide();
                            }
                        }
                        setTimeout(function () {
                            bpm_is_processing = 0;
                        }, 500);
                    }
                }
            });

            jQuery( ".url_links" ).click(function() {

                jQuery('*').qtip('hide');

                if(bpm_settings['ws_changes_pending']==1){
                    //get validation to close without saving
                    jQuery('#bpm_ws_cancel_alert_0').show();
                    return;
                }

                if(bpm_is_loading==0) {
                    bpm_is_loading = 1;

                    jQuery('#bpm_left_widget_window').foundation('reveal', 'close');
                    var this_address = jQuery(this).prop('href').split("?");

                    if(jQuery(this).hasClass('bpm_context_change')){
                        bpm_settings['SEARCHRESULT'] = null;
                        bpm_settings['SEARCHTERM'] = null;
                        bpm_reload_type = 3;
                        bpm_close_help_widget();
                    }

                    bpmcontext.bpm_refresh_page_loading();

                    bpm_start = Date.now();

                    jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', this_address[1], function (result) {
                        bpm_settings['bpm_login_status'] = Number(result.LOGGEDIN);
                        jQuery('#bpm_content_area').html(bpm_template);
                        jQuery('#bpm_page_loading_alert').hide();
                        bpmcontext.bpm_build_page(result);
                    });
                }
                 return false;
            });
        }//end of bpm_set_url_links

        this.bpm_show_new_account = function(){
            jQuery('#bpm_new_account_image').html('<img src="' + bpm_params.html_dir + 'banner-772x250.jpg">');
            jQuery('#bpm_new_acct_password_html').html('<input id="bpm_password_field" class="bpm_new_account_field" type="password" />');
            jQuery('#bpm_new_account').foundation('reveal', 'open');


            jQuery('#bpm_create_account_process_button').on('click', Foundation.utils.debounce(function(e){
                // Handle Click
                if(!bpm_settings['new_acct_processing']) {
                    bpm_settings['new_acct_processing'] = 1;
                    jQuery('#bpm_new_account_content_exit').hide();
                    jQuery('#bpm_create_account_process_button').attr('disabled', 'disabled');
                    bpmcontext.bpm_create_account_process();
                }
            }, 1000, true));

        }//end of bpm_show_new_account

        this.bpm_open_side_modal = function(menu_id){
            this.bpm_open_modal({id:menu_id});
        }//end of bpm_open_side_modal

        this.bpm_create_recent_dropdown = function(items, menu_id, no_reload ) {

            var add_class = false;
            var links = '<ul class="dropdown">';
            var link_count = 0;

            jQuery.each(items,function(index, value) {
                link_count++;
                if(link_count > 10){
                    links = links.concat('<li class="bpm_ul_li"><a class="bpm_nodecoration" onclick="bpmcontext.bpm_open_side_modal(\''+menu_id+'\');">' + bpm_trans_array['bpm_lng_more'] + '...</a></li>');
                    return false;
                }
                add_class = true;
                links = links.concat('<li class="bpm_ul_li"><a class="url_links bpm_nodecoration" href="?domain=' + bpm_current_domain + '&action=bpmcontext&pageid=' + value['page_id'] + '">' + value['page_title'] + '</a></li>');
            });

            links = links.concat('</li>');

            if(add_class){
                jQuery('#'+menu_id).parent().html(jQuery('#'+menu_id));
                if(!jQuery('#'+menu_id).parent().hasClass('has-dropdown')) jQuery('#'+menu_id).parent().addClass('has-dropdown');
                jQuery('#'+menu_id).after(links);
            }else{
                jQuery('#'+menu_id).parent().html(jQuery('#'+menu_id));
                jQuery('#'+menu_id).parent().removeClass('has-dropdown');
            }

            if( ! no_reload) {
                this.bpm_set_url_links();
                jQuery(document).foundation('topbar', 'reflow');
            }

        }//end of bpm_create_recent_dropdown

        this.bpm_create_notifications_dropdown = function(notifications){

            var add_class = false;
            var child_ul = '<ul class="dropdown" id="bpm_notification_list">';
            var drafts = '';
            var template_array = [];
            var template_list = [];

            if(notifications.wfdocs) {
                if(notifications.wfdocs.length){
                    add_class = true;
                    jQuery.each(notifications.wfdocs,function(index, value) {
                        if(value['wfm_status'] == 0){
                            //add to drafts
                            drafts = drafts.concat('<li class="bpm_ul_li"><a class="url_links bpm_nodecoration" href="?domain=' + bpm_current_domain + '&action=bpmcontext&pageid='+value['page_id']+'">'+value['page_title']+'</a></li>');
                        }else{
                            if(template_array[value['template_name']]){
                                template_array[value['template_name']] = template_array[value['template_name']].concat('<li class="bpm_ul_li"><a class="url_links bpm_nodecoration" href="?domain=' + bpm_current_domain + '&action=bpmcontext&pageid='+value['page_id']+'">'+value['page_title']+'</a></li>');
                            }else{
                                template_list.push(value['template_name']);
                                template_array[value['template_name']] = '<li class="bpm_ul_li"><a class="url_links bpm_nodecoration" href="?domain=' + bpm_current_domain + '&action=bpmcontext&pageid='+value['page_id']+'">'+value['page_title']+'</a></li>';
                            }
                        }
                    });
                }
            }

            if(drafts){
                child_ul = child_ul.concat('<li class="has-dropdown bpm_ul_li" ><a class="bpm_nodecoration">'+bpm_trans_array['bpm_lng_drafts']+'</a>');
                child_ul = child_ul.concat('<ul class="dropdown">'+drafts+'</ul>');
                child_ul = child_ul.concat('</li>');
            }

            if(template_list){
                jQuery.each(template_list,function(index, value) {
                    child_ul = child_ul.concat('<li class="has-dropdown bpm_ul_li" ><a class="bpm_nodecoration">'+value+'</a>');
                    child_ul = child_ul.concat('<ul class="dropdown">'+template_array[value]+'</ul>');
                    child_ul = child_ul.concat('</li>');
                });
            }

            child_ul = child_ul.concat('</ul>');

            if(add_class){

                if(!jQuery('#left_notifications').parent().hasClass('has-dropdown')) jQuery('#left_notifications').parent().addClass('has-dropdown');
                jQuery('#left_notifications').after('');
                jQuery('#left_notifications').after(child_ul);
            }else{
                //remove class from left_notifications_parent
                jQuery('#left_notifications').parent().removeClass('has-dropdown');
                jQuery('#left_notifications').after('');
            }
        }//end if bpm_create_notifications_dropdown

        this.bpm_validateEmail = function(mail)
        {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
            {
                return (true)
            }
            return (false)
        }// end of bpm_validateEmail

        this.is_read_only = function(){

            if( ! bpm_settings['edit_rights']) return false;

            if(bpm_settings['edit_rights'] == 2) {
                jQuery('.fi-pencil').hide();
                return true;
            }

            return false;

        }

        this.bpm_create_account_process = function(screen_name , email , name){
            //create account...on success, show homepage
            //validate form fields

                jQuery('#bpm_new_account_content_exit').hide();
                jQuery('#bpm_create_account_process_button').attr('disabled', 'disabled');
                jQuery('#bpm_admin_new_create_account').attr('disabled', 'disabled');

                jQuery('#bpm_new_acct_setup_alert').hide();

                var bpm_email;
                var bpm_company;
                var bpm_password;

                if(email){
                    bpm_email = email;
                }else{
                    bpm_email = jQuery('#bpm_new_account_email').val();
                    bpm_company = jQuery('#bpm_new_account_company_name').val();
                    bpm_password = jQuery('#bpm_password_field').val();
                }

                var bpm_name;
                if(name){
                    bpm_name = name;
                }else{
                    bpm_name = jQuery('#bpm_new_account_real_name').val();
                }

                if (!bpm_name) bpm_name = 'Admin Name';
                if (!bpm_company) bpm_company = 'Company Name';

                jQuery('#bpm_new_account_email').css("border", "0px solid black");
                jQuery('#bpm_password_field').css("border", "0px solid black");

                jQuery('#bpm_new_acct_error_alert').hide();

                var error_status = 0;
                if (!bpmcontext.bpm_test_field_for_blank(bpm_email) || !bpmcontext.bpm_validateEmail(bpm_email)) {
                    jQuery('#bpm_new_account_email').css("border", "1px solid red");
                    error_status = 1;
                }
                if (!bpmcontext.bpm_test_field_for_blank(bpm_password) && screen_name != 'main_admin') {
                    jQuery('#bpm_password_field').css("border", "1px solid red");
                    error_status = 1;
                }

                if(bpm_company == bpm_name){
                    jQuery('#bpm_new_acct_error_alert').show();
                    error_status = 1;
                }

                if (error_status) {
                    jQuery('#bpm_new_account_content_exit').show();
                    jQuery('#bpm_create_account_process_button').removeAttr('disabled');
                    jQuery('#bpm_admin_new_create_account').removeAttr('disabled');
                    bpm_settings['new_acct_processing'] = 0;
                    return;
                }

                //all good - create the account
                jQuery('#bpm_page_loading_new_acct_button').hide();
                jQuery('#bpm_page_loading_new_acct_alert').show();
                jQuery('#bpm_progress_image').show();


                var main_url = '';
                var loc = 2;
                if (bpm_params.login_url) {
                    main_url = bpm_params.login_url;
                    loc = 1;
                } else {
                    var this_url = window.location.href.split('?');
                    main_url = this_url[0];
                }

                var site_token = 'f990d185-e7bf-11e4-b43f-878390a1d9ca0';
                if(bpm_params.site_token) site_token = bpm_params.site_token;

                var dev_code = '';

                if(bpm_params.dev_code) dev_code = '&dev_code='+bpm_params.dev_code;

                var query_string = 'action=create_account&BPM_Email=' + bpm_email + '&BPM_Password=' + bpm_password + '&BPM_CompanyName=' + bpm_company + '&BPM_FirstName=' + bpm_name + '&token='+site_token+'&url=' + main_url + '&loc=' + loc + dev_code;

                jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/' + bpm_settings['bpm_api'] + '/bpmcontext_wordpress.php?callback=?', query_string, function (result) {

                    bpm_settings['bpm_login_status'] = Number(result.LOGGEDIN);

                    if (bpm_settings['bpm_login_status'] == 1) {
                        //no errors

                        jQuery('#bpm_new_account').foundation('reveal', 'close');
                        if (screen_name == 'admin') {
                            //change html to go to intranet page
                            //location.reload();
                            window.location.assign(bpm_params.login_url);
                        }
                        if(screen_name == 'main_admin'){
                            var data = {
                                'action': 'bpm_set_bpm_has_account'
                            };

                            jQuery.post(ajaxurl, data, function (result) {
                               location.reload(true);
                            });
                        }else{
                            location.reload();
                        }
                    } else {
                        //some error occurred
                        jQuery('#bpm_create_account_process_button').removeAttr('disabled');
                        jQuery('#bpm_admin_new_create_account').removeAttr('disabled');
                        bpm_settings['new_acct_processing'] = 0;

                        if (screen_name == 'admin') {

                           jQuery('#bpm_page_loading_new_acct_button').show();
                            var error_message = '';
                            if (result.MESSAGE) {
                                error_message = result.MESSAGE;
                                error_message = error_message.replace(/ /g, '_');
                            }
                            if (bpm_trans_array['bpm_lng_' + error_message]) {
                                jQuery('#bpm_new_acct_setup_alert').show().text(bpm_trans_array['bpm_lng_' + error_message]);
                            } else {
                                jQuery('#bpm_new_acct_setup_alert').show().text(result.MESSAGE);
                            }
                            jQuery('#bpm_page_loading_new_acct_alert').hide();
                            jQuery('#bpm_progress_image').hide();
                        }
                        if(screen_name == 'main_admin'){
                            jQuery('#bpm_page_loading_new_acct_button').show();
                            jQuery('#bpm_page_loading_new_acct_alert').hide();
                            jQuery('#bpm_progress_image').hide();
                            jQuery('#bpm_error_email').text(email);
                            jQuery('#bpm_create_account_error_message').show();
                        } else {
                            jQuery('#bpm_page_loading_new_acct_button').show();
                            var error_message = '';
                            if (result.MESSAGE) {
                                error_message = result.MESSAGE;
                                error_message = error_message.replace(/ /g, '_');
                            }
                            if (bpm_trans_array['bpm_lng_' + error_message]) {
                                jQuery('#bpm_new_acct_setup_alert').show().text(bpm_trans_array['bpm_lng_' + error_message]);
                            } else {
                                jQuery('#bpm_new_acct_setup_alert').show().text(result.MESSAGE);
                            }
                            jQuery('#bpm_page_loading_new_acct_alert').hide();
                            jQuery('#bpm_progress_image').hide();
                        }
                    }
                });
        }//end of bpm_create_account_process

        this.executeFunctionByName = function(functionName, context , arguments ) {

            var args = [];
            if (arguments) {
                //args = [].slice.call(arguments).splice(2);
                args.push(arguments);
            }

            var namespaces = functionName.split(".");
            var func = namespaces.pop();
            for (var i = 0; i < namespaces.length; i++) {
                context = context[namespaces[i]];
            }

            if(typeof context[func] === 'function') {
                return context[func].apply(context, args);
            }else{
                return '';
            }

        };


        this.bpm_test_field_for_blank = function(field_info){

            var field_status = false;

            if (/\S/.test(field_info)) {
                // string is not empty and not just whitespace
                field_status = true;
            }

            return field_status;
        }//end of bpm_test_field_for_blank


        this.bpm_refresh_page_loading = function (){

            if (bpm_reload_type == 1) {
                jQuery('#bpm_main_publishing_alert').show();
            } else if (bpm_reload_type == 2) {
                jQuery('#bpm_main_routing_alert').show();
            } else if (bpm_reload_type == 3) {
                jQuery('#bpm_context_loading_alert').show();
            } else if (bpm_reload_type == 4) {
                jQuery('#bpm_context_deleting_alert').show();
            } else {
                jQuery('#bpm_main_loading_alert').show();
            }
            bpm_reload_type = 0;

        }//end of bpm_refresh_page_loading

        this.bpm_update_dashboard = function (dashboard){

            if( ! dashboard) {
                var bpm_pmt_string = '&get_pmt=0';

                if ( ! bpm_payment) bpm_pmt_string = '&get_pmt=1';
                jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/' + bpm_settings['bpm_api'] + '/bpmcontext_wordpress.php?callback=?', bpm_get_string + '&action=dashboard' + bpm_pmt_string, function (dashboard) {
                    bpmcontext.bpm_update_dashboard(dashboard);

                });
                return
            }

                if (dashboard.LOGGEDIN == 0) return;

                if(dashboard.PAYMENT) bpm_payment = dashboard.PAYMENT;

                if(dashboard.ISCUST) {
                    jQuery('#bpm_acct_manager_payment_item').show();
                }else{
                    jQuery('#bpm_acct_manager_payment_item').hide();
                }

                if(dashboard.LOGINURL && bpm_user_role == 'admin'){

                    if(dashboard.LOGINURL != bpm_params.login_url) {
                        jQuery('#left_acctmgr').text(' '+bpm_trans_array['bpm_lng_account_manager'] + ' (1)');
                        jQuery('#bpm_context_update_login_url_alert').show();
                        bpm_settings['invalid_url'] = 1;
                        bpm_settings['current_login_url'] = dashboard.LOGINURL;
                        bpm_settings['site_login_url'] = bpm_params.login_url;
                    }else{
                        jQuery('#left_acctmgr').text(' '+bpm_trans_array['bpm_lng_account_manager']);
                        jQuery('#bpm_context_update_login_url_alert').hide();
                        bpm_settings['invalid_url'] = 0;
                    }
                }

                if(dashboard.ACCTMGR){
                    bpm_settings['BILLINGADDRESS'] = dashboard.BILLINGADDRESS;
                    bpm_settings['acctmgr'] = dashboard.ACCTMGR;

                    bpm_create_products();
                    var show_statment = false;
                    jQuery.each(bpm_settings['acctmgr'], function (index, value) {
                        if( value['is_wf_sub'] == 1) bpm_settings['WF_PRODUCT_ID'] = value['product_id'];
                        if(value['is_installed']){
                            show_statment = true;
                        }
                    });
                    if(show_statment){
                        bpm_settings['show_statement'] = 1;
                    }else{
                        bpm_settings['show_statement'] = 0;
                    }
                }

                jQuery('#bpm_acct_manager_invoices_item').hide();

                if(dashboard.INVOICES) {
                    bpm_settings['invoices'] = dashboard.INVOICES;
                    if(bpm_settings['invoices'].length > 0) jQuery('#bpm_acct_manager_invoices_item').show();
                }

                bpm_current_domain = dashboard.CURRENTCONTEXT;
                bpm_dashboard[0] = dashboard.BOOKMARKS;
                bpm_dashboard[1] = dashboard.MYHISTORY;
                bpm_dashboard[2] = dashboard.RECENT;
                bpm_dashboard[3] = dashboard.SUBSCRIBED;
                bpm_dashboard[4] = dashboard.DISCUSSIONS;
                bpm_dashboard[5] = dashboard.DIRECTORY;
                bpm_dashboard[12] = dashboard.NOTIFICATIONS;

                var talat_messages = 0;
                var total_messages = 0;
                if(bpm_dashboard[12]) {
                    if (bpm_dashboard[12].ESCALATE) {
                        jQuery.each(bpm_dashboard[12].ESCALATE,function(index, value) {
                            total_messages = total_messages + value.length;
                        });
                    }
                    if(bpm_dashboard[12].wfdocs) {
                        total_messages = total_messages + Number(bpm_dashboard[12].wfdocs.length);
                    }
                    if(bpm_dashboard[12].WORKFLOW_MESSAGES) talat_messages = bpm_dashboard[12].WORKFLOW_MESSAGES.length;

                    jQuery('#left_talat_messages').show();
                }


                jQuery('#bpm_notification_count').html(bpmcontext.bpm_create_notification_bubble('bpm_has_notifications', 'bpm_notification_badge', total_messages));
                jQuery('#bpm_talat_messages_count').html(bpmcontext.bpm_create_notification_bubble('bpm_has_talat', 'bpm_talat_badge', talat_messages));

                if(talat_messages) {
                    jQuery('#left_talat_messages').show();
                }else{
                    jQuery('#left_talat_messages').hide();
                }

                jQuery('#bpm_subscription_count').html(bpmcontext.bpm_create_notification_bubble('bpm_has_subscriptions', 'bpm_subscription_badge', bpm_dashboard[3].length));

                var sub_count = 0;
                if(bpm_dashboard[3]) sub_count = bpm_dashboard[3].length;

                if(total_messages || sub_count || talat_messages){
                    total_messages = total_messages + sub_count + talat_messages;
                    jQuery('#bpm_notification_badge').text(total_messages);
                    jQuery('#bpm_has_notifications').show();
                }else{
                    jQuery('#bpm_notification_badge').text('');
                    jQuery('#bpm_has_notifications').hide();
                }


                if(!dashboard.HASQD){
                    jQuery('#left_quick_docs_item').hide();
                }

                if(dashboard.WS_INFO){
                    bpm_settings['WS_INFO'] = dashboard.WS_INFO;
                }


                bpmcontext.bpm_create_notifications_dropdown(bpm_dashboard[12]);
                bpmcontext.bpm_create_recent_dropdown(bpm_dashboard[2], 'left_recent' , true);
                bpmcontext.bpm_create_recent_dropdown(bpm_dashboard[0], 'left_bookmarks' , true);
                bpmcontext.bpm_create_recent_dropdown(bpm_dashboard[1], 'left_history' , true);
                bpmcontext.bpm_create_recent_dropdown(bpm_dashboard[3], 'left_subscriptions' ,true);

        }//end of bpm_update_dashboard

        this.bpm_update_history_button = function(){
            jQuery.each(bpm_text_history,function(index, value) {
                if(value){
                    if(bpm_text_history[index].length > 1) {
                        jQuery('#bpm_history_button_' + index).show();
                    }else{
                        jQuery('#bpm_history_button_'+index).hide();
                    }
                }else{
                    jQuery('#bpm_history_button_'+index).hide();
                }
            });
            jQuery.each(bpm_text_promote,function(index, value) {

                if(value > 0 && bpm_page_status > 0 && bpm_user_role != 'external'){
                    jQuery('#bpm_promote_button_' + index).show();
                }else{
                    jQuery('#bpm_promote_button_'+index).hide();
                }
            });
        }//end of bpm_update_history_button

        this.bpm_save_password = function(is_admin){

            jQuery('#bpm_password_error').hide();

            var password = jQuery('#bpm_password_field').val();
            var password_conf = jQuery('#bpm_confirm_password_field').val();

            if(password != password_conf){
                //error - passwords do not match
                jQuery('#bpm_password_error').text('Passwords do not match').show();
                return;
            }

            if(password.length > 0) {
                var query_string = '&action=reset_password&password=' + password;

                jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + query_string, function (result) {
                    jQuery('#bpm_reset_password_window').foundation('reveal', 'close');

                    if(is_admin){   //show new account informaiton
                        location.reload();
                        //jQuery('.bpm_admin_header_education_row_action').hide();
                        //jQuery('.bpm_welcome_content').show();
                        //jQuery('#bpm_admin_submit_go_dashboard_div').show();
                    }else {

                        if (bpm_settings['RUN_TUT_AFTER_RESET_PWD'] > 0) {
                            bpm_settings['tutorial_mode'] = 1;
                            bpmcontext.bpm_set_tutorial_actions();
                            bpmcontext.bpm_run_main_tutorial(bpm_settings['RUN_TUT_AFTER_RESET_PWD']);
                            bpm_settings['RUN_TUT_AFTER_RESET_PWD'] = 0;
                        }
                    }

                });
            }else{
                jQuery('#bpm_password_error').text('Please enter a password').show();
            }
        }//end of bpm_save_password

        this.bpm_reshow_login = function(){

            jQuery('#bpm_error_message_5').hide();
            jQuery('#bpm_reset_password_4').hide();
            jQuery('#bpm_header_main_4').show();
            jQuery('#bpm_lost_password_button_4_row').show();
            jQuery('#bpm_error_message_6').hide();
        }//end of bpm_reshow_login

        this.bpm_showGetPassword = function(){

            jQuery('#bpm_reset_password_4').show();
            jQuery('#bpm_header_main_4').hide();
        }//end of bpm_showGetPassword

        this.bpm_admin_reload = function(){
            var data = {
                'action': 'bpm_set_bpm_has_account'
            };

            jQuery.post(bpm_params.ajaxurl, data, function (result) {
                location.reload(true);
            });

        }

        this.bpm_submitLogIn = function(is_admin) {

        //    jQuery('#bpm_lost_password_message').show();
            jQuery('#bpm_error_message_4').hide();
            jQuery('#bpm_error_message_5').hide();

            var name = jQuery('#bpm_email_3').val();
            var pass = jQuery('#bpm_password1_4').val();
            var security = "private";

            jQuery("#bpm_password1_4").css("border","0px solid black");
            jQuery("#bpm_email_3").css("border","0px solid black");

            if (name == ''){
                jQuery("#bpm_email_3").css("border","1px solid red");
                return;
            }

            if (pass == ''){
                jQuery("#bpm_password1_4").css("border","1px solid red");
                return;
            }

            jQuery.getJSON('https://'+bpm_settings['bpm_server']+'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', 'act=login&BPM_Email='+name+'&BPM_Password='+pass+'&security='+security, function(result){
                bpm_settings['bpm_login_status'] = Number(result.LOGGEDIN);
                jQuery('#bpm_page_loading_alert').hide();


                if(bpm_settings['bpm_login_status']==1) {

                    if(is_admin){
//                         bpm_current_domain = result.CURRENTCONTEXT;
//                         if(!bpm_get_string) bpm_get_string = '&domain='+bpm_current_domain;

                         bpmcontext.bpm_admin_reload();
                    }else {
                        jQuery('#bpm_page_area').show();
                        bpmcontext.bpm_build_page(result);
                    }
                }else {
                    bpmcontext.bpm_validate_login(result.login , is_admin);
                }
            });
        }//end iof bpm_submitLogIn;

        this.bpm_validate_login = function(code , is_admin) {

            if (code == '3' || code == '2' || code == '0') {
                if(is_admin) {
                    bpmcontext.bpm_admin_reload();
                }else {
                    location.reload();
                }
            }else if (code == '999'){
                //bad password
                jQuery("#bpm_password1_4").css("border","1px solid red");
                bpmcontext.bpm_showError(bpm_trans_array['bpm_lng_wrong_password'], 1);
            }else if( code == '500'){
                //bad email
                jQuery("#bpm_email_4").css("border","1px solid red");
                bpmcontext.bpm_showError(bpm_trans_array['bpm_lng_wrong_email'],1);
            }else{
                //account disabled
                bpmcontext.bpm_showError(bpm_trans_array['bpm_lng_account_disabled'],1);
            }
        }///end of bpm_validate_login

        this.bpm_showError = function(message, screenid){

            if(screenid==1) {
                jQuery('#bpm_error_message_4').text(message).show();
            }
            return false;
        }//end of bpm_showError

        this.bpm_logout_bpmcontext = function(is_admin){

            var this_url = window.location.href.split('?');
            var query_string = 'logout=1&url=' + this_url[0];

            jQuery.getJSON('https://'+bpm_settings['bpm_server']+'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', query_string, function(result){

                bpm_settings['bpm_login_status'] = Number(result.login);

                if(is_admin){
                    bpmcontext.bpm_admin_reload();
                }else {

                    var url_string = window.location.href.split('?')[1];
                    var name = '';

                    if (url_string) {

                        var url_parts = url_string.split('&');

                        jQuery.each(url_parts, function (index, value) {
                            var url_var = value.split('=');
                            var this_value = url_var[1];
                            var keep_val = true;

                            switch (url_var[0]) {
                                case 'domain':
                                    keep_val = false;
                                    break;
                                case 'pageid':
                                    keep_val = false;
                                    break;
                                case 'action':
                                    keep_val = false;
                                    break;
                                case 'newacct':
                                    keep_val = false;
                            }
                            if (keep_val) name = name.concat(url_var[0] + '=' + this_value + '&');
                        });
                    }

                    if (name.slice(-1) == '&') name = name.slice(0, -1);

                    var state = {name: name, page: 'BPMContext_Page'};

                    window.history.pushState(state, "BPMContext", '?' + name);
                    if (result.HASACCT == 1) {
                        jQuery('#bpm_create_account_button_area').hide();
                    }
                    bpmcontext.bpm_show_login();
                }
            });
        }//end of bpm_logout_bpmcontext

        this.bpm_set_email = function(){

            if(!bpm_settings['process_password']) {
                bpm_settings['process_password'] = 1;
                if (jQuery('#bpm_email_forgot_4').val() != "") bpmcontext.bpm_password_change(jQuery('#bpm_email_forgot_4').val());
            }
        }//end of bpm_set_email

        this.bpm_password_change = function(str){

                 jQuery('#bpm_error_message_6').hide();
                jQuery('#bpm_error_message_5').hide();
                jQuery('#bpm_lost_password_button_4_row').hide();

                jQuery.getJSON('https://'+bpm_settings['bpm_server']+'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', 'action=get_password&email='+str +'&login_url='+bpm_params.login_url, function(result){

                    bpm_settings['process_password'] = 0;

                    if(result.email_result == '1'){
                        jQuery('#bpm_error_message_6').show();
                    }

                    if(result.email_error){
                        jQuery('#bpm_error_message_5').show();
                        jQuery('#bpm_lost_password_button_4_row').show();
                    }
                });
         }//end of bpm_password_change

        this.bpm_create_discussion = function(this_id, this_content){

            var discussion_object = jQuery('#bpm_discussion_section').html();
            var discussion_list = '';
            var discText = '';
            var disc_date;
            discussion_object = discussion_object.replace(/DISCINDEX/g,this_id);

            //create discussion divs
            if(this_content.length == 0 && bpm_page_status == 0) {
                    this_content = bpmcontext.bpm_text_placeholder(2);
            }else{
                this_content = bpmcontext.bpm_get_discussion_list(this_content, this_id);
            }

            discussion_object = discussion_object.replace('DISCDATA',this_content);

            if(bpm_user_role == 'external' && bpm_settings['is_shared_ext'] == 1){
                if(!bpm_settings['hide_for_is_shared_ext']) bpm_settings['hide_for_is_shared_ext'] = [];
                bpm_settings['hide_for_is_shared_ext'].push('#bpm_section_top_bar_bpm_acc_disc_'+this_id);;
            }

            return discussion_object;

        }///end of bpm_create_discussion

        this.bpm_create_home_page_items = function (result){

            var html_line = '';
            var side = 'odd';

//            html_line = html_line.concat('<div id="bpm_homepage_placeholder"></div>');

            if(!result.HOMEPAGEITEMS){
                if(bpm_dashboard[2]) {
        //            html_line = html_line.concat(bpm_make_left_report(bpm_dashboard[2], 'recent',true));
                    bpm_settings['load_recent_to_homepage'] = 0;
                }else{
                    bpm_settings['load_recent_to_homepage'] = 1;
                }

                return html_line;
            }

            html_line = html_line.concat('<div id="bpm_homepage_items_placeholder">');

//            var top_item = '<div id="bpm_homepage_item_top"></div>';

            bpm_settings['homepage_item_count'] = 0;

            jQuery.each(result.HOMEPAGEITEMS,function(index, value) {

                if(value) {

                    bpm_settings['homepage_item_count']++;

                    if(index == 0) html_line = html_line.concat('<div id="bpm_promoted_item_top">')
                    html_line = html_line.concat('<div id="bpm_promoted_item_'+value['page_id'] + '">')
                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-large-11 bpm-small-11 bpm-columns text-left bpm-home-page-headline">' + decodeURIComponent(value['headline']) + '</div>');
                    html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
                    html_line = html_line.concat('</div>');

                    html_line = html_line.concat('<div class="bpm-row" style="margin-bottom:.75em">');
                    var page_title = '<a href="?action=bpmcontext&pageid='+value['page_id']+'&domain='+bpm_current_domain+'" class="url_links bpm_links">'+value['page_title']+'</a>';
                    var posted_by = bpm_trans_array['bpm_lng_cap_by'] + ' <a href="?action=bpmcontext&pageid='+value['uad_user_page_id']+'&domain='+bpm_current_domain+'" class="url_links bpm_links">'+value['real_name']+'</a>';
                    var when = bpmcontext.bpm_get_date_display(value['ps_change_date']);
                    if(when) {
                        if (when.length < 8) when = when.concat(' ' + bpm_trans_array['bpm_lng_ago']);
                    }else{
                        when = '';
                    }
                    html_line = html_line.concat('<div class="bpm-large-8 bpm-small-8 bpm-columns text-left bpm-home-page-name bpm_text_medium">'+posted_by +' '+ bpm_trans_array['bpm_lng_in'] +' '+ page_title + '</div>');
                    html_line = html_line.concat('<div class="bpm-large-3 bpm-small-3 bpm-columns text-right"><span class="bpm_hp_time_line">'+when+'</span></div>');
                    html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
                    html_line = html_line.concat('</div>');

                    var this_image = value['image'];
                    if(value['local_file']) this_image = bpm_params.images_dir + value['local_file'];

                    if(side=='odd') {

                        html_line = html_line.concat('<div class="bpm-row">');
                        if (value['image']) {
                            html_line = html_line.concat('<div class="bpm-large-3 bpm-small-3 bpm-columns text-left"><img src="' + this_image + '"/></div>');
                            html_line = html_line.concat('<div class="bpm-large-8 bpm-small-8 bpm-columns text-left">' + decodeURIComponent(value['home_page_teaser']) + '</div>');
                            html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
                        } else {
                            html_line = html_line.concat('<div class="bpm-large-11 bpm-small-11 bpm-columns text-left">' + decodeURIComponent(value['home_page_teaser']) + '</div>');
                            html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
                        }
                        html_line = html_line.concat('</div>');

                        side = 'even';
                    }else{
                        html_line = html_line.concat('<div class="bpm-row" >');
                        if (value['image']) {
                            html_line = html_line.concat('<div class="bpm-large-8 bpm-small-8 bpm-columns text-left">' + decodeURIComponent(value['home_page_teaser']) + '</div>');
                            html_line = html_line.concat('<div class="bpm-large-3 bpm-small-3 bpm-columns text-left"><img src="' + this_image + '"/></div>');
                            html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
                        } else {
                            html_line = html_line.concat('<div class="bpm-large-11 bpm-small-11 bpm-columns text-left">' + decodeURIComponent(value['home_page_teaser']) + '</div>');
                            html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
                        }
                        html_line = html_line.concat('</div>');

                        side = 'odd';
                    }



                    var page_subscribed = '';
                    var sub_count = 0;
                    var disc_count = 0;
                    var file_count = 0;
                    var file_text = bpm_trans_array['bpm_lng_attachments'];
                    var sub_text = bpm_trans_array['bpm_lng_subscribers'];
                    var disc_text = bpm_trans_array['bpm_lng_discussions'];
                    if(value['disccount']){
                        disc_count = value['disccount'];
                        if(disc_count==1) disc_text = bpm_trans_array['bpm_lng_discussion'];
                    }

                    disc_text = '<span id="bpm_hp_disc_count_'+value['page_id']+'" class="bpm_tut_nav_sub_text">' + disc_count + ' ' + disc_text + '</span>';

                    if(value['subcount']){
                        sub_count = value['subcount'];
                        if(sub_count==1) sub_text = bpm_trans_array['bpm_lng_subscriber'];
                    }
                    sub_text = '<span id="bpm_hp_subscribed_count_'+value['page_id']+'" class="bpm_tut_nav_sub_text">' + sub_count + ' ' + sub_text + '</span>';

                    if(value['sub_index']) {
                        page_subscribed = '<a class="bpm_links bpm_tut_nav_sub_text" onClick="bpmcontext.bpm_subscribe_or_unsubscribe_page(' + value['page_id'] + ', 0)"><span id="bpm_hp_subscribed_'+value['page_id']+'" class="fa fa-heart bpm_tut_nav_sub_text" ></span>&nbsp;'+ sub_text + '</a>';
                    }else{
                        page_subscribed = '<a class="bpm_links bpm_tut_nav_sub_text"  onClick="bpmcontext.bpm_subscribe_or_unsubscribe_page(' + value['page_id'] + ', 1)"><span id="bpm_hp_subscribed_'+value['page_id']+'" class="fa fa-heart-o bpm_tut_nav_sub_text" ></span>&nbsp;'+ sub_text + '</a>';
                    }

                    var dismiss_link = '<a class="bpm_links bpm_nodecoration bpm_tut_nav_sub_text" onClick="bpmcontext.bpm_promoted_dismiss(' + value['page_id'] + ', 1)"><span class="fa fa-remove bpm_tut_nav_sub_text"></span>&nbsp;Dismiss</a>';;

                    if(value['files']){
                        file_count = value['files'];
                        if(file_count==1) file_text = bpm_trans_array['bpm_lng_attachment'];
                    }
                    file_text = '<span id="bpm_hp_file_count_'+value['page_id']+'" class="bpm_tut_nav_sub_text">' + file_count + ' ' + file_text + '</span>';

                    html_line = html_line.concat('<div class="bpm-row" style="margin-top:.5em;">');
                    html_line = html_line.concat('<div class="bpm-large-3 bpm-small-3 bpm-columns text-left">' + page_subscribed + '</div>');
                    html_line = html_line.concat('<div class="bpm-large-3 bpm-small-3 bpm-columns text-left fi-comment  bpm_tut_nav_sub_text">&nbsp;'+disc_text+ '</div>');
                    html_line = html_line.concat('<div class="bpm-large-3 bpm-small-3 bpm-columns text-left"><span class="fa fa-paperclip bpm_tut_nav_sub_text"></span>&nbsp;'+file_text+'</div>');
                    html_line = html_line.concat('<div class="bpm-large-2 bpm-small-2 bpm-columns text-right">' + dismiss_link + ' </div>');
                    html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
                    html_line = html_line.concat('</div>');

                    html_line = html_line.concat('<hr class="bpm_hr_gray"><br>');
                    html_line = html_line.concat('</div>');
                    if(index == 0) html_line = html_line.concat('</div>');
                }
            });

            html_line = html_line.concat('</div>');

            return html_line;
        }//end of bpm_create_home_page_items

        this.bpm_promoted_dismiss = function(this_page_id){

            var querystring = 'pageid='+this_page_id+'&domain=' + bpm_current_domain + '&action=dismiss_promoted';

            jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function (result) {
                jQuery('#bpm_promoted_item_' + this_page_id).hide();

                bpm_settings['homepage_item_count']--;

                if(bpm_settings['homepage_item_count'] < 1) {
                    jQuery('#bpm_homepage_newsfeed').remove();
                    jQuery('#bpm_widget_area').masonry({
                              // options
                              itemSelector: '.grid-item',
                              columnWidth: '.grid-sizer',
                              gutter: '.gutter-sizer',
                              percentPosition: true });
                }
            });
        }//end of bpm_promoted_dismiss

        this.bpm_promote_to_home_page_action = function(){

            //send details to the server
            var selected_object = bpm_settings['promote_hompage_id'];
            var post_text = encodeURIComponent(tinymce.activeEditor.getContent());
            var this_header = encodeURIComponent(jQuery('#bpm_home_page_headline').val());

            if(bpm_is_loading==1) return;
            bpm_is_loading = 1;

            var local_file_name = '';
            if(bpm_settings['selected_promote_image']) local_file_name = bpm_settings['selected_promote_image'];

            var post_chunk = [];
            if(post_text.length > 0) {
                if (post_text.length > 2000) {
                    //split into an array of strings
                    post_chunk = bpmcontext.bpm_splitString(post_text, 2000);
                } else {
                    post_chunk[0] = post_text;
                }
            }else{
                post_chunk[0] = ' ';
            }

            //post message
            var querystring = 'total=' + post_chunk.length + '&domain=' + bpm_current_domain + "&action=update_hp_text&pageid=" + bpm_pageid + "&sectionid=" + selected_object + "&reset=1";
            jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function (result) {
                if (result) {
                    jQuery.each(post_chunk, function (index, value) {
                        var item_id = index + 1;
                        querystring = 'this_item=' + item_id + '&total=' + post_chunk.length + '&header='+ this_header + '&domain=' + bpm_current_domain + "&action=update_hp_text&pageid=" + bpm_pageid + "&sectionid=" + selected_object + "&pageinfo=" + value +'&local_file=' + local_file_name;

                        jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function (result) {

                            if (result.SENDNEXT) {
                                bpm_is_loading = 0;
                                bpmcontext.bpm_refresh_page_loading();
                                bpmcontext.bpm_hp_cancel_promote();
                                bpmcontext.bpm_load_page(bpm_settings['bpm_home_page']);
                            }
                        });
                    });
                }else{
                    //error
                    //jQuery('#bpm_saving_text_alert').hide();
                }
            });
        }//end of bpm_promote_to_home_page_action

        this.bpm_change_hp_image = function(action_code){

            switch(action_code) {
                case 1:
                    //hide dropzone
                    jQuery('#bpm_hp_promote_dropzone').hide();
                    //show image
                    jQuery('#bpm_hp_promote_image').show();
                    break;
                case 2:
                    //hide dropzone
                    jQuery('#bpm_hp_promote_dropzone').show();
                    //show image
                    jQuery('#bpm_hp_promote_image').hide();
                    break;
                case 3:
                    //hide text area
                    jQuery('#bpm_hp_promote_image_library').show();
                    //show image library
                    jQuery('#bpm_hp_promote_text_zone').hide();
                    jQuery('#bpm_promote_page_content_footer').hide();


                    jQuery("select").imagepicker({
                        selected: function(option){
                            bpm_settings['selected_promote_image'] = this.val();

                        }
                    });
                    break;
                case 4:
                    //show text area
                    jQuery('#bpm_hp_promote_image_library').hide();
                    jQuery('#bpm_promote_page_content_footer').show();
                    //hide image library
                    jQuery('#bpm_hp_promote_text_zone').show();
                    jQuery("select").data('picker').destroy();
                    bpm_settings['selected_promote_image'] = '';
                    break;
                case 5:
                    //save image selection
                    //show text area

                    jQuery('#bpm_hp_promote_image_src').html('<img src="'+bpm_params.images_dir + bpm_settings['selected_promote_image']+'">');
                    jQuery("select").data('picker').destroy();

                    jQuery('#bpm_hp_promote_image_library').hide();
                    jQuery('#bpm_promote_page_content_footer').show();
                    //hide image library
                    jQuery('#bpm_hp_promote_text_zone').show();
                    jQuery('#bpm_hp_promote_dropzone').hide();
                    jQuery('#bpm-change-image-text').show();

                    break;

            }
        }//end of bpm_change_hp_image

        this.bpm_hp_cancel_promote = function() {

            tinymce.remove();
            bpm_is_loading = 0;
            jQuery('#bpm_promote_page').foundation('reveal', 'close');

        }//end of bpm_hp_cancel_promote

        this.bpm_hp_promote = function(section_id, auto_promote){

            var html_line = '';
            var file_list = [];
            var this_folder = 0;
            var this_guid = bpmcontext.bpm_guid();

            if(auto_promote){
                jQuery('#bpm_hp_cancel_promote').text('Skip');
            }else{
                jQuery('#bpm_hp_cancel_promote').text('Cancel');
            }

            bpm_settings['promote_hompage_id'] = section_id;

            jQuery('#bpm_promote_page').foundation('reveal', 'open');

            var querystring = 'domain=' + bpm_current_domain + "&action=get_file_auth_hp&pageid=" + bpm_pageid + '&sectionid='+section_id;
            jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function (result) {
                if (result) {

                    var this_text = '';
                    if(result.PROMOTEDETAILS['teaser']) {
                        this_text = result.PROMOTEDETAILS['teaser'];
                    }else{
                        if(jQuery('#bpm_text_'+section_id).length) this_text = jQuery('#bpm_text_'+section_id).html();
                    }
                    var this_image = '';
                    var hide_form = '';
                    var hide_image = '';
                    var headline = '';
                    if(result.PROMOTEDETAILS['header']) {
                        headline = result.PROMOTEDETAILS['header'];
                    }

                    if(!headline && bpm_settings['promote_page_headline']) headline = bpm_settings['promote_page_headline'];

                    if(result.PROMOTEDETAILS['image']){
                        this_image = '<img src="'+result.PROMOTEDETAILS['image']+'">';
                        if(result.PROMOTEDETAILS['local_file']) this_image = '<img src="'+bpm_params.images_dir+result.PROMOTEDETAILS['local_file']+'">';
                         hide_form = 'bpm-hide';
                    }else{
                        hide_image = 'bpm-hide';
                    }

                    html_line = html_line.concat('<div class="bpm-hide" id="bpm_hp_promote_image_library" >');

                    html_line = html_line.concat('<div class="bpm-row " style="height:20em;overflow-y: scroll;overflow-x:hidden;margin-bottom: 1em;">');
                    html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-left" >');
                    html_line = html_line.concat(jQuery('#bpm_image_library').html());
                    html_line = html_line.concat('</div>')
                    html_line = html_line.concat('</div>')

                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-center">');

                    var save = '<a onclick="bpmcontext.bpm_change_hp_image(5);" class="button bpm-small-button bpm_lng_save bpm_ws_save_button" style="text-decoration: none;">Save</a>';
                    var cancel = '<a onclick="bpmcontext.bpm_change_hp_image(4);" class="button bpm-small-button bpm_lng_cancel " style="text-decoration: none;">Cancel</a>';

                    html_line = html_line.concat(save + '&nbsp;'+cancel+'&nbsp;');
                    html_line = html_line.concat('</div>')
                    html_line = html_line.concat('</div>')

                    html_line = html_line.concat('</div>'); //end of image library

                    html_line = html_line.concat('<div id="bpm_hp_promote_text_zone" >');

                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-large-3 bpm-small-3 bpm-columns">');

                    html_line = html_line.concat('<div class="bpm-row" style="margin-bottom:1.5em">');
                    html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-center" style="font-size:1em; ">'+bpm_trans_array['bpm_lng_add_image']+' </div>');
                    html_line = html_line.concat('</div>');

                    html_line = html_line.concat('<div id="bpm_hp_promote_image">');

                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-center" id="bpm_hp_promote_image_src">' + this_image + '</div>');
                    html_line = html_line.concat('</div>');

        //            html_line = html_line.concat('<div class="bpm-row">');
        //            html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-center " id="  "><a onClick="bpmcontext.bpm_change_hp_image(1)">'+bpm_trans_array['bpm_lng_view_image']+'</a></div>');
        //            html_line = html_line.concat('</div>');

                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-center '+hide_image+'" id="bpm-change-image-text"><a onclick="bpmcontext.bpm_change_hp_image(2)">'+bpm_trans_array['bpm_lng_change_image']+'</a></div>');
                    html_line = html_line.concat('</div>');

                    html_line = html_line.concat('</div>');

                    html_line = html_line.concat('<div class="'+hide_form+'" id="bpm_hp_promote_dropzone">');

                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-center">');
                    html_line = html_line.concat('<form action="https://s3.amazonaws.com/bpm-inbound/" method="POST" enctype="multipart/form-data" class="dropzone bpm_dropzone" id="bpm_dropzone" style="max-height:200px;overflow: auto;">');
                    html_line = html_line.concat('<input type="hidden" name="key" value="${filename}-' + this_guid + '">');
                    jQuery.each(result.FILEAUTH['inputs'], function (index, value) {
                        html_line = html_line.concat('<input type="hidden" name="' + index + '" value="' + value + '">');
                    });
                    html_line = html_line.concat('</form>');
                    html_line = html_line.concat('</div>');

        //            html_line = html_line.concat('<div class="bpm-row">');
        //            html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-center " ><br><a onclick="bpm_change_hp_image(3)">'+bpm_trans_array['bpm_lng_view_image_lib']+'</a></div>');
        //            html_line = html_line.concat('</div>');

                    html_line = html_line.concat('</div>');

                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-center '+hide_image +'" id="bpm_can_view_image_hp"><a onClick="bpmcontext.bpm_change_hp_image(1)">'+bpm_trans_array['bpm_lng_view_image']+'</a></div>');
                    html_line = html_line.concat('</div>');

                    html_line = html_line.concat('</div>');
                    html_line = html_line.concat('</div>'); //emd of dropzone holder


                    html_line = html_line.concat('<div class="bpm-large-9 bpm-small-9 bpm-columns text-left">');

                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-large-2 bpm-small-2 bpm-columns text-left">'+bpm_trans_array['bpm_lng_headline']+':&nbsp;</div>');
                    html_line = html_line.concat('<div class="bpm-large-10 bpm-small-10 bpm-columns text-left"><input id="bpm_home_page_headline" style="font-size:1.5em" type="text" value="'+headline+'" placeholder="'+bpm_trans_array['bpm_lng_enter_headline']+'"></div>');
                    html_line = html_line.concat('</div>');

                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-left"><textarea id="bpm_promote_hp_preview" rows="10">'+this_text+'</textarea></div>');
                    html_line = html_line.concat('</div>');
                    html_line = html_line.concat('</div>'); //end of promote text

                    html_line = html_line.concat('</div>');

                    html_line = html_line.concat('</div>')


                    jQuery('#bpm_promote_page_content').html(html_line);

                    if(result.PROMOTEDETAILS['image']){
                        jQuery('#bpm_can_view_image_hp').show();
                    }else {
                        jQuery('#bpm_can_view_image_hp').hide();
                    }



                   tinymce.init({
                        selector: "#bpm_promote_hp_preview",
                        menubar: false,
                        height: 220,
                        maxLength: 1000,
                        statusbar: false,
                        content_css : bpm_params.css_dir + "tinymce.content.css",
                        plugins: [
                            "insertdatetime media table contextmenu paste link code"
                        ],
                        imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions',
                        toolbar: "bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | styleselect | image link | removeformat | code",
                        removeformat : [
                            {selector : 'b,strong,em,i,font,u,strike', remove : 'all', split : true, expand : false, block_expand : true, deep : true},
                            {selector : 'span', attributes : ['style', 'class'], remove : 'empty', split : true, expand : false, deep : true},
                            {selector : '*', attributes : ['style', 'class'], split : false, expand : false, deep : true}
                        ]
                    });

                    var myDropzone = new Dropzone("#bpm_dropzone", {
                        autoProcessQueue: true,
                        maxFiles: 1,
                        acceptedFiles:'image/*',
                        dictDefaultMessage: '<div class="text-center" style="width:100%">'+bpm_trans_array['bpm_lng_click_files_for_hp']+'</div>'
                    });

                    myDropzone.on("complete", function (file) {
                        file_list.push(file['name']);
                        //myDropzone.removeFile(file);
                    });

                    myDropzone.on("removedfile", function (file) {
                        var index = file_list.indexOf(file['name']);
                        if (index >= 0) {
                            file_list.splice( index, 1 );
                        }
                    });

                    myDropzone.on("queuecomplete", function () {
                        this_folder = '-1';

                        var send_files = '';
                        if (file_list.length > 0) {
                            jQuery(file_list).each(function (index, value) {
                                send_files = send_files.concat('&files[]=' + encodeURIComponent(value));
                            });
                        }
                        var query_string = 'sectionid=' + section_id + '&domain=' + bpm_current_domain + "&action=uploaded_hp_image&pageid=" + bpm_pageid  + '&folder=' + this_folder + send_files + '&fileid=' + this_guid;

                        jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', query_string, function (result) {
                            if (result) {

                                if(result.FILELINK){
                                    jQuery('#bpm_hp_promote_image_src').html('<img src="'+result.FILELINK+'">');
                                }

                                myDropzone.removeAllFiles( true );

                            //hide dropzone
                                jQuery('#bpm_hp_promote_dropzone').hide();
                                jQuery('#bpm_can_view_image_hp').show();
                            //show image
                                jQuery('#bpm_hp_promote_image').show();
                            }

                        });

                    });
                }
            });
        }//end of bpm_hp_promote


        this.bpm_get_discussion_list = function(this_content, this_id){
            var discussion_list = '';
            jQuery.each(this_content,function(index, value) {
                if(value['disc_text']) {
                    discText = value['disc_text'];

                    discText = discText.replace(/^\s+|\s+$/g, '');
                    if(this_id == 'none'){
                        var date_parts = [];
                        var date_time = [];
                        date_time = value['disc_date_time'].split(' ');
                        date_parts = date_time[0].split('-');
                        disc_date = bpmcontext.bpm_get_date_display(date_parts[1]+'/'+date_parts[2]+'/'+date_parts[0]+ ' '+date_time[1]);
                    }else {
                        disc_date = bpmcontext.bpm_get_date_display(value['disc_date_time']);
                    }
                    var  page_title = '';

                    if(this_id == 'none'){
                        discussion_list = discussion_list.concat('<div class="bpm_this_disc  text-left" id="bpm_this_widget_disc_' + value['disc_index'] + '" >');
                        var bpm_link_string = '<a class="url_links bpm_links" href="?pageid=' + value['t3_page_id'] + '&domain=' + bpm_current_domain + '&action=bpmcontext"  title="' + value['page_title3'] + '">' + value['page_title3'] + '</a>';
                        discussion_list = discussion_list.concat('<div class="bpm_disc_page_title">' + bpm_link_string + '</div>');
                    }else {
                        discussion_list = discussion_list.concat('<div class="bpm_this_disc  text-left" id="bpm_this_disc_' + value['disc_index'] + '" onclick="bpmcontext.bpm_highlight_disc(' + value['disc_index'] + ', ' + this_id + ')">');
                    }
                    discussion_list = discussion_list.concat('<div class="bpm_disc_left text-left">' + value['real_name'] + '<br><span style="color:gray;font-size: 75%">' + disc_date + '</span></div>');

                    if (discText.length > 250) {
                        discussion_list = discussion_list.concat("<div id='moreText_" + value['disc_index'] + "' class='bpm_disc_right'>" + discText.substring(0, 250) + "&nbsp;<a onclick='bpmcontext.bpm_disc_show_more_less(" + value['disc_index'] + ", 2);return false;' style='text-decoration:none;color:grey;'>&nbsp;(more...)</a></div><div class='bpm_disc_right' style='display:none;' id='allText_" + value['disc_index'] + "'>" + discText + "&nbsp;<a onclick='bpmcontext.bpm_disc_show_more_less(" + value['disc_index'] + ",1);return false;' style='text-decoration:none;color:grey;'>&nbsp;(less...)</a></div></div>");
                    } else {
                        discussion_list = discussion_list.concat('<div class="bpm_disc_right text-left">' + value['disc_text'] + '</div>');
                    }
                    discussion_list = discussion_list.concat('</div>');
                }
            });

            return discussion_list;
        }//end of bpm_get_discussion_list;

        this.bpm_delete_discussion = function(selected_object){

            //hide delete, edit, expand
            jQuery('#bpm_disc_delete_button_'+selected_object).hide();
            jQuery('#bpm_disc_edit_button_'+selected_object).hide();
            jQuery('#bpm_disc_expand_button_'+selected_object).hide();
            jQuery('#bpm_disc_menu_left_side').hide();

            //show confirm or cancel
            jQuery('#bpm_disc_delete_confirm_button_'+selected_object).show();
            jQuery('#bpm_disc_delete_cancel_button_'+selected_object).show();

        }//end of bpm_delete_discussion

        this.bpm_reset_disc_toolbar = function(selected_object){

            jQuery('#bpm_disc_delete_button_'+selected_object).hide();
            jQuery('#bpm_disc_edit_button_'+selected_object).hide();
            jQuery('#bpm_disc_expand_button_'+selected_object).show();
            jQuery('#bpm_disc_delete_confirm_button_'+selected_object).hide();
            jQuery('#bpm_disc_delete_cancel_button_'+selected_object).hide();
            bpmcontext.bpm_set_disc_expand_button(selected_object);
        }//end oif bpm_reset_disc_toolbar

        this.bpm_confirm_delete_discussion = function(selected_object, choice){

            if(choice==0){
                //cancel delete
                //show delete, edit, expand
                jQuery('#bpm_disc_delete_button_'+selected_object).show();
                //jQuery('#bpm_disc_edit_button_'+selected_object).show();
                jQuery('#bpm_disc_expand_button_'+selected_object).show();

                //hide confirm or cancel
                jQuery('#bpm_disc_delete_confirm_button_'+selected_object).hide();
                jQuery('#bpm_disc_delete_cancel_button_'+selected_object).hide();
                bpmcontext.bpm_reset_disc_toolbar(selected_object);
                bpmcontext.bpm_clear_disc_highlight();

            }else{

                var querystring = 'domain=' + bpm_current_domain + "&action=update_disc&act=delete&pageid=" + bpm_pageid + "&sectionid=" + selected_object + '&disc_index=' + bpm_current_disc;

                jQuery.getJSON('https://'+bpm_settings['bpm_server']+'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function(result){

                    //add new discussion list
                    var discussion_list = bpmcontext.bpm_get_discussion_list(result.content, selected_object);

                    bpm_dashboard[4] = result.DISCUSSIONS;

                    bpm_current_disc = 0;

                    jQuery('#bpm_disc_list_' + selected_object).empty().prepend(discussion_list);

                    bpmcontext.bpm_reset_disc_toolbar(selected_object);

                });
            }
        }//end of bpm_confirm_delete_discussion

        var bpm_clear_disc_highlight = function(){
            bpm_current_disc = 0;
            jQuery('.bpm_this_disc').css('border','solid 1px transparent');
        }//end of bpm_clear_disc_highlight

        this.bpm_highlight_disc = function(selected_id, this_id){

            bpm_current_disc = selected_id;

            jQuery('.bpm_this_disc').css('border','solid 1px transparent');

            //show delete button if this user can delete
            if(this_id > 0) {
                if (bpm_user_role == 'admin') jQuery('#bpm_disc_delete_button_' + this_id).show();
                jQuery('#bpm_this_disc_' + selected_id).css('border','solid 1px green');
            }
        }//end of bpm_highlight_disc

        this.bpm_send_post = function(selected_object){

            if(!bpm_settings['is_sending_post']) {
                bpm_settings['is_sending_post'] = 1;
                var is_reveal = 0;
                var raw_message = '';

                if (selected_object < 1) {

                    is_reveal = 1;
                    raw_message = tinymce.activeEditor.getContent();
                    var post_text = encodeURIComponent(raw_message);
                    selected_object = bpm_current_section;
                } else {
                    raw_message = jQuery('#bpm_disc_post_field_' + selected_object).val();
                    var post_text = encodeURIComponent(raw_message);
                }

                if (post_text.length > 0 && bpmcontext.bpm_test_field_for_blank(raw_message)) {
                    //post message
                    jQuery('#bpm_saving_disc_alert').show();
                    var querystring = 'domain=' + bpm_current_domain + "&action=update_disc&act=save&pageid=" + bpm_pageid + "&sectionid=" + selected_object + "&pageinfo=" + post_text;

                    jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/' + bpm_settings['bpm_api'] + '/bpmcontext_wordpress.php?callback=?', querystring, function (result) {
                        //remove existing discussions

                        jQuery('#bpm_disc_list_' + selected_object).empty();

                        if (result['CHANGELOG']) {
                            bpmcontext.bpm_create_change_log(result);
                        }

                        bpm_dashboard[4] = result.DISCUSSIONS;

                        //add new discussion list
                        var discussion_list = bpmcontext.bpm_get_discussion_list(result.content, selected_object);
                        jQuery('#bpm_disc_list_' + selected_object).prepend(discussion_list);

                        //clean text field and close reveal
                        jQuery('#bpm_disc_post_field_' + selected_object).val('');

                        jQuery('#bpm_saving_disc_alert').hide();
                        jQuery('#bpm_discussion_window').foundation('reveal', 'close');

                        bpmcontext.bpm_reset_disc_toolbar(selected_object);

                        var timeoutId = setTimeout(function () {
                            if (is_reveal == 1) {
                                //tinymce.activeEditor.setContent('');
                                tinymce.remove();
                            }
                        }, 500);

                        bpm_settings['is_sending_post'] = 0;
                    });

                } else {
                    bpm_settings['is_sending_post'] = 0;
                }
            }

        }//end if bpm_send_post

        this.bpm_get_date_display = function(this_date){

            if (!this_date) return;

            try {
                var bpm_date = this_date.split(' ');
                if (!bpm_date) return;
                var bpm_cal = bpm_date[0].split('/');
                var prevTime = new Date(Date.parse(this_date));
                var thisTime = new Date();
                var diff = thisTime.getTime() - prevTime.getTime();
                var elapsed = diff / (1000 * 60);  //minutes since elapsed

                if (elapsed < 61) {
                    elapsed = Math.max(0, Math.round(elapsed));
                    elapsed = elapsed + " m";
                } else if (elapsed < 1440) {
                    elapsed = Math.round(diff / (1000 * 60 * 60));
                    elapsed = elapsed + " h";
                } else {
                    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
                        "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    elapsed = monthNames[prevTime.getMonth()] + "&nbsp;" + prevTime.getDate() + ",&nbsp;" + bpm_cal[2];

                }
                return elapsed;
            }catch(err){

            }
        }//end of bpm_get_date_display

        this.bpm_convertUTCDateToLocalDate = function(date) {
            var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

            var offset = date.getTimezoneOffset() / 60;
            var hours = date.getHours();

            newDate.setHours(hours - offset);

            return newDate;
        }//end oif bpm_convertUTCDateToLocalDate

        this.bpm_disc_show_more_less = function(this_id, more_or_less){
            if(more_or_less == 1){
                //show more text
                jQuery('#moreText_' + this_id).show();
                jQuery('#allText_' + this_id).hide();
            }else{
                jQuery('#moreText_' + this_id).hide();
                jQuery('#allText_' + this_id).show();
            }
        }//end oif bpm_disc_show_more_less

        this.bpm_cancel_post = function(){

            //tinymce.activeEditor.setContent('');
            tinymce.remove();
            jQuery('#bpm_discussion_window').foundation('reveal', 'close');

        }//end of bpm_cancel_post

        this.bpm_open_discussion = function(selected_index){

            bpm_current_section = selected_index;

            jQuery('#bpm_discussion_window').foundation('reveal', 'open');

            tinymce.init({
                selector: "#bpm_disc_reveal_text",
                menubar: false,
                height : 300,
                statusbar: false,
                content_css : bpm_params.css_dir + "tinymce.content.css",
                plugins: [
                    "insertdatetime media table contextmenu paste"
                ],
                toolbar: "bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | styleselect | removeformat ",
                removeformat : [
                    {selector : 'b,strong,em,i,font,u,strike', remove : 'all', split : true, expand : false, block_expand : true, deep : true},
                    {selector : 'span', attributes : ['style', 'class'], remove : 'empty', split : true, expand : false, deep : true},
                    {selector : '*', attributes : ['style', 'class'], split : false, expand : false, deep : true}
                ]
            });


            setTimeout(function() {
                tinymce.activeEditor.setContent('');
                tinymce.activeEditor.focus();
            },500);

        }//end oif bpm_open_discussion

        this.bpm_expand_discussion = function(selected_object, choice){

            if(choice == 1){
                //expand
                jQuery('#bpm_section_top_bar_bpm_acc_disc_'+selected_object).parent().css('height', '500px');
                jQuery('#bpm_disc_list_'+selected_object).css('max-height', '450px');
                jQuery('#bpm_disc_shrink_button_'+selected_object).show();
                jQuery('#bpm_disc_expand_button_'+selected_object).hide();
            }else{
                //shrink
                jQuery('#bpm_section_top_bar_bpm_acc_disc_'+selected_object).parent().css('height', '');
                jQuery('#bpm_disc_list_'+selected_object).css('max-height', '250px');
                jQuery('#bpm_disc_expand_button_'+selected_object).show();
                jQuery('#bpm_disc_shrink_button_'+selected_object).hide();
            }
        }//end of bpm_expand_discussion;

        this.bpm_close_disc = function(){

            //tinymce.activeEditor.setContent('');
            tinymce.remove();
            jQuery('#bpm_discussion_window').foundation('reveal', 'close');
        }//emnd bpm_close_disc

        this.bpm_create_text = function(this_id, this_content){

            var text_object = jQuery('#bpm_text_section').html();
            var show_placeholder = 0;
            text_object = text_object.replace(/TEXTINDEX/g,this_id);

            if(this_content) {
                if (this_content == ' ' && bpm_page_status == 0) {
                    show_placeholder = 1;
                }
            }else {
                if (bpm_page_status == 0) show_placeholder = 1;
            }

            if (show_placeholder == 1 && bpm_page_status == 0) {
                bpm_settings['bpm_show_placeholder'].push(this_id);
                text_object = text_object.replace(/TEXTPLACEHOLDER/g, bpmcontext.bpm_text_placeholder(1));
            }

            if(this_content) {
                text_object = text_object.replace('TEXTDATA', this_content);
            }

            return text_object;

        }//end of bpm_create_text

        this.bpm_text_placeholder = function(placeholder_id){

            var html_line = '<div>';
            var message = '';

            switch(placeholder_id){
                case 1:
                    message = bpm_trans_array['bpm_lng_text_section_placeholder'];
                    break;
                case 2:
                    message = bpm_trans_array['bpm_lng_disc_section_placeholder'];
                    break;
                case 3:
                    message = bpm_trans_array['bpm_lng_attachment_section_placeholder'];
                    break;
            }
            html_line = html_line.concat('<br><div class="bpm-row full-width">');
            html_line = html_line.concat('  <div class="bpm-small-1 bpm-large-1 bpm-columns text-left">&nbsp;</div>');
            html_line = html_line.concat('  <div class="bpm-small-10 bpm-large-10 bpm-columns text-left bpm-placeholder-text bpm-message-wrapper ">' + message + '</div>');
            html_line = html_line.concat('  <div class="bpm-small-1 bpm-large-1 bpm-columns text-left">&nbsp;</div>');
            html_line = html_line.concat('</div>')
            html_line = html_line.concat('</div><br>')

            return html_line;
        }//end of bpm_text_placeholder

        this.bpm_set_disc_expand_button = function(selected_id){

            jQuery('#bpm_disc_menu_left_side').show();

            if(jQuery('#bpm_disc_list_'+selected_id).prop("scrollHeight") > 250){
                jQuery('#bpm_disc_expand_button_'+selected_id).show();
            }else{
                jQuery('#bpm_disc_expand_button_'+selected_id).hide();
            }
        }//end of bpm_set_disc_expand_button

        this.bpm_create_readonly_text = function (this_id, this_content){

            var text_object = jQuery('#bpm_readonly_text_section').html();
            text_object = text_object.replace(/TEXTINDEX/g,this_id);

            if(this_content){
                text_object = text_object.replace('TEXTDATA',this_content);
            }

            return text_object;

        }//end of bpm_create_readonly_text

        this.bpm_edit_text = function(selected_index) {

            bpm_current_section = selected_index;

            jQuery('#bpm_edit_text_title').text(bpm_trans_array['bpm_lng_edit_text']);
            jQuery.each(bpm_settings.SECTIONINFO.sections,function(index, value){
                if(value['THISID'] == selected_index) jQuery('#bpm_edit_text_title').text(bpm_trans_array['bpm_lng_edit'] + ' ' + value['title']);
            });

            jQuery('#bpm_edit_text_reveal_text').val(jQuery('#bpm_text_' + selected_index).html());
            jQuery('#bpm_edit_text_window').foundation('reveal', 'open');

            tinymce.init({
                selector: "#bpm_edit_text_reveal_text",
                menubar: false,
                height : 300,
                statusbar: false,
                content_css : bpm_params.css_dir + "tinymce.content.css",
                plugins: [
                    "insertdatetime media table contextmenu paste link image imagetools code"
                ],
                imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions',
                toolbar: "bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | styleselect | image link | removeformat | code",
                removeformat : [
                    {selector : 'b,strong,em,i,font,u,strike', remove : 'all', split : true, expand : false, block_expand : true, deep : true},
                    {selector : 'span', attributes : ['style', 'class'], remove : 'empty', split : true, expand : false, deep : true},
                    {selector : '*', attributes : ['style', 'class'], split : false, expand : false, deep : true}
                ]
            });

            setTimeout(function() {
                if(tinymce) {
                    tinymce.activeEditor.focus();
                    tinyMCE.activeEditor.selection.select(tinyMCE.activeEditor.getBody(), true);
                    tinyMCE.activeEditor.selection.collapse(false);
                }
            },500);

        }//end of bpm_edit_text


        this.bpm_view_text_history = function(selected_index) {

            bpm_current_section = selected_index;

            //jQuery('#bpm_history_button_' + selected_index).show();

            var tab_data = '<ul class="tabs" data-tab>';
            var i = 0;
            var  tab_content = '<div class="tabs-content">';
            var status = 'active';

            jQuery.each(bpm_text_history[selected_index],function(index, value){
                if(i>0){
                    status = '';
                }

                if(value['changedate']=='Current'){
                    tab_data = tab_data.concat('<li class="tab-title ' + status + '" ><a style="text-decoration:none;" href="#panel' + i + '">' + value['changedate'] + '</a></li>');
                }else {
                    tab_data = tab_data.concat('<li class="tab-title ' + status + '" ><a style="text-decoration:none;" href="#panel' + i + '">' + value['changedate'] + '</a></li>');
                }
                tab_content = tab_content.concat('<div class="content ' + status + '" id="panel' + i + '" style="height:400px;">');
                tab_content = tab_content.concat('<div style="height:280px;overflow:auto;margin-bottom:.5em">' + value['pageinfo'] + '</div>');
                tab_content = tab_content.concat('<div style="height:30px;">Edited by:&nbsp;' + value['username'] + '</div>');
                tab_content = tab_content.concat('</div>');
                i++;
                if(i==4) return false;;
            });

            tab_data = tab_data.concat('</ul>');
            tab_content = tab_content.concat('</div>')
            tab_data = tab_data.concat(tab_content);

            jQuery('#bpm_text_history_content').empty().prepend(tab_data);
            jQuery(document).foundation('tab', 'reflow');
            jQuery('#bpm_text_history_window').foundation('reveal', 'open');

        }//end of bpm_view_text_history

        this.bpm_close_text = function(){

            //tinymce.activeEditor.setContent('');
            tinymce.remove();
            jQuery('#bpm_edit_text_window').foundation('reveal', 'close');
        }//end bpm_close_text

        this.bpm_splitString = function(string, size) {
            var re = new RegExp('.{1,' + size + '}', 'g');
            return string.match(re);
        }//end of bpm_splitString;

        this.bpm_save_text = function(selected_object){

            var is_reveal = 0;
            if(bpm_is_loading==1) return;
            bpm_is_loading = 1;
            var post_text = '';

            if(selected_object<1){
                is_reveal = 1;
                post_text = encodeURIComponent(tinymce.activeEditor.getContent());
                selected_object = bpm_current_section;
            }

            var post_chunk = [];
             if(post_text.length > 0) {
                 if (post_text.length > 2000) {
                     //split into an array of strings
                     post_chunk = bpmcontext.bpm_splitString(post_text, 2000);
                 } else {
                     post_chunk[0] = post_text;
                 }
             }else{
                 post_chunk[0] = ' ';
             }

            jQuery('#bpm_saving_text_alert').show();

                //post message
                 var querystring = 'total=' + post_chunk.length + '&domain=' + bpm_current_domain + "&action=update_text&is_autosave=0&act=save&pageid=" + bpm_pageid + "&sectionid=" + selected_object + "&reset=1";

                 jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function (result) {
                     if (result) {
                         jQuery.each(post_chunk, function (index, value) {
                             var item_id = index + 1;
                             querystring = 'this_item=' + item_id + '&total=' + post_chunk.length + '&domain=' + bpm_current_domain + "&action=update_text&is_autosave=0&act=save&pageid=" + bpm_pageid + "&sectionid=" + selected_object + "&pageinfo=" + value;

                             jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function (result) {

                                 if (result.SENDNEXT) {

                                     bpm_is_loading = 0;
                                     //update existing text view
                                     if (result['content']) {
                                         jQuery('#bpm_text_' + selected_object).html(result['content']);
                                         jQuery('#bpm_file_placeholder_' + selected_object).hide();
                                     }

                                     if (result['CHANGELOG']) {
                                         bpm_create_change_log(result);
                                     }
                                     //update history array
                                     bpm_text_history[selected_object] = result['history'];
                                     jQuery('#bpm_history_button_' + selected_object).show();

                                     //clean text field and close reveal
                                     jQuery('#bpm_edit_text_reveal_text').val('')

                                     jQuery('#bpm_saving_text_alert').hide();
                                     jQuery('#bpm_edit_text_window').foundation('reveal', 'close');
                                     bpmcontext.bpm_update_history_button();

                                     var timeoutId = setTimeout(function () {
                                         if (is_reveal == 1) {
                                             //tinymce.activeEditor.setContent('');
                                             tinymce.remove();
                                         }
                                     }, 500);
                                 }
                             });
                         });
                     }else{
                         //error
                         //jQuery('#bpm_saving_text_alert').hide();
                     }
                 });

        }///end of bpm_save_text

        this.bpm_check_plugin_hook = function(hook_to_check, stop_on_first_find){

            var bpm_check_plugin = '';
            jQuery.each(bpm_plugin_hook, function (index, value) {
                if(value['type'] == hook_to_check){
                    bpm_check_plugin = window[value['function']]();
                    if(stop_on_first_find) return false;
                }
            });

            return bpm_check_plugin;
        }//end of bpm_check_plugin_hook

        this.bpm_create_attachment = function(this_id, this_content, folder_list){

            var hook_to_check = 'bpm_attachment_section';
            bpm_settings['bpm_current_section'] = this_id;
            bpm_settings['bpm_current_section_content_'+this_id] = [];
            bpm_settings['bpm_current_section_content_'+this_id]['root'] = [];
            bpm_settings['bpm_current_section_content_'+this_id]['root'] = this_content;

            var bpm_check_plugin = bpmcontext.bpm_check_plugin_hook(hook_to_check, true);

            if(bpm_check_plugin){
                return bpm_check_plugin;
            }

            var file_list = '';
            var has_files = 'style="display:none;"';
            var folders = '<ul class="dropdown" id="bpm_folder_list_dd_' + this_id + '"><li><label>Move to Folder</label></li>';

            folders = folders.concat('<li><a style="text-decoration: none;" onClick="bpmcontext.bpm_file_button(' + this_id + ', 13, 0)" class="bpm_action" id="bpm_file_move_to_' + this_id + '_0">' + bpm_trans_array['bpm_lng_main'] + '</a></li>');

            var upload_folders = '<option value="0">' + bpm_trans_array['bpm_lng_main'] + '</option>';

            var attachment_object = jQuery('#bpm_attachment_section').html();
            attachment_object = attachment_object.replace(/FILEINDEX/g,this_id);

            if(this_content) {

                jQuery.each(folder_list, function (index, value) {
                    folders = folders.concat('<li><a style="text-decoration: none;" onClick="bpmcontext.bpm_file_button(' + this_id + ', 13, ' + value['id'] + ')" class="bpm_action" id="bpm_file_move_to_' + this_id + '_' + value['id'] + '">' + value['name'] + '</a></li>');
                    upload_folders = upload_folders.concat('<option value="' + value['id'] + '">' + value['name'] + '</option>');
                });

                bpm_folder_list[this_id] = upload_folders;

                if (folder_list) {
                    folders = folders.concat('</ul>');
                    jQuery('#bpm_file_move_' + this_id).show();
                } else {
                    folders = '';
                    jQuery('#bpm_file_move_' + this_id).hide();
                }

                attachment_object = attachment_object.replace(/FILEFOLDERS/g, folders);

                file_list = bpmcontext.bpm_create_file_list(this_content, this_id);

                if (!file_list && bpm_page_status == 0 && !upload_folders) {
                    bpm_settings['bpm_show_placeholder'].push(this_id);
                    attachment_object = attachment_object.replace(/FILEPLACEHOLDER/g, bpmcontext.bpm_text_placeholder(3));
                }
            }


            attachment_object = attachment_object.replace(/FILEDATA/g, file_list);
            attachment_object = attachment_object.replace(/FILESEARCH/g, has_files);

            return attachment_object;

        }//end of bpm_create_attachment

        this.bpm_create_file_list = function(this_content, this_id){
            bpm_version_files = [];
            var file_list = '';
            var file_count = 0;

            if(this_content.length > 0){
                file_list = file_list.concat('<div class="bpm-row" id="bpm_file_header_'+ this_id+'">');
                file_list = file_list.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-left"><input type="checkbox" name="bpm_files" onclick="bpmcontext.bpm_file_button('+this_id+', 12)" id="bpm_check_all_'+this_id+'"></div>');

                file_list = file_list.concat('</div>');
            }

            file_list = file_list.concat('<div id="bpm_file_sort">');

            jQuery.each(this_content,function(index, value) {

                if (value) {
                    if (value['file_name']) {

                        file_count++;
                        if (value['folder_id'] != '0') {
                            file_list = file_list.concat('<div id="bpm_folder_sort_' + this_id +'_'+value['file_index']+'" class="bpm-row bpm_editable bpm_folder text-left bpm_folder_' + this_id + '_' + value['folder_id'] + ' bpm_file_' + this_id + '" style="display:none;">');
                        } else {
                            file_list = file_list.concat('<div id="bpm_folder_sort_' + this_id +'_'+value['file_index']+'" class="bpm-row bpm_editable bpm_folder text-left  bpm_folder_' + this_id + '_0' + ' bpm_file_' + this_id + '">');
                        }
                        file_list = file_list.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns">');
                        var file_class = 'fa fa-save';

                        if (value['file_icon']) {
                            file_class = bpmcontext.bpm_get_file_icon(value['file_icon']);
                        }
                        //file name row
                        var this_checkbox = '<input onClick="bpmcontext.bpm_file_button(' + this_id + ', 11)" type="checkbox" name="bpm_file_select_' + this_id + '" value="bpm_file_' + value['file_index'] + '">';
                        file_list = file_list.concat('<div class="bpm-row">');
                        file_list = file_list.concat('<div class="bpm-small-9 bpm-large-9 bpm-columns bpm_grid_section_links bpm_file_text text-left">' + this_checkbox + '&nbsp;&nbsp;<span class="' + file_class + ' bpm_file_icon bpm_file_text_header">&nbsp;&nbsp;</span><a href="' + value['file_href'] + '" target="_blank" class="bpm_links bpm_file_list_link">' + value['file_name'] + '</a></div>');
                        if (value['children']) {
                            bpm_version_files[value['file_index']] = value;
                            file_list = file_list.concat('<div class="bpm-small-3 bpm-columns bpm_grid_section_links text-right"><a onclick="bpmcontext.bpm_file_show_versions(' + value['file_index'] + ',' + this_id + ');" class="bpm_versions_button bpm_nodecoration">' + bpm_trans_array['bpm_lng_versions'] + '</a></div>');
                        } else {
                            file_list = file_list.concat('<div class="bpm-small-3 bpm-columns bpm_file_text">&nbsp;</div>');
                        }
                        file_list = file_list.concat('</div>');
                        //file attributes row
                        var file_date = '';
                        if(value['file_date'].length) file_date = value['file_date'].substring(0, 6) + value['file_date'].substring(8);
                        file_list = file_list.concat('<div class="bpm-row">');
                        file_list = file_list.concat('<div class="bpm-small-1 bpm-columns bpm_file_text">&nbsp;</div>');
                        file_list = file_list.concat('<div class="bpm-small-8 bpm-columns bpm_file_text bpm_grid_section_links bpm_sub_line">' + bpm_trans_array['bpm_lng_cap_by'] + ' ' + value['real_name'] + ' ' + bpm_trans_array['bpm_lng_on'] + ' ' + file_date + '</div>');
                        file_list = file_list.concat('<div class="bpm-small-3 bpm-columns bpm_file_text bpm_grid_section_links text-right bpm_sub_line">' + value['file_size'] + '</div>');

                        file_list = file_list.concat('</div>');

                        file_list = file_list.concat('</div>');
                        file_list = file_list.concat('<hr class="bpm_hr_gray">');
                        file_list = file_list.concat('</div>');

                    }
                }
            });

            file_list = file_list.concat('</div>');

            if(!file_count) file_list = '';

            return file_list;
        }//end of bpm_create_file_list

        this.bpm_file_show_versions = function(file_id, this_id){

            var html_line = '';
            var child_count = 0;
            var value = bpm_version_files[file_id];
            var file_class = bpmcontext.bpm_get_file_icon(value['file_icon']);

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns">'+bpm_trans_array['bpm_lng_current_version']+'</div>');

            html_line = html_line.concat('<div class="bpm-small-10 bpm-large-10 bpm-columns">');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left"><input onClick="bpmcontext.bpm_file_button('+this_id+', 15)" type="checkbox" name="bpm_file_version_select" value="bpm_file_'+value['file_index']+'"></div>');
            html_line = html_line.concat('<div class="bpm-small-11 bpm-large-11 bpm-columns bpm_file_text"><span class="'+file_class+' bpm_file_icon bpm_file_text_header">&nbsp;&nbsp;</span><a href="' + value['file_href'] + '" target="_blank" class="bpm_links">' + value['file_name'] + '</a></div>');
            html_line = html_line.concat('</div>');
            //file attributes row
            var file_date = value['file_date'].substring(0,6) + value['file_date'].substring(8);
            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-columns bpm_file_text">&nbsp;</div>');
            html_line = html_line.concat('<div class="bpm-small-8 bpm-columns bpm_file_text bpm_grid_section_links bpm_sub_line">' + bpm_trans_array['bpm_lng_cap_by'] + ' ' + value['real_name'] + ' ' + bpm_trans_array['bpm_lng_on'] + ' ' + file_date + '</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-columns bpm_file_text bpm_grid_section_links text-right bpm_sub_line">' + value['file_size'] + '</div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat('</div>');

            html_line = html_line.concat('</div><br>');

            jQuery.each(bpm_version_files[file_id]['children'],function(index, value) {
                var header_display = '&nbsp;';
                if(index == 0){
                    header_display = bpm_trans_array['bpm_lng_previous_versions'];
                    child_count++;
                }

                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns">'+header_display+'</div>');
                html_line = html_line.concat('<div class="bpm-small-10 bpm-large-10 bpm-columns">');

                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left"><input onClick="bpmcontext.bpm_file_button('+this_id+', 15)" type="checkbox" name="bpm_file_version_select" value="bpm_file_'+value['file_index']+'"></div>');
                html_line = html_line.concat('<div class="bpm-small-11 bpm-large-11 bpm-columns bpm_file_text"><span class="'+file_class+' bpm_file_icon bpm_file_text_header">&nbsp;&nbsp;</span><a href="' + value['file_href'] + '" target="_blank" class="bpm_links">' + value['file_name'] + '</a></div>');
                html_line = html_line.concat('</div>');
                //file attributes row
                var file_date = value['file_date'].substring(0,6) + value['file_date'].substring(8);
                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-small-1 bpm-columns bpm_file_text">&nbsp;</div>');
                html_line = html_line.concat('<div class="bpm-small-8 bpm-columns bpm_file_text bpm_grid_section_links bpm_sub_line">' + bpm_trans_array['bpm_lng_cap_by'] + ' ' + value['real_name'] + ' ' + bpm_trans_array['bpm_lng_on'] + ' ' + file_date + '</div>');
                html_line = html_line.concat('<div class="bpm-small-3 bpm-columns bpm_file_text bpm_grid_section_links text-right bpm_sub_line">' + value['file_size'] + '</div>');
                html_line = html_line.concat('</div>');

                html_line = html_line.concat('</div>');

                html_line = html_line.concat('</div>');
            });

            html_line = html_line.concat('<br><br>');

            jQuery('#bpm_attachments_versions_content').html(html_line);
            jQuery('#bpm_attachments_view_versions').foundation('reveal', 'open');
        }//end of bpm_file_show_versions

        this.bpm_confirm_version_delete = function(file_id){

            bpm_delete_from_source = 'versions';
            jQuery('#bpm_confirm_admin_file_delete').foundation('reveal', 'open');

        }//end of bpm_confirm_version_delete

        this.bpm_get_file_icon = function(file_icon){

            var file_class = 'fa fa-save';

            switch(file_icon){
                case 'save':
                    file_class = 'fa fa-save';
                    break;
                case 'doc_icon':
                case 'docx_icon':
                    file_class = 'fa fa-file-word-o';
                    break;
                case 'xls_icon':
                case 'xlsx_icon':
                    file_class = 'fa fa-file-excel-o';
                    break;
                case 'ppt_icon':
                case 'pptx_icon':
                    file_class = 'fa fa-file-powerpoint-o';
                    break;
                case 'pdf_icon':
                    file_class = 'fa fa-file-pdf-o';
                    break;
                case 'png_icon':
                    file_class = 'fa fa-file-image-o';
                    break;
                case 'zip_icon':
                    file_class = 'fa fa-file-zip-o';
                    break;
                case 'email_address':
                    file_class = 'fa fa-envelope-o​';
                    break;
                case 'txt_icon':
                    file_class = 'fa fa-file-text-o​';
                    break;
                case 'htm_icon':
                    file_class = 'fa fa-html5';
                    break;
                case 'exe_icon':
                    file_class = 'fa fa-download';
                    break;
                case 'wmv_icon':
                    file_class = 'fa fa-file-movie-o​';
                    break;
                case 'mov_icon':
                    file_class = 'fa fa-file-movie-o​';
                    break;
                case 'pps_icon':
                    file_class = 'fa fa-file-powerpoint-o​';
                    break;
                case 'rm_icon':
                    file_class = 'fa fa-file-movie-o​';
                    break;
                case 'rtf_icon':
                    file_class = 'fa fa-file-word-o​';
                    break;
            }

            return file_class;
        }//end of bpm_get_file_icon

        this.bpm_clear_search_grid = function(this_id){

            jQuery('#bpm_child_links_search_target').hide();
            jQuery('#bpm_links_search_clear_' + this_id).hide();
            jQuery('#bpm_links_search_button_' + this_id).show();
            jQuery('#bpm_text_' + this_id).show();
            jQuery('#bpm_tagged_search_results_'+this_id).html('').hide();
            jQuery('#bpm_links_search_count_' + this_id).text('').hide();
            jQuery('#bpm_links_search_field_'+this_id).val('');

            if(this_id=='999999'){
                jQuery('#bpm_tagged_links_999999').show();
                jQuery('#bpm_child_links_target').show();
            }

        }//end of bpm_clear_search_grid

        this.bpm_search_grid = function(this_id){

            var search_string = jQuery('#bpm_links_search_field_'+this_id).val();

            var sectionid = this_id;

            if(this_id == '999999'){
                sectionid = bpm_child_link_create_id;
            }

            var query_string = 'sectionid=' + sectionid + '&domain=' + bpm_current_domain + "&action=search_pages&pageid=" + bpm_pageid + '&search=' + search_string;
            jQuery.getJSON('https://'+bpm_settings['bpm_server']+'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', query_string, function(result) {
                jQuery('#bpm_links_search_clear_' + this_id).show();
                jQuery('#bpm_links_search_button_' + this_id).hide();
                jQuery('#bpm_links_search_count_' + this_id).text(bpm_trans_array['bpm_lng_pages_found'] + ': '+ result.SEARCH.length).show();

                if(result.SEARCH.length > 0) {
                    jQuery('#bpm_text_' + this_id).hide();
                    var links_list = '';
                    var links_object = jQuery('#bpm_tagged_page_section').html();
                    var links_array = [];
                    var bpm_link_string = '';
                    var bpm_wfm_status = '';

                    jQuery.each(result.SEARCH,function(index, value) {
                        display = 1;
                        if (value['page_id']) {
                            switch (value['wfm_status']) {
                                case '0':
                                    bpm_wfm_status = 'Draft';
                                    if(value['wfm_current_id'] != bpm_settings['userid']) display = 0;
                                    break;
                                case '1':
                                    bpm_wfm_status = 'Open - ' + value['real_name'];
                                    break;
                                case '2':
                                    bpm_wfm_status = 'Closed';
                                    break;
                            }
                            if(display==1) {
                                bpm_link_string = '<a class="url_links bpm_links" href="?pageid=' + value['page_id'] + '&domain=' + bpm_current_domain + '&action=bpmcontext" title="' + value['page_title'] + '">' + value['page_title'] + '</a>';
                                links_array.push({
                                    col_1: bpm_link_string,
                                    col_2: value['page_touched'].substr(0, 10),
                                    col_3: bpm_wfm_status
                                });
                            }
                        }

                    });

                    links_list = bpmcontext.bpm_make_section_links_grid(links_array);

                    if(this_id=='999999') {
                        jQuery('#bpm_child_links_target').hide();
                        jQuery('#bpm_child_links_search_target').html(links_list).show();
                    }else{
                        jQuery('#bpm_tagged_search_results_'+this_id).html(links_list).show();
                    }

                   bpmcontext.bpm_set_url_links();
                }else{
                    //no results found
                    if(this_id=='999999'){
                        jQuery('#bpm_child_links_target').hide();
                        jQuery('#bpm_child_links_search_target').html(bpm_trans_array['bpm_lng_no_results']).show();
                    }else{
                        jQuery('#bpm_text_' + this_id).hide();
                        jQuery('#bpm_tagged_search_results_'+this_id).html(bpm_trans_array['bpm_lng_no_results']).show();
                    }

                }
            });
        }//end of bpm_search_grid

        this.bpm_file_load_files = function(selected_object, folder_id){

            jQuery('.bpm_file_'+selected_object).hide();
            bpm_selected_folder = folder_id;
            jQuery('.bpm_folder_'+selected_object+'_'+folder_id).show();
            jQuery('.bpm_file_tree_label').css('border-bottom', '');
            jQuery('#bpm_file_tree_'+folder_id).css('border-bottom', 'solid 1px black');
            if(folder_id>0) {
                jQuery('#bpm_file_folder_option_' + selected_object).show();
            }else{
                jQuery('#bpm_file_folder_option_' + selected_object).hide();
            }
        }//end of bpm_file_load_files

        this.bpm_make_folder_tree = function(selected_object, folder_list){

            var folder_tree = '<ul class="tree"><li><a style="text-decoration: none;border-bottom:solid 1px black;" class="bpm_file_tree_label" id="bpm_file_tree_0" onclick="bpmcontext.bpm_file_load_files('+selected_object+', 0)">' + bpm_trans_array['bpm_lng_main'] + '</a>' + '<ul>';
            var dd_folders = '<li><label>'+bpm_trans_array['bpm_lng_move_to_folder']+'</label></li>';
            var upload_folders = '<option value="0">' + bpm_trans_array['bpm_lng_main'] + '</option>';

            dd_folders = dd_folders.concat('<li><a style="text-decoration: none;" onclick="bpmcontext.bpm_file_button(' + selected_object + ', 13, 0)" class="bpm_action" id="bpm_file_move_to_' + selected_object + '_0">' + bpm_trans_array['bpm_lng_main'] + '</a></li>');

            jQuery.each(folder_list,function(index, value) {
                folder_tree = folder_tree.concat('<li><a style="text-decoration: none;" class="bpm_file_tree_label" id="bpm_file_tree_' + value['id'] +'" onclick="bpmcontext.bpm_file_load_files('+selected_object+', ' + value['id'] +')">' + value['name'] + '</a></li>');
                dd_folders = dd_folders.concat('<li><a style="text-decoration: none;" onclick="bpmcontext.bpm_file_button('+selected_object+', 13, ' + value['id'] +')" class="bpm_action" id="bpm_file_move_to_'+selected_object+'_'+ value['id'] + '">' + value['name'] + '</a></li>');
                upload_folders = upload_folders.concat('<option value="' + value['id'] + '">' + value['name'] + '</option>');
            });

            if(folder_list){
                dd_folders = dd_folders.concat('</ul>');
                jQuery('#bpm_file_move_'+selected_object).show();
            }else{
                dd_folders = '';
                jQuery('#bpm_file_move_'+selected_object).hide();
            }

            folder_tree = folder_tree.concat('</ul></li></ul>');

            bpm_folder_list[selected_object] = upload_folders;

            jQuery('#tree_folder_div_' + selected_object).html(folder_tree);
            jQuery('#bpm_folder_list_dd_' + selected_object).html(dd_folders);

            bpmcontext.bpm_file_load_files(selected_object, 0);

        }//end of bpm_make_folder_tree

        this.bpm_file_button = function(selected_object, choice, file_info){

            switch(choice){
                case 1:

                    break;
                case 2:

                    break;
                case 3:

                    break;
                case 4:
                    //add new folder
                    jQuery('#bpm_file_folder_option_' + selected_object).hide();
                    jQuery('#bpm_file_rename_folder_form_'+selected_object).hide();
                    jQuery('#bpm_button_new_folder_'+selected_object).show();
                    jQuery('#bpm_file_add_folder_form_'+selected_object).hide();
                    var post_text = jQuery('#bpm_add_folder_'+selected_object).val();
                    var querystring = 'domain=' + bpm_current_domain + "&action=add_folder&pageid=" + bpm_pageid + "&sectionid=" + selected_object + "&folder_name=" + post_text;
                    jQuery.getJSON('https://'+bpm_settings['bpm_server']+'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function(result){
                        //update folder list using result
                        if(result['content']){
                            bpmcontext.bpm_make_folder_tree(selected_object, result['content']);
                        }
                        jQuery('.bpm_add_folder_input').val('');
                    });
                    break;

                case 6:
                    if(bpm_settings['STORAGEDETAILS']['avail'] <= 0){
                        jQuery('#bpm_attachment_no_storage_window').foundation('reveal', 'open');
                    }else {
                        var html_line = '';
                        var upload_is_processing = 0;
                        var file_list = [];
                        var message = '';
                        var this_folder = 0;
                        var this_guid = bpmcontext.bpm_guid();

                        jQuery('#bpm_file_uploading_no_talat_alert').hide();
                        jQuery('#bpm_file_uploading_alert').hide();
                        jQuery('#bpm_upload_files').hide();
                        jQuery('#bpm_upload_form_details').hide();
                        jQuery('#bpm_upload_form').html('');

                        jQuery('#bpm_attachment_window').foundation('reveal', 'open');
                        var querystring = 'domain=' + bpm_current_domain + "&action=get_file_auth&pageid=" + bpm_pageid;
                        jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function (result) {
                            if (result) {
                                html_line = html_line.concat('<form action="https://s3.amazonaws.com/bpm-inbound/" method="POST" enctype="multipart/form-data" class="dropzone bpm_dropzone" id="bpm_dropzone" style="max-height:300px;overflow: auto;">');
                                html_line = html_line.concat('<input type="hidden" name="key" value="${filename}-' + this_guid + '">');

                                jQuery.each(result.FILEAUTH['inputs'], function (index, value) {
                                    html_line = html_line.concat('<input type="hidden" name="' + index + '" value="' + value + '">');
                                });

                                html_line = html_line.concat('</form>')

                                jQuery('#bpm_upload_form').html(html_line);

                                var folder_dd = '<select id="bpm_upload_folder">';
                                folder_dd = folder_dd.concat(bpm_folder_list[selected_object]);

                                folder_dd = folder_dd.concat('</select>');

                                jQuery('#bpm_upload_folders').html(folder_dd);

                                var myDropzone = new Dropzone("#bpm_dropzone", {
                                    autoProcessQueue: false,
                                    parallelUploads: 101,
                                    maxFiles: 100,
                                    addRemoveLinks: true,
                                    dictDefaultMessage: '<div class="text-center" style="width:100%">'+bpm_trans_array['bpm_lng_click_files']+'</div>'
                                });

                                myDropzone.on("complete", function (file) {
                                    file_list.push(file['name'].trim());
                                    //myDropzone.removeFile(file);
                                });

                                myDropzone.on("addedfile", function () {
                                    jQuery('#bpm_upload_files').show();
                                });

                                myDropzone.on("removedfile", function (file) {
                                    var index = file_list.indexOf(file['name'].trim());
                                    if (index >= 0) {
                                        file_list.splice( index, 1 );
                                    }
                                    if (myDropzone.getQueuedFiles().length == 0) {
                                        jQuery('#bpm_upload_files').hide();
                                    }
                                });

                                myDropzone.on("queuecomplete", function () {
                                    if (jQuery('#bpm_edit_upload_text').val().length > 0) {
                                        message = '&message=' + encodeURIComponent(jQuery('#bpm_edit_upload_text').val());
                                    } else {
                                        message = '';
                                    }
                                    var send_to = '';
                                    if (bpm_talat_list.length > 0) {
                                        jQuery(bpm_talat_list).each(function (index, value) {
                                            if (send_to.length > 0) send_to = send_to.concat(',');
                                            send_to = send_to.concat(value);
                                        });
                                    }

                                    this_folder = jQuery('#bpm_upload_folder').val();

                                    var send_files = '';
                                    if (file_list.length > 0) {
                                        jQuery(file_list).each(function (index, value) {
                                            send_files = send_files.concat('&files[]=' + encodeURIComponent(value));
                                        });
                                    }
                                    var query_string = 'sectionid=' + selected_object + '&domain=' + bpm_current_domain + "&action=uploaded_files&pageid=" + bpm_pageid + message + '&send_to=' + send_to + '&folder=' + this_folder + send_files + '&fileid=' + this_guid;

                                    jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', query_string, function (result) {

                                        if (result) {
                                            //update file list
                                            jQuery('#bpm_file_placeholder_' + selected_object).hide();
                                            jQuery('#bpm_file_area_' + selected_object).show();
                                            jQuery('#bpm_file_list_' + selected_object).html(bpmcontext.bpm_create_file_list(result.FILEINFO['FILELIST'], selected_object));

                                            //update change log
                                            bpmcontext.bpm_create_change_log(result.FILEINFO);

                                            bpmcontext.make_attachments_sortable();

                                            //close window
                                            jQuery('#bpm_attachment_window').foundation('reveal', 'close');

                                            //show folder with uploaded files
                                            bpmcontext.bpm_file_load_files(selected_object, this_folder);
                                            bpmcontext.bpm_update_dashboard();

                                        }

                                    });

                                });

                                var suggestions = [];
                                bpm_talat_list = [];
                                jQuery('.bpm_talat_user').remove();
                                jQuery('#bpm_upload_talat_alert').hide();
                                jQuery('#bpm_upload_form_talat').css('max-height', jQuery('#bpm_upload_form_talat').css('height'));

                                jQuery('#bpm_upload_form_talat').on('keyup keypress', function(e) {
                                    var code = e.keyCode || e.which;
                                    if (code == 13) {
                                        e.preventDefault();
                                        return false;
                                    }
                                });
                                if(bpm_page_status == 0){
                                    jQuery('#bpm_edit_upload_text').hide();
                                    jQuery('#bpm_upload_talat_to').hide();
                                    jQuery('#bpm_add_talat_user_button').hide();
                                }

                                if (bpm_page_status > 0) {
                                    jQuery('#bpm_edit_upload_text').attr("placeholder", bpm_trans_array['bpm_lng_talat_placeholder_not_draft']).prop("disabled", false).show();
                                    jQuery('#bpm_upload_talat_to').prop("disabled", false).show();
                                    jQuery('#bpm_add_talat_user_button').prop("disabled", false).show();

                                    jQuery.each(bpm_dashboard[99], function (i, val) {
                                        suggestions.push({label: val.real_name  + ' ', value: val.user_id});

                                    });

                                    jQuery('#bpm_edit_upload_text').val('');
                                    jQuery('#bpm_upload_talat_to').css('z-index', '1006');
                                    jQuery("#bpm_upload_talat_to").autocomplete({

                                        //define callback to format results
                                        source: suggestions,
                                        appendTo: '#bpm_upload_form_talat',

                                        //define select handler
                                        select: function (e, ui) {
                                            var add_item = 0;
                                            jQuery(bpm_talat_list).each(function (index, value) {
                                                if (value === ui.item.value) {
                                                    add_item = 1;
                                                }
                                            });

                                            if (add_item == 0) {
                                                var friend = ui.item.value,
                                                    span = jQuery("<span>").text(ui.item.label).prop('id', 'bpm_talat_user_' + ui.item.value).addClass("bpm_talat_user"),
                                                    a = jQuery("<a>").addClass("remove").attr({
                                                        onclick: "bpm_remove_talat_user(" + ui.item.value + ", 2)",
                                                        title: "Remove " + ui.item.label
                                                    }).text(" x ").appendTo(span);
                                                span.insertBefore("#bpm_upload_talat_list");
                                                bpm_talat_list.push(ui.item.value);
                                                jQuery('#bpm_file_uploading_no_talat_alert').hide();
                                            }

                                        },
                                        close: function () {
                                            jQuery("#bpm_upload_talat_to").val('');
                                        },
                                        change: function () {
                                            jQuery("#bpm_upload_talat_to").val("").css("top", 2);
                                        }
                                    });
                                    jQuery('#bpm_upload_talat_to').autocomplete('close');
                                } else {
                                    //hide talat feature
                                    jQuery('#bpm_edit_upload_text').attr("placeholder", bpm_trans_array['bpm_lng_talat_placeholder_draft']).prop("disabled", true);
                                    jQuery('#bpm_upload_talat_to').prop("disabled", true);
                                    jQuery('#bpm_add_talat_user_button').prop("disabled", true);

                                }

                                //assign handler to button
                                jQuery("#bpm_upload_files").click(function () {
                                    if (bpm_talat_list.length == 0 && jQuery("#bpm_edit_upload_text").val().length > 0 && bpm_page_status > 0) {
                                        jQuery('#bpm_file_uploading_no_talat_alert').show();

                                    }else {
                                        jQuery('#bpm_file_uploading_no_talat_alert').hide();
                                        jQuery('#bpm_file_uploading_alert').show();
                                        jQuery('#bpm_upload_files').hide();
                                        myDropzone.processQueue();
                                    }
                                });
                            }
                        });
                    }

                    break;
                case 5:
                    //show new folder field
                    jQuery('#bpm_button_new_folder_'+selected_object).hide();
                    jQuery('#bpm_file_add_folder_form_'+selected_object).show();
                    document.getElementById('bpm_add_folder_'+selected_object).focus();
                    break;
                case 8:
                    //show rename form
                    jQuery('#bpm_file_folder_option_' + selected_object).hide();
                    jQuery('#bpm_file_rename_folder_form_'+selected_object).show();
                    jQuery('#bpm_button_new_folder_'+selected_object).hide();
                    jQuery('#bpm_file_add_folder_form_'+selected_object).hide();
                    jQuery('#bpm_rename_folder_'+selected_object).val(jQuery('#bpm_file_tree_'+bpm_selected_folder).text());
                    var rename_text = jQuery('#bpm_rename_folder_'+selected_object);
                    var rename_length= rename_text.val().length * 2;
                    jQuery('#bpm_rename_folder_'+selected_object).focus();
                    rename_text[0].setSelectionRange(rename_length, rename_length);

                    break;
                case 9:
                    //rename folder
                    jQuery('#bpm_file_rename_folder_form_'+selected_object).hide();
                    jQuery('#bpm_button_new_folder_'+selected_object).show();
                    jQuery('#bpm_file_folder_option_'+selected_object).hide();
                    if(bpm_selected_folder==0) return;
                    var post_text = jQuery('#bpm_rename_folder_'+selected_object).val();
                    var querystring = 'domain=' + bpm_current_domain + "&action=rename_folder&pageid=" + bpm_pageid + "&sectionid=" + selected_object + '&folder_id='+bpm_selected_folder+'&folder_name=' + post_text;
                    jQuery.getJSON('https://'+bpm_settings['bpm_server']+'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function(result){
                        //update folder list using result
                        if(result['content']){
                            bpmcontext.bpm_make_folder_tree(selected_object, result['content']);
                        }
                        jQuery('.bpm_rename_folder_input').val('');
                    });
                    break;
                case 10:
                    //delete folder
                    jQuery('#bpm_file_rename_folder_form_'+selected_object).hide();
                    jQuery('#bpm_button_new_folder_'+selected_object).show();
                    jQuery('#bpm_file_folder_option_'+selected_object).hide();
                    if(bpm_selected_folder==0) return;
                    jQuery('#bpm_file_folder_option_' + selected_object).hide();
                    var querystring = 'domain=' + bpm_current_domain + "&action=delete_folder&pageid=" + bpm_pageid + "&sectionid=" + selected_object + '&folder_id='+bpm_selected_folder;
                    jQuery.getJSON('https://'+bpm_settings['bpm_server']+'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function(result){
                        //update folder list using result
                        if(result['content']){
                            jQuery('#bpm_main_loading_alert').show();
                            bpmcontext.bpm_load_page(bpm_get_string + '&action=bpmcontext', 1);

                        }
                    });
                    break;
                case 11:
                    //show file options if items are checked
                    var open_status = jQuery("#bpm_section_top_bar_bpm_acc_" + selected_object).css('display');
                    if(open_status=='none') jQuery("#bpm_top_bar_" + selected_object).click();

                    var n = jQuery("input[name='bpm_file_select_"+selected_object+"']:checked").length;
                    if(n==0){
                        jQuery('#bpm_file_options_'+selected_object).hide();
                    }else{
                        jQuery('#bpm_file_options_'+selected_object).show();
                    }
                    if(bpm_user_role != 'admin'){
                        jQuery('#bpm_file_delete').hide();
                    }


                    break;
                case 12:
                    var open_status = jQuery("#bpm_section_top_bar_bpm_acc_" + selected_object).css('display');
                    if(open_status=='none') jQuery("#bpm_top_bar_" + selected_object).click();
                    var n = jQuery("#bpm_check_all_"+selected_object+":checked").length;
                    jQuery("input[name='bpm_file_select_"+selected_object+"']").prop('checked', false);

                    if(n==0){
                        //uncheck all
                        jQuery('#bpm_file_options_'+selected_object).hide();
        //                jQuery("input[name='bpm_file_select_"+selected_object+"']").prop('checked', false);

                        jQuery('.bpm_folder_'+selected_object+'_'+bpm_selected_folder).each(function(index, value) {
                            jQuery(this).find('input[type=checkbox]').prop('checked', false);
                        });
                    }else{
                        //check all
        //                jQuery("input[name='bpm_file_select_"+selected_object+"']").prop('checked', true);
                        jQuery('.bpm_folder_'+selected_object+'_'+bpm_selected_folder).each(function(index, value) {
                            jQuery(this).find('input[type=checkbox]').prop('checked', true);
                        });
                        jQuery('#bpm_file_options_'+selected_object).show();
                    }
                    if(bpm_user_role != 'admin'){
                        jQuery('#bpm_file_delete').hide();
                    }

                    break;
                case 13:
                    //move all checked files to the selected folder
                    jQuery('#bpm_file_options_'+selected_object).hide();
                    var file_list = '';
                    var files = 0;
                    jQuery('input[name="bpm_file_select_'+selected_object +'"]:checked').each(function(){
                        if(files > 0) file_list = file_list.concat(',');
                        files++;
                        file_list = file_list.concat(jQuery(this).prop('value').substr(9));
                    });

                    var querystring = 'domain=' + bpm_current_domain + "&action=move_files&pageid=" + bpm_pageid + "&sectionid=" + selected_object + '&folder_id='+file_info + '&files=' + file_list;

                    jQuery.getJSON('https://'+bpm_settings['bpm_server']+'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function(result){
                        //update file list using result
                        if(result){

                            //update file list
                            jQuery('#bpm_file_list_'+ selected_object).html(bpmcontext.bpm_create_file_list(result.FILEINFO['FILELIST'], selected_object));

                            bpmcontext.make_attachments_sortable();

                            //update change log
                            bpmcontext.bpm_create_change_log(result.FILEINFO);

                        }
                        bpmcontext.bpm_file_load_files(selected_object, file_info);

                        jQuery("#bpm_check_all_"+selected_object).prop('checked', false);
                    });
                    break;
                case 14:
                    //delete files
                    jQuery('#bpm_file_options_'+selected_object).hide();
                    bpm_delete_from = selected_object;
                    jQuery('#bpm_confirm_admin_file_delete').foundation('reveal', 'open');
                    break;

                case 15:
                    //show or hide admin delete button on reveal
                    var any_checked = 0;
                    bpm_delete_from = selected_object;
                    jQuery('#bpm_confirm_version_delete').hide();
                    jQuery('input[name="bpm_file_version_select"]:checked').each(function(){
                        any_checked++;
                    });
                    if(any_checked) jQuery('#bpm_confirm_version_delete').show();
                    break;


            }

        }//end of bpm_file_button

        this.bpm_delete_files = function(){

            var file_list = '';
            var files = 0;
            if(bpm_delete_from_source=='versions'){
                jQuery('input[name="bpm_file_version_select"]:checked').each(function () {
                    if (files > 0) file_list = file_list.concat(',');
                    files++;
                    file_list = file_list.concat(jQuery(this).prop('value').substr(9));
                });
            }else {
                jQuery('input[name="bpm_file_select_' + bpm_delete_from + '"]:checked').each(function () {
                    if (files > 0) file_list = file_list.concat(',');
                    files++;
                    file_list = file_list.concat(jQuery(this).prop('value').substr(9));
                });
            }

            if(file_list) {
                var querystring = 'domain=' + bpm_current_domain + "&action=delete_files&pageid=" + bpm_pageid + "&sectionid=" + bpm_delete_from + '&files=' + file_list;
                jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function (result) {
                    //update file list using result
                    if (result) {
                        jQuery('#bpm_confirm_admin_file_delete').foundation('reveal', 'close');

                        //update file list
                        jQuery('#bpm_file_list_' + bpm_delete_from).html(bpmcontext.bpm_create_file_list(result.FILEINFO['FILELIST'], bpm_delete_from));

                        bpmcontext.make_attachments_sortable();
                        //update change log
                        bpmcontext.bpm_create_change_log(result.FILEINFO);

                    }
                    jQuery("#bpm_check_all_" + bpm_delete_from).prop('checked', false);
                });
            }else{
                jQuery("#bpm_check_all_" + bpm_delete_from).prop('checked', false);
            }

        }//end of bpm_delete_files

        this.bpm_guid = function() {
            function _p8(s) {
                var p = (Math.random().toString(16)+"000000000").substr(2,8);
                return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;
            }
            return _p8() + _p8(true) + _p8(true) + _p8();
        }//end of bpm_guid

        this.bpm_create_tagged_page_links = function(this_id, this_content, page_name, page_count, add_button){

            var links_list = '';
            var display;
            var links_object = jQuery('#bpm_tagged_page_section').html();
            links_object = links_object.replace(/TAGGEDINDEX/g,this_id);
            links_object = links_object.replace(/TAGGEDNAME/g,page_name);

            if(add_button=='no'){
                links_object = links_object.replace(/TAGGEDBUTTONCLASS/g,'bpm-hide');
            }else{
                links_object = links_object.replace(/TAGGEDBUTTONCLASS/g,'');
            }


            if(this_content) {

                var links_array = [];
                var bpm_link_string = '';
                var bpm_wfm_status = '';

                jQuery.each(this_content[0],function(index, value) {
                    display = 1;
                        if (value['page_id']) {
                            switch (value['wfm_status']) {
                                case '0':
                                    bpm_wfm_status = bpm_trans_array['bpm_lng_draft'];
                                    if(value['wfm_current_id'] != bpm_settings['userid']) display = 0;
                                    break;
                                case '1':
                                    bpm_wfm_status = bpm_trans_array['bpm_lng_open'];
                                    if(value['real_name']) bpm_wfm_status = bpm_trans_array['bpm_lng_open'] + ' - ' + value['real_name'];
                                    break;
                                case '2':
                                    bpm_wfm_status = bpm_trans_array['bpm_lng_closed'];
                                    break;
                            }
                            if(display ==1) {
                                bpm_link_string = '<a class="url_links bpm_links" href="?pageid=' + value['page_id'] + '&domain=' + bpm_current_domain + '&action=bpmcontext" title="' + value['page_title'] + '">' + value['page_title'] + '</a>';
                                links_array.push({
                                    col_1: bpm_link_string,
                                    col_2: value['page_touched'].substr(0, 10),
                                    col_3: bpm_wfm_status,
                                    col_4: value['real_name']
                                });
                            }
                        }

                });

                links_list = bpmcontext.bpm_create_page('bpm_section_page', this_id, 1, links_array, true, page_count, 1);
            }

            links_object = links_object.replace(/TAGGEDDATA/g,links_list);

            return links_object;
        }//end of bpm_create_tagged_page_links

        this.bpm_create_child_links = function(this_id, this_content, this_sections, link_count, bpm_links_ids){

            var html_info = '';
            var set_title = 0;
            var main_content = '';

            var tab_list = '';
            var tab_content = '';
            var t = 0;
            var added_tab = 0;
            var active = 'active';
            var links_object = jQuery('#bpm_child_links_section').html();
            var toolbar_list = '';

            if(this_content){

                jQuery.each(this_sections,function(index, value) {
                    //add tab
                    var links_array = [];
                    var menu_array = [];
                    var bpm_link_string = '';
                    var bpm_wfm_status = '';
                    var links_list = '';
                    if(added_tab==1) active = '';
                    var tab_items = 0;
                    var display;
                    var total_items = link_count[t];


                    if(this_content[t]) {

                        jQuery.each(this_content[t], function (index, value) {
                            //add tab content
                            tab_items++;
                            display = 1;

                            if (value['page_id']) {
                                switch (value['wfm_status']) {
                                    case '0':
                                        bpm_wfm_status = bpm_trans_array['bpm_lng_draft'];
                                        if(value['wfm_current_id'] != bpm_settings['USERID']) display = 0;
                                        break;
                                    case '1':
                                        bpm_wfm_status = bpm_trans_array['bpm_lng_open'];
                                        if(value['real_name']) bpm_wfm_status = bpm_trans_array['bpm_lng_open'] + ' - ' + value['real_name'];
                                        break;
                                    case '2':
                                        bpm_wfm_status = bpm_trans_array['bpm_lng_closed'];
                                        break;
                                }
                                if(display ==1) {
                                    var bpm_menu_string = '<a class="url_links bpm_nodecoration" href="?pageid=' + value['page_id'] + '&domain=' + bpm_current_domain + '&action=bpmcontext"  title="' + value['page_title'] + '">' + value['page_title'] + '</a>';
                                    bpm_link_string = '<a class="url_links bpm_links " href="?pageid=' + value['page_id'] + '&domain=' + bpm_current_domain + '&action=bpmcontext"  title="' + value['page_title'] + '">' + value['page_title'] + '</a>';
                                    menu_array.push({col_1: bpm_menu_string});
                                    links_array.push({
                                        col_1: bpm_link_string,
                                        col_2: value['page_touched'].substr(0, 10),
                                        col_3: bpm_wfm_status,
                                        col_4: value['real_name']
                                    });
                                }
                            }

                        });
                    }

                    if(tab_items > 0) {
                        bpm_page_has_children++;
                        if(tab_list.length == 0){
                            bpm_child_link_create_id = bpm_links_ids[t];
                            bpm_child_link_create_name = value;
                        }else {
                            active = '';
                        }
                        var remove_this = bpm_trans_array['bpm_lng_shared'];
                        var this_name = value.replace(remove_this, '');

                        tab_list = tab_list.concat('<li class="bpm_file_bottom_border"><a id="bpm_load_child_links_menu_item_'+bpm_links_ids[t]+'" class="bpm_nodecoration bpm_no_wrap" onClick="bpmcontext.bpm_load_child_links('+bpm_links_ids[t]+')" >' + this_name + '&nbsp;('+total_items+')</a></li>');

                        var add_class = false;
                        var links = '<ul class="dropdown">';
                        var this_link_count = 0;

                        jQuery.each(menu_array,function(index, value) {
                            this_link_count++;
                            if(this_link_count > 10){
                                return false;
                            }
                            add_class = true;
                            links = links.concat('<li class="bpm_ul_li">'+value['col_1']+'</li>');
                        });

                        links = links.concat('</li></ul>');

                        toolbar_list = toolbar_list.concat('<li class="bpm_ul_li bpm_toolbar_page_menu_dd  has-dropdown"><a class="bpm_action bpm_nodecoration" id="bpm_view_as_'+bpm_links_ids[t]+'" onClick="bpmcontext.bpm_load_child_links('+bpm_links_ids[t]+');">' + this_name + '&nbsp;('+total_items+')</a>'+links+'</li>');

                        links_list = bpmcontext.bpm_create_page('bpm_section_page', bpm_links_ids[t], 1, links_array, true, total_items, 2);
                        tab_content = '';
                        tab_content = tab_content.concat('<div id="bpm_tagged_links_999999" style="width:100%;overflow-y: auto;overflow-x:hidden;">'+links_list+'</div>');
                        tab_content = tab_content.concat('</div>');
                        tab_content = tab_content.concat('<div id="bpm_tagged_search_results_999999" style="margin-top:3px;max-height: 250px;overflow-x: hidden;display:none;"></div>');
                        bpm_child_links_data[bpm_links_ids[t]] = tab_content;
                        added_tab++;
                        if(set_title==0){
                            main_content = tab_content;
                            bpm_page_links_title = '&nbsp;'+bpm_trans_array['bpm_lng_page_links']+ ' - ' + value + '&nbsp;('+total_items+')<div style="float:right;display: inline;" class="fa fa-search"></div>';
                        }
                        set_title++;
                    }
                    t++;
                });
            }

            html_info = html_info.concat('<div id="bpm_child_links_top" style="overflow-y: auto;overflow-x: hidden">');

            html_info = html_info.concat('<div class="bpm-row">');
            html_info = html_info.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns">');
            html_info = html_info.concat('<div id="bpm_child_links_target">'+main_content+'</div>'); //content
            html_info = html_info.concat('</div>'); //end of child links
            html_info = html_info.concat('</div>'); //end of bpm-row
            html_info = html_info.concat('<div class="bpm-row">');
            html_info = html_info.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns hide" id="bpm_child_links_search_target">');
            html_info = html_info.concat('<div ></div>'); //content
            html_info = html_info.concat('</div>'); //end of child links
            html_info = html_info.concat('</div>'); //end of bpm-row
            html_info = html_info.concat('</div>'); //end of section

            html_info = html_info.concat('<ul id="bpm_page_type_list" data-options="align:right" class="f-dropdown" data-dropdown-content>');
            html_info = html_info.concat(tab_list);
            html_info = html_info.concat('</ul>');

            links_object = links_object.replace(/LINKSDATA/g,html_info);

            bpm_settings['page_menu_list'] = toolbar_list;

            return links_object;
        }//end of bpm_create_child_links

        this.bpm_load_child_links = function(selected_object){

            jQuery('.bpm_toolbar_page_menu_dd').hide();

            setTimeout(function () {

                bpmcontext.bpm_clear_search_grid('999999');
                bpm_child_link_create_name = jQuery('#bpm_load_child_links_menu_item_' + selected_object).text().split('(');
                bpm_child_link_create_name = jQuery.trim(bpm_child_link_create_name[0]);
                bpm_child_link_create_id = selected_object;

                if (bpm_child_link_create_name == jQuery('#bpm_template_name_Employee').text()) {
                    jQuery('#bpm_add_page_child_links').hide();
                } else {
                    //        jQuery('#bpm_add_page_child_links').show();
                    jQuery('#bpm_add_page_child_links').hide();
                }


                jQuery('#bpm_top_bar_999999').html('&nbsp;' + bpm_trans_array['bpm_lng_page_links'] + ' - ' + jQuery('#bpm_load_child_links_menu_item_' + selected_object).text() + '<div style="float:right;display: inline;" class="fa fa-search"></div>');

                jQuery('#bpm_child_links_title').text(jQuery('#bpm_load_child_links_menu_item_' + selected_object).text());
                jQuery('#bpm_child_links_target').html(bpm_child_links_data[selected_object]);
                bpmcontext.bpm_set_url_links();

                jQuery('#bpm_all_links_acc').show();

                if (jQuery('#bpm_all_links_acc').height() < 100) {

                    jQuery("#bpm_section_top_bar_bpm_acc_999999").show();
                    jQuery('#bpm_all_links_acc').parent().show();
                    jQuery('#bpm_all_links_acc').animate({height: bpm_settings['page_menu_height'] + "px"}, 'slow').show();
                }
                jQuery('.bpm_toolbar_page_menu_dd').show();

            },500);

        }//end of bpm_load_child_links

        this.bpm_make_links_grid = function(this_content, cols, row_count){

            var bpm_grid_data = '';
            var grid_count = 0;
            var column_count = 3;
            if(cols) column_count = cols;

            if(this_content){
                jQuery.each(this_content, function (index, value) {
                    bpm_grid_data = bpm_grid_data.concat('<div class="bpm-row">');
                    switch(column_count){
                        case 1:
                            bpm_grid_data = bpm_grid_data.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns grid_links text-left">' + value['col_1'] + '</div>');
                            break;
                        case 2:
                            bpm_grid_data = bpm_grid_data.concat('<div class="bpm-small-9 bpm-large-9 bpm-columns grid_links text-left">' + value['col_1'] + '</div>');
                            bpm_grid_data = bpm_grid_data.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns grid_links text-left">' + value['col_2'] + '</div>');
                            break;
                        case 3:
                            bpm_grid_data = bpm_grid_data.concat('<div class="bpm-small-8 bpm-large-6 bpm-columns bpm_grid_section_links text-left">' + value['col_1'] + '</div>');
                            bpm_grid_data = bpm_grid_data.concat('<div class="bpm-small-1 bpm-large-3 bpm-columns bpm_grid_section_links text-left">' + value['col_2'] + '</div>');
                            bpm_grid_data = bpm_grid_data.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns bpm_grid_section_links text-left">' + value['col_3'] + '</div>');
                            break;
                        case 4:
                            bpm_grid_data = bpm_grid_data.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns bpm_grid_section_links text-left">' + value['col_1'] + '</div>');
                            bpm_grid_data = bpm_grid_data.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns bpm_grid_section_links text-left">' + value['col_2'] + '</div>');
                            bpm_grid_data = bpm_grid_data.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns bpm_grid_section_links text-left">' + value['col_3'] + '</div>');
                            bpm_grid_data = bpm_grid_data.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns bpm_grid_section_links text-left">' + value['col_4'] + '</div>');
                            break;
                        case 5:
                            bpm_grid_data = bpm_grid_data.concat('<div class="bpm-small-4 bpm-large-4 bpm-columns grid_links text-left">' + value['col_1'] + '</div>');
                            bpm_grid_data = bpm_grid_data.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns grid_links text-left">' + value['col_2'] + '</div>');
                            bpm_grid_data = bpm_grid_data.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns grid_links text-left">' + value['col_3'] + '</div>');
                            bpm_grid_data = bpm_grid_data.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns grid_links text-left">' + value['col_4'] + '</div>');
                            bpm_grid_data = bpm_grid_data.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns grid_links text-left">' + value['col_5'] + '</div>');
                            break;
                    }
                    bpm_grid_data = bpm_grid_data.concat('</div>');
                    grid_count++;
                    if (grid_count > 300 && cols!=4) return false;
                });
                if(grid_count < row_count && row_count){
                    for(grid_count = grid_count; grid_count < row_count; grid_count++){
                        bpm_grid_data = bpm_grid_data.concat('<div class="bpm-row">');
                        bpm_grid_data = bpm_grid_data.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns bpm_grid_section_links">&nbsp;</div>');
                        bpm_grid_data = bpm_grid_data.concat('</div>');
                    }
                }


            }

        return bpm_grid_data;

        }//end of bpm_make_links_grid

        this.bpm_make_section_links_grid = function(this_content){

            var bpm_grid_data = '';

            if(this_content){
                jQuery.each(this_content, function (index, value) {
                    var real_name = ' ';
                    if(value['col_4']) real_name = bpm_trans_array['bpm_lng_updated_by'] + ' ' +  value['col_4'];
                    bpm_grid_data = bpm_grid_data.concat('<div class="bpm-row full-width ">');
                    bpm_grid_data = bpm_grid_data.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-left">');
                    bpm_grid_data = bpm_grid_data.concat('<div class="bpm-row">');
                    bpm_grid_data = bpm_grid_data.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns bpm_grid_section_links  text-left">' + value['col_1'] + '</div>');
                    bpm_grid_data = bpm_grid_data.concat('</div>'); //end of first row
                    bpm_grid_data = bpm_grid_data.concat('<div class="bpm-row">');
                    bpm_grid_data = bpm_grid_data.concat('<div class="bpm-small-7 bpm-large-7 bpm-columns bpm_grid_section_links bpm_sub_line  text-left">' +  bpm_trans_array['bpm_lng_last_updated'] + ' ' + value['col_2'] + '</div>');
                    bpm_grid_data = bpm_grid_data.concat('<div class="bpm-small-5 bpm-large-5 bpm-columns bpm_grid_section_links bpm_sub_line  text-left">'+bpm_trans_array['bpm_lng_status']+ ': ' + value['col_3'] + '</div>');
                    bpm_grid_data = bpm_grid_data.concat('</div>'); //end of second row
                    bpm_grid_data = bpm_grid_data.concat('</div>');  //end of column wrapper
                    bpm_grid_data = bpm_grid_data.concat('</div>');  //end of rwo wrapper
                    bpm_grid_data = bpm_grid_data.concat('<hr class="bpm_hr_gray">');
                });
            }

            return bpm_grid_data;

        }//end of bpm_make_section_links_grid

        this.bpm_create_page = function(section_tag, section_id, page_number, links_array, return_val, page_count, section_type){

            if(section_type==1) section_tag = 'bpm_section_page';
            if(section_type==2) section_tag = 'bpm_tagged_links_999999';

            if(jQuery('#'+section_tag+'_'+section_id+'_'+page_number).length){
                jQuery('.'+section_tag+'_'+section_id).hide();
                jQuery('#'+section_tag+'_'+section_id+'_'+page_number).show();
            }else {

                if(links_array){
                    return bpmcontext.bpm_make_page_content(section_tag, section_id, page_number, links_array, return_val, page_count, section_type);
                }else{

                }
                //get page info from server
                var querystring = 'domain=' + bpm_current_domain + "&action=get_page_section_data&pageid=" + bpm_pageid + "&sectionid=" + section_id + '&page_number=' + page_number;

                jQuery.getJSON('https://'+bpm_settings['bpm_server']+'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function(result) {

                    if(result.PAGEDATA) {

                        var links_array = [];
                        var bpm_link_string = '';
                        var bpm_wfm_status = '';

                        jQuery.each(result.PAGEDATA,function(index, value) {
                            if (value['page_id']) {
                                switch (value['wfm_status']) {
                                    case '0':
                                        bpm_wfm_status = bpm_trans_array['bpm_lng_draft'];
                                        if(value['wfm_current_id'] != bpm_settings['userid']) display = 0;
                                        break;
                                    case '1':
                                        bpm_wfm_status = bpm_trans_array['bpm_lng_open'];
                                        if(value['real_name']) bpm_wfm_status = bpm_trans_array['bpm_lng_open'] + ' - ' + value['real_name'];
                                        break;
                                    case '2':
                                        bpm_wfm_status = bpm_trans_array['bpm_lng_closed'];
                                        break;
                                }
                                bpm_link_string = '<a class="url_links bpm_links" href="?pageid=' + value['page_id'] + '&domain=' + bpm_current_domain + '&action=bpmcontext" title="' + value['page_title'] + '">' + value['page_title'] + '</a>';
                                links_array.push({
                                    col_1: bpm_link_string,
                                    col_2: value['page_touched'].substr(0, 10),
                                    col_3: bpm_wfm_status,
                                    col_4: value['real_name']
                                });
                            }

                        });
                        bpmcontext.bpm_make_page_content(section_tag, section_id, page_number, links_array, return_val, page_count, section_type);
                    }
                });
            }
        }//end of bpm_create_page

        this.bpm_make_page_content = function(section_tag, section_id, page_number, links_array, return_val, page_count, section_type){

            var page_count_push = page_count;
            page_count = Math.ceil(page_count / 8);

            var pages = '';
            var cur_page = 1;
            var page_group_start ;
            var left_start = page_number;
            var right_start = page_count - 2;
            var has_right = 0

            if(page_count > 6) has_right = 1;

            if(page_count < 7) {
                page_group_start = page_count + 1;
                left_start = 1;
            }else{
                page_group_start = page_number + 3;
                left_start = page_number;
            }

            if (page_count > 1) {

                //has  pages
                pages = pages.concat('<ul class="pagination">');

                //show left arrow
                if (page_number == 1) {
                    pages = pages.concat('<li class="arrow unavailable bpm_nodecoration"><a>&laquo;</a></li>');
                } else {
                        var prev_page = page_number - 1;
                        pages = pages.concat('<li class="arrow"><a onClick="bpmcontext.bpm_create_page(0' + ',' + section_id + ',' + 1 + ',0,0,' + page_count_push + ','+section_type+')">&laquo;</a></li>');
                }

                for (cur_page = 1; cur_page < page_count + 1; cur_page++) {
                    var display_page = 0;

                    if(page_count < 7){
                        display_page = 1;
                    }else{
                        if(cur_page <= page_number + 2 && cur_page > page_number - 1) display_page = 1;
                        if(cur_page >= page_count - 2 ) display_page = 1;
                        if(page_number >= page_count - 6 && cur_page >= page_count - 6) display_page = 1;
                    }

                    if(display_page) {
                        if (page_number == cur_page) {
                            pages = pages.concat('<li class="current"><a onClick="bpmcontext.bpm_create_page(0' + ',' + section_id + ',' + cur_page + ',0,0,' + page_count_push + ','+section_type+')">' + cur_page + '</a></li>');
                        } else {
                            pages = pages.concat('<li><a onClick="bpmcontext.bpm_create_page(0' + ',' + section_id + ',' + cur_page + ',0,0,' + page_count_push + ','+section_type+')">' + cur_page + '</a></li>');
                        }
                    }
                    if(page_count > 7 && cur_page == page_number + 3) {
                        pages = pages.concat('<li class="unavailable bpm_nodecoration"><a >&hellip;</a></li>');
                    }

                }

                //show right arrow
                if (page_count == page_number) {
                    pages = pages.concat('<li class="arrow unavailable bpm_nodecoration"><a>&raquo;</a></li>');
                } else {
                    var next_page = page_number + 1;
                    pages = pages.concat('<li class="arrow"><a onClick="bpmcontext.bpm_create_page(0'+','+section_id+','+page_count+',0,0,'+page_count_push+','+section_type+')">&raquo;</a></li>');
                }
                pages = pages.concat('</ul>');

            }
            var html_line = '<div class="' + section_tag + '_' + section_id + '" id="' + section_tag + '_' + section_id + '_' + page_number + '">';
            html_line = html_line.concat(bpmcontext.bpm_make_section_links_grid(links_array)  + '<div class="bpm_page_footer">'+ pages+'</div></div>');

            if (return_val) {
                return html_line;
            } else {
                if(section_type==1) {
                    jQuery('#bpm_text_' + section_id).prepend(html_line);
                }else{
                    jQuery('#bpm_tagged_links_999999').prepend(html_line);
                }
                jQuery('.' + section_tag + '_' + section_id).hide();
                jQuery('#' + section_tag + '_' + section_id + '_' + page_number).show();
            }
        }//end of bpm_make_page_content;

        this.bpm_create_spreadsheet = function(this_id, this_content){


            return 'nada';

        }//end of bpm_create_spreadsheet

        this.bpm_create_alert = function(alert_info){

            var html_line = '';
            var top_line = '';
            var page_menu_line = '';

            jQuery.each(alert_info,function(index, value) {

                switch(value['location']) {
                    case '0':
                    case '1':
                        top_line = top_line.concat('<div data-alert class="alert-box ' + value['alert_type'] + ' radius " id="bpm_main_alert_' + value['alert_id'] + '" >' + value['alert_message']);
                        top_line = top_line.concat('<a onClick="bpmcontext.bpm_close_alert(' + value['alert_id'] + ')" class="close">&times;</a>');
                        top_line = top_line.concat('</div>');
                        break;
                    case '2':
                        html_line = html_line.concat('<div data-alert class="alert-box ' + value['alert_type'] + ' radius " id="bpm_main_alert_' + value['alert_id'] + '" >' + value['alert_message']);
                        html_line = html_line.concat('<a onClick="bpmcontext.bpm_close_alert(' + value['alert_id'] + ')" class="close">&times;</a>');
                        html_line = html_line.concat('</div>');
                        break;
                    case '3':
                        page_menu_line = page_menu_line.concat('<div data-alert class="alert-box ' + value['alert_type'] + ' radius " id="bpm_main_alert_' + value['alert_id'] + '" >' + value['alert_message']);
                        page_menu_line = page_menu_line.concat('<a onClick="bpmcontext.bpm_close_alert(' + value['alert_id'] + ')" class="close">&times;</a>');
                        page_menu_line = page_menu_line.concat('</div>');
                        break;
                }

            });

            if(top_line) jQuery('#bpm_top_messages').after(top_line);
            if(html_line) jQuery('#bpm_main_success_alert').after(html_line);
            if(page_menu_line && jQuery('#bpm_page_menu_messages').length) jQuery('#bpm_page_menu_messages').after(page_menu_line);

            jQuery.each(alert_info,function(index, value) {
                jQuery('#bpm_main_alert_' + value['alert_id']).show();
            });
        }//end of bpm_create_alert

        this.bpm_close_alert = function(alert_id){

            var querystring = 'domain=' + bpm_current_domain + "&action=dismiss_alert&alertid=" + alert_id;
            jQuery.getJSON('https://'+bpm_settings['bpm_server']+'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function(result) {


            });
        }//end of bpm_close_alert


        /*
        functions to support page actions toolbar
         */

        function bpm_show_action_button(title, action){

            jQuery('#bpm_toolbar_action_button').text(title);
            jQuery('#bpm_toolbar_action_button_holder').show();
            bpm_action_button_val = action;

        }

        function bpm_open_add_page(selected_object, type, page_name){

            jQuery('.qtip.ui-tooltip').qtip('hide');

            if(type == 1){
                bpm_current_create_page = selected_object;
            }else {
                bpm_current_create_page = selected_object.id.substr(13);
                page_name = selected_object.text;
            }

            jQuery('#bpm_add_page_invite_user').hide();
            jQuery('#bpm_add_page_button').text(bpm_trans_array['bpm_lng_create_draft']);

            if(bpm_page_naming[bpm_current_create_page]) {

                jQuery('#bpm_add_page_window').foundation('reveal', 'open');
                jQuery('#bpm_add_page_title').text(bpm_trans_array['bpm_lng_add'] + ' ' + page_name + ' ' + bpm_trans_array['bpm_lng_page']);

                jQuery('#bpm_add_page_content').html(bpmcontext.bpm_create_add_page_name(bpm_page_naming[bpm_current_create_page]));

                //add function tutorial if applicable
                var tutorial_id = 6000 + bpm_page_naming[bpm_current_create_page][0]['library_id'];

                jQuery('#bpm-add-page-tutorial').html(bpm_show_functional_tutorial(tutorial_id) + '&nbsp;');

                switch (bpm_page_naming[bpm_current_create_page][0]['library_id']) {
                    case '112':  //corp customer
                        jQuery('#bpm_add_page_button').text(bpm_trans_array['bpm_lng_create_corp_cust']);
                        jQuery('#bpm_add_page_invite_user').show();
                        break;
                    case '117':  //corp supplier
                        jQuery('#bpm_add_page_button').text(bpm_trans_array['bpm_lng_create_corp_supp']);
                        jQuery('#bpm_add_page_invite_user').show();
                        break;
                    case '94':  //cust contact
                        jQuery('#bpm_add_page_button').text(bpm_trans_array['bpm_lng_create_cust']);
                        jQuery('#bpm_add_page_invite_user').show();
                        break;
                    case '108': //supplier contact
                        jQuery('#bpm_add_page_button').text(bpm_trans_array['bpm_lng_create_supp']);
                        jQuery('#bpm_add_page_invite_user').show();
                        break;
                }

                setTimeout(function() {
                    jQuery('#' + bpm_first_field).focus();
                },500);
            }else{
                bpm_create_new_page(0,0);
            }

            //add handler to publish_on_create checkbox to change button name

            jQuery('#publish_on_create').click(function() {
                var $this = jQuery(this);
                if ($this.is(':checked')) {
                    // the checkbox was checked
                    jQuery('#bpm_add_page_button').text(bpm_trans_array['bpm_lng_publish']);
                } else {
                    // the checkbox was unchecked
                    jQuery('#bpm_add_page_button').text(bpm_trans_array['bpm_lng_create_draft']);
                }
            });

            jQuery('#bpm_invite_on_create').click(function() {
                var $this = jQuery(this);
                if ($this.is(':checked')) {
                    // the checkbox was checked
                    jQuery('#bpm_add_page_invite_user_message').show();
                } else {
                    // the checkbox was unchecked
                    jQuery('#bpm_add_page_invite_user_message').hide();
                }
            });
        }

        function bpm_create_add_page_name(this_content, is_quick_doc){

            var this_html = '';
            var pub_now = 0;
            bpm_first_field = '';
            var is_first = 0;

            jQuery.each(this_content,function(index, value) {

                var field_name = value['field_name'];
                if(bpm_trans_array['bpm_infobox_name_'+value['field_name'].replace(' ','_')]){
                    field_name = bpm_trans_array['bpm_infobox_name_'+value['field_name'].replace(' ','_')];
                }

                this_html = this_html.concat('<div class="bpm-row" style="margin-bottom:5px;">');
                this_html = this_html.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left">&nbsp;</div>');
                this_html = this_html.concat('<div class="bpm-small-4 bpm-large-4 bpm-columns text-left">' + field_name + '</div>');
                this_html = this_html.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns text-right"> <input class="bpm_add_page_field error" id="InfoField_' + value['field_index'] + '" type="text"></div>');
                this_html = this_html.concat('</div>');
                if(is_first==0) bpm_first_field = 'InfoField_' + value['field_index'];
                is_first = 1;
                if(value['pub_immediate']== 1 ) pub_now = 1;
            });


            if(pub_now == 1){
                this_html = this_html.concat('<div class="bpm-row" style="margin-bottom:5px;">');
                this_html = this_html.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns text-left">' + bpm_trans_array['bpm_lng_pub_now'] + '</div>');
                if(is_quick_doc==1) {
                    this_html = this_html.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns text-right"> <input class="bpm_add_page_field error" id="quick_doc_publish_on_create" type="checkbox" value="0"/></div>');
                }else {
                    this_html = this_html.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns text-right"> <input class="bpm_add_page_field error" id="publish_on_create" type="checkbox" value="0"/></div>');
                }
                this_html = this_html.concat('</div>');
            }

            return this_html;
        }

        function bpm_create_new_page(name_type, is_quick_doc){

            var new_page_string;

            if(is_quick_doc==1){
                var quick_doc_page_id = jQuery('#bpm_quick_doc_page_id').val();
                new_page_string = '&pageid=' + quick_doc_page_id + '&domain=' + bpm_current_domain + '&action=create_new_page&docid=' + bpm_current_create_page;
                if(jQuery('#quick_doc_publish_on_create').prop('checked')){
                    new_page_string = new_page_string.concat('&publish_on_create=on');
                }
            }else {
                new_page_string = '&pageid=' + bpm_pageid + '&domain=' + bpm_current_domain + '&action=create_new_page&docid=' + bpm_current_create_page;
                if(jQuery('#publish_on_create').prop('checked')){
                    new_page_string = new_page_string.concat('&publish_on_create=on');
                }
            }



            if(jQuery('#bpm_invite_on_create').prop('checked')){
                var post_text = encodeURIComponent(jQuery('#bpm_invite_external_text_add_page').val());
                new_page_string = new_page_string.concat('&send_invite=yes&invite_message='+post_text);
            }

            var error_status = 0;

            bpm_settings['promote_page_headline'] = '';

            if(name_type==1){
                //add fields
                jQuery('.bpm_add_page_field').each(function(i, obj) {
                    if(obj.id != 'publish_on_create' && obj.id != 'quick_doc_publish_on_create') {
                        if (jQuery(this).val().length == 0 || jQuery.trim(jQuery(this).val()).length === 0) {
                            error_status = 1;
                            jQuery(this).css('border', 'solid 1px red');
                        } else {
                            jQuery(this).css('border', '');
                            if(!bpm_settings['promote_page_headline']) bpm_settings['promote_page_headline'] = jQuery(this).val();
                            new_page_string = new_page_string.concat('&' + obj.id + '=' + jQuery(this).val());
                        }
                    }
                });

                if(error_status==1){
                    return;
                }

                jQuery('#bpm_add_page_window').foundation('reveal', 'close');

            }
            bpmcontext.bpm_refresh_page_loading();

            jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', new_page_string, function (result) {

                if(result.external_error){
                    jQuery('#bpm_main_loading_alert').hide();
                    jQuery('#bpm_context_error_alert').html(result.external_error.error_message + '<a href="#" class="close">&times;</a>').show();
                    return;
                }

                if(result.PAGEINFO['page_id']){
                    //refresh page to parent
                    bpmcontext.bpm_load_page('pageid=' + result.PAGEINFO['page_id'] + '&domain=' + bpm_current_domain + '&action=bpmcontext');
                }else{
                    //show error message
                    //jQuery('#bpm_main_error_alert').html(result.response['ERROR']).show().fadeOut(5000);
                }
            });


        }

        function bpm_set_toolbar_options(this_content){

            var has_workflow = 0;
            var has_close = 0;
            var has_button =0;
            jQuery('#bpm_toolbar_action_button_holder').hide();
            jQuery('#bpm_toolbar_admin_undelete').hide();
            jQuery('#bpm_toolbar_options').show();
            jQuery('#bpm_toolbar_talat').show();


            jQuery('#bpm-workflow-button').text(' Workflow');

            if(this_content.UNPUB_CHILD_TEMPLATES){
                var sibling = '';
                jQuery(this_content.UNPUB_CHILD_TEMPLATES).each( function(index, value){
                    var this_library_id = 0;
                    if(value['library_id']) this_library_id = value['library_id'];
                    sibling = sibling.concat('<li class="bpm_ul_li"><a style="text-decoration: none;" id="bpm_toolbar_admin_edit_ws_by_id_'+value['template_index']+'" class="bpm_lng_add_ws" onClick="bpmcontext.bpm_open_template_manager('+value['template_index']+', '+this_library_id+', '+bpm_settings['TEMPLATE_ID']+');">Edit '+value['template_name']+'</a></li>');
                });
                if(sibling) jQuery( '#bpm_toolbar_admin_add_ws' ).after(sibling);
            }

            if(this_content.STOPSHARING == 1){
                jQuery('#bpm_restart_sharing').hide();
                jQuery('#bpm_stop_sharing').show();
            }else{
                jQuery('#bpm_restart_sharing').show();
                jQuery('#bpm_stop_sharing').hide();
            }

            if(this_content.TOOLBAR_BOOKMARKED == 0){
                jQuery('#bpm_toolbar_bookmark').show();
                jQuery('#bpm_toolbar_unbookmark').hide();
            }else{
                jQuery('#bpm_toolbar_bookmark').hide();
                jQuery('#bpm_toolbar_unbookmark').show();
            }
            if(this_content.TOOLBAR_SUBSCRIBED == 0){
                jQuery('#bpm_toolbar_subscribe_page').show();
                jQuery('#bpm_toolbar_unsubscribe_page').hide();
            }else{
                jQuery('#bpm_toolbar_subscribe_page').hide();
                jQuery('#bpm_toolbar_unsubscribe_page').show();
            }
            if(this_content.TOOLBAR_TAGGED == 0){
                jQuery('#bpm_toolbar_tag_page').show();
                jQuery('#bpm_toolbar_untag_page').hide();
            }else{
                jQuery('#bpm_toolbar_tag_page').hide();
                jQuery('#bpm_toolbar_untag_page').show();
            }
            if(bpm_is_root==1) jQuery('#bpm_toolbar_tag_page').hide();

            if(this_content.CANTALAT == 0){
                jQuery('#bpm_toolbar_talat').hide();
            }else{
                bpm_dashboard[99] = this_content.TALATALL;
                jQuery('#bpm_toolbar_talat').show();
            }
            if(this_content.CANPUBLISH == 0){
                jQuery('#bpm_toolbar_publish').hide();
            }else{
                jQuery('#bpm_toolbar_publish').show();
                jQuery('#bpm-workflow-button').text(' Publish');
                bpm_show_action_button('Publish', 'bpm_toolbar_publish');
                has_workflow = 1;
            }
            if(this_content.CANCLOSE == 0){
                jQuery('#bpm_toolbar_close').hide();
            }else{
                jQuery('#bpm_toolbar_close').show();
                has_close = 1;
                bpmcontext.bpm_show_action_button('Close', 'bpm_toolbar_close');
                has_button = 1;
                has_workflow = 1;
            }

            if(this_content.USERCANTERMINATE == 0){
                jQuery('#bpm_toolbar_terminate').hide();
                jQuery('#bpm_toolbar_admin_close').hide();
            }else{
                if(has_close == 1){
                    jQuery('#bpm_toolbar_terminate').hide();
                }else{
                    jQuery('#bpm_toolbar_terminate').show();
                    if(bpm_user_role=='admin') jQuery('#bpm_toolbar_admin_close').show();
                }
                has_workflow = 1;
            }
            if(bpm_user_role=='admin') {
                if (this_content.HIDEWSMGR == 0) {
                    jQuery('#bpm_toolbar_admin_editor').show();
                    jQuery('#bpm_toolbar_admin_edit_ws').show();
                    jQuery('#bpm_toolbar_admin_add_ws').show();
                } else {
                    jQuery('#bpm_toolbar_admin_editor').show();
                    jQuery('#bpm_toolbar_admin_edit_ws').hide();
                    jQuery('#bpm_toolbar_admin_add_ws').show();
                }
            }else{
                jQuery('#bpm_toolbar_admin_editor').hide();
            }
            if(this_content.USERCANDELETE == 0){
                jQuery('#bpm_toolbar_cancel_delete').hide();
                jQuery('#bpm_toolbar_admin_delete').hide();
            }else{
                jQuery('#bpm_toolbar_cancel_delete').show();
                jQuery('#bpm_toolbar_admin_delete').show();
                has_workflow = 1;
            }
            if(this_content.ADMINCANDELETE==1){
                jQuery('#bpm_toolbar_admin_delete').show();
            }
            if(this_content.USERCANRECALL == 0){
                jQuery('#bpm_toolbar_recall').hide();
            }else{
                jQuery('#bpm_toolbar_recall').show();
                has_workflow = 1;
            }
            if(this_content.USERCANROUTEBACK){
                bpm_route_back_users = this_content.USERCANROUTEBACK;
                jQuery('#bpm_toolbar_can_route_back').show();
                has_workflow = 1;
            }else{
                jQuery('#bpm_toolbar_can_route_back').hide();
            }
            jQuery('#bpm_toolbar_can_route_to').hide();
            jQuery('#bpm_toolbar_can_subroute').hide();
            if(this_content.USERCANSUBROUTE){
                bpm_route_users = this_content.USERCANSUBROUTE;
                if(this_content.USERCANSUBROUTE['type']=='route_doc_to'){
                    jQuery('#bpm_toolbar_can_route_to').show();
                    if(has_button==0){
                        bpmcontext.bpm_show_action_button('Route to...', 'bpm_toolbar_can_route_to');
                        has_button = 1;
                    }
                }else {
                    jQuery('#bpm_toolbar_can_subroute').show();
                }
                has_workflow = 1;
            }

            if(this_content.CANROUTE==0) {
                jQuery('#bpm_toolbar_can_route_next').hide();
            }else{
                jQuery('#bpm_toolbar_can_route_next').show();
                has_workflow = 1;
                var this_html = jQuery('#bpm_toolbar_can_route_next').html();
                this_html = this_html.replace(/{name}/g,this_content.ROUTETO);
                jQuery('#bpm_toolbar_can_route_next').html(this_html);
                bpmcontext.bpm_show_action_button(this_html, 'bpm_toolbar_can_route_next');
                has_button = 1;
            }

            if(this_content.USERCANROUTEOWNER){
                //setup route to owner toolbar option
                var this_html = jQuery('#bpm_toolbar_can_route_owner').html();
                this_html = this_html.replace(/{name}/g,this_content.ROUTETO);
                jQuery('#bpm_toolbar_can_route_owner').html(this_html);
                bpmcontext.bpm_show_action_button(this_html, 'bpm_toolbar_can_route_owner');
                has_button = 1;
                jQuery('#bpm_toolbar_can_route_owner').show();
                has_workflow = 1;
            }else{
                jQuery('#bpm_toolbar_can_route_owner').hide();
            }
            if(this_content.USERCANSUBROUTEBACK){
                var this_html = jQuery('#bpm_toolbar_can_subroute_back').html();
                this_html = this_html.replace(/{name}/g,this_content.USERCANSUBROUTEBACK);
                jQuery('#bpm_toolbar_can_subroute_back').html(this_html);
                bpmcontext.bpm_show_action_button(this_html, 'bpm_toolbar_can_subroute_back');
                has_button = 1;
                jQuery('#bpm_toolbar_can_subroute_back').show();
                has_workflow = 1;
            }else{
                jQuery('#bpm_toolbar_can_subroute_back').hide();
            }
            if(has_workflow==0){
                jQuery('#bpm_workflow_menu').hide();
            }else{
                jQuery('#bpm_workflow_menu').show();
            }

            if(this_content.DOCOWNER){

                if(this_content.WFSTATUS == 0) {
                    jQuery('#bpm_toolbar_owner').show().text(bpm_trans_array['bpm_lng_draft'] + ' - ' + bpm_trans_array['bpm_lng_owner'] + ': ' + this_content.DOCOWNER);
                }else if(this_content.WFSTATUS == 1){
                    jQuery('#bpm_toolbar_owner').show().text(bpm_trans_array['bpm_lng_active'] + ' - ' + bpm_trans_array['bpm_lng_owner'] + ': ' + this_content.DOCOWNER);
                }else {
                     jQuery('#bpm_toolbar_owner').show().text('');
                }
            }

            if(this_content.WFSTATUS == 2 && bpm_is_root == 0){
                if(this_content.WORKFLOWTYPE==1) {
                    jQuery('#bpm_toolbar_owner').show().html(bpm_trans_array['bpm_lng_is_published']);
                }else{
                    jQuery('#bpm_toolbar_owner').show().html(bpm_trans_array['bpm_lng_is_closed']);
                }
            }

            if(this_content.WFSTATUS == 2) {
                jQuery('#bpm_toolbar_admin_close').hide();
            }else{
                if(bpm_user_role=='admin') jQuery('#bpm_toolbar_admin_close').show();
            }
            //if(this_content.ADMINCANDELETE == 0) jQuery('#bpm_toolbar_admin_move').hide();
            jQuery('#bpm_toolbar_admin_move').hide();

            if(bpm_user_role != 'admin'){
                jQuery('#bpm_toolbar_admin_delete').hide();
            }

            if(bpm_settings['TEMPLATELIBID'] == 25){
                jQuery('#bpm_toolbar_options').hide();
                jQuery('#bpm_toolbar_talat').hide();
            }

            //page is deleted
            if(this_content.DELETED_STATUS == 2) {
                jQuery('#bpm_toolbar_talat').hide();
                jQuery('#bpm_toolbar_options').hide();
                jQuery('#bpm_toolbar_admin_rename').hide();
                jQuery('#bpm_toolbar_admin_delete').hide();
                jQuery('#bpm_toolbar_admin_move').hide();
                jQuery('#bpm_toolbar_admin_close').hide();
                jQuery('#bpm_toolbar_admin_undelete').show();


            }

        }

        function bpm_confirm_yes_with_publish(){
            bpm_settings['bpm_load_promote'] = 1;
            bpmcontext.bpm_confirm_yes();
        }

        function bpm_confirm_yes(){

            jQuery('#bpm_confirm_cancel_delete').foundation('reveal', 'close');
            jQuery('#bpm_confirm_admin_close').foundation('reveal', 'close');
            jQuery('#bpm_confirm_terminate').foundation('reveal', 'close');

            if(bpm_confirm_option==0) return;

            switch(bpm_confirm_option){
                case 1:
                    //send cancel and delete
                    bpmcontext.bpm_refresh_page_loading();

                    jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + '&action=cancel_delete', function (result) {
                        bpmcontext.bpm_update_dashboard();

                        if(result.response['PARENTDOC']){
                            //refresh page to parent
                            bpmcontext.bpm_load_page('pageid=' + result.response['PARENTDOC'] + '&domain=' + bpm_current_domain + '&action=bpmcontext');
                        }else{
                            //show error message
                            jQuery('#bpm_main_error_alert').html(result.response['ERROR']).show().fadeOut(5000);

                        }

                    });
                    break;
                case 2:
                    //publish
                    bpm_reload_type = 1;
                    bpmcontext.bpm_refresh_page_loading();

                    jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + '&action=publish', function (result) {

                        if(result.response['SUCCESS']){
                            //refresh page

                            bpmcontext.bpm_load_page(bpm_get_string + '&action=bpmcontext', 1);
                        }else{
                            //show error message
                            jQuery('#bpm_main_error_alert').html(result.response['ERROR']).show().fadeOut(5000);

                        }
                    });
                    break;
                case 3:

                    var route_to_user = jQuery("input:radio[name=bpm_route_to_selection]:checked" ).val();

                    if(route_to_user) {
                        bpm_reload_type = 2;
                        bpmcontext.bpm_refresh_page_loading();
                        jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + '&action=sub_route&subrouteto=' + route_to_user, function (result) {
                            if (result.response['SUCCESS']) {
                                //refresh page
                                bpmcontext.bpm_load_page(bpm_get_string + '&action=bpmcontext');
                            } else {
                                //show error message
                                jQuery('#bpm_main_error_alert').html(result.response['ERROR']).show().fadeOut(5000);
                            }
                        });
                    }
                    break;
                case 4:
                    bpm_reload_type = 2;
                    bpmcontext.bpm_refresh_page_loading();
                    jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + '&action=route_owner', function (result) {

                        if(result.response['SUCCESS']){
                            //refresh page
                            bpmcontext.bpm_load_page(bpm_get_string + '&action=bpmcontext');
                        }else{
                            //show error message
                            jQuery('#bpm_main_error_alert').html(result.response['ERROR']).show().fadeOut(5000);
                        }
                    });
                    break;
                case 5:
                    //recall
                    bpmcontext.bpm_refresh_page_loading();
                    jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + '&action=recall', function (result) {

                        if(result.response['SUCCESS']){
                            //refresh page
                            bpmcontext.bpm_load_page(bpm_get_string + '&action=bpmcontext');
                        }else{
                            //show error message
                            jQuery('#bpm_main_error_alert').html(result.response['ERROR']).show().fadeOut(5000);
                        }
                    });
                    break;
                case 6:
                    //terminate or admin close
                    bpmcontext.bpm_refresh_page_loading();
                    jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + '&action=admin_close', function (result) {

                        if(result.response['SUCCESS']){
                            //refresh page
                            bpmcontext.bpm_load_page(bpm_get_string + '&action=bpmcontext');
                        }else{
                            //show error message
                            jQuery('#bpm_main_error_alert').html(result.response['ERROR']).show().fadeOut(5000);
                        }
                    });
                    break;
                case 7:
                    //sub_route_back
                    bpm_reload_type = 2;
                    bpmcontext.bpm_refresh_page_loading();
                    jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + '&action=sub_route_back', function (result) {

                        if(result.response['SUCCESS']){
                            //refresh page
                            bpmcontext.bpm_load_page(bpm_get_string + '&action=bpmcontext');
                        }else{
                            //show error message
                            jQuery('#bpm_main_error_alert').html(result.response['ERROR']).show().fadeOut(5000);

                        }
                    });
                    break;
                case 8:
                    //route next
                    bpm_reload_type = 2;
                    bpmcontext.bpm_refresh_page_loading();
                    jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + '&action=next_routing', function (result) {

                        if(result.response['SUCCESS']){
                            //refresh page
                            bpmcontext.bpm_load_page(bpm_get_string + '&action=bpmcontext');
                        }else{
                            //show error message
                            jQuery('#bpm_main_error_alert').html(result.response['ERROR']).show().fadeOut(5000);

                        }
                    });
                    break;
                case 9:
                    var route_to_user = jQuery("input:radio[name=bpm_route_to_selection]:checked" ).val();

                    if(route_to_user) {
                        bpm_reload_type = 2;
                        bpmcontext.bpm_refresh_page_loading();
                        jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + '&action=route_back&subrouteto=' + route_to_user, function (result) {
                            if (result.response['SUCCESS']) {
                                //refresh page
                                bpmcontext.bpm_load_page(bpm_get_string + '&action=bpmcontext');
                            } else {
                                //show error message
                                jQuery('#bpm_main_error_alert').html(result.response['ERROR']).show().fadeOut(5000);
                            }
                        });
                    }
                    break;
                case 10:

                    var querystring = 'domain=' + bpm_current_domain + "&action=restart_sharing&pageid=" + bpm_pageid;

                    jQuery.getJSON('https://'+bpm_settings['bpm_server']+'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function(result){
                        if(result.TRANSTATUS){
                            if(result.TRANSTATUS == 1){
                                jQuery('#bpm_restart_sharing').hide();
                                jQuery('#bpm_stop_sharing').show();
                            }else{
                                jQuery('#bpm_main_error_alert').html('Restart sharing failed.  Please try again').show()
                            }
                        }
                    });

                    break;
            }

        }

        function bpm_load_page(this_address){

            bpm_confirm_option = 0;
            if(bpm_is_loading==0) {
                bpm_user_list = '';
                bpm_is_loading = 1;
                bpm_start = Date.now();

                jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', this_address, function (result) {

                    if(result) {
                        bpm_settings['bpm_login_status'] = Number(result.LOGGEDIN);

                        jQuery('#bpm_content_area').html(bpm_template);

                        jQuery('#bpm_page_loading_alert').hide();
                        bpmcontext.bpm_build_page(result);
                        bpmcontext.bpm_update_dashboard();
                        bpm_is_loading = 0;
                    }
                });
            }
        }


        function bpm_confirm_no(selected_object){
            bpm_confirm_option = 0;
            bpm_delete_from = 0;
            jQuery('.bpm_toolbar_options_dd').show();
            jQuery('#'+selected_object).foundation('reveal', 'close');
        }

        function bpm_add_to_talat_list(this_id){

            var this_item = '';
            this_item = this_item.concat('<div class="bpm-row" id="bpm_talat_user_added_' + this_id + '">');
            this_item = this_item.concat(jQuery('#bpm_talat_user_all_'+ this_id).clone().html());
            this_item = this_item.replace(/bpm_add_to_talat_list/g,'bpm_remove_from_talat_list');
            this_item = this_item.concat('</div >');

            jQuery('#bpm_send_to_list').prepend(this_item);
            jQuery('#bpm_talat_user_all_'+ this_id).hide();
            jQuery('#bpm_talat_user_fav_'+ this_id).hide();
        }

        function bpm_remove_from_talat_list(this_id){

            jQuery('#bpm_talat_select_fav_'+ this_id).prop('checked', false);
            jQuery('#bpm_talat_select_all_'+ this_id).prop('checked', false);
            jQuery('#bpm_talat_user_all_'+ this_id).show();
            jQuery('#bpm_talat_user_fav_'+ this_id).show();
            jQuery('#bpm_talat_user_added_' + this_id).remove();

        }

        function bpm_make_user_list(fav_content, all_content){

            var html_line = '';

            if(fav_content) {
                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns">Favorites</div>');
                html_line = html_line.concat('</div >');
            }

            jQuery.each(fav_content,function(index, value) {
                html_line = html_line.concat('<div class="bpm-row" id="bpm_talat_user_fav_' +value['user_id']+'">');
                html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns" ><input onclick="bpmcontext.bpm_add_to_talat_list(' +value['user_id']+')" type="checkbox" name="bpm_talat_select" id="bpm_talat_select_fav_' +value['user_id']+'" value="bpm_talat_select_' + value['user_id']+'"></div >');
                html_line = html_line.concat('<div class="bpm-small-10 bpm-large-10 bpm-columns" >' + value['real_name'] + '</div >');
                html_line = html_line.concat('</div >');
            });

            if(html_line.length > 0) html_line = html_line.concat('<hr>');
            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns">All Users</div>');
            html_line = html_line.concat('</div >');

            jQuery.each(all_content,function(index, value) {
                html_line = html_line.concat('<div class="bpm-row" id="bpm_talat_user_all_' +value['user_id']+'">');
                html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns" ><input onclick="bpmcontext.bpm_add_to_talat_list(' +value['user_id']+')" type="checkbox"  name="bpm_talat_select" id="bpm_talat_select_all_' + value['user_id']+'" value="bpm_talat_select_'+ value['user_id']+'"></div >');
                html_line = html_line.concat('<div class="bpm-small-10 bpm-large-10 bpm-columns" >' + value['real_name'] + '</div >');
                html_line = html_line.concat('</div >');
            });

            return html_line;
        }

        function bpm_make_route_list(user_list){

            if(user_list) {
                var bpm_grid_data = '';

                jQuery.each(user_list['users'], function (index, value) {
                    bpm_grid_data = bpm_grid_data.concat('<div class="bpm-row">');
                    bpm_grid_data = bpm_grid_data.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left" ><input type="radio" name="bpm_route_to_selection" value="' + value['user_id'] + '" id="bpm_selected_route_to_' + value['user_id'] + '" > </div>');
                    bpm_grid_data = bpm_grid_data.concat('<div class="bpm-small-10 bpm-large-10 bpm-columns text-left" >' + value['real_name'] + ' </div>');
                    bpm_grid_data = bpm_grid_data.concat('</div>');
                });

                jQuery('#bpm_route_to_reveal_list').html(bpm_grid_data);

                jQuery('#bpm_get_route_to_user').foundation('reveal', 'open');
            }
        }

        function bpm_action_button(){
            bpmcontext.bpm_action({id:bpm_action_button_val});
        }

        function bpm_send_stop_sharing(){

            jQuery('#bpm_stop_sharing_window').foundation('reveal', 'close');

            var post_text = encodeURIComponent(jQuery('#bpm_edit_stop_sharing_text').val());
            if(post_text.length == 0) return;

            //post message
            var querystring = 'domain=' + bpm_current_domain + "&action=stop_sharing&pageid=" + bpm_pageid + "&reason=" + post_text;

            jQuery.getJSON('https://'+bpm_settings['bpm_server']+'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function(result){
                if(result.TRANSTATUS){
                    if(result.TRANSTATUS == 1){
                        jQuery('#bpm_restart_sharing').show();
                        jQuery('#bpm_stop_sharing').hide();
                        jQuery('#bpm_edit_stop_sharing_text').val('');
                        bpmcontext.bpm_set_right_content_options(result);
                    }else{
                        jQuery('#bpm_main_error_alert').html('Stop sharing failed.  Please try again').show()
                    }
                }
            });

        }

        function bpm_change_name() {

            jQuery('#bpm_rename_error_alert').hide();
            var name_text = jQuery('#bpm_admin_rename_field').val();

            if(name_text.length == 0){
                jQuery('#bpm_rename_error_alert').text(bpm_trans_array['bpm_lng_enter_page_name']).show();
                return;
            }
            var querystring = 'domain=' + bpm_current_domain + "&action=rename_page&pageid=" + bpm_pageid + "&name=" + name_text;

            jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function (result) {

                if(result) {
                    if (result.TRANSTATUS == 1) {
                        jQuery('#bpm_rename_window').foundation('reveal', 'close');
                        jQuery('#bpm_main_loading_alert').show();
                        bpmcontext.bpm_load_page(bpm_get_string + '&action=bpmcontext');
                    } else {
                        jQuery('#bpm_rename_error_alert').text(bpm_trans_array['bpm_lng_page_exists']).show();
                    }
                }
            });
        }

        function bpm_clear_ws_tutorial(tutorial_id){
            bpmcontext.bpm_clear_tutorial(tutorial_id);
            bpmcontext.bpm_show_ws_tutorial(tutorial_id);
        }

        function bpm_show_ws_tutorial(tutorial_id) {

            jQuery('#bpm-admin-help-info').html(jQuery('#bpm_functional_tutorial_'+tutorial_id).html());
            bpmcontext.bpm_clear_tutorial(tutorial_id);

        }

        function bpm_save_workspace(){

            if(!bpm_settings['ws_processing']) {

                bpm_settings['ws_processing'] = 1;

                jQuery('#bpm_ws_success_message_unpub').hide();

                jQuery('.bpm_ws_cancel_button').css('background-color', 'gray').attr('disabled', 'disabled');
                jQuery('.bpm_ws_save_button').css('background-color', 'gray').attr('disabled', 'disabled');

                jQuery('#bpm_ws_deisgner_activity_cover').show();

                //check for errors
                var error_list = [];

                var querystring = 'domain=' + bpm_current_domain + "&action=update_workspace&id_templ=" + bpm_settings['THIS_TEMPLATE_ID'];

                jQuery(bpm_settings['ws_error_list']).each(function (index, value) {
                    jQuery('#' + value).css('border-color', '');
                });

                //check for general section errors


                if (!bpmcontext.bpm_test_field_for_blank(jQuery('#bpm_template_name_edit_ws').val())) error_list.push('bpm_template_name_edit_ws');

                //setup fields
                querystring = querystring.concat('&library=no');
                querystring = querystring.concat('&act=savetemplate');
                querystring = querystring.concat('&ti[isrequired]=yes');

                querystring = querystring.concat('&ti[parent]=' + bpm_settings['THIS_PARENT_TEMPLATE']);
                var can_create = '0';
                if (jQuery('#bpm_template_ext_can_create_visible_ws_ext').val() == 'yes') can_create = '1';
                querystring = querystring.concat('&ti[external_can_create]=' + can_create);
                //get workspace name
                querystring = querystring.concat('&ti[template_name]=' + jQuery('#bpm_template_name_edit_ws').val());
                //get workspace type
                if (jQuery('#bpm_template_type_ws').val() == 0) {
                    error_list.push('bpm_template_type_ws');
                } else {
                    var workflow_type = jQuery('#bpm_template_type_ws').val();
                    if(workflow_type == 5){
                        querystring = querystring.concat('&ti[workflow_type]=1&is_shared_ext=1');
                    }else {
                        querystring = querystring.concat('&is_shared_ext=0&ti[workflow_type]=' + workflow_type);
                    }
                }

                var edit_rights = jQuery('#bpm_template_edit_rights_ws').val();
                querystring = querystring.concat('&ti[edit_rights]='+edit_rights);
                var edit_rights = jQuery('#bpm_template_create_rights_ws').val();
                querystring = querystring.concat('&ti[create_rights]='+edit_rights);

                //get workspace published status
                var is_published = jQuery('#bpm_template_status_ws').val();
        //    if(jQuery('#bpm_template_status_ws').val()=='yes') is_published = 'yes';
                querystring = querystring.concat('&ti[published]=' + is_published);
                //get section information
                //add delted sections
                jQuery(bpm_settings['deleted_sections']).each(function (index, value) {
                    querystring = querystring.concat('&ti[parts_of_deleted][sections][]=' + value);
                });

                jQuery(bpm_settings['deleted_info']).each(function (index, value) {
                    querystring = querystring.concat('&ti[parts_of_deleted][infobox][]=' + value);
                });
                if (bpm_settings['no_delete_naming']) {
                    jQuery(bpm_settings['deleted_naming']).each(function (index, value) {
                        querystring = querystring.concat('&ti[parts_of_deleted][rules][]=' + value);
                    });
                }
                jQuery(bpm_settings['deleted_routing']).each(function (index, value) {
                    querystring = querystring.concat('&ti[parts_of_deleted][routing][]=' + value);
                });


                jQuery('.bpm_ws_type_section').each(function (index, value) {

                    var id_parts = jQuery(this).prop('id').split('_');

                    if (jQuery(this).prop('id').indexOf("bpm_section_name_new_") >= 0) {
                        //clear errors

                        jQuery('#bpm_section_name_new_' + id_parts[4]).css('border-color', '');
                        jQuery('#bpm_template_section_type_ws_new_' + id_parts[4]).css('border-color', '');

                        //check for errors
                        if (!bpmcontext.bpm_test_field_for_blank(jQuery('#bpm_section_name_new_' + id_parts[4]).val())) error_list.push('bpm_section_name_new_' + id_parts[4]);
                        if (jQuery('#bpm_template_section_type_ws_new_' + id_parts[4]).val() == 0) error_list.push('bpm_template_section_type_ws_new_' + id_parts[4]);

                        if (error_list.length == 0) {
                            //TODO - fix for new section id
                            querystring = querystring.concat('&ti[sections][' + index + '][section_id]=' + id_parts[4]);
                            querystring = querystring.concat('&ti[sections][' + index + '][section_number]=' + index);
                            querystring = querystring.concat('&ti[sections][' + index + '][section_name]=' + jQuery('#bpm_section_name_new_' + id_parts[4]).val());
                            querystring = querystring.concat('&ti[sections][' + index + '][section_type]=' + jQuery('#bpm_template_section_type_ws_new_' + id_parts[4]).val());
                            querystring = querystring.concat('&ti[sections][' + index + '][section_configured]=');
                            querystring = querystring.concat('&ti[sections][' + index + '][section_visible]=' + jQuery('#bpm_template_sect_visible_ws_new_' + id_parts[4]).val());
                            querystring = querystring.concat('&ti[sections][' + index + '][section_target]=');
                        }

                    } else {
                        //clear errors
                        jQuery('#bpm_section_name_' + id_parts[3]).css('border-color', '');

                        //check for errors
                        if (!bpmcontext.bpm_test_field_for_blank(jQuery('#bpm_section_name_' + id_parts[3]).val())) {
                            error_list.push('bpm_section_name_' + id_parts[3]);
                        } else {

                            querystring = querystring.concat('&ti[sections][' + index + '][section_id]=' + id_parts[3]);
                            querystring = querystring.concat('&ti[sections][' + index + '][section_number]=' + index);
                            querystring = querystring.concat('&ti[sections][' + index + '][section_name]=' + jQuery('#bpm_section_name_' + id_parts[3]).val());
                            var section_type = '';
                            if (!jQuery('#bpm_template_section_type_ws_' + id_parts[3]).val()) {
                                section_type = jQuery('#bpm_ws_hidden_sect_type_' + id_parts[3]).text();
                            } else {
                                section_type = jQuery('#bpm_template_section_type_ws_' + id_parts[3]).val();
                            }
                            querystring = querystring.concat('&ti[sections][' + index + '][section_type]=' + section_type);
                            querystring = querystring.concat('&ti[sections][' + index + '][section_configured]=');
                            querystring = querystring.concat('&ti[sections][' + index + '][section_visible]=' + jQuery('#bpm_template_sect_visible_ws_' + id_parts[3]).val());
                            querystring = querystring.concat('&ti[sections][' + index + '][section_target]=');
                        }
                    }
                });

                //get infobox information
                jQuery('.bpm_ws_type_info').each(function (index, value) {

                    var id_parts = [];
                    id_parts = jQuery(this).prop('id').split('_');

                    if (id_parts[3] >= 990000) {
                        //clear errors
                        jQuery('#bpm_infobox_name_' + id_parts[3]).css('border-color', '');
                        jQuery('#bpm_template_info_type_ws_' + id_parts[3]).css('border-color', '');

                        //check for errors
                        var new_errors = [];
                        //if (!bpmcontext.bpm_test_field_for_blank(jQuery('#bpm_infobox_name_' + id_parts[3]).val())) new_errors.push('bpm_infobox_name_' + id_parts[3]);
                        if (jQuery('#bpm_template_info_type_ws_' + id_parts[4]).val() == 0) new_errors.push('bpm_template_info_type_ws_' + id_parts[3]);


                        if (new_errors.length == 0) {

                            if (bpmcontext.bpm_test_field_for_blank(jQuery('#bpm_infobox_name_' + id_parts[3]).val())) {

                                var this_source_value = '';

                                if (jQuery('#bpm_template_info_type_ws_' + id_parts[3]).val() == 6) {
                                    var ib_parts = jQuery('#bpm_template_info_type_ws_' + id_parts[3] + ' option:selected').text().split(':');
                                    this_source_value = ib_parts[ib_parts.length - 1];
                                }

                                querystring = querystring.concat('&ti[infobox][' + index + '][infobox_id]=' + id_parts[3]);
                                querystring = querystring.concat('&ti[infobox][' + index + '][infobox_name]=' + jQuery('#bpm_infobox_name_' + id_parts[3]).val());
                                querystring = querystring.concat('&ti[infobox][' + index + '][infobox_type]=' + jQuery('#bpm_template_info_type_ws_' + id_parts[3]).val());
                                querystring = querystring.concat('&ti[infobox][' + index + '][infobox_order]=' + index);
                                querystring = querystring.concat('&ti[infobox][' + index + '][infobox_editable]=' + jQuery('#bpm_template_info_edit_visible_ws_' + id_parts[3]).val());
                                querystring = querystring.concat('&ti[infobox][' + index + '][infobox_source]=');
                                querystring = querystring.concat('&ti[infobox][' + index + '][infobox_source_value]=' + this_source_value);
                                querystring = querystring.concat('&ti[infobox][' + index + '][infobox_configuration]=yes');
                                querystring = querystring.concat('&ti[infobox][' + index + '][infobox_inherit]=');
                                querystring = querystring.concat('&ti[infobox][' + index + '][infobox_visible]=' + jQuery('#bpm_template_info_visible_visible_ws_' + id_parts[3]).val());
                                querystring = querystring.concat('&ti[infobox][' + index + '][infobox_target]=');
                            }
                        }
                    } else {
                        //clear errors
                        jQuery('#bpm_infobox_name_' + id_parts[3]).css('border-color', '');

                        //check for errors
                        if (!bpmcontext.bpm_test_field_for_blank(jQuery('#bpm_infobox_name_' + id_parts[3]).val())) error_list.push('bpm_infobox_name_' + id_parts[3]);

                        if (error_list.length == 0) {
                            var this_source_value = '';
                            if (jQuery('#bpm_template_info_type_ws_' + id_parts[3]).val() == 6) {
                                var ib_parts = jQuery('#bpm_template_info_type_ws_' + id_parts[3] + ' option:selected').text().split(':');
                                this_source_value = ib_parts[ib_parts.length - 1];
                            }

                            if (jQuery('#bpm_ws_hidden_info_type_' + id_parts[3]).length) {
                                var ib_parts = jQuery('#bpm_template_info_type_ws_' + id_parts[3]).text().split(':');
                                this_source_value = ib_parts[ib_parts.length - 1];
                            }


                            querystring = querystring.concat('&ti[infobox][' + index + '][infobox_id]=' + id_parts[3]);
                            querystring = querystring.concat('&ti[infobox][' + index + '][infobox_name]=' + jQuery('#bpm_infobox_name_' + id_parts[3]).val());

                            var infobox_type = '';
                            if (jQuery('#bpm_ws_hidden_info_type_' + id_parts[3]).length) {
                                infobox_type = jQuery('#bpm_ws_hidden_info_type_' + id_parts[3]).text();
                            } else {
                                infobox_type = jQuery('#bpm_template_info_type_ws_' + id_parts[3]).val();
                            }


                            querystring = querystring.concat('&ti[infobox][' + index + '][infobox_type]=' + infobox_type);
                            querystring = querystring.concat('&ti[infobox][' + index + '][infobox_order]=' + index);
                            querystring = querystring.concat('&ti[infobox][' + index + '][infobox_editable]=' + jQuery('#bpm_template_info_edit_visible_ws_' + id_parts[3]).val());
                            querystring = querystring.concat('&ti[infobox][' + index + '][infobox_source]=');
                            querystring = querystring.concat('&ti[infobox][' + index + '][infobox_source_value]=' + this_source_value);
                            querystring = querystring.concat('&ti[infobox][' + index + '][infobox_configuration]=yes');
                            querystring = querystring.concat('&ti[infobox][' + index + '][infobox_inherit]=');
                            querystring = querystring.concat('&ti[infobox][' + index + '][infobox_visible]=' + jQuery('#bpm_template_info_visible_visible_ws_' + id_parts[3]).val());
                            querystring = querystring.concat('&ti[infobox][' + index + '][infobox_target]=');
                        }
                    }

                });


                //bpm_prefix_ws_name
                //get naming information
                querystring = querystring.concat('&ti[isprefix]=' + jQuery('#bpm_prefix_ws_name').val());
                var isprefixparent = 0;
                if (jQuery('#bpm_prefix_ws_name').val() == 'yes') isprefixparent = '1';
                querystring = querystring.concat('&ti[isprefixparent]=' + isprefixparent);

                jQuery('.bpm_ws_type_naming').each(function (index, value) {

                    var id_parts = [];
                    id_parts = jQuery(this).prop('id').split('_');

                    if (jQuery('#bpm_template_type_ws_naming_' + id_parts[id_parts.length - 1]).val() == 20) {
                        if (!bpmcontext.bpm_test_field_for_blank(jQuery('#bpm_ws_display_name_' + id_parts[id_parts.length - 1]).val())) error_list.push('bpm_ws_display_name_' + id_parts[id_parts.length - 1]);
                    }

                    querystring = querystring.concat('&ti[doc_naming][' + index + '][naming_id]=' + id_parts[id_parts.length - 1]);
                    querystring = querystring.concat('&ti[doc_naming][' + index + '][name_type]=' + jQuery('#bpm_template_type_ws_naming_' + id_parts[id_parts.length - 1]).val());
                    querystring = querystring.concat('&ti[doc_naming][' + index + '][workflow_name]=' + jQuery('#bpm_ws_display_name_' + id_parts[id_parts.length - 1]).val());
                    var target_infobox = '';
                    if (jQuery('#bpm_template_ws_target_infobox_' + id_parts[id_parts.length - 1] + ' option:selected').val() > 0) {
                        target_infobox = jQuery('#bpm_template_ws_target_infobox_' + id_parts[id_parts.length - 1] + ' option:selected').text();
                    }
                    querystring = querystring.concat('&ti[doc_naming][' + index + '][infobox_name]=' + target_infobox);

                    if (jQuery('#bpm_template_type_ws_naming_' + id_parts[id_parts.length - 1]).val() == 20) {
                        querystring = querystring.concat('&ti[doc_naming][' + index + '][is_visible]=yes');
                    } else {
                        querystring = querystring.concat('&ti[doc_naming][' + index + '][is_visible]=no');
                    }

                });

                //get sharing information

                jQuery('.bpm_ws_manager_field_cb').each(function (index, value) {
                    var id_parts = [];
                    id_parts = jQuery(this).prop('id').split('_');

                    var this_value = 0;

                    if (jQuery(this).is(':checked')) this_value = 1;

                    //get sections and infoboxes
                    if (jQuery(this).prop('id').indexOf("bpm_shared_cb_item_section_") >= 0) {
                        querystring = querystring.concat('&ti[sharing][sections][' + id_parts[5] + '][' + id_parts[6] + ']=' + this_value);
                    } else {
                        querystring = querystring.concat('&ti[sharing][infoboxes][' + id_parts[5] + '][' + id_parts[6] + ']=' + this_value);
                    }
                });


                //get routing information

                jQuery('.bpm_ws_type_routing').each(function (index, value) {

                    var id_parts = [];
                    id_parts = jQuery(this).prop('id').split('_');
                    var this_id = id_parts[id_parts.length - 1];


                    if (jQuery('#bpm_template_ws_routing_dd_' + this_id).val() == 0) error_list.push('bpm_template_ws_routing_dd_' + this_id);

                    if (error_list.length == 0) {

                        querystring = querystring.concat('&ti[routing][' + index + '][routing_id]=' + this_id);
                        querystring = querystring.concat('&ti[routing][' + index + '][routing_user]=' + jQuery('#bpm_template_ws_routing_dd_' + this_id).val());
                        querystring = querystring.concat('&ti[routing][' + index + '][routing_order]=' + index);
                        querystring = querystring.concat('&ti[routing][' + index + '][routing_name]=' + jQuery('#bpm_routing_step_' + this_id).val());
                        querystring = querystring.concat('&ti[routing][' + index + '][routing_goal_time_count]=' + jQuery('#bpm_routing_time_' + this_id).val());
                        querystring = querystring.concat('&ti[routing][' + index + '][routing_goal_time_type]=' + jQuery('#bpm_template_type_ws_esc_time_' + this_id).val());
                        if (jQuery('#bpm_template_ws_escalate_to_dd_' + this_id).val() > 0) querystring = querystring.concat('&ti[routing][' + index + '][routing_escalate]=' + jQuery('#bpm_template_ws_escalate_to_dd_' + this_id).val());
                        querystring = querystring.concat('&ti[routing][' + index + '][routing_escalate_time_count]=1');
                        querystring = querystring.concat('&ti[routing][' + index + '][routing_escalate_time_type]=minute');

                    }


                });

                if (error_list.length > 0) {

                    jQuery('.bpm_ws_cancel_button').css('background-color', '#008cba').removeAttr('disabled');
                    bpm_settings['ws_error_list'] = error_list;

                    jQuery('#bpm_ws_deisgner_activity_cover').hide();

                    bpm_ws_enable_save();
                    jQuery('#bpm_ws_error_message').show();

                    jQuery(error_list).each(function (index, value) {
                        jQuery('#' + value).css('border-color', 'red');
                    });

                    bpm_settings['ws_processing'] = 0;

                } else {
                    jQuery('#bpm_ws_error_message').hide();

                    bpm_settings['ws_reload_page'] = 1;

                    jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/' + bpm_settings['bpm_api'] + '/bpmcontext_wordpress.php?callback=?', querystring, function (result) {

                        bpm_settings['ws_processing'] = 0;

                        if (result) {

                            jQuery('#bpm_ws_error_message').hide();

                            bpm_settings['workspace_manager_vars'] = result;

                            if (jQuery('#bpm_template_status_ws').val() == 'no') {
                                jQuery('#bpm_ws_success_message_unpub').show();
                            } else {
                                jQuery('#bpm_ws_success_message').show();
                            }

                            jQuery('.bpm_ws_cancel_button').css('background-color', '#008cba').removeAttr('disabled');
                            jQuery('#bpm_ws_deisgner_activity_cover').hide();

                            setTimeout(function () {
        //                        jQuery('#bpm_ws_success_message_unpub').hide();
                                jQuery('#bpm_ws_success_message').hide();

                            }, 4000);


                            jQuery(bpm_settings['ws_error_list']).each(function (index, value) {
                                jQuery('#' + value).css('border-color', '');
                            });

                            bpm_settings['THIS_ADDING_WS'] = 0;
                            bpm_settings['deleted_sections'] = [];
                            bpm_settings['deleted_infobox'] = [];
                            bpm_settings['deleted_naming'] = [];
                            bpm_settings['deleted_routing'] = [];
                            bpm_settings['no_delete_naming'] = 0;

                            bpm_settings['THIS_TEMPLATE_ID'] = result['TEMPLATE_INFO']['template_id'];
                            jQuery('#bpm_ws_master_save_buttons').show();


                            var html_line = '';
                            html_line = html_line.concat(bpm_ws_manager_general_info());
                            html_line = html_line.concat(bpm_ws_manager_section());
                            html_line = html_line.concat(bpm_ws_manager_infoboxes());
                            html_line = html_line.concat(bpm_ws_manager_naming());
                            html_line = html_line.concat(bpm_ws_manager_sharing());
                            html_line = html_line.concat(bpm_ws_manager_routing());

                            jQuery('#bpm_workspace_manager_content').html(html_line);

                            bpmcontext.bpm_update_default_rules(1);
                            bpmcontext.bpm_ws_manager_add_actions();

                            bpmcontext.bpm_ws_disable_save();
                        } else {
                            bpmcontext.bpm_ws_enable_save();
                        }
                    })
                }
            }

        }

        function bpm_ws_manager_general_info(){

            var template_name = '';
            var template_parent = '';

            var result = bpm_settings['workspace_manager_vars'];
            if(result){
                template_name = result['TEMPLATE_INFO']['template_name'];
                jQuery('#bpm_workspace_manager_reveal_title').text('Workspace Designer - '+template_name);
            }else{
                jQuery('#bpm_workspace_manager_reveal_title').text('Workspace Designer - New Workspace');
            }

            if(!result) result = bpm_settings['workspace_manager_new_vars'];
            if(!result) return;

            template_parent = bpm_settings['ws_parent_template'];

            var html_line = '';

            html_line = html_line.concat('<div id="bpm_ws_tutorial_2000" class="bpm-hide bpm-ws_tutorial-wrapper"></div>');

            var lib_hide = '';
            var text_style = '';
            var allowed_array = [];
            allowed_array.push('1','2','94','112');

            if((allowed_array.indexOf(bpm_settings['THIS_LIBRARY_ID']) < 0 && bpm_settings['THIS_LIBRARY_ID'] > 0) && bpm_settings['THIS_ADDING_WS']==0){
                lib_hide = 'bpm-hide';
                text_style = 'style="margin-bottom:1.5em;"';
            }

            //build general info section
            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-9 bpm-large-9 bpm-columns text-left" >Workspace Settings&nbsp;<a id="bpm_ws_designer_ws_settings_help" onClick="bpmcontext.bpm_show_ws_tutorial(2001)"><span class="fa fa-question-circle bpm-wsd-help-icon"></span></a> </div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-right bpm_tutorial_text" >&nbsp; </div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-right" >'+bpm_create_ws_save_message(1)+' </div>');
            html_line = html_line.concat('</div><br>');

            html_line = html_line.concat('<div id="bpm_ws_tutorial_2001" class="bpm-hide bpm-ws_tutorial-wrapper" ></div>');

            if(template_parent) {
                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
                html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >Parent Workspace Name:</div>');
                html_line = html_line.concat('<div class="bpm-small-8 bpm-large-8 bpm-columns text-left bpm_tutorial_text" style="margin-bottom:1.5em;">' + template_parent + ' </div>');
                html_line = html_line.concat('</div>');
            }

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >Workspace Name:</div>');
            html_line = html_line.concat('<div class="bpm-small-8 bpm-large-8 bpm-columns text-left bpm_tutorial_text" '+text_style+'>' + bpmcontext.bpm_create_text_field('Workspace Template Name', 'bpm_template_name', 'bpm_template_name_edit_ws',  template_name , '', lib_hide) + ' </div>');
            html_line = html_line.concat('</div>');

            var type_dd = '<select class="bpm_ws_manager_field" id="bpm_template_type_ws" onchange="bpmcontext.bpm_routing_section_display()">';

            var consumer_selected = '';
            var serial_selected = '';
            var target_selected = '';
            var private_selected = '';
            var ext_shared_selected = '';

            var all_selected = 'selected';
            var admin_selected = '';
            var all_create_selected = 'selected';
            var admin_create_selected = '';

            if(result) {
                switch (result['TEMPLATE_INFO']['template_type']) {
                    case '1':
                        if(result['TEMPLATE_INFO']['external_sharing_info']['is_shared_ext'] == 1){
                            ext_shared_selected = 'selected';
                        }else {
                            consumer_selected = 'selected';
                        }
                        break
                    case '2':
                        serial_selected = 'selected';
                        break;
                    case '3':
                        target_selected = 'selected';
                        break;
                    case '4':
                        private_selected = 'selected';
                        break;
                }

                if(result['TEMPLATE_INFO']['template_edit']) {
                    if (result['TEMPLATE_INFO']['template_edit'] == 2) {
                        all_selected = '';
                        admin_selected = 'selected';
                    }
                }
                if(result['TEMPLATE_INFO']['template_create']) {
                    if (result['TEMPLATE_INFO']['template_create'] == 2) {
                        all_create_selected = '';
                        admin_create_selected = 'selected';
                    }
                }
            }else{
                type_dd = type_dd.concat('<option selected value="0">Select workspace type...</option>');
            }

            type_dd = type_dd.concat('<option '+consumer_selected+' value="1">'+bpm_trans_array['bpm_lng_consumer_desc']+'</option>');
            type_dd = type_dd.concat('<option '+serial_selected+' value="2">'+bpm_trans_array['bpm_lng_serial_desc']+'</option>');
            type_dd = type_dd.concat('<option '+target_selected+' value="3">'+bpm_trans_array['bpm_lng_targeted_desc']+'</option>');
            if(bpm_settings['THIS_ADDING_WS'] == 0) {
                if (result['TEMPLATE_INFO']['external_sharing_info']['can_share_ext'] == 1) {
                    type_dd = type_dd.concat('<option ' + ext_shared_selected + ' value="5">' + bpm_trans_array['bpm_lng_external_shared_desc'] + '</option>');
                }
            }
            type_dd = type_dd.concat('</select>');


            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >Workspace Type:</div>');
            html_line = html_line.concat('<div class="bpm-small-8 bpm-large-8 bpm-columns text-left bpm_tutorial_text" >' + type_dd + ' </div>');
            html_line = html_line.concat('</div>');

            var edit_dd = '<select class="bpm_ws_manager_field" id="bpm_template_edit_rights_ws">';
            edit_dd = edit_dd.concat('<option '+all_selected+' value="1">All Users</option>');
            edit_dd = edit_dd.concat('<option '+admin_selected+' value="2">Author, Owner and Admin Only</option>');
            edit_dd = edit_dd.concat('</select>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >Edit Rights:</div>');
            html_line = html_line.concat('<div class="bpm-small-8 bpm-large-8 bpm-columns text-left bpm_tutorial_text" >' + edit_dd + ' </div>');
            html_line = html_line.concat('</div>');

            var create_dd = '<select class="bpm_ws_manager_field" id="bpm_template_create_rights_ws">';
            create_dd = create_dd.concat('<option '+all_create_selected+' value="1">All Users</option>');
            create_dd = create_dd.concat('<option '+admin_create_selected+' value="2">Admin Only</option>');
            create_dd = create_dd.concat('</select>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >Create Rights:</div>');
            html_line = html_line.concat('<div class="bpm-small-8 bpm-large-8 bpm-columns text-left bpm_tutorial_text" >' + create_dd + ' </div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
            html_line = html_line.concat('<div class="bpm-small-11 bpm-large-11 bpm-columns text-left bpm_tutorial_text" >'+bpm_trans_array['bpm_lng_wsd_message']+'</div>');
            html_line = html_line.concat('</div>');



            var unpub_message = '';
            if(result){
                if(result['TEMPLATE_INFO']['has_pub_children'] > 0) {
                    unpub_message = '<li style="list-style-type: square;font-size: .8rem;">You cannot un-publish this workspace as it has published child workspaces.</li>';
                }
            }

            var unpub_message_line = '';
            unpub_message_line = unpub_message_line.concat('<ul>'+unpub_message+'<li style="list-style-type: square;font-size: .8rem;">Unpublished Workspaces are saved in the Admin Menu of the parent page.</li><li style="list-style-type: square;font-size: .8rem;">Published Workspaces are saved in the Workspace map and are available to your users.</li></ul>');

            jQuery('#bpm_ws_unpublished_message').html(unpub_message_line);

            html_line = html_line.concat('<br><hr class="bpm_hr_gray bpm_small_sep"><br>');

            return html_line;
        }

        function bpm_get_pub_dd(result){

            var html_line = '';
            var status_dd = '<select class="bpm_ws_manager_field" id="bpm_template_status_ws" style="width: 14em;">';

            var pub_selected = '';
            var unpub_selected = '';

            if(result) {
                switch (result['TEMPLATE_INFO']['template_status']) {
                    case 'no':
                        unpub_selected = 'selected';
                        break
                    case 'yes':
                        pub_selected = 'selected';
                        break;
                }
            }else{
                unpub_selected = 'selected';
            }

            if(result){
                if(result['TEMPLATE_INFO']['has_pub_children']==0) status_dd = status_dd.concat('<option '+unpub_selected+' value="no">Un-Published</option>');
                status_dd = status_dd.concat('<option '+pub_selected+' value="yes">Published</option>');
                status_dd = status_dd.concat('</select>');
            }else{
                unpub_selected = 'selected';
                status_dd = status_dd.concat('<option '+unpub_selected+' value="no">Un-Published</option>');
                status_dd = status_dd.concat('<option '+pub_selected+' value="yes">Published</option>');
                status_dd = status_dd.concat('</select>');
            }

            return status_dd;
        }

        function bpm_open_acct_mgr(){

            bpmcontext.bpm_open_modal({id:'left_acctmgr'});

        }

        function bpm_buy_ws_message(){

            var acct_mgr_message = '';
            acct_mgr_message = acct_mgr_message.concat('<p>Your two free workspaces are published and active. </p>');
            acct_mgr_message = acct_mgr_message.concat('<p>You will be able to purchase additional workspaces soon. </p>');

            return acct_mgr_message;

        }

        function bpm_open_support(){

            jQuery('#bpm_edit_support_text').val('');
            jQuery('#bpm_support_subject').val('');
            bpm_settings['processing_support'] = 0;
            jQuery('#bpm_feedback_support_content').show();
            jQuery('#bpm_feedback_support_content_reply').hide();
            jQuery('#bpm_ws_support_activity_cover').hide();
            jQuery('#bpm_feedback_support_window').foundation('reveal', 'open');

        }

        function bpm_save_support_text(){

            jQuery('#bpm_ws_support_activity_cover').show();
            if(bpm_settings['processing_support'] == 1) return;
                bpm_settings['processing_support'] = 1;

                var post_text = encodeURIComponent(jQuery('#bpm_edit_support_text').val().replace(/\n/g, "<br>"));
                var subject_text = encodeURIComponent(jQuery('#bpm_support_subject').val().replace(/\n/g, "<br>"));

                var querystring = 'domain=' + bpm_current_domain + '&action=submit_support&subject=' + subject_text + '&message=' + post_text;

                jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/' + bpm_settings['bpm_api'] + '/bpmcontext_wordpress.php?callback=?', querystring, function (result) {

                    jQuery('#bpm_ws_support_activity_cover').show();
                    jQuery('#bpm_feedback_support_content').hide();
                    jQuery('#bpm_feedback_support_content_reply').show();
                });


        }

        function bpm_cancel_support_text(){

            jQuery('#bpm_feedback_support_window').foundation('reveal', 'close');

            if(bpm_settings['using_help_widget']){
                bpmcontext.bpm_open_help_widget();
            }

        }


        function bpm_add_template(purchase_ok) {

            jQuery('#bpm_ws_error_message').hide();

            bpm_settings['ws_reload_page'] = 0;

            bpm_settings['THIS_TEMPLATE_ID'] = '7938759365783';
            bpm_settings['THIS_PARENT_TEMPLATE'] = bpm_settings['TEMPLATE_ID'];
            bpm_settings['THIS_LIBRARY_ID'] = 0;
            bpm_settings['THIS_ADDING_WS'] = 1;
            bpm_settings['deleted_sections'] = [];
            bpm_settings['deleted_infobox'] = [];
            bpm_settings['deleted_naming'] = [];
            bpm_settings['no_delete_naming'] = 0;

            bpm_settings['workspace_manager_vars'] = null;

            var html_line = '';

            if(bpm_settings['WORKSPACES_AVL'] == 0 && !purchase_ok && bpm_settings['WORKSPACES_CUSTOMER'] == 0){
                jQuery('#bpm_ws_master_save_buttons').hide();
                if(bpm_settings['IS_CUSTOMER'] > 0 ){
                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-left bpm_tutorial_text" >You have already utilized your free workspaces.  Click <a class="bpm_links" onClick="bpmcontext.bpm_add_template(1)">continue</a> to add additional workspaces to your account using your current payment method.  You will be charged $20 per month for each additional workspace you publish.  When you unpublish a custom workspace then we will remove it from your account at the next billing period.</div>');
                    html_line = html_line.concat('</div><br>');

                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-left bpm_tutorial_text" >Or you can click <a onClick="bpmcontext.bpm_open_acct_mgr()">here</a> to open the account manager where you can purchase custom workspaces using a different payment method.</div>');
                    html_line = html_line.concat('</div>');

                }else{

//                    html_line = html_line.concat('<div class="bpm-row">');
//                    html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_buy_ws_message() +  ' </div>');
//                    html_line = html_line.concat('</div>');
                }
                jQuery('#bpm_workspace_manager_content').html(html_line);
            }else {
                jQuery('#bpm_ws_master_save_buttons').show();

                var querystring = 'domain=' + bpm_current_domain + "&action=get_new_template_info&templateid=" + bpm_settings['TEMPLATE_ID'];

                jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function (result) {

                    if (result) {

                        bpm_settings['workspace_manager_new_vars'] = result;
                        bpm_settings['ws_parent_template'] = result['TEMPLATE_INFO']['template_name'];

                        html_line = html_line.concat(bpmcontext.bpm_ws_manager_general_info());
                        html_line = html_line.concat(bpmcontext.bpm_ws_manager_section());
                        html_line = html_line.concat(bpmcontext.bpm_ws_manager_infoboxes());
                        html_line = html_line.concat(bpmcontext.bpm_ws_manager_naming());
                        html_line = html_line.concat(bpmcontext.bpm_ws_manager_sharing());
                        html_line = html_line.concat(bpmcontext.bpm_ws_manager_routing());

                        jQuery('#bpm_workspace_manager_content').html(html_line);
                        jQuery('#bpm_ws_pub_dd').html(bpmcontext.bpm_get_pub_dd(result));

                        bpmcontext.bpm_update_default_rules();
                        bpmcontext.bpm_ws_manager_add_actions();
                        bpmcontext.bpm_ws_disable_save();

                        //add purchase message if necessary
                        if(bpm_settings['WORKSPACES_AVL'] == 0) {
                            if(bpm_settings['is_primary_admin']) {
                                jQuery('#bpm_main_content').html(jQuery('#bpm_purchase_message_primary_admin').html());
                            }else{
                                jQuery('#bpm_main_content').html(jQuery('#bpm_purchase_message_not_primary_admin').html());
                                jQuery('#bpm_workspace_primary_admin_name').text(bpm_settings['primary_admin']);
                            }
                            bpm_settings['bpm_ws_purchase_message'] = 1;
                        }else{
                            bpm_settings['bpm_ws_purchase_message'] = 0;
                        }

                        if(bpm_settings['bpm_ws_manager_tutorial_viewed'] == 0) bpmcontext.bpm_show_ws_tutorial(2000);
                    }
                });

            }

        }

        function bpm_ws_manager_section(){

            var result = bpm_settings['workspace_manager_vars'];

            var html_line = '';

            var no_records = 1;

            //sections

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-9 bpm-large-9 bpm-columns text-left" >Sections&nbsp;<a id="bpm_ws_designer_ws_section_help" onClick="bpmcontext.bpm_show_ws_tutorial(2002)"><span class="fa fa-question-circle bpm-wsd-help-icon"></span></a> </div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-right bpm_tutorial_text" >&nbsp; </div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-right" >'+bpm_create_ws_save_message(2)+' </div>');
            html_line = html_line.concat('</div><br>');

            html_line = html_line.concat('<div id="bpm_ws_tutorial_2002" class="bpm-hide bpm-ws_tutorial-wrapper"></div>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >Section Name</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >Section Type</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >Visible?</div>');
            html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat('<div style="height:.5em">&nbsp;</div>');
            html_line = html_line.concat('<div id="bpm_section_sort">');
            if(result) {
                var prev_id = '';
                var total_rows = result['TEMPLATE_INFO']['template_sections'].length - 1;

                var arrows = '&nbsp;<a ><span class="fa fa-arrows-v bpm-wsd-help-icon">&nbsp;</span></a>';

                jQuery(result['TEMPLATE_INFO']['template_sections']).each(function (index, value) {

                    no_records = 0;
                    var remove_button = '';

                    if(value['sect_data']==0) {
                        remove_button = '<a id="bpm_section_remove_button_' + value['sect_index'] + '" onClick="bpmcontext.bpm_ws_remove_section(' + value['sect_index'] +')"><span class="fa fa-minus-circle bpm_add_minus">&nbsp;</span></a></span></a>';
                    }

                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-center bpm_tutorial_text" >'+arrows+'</div>');
                    html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_create_text_field('Section name', 'bpm_section_name_' + value['sect_index'], 'bpm_section_name_' + value['sect_index'], value['sect_name'], 'section') + '</div>');
                    if(value['sect_data']>0) {
                        html_line = html_line.concat('<div class="bpm-hide" id="bpm_ws_hidden_sect_type_'+value['sect_index']+'">'+value['sect_type']+'</div>')
                        html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_section_type_text(value['sect_type'], value['sect_index'], 'section') + '&nbsp;</div>');
                    }else {
                        html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_section_type_dd(value['sect_type'], value['sect_index'], 'section') + '</div>');
                    }
                    html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_section_visible_dd(value['sect_visible'], value['sect_index'], 'sect') + '</div>');
                    if(index==result['TEMPLATE_INFO']['template_sections'].length - 1){
                        html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >'+remove_button+'&nbsp;<a id="bpm_section_add_button_'+value['sect_index']+'" onClick="bpmcontext.bpm_ws_add_section('+value['sect_index']+', 1)"><span class="fa fa-plus-circle bpm_add_plus"></span></a></div>');
                    }else {
                        html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >'+remove_button+'&nbsp;<a class="bpm-hide" id="bpm_section_add_button_'+value['sect_index']+'" onClick="bpmcontext.bpm_ws_add_section('+value['sect_index']+', 1)"><span class="fa fa-plus-circle bpm_add_plus"></span></a></div>');
                    }
                    html_line = html_line.concat('</div>');
                    prev_id = value['sect_index'];
                });
            }
            if(no_records){
                if(bpm_settings['THIS_ADDING_WS']==1){
                    html_line = html_line.concat(bpm_ws_add_default_sections());
                }else {
                    html_line = html_line.concat('<div class="bpm-row bpm_added_section">');
                    html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
                    html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_create_text_field('Section name', 'bpm_section_name_new_999996', 'bpm_section_name_new_999996', '', 'section_new') + '</div>');
                    html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_section_type_dd(0, '999996', 'section') + '</div>');
                    html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_section_visible_dd('yes', 'new_999996', 'sect') + '</div>');
                    html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text " ><a class="bpm-hide" id="bpm_section_remove_button_999996" onClick="bpmcontext.bpm_ws_remove_section(999996)"><span class="fa fa-minus-circle bpm_add_minus">&nbsp;</span></a>&nbsp;<a id="bpm_section_add_button_999996" onClick="bpmcontext.bpm_ws_add_section(999996, 1)"><span class="fa fa-plus-circle bpm_add_plus">&nbsp;</span></a></div>');
                    html_line = html_line.concat('</div>');
                }
            }

            html_line = html_line.concat('</div>');

            html_line = html_line.concat('<br><hr class="bpm_hr_gray"><br>');

            return html_line;
        }

        function bpm_ws_add_default_sections(){

            var html_line = '';
            var arrows = '&nbsp;<a ><span class="fa fa-arrows-v bpm-wsd-help-icon">&nbsp;</span></a>';

            html_line = html_line.concat('<div class="bpm-row bpm_added_section">');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >'+arrows+'</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_create_text_field('Section name', 'bpm_section_name_new_999999', 'bpm_section_name_new_999999', 'Notes', 'section') + '</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_section_type_dd(1, 'new_999999', 'section') + '</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_section_visible_dd('yes', 'new_999999', 'sect') + '</div>');
            html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text " ><a id="bpm_section_remove_button_999999" onClick="bpmcontext.bpm_ws_remove_section(999999)"><span class="fa fa-minus-circle bpm_add_minus">&nbsp;</span></a>&nbsp;<a id="bpm_section_add_button_999999" onClick="bpmcontext.bpm_ws_add_section(999999, 1)"><span class="fa fa-plus-circle bpm_add_plus">&nbsp;</span></a></div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat('<div class="bpm-row bpm_added_section">');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >'+arrows+'</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_create_text_field('Section name', 'bpm_section_name_new_999998', 'bpm_section_name_new_999998', 'Discussions', 'section') + '</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_section_type_dd(6, 'new_999998', 'section') + '</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_section_visible_dd('yes', 'new_999998', 'sect') + '</div>');
            html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text " ><a id="bpm_section_remove_button_999998" onClick="bpmcontext.bpm_ws_remove_section(999998)"><span class="fa fa-minus-circle bpm_add_minus">&nbsp;</span></a>&nbsp;<a id="bpm_section_add_button_999998" onClick="bpmcontext.bpm_ws_add_section(999998, 1)"><span class="fa fa-plus-circle bpm_add_plus">&nbsp;</span></a></div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat('<div class="bpm-row bpm_added_section">');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >'+arrows+'</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_create_text_field('Section name', 'bpm_section_name_new_999997', 'bpm_section_name_new_999997', 'Attachments', 'section') + '</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_section_type_dd(10, 'new_999997', 'section') + '</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_section_visible_dd('yes', 'new_999997', 'sect') + '</div>');
            html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text " ><a id="bpm_section_remove_button_999997" onClick="bpmcontext.bpm_ws_remove_section(999997)"><span class="fa fa-minus-circle bpm_add_minus">&nbsp;</span></a>&nbsp;<a id="bpm_section_add_button_999997" onClick="bpmcontext.bpm_ws_add_section(999997, 1)"><span class="fa fa-plus-circle bpm_add_plus">&nbsp;</span></a></div>');
            html_line = html_line.concat('</div>');

            return html_line;
        }

        function bpm_ws_add_section(this_id, this_type){

            //hide button
            var item_type = '';
            if(this_type==1) item_type = 'section';
            jQuery('#bpm_'+item_type+'_add_button_'+this_id).hide();

            //add new row
            var html_line = '';
            var arrows = '&nbsp;<a ><span class="fa fa-arrows-v bpm-wsd-help-icon">&nbsp;</span></a>';
            var item_index = jQuery('.bpm_added_section').length  + 999999;

            html_line = html_line.concat('<div class="bpm-row bpm_added_section">');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >'+arrows+'</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >'+bpmcontext.bpm_create_text_field('Section name', 'bpm_section_name_new_'+item_index+'', 'bpm_section_name_new_'+item_index+'', '', 'section')+'</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >'+bpmcontext.bpm_make_section_type_dd(0, 'new_'+item_index, 'section')+'</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >'+bpmcontext.bpm_make_section_visible_dd('yes','new_'+item_index, 'sect')+'</div>');
            html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text " ><a id="bpm_section_remove_button_'+item_index+'" onClick="bpmcontext.bpm_ws_remove_section('+item_index+', '+this_id+')"><span class="fa fa-minus-circle bpm_add_minus">&nbsp;</span>&nbsp;<a id="bpm_section_add_button_'+item_index+'" onClick="bpmcontext.bpm_ws_add_section('+item_index+', 1)"><span class="fa fa-plus-circle bpm_add_plus">&nbsp;</span></a></div>');
            html_line = html_line.concat('</div>');

            jQuery('#bpm_'+item_type+'_add_button_'+this_id).parent().parent().after(html_line);



             bpm_ws_manager_add_actions();

        }


        function bpm_ws_remove_section(sect_id, prev_id){


            if(sect_id < 999900){

                var deleted_sections = [];
                if(bpm_settings['deleted_sections']) {
                    deleted_sections = bpm_settings['deleted_sections'];
                }
                deleted_sections.push(sect_id);
                bpm_settings['deleted_sections'] = deleted_sections;
            }

            jQuery('#bpm_section_remove_button_'+sect_id).parent().parent().remove();

            //show the last button
            bpm_reset_section_plus();

            //show save button
            bpm_ws_enable_save();

            if(jQuery('.bpm_ws_type_section').length == 0){

                //add new row
                var html_line = '';
                var arrows = '&nbsp;<a ><span class="fa fa-arrows-v bpm-wsd-help-icon">&nbsp;</span></a>';

                html_line = html_line.concat('<div class="bpm-row bpm_added_section">');
                html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
                html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_create_text_field('Section name', 'bpm_section_name_new_999999', 'bpm_section_name_new_999999', '', 'section_new') + '</div>');
                html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_section_type_dd(0, '999999', 'section') + '</div>');
                html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_section_visible_dd('yes', 'new_999999', 'sect') + '</div>');
                html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text " ><a class="bpm-hide" id="bpm_section_remove_button_999999" onClick="bpmcontext.bpm_ws_remove_section(999999)"><span class="fa fa-minus-circle bpm_add_minus">&nbsp;</span></a>&nbsp;<a id="bpm_section_add_button_999999" onClick="bpmcontext.bpm_ws_add_section(999999, 1)"><span class="fa fa-plus-circle bpm_add_plus">&nbsp;</span></a></div>');
                html_line = html_line.concat('</div>');

                jQuery('#bpm_section_sort').html(html_line);

                bpmcontext.bpm_ws_manager_add_actions();

            }
        }

        function bpm_ws_remove_info(info_id, prev_id){

            if(info_id < 999900){

                var deleted_info = [];
                if(bpm_settings['deleted_info']) {
                    deleted_info = bpm_settings['deleted_info'];
                }
                deleted_info.push(info_id);
                bpm_settings['deleted_info'] = deleted_info;
            }

            jQuery('#bpm_info_remove_button_'+info_id).parent().parent().remove();

            //show the last button
            bpmcontext.bpm_reset_info_plus();

            //show save button
            bpmcontext.bpm_ws_enable_save();

            if(jQuery('.bpm_ws_type_info').length == 0){

                //add new row
                var html_line = '';
                var arrows = '&nbsp;<a ><span class="fa fa-arrows-v bpm-wsd-help-icon">&nbsp;</span></a>';
                var item_index = 999999;

                html_line = html_line.concat('<div class="bpm-row bpm_added_section">');
                html_line = html_line.concat('<div class="bpm-small-10 bpm-large-10 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
                html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" ><a id="bpm_info_remove_button_'+item_index+'" onClick="bpmcontext.bpm_ws_remove_info('+item_index+')"><span class="fa fa-minus-circle bpm_add_minus">&nbsp;<a id="bpm_info_add_button_'+item_index+'" onClick="bpmcontext.bpm_ws_add_info('+item_index+', 1)"><span class="fa fa-plus-circle bpm_add_plus">&nbsp;</span></a></div>');
                html_line = html_line.concat('</div>');

                jQuery('#bpm_info_sort').html(html_line);

                bpmcontext.bpm_ws_manager_add_actions();

            }
        }

        function bpm_ws_add_info(this_id, this_type){

            //hide button
            var item_type = '';
            if(this_type==1) item_type = 'info';
            jQuery('#bpm_'+item_type+'_add_button_'+this_id).hide();

            //add new row
            var html_line = '';
            var arrows = '&nbsp;<a ><span class="fa fa-arrows-v bpm-wsd-help-icon">&nbsp;</span></a>';
            var item_index = jQuery('.bpm_added_info').length + 999999;
            var config_button = '&nbsp;<a class="bpm-hide" id="bpm_info_config_button_' + item_index + '" onClick="bpmcontext.bpm_ws_config_info('+item_index+')" alt="Configure Dropdown"><span class="fa fa-gear bpm_add_gear_not_configed"></span></a>';

            html_line = html_line.concat('<div class="bpm-row bpm_added_info">');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >'+arrows+'</div>');
            html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_create_text_field('Infobox name', 'bpm_infobox_name_'+item_index+'', 'bpm_infobox_name_'+item_index+'', '', 'info') + '</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_section_type_dd(0, item_index, 'info') + '</div>');
            html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_section_visible_dd('yes', item_index, 'info_edit') + '</div>');
            html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_section_visible_dd('yes', item_index, 'info_visible') + '</div>');
            html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" ><a id="bpm_info_remove_button_'+item_index+'" onClick="bpmcontext.bpm_ws_remove_info('+item_index+')"><span class="fa fa-minus-circle bpm_add_minus"></span></a>&nbsp;<a id="bpm_info_add_button_'+item_index+'" onClick="bpmcontext.bpm_ws_add_info('+item_index+', 1)"><span class="fa fa-plus-circle bpm_add_plus"></span></a>'+config_button+'</div>');
            html_line = html_line.concat('</div>');

            //configuration area
            html_line = html_line.concat('<div id="bpm_config_info_'+item_index+'" class="bpm-message-wrapper bpm_config_ws_area bpm-hide" style="height:0em;overflow-y: scroll;"></div>');

            jQuery('#bpm_'+item_type+'_add_button_'+this_id).parent().parent().after(html_line);

            bpmcontext.bpm_ws_manager_add_actions();
        }

        function bpm_ws_manager_infoboxes(){

            var result = bpm_settings['workspace_manager_vars'];

            var html_line = '';

            var no_records = 1;

            //infoboxes
            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-9 bpm-large-9 bpm-columns text-left" >Infobox Fields&nbsp;<a id="bpm_ws_designer_ws_infobox_help" onClick="bpmcontext.bpm_show_ws_tutorial(2003)"><span class="fa fa-question-circle bpm-wsd-help-icon"></span></a> </div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-right bpm_tutorial_text" >&nbsp; </div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-right" >'+bpmcontext.bpm_create_ws_save_message(3)+' </div>');
            html_line = html_line.concat('</div><br>');


            html_line = html_line.concat('<div id="bpm_ws_tutorial_2003" class="bpm-hide bpm-ws_tutorial-wrapper"></div>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
            html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >Infobox Name</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >Field Type</div>');
            html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >Editable?</div>');
            html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >Visible?</div>');
            html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat('<div style="height:.5em">&nbsp;</div>');
            html_line = html_line.concat('<div id="bpm_info_sort">');
            var arrows = '&nbsp;<a ><span class="fa fa-arrows-v bpm-wsd-help-icon">&nbsp;</span></a>';

            if(result) {
                var no_edit = [];
                jQuery(result['TEMPLATE_INFO']['no_edit_list']).each(function (index, value) {
                    no_edit.push(value['email']);
                    no_edit.push(value['name']);
                });

                jQuery(result['TEMPLATE_INFO']['template_infoboxes']).each(function (index, value) {
                    var remove_button = '';
                    no_records = 0;
                    var hide_val = '';

                    if(value['info_data']==0) {
                        remove_button = '<a id="bpm_info_remove_button_' + value['info_index'] + '" onClick="bpmcontext.bpm_ws_remove_info(' + value['info_index'] + ')"><span class="fa fa-minus-circle bpm_add_minus">&nbsp;</span></a></span></a>';
                    }

                    var config_button = '&nbsp;<a class="bpm-hide" id="bpm_info_config_button_' + value['info_index'] + '" onClick="bpmcontext.bpm_ws_config_info(' + value['info_index'] + ')"><span id="bpm_info_config_button_icon_' + value['info_index'] + '" class="fa fa-gear bpm_add_gear_not_configed">&nbsp;</span></a></span></a>';

                    if(value['info_type']==6){ ///this is a dropdown so we need to configure it
                        if(value['configured'] == 'yes') {
                            config_button = '&nbsp;<a id="bpm_info_config_button_' + value['info_index'] + '" onClick="bpmcontext.bpm_ws_config_info(' + value['info_index'] + ', \''+value['source_field']+'\')"><span id="bpm_info_config_button_icon_' + value['info_index'] + '" class="fa fa-gear bpm_add_gear">&nbsp;</span></a>';
                        }else{
                            config_button = '&nbsp;<a id="bpm_info_config_button_' + value['info_index'] + '" onClick="bpmcontext.bpm_ws_config_info(' + value['info_index'] + ')"><span id="bpm_info_config_button_icon_' + value['info_index'] + '" class="fa fa-gear bpm_add_gear_not_configed">&nbsp;</span></a>';
                        }
                    }

                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-center bpm_tutorial_text" >'+arrows+'</div>');
                    html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_create_text_field('Infobox name', 'bpm_infobox_name_' + value['info_index'], 'bpm_infobox_name_' + value['info_index'], value['info_name'], 'info') + '</div>');


                    if( value['info_data'] || (no_edit.length > 0 && no_edit.indexOf(value['info_index'] >= 0))) {

                        html_line = html_line.concat('<div class="bpm-hide" id="bpm_ws_hidden_info_type_'+value['info_index']+'">'+value['info_type']+'</div>')
                        html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_section_type_text(value['info_type'], value['info_index'], 'info', value['source_field']) + '&nbsp;</div>');
                    }else {
                        html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_section_type_dd(value['info_type'], value['info_index'], 'info', value) + '</div>');
                    }
                    html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_section_visible_dd(value['info_editable'], value['info_index'], 'info_edit') + '</div>');
                    html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_section_visible_dd(value['info_visible'], value['info_index'], 'info_visible') + '</div>');

                    if(index==result['TEMPLATE_INFO']['template_infoboxes'].length - 1){
                        html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >'+remove_button+'&nbsp;<a id="bpm_info_add_button_'+value['info_index']+'" onClick="bpmcontext.bpm_ws_add_info('+value['info_index']+', 1)"><span class="fa fa-plus-circle bpm_add_plus">&nbsp;</span></a>&nbsp;'+config_button+'</div>');
                    }else {
                        html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >'+remove_button+'&nbsp;<a class="bpm-hide" id="bpm_info_add_button_'+value['info_index']+'" onClick="bpmcontext.bpm_ws_add_info('+value['info_index']+', 1)"><span class="fa fa-plus-circle bpm_add_plus">&nbsp;</span></a>'+config_button+'</div>');
                    }
                    html_line = html_line.concat('</div>');

                    //configuration area
                    html_line = html_line.concat('<div id="bpm_config_info_'+value['info_index']+'" class="bpm-message-wrapper bpm_config_ws_area bpm-hide" style="height:0em;overflow-y: scroll;"></div>');
                });
            }
            if(no_records) {
                var remove_button = '<a class="bpm-hide" id="bpm_info_remove_button_999999" onClick="bpmcontext.bpm_ws_remove_info(999999)"><span class="fa fa-minus-circle bpm_add_minus"></span></a>';
                var config_button = '&nbsp;<a class="bpm-hide" id="bpm_info_config_button_999999' + '" onClick="bpmcontext.bpm_ws_config_info(999999)"><span id="bpm_info_config_button_icon_999999" class="fa fa-gear bpm_add_gear_not_configed"></span></a>';
                html_line = html_line.concat('<div class="bpm-row bpm_added_info">');
                html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-center bpm_tutorial_text" >'+arrows+'</div>');
                html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_create_text_field('Infobox name', 'bpm_infobox_name_999999', 'bpm_infobox_name_999999','', 'info') + '</div>');
                html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_section_type_dd(0, '999999', 'info') + '</div>');
                html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_section_visible_dd('yes', '999999', 'info_edit') + '</div>');
                html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_section_visible_dd('yes', '999999', 'info_visible') + '</div>');
                html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >'+remove_button+'&nbsp;<a id="bpm_info_add_button_999999" onClick="bpmcontext.bpm_ws_add_info(999999, 1)"><span class="fa fa-plus-circle bpm_add_plus"></span></a>&nbsp;'+config_button+'</div>');
                html_line = html_line.concat('</div>');
                //configuration area
                html_line = html_line.concat('<div id="bpm_config_info_999999" class="bpm-message-wrapper bpm_config_ws_area bpm-hide" style="height:0em;overflow-y: scroll;"></div>');
            }

            html_line = html_line.concat('</div>');

            html_line = html_line.concat('<br><hr class="bpm_hr_gray"><br>');

            return html_line;

        }

        function bpm_ws_dd_config_add_info(this_index, item_id){

            var new_id = Number(item_id) + 999999;

            var html_line = '';
            var remove_button = '<a id="bpm_info_remove_button_' + this_index + '_' + new_id+'" onClick="bpmcontext.bpm_ws_dd_config_remove_info(' + this_index + ',' + new_id + ')"><span class="fa fa-minus-circle bpm_add_minus" style="padding-top:.15em;">&nbsp;</span></a>';
            var add_button = '<a id="bpm_info_remove_button_' + this_index + '_' + new_id+'" onClick="bpmcontext.bpm_ws_dd_config_add_info(' + this_index + ',' + new_id + ')"><span class="fa fa-plus-circle bpm_add_plus" style="padding-top:.15em;">&nbsp;</span></a>';

            html_line = html_line.concat('<div id="bpm_ws_dropdown_list_'+this_index+'_'+new_id+'" class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-8 bpm-large-8 bpm-columns text-left" ><input class="bpm_dd_val_'+this_index+'" type="text" name="new_dropdown" value=""/></div>');
            html_line = html_line.concat('<div class="bpm-small-4 bpm-large-4 bpm-columns text-left" >' + remove_button + '&nbsp;' + add_button + '</div>');
            html_line = html_line.concat('</div>');

            jQuery('#bpm_ws_dropdown_list_'+this_index+'_'+item_id).after(html_line);

        }

        function bpm_ws_dd_config_remove_info(this_index, item_id){
            jQuery('#bpm_ws_dropdown_list_'+this_index+'_'+item_id).remove();
        }

        function bpm_change_dropdown_config_set(this_index, dd_value){

            jQuery('#bpm_new_dropdown_'+this_index).css('border', '');

            var result = bpm_settings['workspace_manager_vars'];

            if(!result) result = bpm_settings['workspace_manager_new_vars'];

            if(!result) return;

            jQuery('#new_dropdown_'+this_index).val('');

            if(jQuery('#bpm_template_dd_selected_'+this_index).val() == 0){
                bpmcontext.bpm_ws_enable_save();
            }else{
                bpmcontext.bpm_ws_disable_save();
            }

            if(!dd_value){
                dd_value = jQuery('#bpm_template_dd_selected_'+this_index+ ' option:selected').text();
            }


            var this_dd_values = [];

            jQuery(result['TEMPLATE_INFO']['dd_list']).each(function (index, value) {
                if(value['type'] == dd_value){
                    this_dd_values = value['values'];
                }
            });

            var right_side = '';

            right_side = right_side.concat('<div class="bpm-row">');
            right_side = right_side.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-center" >DROPDOWN VALUES</div>');
            right_side = right_side.concat('</div>');

            right_side = right_side.concat('<div style="height:.5em">&nbsp;</div>');

            if(this_dd_values.length > 0) {
                jQuery(this_dd_values).each(function (index, value) {

                    var remove_button = '<a id="bpm_info_remove_button_' + this_index + '_' + index+'" onClick="bpmcontext.bpm_ws_dd_config_remove_info(' + this_index + ',' + index + ')"><span class="fa fa-minus-circle bpm_add_minus" style="padding-top:.15em;">&nbsp;</span></a>';
                    var add_button = '<a id="bpm_info_remove_button_' + this_index + '_' + index+'" onClick="bpmcontext.bpm_ws_dd_config_add_info(' + this_index + ',' + index + ')"><span class="fa fa-plus-circle bpm_add_plus" style="padding-top:.15em;">&nbsp;</span></a>';

                    right_side = right_side.concat('<div id="bpm_ws_dropdown_list_'+this_index+'_'+index+'" class="bpm-row">');
                    right_side = right_side.concat('<div class="bpm-small-7 bpm-large-7 bpm-columns text-left" ><input class="bpm_dd_val_'+this_index+'" type="text" name="new_dropdown" value="' + value['value'] + '"/></div>');
                    right_side = right_side.concat('<div class="bpm-small-4 bpm-large-4 bpm-columns text-left" >' + remove_button + '&nbsp;' + add_button + '</div>');
                    right_side = right_side.concat('</div>');
                });
            }else{

                var remove_button = '<a class="bpm-hide" id="bpm_info_remove_button_' + this_index + '_0" onClick="bpmcontext.bpm_ws_dd_config_remove_info(' + this_index + ',0)"><span class="fa fa-minus-circle bpm_add_minus" style="padding-top:.15em;">&nbsp;</span></a>';
                var add_button = '<a id="bpm_info_remove_button_' + this_index + '_0" onClick="bpmcontext.bpm_ws_dd_config_add_info(' + this_index + ',0)"><span class="fa fa-plus-circle bpm_add_plus" style="padding-top:.15em;">&nbsp;</span></a>';

                right_side = right_side.concat('<div id="bpm_ws_dropdown_list_'+this_index+'_0"  class="bpm-row">');
                right_side = right_side.concat('<div class="bpm-small-7 bpm-large-7 bpm-columns text-left" ><input class="bpm_dd_val_'+this_index+'" type="text" name="new_dropdown" /></div>');
                right_side = right_side.concat('<div class="bpm-small-4 bpm-large-4 bpm-columns text-left" >' + remove_button + '&nbsp;' + add_button + '</div>');
                right_side = right_side.concat('</div>');
            }

            jQuery('#bpm_dd_set_'+this_index).html(right_side);
        }

        function bpm_ws_config_info(this_index, dd_value){

            var result = bpm_settings['workspace_manager_vars'];

            if(!result) result = bpm_settings['workspace_manager_new_vars'];

            if(!result) return;

            var this_dd_values = [];
            var is_dd_selected = 0;

            var type_dd = '<select class="bpm_ws_manager_field" id="bpm_template_dd_selected_'+this_index+'" onchange="bpm_change_dropdown_config_set('+this_index +')">';

            type_dd = type_dd.concat('<option selected value="0">Create dropdown set...</option>');


            jQuery(result['TEMPLATE_INFO']['dd_list']).each(function (index, value) {
                if(value['type'] == dd_value){
                    this_dd_values = value['values'];
                    is_dd_selected = 1;
                    type_dd = type_dd.concat('<option selected value="1">'+value['type']+'</option>');
                }else {
                    type_dd = type_dd.concat('<option value="1">' + value['type'] + '</option>');
                }
            });

            type_dd = type_dd.concat('</select>');

            var html_line = '';
            var left_side = '';
            var right_side = '';

            left_side = left_side.concat('<div class="bpm-row">');
            left_side = left_side.concat('<div class="bpm-small-10 bpm-large-10 bpm-columns text-center" >CONFIGURE DROPDOWN</div>');
            left_side = left_side.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-center" >&nbsp;</div>');
            left_side = left_side.concat('</div>');

            left_side = left_side.concat('<div style="height:.5em">&nbsp;</div>');

            left_side = left_side.concat('<div class="bpm-row">');
            left_side = left_side.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns text-left" >Select Dropdown:</div>');
            left_side = left_side.concat('<div class="bpm-small-5 bpm-large-5 bpm-columns text-left">' + type_dd + ' </div>');
            left_side = left_side.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-center" >&nbsp;</div>');
            left_side = left_side.concat('</div>');

            left_side = left_side.concat('<div class="bpm-row">');
            left_side = left_side.concat('<div class="bpm-small-10 bpm-large-10 bpm-columns text-center" >- or -</div>');
            left_side = left_side.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-center" >&nbsp;</div>');
            left_side = left_side.concat('</div>');

            left_side = left_side.concat('<div class="bpm-row">');
            left_side = left_side.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns text-left" >Create New Dropdown:</div>');
            if(is_dd_selected){
                left_side = left_side.concat('<div class="bpm-small-5 bpm-large-5 bpm-columns text-left"><input id="bpm_new_dropdown_' + this_index + '" type="text" name="new_dropdown" disabled></div>');
            }else {
                left_side = left_side.concat('<div class="bpm-small-5 bpm-large-5 bpm-columns text-left"><input id="bpm_new_dropdown_' + this_index + '" type="text" name="new_dropdown"></div>');
            }
            left_side = left_side.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-center" >&nbsp;</div>');
            left_side = left_side.concat('</div>');
        /**
            var save = '<a onClick="bpmcontext.bpm_save_dropdown('+this_index+');" class="button bpm-small-button bpm_lng_save bpm_ws_save_button bpm-unselectable bpm-small-ws-button" style="text-decoration: none;">Save</a>';
            var cancel = '<a onClick="bpmcontext.bpm_close_config('+this_index+');" class="button bpm-small-button bpm_lng_save bpm_ws_save_button bpm-unselectable bpm-small-ws-button" style="text-decoration: none;">Cancel</a>';

            left_side = left_side.concat('<br><div class="bpm-row">');
            left_side = left_side.concat('<div class="bpm-small-11 bpm-large-11 bpm-columns text-right">'+save+' &nbsp;' + cancel + ' </div>');
            left_side = left_side.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-center" >&nbsp;</div>');
            left_side = left_side.concat('</div>');
        **/
            right_side = right_side.concat('<div id="bpm_dd_set_'+this_index+'" style="overflow-y: scroll;overflow-x: hidden">');
            right_side = right_side.concat('</div>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-7 bpm-large-7 bpm-columns text-right" >'+left_side+'</div>');
            html_line = html_line.concat('<div class="bpm-small-5 bpm-large-5 bpm-columns text-left">' + right_side + ' </div>');
            html_line = html_line.concat('</div><br>');

            bpm_settings['editing_this_infobox'] = this_index;

            jQuery('#bpm_edit_dropdown_content').html(html_line);

        //    jQuery('#bpm_config_info_'+this_index).show().html(html_line);
        //    jQuery('#bpm_config_info_'+this_index).animate({height: 250}, 'slow');

            bpmcontext.bpm_change_dropdown_config_set(this_index, dd_value);

            jQuery('#bpm_edit_dropdown').foundation('reveal', 'open');

        }

        function bpm_save_dropdown(this_index){

            if(!this_index) this_index = bpm_settings['editing_this_infobox'];

            jQuery('#bpm_new_dropdown_'+this_index).css('border', '');

            var dd_name = '';
            var querystring = 'domain=' + bpm_current_domain + '&action=update_dropdown';

            jQuery('.bpm_dd_val_'+this_index).each(function (index, value) {
                if(bpmcontext.bpm_test_field_for_blank(jQuery(this).val())){
                    querystring = querystring.concat('&ddval[]='+jQuery(this).val());
                }
            });

            if(jQuery('#bpm_template_dd_selected_'+this_index).val() == 0){
                //new dropdown
                if(bpmcontext.bpm_test_field_for_blank(jQuery('#bpm_new_dropdown_'+this_index).val())){
                    dd_name = jQuery('#bpm_new_dropdown_'+this_index).val();
                }else{
                    //error
                    jQuery('#bpm_new_dropdown_'+this_index).css('border', 'solid 1px red');
                    return;
                }

            }else{
                //existing dropdown
                dd_name = jQuery('#bpm_template_dd_selected_'+this_index+ ' option:selected').text();
            }

            querystring = querystring.concat('&ddname='+dd_name);

            jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function (result) {

                if(bpm_settings['workspace_manager_vars']){
                    bpm_settings['workspace_manager_vars']['TEMPLATE_INFO']['dd_list'] = result['RESULT']['dd_list'];
                }else{
                    bpm_settings['workspace_manager_new_vars']['TEMPLATE_INFO']['dd_list'] = result['RESULT']['dd_list'];;
                }
                //close div and set gear to green
                var replace_with = '<a id="bpm_info_config_button_'+this_index+'" onClick="bpmcontext.bpm_ws_config_info('+this_index+', \''+dd_name+'\')">';
                replace_with = replace_with.concat('<span id="bpm_info_config_button_icon_'+this_index+'" class="fa fa-gear bpm_add_gear"> </span></a>');

                jQuery('#bpm_info_config_button_'+this_index).replaceWith(replace_with);
                bpmcontext.bpm_ws_enable_save();

                //update dropdown on main page
                jQuery('#bpm_template_info_type_ws_'+this_index+ ' option:selected').text('Dropdown:'+dd_name);

                if(jQuery('#bpm_ws_hidden_info_type_'+this_index).length){
                    jQuery('#bpm_template_info_type_ws_'+this_index).text('Dropdown:'+dd_name);
                }

                jQuery('#bpm_edit_dropdown').foundation('reveal', 'close');

            });

        }

        function bpm_close_config(this_index){

            jQuery('#bpm_config_info_'+this_index).animate({height: 0}, 'slow', function(){
                jQuery('#bpm_config_info_'+this_index).hide().html('');
            });
        }

        function bpm_make_yes_no_dd(section_visible, item_id){

            var is_visible = '';
            var not_visible = '';

            if(section_visible=='yes') is_visible = 'selected';
            if(section_visible=='no') not_visible = 'selected';

            var this_dd = '<select class="bpm_ws_manager_field" id="'+item_id+'">';
            this_dd = this_dd.concat('<option '+is_visible+' value="yes">Yes</option>');
            this_dd = this_dd.concat('<option '+not_visible+' value="no">No</option>');
            this_dd = this_dd.concat('</select>');

            return this_dd;

        }

        function bpm_ws_manager_naming(default_selected){

            var bpm_hide = '';
            if(Number(bpm_settings['THIS_LIBRARY_ID']) > 0 && bpm_settings['THIS_ADDING_WS'] == 0) {
                bpm_hide = 'bpm-hide';
            }

            var result = [];
            if(default_selected){
                result = default_selected;
            }else {
                result = bpm_settings['workspace_manager_vars'];
                if (!result) result = bpm_settings['workspace_manager_new_vars'];
                if (!result) return;
            }

            var delete_array = [];

            var update_dropdowns = [];
            var arrows = '&nbsp;<a ><span class="fa fa-arrows-v bpm-wsd-help-icon">&nbsp;</span></a>';
            var html_line = '';

            //Naming Rules
            if(!default_selected) {
                html_line = html_line.concat('<div id="bpm_naming_rules" class="' + bpm_hide + '">');
            }
            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-9 bpm-large-9 bpm-columns text-left" >Naming Rules&nbsp;<a id="bpm_ws_designer_ws_naming_help" onClick="bpmcontext.bpm_show_ws_tutorial(2004)"><span class="fa fa-question-circle bpm-wsd-help-icon"></span></a> </div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-right bpm_tutorial_text" >&nbsp; </div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-right" >' + bpmcontext.bpm_create_ws_save_message(4) + ' </div>');
            html_line = html_line.concat('</div>');


            html_line = html_line.concat('<div id="bpm_ws_tutorial_2004" class="bpm-hide bpm-ws_tutorial-wrapper"></div>');

            html_line = html_line.concat('<br><div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
            html_line = html_line.concat('<div class="bpm-small-4 bpm-large-4 bpm-columns text-left bpm_tutorial_text" >Select a standard naming rule set:</div>');
            html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_ws_create_naming_dd(result) + '</div>');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
            html_line = html_line.concat('<div class="bpm-small-10 bpm-large-10 bpm-columns text-center bpm_tutorial_text" > <strong>- edit naming rules below -</strong> </div>');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
            html_line = html_line.concat('</div><br>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
            html_line = html_line.concat('<div class="bpm-small-8 bpm-large-8 bpm-columns text-left bpm_tutorial_text" >Workspace name is prefix for page name:<br>&nbsp;&nbsp;(For example Department - Human Resources)</div>');
            html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_yes_no_dd(result['TEMPLATE_INFO']['prefix_ws_name'], 'bpm_prefix_ws_name') + '</div>');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
            html_line = html_line.concat('<div class="bpm-small-8 bpm-large-8 bpm-columns text-left bpm_tutorial_text" >Use parent page name as prefix for page name:<br>&nbsp;&nbsp;(For example Human Resources - Benefits Form)</div>');
            html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_yes_no_dd(result['TEMPLATE_INFO']['prefix_page_name'], 'bpm_prefix_page_name') + '</div>');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat('<div style="height:1em">&nbsp;</div>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >Naming Type</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >Infobox Target</div>');
            html_line = html_line.concat('<div class="bpm-small-4 bpm-large-4 bpm-columns text-left bpm_tutorial_text" >Add Page Field Name</div>');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
            html_line = html_line.concat('</div>');

            var infobox_list = [];

            html_line = html_line.concat('<div id="bpm_naming_sort">');

            //TODO - get list of infoboxes from this page and add or delete when sections or infoboxes are changed changed

            if (result) {
                if(result['TEMPLATE_INFO']['template_infoboxes']) {
                    infobox_list = result['TEMPLATE_INFO']['template_infoboxes'];
                    var has_info = '';
                    if (infobox_list.length == 0) {
                        has_info = '&nbsp;';
                    }
                }
                bpm_settings['deleted_naming_preliminary'] = [];

                jQuery(result['TEMPLATE_INFO']['template_naming']).each(function (index, value) {
                    var hide_text = 'bpm-hide';
                    if (value['name_type'] == '20'){
                        hide_text = '';
                    }

                    update_dropdowns.push(value['name_index']);

                    var hide_remove = '';
                    if (index == 0) hide_remove = 'bpm-hide';
                    var remove_button = '<a class="' + hide_remove + '" id="bpm_naming_remove_button_' + value['name_index'] + '" onClick="bpmcontext.bpm_ws_dd_config_remove_naming(' + value['name_index'] + ')"><span class="fa fa-minus-circle bpm_add_minus" style="padding-top:.15em;">&nbsp;</span></a>';
                    var add_button = '<a id="bpm_naming_add_button_' + value['name_index'] + '" onClick="bpmcontext.bpm_ws_dd_config_add_naming(' + value['name_index'] + ')"><span class="fa fa-plus-circle bpm_add_plus" style="padding-top:.15em;">&nbsp;</span></a>';

                    remove_button = '&nbsp;';
                    add_button = '&nbsp;';
                    arrows = '&nbsp;';

                    if(!default_selected) {
                        delete_array.push(value['name_index']);
                    }

                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-center bpm_tutorial_text" >' + arrows + '</div>');
                    html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_naming_type_dd(value['name_type'], value['name_index']) + '</div>');
                    html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_naming_target_dd(value['name_target_id'], value['name_index'], result['TEMPLATE_INFO']['template_infoboxes']) + has_info + '</div>');
                    html_line = html_line.concat('<div class="bpm-small-4 bpm-large-4 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_create_text_field('Display name', 'bpm_ws_display_name_' + value['name_index'], 'bpm_ws_display_name_' + value['name_index'], value['name_workflow_name'], 'naming_text', hide_text) + '</div>');
                    if (index == result['TEMPLATE_INFO']['template_naming'].length - 1) {
                        html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >' + remove_button + '&nbsp;' + add_button + '</span> </div>');
                    } else {
                        html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text " >&nbsp;</div>');
                    }
                    html_line = html_line.concat('</div>');
                });
            }

            html_line = html_line.concat('</div>');

            html_line = html_line.concat('<br><hr class="bpm_hr_gray"><br>');

            if(!default_selected) html_line = html_line.concat('</div>');

            if(!default_selected) bpm_settings['deleted_naming'] = delete_array;

            bpm_settings['ws_update_dropdowns'] = update_dropdowns;

            bpm_settings['deleted_naming_preliminary'] = delete_array;

            return html_line;



        }

        function bpm_ws_enable_save(){
            jQuery('.bpm_ws_save_button').css('background-color','#008cba').removeAttr('disabled');
            bpm_settings['ws_changes_pending'] = 1;
            jQuery(window).bind('beforeunload', function(){
                return 'Are you sure you want to leave?';
            });
        }

        function bpm_ws_disable_save(){
            jQuery('.bpm_ws_save_button').css('background-color','gray').attr('disabled','disabled');
            bpm_settings['ws_changes_pending'] = 0;
            jQuery(window).unbind('beforeunload');
        }


        function bpm_update_default_rules(no_overwrite){

            if(!no_overwrite) bpm_settings['no_delete_naming'] = 1;

            var option_type = jQuery('#bpm_ws_naming_default_rules option:selected').val();

            if(option_type == 0){
                return;
            }

            var main_result = bpm_settings['workspace_manager_vars'];
            if (!main_result) main_result = bpm_settings['workspace_manager_new_vars'];

            var result = [];
            result['TEMPLATE_INFO'] = [];
            result['TEMPLATE_INFO']['set_selected'] = option_type;
            result['TEMPLATE_INFO']['template_naming'] = [];
            result['TEMPLATE_INFO']['template_infoboxes'] = [];

            if(main_result['TEMPLATE_INFO']['template_infoboxes']) {
                result['TEMPLATE_INFO']['template_infoboxes'] = main_result['TEMPLATE_INFO']['template_infoboxes'];
            }

            switch(option_type){
                case '1':
                    result['TEMPLATE_INFO']['prefix_ws_name'] = 'no';
                    result['TEMPLATE_INFO']['prefix_page_name'] = 'no';
                    result['TEMPLATE_INFO']['template_naming'][0] = [];
                    result['TEMPLATE_INFO']['template_naming'][0]['name_type'] = '20';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_index'] = '999999';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_workflow_name'] = 'Title';
                    result['TEMPLATE_INFO']['template_naming'][1] = [];
                    result['TEMPLATE_INFO']['template_naming'][1]['name_type'] = '5';
                    result['TEMPLATE_INFO']['template_naming'][1]['name_index'] = '999998';
                    result['TEMPLATE_INFO']['template_naming'][1]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][1]['name_workflow_name'] = '';
                    break;
                case '2':
                    result['TEMPLATE_INFO']['prefix_ws_name'] = 'no';
                    result['TEMPLATE_INFO']['prefix_page_name'] = 'no';
                    result['TEMPLATE_INFO']['template_naming'][0] = [];
                    result['TEMPLATE_INFO']['template_naming'][0]['name_type'] = '20';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_index'] = '999999';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_workflow_name'] = 'Title';
                    result['TEMPLATE_INFO']['template_naming'][1] = [];
                    result['TEMPLATE_INFO']['template_naming'][1]['name_type'] = '24';
                    result['TEMPLATE_INFO']['template_naming'][1]['name_index'] = '999998';
                    result['TEMPLATE_INFO']['template_naming'][1]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][1]['name_workflow_name'] = '';
                    result['TEMPLATE_INFO']['template_naming'][2] = [];
                    result['TEMPLATE_INFO']['template_naming'][2]['name_type'] = '5';
                    result['TEMPLATE_INFO']['template_naming'][2]['name_index'] = '999997';
                    result['TEMPLATE_INFO']['template_naming'][2]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][2]['name_workflow_name'] = '';
                    break;
                case '3':
                    result['TEMPLATE_INFO']['prefix_ws_name'] = 'yes';
                    result['TEMPLATE_INFO']['prefix_page_name'] = 'no';
                    result['TEMPLATE_INFO']['template_naming'][0] = [];
                    result['TEMPLATE_INFO']['template_naming'][0]['name_type'] = '20';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_index'] = '999999';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_workflow_name'] = 'Title';
                    break;
                case '4':
                    result['TEMPLATE_INFO']['prefix_ws_name'] = 'yes';
                    result['TEMPLATE_INFO']['prefix_page_name'] = 'no';
                    result['TEMPLATE_INFO']['template_naming'][0] = [];
                    result['TEMPLATE_INFO']['template_naming'][0]['name_type'] = '20';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_index'] = '999999';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_workflow_name'] = 'Title';
                    result['TEMPLATE_INFO']['template_naming'][1] = [];
                    result['TEMPLATE_INFO']['template_naming'][1]['name_type'] = '5';
                    result['TEMPLATE_INFO']['template_naming'][1]['name_index'] = '999998';
                    result['TEMPLATE_INFO']['template_naming'][1]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][1]['name_workflow_name'] = '';
                    break;
                case '5':
                    result['TEMPLATE_INFO']['prefix_ws_name'] = 'yes';
                    result['TEMPLATE_INFO']['prefix_page_name'] = 'no';
                    result['TEMPLATE_INFO']['template_naming'][0] = [];
                    result['TEMPLATE_INFO']['template_naming'][0]['name_type'] = '20';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_index'] = '999999';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_workflow_name'] = 'Title';
                    result['TEMPLATE_INFO']['template_naming'][1] = [];
                    result['TEMPLATE_INFO']['template_naming'][1]['name_type'] = '24';
                    result['TEMPLATE_INFO']['template_naming'][1]['name_index'] = '999998';
                    result['TEMPLATE_INFO']['template_naming'][1]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][1]['name_workflow_name'] = '';
                    result['TEMPLATE_INFO']['template_naming'][2] = [];
                    result['TEMPLATE_INFO']['template_naming'][2]['name_type'] = '5';
                    result['TEMPLATE_INFO']['template_naming'][2]['name_index'] = '999997';
                    result['TEMPLATE_INFO']['template_naming'][2]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][2]['name_workflow_name'] = '';
                    break;
                case '6':
                    result['TEMPLATE_INFO']['prefix_ws_name'] = 'yes';
                    result['TEMPLATE_INFO']['prefix_page_name'] = 'yes';
                    result['TEMPLATE_INFO']['template_naming'][0] = [];
                    result['TEMPLATE_INFO']['template_naming'][0]['name_type'] = '20';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_index'] = '999999';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_workflow_name'] = 'Title';
                    break;
                case '7':
                    result['TEMPLATE_INFO']['prefix_ws_name'] = 'yes';
                    result['TEMPLATE_INFO']['prefix_page_name'] = 'yes';
                    result['TEMPLATE_INFO']['template_naming'][0] = [];
                    result['TEMPLATE_INFO']['template_naming'][0]['name_type'] = '20';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_index'] = '999999';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_workflow_name'] = 'Title';
                    result['TEMPLATE_INFO']['template_naming'][1] = [];
                    result['TEMPLATE_INFO']['template_naming'][1]['name_type'] = '5';
                    result['TEMPLATE_INFO']['template_naming'][1]['name_index'] = '999998';
                    result['TEMPLATE_INFO']['template_naming'][1]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][1]['name_workflow_name'] = '';
                    break;
                case '8':
                    result['TEMPLATE_INFO']['prefix_ws_name'] = 'yes';
                    result['TEMPLATE_INFO']['prefix_page_name'] = 'yes';
                    result['TEMPLATE_INFO']['template_naming'][0] = [];
                    result['TEMPLATE_INFO']['template_naming'][0]['name_type'] = '20';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_index'] = '999999';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_workflow_name'] = 'Title';
                    result['TEMPLATE_INFO']['template_naming'][1] = [];
                    result['TEMPLATE_INFO']['template_naming'][1]['name_type'] = '24';
                    result['TEMPLATE_INFO']['template_naming'][1]['name_index'] = '999998';
                    result['TEMPLATE_INFO']['template_naming'][1]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][1]['name_workflow_name'] = '';
                    result['TEMPLATE_INFO']['template_naming'][2] = [];
                    result['TEMPLATE_INFO']['template_naming'][2]['name_type'] = '5';
                    result['TEMPLATE_INFO']['template_naming'][2]['name_index'] = '999997';
                    result['TEMPLATE_INFO']['template_naming'][2]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][2]['name_workflow_name'] = '';
                    break;
                case '9':
                    result['TEMPLATE_INFO']['prefix_ws_name'] = 'no';
                    result['TEMPLATE_INFO']['prefix_page_name'] = 'no';
                    result['TEMPLATE_INFO']['template_naming'][0] = [];
                    result['TEMPLATE_INFO']['template_naming'][0]['name_type'] = '20';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_index'] = '999999';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_workflow_name'] = 'Title';
                    result['TEMPLATE_INFO']['template_naming'][1] = [];
                    result['TEMPLATE_INFO']['template_naming'][1]['name_type'] = '24';
                    result['TEMPLATE_INFO']['template_naming'][1]['name_index'] = '999998';
                    result['TEMPLATE_INFO']['template_naming'][1]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][1]['name_workflow_name'] = '';
                    result['TEMPLATE_INFO']['template_naming'][2] = [];
                    result['TEMPLATE_INFO']['template_naming'][2]['name_type'] = '5';
                    result['TEMPLATE_INFO']['template_naming'][2]['name_index'] = '999997';
                    result['TEMPLATE_INFO']['template_naming'][2]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][2]['name_workflow_name'] = '';
                    result['TEMPLATE_INFO']['template_naming'][3] = [];
                    result['TEMPLATE_INFO']['template_naming'][3]['name_type'] = '10';
                    result['TEMPLATE_INFO']['template_naming'][3]['name_index'] = '999996';
                    result['TEMPLATE_INFO']['template_naming'][3]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][3]['name_workflow_name'] = '';
                    break;
                case '10':
                    result['TEMPLATE_INFO']['prefix_ws_name'] = 'yes';
                    result['TEMPLATE_INFO']['prefix_page_name'] = 'no';
                    result['TEMPLATE_INFO']['template_naming'][0] = [];
                    result['TEMPLATE_INFO']['template_naming'][0]['name_type'] = '20';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_index'] = '999999';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_workflow_name'] = 'Title';
                    result['TEMPLATE_INFO']['template_naming'][1] = [];
                    result['TEMPLATE_INFO']['template_naming'][1]['name_type'] = '24';
                    result['TEMPLATE_INFO']['template_naming'][1]['name_index'] = '999998';
                    result['TEMPLATE_INFO']['template_naming'][1]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][1]['name_workflow_name'] = '';
                    result['TEMPLATE_INFO']['template_naming'][2] = [];
                    result['TEMPLATE_INFO']['template_naming'][2]['name_type'] = '5';
                    result['TEMPLATE_INFO']['template_naming'][2]['name_index'] = '999997';
                    result['TEMPLATE_INFO']['template_naming'][2]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][2]['name_workflow_name'] = '';
                    result['TEMPLATE_INFO']['template_naming'][3] = [];
                    result['TEMPLATE_INFO']['template_naming'][3]['name_type'] = '10';
                    result['TEMPLATE_INFO']['template_naming'][3]['name_index'] = '999996';
                    result['TEMPLATE_INFO']['template_naming'][3]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][3]['name_workflow_name'] = '';
                    break;
                case '11':
                    result['TEMPLATE_INFO']['prefix_ws_name'] = 'yes';
                    result['TEMPLATE_INFO']['prefix_page_name'] = 'yes';
                    result['TEMPLATE_INFO']['template_naming'][0] = [];
                    result['TEMPLATE_INFO']['template_naming'][0]['name_type'] = '20';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_index'] = '999999';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][0]['name_workflow_name'] = 'Title';
                    result['TEMPLATE_INFO']['template_naming'][1] = [];
                    result['TEMPLATE_INFO']['template_naming'][1]['name_type'] = '24';
                    result['TEMPLATE_INFO']['template_naming'][1]['name_index'] = '999998';
                    result['TEMPLATE_INFO']['template_naming'][1]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][1]['name_workflow_name'] = '';
                    result['TEMPLATE_INFO']['template_naming'][2] = [];
                    result['TEMPLATE_INFO']['template_naming'][2]['name_type'] = '5';
                    result['TEMPLATE_INFO']['template_naming'][2]['name_index'] = '999997';
                    result['TEMPLATE_INFO']['template_naming'][2]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][2]['name_workflow_name'] = '';
                    result['TEMPLATE_INFO']['template_naming'][3] = [];
                    result['TEMPLATE_INFO']['template_naming'][3]['name_type'] = '10';
                    result['TEMPLATE_INFO']['template_naming'][3]['name_index'] = '999996';
                    result['TEMPLATE_INFO']['template_naming'][3]['name_target_id'] = '';
                    result['TEMPLATE_INFO']['template_naming'][3]['name_workflow_name'] = '';
                    break;

            }

            if(!no_overwrite) jQuery('#bpm_naming_rules').html(bpmcontext.bpm_ws_manager_naming(result));

            bpmcontext.bpm_ws_enable_save();
            bpmcontext.bpm_ws_manager_add_actions();

        }

        function bpm_ws_create_naming_dd(default_selected){

            var naming_selected = '';
            var custom_selected = 0;
            var set_selected = 0;

            var result = [];
            if(default_selected){
                result = default_selected;
            }else{
                bpm_settings['workspace_manager_vars'];
            }

            if(!result){
                naming_selected = '1_1_10_5';
            }else{
                //  page_name - workspace_name - 20 - 24 - 5 - 10
                var page_name = '0_';
                var workspace_name = '0_';
                var id_20 = '0_';
                var id_24 = '0_';
                var id_5 = '0_'
                var id_10 = '0';

                if(result['TEMPLATE_INFO']['prefix_page_name'] == '1') page_name = '1_';
                if(result['TEMPLATE_INFO']['prefix_ws_name'] == 'yes') workspace_name = '1_';

                jQuery(result['TEMPLATE_INFO']['template_naming']).each(function (index, value) {
                    if(value['name_type'] == 20) id_20 = '1_';
                    if(value['name_type'] == 24) id_24 = '1_';
                    if(value['name_type'] == 5) id_5 = '1_';
                    if(value['name_type'] == 10) id_10 = '1';
                });

                var selected_type = page_name + workspace_name + id_20 + id_24 + id_5 + id_10;

                switch(selected_type){
                    case '0_0_1_0_1_0':
                        set_selected = 1;
                        break;
                    case '0_0_1_1_1_0':
                        set_selected = 2;
                        break;
                    case '0_0_1_1_1_1':
                        set_selected = 9;
                        break;
                    case '0_1_1_0_0_0':
                        set_selected = 3;
                        break;
                    case '0_1_1_0_1_0':
                        set_selected = 4;
                        break;
                    case '0_1_1_1_1_0':
                        set_selected = 5;
                        break;
                    case '0_1_1_1_1_1':
                        set_selected = 10;
                        break;
                    case '1_1_1_0_0_0':
                        set_selected = 6;
                        break;
                    case '1_1_1_0_1_0':
                        set_selected = 7;
                        break;
                    case '1_1_1_1_1_0':
                        set_selected = 8;
                        break;
                    case '1_1_1_1_1_1':
                        set_selected = 11;
                        break;
                }
            }

            var type_dd = '<select class="bpm_ws_manager_field" id="bpm_ws_naming_default_rules" onchange="bpm_update_default_rules()">';
            var selected_item = [];
            for(var i = 0;i<21;i++){
                if(i== set_selected){
                    selected_item[i] = 'selected';
                }else {
                    selected_item[i] = '';
                }
            }

            if(naming_selected == '1_1_10_5' && set_selected == 0) selected_item[7] = 'selected';

            if(custom_selected == 1){
                type_dd = type_dd.concat('<option '+selected_item[20]+' value="20">Custom Selected</option>');
            }


            type_dd = type_dd.concat('<option '+selected_item[1]+' value="1">Title - Date</option>');
            type_dd = type_dd.concat('<option '+selected_item[2]+' value="2">Title - User Name - Date</option>');
            type_dd = type_dd.concat('<option '+selected_item[9]+' value="9">Title - User Name - Date - Page ID</option>');
            type_dd = type_dd.concat('<option '+selected_item[3]+' value="3">Workspace Name - Title</option>');
            type_dd = type_dd.concat('<option '+selected_item[4]+' value="4">Workspace Name - Title - Date</option>');
            type_dd = type_dd.concat('<option '+selected_item[5]+' value="5">Workspace Name - Title - User Name - Date</option>');
            type_dd = type_dd.concat('<option '+selected_item[10]+' value="10">Workspace Name - Title - User Name - Date - Page ID</option>');
            type_dd = type_dd.concat('<option '+selected_item[6]+' value="6">Workspace Name - Parent Page Name - Title</option>');
            type_dd = type_dd.concat('<option '+selected_item[7]+' value="7">Workspace Name - Parent Page Name - Title - Date</option>');
            type_dd = type_dd.concat('<option '+selected_item[8]+' value="8">Workspace Name - Parent Page Name - Title - User Name - Date</option>');
            type_dd = type_dd.concat('<option '+selected_item[11]+' value="11">Workspace Name - Parent Page Name - Title - User Name - Date - Page ID</option>');

            type_dd = type_dd.concat('</select>');

            return type_dd;

        }

        function bpm_ws_manager_sharing(no_div){

            var result = bpm_settings['workspace_manager_vars'];
            if(!result) result = bpm_settings['workspace_manager_new_vars'];
            if(!result) return;

            var html_line = '';

            if(!no_div) html_line = html_line.concat('<div id="bpm_ws_sharing_section">');

            if(result) {

                //sharing information
                if (result['TEMPLATE_INFO']['is_shared'] == 1) {
                    //Sharing

                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-small-9 bpm-large-9 bpm-columns text-left" >Sharing&nbsp;<a id="bpm_ws_designer_ws_shareing_help" onClick="bpmcontext.bpm_show_ws_tutorial(2005)"><span class="fa fa-question-circle bpm-wsd-help-icon"></span></a> </div>');
                    html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-right bpm_tutorial_text" >&nbsp; </div>');
                    html_line = html_line.concat('</div>');

                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-right" >'+bpmcontext.bpm_create_ws_save_message(5)+' </div>');
                    html_line = html_line.concat('</div>');


                    html_line = html_line.concat('<div id="bpm_ws_tutorial_2005" class="bpm-hide bpm-ws_tutorial-wrapper"></div>');

                    if (result['TEMPLATE_INFO']['ext_user_types']) {

                        var can_create = 'no';

                        if (result['TEMPLATE_INFO']['ext_can_create'] == 1) {
                            can_create = 'yes';
                        }

                        html_line = html_line.concat('<div class="bpm-row">');
                        html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
                        html_line = html_line.concat('<div class="bpm-small-7 bpm-large-7 bpm-columns text-left" >External Users Can Create New Workspaces:</div>');
                        html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-right bpm_tutorial_text" >' + bpmcontext.bpm_make_section_visible_dd('' + can_create + '', 'ext', 'ext_can_create') + ' </div>');
                        html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
                        html_line = html_line.concat('</div>');

                        var show_second = result['TEMPLATE_INFO']['ext_user_types'].length - 1;

                        if (result['TEMPLATE_INFO']['template_sections'].length > 0) {

                            html_line = html_line.concat('<div class="bpm-row">');
                            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
                            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" ><strong>Sections</strong></div>');
                            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-center bpm_tutorial_text" ><strong>' + result['TEMPLATE_INFO']['ext_user_types'][0]['name'] + '</strong></div>');
                            if (show_second) {
                                html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-center bpm_tutorial_text" ><strong>' + result['TEMPLATE_INFO']['ext_user_types'][1]['name'] + '</strong></div>');
                            } else {
                                html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
                            }
                            html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
                            html_line = html_line.concat('</div>');
                        }
                        //list of sections and checkboxes

                        jQuery(result['TEMPLATE_INFO']['template_sections']).each(function (index, value) {
                            if (value['sect_visible'] == 'yes') {
                                html_line = html_line.concat('<div class="bpm-row">');
                                html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
                                html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >&nbsp;&nbsp;' + value['sect_name'] + '</div>');
                                html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-center bpm_tutorial_text" >' + bpmcontext.bpm_make_shared_checkbox('section', result['TEMPLATE_INFO']['shared_array'], value['sect_index'], result['TEMPLATE_INFO']['ext_user_types'][0]['id']) + '</div>');
                                if (show_second) {
                                    html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-center bpm_tutorial_text" >' + bpmcontext.bpm_make_shared_checkbox('section', result['TEMPLATE_INFO']['shared_array'], value['sect_index'], result['TEMPLATE_INFO']['ext_user_types'][1]['id']) + '</div>');
                                } else {
                                    html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
                                }
                                html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
                                html_line = html_line.concat('</div>');
                            }
                        });

                        if (result['TEMPLATE_INFO']['template_infoboxes'].length > 0) {


                            html_line = html_line.concat('<br><div class="bpm-row">');
                            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
                            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" ><strong>Infoboxes</strong></div>');
                            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-center bpm_tutorial_text" ><strong>' + result['TEMPLATE_INFO']['ext_user_types'][0]['name'] + '</strong></div>');
                            if (show_second) {
                                html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-center bpm_tutorial_text" ><strong>' + result['TEMPLATE_INFO']['ext_user_types'][1]['name'] + '</strong></div>');
                            } else {
                                html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
                            }
                            html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
                            html_line = html_line.concat('</div>');
                        }

                        //list of infoboxes and checkboxes

                        jQuery(result['TEMPLATE_INFO']['template_infoboxes']).each(function (index, value) {
                            if (value['info_visible'] == 'yes') {
                                html_line = html_line.concat('<div class="bpm-row">');
                                html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
                                html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >&nbsp;&nbsp;' + value['info_name'] + '</div>');
                                html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-center bpm_tutorial_text" >' + bpmcontext.bpm_make_shared_checkbox('info', result['TEMPLATE_INFO']['shared_info_array'], value['info_index'], result['TEMPLATE_INFO']['ext_user_types'][0]['id']) + '</div>');
                                if (show_second) {
                                    html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-center bpm_tutorial_text" >' + bpmcontext.bpm_make_shared_checkbox('info', result['TEMPLATE_INFO']['shared_info_array'], value['info_index'], result['TEMPLATE_INFO']['ext_user_types'][1]['id']) + '</div>');
                                } else {
                                    html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
                                }
                                html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
                                html_line = html_line.concat('</div>');
                            }
                        });
                    }

                    html_line = html_line.concat('<br><hr class="bpm_hr_gray"><br>');
                }

            }else{
                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-small-9 bpm-large-9 bpm-columns text-left" >Sharing&nbsp;<a onClick="bpmcontext.bpm_show_ws_tutorial(2005)"><span class="fa fa-question-circle bpm-wsd-help-icon"></span></a> </div>');
                html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-right bpm_tutorial_text" >&nbsp; </div>');
                html_line = html_line.concat('</div>');

                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-right" >'+bpmcontext.bpm_create_ws_save_message(5)+' </div>');
                html_line = html_line.concat('</div>');


                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-left" >Save this template and create a page using this template to setup sharing.</div>');
                html_line = html_line.concat('</div><br>');

                html_line = html_line.concat('<br><hr class="bpm_hr_gray"><br>');
            }

            if(!no_div) html_line = html_line.concat('</div>');

            return html_line;

        }

        function bpm_routing_section_display(){
            if(jQuery('#bpm_template_type_ws').val() == 2){
                jQuery('#bpm_ws_manager_routing_options').html(bpm_ws_manager_routing(1));
                bpm_ws_manager_add_actions();
            }else{
                jQuery('#bpm_ws_manager_routing_options').html('');
                bpm_ws_manager_add_actions();
            }
        }

        function bpm_ws_manager_routing(no_div){

            var result = bpm_settings['workspace_manager_vars'];
            var arrows = '&nbsp;<a ><span class="fa fa-arrows-v bpm-wsd-help-icon">&nbsp;</span></a>';

            var html_line = '';
            if(!no_div) html_line = html_line.concat('<div id="bpm_ws_manager_routing_options">');

            var template_type = 0;;
            //routing rules
            if(result && !no_div) {
                template_type = result['TEMPLATE_INFO']['template_type'];
            }else{
                //set target for routing is dropdown selected
                template_type = jQuery('#bpm_template_type_ws').val();
            }

            var records = 0;

            if(template_type==2) {
                //Routing and Escalation

                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-small-9 bpm-large-9 bpm-columns text-left" >Serial Routing & Escalation&nbsp;<a id="bpm_ws_designer_ws_routing_help" onClick="bpmcontext.bpm_show_ws_tutorial(2006)"><span class="fa fa-question-circle bpm-wsd-help-icon"></span></a> </div>');
                html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-right bpm_tutorial_text" >&nbsp; </div>');
                html_line = html_line.concat('</div>');

                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-right" >'+bpm_create_ws_save_message(6)+' </div>');
                html_line = html_line.concat('</div><br>');

                html_line = html_line.concat('<div id="bpm_ws_tutorial_2006" class="bpm-hide bpm-ws_tutorial-wrapper"></div>');

                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
                html_line = html_line.concat('<div class="bpm-small-7 bpm-large-7 bpm-columns text-center bpm_tutorial_text" >Optional Escalation</div>');
                html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
                html_line = html_line.concat('</div>');

                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
                html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >Route To User</div>');
                html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" style="border-left:solid 1px black;border-top:solid 1px black;">Step Name</div>');
                html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" style="border-top:solid 1px black;">Goal Time</div>');
                html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" style="border-right:solid 1px black;border-top:solid 1px black;">Escalate To</div>');
                html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
                html_line = html_line.concat('</div>');

                html_line = html_line.concat('<div id="bpm_routing_sort">');

                if(result) {
                    jQuery(result['TEMPLATE_INFO']['routing']).each(function (index, value) {
                        records = 1;

                        var hide_remove = '';
                        if(index == 0) hide_remove = 'bpm-hide';
                        var remove_button = '<a class="'+hide_remove+'" id="bpm_routing_remove_button_' + value['route_index']+'" onClick="bpmcontext.bpm_ws_dd_config_remove_routing(' + value['route_index'] + ')"><span class="fa fa-minus-circle bpm_add_minus" style="padding-top:.15em;">&nbsp;</span></a>';
                        var add_button = '<a id="bpm_routing_add_button_' + value['route_index'] + '" onClick="bpmcontext.bpm_ws_dd_config_add_routing(' + value['route_index'] + ')"><span class="fa fa-plus-circle bpm_add_plus" style="padding-top:.15em;">&nbsp;</span></a>';

                        html_line = html_line.concat('<div class="bpm-row">');
                        html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-center bpm_tutorial_text" >'+arrows+'</div>');
                        html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_create_user_dropdown(value['route_index'], value['route_to_user'], result['TEMPLATE_INFO']['user_list'], 'routing') + '</div>');
                        html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_create_text_field('Step Name', 'bpm_routing_step_' + value['route_index'], 'bpm_routing_step_' + value['route_index'], value['step_name'], 'routing') + '</div>');
                        html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_create_time_dd(value['route_index'], value['goal_time_type'], value['goal_time_count']) + '</div>');
                        html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_create_user_dropdown(value['route_index'], value['escalate'], result['TEMPLATE_INFO']['user_list'], 'escalate_to') + '</div>');
                        if(index==result['TEMPLATE_INFO']['routing'].length - 1) {
                            html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >'+remove_button+'&nbsp;'+add_button+'</span> </div>');
                        }else {
                            html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >&nbsp;</div>');
                        }
                        html_line = html_line.concat('</div>');
                    });
                }
                if(records==0){

                    var user_list;

                    if (result) {
                        user_list = result['TEMPLATE_INFO']['user_list'];
                    } else {
                        if (bpm_settings['workspace_manager_new_vars']) {
                            user_list = bpm_settings['workspace_manager_new_vars']['TEMPLATE_INFO']['user_list'];
                        }
                    }

                    var remove_button = '<a class="bpm-hide" id="bpm_routing_remove_button_999998'+'" onClick="bpmcontext.bpm_ws_dd_config_remove_routing(999998)"><span class="fa fa-minus-circle bpm_add_minus" style="padding-top:.15em;">&nbsp;</span></a>';
                    var add_button = '<a id="bpm_routing_add_button_999998' + '" onClick="bpmcontext.bpm_ws_dd_config_add_routing(999998)"><span class="fa fa-plus-circle bpm_add_plus" style="padding-top:.15em;">&nbsp;</span></a>';

                    html_line = html_line.concat('<div class="bpm-row bpm_added_routing">');
                    html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-center bpm_tutorial_text" >'+arrows+'</div>');
                    html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_create_user_dropdown(999998, 0, user_list, 'routing') + '</div>');
                    html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_create_text_field('Step Name (Optional)', 'bpm_routing_step_999998', 'bpm_routing_step_999998', '', 'routing', '') + '</div>');
                    html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_create_time_dd(999998, '', '') + '</div>');
                    html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_create_user_dropdown(999998, 0, user_list, 'escalate_to') + '</div>');
                    html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >'+remove_button+'&nbsp;'+add_button+'</span> </div>');
                    html_line = html_line.concat('</div>');
                }

                html_line = html_line.concat('<br><hr class="bpm_hr_gray">');
            }

            html_line = html_line.concat('</div>');

            if(!no_div) html_line = html_line.concat('</div>');

            return html_line;

        }

        function bpm_create_time_dd(this_index, selected_val, time_val){

            if(!time_val) time_val = '';

            var text_field = bpm_create_text_field('Time', 'bpm_routing_time_' + this_index, 'bpm_routing_time_' + this_index, time_val, '',  '');

            var type_dd = '<select class="bpm_ws_manager_field " id="bpm_template_type_ws_esc_time_'+this_index+'">';

            var minute_sel = '';
            var hour_sel = '';
            var day_sel = '';
            var week_sel = '';

            if(!selected_val){
                minute_sel = 'selected';
            }else {
                if(selected_val == 'hour') hour_sel = 'selected';
                if(selected_val == 'minute') minute_sel = 'selected';
                if(selected_val == 'day') day_sel = 'selected';
                if(selected_val == 'week') week_sel = 'selected';
            }

            type_dd = type_dd.concat('<option '+minute_sel+' value="minute">Min</option>');
            type_dd = type_dd.concat('<option '+hour_sel+' value="hour">Hour</option>');
            type_dd = type_dd.concat('<option '+day_sel+' value="day">Day</option>');
            type_dd = type_dd.concat('<option '+week_sel+' value="week">Week</option>');
            type_dd = type_dd.concat('</select>');

            var html_line = '';
            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small- bpm-large-5 bpm-columns text-left bpm_tutorial_text" >'+text_field+'</div>');
            html_line = html_line.concat('<div class="bpm-small-7 bpm-large-7 bpm-columns text-left bpm_tutorial_text" >'+type_dd+'</div>');
            html_line = html_line.concat('</div>');
            return  html_line;
        }

        function bpm_edit_template(this_template, library_template_id, parent_id){

            bpm_settings['THIS_ADDING_WS'] = 0;
            bpm_settings['SHOW_NAMING'] = 0;
            bpm_settings['ws_reload_page'] = 0;
            bpm_settings['deleted_sections'] = [];
            bpm_settings['deleted_infobox'] = [];
            bpm_settings['deleted_naming'] = [];
            bpm_settings['deleted_routing'] = [];
            bpm_settings['no_delete_naming'] = 0;


            jQuery('#bpm_ws_error_message').hide();
         //   bpm_set_ws_content_height(0);

            bpm_settings['THIS_TEMPLATE_ID'] = this_template;
            if(parent_id){
                bpm_settings['THIS_PARENT_TEMPLATE'] = parent_id;
            }else{
                bpm_settings['THIS_PARENT_TEMPLATE'] = bpm_settings['PARENT_TEMPLATE_ID'];
            }

            bpm_settings['THIS_LIBRARY_ID'] = library_template_id;

            var html_line = '';

            var querystring = 'domain=' + bpm_current_domain + "&action=get_template_info&templateid=" + this_template;

            jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function (result) {

                if(result) {
                    jQuery('#bpm_ws_master_save_buttons').show();
                    bpm_settings['workspace_manager_vars'] = result;

                    bpm_settings['ws_parent_template'] = result['TEMPLATE_INFO']['parent_template'];

                    html_line = html_line.concat(bpmcontext.bpm_ws_manager_general_info());
                    html_line = html_line.concat(bpmcontext.bpm_ws_manager_section());
                    html_line = html_line.concat(bpmcontext.bpm_ws_manager_infoboxes());
                    html_line = html_line.concat(bpmcontext.bpm_ws_manager_naming());
                    html_line = html_line.concat(bpmcontext.bpm_ws_manager_sharing());
                    html_line = html_line.concat(bpmcontext.bpm_ws_manager_routing());

                    jQuery('#bpm_workspace_manager_content').html(html_line);
                    jQuery('#bpm_ws_pub_dd').html(bpmcontext.bpm_get_pub_dd(result));

                    bpm_update_default_rules(1);
                    bpm_ws_manager_add_actions();
                    bpm_ws_disable_save();

                    //add purchase message if necessary
                    if(bpm_settings['WORKSPACES_AVL'] == 0 && result['TEMPLATE_INFO']['template_status'] == 'no') {
                        jQuery('#bpm_main_content').html(jQuery('#bpm_purchase_message').html());
                        bpm_settings['bpm_ws_purchase_message'] = 1;
                    }else{
                        bpm_settings['bpm_ws_purchase_message'] = 0;
                    }
                    if(bpm_settings['bpm_ws_manager_tutorial_viewed'] == 0) bpm_show_ws_tutorial(2000);
                }
            });
        }

        function bpm_create_user_dropdown(this_index, selected_id, user_list , this_type){

            var type_dd = '<select class="bpm_ws_manager_field " id="bpm_template_ws_'+this_type+'_dd_'+this_index+'">';

            if(selected_id == 0){
                type_dd = type_dd.concat('<option selected value="0">Select User...</option>');
            }else{
                type_dd = type_dd.concat('<option value="0">Select User...</option>');
            }

            jQuery(user_list).each(function(index, value){

                if(value['user_id'] == selected_id){
                    type_dd = type_dd.concat('<option selected value="'+value['user_id']+'">'+value['user_name']+'</option>');
                }else{
                    type_dd = type_dd.concat('<option value="'+value['user_id']+'">'+value['user_name']+'</option>');
                }
            });

            type_dd = type_dd.concat('</select>');

            return type_dd;
        }

        function bpm_edit_wf_goal(item_id){

        }

        function bpm_edit_wf_escalate(item_id){

        }

        function bpm_make_shared_checkbox(cb_type, data_set, item_index, ext_user_id){

            var is_checked = '';

            if(data_set) {
                jQuery(data_set).each(function (index, value) {
                    if (value['item_index'] == item_index && value['ext_type'] == ext_user_id) is_checked = 'checked';
                });
            }

            return 	'<input class="bpm_ws_manager_field_cb" id="bpm_shared_cb_item_'+cb_type+'_'+item_index+'_'+ext_user_id+'" type="checkbox" name="bpm_shared_cb_item_'+cb_type+'_'+item_index+'" value="1" '+is_checked+'>';

        }

        function bpm_make_naming_type_dd(name_type, name_index){

            var currentdate_selected = '';
            var text_selected = '';
            var pageid_selected = '';
            var user_selected = '';

            switch(name_type){
                case '5':
                    currentdate_selected = 'selected';
                    break
                case '20':
                    text_selected = 'selected';
                    break;
                case '10':
                    pageid_selected = 'selected';
                    break;
                case '24':
                    user_selected = 'selected';
                    break;
            }

            var type_dd = '<select class="bpm_ws_manager_field bpm_ws_type_naming" id="bpm_template_type_ws_naming_'+name_index+'" onchange="bpm_update_naming_target('+name_index+')">';

            if(name_index == 0){
                type_dd = type_dd.concat('<option selected value="0">Select field type...</option>');
            }

            type_dd = type_dd.concat('<option '+currentdate_selected+' value="5">Current Date</option>');
            type_dd = type_dd.concat('<option '+user_selected+' value="24">Current User Name</option>');
            type_dd = type_dd.concat('<option '+text_selected+' value="20">Text Field</option>');
            type_dd = type_dd.concat('<option '+pageid_selected+' value="10">Page ID</option>');
            type_dd = type_dd.concat('</select>');

            return type_dd;
        }

        function bpm_update_naming_target(this_index){

            //update text field
            if(jQuery('#bpm_template_type_ws_naming_'+this_index).val() == 20){
                var dd_value = jQuery('#bpm_template_ws_target_infobox_'+this_index+ ' option:selected').text();
                jQuery('#bpm_ws_display_name_'+this_index).show();
                jQuery('#bpm_ws_display_name_'+this_index).parent().html(jQuery('#bpm_ws_display_name_'+this_index).parent().html().replace(/&nbsp;/g, ''));
                if(jQuery('#bpm_template_ws_target_infobox_'+this_index).val() != 0 && dd_value && !jQuery('#bpm_ws_display_name_'+this_index).val().length){
                    jQuery('#bpm_ws_display_name_'+this_index).val(dd_value);
                }
            }else{
                jQuery('#bpm_ws_display_name_'+this_index).parent().html(jQuery('#bpm_ws_display_name_'+this_index).parent().html() + '&nbsp;');
                jQuery('#bpm_ws_display_name_'+this_index).hide();
            }


            //set allowable infobox fields
            var result = bpm_settings['workspace_manager_vars'];
            if(!result) result = bpm_settings['workspace_manager_new_vars'];
            if(!result) return;
            var template_infoboxes = result['TEMPLATE_INFO']['template_infoboxes'];

            var name_target_id = jQuery('#bpm_template_ws_target_infobox_'+this_index+ ' option:selected').val();

            //get infobox types allowed

            var naming_type = jQuery('#bpm_template_type_ws_naming_'+this_index+ ' option:selected').val();
            var allowable_types = [];

            switch(naming_type){
                case '5': //current date
                    allowable_types.push('3');
                    break;
                case '20': //text field
                    allowable_types.push('1', '2', '17');
                    break;
                case "24": //current user
                    allowable_types.push('19');
                    break;
                case "10": //page id
                    allowable_types.push('1', '2');
                    break;
            }


            var this_dd = bpmcontext.bpm_make_naming_target_dd(name_target_id, this_index, template_infoboxes, allowable_types);

            jQuery('#bpm_template_ws_target_infobox_'+this_index).empty().append(this_dd);


        }

        function bpm_ws_dd_config_add_routing(this_id) {


            var result = bpm_settings['workspace_manager_vars'];
            if (!result) result = bpm_settings['workspace_manager_new_vars'];
            if (!result) return;
            var infobox_list = result['TEMPLATE_INFO']['template_infoboxes'];

            //hide button
            jQuery('#bpm_naming_add_button_' + this_id).hide();

            //add new row
            var html_line = '';
            var arrows = '&nbsp;<a ><span class="fa fa-arrows-v bpm-wsd-help-icon">&nbsp;</span></a>';
            var item_index = jQuery('.bpm_added_routing').length + 999999;

            var user_list;

            if (result) {
                user_list = result['TEMPLATE_INFO']['user_list'];
            } else {
                if (bpm_settings['workspace_manager_new_vars']) {
                    user_list = bpm_settings['workspace_manager_new_vars']['TEMPLATE_INFO']['user_list'];
                }
            }

            var remove_button = '<a id="bpm_routing_remove_button_' + item_index + '" onClick="bpmcontext.bpm_ws_dd_config_remove_routing('+item_index+')"><span class="fa fa-minus-circle bpm_add_minus" style="padding-top:.15em;">&nbsp;</span></a>';
            var add_button = '<a id="bpm_routing_add_button_' + item_index + '" onClick="bpmcontext.bpm_ws_dd_config_add_routing('+item_index+')"><span class="fa fa-plus-circle bpm_add_plus" style="padding-top:.15em;">&nbsp;</span></a>';

            html_line = html_line.concat('<div class="bpm-row bpm_added_routing">');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-center bpm_tutorial_text" >' + arrows + '</div>');
            html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_create_user_dropdown(item_index, 0, user_list, 'routing') + '</div>');
            html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_create_text_field('Step Name (Optional)', 'bpm_routing_step_'+item_index+'', 'bpm_routing_step_'+item_index+'', '', 'routing') + '</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_create_time_dd(item_index, '', '') + '</div>');
            html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_create_user_dropdown(item_index, 0, result['TEMPLATE_INFO']['user_list'], 'escalate_to') + '</div>');
            html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >' + remove_button + '&nbsp;' + add_button + '</span> </div>');
            html_line = html_line.concat('</div>');

            jQuery('#bpm_routing_add_button_'+this_id).parent().parent().after(html_line);

            bpmcontext.bpm_ws_manager_add_actions();
        }

        function bpm_ws_dd_config_remove_routing(this_id, this_item){

            if(this_id < 999900){

                var deleted_routing = [];
                if(bpm_settings['deleted_routing']) {
                    deleted_routing = bpm_settings['deleted_routing'];
                }
                deleted_routing.push(this_id);
                deleted_routing['deleted_routing'] = deleted_routing;
            }

            jQuery('#bpm_routing_remove_button_'+this_id).parent().parent().remove();

            //show the last button
            bpmcontext.bpm_reset_routing_plus();

            //show save button
            bpmcontext.bpm_ws_enable_save();

        }

        function bpm_ws_dd_config_remove_naming(this_id, this_item){

            jQuery('#bpm_naming_remove_button_'+this_id).parent().parent().remove();

            //show the last button
            bpmcontext.bpm_reset_name_plus();

            //show save button
            bpmcontext.bpm_ws_enable_save();

        }

        function bpm_ws_dd_config_add_naming(this_id){


            var result = bpm_settings['workspace_manager_vars'];
            if(!result) result = bpm_settings['workspace_manager_new_vars'];
            if(!result) return;
            var infobox_list = result['TEMPLATE_INFO']['template_infoboxes'];

            //hide button
            jQuery('#bpm_naming_add_button_'+this_id).hide();

            //add new row
            var html_line = '';
            var arrows = '&nbsp;<a ><span class="fa fa-arrows-v bpm-wsd-help-icon">&nbsp;</span></a>';
            var item_index = jQuery('.bpm_added_naming').length + 999999;

            var remove_button = '<a id="bpm_naming_remove_button_' + item_index + '" onClick="bpmcontext.bpm_ws_dd_config_remove_naming(' + item_index + ')"><span class="fa fa-minus-circle bpm_add_minus" style="padding-top:.15em;">&nbsp;</span></a>';
            var add_button = '<a id="bpm_naming_add_button_' + item_index + '" onClick="bpmcontext.bpm_ws_dd_config_add_naming(' + item_index + ')"><span class="fa fa-plus-circle bpm_add_plus" style="padding-top:.15em;">&nbsp;</span></a>';

            html_line = html_line.concat('<div class="bpm-row bpm_added_naming">');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns text-center bpm_tutorial_text" >'+arrows+'</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_naming_type_dd(0, item_index) + '</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_make_naming_target_dd(0, item_index, infobox_list) + '</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_tutorial_text" >' + bpmcontext.bpm_create_text_field('Display name', 'bpm_ws_display_name_'+item_index, 'bpm_ws_display_name_'+item_index, '', 'naming' , 'bpm-hide') + '&nbsp;</div>');
            html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_tutorial_text" >'+remove_button + '&nbsp;'+add_button + '</div>');
            html_line = html_line.concat('</div>');

            jQuery('#bpm_naming_add_button_'+this_id).parent().parent().after(html_line);

            bpmcontext.bpm_ws_manager_add_actions();
        }

        function bpm_make_naming_target_dd(name_target_id, name_index, template_infoboxes, allowable_types){

            if(!template_infoboxes) return;

            if(template_infoboxes.length == 0){
                return '';
            }

            var type_dd = '';

            if(!allowable_types) {
                type_dd = '<select class="bpm_ws_manager_field" id="bpm_template_ws_target_infobox_' + name_index + '" onchange="bpm_update_naming_target(' + name_index + ')">';
            }


            type_dd = type_dd.concat('<option selected value="0">No Infobox Target</option>');

            jQuery(template_infoboxes).each(function(index, value){
                var can_add = 1;
                if(allowable_types){
                    if(allowable_types.indexOf(value['info_type']) < 0){
                        can_add = 0;
                    }
                }
                if(can_add) {
                    if (value['info_index'] == name_target_id) {
                        type_dd = type_dd.concat('<option selected value="' + value['info_index'] + '">' + value['info_name'] + '</option>');
                    } else {
                        type_dd = type_dd.concat('<option value="' + value['info_index'] + '">' + value['info_name'] + '</option>');
                    }
                }
            });

            if(!allowable_types) type_dd = type_dd.concat('</select>');

            return type_dd;

        }

        function bpm_make_section_type_text(section_type, section_id, type, dd_field) {

            var this_dd = '<div style="margin-top:.5em;height:100%;width:100%;" class="bpm_ws_manager_field" id="bpm_template_' + type + '_type_ws_' + section_id + '">';

            if (type == 'section') {

                switch (section_type) {
                    case '1':
                        this_dd = this_dd.concat('Text Section');
                        break;
                    case '6':
                        this_dd = this_dd.concat('Discussions Section');
                        break;
                    case '10':
                        this_dd = this_dd.concat('Attachments Section');
                        break;
                }

            }else if(type == 'info'){
                //setup infobox text for display
                var text_value = '';
                switch(section_type){
                    case '1':
                        text_value = 'Text';
                        break;
                    case '2':
                        text_value = 'Number';
                        break;
                    case '3':
                        text_value = 'Date';
                        break;
                    case '6':
                        text_value = 'Dropdown:'+dd_field;
                        break;
                    case '12':
                        text_value = 'Page ID';
                        break;
                    case '17':
                        text_value = 'Email';
                        break;
                    case '19':
                        text_value = 'User';
                        break;
                }
                this_dd = this_dd.concat(text_value);
            }else{

                var selected_item = [];
                selected_item[section_type] = 'selected';

                this_dd = this_dd.concat('<option ' + selected_item[1] + ' value="1">Text</option>');
                this_dd = this_dd.concat('<option ' + selected_item[2] + ' value="2">Number</option>');
                this_dd = this_dd.concat('<option ' + selected_item[3] + ' value="3">Date</option>');
                this_dd = this_dd.concat('<option ' + selected_item[6] + ' value="6">Dropdown</option>');
                this_dd = this_dd.concat('<option ' + selected_item[12] + ' value="12">Page ID</option>');
                this_dd = this_dd.concat('<option ' + selected_item[17] + ' value="17">Email</option>');
                this_dd = this_dd.concat('<option ' + selected_item[19] + ' value="19">User</option>');

            }

            this_dd = this_dd.concat('</div>');

            return this_dd;

        }
        function bpm_update_config_icon(this_id){

            if(jQuery('#bpm_template_info_type_ws_' + this_id ).val()==6) {
                jQuery('#bpm_info_config_button_' + this_id).show();
                var dd_parts = jQuery('#bpm_template_info_type_ws_' + this_id).text().split(':');
                if(dd_parts.length == 2){
                    jQuery('#bpm_info_config_button_icon_' + this_id).addClass('bpm_add_gear');
                    jQuery('#bpm_info_config_button_icon_' + this_id).removeClass('bpm_add_gear_not_configed');
                }else{
                   jQuery('#bpm_info_config_button_icon_' + this_id).removeClass('bpm_add_gear');
                   jQuery('#bpm_info_config_button_icon_' + this_id).addClass('bpm_add_gear_not_configed');
                }
            }else{
                jQuery('#bpm_info_config_button_' + this_id).hide();
            }
        }

        function bpm_make_section_type_dd(section_type, section_id, type, raw_value, hide_class) {

            var this_dd = '';
            if(!hide_class){
                hide_class = '';
            }

            if (type == 'section') {
                var this_dd = '<select class="bpm_ws_manager_field '+hide_class+'" id="bpm_template_' + type + '_type_ws_' + section_id + '">';
            } else {
                var this_dd = '<select onchange="bpmcontext.bpm_update_config_icon('+section_id+')" class="bpm_ws_manager_field '+hide_class+'" id="bpm_template_' + type + '_type_ws_' + section_id + '">';
            }

            if (section_type == 0) {
                if (type == 'section') {
                    this_dd = this_dd.concat('<option selected value="0">Select Section Type...</option>');
                } else {
                    this_dd = this_dd.concat('<option selected value="0">Select Infobox Type...</option>');
                }
            }

            if (type == 'section' || type == 'section_new') {

                var text_selected = '';
                var disc_selected = '';
                var attach_selected = '';

                if (section_type == 1) text_selected = 'selected';
                if (section_type == 6) disc_selected = 'selected';
                if (section_type == 10) attach_selected = 'selected';

                this_dd = this_dd.concat('<option ' + text_selected + ' value="1">Text</option>');
                this_dd = this_dd.concat('<option ' + disc_selected + ' value="6">Discussion</option>');
                this_dd = this_dd.concat('<option ' + attach_selected + ' value="10">Attachment</option>');

            }else{

                var selected_item = [];
                selected_item[section_type] = 'selected';

                var dropdown_name = '';
                if(raw_value) {
                    if (raw_value['source_field']) {
                        dropdown_name = ':' + raw_value['source_field'];
                    }
                }

                this_dd = this_dd.concat('<option ' + selected_item[1] + ' value="1">Text</option>');
                this_dd = this_dd.concat('<option ' + selected_item[2] + ' value="2">Number</option>');
                this_dd = this_dd.concat('<option ' + selected_item[3] + ' value="3">Date</option>');
                this_dd = this_dd.concat('<option ' + selected_item[6] + ' value="6">Dropdown'+dropdown_name+'</option>');
                this_dd = this_dd.concat('<option ' + selected_item[12] + ' value="12">Page ID</option>');
                this_dd = this_dd.concat('<option ' + selected_item[17] + ' value="17">Email</option>');
                this_dd = this_dd.concat('<option ' + selected_item[19] + ' value="19">User</option>');

            }

            this_dd = this_dd.concat('</select>');

            return this_dd;

        }

        function bpm_make_section_visible_dd(section_visible, section_id, type){

            var is_visible = '';
            var not_visible = '';

            if(section_visible=='yes') is_visible = 'selected';
            if(section_visible=='no') not_visible = 'selected';

            var this_dd = '<select class="bpm_ws_manager_field" id="bpm_template_'+type+'_visible_ws_'+section_id+'">';
            this_dd = this_dd.concat('<option '+is_visible+' value="yes">Yes</option>');
            this_dd = this_dd.concat('<option '+not_visible+' value="no">No</option>');
            this_dd = this_dd.concat('</select>');

            return this_dd;

        }

        function bpm_ws_manager_add_actions(){

            jQuery( ".bpm_ws_manager_field" ).change(function() {
                bpmcontext.bpm_ws_enable_save();
            });

            jQuery('#bpm_workspace_manager_content').keypress(function (e) {
                bpmcontext.bpm_ws_enable_save();
            });
            jQuery( ".bpm_ws_manager_field_cb" ).change(function() {
                bpmcontext.bpm_ws_enable_save();
            });

            jQuery('#bpm_section_sort').sortable({
                update: function(event, ui) {
                    bpmcontext.bpm_reset_section_plus();
                    bpmcontext.bpm_ws_enable_save();
                }
            });
            jQuery('#bpm_info_sort').sortable({
                update: function(event, ui) {
                    bpmcontext.bpm_reset_info_plus();
                    bpmcontext.bpm_ws_enable_save();
                }
            });
            jQuery('#bpm_naming_sort').sortable({
                update: function(event, ui) {
                    bpmcontext.bpm_reset_naming_plus();
                    bpmcontext.bpm_ws_enable_save();
                }
            });
            jQuery('#bpm_routing_sort').sortable({
                update: function(event, ui) {
                    bpmcontext.bpm_reset_routing_plus();
                    bpmcontext.bpm_ws_enable_save();
                }
            });

            jQuery(bpm_settings['ws_update_dropdowns']).each( function(index, value){
                bpmcontext.bpm_update_naming_target(value);
            });

            jQuery('#bpm_workspace_manager').foundation('alert', 'reflow');
        }

        function bpm_reset_routing_plus(){
            return;
            var this_id = '';
            jQuery('.bpm_ws_type_section').each(function(index, value) {

                var id_parts = [];
                id_parts = jQuery(this).prop('id').split('_');

                if (jQuery(this).prop('id').indexOf("bpm_section_name_new_") >= 0){
                    this_id = id_parts[4];
                }else{
                    this_id = id_parts[3];
                }
                jQuery('#bpm_section_add_button_'+this_id).hide();

            });

            jQuery('#bpm_section_add_button_'+this_id).show();
        }

        function bpm_reset_naming_plus(){
            return;
            var this_id = '';
            jQuery('.bpm_ws_type_section').each(function(index, value) {

                var id_parts = [];
                id_parts = jQuery(this).prop('id').split('_');

                if (jQuery(this).prop('id').indexOf("bpm_section_name_new_") >= 0){
                    this_id = id_parts[4];
                }else{
                    this_id = id_parts[3];
                }
                jQuery('#bpm_section_add_button_'+this_id).hide();

            });

            jQuery('#bpm_section_add_button_'+this_id).show();
        }

        function bpm_reset_section_plus(){
            var this_id = '';
            jQuery('.bpm_ws_type_section').each(function(index, value) {

                var id_parts = [];
                id_parts = jQuery(this).prop('id').split('_');

                if (jQuery(this).prop('id').indexOf("bpm_section_name_new_") >= 0){
                    this_id = id_parts[4];
                }else{
                    this_id = id_parts[3];
                }
                jQuery('#bpm_section_add_button_'+this_id).hide();

            });

            jQuery('#bpm_section_add_button_'+this_id).show();
        }

        function bpm_reset_info_plus(){

            var this_id = '';

            jQuery('.bpm_ws_type_info').each(function(index, value) {

                var id_parts = [];
                id_parts = jQuery(this).prop('id').split('_');

                if (jQuery(this).prop('id').indexOf("bpm_infobox_name_new_") >= 0){
                    this_id = id_parts[4];
                }else{
                    this_id = id_parts[3];
                }
                jQuery('#bpm_info_add_button_'+this_id).hide();

            });

            jQuery('#bpm_info_add_button_'+this_id).show();
        }

        function bpm_reset_name_plus(){

            var this_id = '';

            jQuery('.bpm_ws_type_naming').each(function(index, value) {

                var id_parts = [];
                id_parts = jQuery(this).prop('id').split('_');

                if (jQuery(this).prop('id').indexOf("bpm_naming_name_new_") >= 0){
                    this_id = id_parts[4];
                }else{
                    this_id = id_parts[3];
                }
                jQuery('#bpm_naming_add_button_'+this_id).hide();

            });

            jQuery('#bpm_naming_add_button_'+this_id).show();
        }

        function bpm_reset_routing_plus(){

            var this_id = '';

            jQuery('.bpm_ws_type_routing').each(function(index, value) {

                var id_parts = [];
                id_parts = jQuery(this).prop('id').split('_');

                if (jQuery(this).prop('id').indexOf("bpm_naming_routing_new_") >= 0){
                    this_id = id_parts[4];
                }else{
                    this_id = id_parts[3];
                }
                jQuery('#bpm_routing_add_button_'+this_id).hide();

            });

            jQuery('#bpm_routing_add_button_'+this_id).show();
        }

        function bpm_create_text_field(placeholder, field_name, field_id, field_value, class_id, hide_field){

            var show_text = '';
            if(hide_field) {
                if (hide_field.length > 0) {
                    return '&nbsp;'+ field_value + '<input class="bpm_ws_manager_field '+ hide_field + ' bpm_ws_type_'+class_id+'" type="hidden" placeholder="'+placeholder+'" name="'+field_name+'" id="'+field_id+'" value="'+field_value+'" />';
                }
            }
            if(!hide_field) hide_field = '';
            return '<input class="bpm_ws_manager_field '+ hide_field + ' bpm_ws_type_'+class_id+'" type="text" placeholder="'+placeholder+'" name="'+field_name+'" id="'+field_id+'" value="'+field_value+'" />';
        }


        function bpm_create_ws_save_message(this_id){

            var html_line = '';
            return html_line;

            html_line = html_line.concat('<div id="bpm_ws_cancel_alert_'+this_id+'" class="bpm-hide ">');

            var confirm_button =  '<a onClick="bpmcontext.bpm_cancel_workspace_confirmed('+this_id+');" class="button bpm-small-button bpm_lng_save bpm_ws_cancel_button" style="text-decoration: none;">Close without Saving</a>';
            var cancel_button =  '<a onClick="bpmcontext.bpm_cancel_workspace_not_confirmed('+this_id+');" class="button bpm-small-button bpm_lng_save bpm_ws_cancel_button" style="text-decoration: none;">Cancel</a>';

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-right bpm_tutorial_text" >You have unsaved changes. &nbsp;'+confirm_button+' ' + cancel_button+'</div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat('</div>');
            return html_line;
        }

        function bpm_cancel_workspace_not_confirmed(this_id){
            jQuery('#bpm_ws_cancel_alert_'+this_id).hide();
        }

        function bpm_cancel_workspace_confirmed(this_id){
            bpm_settings['ws_changes_pending'] = 0;
            jQuery('#bpm_ws_cancel_alert_'+this_id).hide();

            bpmcontext.bpm_refresh_page_loading();
            bpmcontext.bpm_load_page(bpm_get_string + '&action=bpmcontext', 1);

        }

        function bpm_cancel_workspace(this_id){

            //if no changes then
            if(bpm_settings['ws_changes_pending']==1){
                //get validation to close without saving
                jQuery('#bpm_ws_cancel_alert_'+this_id).show();

            }else{
                bpm_settings['ws_changes_pending'] = 0;
                jQuery('#bpm_ws_cancel_alert_'+this_id).hide();

                bpmcontext.bpm_refresh_page_loading();
                bpmcontext.bpm_load_page(bpm_get_string + '&action=bpmcontext', 1);

            }
        }

        function bpm_set_ws_content_height(has_error){

            var viewportHeight = jQuery(window).height() * .7;
            var content_height = viewportHeight - 110;
            if(bpm_settings['bpm_ws_purchase_message'] == 1)  content_height = content_height - 70;
            if(has_error) content_height = content_height - 70;
            jQuery('#bpm_workspace_manager_content').height(content_height);

        }

        function bpm_action(selected_object){

            var option_string = '';
            var message = '';
            var show_string = '';
            var hide_string = '';
            var viewportHeight = jQuery(window).height() * .7;

            jQuery('.bpm_toolbar_options_dd').hide();
            hide_string = selected_object.id;

            switch(selected_object.id){

                case 'bpm_toolbar_admin_edit_ws':

                    bpmcontext.bpm_edit_template(bpm_settings['TEMPLATE_ID'], bpm_settings['TEMPLATELIBID']);

                    jQuery('#bpm_main_content').html(jQuery('#bpm-workspace-designer-frame').html());
                    jQuery('.bpm-right-accordion').hide();
                    jQuery('.bpm-right-admin-accordion').show();
                    jQuery('.bpm-non-account-manager').hide();

                    bpmcontext.bpm_create_tips();
                    bpmcontext.bpm_set_url_links();

                    return;
                    break;

                case 'bpm_toolbar_admin_add_ws':
                    bpm_add_template();

                    jQuery('#bpm_main_content').html(jQuery('#bpm-workspace-designer-frame').html());
                    jQuery('.bpm-right-accordion').hide();
                    jQuery('.bpm-right-admin-accordion').show();
                    jQuery('.bpm-non-account-manager').hide();

                    bpmcontext.bpm_create_tips();
                    bpmcontext.bpm_set_url_links();

                    return;
                    break;

                case 'bpm_toolbar_admin_rename':
                    jQuery('#bpm_admin_rename_field').val(bpm_settings['bpm_current_page_name']);
                    jQuery('#bpm_rename_error_alert').hide();
                    jQuery('#bpm_rename_window').foundation('reveal', 'open');
                    return;
                    break;
                case 'bpm_restart_sharing':
                    bpm_confirm_option = 10;
                    bpmcontext.bpm_confirm_yes();
                    return;
                    break;
                case 'bpm_stop_sharing':
                    jQuery('#bpm_stop_sharing_window').foundation('reveal', 'open');
                    return;
                    break;
                case 'bpm_toolbar_cancel_delete':
                    bpm_confirm_option = 1;
                    jQuery('#bpm_confirm_cancel_delete').foundation('reveal', 'open');
                    return;
                    break;
                case 'bpm_toolbar_close':
                    bpm_confirm_option = 2;
                    bpmcontext.bpm_confirm_yes();
                    return;
                    break;
                case 'bpm_toolbar_publish':
                    bpm_confirm_option = 2;
                    jQuery('#bpm_confirm_publish').foundation('reveal', 'open');
        //            bpm_confirm_yes();
                    return;
                    break;
                case 'bpm_toolbar_can_subroute':
                    if(!bpm_route_users) return;
                    bpm_confirm_option = 3;
                    jQuery('#bpm_route_to_reveal_title').text("Sub-Route To");
                    bpmcontext.bpm_make_route_list(bpm_route_users);
                    //jQuery('#bpm_get_route_to_user').foundation('reveal', 'open');
                    return;
                    break;
                case 'bpm_toolbar_can_route_owner':
                    bpm_confirm_option = 4;
                    bpmcontext.bpm_confirm_yes();
                    return;
                    break;
                case 'bpm_toolbar_recall':
                    bpm_confirm_option = 5;
                    bpmcontext.bpm_confirm_yes();
                    return;
                    break;
                case 'bpm_toolbar_terminate':
                    bpm_confirm_option = 6;
                    jQuery('#bpm_confirm_terminate').foundation('reveal', 'open');
                    return;
                    break;
                case 'bpm_toolbar_can_route_to':
                    if(!bpm_route_users) return;
                    bpm_confirm_option = 3;
                    jQuery('#bpm_route_to_reveal_title').text("Route To");
                    bpmcontext.bpm_make_route_list(bpm_route_users);
                    //jQuery('#bpm_get_route_to_user').foundation('reveal', 'open');
                    return;
                    break;
                case 'bpm_toolbar_can_subroute_back':
                    bpm_confirm_option = 7;
                    bpmcontext.bpm_confirm_yes();
                    return;
                    break;
                case 'bpm_toolbar_can_route_next':
                    bpm_confirm_option = 8;
                    bpmcontext.bpm_confirm_yes();
                    return;
                    break;
                case 'bpm_toolbar_can_route_back':
                    if(!bpm_route_back_users) return;
                    bpm_confirm_option = 9;
                    jQuery('#bpm_route_to_reveal_title').text("Route Back To");
                    bpmcontext.bpm_make_route_list(bpm_route_users);
        //            jQuery('#bpm_get_route_to_user').foundation('reveal', 'open');
                    return;
                    break;
                case 'bpm_toolbar_admin_delete':
                    bpm_confirm_option = 1;
                    jQuery('#bpm_confirm_cancel_delete').foundation('reveal', 'open');
                    return;
                    break;
                case 'bpm_toolbar_admin_undelete':
                    option_string = '&domain=' + bpm_current_domain + '&action=undelete_page';
                    message = 'Page Restored';
                    jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + option_string, function (result) {
                        bpmcontext.bpm_refresh_page_loading();
                        bpmcontext.bpm_load_page(bpm_get_string + '&action=bpmcontext', 1);
                    });
                    return;
                    break;
                case 'bpm_toolbar_admin_close':
                    bpm_confirm_option = 6;
                    jQuery('#bpm_confirm_admin_close').foundation('reveal', 'open');
                    return;
                    break;
                case 'bpm_toolbar_bookmark':
                    option_string = '&domain=' + bpm_current_domain + '&action=bookmark';
                    message = 'Bookmark Saved';
                    show_string = 'bpm_toolbar_unbookmark';
                    break;
                case 'bpm_toolbar_unbookmark':
                    option_string = '&domain=' + bpm_current_domain + '&action=unbookmark';
                    message = 'Bookmark Removed';
                    show_string = 'bpm_toolbar_bookmark';
                    break;
                case 'bpm_toolbar_subscribe_page':
                    option_string = '&domain=' + bpm_current_domain + '&action=subscribe';
                    show_string = 'bpm_toolbar_unsubscribe_page';
                    message = 'Subscription Saved';
                    break;
                case 'bpm_toolbar_unsubscribe_page':
                    option_string = '&domain=' + bpm_current_domain + '&action=unsubscribe';
                    show_string = 'bpm_toolbar_subscribe_page';
                    message = 'Subscription Removed';
                    break;
                case 'bpm_toolbar_tag_page':
                    option_string = '&domain=' + bpm_current_domain + '&action=tag';
                    show_string = 'bpm_toolbar_untag_page';
                    message = 'Page Type Favorite Saved';
                    break;
                case 'bpm_toolbar_untag_page':
                    option_string = '&domain=' + bpm_current_domain + '&action=untag';
                    show_string = 'bpm_toolbar_tag_page';
                    message = 'Page Type Favorite Removed';
                    break;

            }

            if(option_string.length > 0) {
                jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + option_string, function (result) {

                    if (result.TRANSTATUS == 1) {
                        jQuery('#bpm_main_success_alert').html(message).show().fadeOut(1500, function () {
                            jQuery('.bpm_toolbar_options_dd').show();
                            if (show_string.length > 0) jQuery('#' + show_string).show();
                            jQuery('#' + hide_string).hide();

                            bpm_dashboard[6] = null;
                            bpm_dashboard[0] = null;
                            bpm_dashboard[7] = null;

                            if (result.BOOKMARKS) bpm_dashboard[0] = result.BOOKMARKS;
                            if (result.PTLTAGGED) bpm_dashboard[6] = result.PTLTAGGED;
                            if (result.PTLALL) bpm_dashboard[7] = result.PTLALL;
                            if (result.SUBSCRIBERS)  bpm_create_subscribers(result);
                            bpm_create_event_box(result);

                            if(bpm_dashboard[0]) bpmcontext.bpm_create_recent_dropdown(bpm_dashboard[0], 'left_bookmarks');

                        });
                    } else {
                        //show error message
                        jQuery('#bpm_main_error_alert').html(message).show().fadeOut(3000, function () {
                            jQuery('.bpm_toolbar_options_dd').show();
                            if (show_string.length > 0)  jQuery('#' + show_string).hide();
                            jQuery('#' + hide_string).show();
                        });
                    }
                });
            }

        }


        function bpm_subscribe_or_unsubscribe_page(page_id, action){

            var message = '';

            if(jQuery('#bpm_hp_subscribed_'+page_id).hasClass('fa-heart')){
                action = 'unsubscribe';
                message = 'Subscription Removed';
            }else{
                action = 'subscribe';
                message = 'Subscription Added';
            }


            var option_string = 'pageid='+page_id+'&domain=' + bpm_current_domain + '&action='+action;

            jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', option_string, function (result) {

                if (result.TRANSTATUS == 1) {

                    var ttl_subs = [];
                    var sub_text = bpm_trans_array['bpm_lng_subscribers'];
                    ttl_subs = jQuery('#bpm_hp_subscribed_count_'+page_id).text().split(' ');
                    var sub_count = Number(ttl_subs[0]);

                    if(action == 'subscribe'){
                        jQuery('#bpm_hp_subscribed_'+page_id).addClass('fa-heart').removeClass('fa-heart-o');
                        sub_count++;
                        if(sub_count==1) sub_text = bpm_trans_array['bpm_lng_subscriber'];

                    }else{
                        sub_count--;
                        if(sub_count==1) sub_text = bpm_trans_array['bpm_lng_subscriber'];

                        jQuery('#bpm_hp_subscribed_'+page_id).removeClass('fa-heart').addClass('fa-heart-o');
                    }

                    jQuery('#bpm_hp_subscribed_count_'+page_id).text(sub_count + ' ' + sub_text);

                        bpm_dashboard[6] = null;
                        bpm_dashboard[0] = null;
                        bpm_dashboard[7] = null;

                        if (result.BOOKMARKS) bpm_dashboard[0] = result.BOOKMARKS;
                        if (result.PTLTAGGED) bpm_dashboard[6] = result.PTLTAGGED;
                        if (result.PTLALL) bpm_dashboard[7] = result.PTLALL;
                        if (result.SUBSCRIBERS)  bpm_create_subscribers(result);
                        bpm_create_event_box(result);

                        bpmcontext.bpm_create_recent_dropdown(bpm_dashboard[0], 'left_bookmarks');
                }
            });
        }
        function bpm_save_talat(){

            if(bpm_reply_talat_page_id == 0){
                bpm_reply_talat_page_id = bpm_pageid;
            }

            if(bpm_is_loading==1) return;
            bpm_is_loading = 1;
            jQuery('#bpm_talat_alert').hide();
            if(bpm_talat_list.length == 0){
                //alert no users selected
                jQuery('#bpm_talat_alert').html('Please select one or more users.').show();
                //jQuery('#bpm_talat_send_group').hide();
                bpm_is_loading = 0;
                return;
            }
            var post_text = encodeURIComponent(jQuery('#bpm_edit_TALAT_text').val().replace(/\n/g, "<br>"));
            if(post_text.length == 0){
                //alert no message
                jQuery('#bpm_talat_alert').html('Please enter a message').show();
                //jQuery('#bpm_talat_send_group').hide();
                bpm_is_loading = 0;
                return;
            }

            var send_to = '';
            jQuery(bpm_talat_list).each(function(index, value){
                if(send_to.length > 0) send_to = send_to.concat(',');

                send_to = send_to.concat(value);
            });


            //post message
            var querystring = 'domain=' + bpm_current_domain + "&action=send_talat&pageid=" + bpm_reply_talat_page_id + "&send_to=" + send_to + "&message=" + post_text;

            if(bpm_reply_talat_message_id > 0) {
                querystring = querystring.concat('&respond_message_id='+bpm_reply_talat_message_id);
            }

            jQuery.getJSON('https://'+bpm_settings['bpm_server']+'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function(result){
                jQuery('#bpm_edit_TALAT_text').val('');
                bpm_dashboard[98] = null;
                jQuery('#bpm_talat_window').foundation('reveal', 'close');
                jQuery('#bpm_main_success_alert').html('Take a Look at This message has been sent.').show().fadeOut(4000);
                bpm_is_loading = 0;
                bpm_reply_talat_page_id = 0;
                bpm_reply_talat_message_id = 0;
                bpmcontext.bpm_update_dashboard();
            });


        }

        function bpm_close_talat(){

            jQuery('#bpm_talat_to').autocomplete('close');
            bpm_dashboard[98] = null;
            jQuery('#bpm_talat_window').foundation('reveal', 'close');
            jQuery('#bpm_edit_TALAT_text').val('');

        }


        /**
         * Created by BPMContext on 2/5/16.
         */

        function bpm_open_help_widget(source){

            bpm_settings['bpm_help_widget_location'] = source;

            bpmcontext.bpm_back_help_widget();

            if(jQuery( "#bpm_content_area").length) {
                var p = jQuery("#bpm_content_area");
                var width = jQuery("#bpm_content_area").width();
            }else{
                var p = jQuery("#bpm_settings_content");
                var width = jQuery("#bpm_settings_content").width();

            }

            if(! width) return;

            var offset = p.offset();

            var left_offset = width * .65;
            var top_offset = offset.top + 10;

            bpmcontext.bpm_help_widget_load_popular();

            if(bpm_settings['bpm_help_widget_location'] != 'admin') {
                jQuery("#bpm_help_widget").draggable({containment: 'parent'}).show().offset({
                    left: left_offset,
                    top: top_offset
                });
            }
        }

        function bpm_help_widget_load_popular(){

            jQuery('.bpm_search').show();
            jQuery('#bpm_help_widget_content_title').text(bpm_trans_array['bpm_lng_popular_articles']);
            jQuery('#bpm_help_widget_search').val('');
            jQuery('#bpm_help_widget_clear_search').hide();
            jQuery('#bpm_help_widget_feecback_confirmation').hide();

            if(!bpm_settings['help_recent']) {

                var load_admin = 0;
                if(bpm_settings['bpm_help_widget_location']) load_admin = 1;

                var data = {
                    'action': 'bpm_get_posts',
                    'bpm_admin_action': 'bpm_get_recent_posts',
                    'bpm_admin_tag_loc': bpm_settings['bpm_location'],
                    'bpm_load_admin': load_admin
                };

                jQuery.post(bpm_settings['bpm_help_server'], data, function (result) {

                        if(result) {
                            bpm_settings['help_recent'] = JSON.parse(result);
                            bpmcontext.bpm_help_widget_load_popular();
                        }
                    });

            }else {
                bpm_settings['help_search'] = [];

                var html_line = '';

                jQuery(bpm_settings['help_recent']).each(function (index, value) {
                    html_line = html_line.concat('<div class="bpm-row full-width bpm_help_widget_line_item" >');
                    if(value['video']){
                        html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-left bpm_links" ><span class="fa fa-video-camera bpm_top_margin_article_icon"></span><a class="bpm_links" onClick="bpmcontext.bpm_get_help_item(' + value['id'] + ');">' + value['title'] + '</a></div>');
                    }else {
                        html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-left bpm_links" ><span class="fa fa-tasks bpm_top_margin_article_icon"></span><a class="bpm_links" onClick="bpmcontext.bpm_get_help_item(' + value['id'] + ');">' + value['title'] + '</a></div>');
                    }
                    html_line = html_line.concat('</div>');
                });

                jQuery('#bpm_help_widget_content_area_feedback').hide();
                jQuery('#bpm_help_widget_feedback_line').show();
                jQuery('#bpm_help_widget_back_to_articles_line').hide();
                jQuery('#bpm_help_widget_content_area_articles').html(html_line).show();
            }
        }

        function bpm_get_help_item(post_id , is_qtip , this_index){

            var tip_found = false;
            if(is_qtip){
                if(is_qtip) jQuery('#bpm_qtip_overlay_'+is_qtip).show();
                jQuery.each(bpm_settings['bpm_qtips_medium'], function(index, value) {
                    if (value.tip_id == is_qtip) {
                        tip_found = true;
                    }
                })
            }

            if(tip_found){
                bpmcontext.bpm_create_medium_qtip(is_qtip);
                return;
            }

            if( ! is_qtip ) {

                var post_id_array = [];

                if (bpm_settings['help_search'].length) {
                    post_id_array = bpm_settings['help_search'];
                } else {
                    post_id_array = bpm_settings['help_recent']
                }

                jQuery(post_id_array).each(function (index, value) {
                    if (value['id'] == post_id) {
                        jQuery('#bpm_help_widget_post_title').html(value['title']).show();
                    }
                });

                var animate = {width: '48em'};

                if (jQuery("#bpm_content_area").length) {
                    var width = jQuery("#bpm_content_area").width();
                } else {
                    var width = jQuery("#bpm_settings").width() - 20;
                }

                var p = jQuery("#bpm_help_widget");

                var offset = p.offset();

                var right_edge = offset.left + 768;

                if (right_edge > width) {
                    //move left
                    var left = offset.left - (right_edge - width);
                    var left_css = left + 'px';
                    animate = {width: '48em', left: left_css};
                }

                if (bpm_settings['bpm_help_widget_location'] != 'admin') jQuery('#bpm_help_widget').animate(animate, 'normal');

                jQuery('#bpm_help_widget_back').show();
                jQuery('.bpm_search').hide();
                jQuery('#bpm_help_widget_content_area_articles_header').hide();
                jQuery('#bpm_help_widget_content_area_articles').hide();
            }

             var data = {
                'action': 'bpm_get_posts',
                'bpm_admin_action': 'bpm_get_get_post',
                'bpm_admin_get_post': post_id
            };

            jQuery.post(bpm_settings['bpm_help_server'], data, function (result) {
                if (result) {

                    var response_line = JSON.parse(result);

                    var html_line = response_line[0]['content'];
                    var this_link = '<a style="color:white" href="'+response_line[0]['link']+'" target="_blank">&nbsp;<span class="fa fa-external-link"></span></a>';


                    if(is_qtip){
                        html_line = html_line.replace(/(\r\n|\n|\r)/gm,"");
                        var tip_content = jQuery(html_line);
                        tip_content = tip_content.html();
                        if(tip_content) {
                            var video_link = '';
                            jQuery.each(bpm_settings['bpm_video_link'], function(index, value) {
                                if (value.tip_id == is_qtip) {
                                    video_link = value.html;
                                }
                            })
                            tip_content = tip_content.concat('<div class="bpm_qtip_footer">'+video_link+'<a href="' + response_line[0]['link'] + '" target="_blank">View Support Site...</a></div>');
                            if (!bpm_settings['bpm_qtips_medium']) bpm_settings['bpm_qtips_medium'] = [];
                            bpm_settings['bpm_qtips_medium'].push({tip_id: is_qtip, html: tip_content});
                            jQuery('#bpm_qtip_overlay_' + is_qtip).hide();
                            bpmcontext.bpm_create_medium_qtip(is_qtip);
                        }else{
                            jQuery('#bpm_qtip_overlay_' + is_qtip).hide();
                        }
                    }else {
                        jQuery('#bpm_help_widget_content_area_articles_post').html(html_line).show();

                        jQuery('#bpm_help_widget_post_title_open').html(this_link).show();
                    }

                }
            });
        }

        this.bpm_create_medium_qtip = function(tip_id){

            var tip_content = '';
            jQuery.each(bpm_settings['bpm_qtips_medium'], function(index, value) {
                if (value.tip_id == tip_id) {
                    tip_content = value.html;
                }
            })

            jQuery.each(bpm_settings['bpm_qtips'], function(index, value) {
                if(value.this_index == tip_id) {

                    jQuery('#' + value.target).qtip('hide');

                    var content_obj = {};
                    if(value.title) {
                        content_obj = {title: value.title, text: tip_content};
                    }else{
                        content_obj = {text: tip_content};
                    }

                    var position = {};
                    if(value.position_at && value.position_my) {
                        position = {
                            my: value.position_my,
                            at: value.position_at,
                            target: jQuery('#' + value.target)
                        };
                    }

                    jQuery('#' + value.target).qtip({
                        content: content_obj,
                        style: {
                            classes: 'qtip-bootstrap',
                            width: '50em'
                        },
                        hide: {
                            fixed: true,
                            event: 'unfocus mouseleave',
                            delay: 500
                        },
                        events: {
                            hide: function (event, api) {
                                bpmcontext.bpm_reset_tips(value.this_index);
                            }
                        },
                        show: {
                            ready: true,
                            solo: true
                        },
                        position: position
                    });
                }
            });

        }

        function bpm_back_help_widget(){
            jQuery('#bpm_help_widget_back').hide();
            if(bpm_settings['bpm_help_widget_location'] != 'admin') jQuery('#bpm_help_widget').animate({width: '24em'} , 'slow');
            jQuery('.bpm_search').show();
            jQuery('#bpm_help_widget_content_area_articles_header').show();
            jQuery('#bpm_help_widget_content_area_articles').show();
            jQuery('#bpm_help_widget_content_area_articles_post').hide();
            jQuery('#bpm_help_widget_post_title').hide();
            jQuery('#bpm_help_widget_post_title_open').hide();
        }

        function bpm_help_widget_search(){

            var search_terms = jQuery('#bpm_help_widget_search').val();

            var data = {
                    'action': 'bpm_get_posts',
                    'bpm_admin_action': 'bpm_get_search_posts',
                    'bpm_admin_search': search_terms
                };

            jQuery.post(bpm_settings['bpm_help_server'], data, function (result) {
                if(result) {

                    bpm_settings['help_search'] = JSON.parse(result);

                    var html_line = '';

                    if(bpm_settings['help_search'].length) {

                        jQuery(bpm_settings['help_search']).each(function (index, value) {
                            if (index > 9) return false;
                            html_line = html_line.concat('<div class="bpm-row full-width bpm_help_widget_line_item" >');
                                if(value['video']){
                                    html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-left bpm_links" ><span class="fa fa-video-camera bpm_top_margin_article_icon"></span><a class="bpm_links" onClick="bpmcontext.bpm_get_help_item(' + value['id'] + ');">' + value['title'] + '</a></div>');
                                }else {
                                    html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-left bpm_links" ><span class="fa fa-tasks bpm_top_margin_article_icon"></span><a class="bpm_links" onClick="bpmcontext.bpm_get_help_item(' + value['id'] + ');">' + value['title'] + '</a></div>');
                                }
        //                    html_line = html_line.concat('<div class="bpm-large-11 bpm-small-11 bpm-columns text-left bpm_links" ><a class="bpm_links" onClick="bpmcontext.bpm_get_help_item('+value['id']+');">'+value['title'] + '</a></div>');
                            html_line = html_line.concat('</div>');
                        });

                    }else{
                            html_line = html_line.concat('<div class="bpm-row full-width bpm_help_widget_line_item" >');
                            html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left bpm_links fa fa-frown-o bpm_top_margin_article_icon"></div>');
                            html_line = html_line.concat('<div class="bpm-large-11 bpm-small-11 bpm-columns text-left bpm_links" >'+bpm_trans_array['bpm_lng_no_articles_found']+'</div>');
                            html_line = html_line.concat('</div>');
                    }

                    jQuery('#bpm_help_widget_clear_search').show();
                    jQuery('#bpm_help_widget_content_title').text(bpm_trans_array['bpm_lng_search_results']);
                    jQuery('#bpm_help_widget_feedback_line').show();
                    jQuery('#bpm_help_widget_back_to_articles_line').hide();

                    jQuery('#bpm_help_widget_content_area_articles_post').hide();

                    jQuery('#bpm_help_widget_content_area_articles').html(html_line).show();

                }
            });

        }



        function bpm_close_general_feedback(){

            bpm_help_widget_load_popular();
            jQuery('#bpm_help_widget_content_area_articles').show();
            jQuery('#bpm_help_widget_content_area_feedback').hide();
            jQuery('#bpm_help_widget_feecback_confirmation').hide();
            jQuery('#bpm_help_widget_content_area_articles_post').hide();
            jQuery('#bpm_help_widget_content_title').show();
            jQuery('#bpm_help_widget_post_title').hide();
            jQuery('#bpm_help_widget_post_title_open').hide();
            jQuery('.bpm_search').show();

        }

        function bpm_open_general_feedback(){

            jQuery('#bpm_help_widget_feecback_confirmation').hide();
            jQuery('.bpm_search').hide();
            if(bpm_settings['bpm_help_widget_location'] != 'admin') jQuery('#bpm_help_widget').animate({width: '24em'} , 'slow');
            bpm_settings['processing_help'] = 0;

            if(bpm_user_role == 'admin'){
                bpm_settings['using_help_widget'] = 1;
                jQuery( "#bpm_help_widget" ).hide();
                bpmcontext.bpm_open_support();
            }else {

                var html_line = '';
                html_line = html_line.concat('Feedback form');

                jQuery('#bpm_help_center_feedback_subject').val('');
                jQuery('#bpm_edit_help_center_feedback_text').val('')
                jQuery('#bpm_help_widget_post_title').hide();
                jQuery('#bpm_help_widget_post_title_open').hide();
                jQuery('#bpm_help_widget_content_title').text(bpm_trans_array['bpm_lng_feedback']);
                jQuery('#bpm_help_widget_content_area_articles').hide();
                jQuery('#bpm_help_widget_content_area_feedback').show();
                jQuery('#bpm_help_widget_feedback_line').hide();
                jQuery('#bpm_help_widget_content_area_articles_post').hide();
                jQuery('#bpm_help_widget_back_to_articles_line').show();
                jQuery('#bpm_help_widget_content_title').hide();
            }
        }

        function bpm_save_settings_support_text(){

            jQuery('#bpm_save_settings_support_text_error').hide();

            if(!bpm_settings['processing_help']) {
                bpm_settings['processing_help'] = 1;

                jQuery('#bpm_settings_send_feedback_overlay').show();

                var this_subject = encodeURIComponent(jQuery('#bpm_settings_feedback_subject').val().replace(/\n/g, "<br>"));
                var this_message = encodeURIComponent(jQuery('#bpm_edit_settings_feedback_text').val().replace(/\n/g, "<br>"));

                if(!this_message.length){
                    jQuery('#bpm_settings_send_feedback_overlay').hide();
                    jQuery('#bpm_save_settings_support_text_error').show();
                    bpm_settings['processing_help'] = 0;
                    return;
                }

                var querystring = 'domain=' + bpm_current_domain + "&action=submit_feedback&subject=" + this_subject + '&message=' + this_message;

                jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/' + bpm_settings['bpm_api'] + '/bpmcontext_wordpress.php?callback=?', querystring, function (result) {
                    jQuery('#bpm_settings_feedback_subject').val('');
                    jQuery('#bpm_edit_settings_feedback_text').val('');
                    jQuery('#bpm_settings_feedback_confirmation').show();
                    bpm_settings['processing_help'] = 0;
                    jQuery('#bpm_settings_send_feedback_overlay').hide();

                });
            }
        }

        function bpm_save_help_center_support_text(){

            if(!bpm_settings['processing_help']) {
                bpm_settings['processing_help'] = 1;

                var this_subject = encodeURIComponent(jQuery('#bpm_help_center_feedback_subject').val().replace(/\n/g, "<br>"));
                var this_message = encodeURIComponent(jQuery('#bpm_edit_help_center_feedback_text').val().replace(/\n/g, "<br>"));

                var querystring = 'domain=' + bpm_current_domain + "&action=submit_feedback&subject=" + this_subject + '&message=' + this_message;
                jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/' + bpm_settings['bpm_api'] + '/bpmcontext_wordpress.php?callback=?', querystring, function (result) {
                    jQuery('#bpm_help_widget_content_area_feedback').hide();
                    jQuery('#bpm_help_widget_feecback_confirmation').show();


                });
            }
        }

        function bpm_close_help_widget(){
            bpm_settings['using_help_widget'] = 0;
            jQuery( "#bpm_help_widget").hide();
            bpmcontext.bpm_back_help_widget();
        }

        function bpm_run_main_tutorial(tutorial_id){

            bpm_settings['tutorial_id'] = tutorial_id;
            bpm_settings['tutorial_step'] = 1;

            if(tutorial_id == '21'){
                bpmcontext.bpm_action({id:'bpm_toolbar_admin_add_ws'});
            }else {
                if(bpm_settings['USERTYPE'] != 'external') {
                    bpmcontext.bpm_run_next_tutorial_step();
                }
            }
        }

        function bpm_run_next_tutorial_step(){

            if(!bpm_settings['tutorial_step']) bpm_settings['tutorial_step'] = 1;

            bpm_settings['tutorial_is_running'] = 0;
            bpm_settings['disable_actions'] = 0;

            switch(Number(bpm_settings['tutorial_id'])){
                case 11:
                    if(bpm_settings['TEMPLATELIBID'] == 25) bpmcontext.bpm_open_generic_reveal('', bpmcontext.bpm_get_welcome_reveal(), false);
                    setTimeout(function() {
                        jQuery("#bpm_context_map_welcome").treetable({ expandable: true }).treetable('expandAll');
                        bpmcontext.bpm_create_tips();
                    },500);

                    break;
            }
        }

        this.bpm_get_welcome_reveal = function(){

            var context_map = bpmcontext.bpm_create_context_map(bpm_settings, true);
            var tooltips = '';

            if(bpm_settings['bpm_qtips'] && bpm_settings['qtip_display'] > 0) {
                tooltips = '<br><span class="bpm_welcome_reveal_sub_title">Hover over the Template Title for more information</span>';
            }

            var html_line = '';
            html_line = html_line.concat('<div class="bpm-row full-width">');
            html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-center"><h2>Welcome!</h2></div>');
            html_line = html_line.concat('</div>');
            html_line = html_line.concat('<div class="bpm-row full-width">');
            html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-center"><h3>This is a private content area for your teams or a portal for clients</h3></div>');
            html_line = html_line.concat('</div><br>');

            html_line = html_line.concat('<div class="bpm-row full-width">');
            html_line = html_line.concat('<div class="bpm-large-3 bpm-small-3 bpm-columns text-center">');

            html_line = html_line.concat('<div class="bpm-row full-width">');
            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-center"><div class="bpm_welcome_reveal_box">We add a login and our workspace platform to this WordPress page.<br><p class="bpm_welcome_reveal_title_sep"><strong>Your content is Secure</strong></p></div></div>');
            html_line = html_line.concat('</div>');
            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-center"><div class="bpm_welcome_reveal_box">Easy-to-use workspace templates organize content for teams and clients.<br><p class="bpm_welcome_reveal_title_sep"><strong>Your content is Organized</strong></p></div></div>');
            html_line = html_line.concat('</div>');
            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-center"><div class="bpm_welcome_reveal_box">Your team members create and edit content from the front-end.<br><p class="bpm_welcome_reveal_title_sep"><strong>Your content is Collaborative</strong></p></div></div>');
            html_line = html_line.concat('</div>');

            if(bpm_settings['client_suite']){
                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-center"><div class="bpm_welcome_reveal_box">&nbsp;Invited clients can log in and view only the content you share with them.<br><p class="bpm_welcome_reveal_title_sep"><strong>Client content is Private</strong></p></div></div>');
                html_line = html_line.concat('</div>');
            }
            html_line = html_line.concat('</div>');

            html_line = html_line.concat('</div>');
            html_line = html_line.concat('<div class="bpm-large-9 bpm-small-9 bpm-columns text-center">');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-center"><div class="bpm_welcome_reveal_ws_map_message">These Workspace Templates are Installed on your Account'+tooltips+'</div></div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-center"><div id="bpm_welcome_reveal_ws_map" class="bpm_welcome_reveal_ws_map">'+context_map+'</div></div>');
            html_line = html_line.concat('</div>');
            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-center"><div class="bpm_welcome_reveal_button"><a id="bpm_welcome_reveal_ws_button" onClick="bpmcontext.bpm_welcome_reveal_create_ws();" class="button bpm-small bpm_nodecoration" >Create a Demo Workspace</a></div></div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat('</div>');

            html_line = html_line.concat('</div>');

            return html_line;
        }

        this.bpm_welcome_reveal_create_ws = function() {

            var template_name = 'User Guide';
            if(bpm_settings['intranet_plus']){
                template_name = 'Announcement';
            }else if(bpm_settings['client_suite']){
                template_name = 'Customer';
            }
            bpmcontext.bpm_open_add_pages_menu(template_name);
        }

        function bpm_close_tour_reveal(){
            jQuery('#bpm_welcome_window').foundation('reveal', 'close');
            bpmcontext.bpm_clear_tutorial(bpm_settings['tutorial_id'], bpm_settings['tutorial_step']);
            bpm_settings['tutorial_step']++;
            bpmcontext.bpm_run_next_tutorial_step();
        }

        function bpm_open_reveal(tutorial_id, tutorial_step){

            if(!tutorial_id) tutorial_id = bpm_settings['tutorial_id'];
            if(!tutorial_step) tutorial_step = bpm_settings['tutorial_step'];

            if(!jQuery('#bpm_welcome_page_' + tutorial_id + '_' + tutorial_step).length) return;

            jQuery('#bpm_welcome_window_content').html(jQuery('#bpm_welcome_page_' + tutorial_id + '_' + tutorial_step).html());
            jQuery('#bpm_welcome_window_title').html(jQuery('#bpm_welcome_title_' + tutorial_id + '_' + tutorial_step).html());
            jQuery('#bpm_welcome_window_subtitle').html(jQuery('#bpm_welcome_subtitle_' + tutorial_id + '_' + tutorial_step).html());
            jQuery('.bpm_welcome_subtitle').text(jQuery('#bpm_tour_subtitle').text());
            if(tutorial_step > 2) {
                jQuery('#bpm_view_tour').hide();
            }else{
                jQuery('#bpm_view_tour').show();
            }

            if(bpm_settings['tutorial_overlay_off']){
                jQuery('.bpm-overlay').hide();
            }else{
                jQuery('.bpm-overlay').show();
            }

            jQuery('#bpm_tut_panel_1_' + tutorial_id + '_' + tutorial_step).html(jQuery('#bpm_tut_panel_one_content').html());
            jQuery('#bpm_tut_panel_2_' + tutorial_id + '_' + tutorial_step).html(jQuery('#bpm_tut_panel_two_content').html());
            jQuery('#bpm_tut_panel_3_' + tutorial_id + '_' + tutorial_step).html(jQuery('#bpm_tut_panel_three_content').html());
            jQuery('#bpm_welcome_window').foundation('reveal', 'open');

        }

        function bpm_do_joyride(tutorial_id, tutorial_step){

            if(!tutorial_id) tutorial_id = bpm_settings['tutorial_id'];
            if(!tutorial_step) tutorial_step = bpm_settings['tutorial_step'];

            if(!jQuery('#bpm_joyride_' + tutorial_id + '_' + tutorial_step).length) return;

            jQuery('#bpm_tutorial').html(jQuery('#bpm_joyride_' + tutorial_id + '_' + tutorial_step).html());

            jQuery(document).foundation('joyride', 'reflow');

            jQuery(document).foundation({
                joyride: {
                    post_ride_callback: function () {
                        bpmcontext.bpm_clear_tutorial(tutorial_id, tutorial_step);
                    },
                    post_step_callback : function(step){

                        var callback = '';
                        var current_item = step + 1;
                        callback = jQuery('#bpm_joyride_' + tutorial_id + '_' + tutorial_step + ' li:nth-child('+current_item+')').data('callback');

                        if(callback){
                            var arguments = jQuery('#bpm_joyride_' + tutorial_id + '_' + tutorial_step + ' li:nth-child('+current_item+')').data('args');
                            bpmcontext.executeFunctionByName(callback , window, arguments);
                        }
                    }
                }
            }).foundation('joyride', 'start');



        }

        function bpm_create_chardin(){

            jQuery('.bpm-chardin-active-element').removeAttr('data-intro');
            jQuery('.bpm-chardin-active-element').removeAttr('data-position');
            jQuery('.bpm-chardin-active-element').removeClass('bpm-chardin-active-element');

            jQuery('.alert-box').hide();

            var has_data = 0;
            bpm_settings['tutorial_is_running'] = 1;

            jQuery('#bpm_chardin_'+bpm_settings['tutorial_id']+'_'+bpm_settings['tutorial_step']+' .bpm-chardin-element').each( function (index, value) {
                has_data = 1;
                var this_element = '';
                if(jQuery(this).data('chardin_element')=='bpm-text-edit-button'){
                    jQuery('.bpm-text-edit-button').each(function(index, value) {
                        this_element =  jQuery(this).prop('id');
                        if(this_element != 'bpm_edit_button_TEXTINDEX') return false;
                    });
                }else{
                    this_element = jQuery(this).data('chardin_element');
                }

                if(jQuery(this).data('chardin_access')=='admin' && bpm_user_role != 'admin'){
                    return;
                }

                jQuery('#'+this_element).addClass('bpm-chardin-active-element');
                jQuery('#'+this_element).attr('data-position', jQuery(this).data('chardin_position'));
                jQuery('#'+this_element).attr('data-intro', jQuery(this).data('chardin_intro'));

            });

            if(has_data) jQuery('body').chardinJs('start');

            if(bpm_params.admin_bar == 1) {
                jQuery('.chardinjs-helper-layer').each(function (index, value) {
                    jQuery(this).animate({'marginTop' : "+=30px" },0);
                });
            }

            if(bpm_settings['disable_actions']) {
                if(!jQuery('#bpm-chardin-overlay').length) jQuery('body').append('<div id="bpm-chardin-overlay" class="bpm-chardin-overlay" ></div>');
                jQuery('#bpm-chardin-overlay').click(function () {
                    jQuery('body').chardinJs('stop');
                });
            }

            bpmcontext.bpm_set_tutorial_actions();

        }

        function bpm_set_tutorial_actions(){

            jQuery("body").on('chardinJs:stop', function(){
                // on stop

                if(!bpm_settings['is_processing']) {
                    bpm_settings['is_processing'] = 1;
                    bpmcontext.bpm_clear_tutorial(bpm_settings['tutorial_id'], bpm_settings['tutorial_step']);
                }

                var attr = jQuery(this).attr('data-intro');
                if (typeof attr !== typeof undefined && attr !== false) {
                    // Element has this attribute
                    jQuery('.bpm-chardin-active-element').removeAttr('data-intro');
                    jQuery('.bpm-chardin-active-element').removeAttr('data-position');
                    jQuery('.bpm-chardin-active-element').removeClass('bpm-chardin-active-element');
                }

                jQuery('#bpm-chardin-overlay').remove();

                bpm_settings['tutorial_step']++;
                bpmcontext.bpm_run_next_tutorial_step();

            });

            jQuery('.bpm_add_page_menu_item ').click(function() {
                if(bpm_settings['tutorial_is_running']) {
                    bpmcontext.bpm_clear_tutorial(bpm_settings['tutorial_id'], bpm_settings['tutorial_step']);
                    jQuery('body').chardinJs('stop');
                }
            });
            jQuery('.bpm_admin_menu_item ').click(function() {
                if(bpm_settings['tutorial_is_running']) {
                    bpmcontext.bpm_clear_tutorial(bpm_settings['tutorial_id'], bpm_settings['tutorial_step']);
                    jQuery('body').chardinJs('stop');
                }
            });
        }

        function bpm_clear_tutorial(this_tut_id, this_step, restart){

            jQuery('#bpm_functional_tutorial_content'+this_tut_id).hide();
            if(!this_step) this_step = 100;

            var querystring = 'domain=' + bpm_current_domain + "&action=update_tutorial&tutorialid=" + this_tut_id + '&laststep='+this_step;

            jQuery.getJSON('https://' + bpm_settings['bpm_server']  + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function (result) {
                bpm_settings['TUTORIALS'] = result.TUTORIALS;
                bpm_settings['is_processing'] = 0;
                if(this_tut_id == 2000) bpm_settings['bpm_ws_manager_tutorial_viewed'] = 1;

                if(restart){
                    bpm_settings['tutorial_id'] = this_tut_id;
                    bpm_settings['tutorial_step'] = 1;
                    bpm_settings['tutorial_overlay_off'] = 1;
                    bpmcontext.bpm_run_main_tutorial(this_tut_id);
                }

            });
        }

        function bpm_open_add_pages_menu(item_name){

            if(!item_name) return;

            bpmcontext.bpm_clear_tutorial(11, 3);

            jQuery('.bpm_add_page_menu_item').each(function(index, value) {
                jQuery(this).parent().removeClass('active');
                if(jQuery(this).text() == item_name){
                    jQuery(this).click();
                    return false;
                }
            });
        }

        function bpm_template_wizard(){

            var green_check = '&nbsp;&nbsp;<span class="fi-check bpm-green"></span>';
            //check for full width page issues
            if(bpm_params.using_full_width==1){
                jQuery('#bpm_admin_wizard_tab_1').html(jQuery('#bpm_admin_wizard_tab_1').html() + green_check);
                jQuery('#bpm_admin_wizard_1_full_selected').show();
        //        jQuery('#bpm_admin_wizard_tab_2').click();
            }else{
                if(bpm_params_templates.length) {
                    jQuery('#bpm_admin_wizard_1_full_not_selected').show();


                    var html_line = '<form id="bpm_get_admin_template">';

                    jQuery(bpm_params_templates).each(function(index, value) {
                        var is_checked = '';
                        html_line = html_line.concat('<div class="bpm-row full-width bpm_file_bottom_border" >');
                        html_line = html_line.concat('<div class="bpm-large-10 bpm-columns text-left " >'+value['name']+'</div>');
                        html_line = html_line.concat('<div class="bpm-large-2 bpm-columns text-left " ><input type="radio" name="bpm_template" value="'+value['file']+'"></div>');
                        html_line = html_line.concat('</div>');
                    });

                    html_line = html_line.concat('<br><br><div class="bpm-row full-width " >');
                    html_line = html_line.concat('<div class="bpm-large-8 bpm-columns text-left" ><span id="bpm_admin_login_template" class="bpm-hide" style="color:red;font-size:1.3em;">You must be logged into WordPress as an Admin</span><span id="bpm_pick_a_template" class="bpm-hide" style="color:red;font-size:1.3em;">Please select a template</span>&nbsp;</div>');
                    html_line = html_line.concat('<div class="bpm-large-4 bpm-columns text-right " ><a id="bpm_admin_template_update" onClick="bpmcontext.bpm_admin_wizard_update_template();" class="button bpm-small bpm_lng_save bpm_nodecoration" >Update</a></div>');
                    html_line = html_line.concat('</div></form>');

                    jQuery('#bpm_admin_wizard_1_full_not_selected_data').html(html_line).show();

                }else{
                    jQuery('#bpm_admin_wizard_1_full_no_templates').show();
                    var html_line = '';
                    if(bpm_params.edit_post) html_line = bpm_params.edit_post;
                    jQuery('#bpm_admin_wizard_1_full_no_templates_data').html(html_line).show();
                }
            }

            //crete css options
            var final_html_line = '';
            var css_list = [];
            var css_width = [];
            var print_array = [];
            var keep_looping = 1;
            var this_parent = jQuery('#bpm_content_area').parent();
            var top_line_width = 0;

            while(keep_looping) {

                this_parent = this_parent.parent();
                if(!this_parent.length) keep_looping = 0;
                if(this_parent.is('body')) keep_looping = 0;
                if(keep_looping) {
                    css_list.push(this_parent);
                    var item_id = css_list.length;
                    var node_name = 'Parent Div ' + item_id;
                    if(this_parent.prop('id')) node_name = this_parent.prop('id');

                    var this_width = '';
                    if(this_parent.css('width')) this_width = this_parent.css('width');

                    print_array.push({item_id:item_id, node_name:node_name,this_width:this_width});
                    css_width.push(this_width);

                }
            }

                jQuery(print_array.reverse()).each(function(index, value) {

                    var this_width = parseInt(value['this_width'] , 10);
                    var display_width = value['this_width'];

                    if(!top_line_width){
                        top_line_width = this_width;
                        this_width = 100;
                    }else{
                        this_width = Math.floor((this_width / top_line_width) * 100 );
                    }

                    var width_dd = bpmcontext.bpm_get_wizard_width_dd(this_width , value['item_id']);

                    var html_line = '';
                    html_line = html_line.concat('<div class="bpm-row full-width bpm_file_bottom_border" >');
                    html_line = html_line.concat('<div class="bpm-large-8 bpm-columns text-left bpm_edit_template_item" data-type="parent" data-item="' + value['item_id'] + '">' + value['node_name'] + '</div>');
                    html_line = html_line.concat('<div class="bpm-large-2 bpm-columns text-left " >' + display_width + '</div>');
                    html_line = html_line.concat('<div class="bpm-large-2 bpm-columns text-left" >'+width_dd+'</div>');
                    html_line = html_line.concat('</div>');

                    final_html_line = final_html_line.concat(html_line);
                })

            bpm_settings['bpm_template_parents'] = css_list;
            bpm_settings['bpm_template_parents_css'] = css_width;

            final_html_line = final_html_line.concat('<br><br><div class="bpm-row full-width " >');
            final_html_line = final_html_line.concat('<div class="bpm-large-4 bpm-columns text-left" ><span id="bpm_admin_login_template_2" class="bpm-hide" style="color:red;font-size:1.3em;">You must be logged into WordPress as an Admin</span>&nbsp;</div>');
            final_html_line = final_html_line.concat('<div class="bpm-large-8 bpm-columns text-right " ><a id="bpm_admin_template_update" onClick="bpmcontext.bpm_admin_wizard_reset_all_css();" class="button bpm-small bpm_lng_save bpm_nodecoration" >Clear All Changes</a>&nbsp;&nbsp;<a id="bpm_admin_template_update" onClick="bpmcontext.bpm_admin_wizard_reset_css();" class="button bpm-small bpm_lng_save bpm_nodecoration" >Reset</a>&nbsp;&nbsp;<a id="bpm_admin_template_update" onClick="bpmcontext.bpm_admin_wizard_test_css();" class="button bpm-small bpm_lng_save bpm_nodecoration" >Test</a>&nbsp;&nbsp;<a id="bpm_admin_template_update" onClick="bpmcontext.bpm_admin_wizard_update_css();" class="button bpm-small bpm_lng_save bpm_nodecoration" >Update</a></div>');
            final_html_line = final_html_line.concat('</div></form>');

            jQuery('#bpm_admin_wizard_2_css_data').html(final_html_line);

            jQuery( ".bpm_edit_template_item" ).hover(
                  function() {
                    bpmcontext.bpm_get_item(1,jQuery(this));
                  }, function() {
                    bpmcontext.bpm_get_item(2,jQuery(this));
                  }
                );
        }

        function bpm_get_wizard_width_dd(this_width, item_id){

            var dropdown = '<select class="bpm_template_css_item" data-item="' + item_id + '">';

            this_width = Math.floor(this_width *.1) * 10;

            var building = 100;
            while(building){
                var is_selected = '';
                if(building == this_width) is_selected = 'selected';
                dropdown = dropdown.concat('<option '+is_selected+' value="'+building+'%">'+building+'%</option>');
                building = building - 10;
            }


            dropdown = dropdown.concat('</select>');

            return dropdown;
        }

        function bpm_admin_wizard_reset_all_css(){

                if(!bpm_params.ajaxurl){
                jQuery('#bpm_admin_login_template_2').show();
                return;
            }

            var data = {
                'action': 'bpm_clear_theme_css'
            };

            jQuery.post(bpm_params.ajaxurl, data, function (result) {
               location.reload(true);
            });
        }

        function bpm_admin_wizard_update_css(){
        return;
            if(!bpm_params.ajaxurl){
                jQuery('#bpm_admin_login_template_2').show();
                return;
            }

            var custom_css = '';

            jQuery('.bpm_template_css_item').each(function(index, value) {
                var item = jQuery(this).attr('data-item');
                var this_item = bpm_settings['bpm_template_parents'][index];
                var new_width = jQuery(this).val();
                if(jQuery(this_item).prop('id')){
                    custom_css = custom_css.concat('#'+jQuery(this_item).prop('id')+' { width:'+new_width+' !important}');
                }else{
                    var this_class = jQuery(this_item).attr('class').split(' ');
                    var display_class = '';
                    jQuery(this_class).each(function(index, value) {
                        if(value) display_class = display_class.concat('.'+value);
                    });

                    if(display_class.length) {
                        custom_css = custom_css.concat(display_class + ' { width:' + new_width + ' !important}');
                    }
                }
            });

            var data = {
                'action': 'bpm_update_theme_css',
                'custom_css': custom_css
            };

            jQuery.post(bpm_params.ajaxurl, data, function (result) {
               location.reload(true);
            });

        }

        function bpm_admin_wizard_reset_css(){

            jQuery('.bpm_template_css_item').each(function(index, value) {
                var item = jQuery(this).attr('data-item');
                var new_width = bpm_settings['bpm_template_parents_css'][item];
                var this_item = bpm_settings['bpm_template_parents'][item];
                if(new_width) {
                    jQuery(this_item).css('width', new_width);
                    jQuery(this).val(new_width);
                }

            });
        }

        function bpm_admin_wizard_test_css(){

            jQuery('.bpm_template_css_item').each(function(index, value) {
                var item = jQuery(this).attr('data-item');
                var this_item = bpm_settings['bpm_template_parents'][item];
                var new_width = jQuery(this).val();

                jQuery(this_item).css('width', new_width);

            });

        }

        function bpm_get_item(action, this_item){
            var attr = jQuery(this_item).attr('data-type');
            var item = jQuery(this_item).attr('data-item');
                if(attr){
                    var this_item = '';
                    if(attr == 'parent'){
                        this_item = bpm_settings['bpm_template_parents'][item];
                    }else{
                        var parent = jQuery(this_item).attr('data-parent');
                        this_item = bpm_settings['bpm_template_siblings'][parent][item];
                    }
                    if(action==1) {
                        jQuery(this_item).addClass('bpm_review_template_divs');
                    }else {
                        jQuery(this_item).removeClass("bpm_review_template_divs");
                    }
                }
        }

        function bpm_admin_wizard_update_template(){

            jQuery('#bpm_pick_a_template').hide();
            jQuery('#bpm_admin_login_template').hide();
            jQuery('#bpm_admin_template_update').hide();

            var selected_template = jQuery('input[name=bpm_template]:checked', '#bpm_get_admin_template').val();

            if(!selected_template){
                jQuery('#bpm_admin_template_update').show();
                jQuery('#bpm_pick_a_template').show();
                return;
            }

            if(!bpm_params.ajaxurl){
                jQuery('#bpm_admin_template_update').show();
                jQuery('#bpm_admin_login_template').show();
                return;
            }

            var data = {
                'action': 'bpm_update_theme_template',
                'page': selected_template
            };

            jQuery.post(bpm_params.ajaxurl, data, function (result) {
               location.reload(true);
            });

        }

        function bpm_spot_joyride(anchor_id){

            if(jQuery('#bpm_spot_joyride_'+anchor_id).length){
                alert('here');
            }

        }



        //this js library contains the functinos needed to support the main menu

        function bpm_remove_talat_user(this_id){

            jQuery(bpm_talat_list).each(function(index, value){
                if (value === this_id) {
                    bpm_talat_list.splice(index, 1);
                    jQuery('#bpm_talat_user_' + this_id).remove();
                }
            });

            jQuery('#bpm_talat_user_'+this_id).remove();
        }

        function bpm_open_modal(selected_object) {

            bpm_is_loading = 0;

            jQuery('#bpm_widget_disc_bar').hide();
            jQuery('#bpm_widget_sub_bar').hide();
            jQuery('#bpm_page_type_tabs').hide();
            jQuery('#bpm_left_widget_content').show().html('');;
            jQuery('#bpm_left_customers_content').hide();
            jQuery('#bpm_left_suppliers_content').hide();
            jQuery('#bpm_account_manager').hide();
            jQuery('#bpm_admin_users_topbar').hide();
            jQuery('#bpm_right_admin-help').show();
            jQuery('.bpm-right-admin-accordion').hide();

            switch (selected_object.id) {
                case 'bpm_theme_width':
                    bpm_settings['bpm_hide_wizard'] = 1;
                    bpmcontext.bpm_template_wizard();
                    jQuery('#bpm_admin_template_wizard').foundation('reveal', 'open');
                    return;
                    break;
                case 'left_prefmgr':
                    if(bpm_is_loading==0) {
                        bpm_is_loading = 1;

                        jQuery('#bpm_left_widget_window').foundation('reveal', 'close');

                        bpmcontext.bpm_refresh_page_loading();
                        jQuery.getJSON('https://' + bpm_settings['bpm_server']  + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', 'pageid='+bpm_my_page+'&action=bpmcontext', function (result) {
                            bpm_settings['bpm_login_status'] = Number(result.LOGGEDIN);

                            jQuery('#bpm_content_area').html(bpm_template);

                            jQuery('#bpm_page_loading_alert').hide();
                            bpmcontext.bpm_build_page(result);
                            bpmcontext.bpm_update_dashboard();
                        });
                    }

                    break;
                case 'left_talat_messages':
                    jQuery('#bpm_widget_title').html('<span class="fi-mail"></span>&nbsp;&nbsp;Messages');
                    jQuery('#bpm_left_widget_content').html(bpmcontext.bpm_make_talat_window());
                    jQuery('#bpm_left_widget_window').foundation('reveal', 'open');
                    break;
                case 'left_bpmmgr':
                    jQuery('#bpm_widget_title').html('<span class="fa fa-tachometer"></span>&nbsp;BPM Admin');

                    jQuery('#bpm_left_widget_window').foundation('reveal', 'open');
                    break;
                case 'left_notifications':

                    jQuery('#bpm_widget_title').html('<span class="fa fa-bell-o"></span>&nbsp;&nbsp;Notifications');

                    if(bpm_dashboard[12].wfdocs.length > 0 || bpm_dashboard[12].DRAFTS.length > 0) {
                        jQuery('#bpm_left_widget_content').html(bpmcontext.bpm_make_notifications_window());
                        jQuery('#'+bpm_first_notification).parent().addClass('active');
                        jQuery('#'+bpm_first_notification).click();
                    }else {
                        if(bpmcontext.bpm_show_functional_tutorial(1000)){
                            jQuery('#bpm_left_widget_content').html(bpmcontext.bpm_show_functional_tutorial(1000));
                        }else {
                            jQuery('#bpm_left_widget_content').text(bpm_trans_array['bpm_lng_message_up_to_date']);
                        }
                    }

                    jQuery('#bpm_left_widget_window').foundation('reveal', 'open');
                    break;
                case 'left_logout':
                    bpmcontext.bpm_logout_bpmcontext();
                    return;
                    break;
                case 'bpm_toolbar_talat':
                    var suggestions = [];
                    bpm_talat_list = [];
                    jQuery('.bpm_talat_user').remove();
                    jQuery('#bpm_talat_alert').hide();
                    bpm_dashboard[98] = null;

                    if(bpm_settings['bpm_has_shared'] == 1){
                        jQuery('#bpm_talat_external').show();
                    }else{
                        jQuery('#bpm_talat_external').hide();
                    }

                    jQuery('#bpm_talat_window').foundation('reveal', 'open');
                    jQuery('#bpm_form_talat').on('keyup keypress', function(e) {
                        var code = e.keyCode || e.which;
                        if (code == 13) {
                            e.preventDefault();
                            return false;
                        }
                    });
                    jQuery('#bpm_talat_window').css('max-height', jQuery('#bpm_talat_window').css('height'));

                    jQuery.each(bpm_dashboard[99], function(i, val) {
                        suggestions.push({ label: val.real_name + ' ', value: val.user_id });

                    });

                    //jQuery('#bpm_talat_to').css('z-index','1016');
                    jQuery("#bpm_talat_to").autocomplete({

                        //define callback to format results
                        source: suggestions,
                        appendTo: '#bpm_form_talat',

                        //define select handler
                        select: function(e, ui) {
                            var add_item = 0;
                            jQuery(bpm_talat_list).each(function(index, value){
                                if (value === ui.item.value) {
                                    add_item = 1;
                                }
                            });

                            if(add_item==0) {
                                var friend = ui.item.value,
                                    span = jQuery("<span>").text(' '+ ui.item.label).prop('id', 'bpm_talat_user_' + ui.item.value).addClass("bpm_talat_user"),
                                    a = jQuery("<a>").addClass("remove").attr({
                                        onclick: "bpm_remove_talat_user(" + ui.item.value + ")",
                                        title: "Remove " + ui.item.label
                                    }).text(" x ").appendTo(span);
                                span.insertBefore("#bpm_talat_list");
                                bpm_talat_list.push(ui.item.value);
                                jQuery('#bpm_talat_alert').html('').hide();
                                jQuery('#bpm_talat_send_group').show();
                            }

                        },
                        close: function(){
                            jQuery("#bpm_talat_to").val('');
                        },
                    change: function() {
                        jQuery("#bpm_talat_to").val("").css("top", 2);
                    }
                    });

                    break;
                case 'left_bookmarks':
                    jQuery('#bpm_widget_title').html('<span class="fi-bookmark"></span>&nbsp;&nbsp;Bookmarks');
                    jQuery('#bpm_left_widget_content').html(bpmcontext.bpm_make_left_report(bpm_dashboard[0],'bookmarks'));
                    jQuery('#bpm_left_widget_window').foundation('reveal', 'open');
                    break;
                case 'left_history':
                    jQuery('#bpm_widget_title').html('<span class="fa fa-history"></span>&nbsp;&nbsp;My History');
                    jQuery('#bpm_left_widget_content').html(bpmcontext.bpm_make_left_report(bpm_dashboard[1]));
                    jQuery('#bpm_left_widget_window').foundation('reveal', 'open');
                    break;
                case 'left_recent':
                    jQuery('#bpm_widget_title').html('<span class="fi-clock"></span>&nbsp;&nbsp;Recent Activity');
                    jQuery('#bpm_left_widget_content').html(bpmcontext.bpm_make_left_report(bpm_dashboard[2],'recent'));
                    jQuery('#bpm_left_widget_window').foundation('reveal', 'open');
                    break;
                case 'left_subscriptions':
                    jQuery('#bpm_widget_title').html('<span class="fi-mail"></span>&nbsp;&nbsp;'+bpm_trans_array['bpm_lng_subscriptions']);
                    var page_links = bpmcontext.bpm_make_left_report(bpm_dashboard[3]);
                    jQuery('#bpm_left_widget_content').html(page_links);
                    if(page_links){
                        jQuery('#bpm_widget_title').html('<span class="fi-mail"></span>&nbsp;&nbsp;'+bpm_trans_array['bpm_lng_subscriptions']+'&nbsp;&nbsp;<a class="bpm_nodecoration fi-widget bpm_links" style="font-size: .4em" onClick="bpmcontext.bpm_left_action('+"'bpm_clear_all_subs'"+');">&nbsp;'+ bpm_trans_array['bpm_lng_clear_all'] +'</a>&nbsp;<a id="bpm_sub_config_link" class="bpm_nodecoration bpm_links" style="font-size: .4em" onClick="bpmcontext.bpm_left_action('+"'bpm_configure_subs'"+');">&nbsp;'+ bpm_trans_array['bpm_lng_add_remove'] +'</a>&nbsp;<span id="bpm_sub_config_message" class="hide" style="font-size: .5em;color:green;">'+bpm_trans_array['bpm_lng_saved']+'</span>');
                        jQuery('#bpm_widget_disc_bar').hide();
                        jQuery('#bpm_widget_sub_bar').show();
                    }else{
                        jQuery('#bpm_widget_title').html('<span class="fi-mail"></span>&nbsp;&nbsp;'+bpm_trans_array['bpm_lng_subscriptions']+'&nbsp;&nbsp;<a id="bpm_sub_config_link" class="bpm_nodecoration fi-widget bpm_links" style="font-size: .4em" onClick="bpmcontext.bpm_left_action('+"'bpm_configure_subs'"+');">&nbsp;'+ bpm_trans_array['bpm_lng_add_remove'] +'</a>&nbsp;<span id="bpm_sub_config_message" class="hide" style="font-size: .5em;color:green;">'+bpm_trans_array['bpm_lng_saved']+'</span>');

                        if(bpmcontext.bpm_show_functional_tutorial(1002)){
                            jQuery('#bpm_left_widget_content').html(bpmcontext.bpm_show_functional_tutorial(1002));
                        }else {
                            jQuery('#bpm_left_widget_content').html(bpm_trans_array['bpm_lng_message_up_to_date']);
                        }
                    }
                    jQuery('#bpm_left_widget_window').foundation('reveal', 'open');
                    break;
                case 'left_discussions':
                    jQuery('#bpm_widget_title').html('<span class="fi-comment"></span>&nbsp;&nbsp;Discussions');
                    var page_links = bpmcontext.bpm_get_discussion_list(bpm_dashboard[4], 'none');
                    if(!page_links){
                        page_links = bpm_trans_array['bpm_lng_no_discussions'];
                    }
                    jQuery('#bpm_left_widget_content').html(page_links);
                    jQuery('#bpm_left_widget_window').foundation('reveal', 'open');
                    break;
                case 'left_directory':
                    jQuery('#bpm_widget_title').html('<span class="fi-torsos-all"></span>&nbsp;&nbsp;Directory');
                    var page_links = bpmcontext.bpm_make_directory(bpm_dashboard[5]);
                    jQuery('#bpm_left_widget_content').html(page_links);
                    jQuery('#bpm_left_widget_window').foundation('reveal', 'open');
                    break;
                case 'left_pagetypes':
                    jQuery('#bpm_widget_title').html('<span class="fi-page-multiple"></span>&nbsp;&nbsp;All Pages');

                    if(!bpm_dashboard[6]) {
                        //show loading overview
                        jQuery('#bpm_left_widget_content').html(bpm_trans_array['bpm_lng_loading']+'...');
                        jQuery('#bpm_left_widget_window').foundation('reveal', 'open');

                        jQuery.getJSON('https://' + bpm_settings['bpm_server']  + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + '&action=dashboard_ptl', function (dashboard) {

                            bpm_current_domain = dashboard.CURRENTCONTEXT;
                            if (dashboard.LOGGEDIN == '1') {
                                bpm_dashboard[6] = [];
                                bpm_dashboard[7] = [];
                                if(dashboard.PTLTAGGED) bpm_dashboard[6] = dashboard.PTLTAGGED;
                                if(dashboard.PTLALL) bpm_dashboard[7] = dashboard.PTLALL;
                                jQuery('#bpm_left_widget_content').hide();

                                var this_content = bpmcontext.bpm_page_type_tabs();

                                jQuery('#bpm_page_type_tabs_content').show().html(this_content);
                                jQuery('#bpm_page_type_tabs').show();
                            }
                        });
                    }else {
                        if(bpm_show_functional_tutorial(1003)){
                            jQuery('#bpm_page_type_tabs_content').html(bpmcontext.bpm_show_functional_tutorial(1003));
                        }else {
                            jQuery('#bpm_left_widget_content').hide();
                        }

                        jQuery('#bpm_page_type_tabs_content').show().html(bpmcontext.bpm_page_type_tabs());
                        jQuery('#bpm_page_type_tabs').show();
                        jQuery('#bpm_left_widget_window').foundation('reveal', 'open');
                    }
                    break;
                case 'left_customers':
                    jQuery('#bpm_widget_title').html('<span class="fi-torsos"></span>&nbsp;&nbsp;Customers');
                    if(!bpm_dashboard[8] || bpm_dashboard[9]) {
                        jQuery('#bpm_left_widget_content').html(bpm_trans_array['bpm_lng_loading']+'...');
                        jQuery('#bpm_left_widget_window').foundation('reveal', 'open');

                        jQuery.getJSON('https://' + bpm_settings['bpm_server']  + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + '&action=dashboard_cust', function (dashboard) {
                            bpm_current_domain = dashboard.CURRENTCONTEXT;
                            if (dashboard.LOGGEDIN == '1') {
                                bpm_dashboard[13] = '';
                                bpm_dashboard[8] = dashboard.LIST['listinfo'];
                                bpm_dashboard[9] = dashboard.CONTACT['listinfo'];
                                if(dashboard.CONTACTCORP) bpm_dashboard[13] = dashboard.CONTACTCORP['listinfo'];
                                jQuery('#bpm_left_widget_content').hide();
                                jQuery('#bpm_left_customers_tab_content').show().html(bpmcontext.bpm_cust_supp_tabs(1));
                                jQuery('#bpm_left_customers_content').show();
                                bpmcontext.bpm_set_url_links();
                            }
                        });
                    }else {

                        jQuery('#bpm_left_widget_content').hide();
                        jQuery('#bpm_left_customers_tab_content').show().html(bpmcontext.bpm_cust_supp_tabs(1));
                        jQuery('#bpm_left_customers_content').show();
                    }
                    break;
                case 'left_suppliers':
                    jQuery('#bpm_widget_title').html('<span class="fi-torsos"></span>&nbsp;&nbsp;Suppliers');
                    if(!bpm_dashboard[10] || bpm_dashboard[11]) {
                        jQuery('#bpm_left_widget_content').html(bpm_trans_array['bpm_lng_loading']+'...');
                        jQuery('#bpm_left_widget_window').foundation('reveal', 'open');

                        jQuery.getJSON('https://' + bpm_settings['bpm_server']  + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + '&action=dashboard_supplier', function (dashboard) {
                            bpm_current_domain = dashboard.CURRENTCONTEXT;
                            if (dashboard.LOGGEDIN == '1') {
                                bpm_dashboard[14] = '';
                                bpm_dashboard[10] = dashboard.LIST['listinfo'];
                                bpm_dashboard[11] = dashboard.CONTACT['listinfo'];
                                if(dashboard.CONTACTCORP) bpm_dashboard[14] = dashboard.CONTACTCORP['listinfo'];
                                jQuery('#bpm_left_widget_content').hide();
                                jQuery('#bpm_left_suppliers_tab_content').show().html(bpmcontext.bpm_cust_supp_tabs(2));
                                jQuery('#bpm_left_suppliers_content').show();
                                bpmcontext.bpm_set_url_links();
                            }
                        });
                    }else {

                        jQuery('#bpm_left_widget_content').hide();
                        jQuery('#bpm_left_suppliers_content').show().html(bpmcontext.bpm_cust_supp_tabs(2));
                        jQuery('#bpm_left_suppliers_content').show();
                    }
                    break;
                case 'left_quick_docs':
                    jQuery('#bpm_widget_title').html('<span class="fi-plus"></span>&nbsp;&nbsp;Quick Docs&nbsp;&nbsp;<a class="bpm_nodecoration fi-widget bpm_links" style="font-size: .4em" id="bpm_create_quick_doc_0" onClick="bpmcontext.bpm_create_quick_doc_target(this);">&nbsp;'+ bpm_trans_array['bpm_lng_add_remove'] +'</a>&nbsp;<span id="bpm_config_message" class="hide" style="font-size: .5em;color:green;">'+bpm_trans_array['bpm_lng_saved']+'</span> ');
                    jQuery('#bpm_left_widget_content').html(bpmcontext.bpm_create_quick_docs());

                    jQuery('#bpm_left_widget_window').foundation('reveal', 'open');
                    break;
                case 'bpm_toolbar_admin_home':
                    bpm_is_loading = 0;
                    bpmcontext.bpm_refresh_page_loading();
                    bpmcontext.bpm_load_page(bpm_settings['bpm_home_page']);
                    break;
                case 'left_acctmgr':
                case 'left_acctmgr_invite':
                case 'bpm_toolbar_admin_users':
                    //set main menu bar for admin use
                    bpmcontext.bpm_set_admin_buttons();

                    //clear main content area
                    jQuery('#bpm_main_content').html(jQuery('#bpm-admin-manager-frame').html());

                    //create help box on right side
                    jQuery('.bpm-right-accordion').hide();
                    jQuery('.bpm-right-admin-accordion').show();

                    //create user list to start
                    bpmcontext.bpm_create_user_list();
                    bpmcontext.bpm_create_tips();

                    break;
                case 'bpm_toolbar_admin_extensions':
                    bpmcontext.bpm_display_extension_list(1);
                    jQuery('#bpm-admin-help-info').html(jQuery('#bpm_functional_tutorial_1015').html());
                    break;
                case 'bpm_toolbar_admin_cart':
                    jQuery('#bpm_right_admin-help').hide();
                    bpmcontext.bpm_create_cart();
                    break;
                case 'bpm_toolbar_admin_billing':
                    bpmcontext.bpm_create_statement_list(1);
                    // bpm_create_payment();
                    // bpm_create_inv_list();
                    jQuery('#bpm-admin-help-info').html(jQuery('#bpm_functional_tutorial_1017').html());
                    break;
                case 'bpm_toolbar_admin_workspaces':
                    bpmcontext.bpm_create_workspace_report();
                    jQuery('#bpm-admin-help-info').html(jQuery('#bpm_functional_tutorial_1018').html());
                    break;
                case 'bpm_toolbar_admin_url':
                    bpmcontext.bpm_create_login_url();
                    jQuery('#bpm-admin-help-info').html(jQuery('#bpm_functional_tutorial_1019').html());
                    break;

                case 'left_prefmgr':
                    jQuery('#bpm_widget_title').html('<span class="fi-widget"></span>&nbsp;&nbsp;My Preferences');
                    jQuery('#bpm_left_widget_window').foundation('reveal', 'open');
                    jQuery('#bpm_left_widget_content').html(jQuery('#bpm_pref_manager').html());

                    break;
                default:
                    jQuery('#bpm_left_widget_window').foundation('reveal', 'open');
                    jQuery('#bpm_left_widget_content').html("test content " + selected_object.id);
            }


            bpmcontext.bpm_set_url_links();

        }


        function bpm_set_admin_buttons(){

            bpm_settings['adding_user'] = 0;

            jQuery('.bpm-non-account-manager').hide();
            jQuery('.bpm-account-manager').show();

            jQuery('.bpm_toolbar_admin_cart').hide();
            jQuery.each(bpm_settings['acctmgr'], function (index, value) {
                if (value['cart_qty']) {
                    jQuery('.bpm_toolbar_admin_cart').show();
                }
                var cart_qty = bpmcontext.bpm_get_cart_qty();
                if(cart_qty){
                    jQuery('#bpm_toolbar_admin_cart').text(' Cart (' + cart_qty + ')');
                }else{
                    jQuery('#bpm_toolbar_admin_cart').text(' Cart' )
                }
            });

            if(bpm_settings['invalid_url']){
                jQuery('#bpm_toolbar_admin_url_item').show();
            }else{
                jQuery('#bpm_toolbar_admin_url_item').hide();
            }

            if(bpm_settings['show_statement']){
                jQuery('#bpm_toolbar_admin_billing_item').show();
            }else{
                jQuery('#bpm_toolbar_admin_billing_item').hide();
            }

        }

        function bpm_add_talat_users(selected_process){

            if(selected_process==2){
                jQuery("#bpm_upload_talat_to").autocomplete("search", " ");
            }else {
                jQuery("#bpm_talat_to").autocomplete("search", " ");
            }
        }

        function bpm_create_notifications_target(selected_object){

            var this_html = '';

            if(selected_object == '999999') {
                jQuery.each(bpm_dashboard[12].WORKFLOW_MESSAGES, function (index, value) {
                    this_html = this_html.concat('<div class="bpm-row">');
                    this_html = this_html.concat('  <div class="bpm-small-12 bpm-large-12 bpm-columns text-left"><a class="url_links grid_links bpm_links bpm_text_medium" href="?pageid=' + value['page_id'] + '&domain=' + bpm_current_domain + '&action=bpmcontext" title="' + value['page_title'] + '">' + value['page_title'] + '</a></div>');
                    this_html = this_html.concat('</div>');
                });
            }else if(selected_object == '999998'){
                jQuery.each(bpm_dashboard[12].DRAFTS, function (index, value) {
                    this_html = this_html.concat('<div class="bpm-row">');
                    this_html = this_html.concat('  <div class="bpm-small-12 bpm-large-12 bpm-columns text-left"><a class="url_links grid_links bpm_links bpm_text_medium" href="?pageid=' + value['page_id'] + '&domain=' + bpm_current_domain + '&action=bpmcontext" title="' + value['page_title'] + '">' + value['page_title'] + '</a></div>');
                    this_html = this_html.concat('</div>');
                });
            }else if(selected_object == '999997'){
                jQuery.each(bpm_dashboard[12].ESCALATE, function (index, value) {
                    jQuery.each(value, function (index1, value1) {
                        this_html = this_html.concat('<div class="bpm-row">');
                        this_html = this_html.concat('  <div class="bpm-small-12 bpm-large-12 bpm-columns text-left"><a class="url_links grid_links bpm_links bpm_text_medium" href="?pageid=' + value1['page_id'] + '&domain=' + bpm_current_domain + '&action=bpmcontext" title="' + value1['page_title'] + '">' + value1['page_title'] + '</a></div>');
                        this_html = this_html.concat('</div>');
                    });
                });
            }else {
                jQuery.each(bpm_dashboard[12].wfdocs, function (index, value) {
                    if (value['template_index'] == selected_object && value['wfm_status'] > 0) {
                        this_html = this_html.concat('<div class="bpm-row">');
                        this_html = this_html.concat('  <div class="bpm-small-12 bpm-large-12 bpm-columns text-left"><a class="url_links grid_links bpm_links bpm_text_medium" href="?pageid=' + value['page_id'] + '&domain=' + bpm_current_domain + '&action=bpmcontext" title="' + value['page_title'] + '">' + value['page_title'] + '</a></div>');
                        this_html = this_html.concat('</div>');
                    }
                });
            }

            this_html = this_html.concat(bpmcontext.bpm_show_functional_tutorial(1000));


            jQuery('#bpm_notification_target').html(this_html);
            bpmcontext.bpm_set_url_links();
        }

        function bpm_show_functional_tutorial(this_tut_id){
            var html_line = '';
            var viewed = 0;

            if(bpm_settings['TUTORIALS']) {
                jQuery.each(bpm_settings['TUTORIALS'], function (index, value) {
                    if (value['tut_id'] == this_tut_id) {
                        viewed = 1;
                    }
                });
            }

            if(viewed == 0 && jQuery('#bpm_functional_tutorial_'+this_tut_id).length){
                if(this_tut_id < 1010) html_line = '<br><br>';
                html_line = html_line.concat('<div class="bpm-row" id="bpm_functional_tutorial_content'+this_tut_id+'">');
                html_line = html_line.concat('  <div class="bpm-small-12 bpm-large-12 bpm-columns text-left">'+ jQuery('#bpm_functional_tutorial_'+this_tut_id).html()  +'</div>');
                html_line = html_line.concat('</div>');
            }else{
                html_line = '';
            }

            return html_line;

        }

        function bpm_show_tutorial(tutorial_id){

            var show_tutorial = true;
            if(bpm_settings['TUTORIALS']) {
                jQuery.each(bpm_settings['TUTORIALS'], function (index, value) {

                    if (value['tut_id'] == tutorial_id) {
                        show_tutorial = false;
                    }
                });
            }
            return show_tutorial;
        }

        function bpm_SortByName(a, b){
            var aName = a.name.toLowerCase();
            var bName = b.name.toLowerCase();
            return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
        }

        function bpm_make_talat_window(){

            var this_html = '<div class="bpm-row full-width" style="margin-bottom:5px;max-height:400px;overflow-x:hidden">';
            jQuery.each(bpm_dashboard[12].WORKFLOW_MESSAGES, function (index, value) {


                if(value['recipients'].length > 0) {
                    var recipients = '';
                    var reply_all = '';
                    jQuery.each(value['recipients'], function (index, value) {
                        if (recipients) {
                            recipients = recipients.concat(', ');
                            reply_all = reply_all.concat(',');
                        } else {
                            recipients = 'Also Received: ';
                        }
                        reply_all = reply_all.concat(value['user_id'])
                        recipients = recipients.concat(value['real_name']);
                    });
                }

                this_html = this_html.concat('<div class="bpm-row ">');
                this_html = this_html.concat('  <div id="bpm_talat_message_item_'+value['id']+'" class="bpm-small-12 bpm-large-12 bpm-columns">');

                this_html = this_html.concat('<div class="bpm-row">');
                this_html = this_html.concat('  <div class="bpm-small-12 bpm-large-12 bpm-columns text-left"><a class="url_links grid_links bpm_links bpm_text_medium" href="?pageid=' + value['page_id'] + '&domain=' + bpm_current_domain + '&action=bpmcontext" title="' + value['page_title'] + '">' + value['page_title'] + '</a></div>');;
                this_html = this_html.concat('</div>');

                this_html = this_html.concat('<div class="bpm-row">');
                this_html = this_html.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left">');

                this_html = this_html.concat('<div class="bpm-row">');
                this_html = this_html.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-left">' + value['real_name'] + '</div>');
                this_html = this_html.concat('</div>');

                this_html = this_html.concat('<div class="bpm-row">');
                this_html = this_html.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-left">&nbsp;</div>');
                this_html = this_html.concat('</div>');

                this_html = this_html.concat('<div class="bpm-row">');
                this_html = this_html.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-left">' + value['send_date'] + '</div>');
                this_html = this_html.concat('</div>');

                this_html = this_html.concat('</div>');

                this_html = this_html.concat('<div class="bpm-small-7 bpm-large-7 bpm-columns text-left">');
                this_html = this_html.concat('<div class="bpm-row">');
                this_html = this_html.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-left" id="bpm_talat_message_text_' + value['id'] + '">' + value['message'] + '</div>');
                this_html = this_html.concat('</div>');

                this_html = this_html.concat('</div>');

                this_html = this_html.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left">');

                this_html = this_html.concat('<div class="bpm-row">');
                this_html = this_html.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-left"><a class="bpm_versions_button bpm_nodecoration" onClick="bpmcontext.bpm_talat_reply(0, '+ value['id'] + ', ' + value['page_id'] +')">Reply</a></div>');
                this_html = this_html.concat('</div>');
                this_html = this_html.concat('<div class="hide" id="bpm_talat_reply_to_'+value['id']+'">'+value['uad_user_id']+'</div>')

                if(reply_all) {
                    this_html = this_html.concat('<div class="bpm-row">');
                    this_html = this_html.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-left"><a class="bpm_versions_button bpm_nodecoration" onClick="bpmcontext.bpm_talat_reply(1, '+ value['id']  + ', ' + value['page_id'] +')">Reply All</a></div>');
                    this_html = this_html.concat('</div>');
                    this_html = this_html.concat('<div class="hide" id="bpm_talat_reply_all_'+value['id']+'">'+reply_all+'</div>')

                }

                this_html = this_html.concat('<div class="bpm-row">');
                this_html = this_html.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-left"><a class="bpm_versions_button bpm_nodecoration" onClick="bpmcontext.bpm_talat_dismiss('+ value['id']  + ', ' + value['page_id'] +')">Dismiss</a></div>');
                this_html = this_html.concat('</div>');
                this_html = this_html.concat('</div>');

                this_html = this_html.concat('</div>');

                if(value['recipients'].length > 0) {

                    this_html = this_html.concat('<div class="bpm-row">');
                    this_html = this_html.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-left">' + recipients + '</div>');
                    this_html = this_html.concat('</div>');
                }
                this_html = this_html.concat('</div>');
                this_html = this_html.concat('</div>');

                this_html = this_html.concat('<hr class="bpm_hr_gray">');
            });
            this_html = this_html.concat('</div>');

            return this_html;
        }

        function bpm_make_notifications_window(){

            var this_html = '';
            bpm_first_notification = '';

            this_html = this_html.concat('<div class="bpm-row full-width" style="margin-bottom:5px;max-height:400px;">');
            this_html = this_html.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left">');
            this_html = this_html.concat('<ul class="side-nav">');

            if(bpm_dashboard[12].DRAFTS) {
                if(bpm_dashboard[12].DRAFTS.length > 0) {
                    if (bpm_first_notification.length == 0) bpm_first_notification = 'bpm_create_notification_999998';
                    this_html = this_html.concat(' <li>');
                    this_html = this_html.concat('<a class="bpm_nodecoration  side-nav-item" id="bpm_create_notification_999998" onClick="bpmcontext.bpm_create_notifications_target(999998);">' + bpm_trans_array['bpm_lng_drafts'] + ' &nbsp;(' + bpm_dashboard[12].DRAFTS.length + ')</a>');
                    this_html = this_html.concat('</li>');
                }
            }

            if(bpm_dashboard[12].ESCALATE) {
        //        if(bpm_dashboard[12].ESCALATE.length > 0) {
                    if (bpm_first_notification.length == 0) bpm_first_notification = 'bpm_create_notification_999997';
                    var escalate_count = 0;
                    jQuery.each(bpm_dashboard[12].ESCALATE,function(index, value) {
                        escalate_count = escalate_count + value.length;
                    });
                if(escalate_count > 0){
                    this_html = this_html.concat(' <li>');
                    this_html = this_html.concat('<a class="bpm_nodecoration  side-nav-item" id="bpm_create_notification_999997" onClick="bpmcontext.bpm_create_notifications_target(999997);">' + bpm_trans_array['bpm_lng_Escalated'] + ' &nbsp;(' + escalate_count + ')</a>');
                    this_html = this_html.concat('</li>');
                }
            }

            jQuery.each(bpm_dashboard[12].wfdocstotals,function(index, value) {
                if (bpm_first_notification.length == 0) bpm_first_notification = 'bpm_create_notification_' + value['id'];
                var this_count = '';
                if (value['totalrecs']) {
                    this_count = '(' + value['totalrecs'] + ')';
                    this_html = this_html.concat(' <li>');
                    this_html = this_html.concat('<a class="bpm_nodecoration  side-nav-item" id="bpm_create_notification_' + value['id'] + '" onClick="bpmcontext.bpm_create_notifications_target(' + value['id'] + ');">' + value['name'] + '&nbsp;' + this_count + '</a>');
                    this_html = this_html.concat('</li>');
                }
            });

            this_html = this_html.concat('</ul>');

            this_html = this_html.concat('</div>'); //end of left column div

            this_html = this_html.concat('<div class="bpm-small-9 bpm-large-9 bpm-columns bpm_gray_border" id="bpm_notification_target">');

            this_html = this_html.concat('</div>'); //end of right column div
            this_html = this_html.concat('</div>');

            return this_html;

        }

        function bpm_make_subscriptions_window(){

            var this_html = '';

            this_html = this_html.concat('<div class="bpm-row full-width" style="margin-bottom:5px;max-height:400px;">');
            this_html = this_html.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns">');
            this_html = this_html.concat('<ul class="side-nav">');

            jQuery.each(bpm_dashboard[3],function(index, value) {
                this_html = this_html.concat(' <li class="bpm_ul_li">');
                this_html = this_html.concat('<a class="bpm_nodecoration" id="bpm_create_subscription_' + value['id'] + '" onClick="bpmcontext.bpm_create_notifications_target('+value['id']+');">' + value['name'] + '&nbsp;('+value['totalrecs']+')</a>');
                this_html = this_html.concat('</li>');

            });

            this_html = this_html.concat('</ul>');

            this_html = this_html.concat('</div>'); //end of left column div

            this_html = this_html.concat('<div class="bpm-small-9 bpm-large-9 bpm-columns bpm_gray_border" id="bpm_notification_target">');

            this_html = this_html.concat('</div>'); //end of right column div
            this_html = this_html.concat('</div>');

            return this_html;

        }

        function bpm_create_quick_docs(){

            var this_html = '';

            this_html = this_html.concat('<div class="bpm-row full-width" style="margin-bottom:5px;max-height:400px;">');
            this_html = this_html.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left">');
            this_html = this_html.concat('<ul class="side-nav" id="bpm_quick_docs_list">');

            jQuery.each(bpm_quick_docs,function(index, value) {
                this_html = this_html.concat(' <li class="bpm_ul_li">');
                this_html = this_html.concat('<a class="bpm_nodecoration side-nav-item " id="bpm_create_quick_doc_' + value['id'] + '" onClick="bpmcontext.bpm_create_quick_doc_target(this);">' + value['name'] + '</a>');
                this_html = this_html.concat('</li>');
            });

            this_html = this_html.concat('</ul>');

            this_html = this_html.concat('</div>'); //end of left column div

            this_html = this_html.concat('<div class="bpm-small-9 bpm-large-9 bpm-columns bpm_gray_border" id="bpm_quick_doc_target" style="height:330px;overflow: auto;">');

            if(bpm_show_functional_tutorial(1001)){
                this_html = this_html.concat(bpmcontext.bpm_show_functional_tutorial(1001));
            }

            this_html = this_html.concat('<div class="bpm-row">');
            this_html = this_html.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns">&nbsp;</div>');
            this_html = this_html.concat('<div class="bpm-large-10 bpm-small-10 bpm-columns text-left" style="height:100px;">' + jQuery('#bpm_quick_docs_message').text() + '</div>');
            this_html = this_html.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns">&nbsp;</div>');
            this_html = this_html.concat('</div>');

            this_html = this_html.concat('</div>'); //end of right column div
            this_html = this_html.concat('<div class="bpm-small-9 bpm-large-9 bpm-columns bpm_gray_border hide" id="bpm_quick_doc_target_message" ><br>' + bpm_trans_array['bpm_lng_quick_doc_parents'] + '</div>');
            this_html = this_html.concat('</div>');

            return this_html;
        }

        function bpm_create_quick_docs_config(){

            var new_page_string = '&action=get_quick_doc_config';
            var html_string = '';

            jQuery.getJSON('https://' + bpm_settings['bpm_server']  + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + new_page_string, function (result) {

                if (result) {

                    jQuery.each(result['QUICKDOCS'],function(index, value) {

                        html_string = html_string.concat('<div class="bpm-row full-width">');
                        html_string = html_string.concat('<div class="bpm-small-10 bpm-large-10 bpm-columns text-left">' + value['template_name'] + '</div>');
                        if(value['quick_doc_id']) {
                            html_string = html_string.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-right"><input onClick="bpmcontext.bpm_add_to_quick_doc_list(' + value['template_index'] + ',' + value['section_index'] + ')" type="checkbox" id="bpm_quick_doc_select_' + value['template_index'] + '" value="bpm_quick_doc_select_' + value['template_index']+'" checked></div>');
                        }else{
                            html_string = html_string.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-right"><input onClick="bpmcontext.bpm_add_to_quick_doc_list(' + value['template_index'] + ',' + value['section_index'] + ')" type="checkbox" id="bpm_quick_doc_select_' + value['template_index'] + '" value="bpm_quick_doc_select_' + value['template_index']+'" ></div>');
                        }
                        html_string = html_string.concat('</div>' + '<hr class="bpm_hr_gray">');

                    });

                    jQuery('#bpm_quick_doc_target').html(html_string);
                    jQuery('#bpm_quick_doc_target_message').show();
                }
            });

        }

        function bpm_add_to_quick_doc_list(selected_template, selected_section){

            var this_state = 'false';
            var n = jQuery( '#bpm_quick_doc_select_' + selected_template + ':checked' ).length;
            if(n) this_state = 'true';
            var this_html = '';

            var new_page_string = '&action=save_quick_docs&template_id=' + selected_template + '&sec_ids=' + selected_section + '&state=' + this_state;

            jQuery.getJSON('https://' + bpm_settings['bpm_server']  + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + new_page_string, function (result) {

                if (result) {
                    jQuery('#bpm_config_message').hide();

                    //reload the dashboard array
                    bpm_quick_docs = result.QUICKDOCS;

                    //add or remove from the quick docs list
                    jQuery.each(bpm_quick_docs,function(index, value) {
                        this_html = this_html.concat(' <li>');
                        this_html = this_html.concat('<a class="bpm_nodecoration side-nav-item" id="bpm_create_quick_doc_' + value['id'] + '" onClick="bpmcontext.bpm_create_quick_doc_target(this);">' + value['name'] + '</a>');
                        this_html = this_html.concat('</li>');
                    });

                    jQuery('#bpm_config_message').show().fadeOut(2000);
                    jQuery('#bpm_quick_docs_list').html(this_html);

                }
                bpmcontext.bpm_set_url_links();
            });

        }

        function bpm_create_quick_doc_target(selected_object){

            var this_html = '';
            var this_dropdown = '';
            var show_dropdown = 1;
            var hidden_field = '';
            var this_id = selected_object.id.substr(21);

            bpm_current_create_page = this_id;

            jQuery('#bpm_quick_doc_target_message').hide();

            if(bpm_current_create_page == 0){
                bpmcontext.bpm_create_quick_docs_config();
                return '';
            }

            var new_page_string = '&action=get_quick_doc_parents&docid=' + bpm_current_create_page;

            jQuery.getJSON('https://' + bpm_settings['bpm_server']  + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + new_page_string, function (result) {

                if(result) {

                    bpm_page_naming[this_id] = result['PAGENAMING'];

                    //setup template title
                    this_html = this_html.concat('<div class="bpm-row full-width" style="margin-bottom:15px;">');
                    this_html = this_html.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-left">');
                    this_html = this_html.concat('<span class="bpm_bold">'+jQuery('#bpm_create_quick_doc_'+this_id).text()+'</span>');
                    this_html = this_html.concat('</div>');
                    this_html = this_html.concat('</div><br><br>');

                    //setup parent page selector
                    this_dropdown = this_dropdown.concat('<div class="bpm-row full-width">');
                    this_dropdown = this_dropdown.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-left">');
                    this_dropdown = this_dropdown.concat('Select Parent Page');
                    this_dropdown = this_dropdown.concat('<select id="bpm_quick_doc_page_id">');

                    jQuery.each(result['PAGEINFO'],function(index, value) {
                        this_dropdown = this_dropdown.concat('<option value="' + value['page_id'] + '">' + value['page_title'] + '</option>');
                        if(value['main_page']==25) {
                            show_dropdown = 0;
                            hidden_field = '<input type="hidden" value="' + value['page_id'] + '" id="bpm_quick_doc_page_id">';
                        }
                    });

                    this_dropdown = this_dropdown.concat('</select>');
                    this_dropdown = this_dropdown.concat('</div>');
                    this_dropdown = this_dropdown.concat('</div><br>');

                    if(show_dropdown==1){
                        this_html = this_html.concat(this_dropdown);
                    }else{
                        this_html = this_html.concat(hidden_field);
                    }

                    //setup fields selector
                    this_html = this_html.concat('<div class="bpm-row full-width" style="margin-bottom:2em">');
                    this_html = this_html.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-left">');
                    this_html = this_html.concat(bpmcontext.bpm_create_add_page_name(bpm_page_naming[this_id], 1));
                    this_html = this_html.concat('</div>');
                    this_html = this_html.concat('</div>');

                    //setup send button
                    var bpm_quick_doc_buttons = '<br><br><div class="bpm-row full-width">';
                    bpm_quick_doc_buttons = bpm_quick_doc_buttons.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-left">');
                    bpm_quick_doc_buttons = bpm_quick_doc_buttons.concat('<div class="bpm-row" style="margin-bottom:5px;">');
                    bpm_quick_doc_buttons = bpm_quick_doc_buttons.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns">&nbsp;</div>');
                    bpm_quick_doc_buttons = bpm_quick_doc_buttons.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns text-right">');
                    bpm_quick_doc_buttons = bpm_quick_doc_buttons.concat('<a id="bpm_quick_docs_add_page_button" onClick="bpmcontext.bpm_create_new_page(1,1);" class="button bpm_nodecoration small" >' + bpm_trans_array['bpm_lng_create_draft']+ '</a>');
                    bpm_quick_doc_buttons = bpm_quick_doc_buttons.concat('</div>');
                    bpm_quick_doc_buttons = bpm_quick_doc_buttons.concat('</div>');
                    bpm_quick_doc_buttons = bpm_quick_doc_buttons.concat('</div>');
                    bpm_quick_doc_buttons = bpm_quick_doc_buttons.concat('</div>');

                    this_html = this_html.concat(bpm_quick_doc_buttons);

                    jQuery('#bpm_quick_doc_target').html(this_html);

                    jQuery('#quick_doc_publish_on_create').click(function() {
                        var $this = jQuery(this);
                        if ($this.is(':checked')) {
                            // the checkbox was checked
                            jQuery('#bpm_quick_docs_add_page_button').text(bpm_trans_array['bpm_lng_publish']);
                        } else {
                            // the checkbox was unchecked
                            jQuery('#bpm_quick_docs_add_page_button').text(bpm_trans_array['bpm_lng_create_draft']);
                        }
                    });
                }else{
                    this_html = this_html.concat('<div class="bpm-row full-width">');
                    this_html = this_html.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-left">');
                    this_html = this_html.concat('<No parent pages for this template type.');
                    this_html = this_html.concat('</div>');
                    this_html = this_html.concat('</div>');
                    jQuery('#bpm_quick_doc_target').html(this_html);
                }
            });

        }

        function bpm_cust_supp_tabs( type){

            var tab_1, tab_2, tab_3, content_1, content_2, content_3;
            tab_1 = 'bpm_left_customers_loc';
            tab_2 = 'bpm_left_customers_contact';
            tab_3 = 'bpm_left_customers_corp';


            if(type == 1){
                content_1 = bpm_dashboard[8];
                content_2 = bpm_dashboard[9];
                content_3 = bpm_dashboard[13];
            }else{
                content_1 = bpm_dashboard[10];
                content_2 = bpm_dashboard[11];
                content_3 = bpm_dashboard[14];
            }

            var tab_content = '';

            tab_content = tab_content.concat('<div class="content active" id="' + tab_3 + '" style="min-height:300px;max-height:250px;width:100%">');
            tab_content = tab_content.concat(bpmcontext.bpm_make_cust_supplier_list(content_3, 3, type));
            tab_content = tab_content.concat('</div>');
            tab_content = tab_content.concat('<div class="content " id="' + tab_1 + '" style="min-height:300px;max-height:250px;width:100%">');
            tab_content = tab_content.concat(bpmcontext.bpm_make_cust_supplier_list(content_1, 1, type));
            tab_content = tab_content.concat('</div>');
            tab_content = tab_content.concat(' <div class="content" id="' + tab_2 + '" style="min-height:300px;max-height:250px;">');
            tab_content = tab_content.concat(bpmcontext.bpm_make_cust_supplier_list(content_2, 2, type));
            tab_content = tab_content.concat('</div>');
            //tab_content = tab_content.concat('</div>');

            return tab_content;

        }

        function bpm_make_cust_supplier_list(this_list, list_type, c_or_s){

            var tag_content = '';
            if(list_type==1 || list_type == 3){
                if(!this_list && c_or_s==1 ) return bpm_trans_array['bpm_lng_no_cust'];
                if(!this_list && c_or_s==2) return bpm_trans_array['bpm_lng_no_supp'];
                //make location list
                jQuery.each(this_list,function(index, value) {
                    tag_content = tag_content.concat('<div class="bpm-row full-width">');
                    tag_content = tag_content.concat('  <div class="bpm-small-12 bpm-large-12 bpm-columns text-left"><a class="grid_links url_links bpm_links" href="?pageid=' + value['companyid'] + '&domain=' + bpm_current_domain + '&action=bpmcontext" title="' + value['company'] + '">' + value['company'] + '</a></div>');
                    tag_content = tag_content.concat('</div>');
                });
            }else{
                if(!this_list && c_or_s==1) return bpm_trans_array['bpm_lng_no_cust'];
                if(!this_list && c_or_s==2) return bpm_trans_array['bpm_lng_no_supp'];
                //make contact list

                tag_content = tag_content.concat('<div class="bpm-row">');
                tag_content = tag_content.concat('  <div class="bpm-small-3 bpm-large-3 bpm-columns bpm_bold text-left">' + bpm_trans_array['bpm_lng_name'] + '</div>');
                tag_content = tag_content.concat('  <div class="bpm-small-3 bpm-large-3 bpm-columns text-left">' + bpm_trans_array['bpm_lng_company'] + '</div>');
                tag_content = tag_content.concat('  <div class="bpm-small-2 bpm-large-2 bpm-columns text-left" >' + bpm_trans_array['bpm_lng_title'] + '</div>');
                tag_content = tag_content.concat('  <div class="bpm-small-2 bpm-large-2 bpm-columns text-left" >' + bpm_trans_array['bpm_lng_phone'] + '</div>');
                tag_content = tag_content.concat('  <div class="bpm-small-2 bpm-large-2 bpm-columns text-left" >' + bpm_trans_array['bpm_lng_email'] + '</div>');
                tag_content = tag_content.concat('</div>');

                jQuery.each(this_list,function(index, value) {
                    var title = '&nbsp;';
                    var email = '&nbsp;';
                    var phone = '&nbsp;';
                    if(value['contactTitle']) title = '<span class="span_text">' + value['contactTitle'] + '</span>';
                    if(value['contactPhone']) phone = '<span class="span_text">' + value['contactPhone'] + '</span>';
                    if(value['contactEmail']) email = '<a class="grid_links bpm_links" href="mailto:' + value['contactEmail'] + '">Email</a>';

                    if(value['contactName']) {
                        tag_content = tag_content.concat('<div class="bpm-row">');
                        tag_content = tag_content.concat('  <div class="bpm-small-3 bpm-large-3 bpm-columns text-left"><a class="url_links grid_links bpm_links" href="?pageid=' + value['contactid'] + '&domain=' + bpm_current_domain + '&action=bpmcontext" title="' + value['contactName'] + '">' + value['contactName'] + '</a></div>');
                        tag_content = tag_content.concat('  <div class="bpm-small-3 bpm-large-3 bpm-columns text-left"><a class="url_links grid_links bpm_links" href="?pageid=' + value['parentid'] + '&domain=' + bpm_current_domain + '&action=bpmcontext" title="' + value['company'] + '">' + value['company'] + '</a></div>');
                        tag_content = tag_content.concat('  <div class="bpm-small-2 bpm-large-2 bpm-columns text-left" >' + title + '</div>');
                        tag_content = tag_content.concat('  <div class="bpm-small-2 bpm-large-2 bpm-columns text-left" >' + phone + '</div>');
                        tag_content = tag_content.concat('  <div class="bpm-small-2 bpm-large-2 bpm-columns text-left" >' + email + '</div>');
                        tag_content = tag_content.concat('</div>');
                    }
                });

            }

            return tag_content;
        }

        function bpm_page_type_tabs(){

            var page_types = '';
            jQuery('#bpm_tab_list').hide();
            jQuery('#bpm_tab_tagged').hide();
            jQuery('#bpm_page_types_fav').hide();

            if(bpm_dashboard[6].length > 0){
                page_types = page_types.concat('<div class="content active" id="bpm_page_types_fav" style="width:100%">');
                jQuery('#bpm_tab_tagged').addClass('active ').show();
                jQuery('#bpm_tab_all').removeClass('active ');
                page_types = page_types.concat(bpmcontext.bpm_make_page_type_list(bpm_dashboard[6]));
                page_types = page_types.concat('</div>');
                page_types = page_types.concat(' <div class="content" id="bpm_page_types_all" style="max-height:300px;">');
                if(bpm_dashboard[7].length > 0) page_types = page_types.concat(bpm_make_page_type_list(bpm_dashboard[7]));
                page_types = page_types.concat('</div>');
            }else {
                page_types = page_types.concat(' <div class="content active" id="bpm_page_types_all" style="max-height:300px;">');
                if (bpm_dashboard[7].length > 0) page_types = page_types.concat(bpm_make_page_type_list(bpm_dashboard[7]));
                page_types = page_types.concat('</div>');
            }
            page_types = page_types.concat(' <div class="content" id="bpm_page_types_res" style="max-height:300px;">');
            page_types = page_types.concat(' ');
            page_types = page_types.concat('</div>');

            if(bpm_show_functional_tutorial(1003)){
                page_types = page_types.concat(bpmcontext.bpm_show_functional_tutorial(1003));
            }

            return page_types;
        }

        function bpm_load_page_type(this_id){

            var this_html = '';

        //    jQuery('#bpm_page_types_res').show();

            jQuery('#bpm_tab_all').removeClass('active ');
            jQuery('#bpm_tab_tagged').removeClass('active ');
            jQuery('#bpm_tab_list').addClass('active ').show();

            jQuery('#bpm_page_types_all').removeClass('active');
            jQuery('#bpm_page_types_fav').removeClass('active');
            jQuery('#bpm_page_types_res').addClass('active').show();

            jQuery('#bpm_tab_list').click();

            jQuery('#bpm_page_types_res').html(bpm_trans_array['bpm_lng_loading'] + '...');

            var new_page_string = '&action=get_page_types&docid=' + this_id;

            jQuery.getJSON('https://' + bpm_settings['bpm_server']  + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + new_page_string, function (result) {

                if (result.PAGES) {
                    jQuery.each(result.PAGES,function(index, value) {
                        this_html = this_html.concat('<div class="bpm-row">');
                        this_html = this_html.concat('<div class="bpm-small-10 bpm-large-10 bpm-columns text-left"><a class="url_links bpm_links" href="?pageid=' + value['page_id'] + '&domain=' + bpm_current_domain + '&action=bpmcontext" title="' + value['page_title'] + '">' + value['page_title'] + '</a></div>');
                        this_html = this_html.concat('</div>');
                    });
                    jQuery('#bpm_page_types_res').html(this_html);
                    bpmcontext.bpm_set_url_links();
                }else{
                    jQuery('#bpm_page_types_res').html(bpm_trans_array['bpm_lng_no_results']);
                }
            });
            bpmcontext.bpm_set_url_links();
        }

        function bpm_make_page_type_list(this_list){

            var tag_content = '';

            jQuery.each(this_list,function(index, value) {
                tag_content = tag_content.concat('<div class="bpm-row">');
                tag_content = tag_content.concat('  <div class="bpm-small-10 bpm-large-10 bpm-columns bpm_border-gray  text-left"><a  class="bpm_links bpm_nodecoration" onClick="bpmcontext.bpm_load_page_type(' + value['template_index'] + ')">' + value['template_name'] + '</a></div>');
                tag_content = tag_content.concat('  <div class="bpm-small-2 bpm-large-2 bpm-columns bpm_border-gray  text-left"  style="text-align:right;">' + value['template_count'] + '</div>');
                tag_content = tag_content.concat('</div>');
            });

            return tag_content;
        }

        function bpm_add_to_sub_list(selected_template){
            var this_state = 'false';
            var n = jQuery( '#bpm_sub_select_' + selected_template + ':checked' ).length;
            if(n) this_state = 'true';
            var this_html = '';

            var new_page_string = '&action=save_sub&template_id=' + selected_template + '&state=' + this_state;
            jQuery('#bpm_sub_config_message').hide();
            jQuery.getJSON('https://' + bpm_settings['bpm_server']  + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + new_page_string, function (result) {
                jQuery('#bpm_sub_config_message').show().fadeOut(2000);
            });
        }

        this.bpm_add_to_admin_sub_list = function(selected_template){
            var this_state = 'false';
            var n = jQuery( '#bpm_sub_admin_select_' + selected_template + ':checked' ).length;
            if(n) this_state = 'true';
            var this_html = '';

            var new_page_string = '&action=save_admin_sub&template_id=' + selected_template + '&state=' + this_state;
            jQuery('#bpm_sub_config_message').hide();
            jQuery.getJSON('https://' + bpm_settings['bpm_server']  + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + new_page_string, function (result) {
                jQuery('#bpm_sub_config_message').show().fadeOut(2000);
            });
        }

        function bpm_left_action(this_action){
            switch(this_action){
                case 'bpm_configure_subs':

                    if(jQuery('#bpm_sub_config_link').html() == '&nbsp;' + bpm_trans_array['bpm_lng_add_remove']) {
                        jQuery('#bpm_sub_config_link').html('&nbsp;' + bpm_trans_array['bpm_lng_show_list']);
                        var new_page_string = '&action=get_subscription_config';
                        var html_string = '';

                        jQuery.getJSON('https://' + bpm_settings['bpm_server']  + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + new_page_string, function (result) {

                            if (result) {

                                if(bpm_user_role == 'admin'){
                                    html_string = html_string.concat('<div class="bpm-row full-width">');
                                    html_string = html_string.concat('<div class="bpm-small-8 bpm-large-8 bpm-columns text-left">Template Name</div>');
                                    html_string = html_string.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-center">Sub</div>');
                                    html_string = html_string.concat('<div id="bpm_admin_sub_message" class="bpm-small-2 bpm-large-2 bpm-columns text-center">Admin Sub</div>');
                                    html_string = html_string.concat('</div>' + '<hr class="bpm_hr_gray">');
                                }
                                jQuery.each(result['SUBPAGES'], function (index, value) {

                                    html_string = html_string.concat('<div class="bpm-row full-width">');
                                    if(bpm_user_role == 'admin') {
                                        html_string = html_string.concat('<div class="bpm-small-8 bpm-large-8 bpm-columns text-left">' + value['template_name'] + '</div>');
                                        if (value['this_index']) {
                                            html_string = html_string.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-center"><input onClick="bpmcontext.bpm_add_to_sub_list(' + value['template_index'] + ')" type="checkbox" id="bpm_sub_select_' + value['template_index'] + '" value="bpm_sub_select_' + value['template_index'] + '" checked></div>');
                                        } else {
                                            html_string = html_string.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-center"><input onClick="bpmcontext.bpm_add_to_sub_list(' + value['template_index'] + ')" type="checkbox" id="bpm_sub_select_' + value['template_index'] + '" value="bpm_sub_select_' + value['template_index'] + '" ></div>');
                                        }
                                        if (value['admin_sub']) {
                                            html_string = html_string.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-center"><input onClick="bpmcontext.bpm_add_to_admin_sub_list(' + value['template_index'] + ')" type="checkbox" id="bpm_sub_admin_select_' + value['template_index'] + '" value="bpm_sub_select_' + value['template_index'] + '" checked></div>');
                                        } else {
                                            html_string = html_string.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-center"><input onClick="bpmcontext.bpm_add_to_admin_sub_list(' + value['template_index'] + ')" type="checkbox" id="bpm_sub_admin_select_' + value['template_index'] + '" value="bpm_sub_select_' + value['template_index'] + '" ></div>');
                                        }

                                    }else {
                                        html_string = html_string.concat('<div class="bpm-small-10 bpm-large-10 bpm-columns text-left">' + value['template_name'] + '</div>');
                                        if (value['this_index']) {
                                            html_string = html_string.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-center"><input onClick="bpmcontext.bpm_add_to_sub_list(' + value['template_index'] + ')" type="checkbox" id="bpm_sub_select_' + value['template_index'] + '" value="bpm_sub_select_' + value['template_index'] + '" checked></div>');
                                        } else {
                                            html_string = html_string.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-center"><input onClick="bpmcontext.bpm_add_to_sub_list(' + value['template_index'] + ')" type="checkbox" id="bpm_sub_select_' + value['template_index'] + '" value="bpm_sub_select_' + value['template_index'] + '" ></div>');
                                        }
                                    }
                                    html_string = html_string.concat('</div>' + '<hr class="bpm_hr_gray">');
                                });

                                jQuery('#bpm_left_widget_content').html(html_string);
                            }
                        });
                    }else{
                        jQuery('#bpm_sub_config_link').html('&nbsp;' + bpm_trans_array['bpm_lng_add_remove']);
                        var page_links = bpmcontext.bpm_make_left_report(bpm_dashboard[3]);
                        if(page_links) {
                            jQuery('#bpm_left_widget_content').html(page_links);
                        }else{
                            if(bpmcontext.bpm_show_functional_tutorial(1002)){
                                jQuery('#bpm_left_widget_content').html(bpmcontext.bpm_show_functional_tutorial(1002));
                            }else {
                                jQuery('#bpm_left_widget_content').html(bpm_trans_array['bpm_lng_message_up_to_date']);
                            }

                        }
                    }

                    break;
                case 'bpm_clear_all_subs':
                    jQuery.getJSON('https://'+bpm_settings['bpm_server'] +'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + '&action=clear_all_subs', function(result){
                        if(bpm_show_functional_tutorial(1002)){
                            jQuery('#bpm_left_widget_content').html(bpmcontext.bpm_show_functional_tutorial(1002));
                        }else {
                            jQuery('#bpm_left_widget_content').html(bpm_trans_array['bpm_lng_message_up_to_date']);
                        }
                        jQuery('#bpm_widget_title').html('<span class="fi-mail"></span>&nbsp;&nbsp;'+bpm_trans_array['bpm_lng_subscriptions']+'&nbsp;&nbsp;<a id="bpm_sub_config_link" class="bpm_nodecoration fi-widget bpm_links" style="font-size: .4em" onClick="bpmcontext.bpm_left_action('+"'bpm_configure_subs'"+');">&nbsp;'+ bpm_trans_array['bpm_lng_add_remove'] +'</a>&nbsp;<span id="bpm_sub_config_message" class="hide" style="font-size: .5em;color:green;">'+bpm_trans_array['bpm_lng_saved']+'</span>');
                        bpmcontext.bpm_update_dashboard();
                    });
                    break;
            }

        }

        function bpm_make_directory(this_content) {

            if (bpm_dashboard[5].length == 0) {
                jQuery.getJSON('https://' + bpm_settings['bpm_server']  + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + '&action=getEmployeeDirectory', function (result) {
                    if (result) {
                        if (result.DIRECTORY) {
                            bpm_dashboard[5] = result.DIRECTORY;
                            jQuery('#bpm_left_widget_content').html(bpmcontext.bpm_make_directory_html(result.DIRECTORY));
                        }
                    }
                });
            }else{
                return bpmcontext.bpm_make_directory_html(this_content);
            }

        }

        function bpm_make_directory_html(this_content){
            var links_list = '';
            if(this_content) {

                var bpm_link_string = '';

                jQuery.each(this_content,function(index, value) {
                    if (value['page_id']) {
                        var title = '<span style="color:lightgrey">' + bpm_trans_array['bpm_lng_title'] + '</span>';
                        var email = '&nbsp;';
                        var department = '<span style="color:lightgrey">' + bpm_trans_array['bpm_lng_department'] + '</span>';
                        var phone = '<span style="color:lightgrey">' + bpm_trans_array['bpm_lng_phone'] + '</span>';
                        var mobile = '<span style="color:lightgrey">' + bpm_trans_array['bpm_lng_mobile'] + '</span>';
                        if(value['title']) title = value['title'];
                        if(value['department']) department = value['department'];
                        if(value['phone']) phone = bpm_trans_array['bpm_lng_phone']+': '+ value['phone'];
                        if(value['mobile']) mobile = bpm_trans_array['bpm_lng_mobile']+': '+ value['mobile'];

                        if(value['email']) email = '<a href="mailto:' + value['email'] + '" class="bpm_links">'+value['email']+'</a>';

                        bpm_link_string = '<a class="url_links bpm_links" href="?pageid=' + value['page_id'] + '&domain=' + bpm_current_domain + '&action=bpmcontext" title="' + value['name'] + '">' + value['name'] + '</a>';

                        links_list = links_list.concat('<div class="bpm-row">');
                        links_list = links_list.concat('<div class="bpm-small-4 bpm-large-4 bpm-columns bpm_text_medium text-left">'+bpm_link_string+'</div>');
                        links_list = links_list.concat('<div class="bpm-small-4 bpm-large-4 bpm-columns bpm_text_medium text-left">'+phone+'&nbsp;</div>');
                        links_list = links_list.concat('<div class="bpm-small-4 bpm-large-4 bpm-columns bpm_text_medium text-right">'+mobile+'&nbsp;</div>');
                        links_list = links_list.concat('</div>');

                        links_list = links_list.concat('<div class="bpm-row">');
                        links_list = links_list.concat('<div class="bpm-small-4 bpm-large-4 bpm-columns bpm_text_medium text-left">'+title+'</div>');
                        links_list = links_list.concat('<div class="bpm-small-8 bpm-large-8 bpm-columns bpm_text_medium text-right">'+email+'&nbsp;</div>');
                        links_list = links_list.concat('</div>');

                        links_list = links_list.concat('<hr class="bpm_hr_gray">');

                    }

                });

            }

            links_list = links_list.concat(bpmcontext.bpm_show_functional_tutorial(1005));

            return links_list;
        }

        function bpm_make_left_report(this_content, report_type, homepage){
            var links_list = '';

            if(this_content) {

                var links_array = [];
                var bpm_link_string = '';
                var bpm_wfm_status = '';
                var item_number = '';
                var item_number_text = '';

                jQuery.each(this_content,function(index, value) {

                    if (value['page_id']) {
                        bpm_wfm_status = value['wfm_status'];
                        switch (value['wfm_status']) {
                            case '0':
                                bpm_wfm_status = bpm_trans_array['bpm_lng_draft'];
                                if(value['wfm_current_id'] != bpm_settings['userid']) display = 0;
                                break;
                            case '1':
                                bpm_wfm_status = bpm_trans_array['bpm_lng_open'];
                                if(value['real_name']) bpm_wfm_status = bpm_trans_array['bpm_lng_open'] + ' - ' + value['real_name'];
                                break;
                            case '2':
                                bpm_wfm_status = bpm_trans_array['bpm_lng_closed'];
                                break;
                        }
                        var page_touched = '';
                        if((report_type=='search' || report_type=='recent') && value['page_touched']) {

                            page_touched = value['page_touched'];
                        }
                        if(report_type=='search'){
                            item_number = index + 1;
                            item_number_text = item_number + '.&nbsp';
                        }

                        bpm_link_string = item_number_text + '<a class="url_links bpm_links " href="?pageid=' + value['page_id'] + '&domain=' + bpm_current_domain + '&action=bpmcontext"  title="' + value['page_title'] + '">' + value['page_title'] + '</a>';

                        links_array.push({
                            col_1: bpm_link_string, col_2:page_touched, col_3: bpm_wfm_status,  col_4: value['real_name']
                        });
                    }
                    if(homepage && index > 9 && report_type != 'search') return false;
                    if(report_type == 'search' && item_number > 29) return false;
                });

                if(report_type=='recent') {
                    links_list = bpmcontext.bpm_make_section_links_grid(links_array);
                }else {
                    links_list = bpmcontext.bpm_make_section_links_grid(links_array);
                }
            }

            if(links_list.length == 0 && report_type == 'bookmarks'){
                links_list = links_list.concat('<div class="bpm-row">');
                links_list = links_list.concat('  <div class="bpm-small-12 bpm-large-12 bpm-columns text-left">' + bpm_trans_array['bpm_bookmarks_message'] + '</div>');
                links_list = links_list.concat('</div>');
            }

            return links_list;
        }


        function bpm_acct_mgr(selected_object){

            jQuery('#bpm_admin_users_topbar').hide();
            bpm_settings['acctmgrpage'] = jQuery(selected_object).prop('id');

            switch(bpm_settings['acctmgrpage']){
                case 'bpm_acct_manager_users':
                    bpmcontext.bpm_create_user_list();
                    return;
                    break;
                case 'bpm_acct_manager_features':
                case 'bpm_acct_manager_storage':
                    bpmcontext.bpm_display_extension_list(1);
                    break;
                case 'bpm_acct_manager_cart':
                    bpmcontext.bpm_create_cart();
                    return;
                    break;
                case 'bpm_acct_manager_payment':
                    bpmcontext.bpm_create_payment();
                    break;
                case 'bpm_acct_manager_statement':
                    bpmcontext.bpm_create_statement_list(1);
                    break;
                case 'bpm_acct_manager_invoices':
                    bpmcontext.bpm_create_inv_list();
                    break;
                case 'bpm_acct_manager_login_url':
                    bpmcontext.bpm_create_login_url();
                    break;
                case 'bpm_acct_manager_workspaces':
                    bpmcontext.bpm_create_workspace_report();
                    break;
            }


        }

        function bpm_cancel_create_user(){
            jQuery('#bpm_account_manager_content').show();
            jQuery('#bpm_add_intranet_user_alert').hide();
            jQuery('#bpm_add_intranet_user_form').hide();
            bpmcontext.bpm_set_url_links();
        }

        function bpm_admin_action(selected_object){

            switch(jQuery(selected_object).prop('id')){
                case 'bpm_admin_add_intranet_user':
                    jQuery('#bpm_email_new_intranet_message').val('');
                    jQuery('#bpm_new_intranet_user_name').val('');
                    jQuery('#bpm_new_intranet_user_email').val('');
                    //show a panel with a form to add users
                    jQuery('#bpm_add_intranet_user_alert').hide();
                    jQuery('#bpm_add_intranet_user_form').show();
                    jQuery('#bpm_account_manager_content').hide();
                    jQuery('#bpm_add_intranet_user_added_alert').hide();
                    break;
            }
        }

        function bpm_create_user(user_type){

            jQuery('#bpm-admin-add-user-activity').show();

            var status = 0;

            var message = jQuery('#bpm_email_new_intranet_message').val();;
            var name = jQuery('#bpm_new_intranet_user_name').val();
            var email = jQuery('#bpm_new_intranet_user_email').val();

            jQuery('#bpm_new_intranet_user_email').css("border-color","");
            jQuery('#bpm_new_intranet_user_name').css("border-color","");

            switch(user_type){
                case 2:
                    //validate email field
                    if (email == '' || !bpmcontext.bpm_validateEmail(email)){
                        jQuery('#bpm_new_intranet_user_email').css("border","1px solid red");
                        status = 1;
                    }

                    //validate name field
                    if (name == ''){
                        jQuery('#bpm_new_intranet_user_name').css("border","1px solid red");
                        status = 1;
                    }

                    break;
            }

            if(status==1){
                bpm_settings['adding_user'] = 0;
                jQuery('#bpm_create_user_button').css('background-color','#008cba').removeAttr('disabled');
                jQuery('#bpm-admin-add-user-activity').hide();
                return;
            }

            var querystring = 'domain=' + bpm_current_domain + "&action=add_user&pageid=" + bpm_pageid + "&name=" + name + '&email='+ email + '&message=' + message + '&userType=' + user_type;

            jQuery.getJSON('https://'+bpm_settings['bpm_server'] +'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function(result){

                jQuery('#bpm_create_user_button').css('background-color','#008cba').removeAttr('disabled');
                bpm_settings['adding_user'] = 0;
                jQuery('#bpm-admin-add-user-activity').hide();

                switch(result.TRANSTATUS['code']){
                    case 0:
                        jQuery('#bpm_new_intranet_user_name').val('');
                        jQuery('#bpm_new_intranet_user_email').val('');
                        jQuery('#bpm_add_intranet_user_added_alert').show().text(name + ' has been invited.  You can deactivate a user on the list by clicking Active and selecting Deactivate.');
                        bpm_user_list = '';
                        bpmcontext.bpm_create_user_list();
                        break;
                    default:
                        //show error message
                        var error_message = result.TRANSTATUS['message'];

                        if(bpm_trans_array['bpm_lng_msg_'+error_message.replace(/ /g, '_')]) error_message = bpm_trans_array['bpm_lng_msg_'+error_message.replace(/ /g, '_')];
                        jQuery('#bpm_add_intranet_user_alert').text(error_message).show();

                }

            });

        }


        function bpm_deactivate_user(user_id){

            var this_html = '';
            this_html = this_html.concat('<div class="bpm-row">');
            if(bpm_settings['deactivate_massage'][user_id]) {
                //if user has contact us firms assigned then cannot deactivate
                this_html = this_html.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns bpm_grid_section_links text-left">' + bpm_settings['deactivate_massage'][user_id] + '</div>');
                this_html = this_html.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns bpm_grid_section_links text-right"><a onClick="bpmcontext.bpm_confirm_no_user_change()" class="tiny button bpm-small bpm_lng_no" style="text-decoration: none;height:3em;">Cancel</a></div>');
            }else {
                //elseok to deactivate
                this_html = this_html.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns bpm_grid_section_links text-left">' + bpm_trans_array['bpm_lng_deactivate_user_message'] + '</div>');
                this_html = this_html.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns bpm_grid_section_links text-right"><a onClick="bpmcontext.bpm_deactivate_user_action(' + user_id + ');" class="tiny button bpm-small bpm_lng_yes" style="text-decoration: none;height:3em;">Yes</a>&nbsp;&nbsp;<a onClick="bpmcontext.bpm_confirm_no_user_change()" class="tiny button bpm-small bpm_lng_no" style="text-decoration: none;height:3em;">No</a></div>');
            }
            this_html = this_html.concat('</div><br><br>');

            jQuery('#bpm_user_change').show().html(this_html);
        }

        function bpm_deactivate_user_action(user_id){

            var querystring = '&action=deactivate_user&userid='+user_id;
            jQuery.getJSON('https://' + bpm_settings['bpm_server']  + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + querystring, function (result) {
                bpm_user_list = '';
                bpmcontext.bpm_create_user_list();
                jQuery('#bpm_user_change').hide();
            });
        }

        function bpm_activate_user(user_id){

            var querystring = '&action=activate_user&userid='+user_id;
            jQuery.getJSON('https://' + bpm_settings['bpm_server']  + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + querystring, function (result) {
                bpm_user_list = '';
                bpmcontext.bpm_create_user_list();
                jQuery('#bpm_user_change').hide();
            });
        }

        function bpm_confirm_no_user_change(){
            jQuery('#bpm_user_change').hide();
        }

        function bpm_univite_user(){

        }

        function bpm_delete_user(user_page){
            var this_html = '';
            this_html = this_html.concat('<div class="bpm-row">');
            this_html = this_html.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns bpm_grid_section_links text-left">'+bpm_trans_array['bpm_lng_delete_user_message']+'</div>');
            this_html = this_html.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns bpm_grid_section_links text-right"><a onClick="bpmcontext.bpm_delete_user_action('+user_page+');" class="tiny button bpm-small bpm_lng_yes" style="text-decoration: none;">Yes</a>&nbsp;&nbsp;<a onClick="bpmcontext.bpm_confirm_no_user_change()" class="tiny button bpm-small bpm_lng_no" style="text-decoration: none;">No</a></div>');
            this_html = this_html.concat('</div><br><br>');

            jQuery('#bpm_user_change').show().html(this_html);
        }

        function bpm_delete_user_action(user_page){
            var querystring = 'pageid='+user_page +'&domain='+bpm_current_domain;

            jQuery.getJSON('https://' + bpm_settings['bpm_server']  + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring + '&action=cancel_delete', function (result) {
                bpm_user_list = '';
                bpmcontext.bpm_create_user_list();
                jQuery('#bpm_user_change').hide();
                bpmcontext.bpm_update_dashboard();
            });
        }

        function bpm_create_user_list(){

            jQuery('#bpm_admin_users_topbar').show();

            var this_html = 'Loading...';

            jQuery('#bpm-admin-help-info').html(jQuery('#bpm_functional_tutorial_1004').html());

            var new_page_string = '&action=get_users';
            var links_array = [];
//console.log(bpm_get_string + new_page_string);
            jQuery.getJSON('https://' + bpm_settings['bpm_server']  + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + new_page_string, function (result) {
//console.log(result);
                this_html = '<div id="bpm_user_change" class="bpm-hide"></div>';
                this_html = this_html.concat('<div id="bpm_account_manager_user_content" style="max-height:40em;overflow-x: hidden;width:100%;margin-bottom:3em;">');

                bpm_settings['deactivate_massage'] = [];
                bpm_settings['USERS'] = result.USERS;
                jQuery.each(result.USERS, function (index, value) {

                    if(value['deactivate_message']) bpm_settings['deactivate_massage'][value['id']] = value['deactivate_message'];

                    if(value['user_type']=='Administrator' && value['status'] == 'Active'){
                        var user_options = value['status'];
                    }else {
                        var user_options = '<a data-dropdown="bpm_user_options_' + value['id'] + '" aria-controls="bpm_user_options_' + value['id'] + '" aria-expanded="false" class="dropdown" style="width:10em;color:#008cba">' + value['status'] + '</a>';
                        user_options = user_options.concat('<ul id="bpm_user_options_' + value['id'] + '" data-dropdown-content class="f-dropdown" aria-hidden="true">');
                        if(value['is_ext']==1) {
                            if (value['status'] == 'Disabled') {
                                user_options = user_options.concat('<li><a style="white-space: nowrap" onClick="bpmcontext.bpm_activate_user(' + value['id'] + ')">' + bpm_trans_array['bpm_lng_activate_user'] + '</a></li>');
                            } else {
                                if (value['status'] == 'Pending') {
                                    user_options = user_options.concat('<li><a style="white-space: nowrap" onClick="bpmcontext.bpm_activate_user(' + value['id'] + ')">' + bpm_trans_array['bpm_lng_activate_user'] + '</a></li>');
                                }
                                user_options = user_options.concat('<li><a style="white-space: nowrap" onClick="bpmcontext.bpm_deactivate_user(' + value['id'] + ')">' + bpm_trans_array['bpm_lng_deactivate_user'] + '</a></li>');
                            }

                        }
                        if(value['is_ext']==2){ //is external user
                            if (value['status'] == 'Pending') {
                                user_options = user_options.concat('<li><a style="white-space: nowrap" onClick="bpmcontext.bpm_deactivate_user(' + value['id'] + ')">' + bpm_trans_array['bpm_lng_deactivate_user'] + '</a></li>');
                            }
                            if (value['status'] == 'Disabled') {
                                user_options = user_options.concat('<li><a style="white-space: nowrap" onClick="bpmcontext.bpm_activate_user(' + value['id'] + ')">' + bpm_trans_array['bpm_lng_activate_user'] + '</a></li>');
                            }
                            if (value['status'] == 'Active') {
                                user_options = user_options.concat('<li><a style="white-space: nowrap" onClick="bpmcontext.bpm_deactivate_user(' + value['id'] + ')">' + bpm_trans_array['bpm_lng_deactivate_user'] + '</a></li>');
                            }
                            user_options = user_options.concat('<li><a style="white-space: nowrap" onClick="bpmcontext.bpm_delete_user(' + value['user_page'] + ')">' + bpm_trans_array['bpm_lng_delete_user'] + '</a></li>');
                        }
                        user_options = user_options.concat('</ul>');
                    }

                    if(value['is_primary_admin']) value['user_type'] = 'Primary Administrator';

                    var col_1 = '<a class="url_links bpm_links" href="?domain='+bpm_current_domain+'&pageid='+value['user_page']+'&action=bpmcontext" >&nbsp;'+value['real_name']+'</a>';
                    var edit_link = '<a class="bpm_links" onclick="bpmcontext.bpm_create_user_page_reveal('+value['id']+');">&nbsp;Edit</a>';
                    this_html = this_html.concat('<div class="bpm-row full-width">');
                    this_html = this_html.concat('<div class="large-6 bpm-columns bpm_grid_section_links text-left">' + col_1 + '&nbsp;</div>');
                    this_html = this_html.concat('<div class="large-6 bpm-columns bpm_grid_section_links text-right" ><span style="padding-right: 1rem">' + value['user_type'] + '</span></div>');
                    this_html = this_html.concat('</div>');
                    this_html = this_html.concat('<div class="bpm-row full-width">');
                    this_html = this_html.concat('<div class="large-6 bpm-columns bpm_grid_section_links text-left">&nbsp;' + value['email'] + '&nbsp;</div>');
                    this_html = this_html.concat('<div class="large-6 bpm-columns bpm_grid_section_links text-right"><span style="padding-right: 1rem">' + user_options + '&nbsp;|&nbsp;'+edit_link+'</span></div>');
                    this_html = this_html.concat('</div>');
                    this_html = this_html.concat('<hr class="bpm_hr_gray">');
                });

                this_html = this_html.concat('<br><br><br></div>');

                bpm_user_list = this_html;
                jQuery('#bpm_account_manager_content').html(this_html);

                jQuery(document).foundation('dropdown', 'reflow');

                bpmcontext.bpm_set_url_links();
            });

        }

        function bpm_add_to_cart(selected_object, add_type){

            var cart_action;

            if(jQuery(selected_object).text()==bpm_trans_array['bpm_lng_remove_from_cart']){
                cart_action = 'remove_cart';
                bpm_settings['acctmgrpage'] = 'bpm_acct_manager_cart'
            }else{
                cart_action = 'add_cart';
                bpm_settings['acctmgrpage'] = 'bpm_extensinos_page';
            }

            var querystring = bpm_get_string + "&action="+cart_action+"&item_id=" + add_type;
            jQuery.getJSON('https://'+bpm_settings['bpm_server']+'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function(result){
                bpm_settings['acctmgr'] = result['ACCTMGR'];
                bpmcontext.bpm_create_products();

                var cart_qty = bpm_get_cart_qty();
                if(cart_qty){
                    jQuery('#bpm_acct_manager_cart').text('Cart (' + cart_qty + ')');
                }else{
                    jQuery('#bpm_acct_manager_cart').text('Cart' )
                }

                if(result.TRANSTATUS == 1) {
                    if (jQuery(selected_object).text() == bpm_trans_array['bpm_lng_remove_from_cart']) {
                        jQuery(selected_object).text(bpm_trans_array['bpm_lng_add_to_cart']);

                    } else {
                        jQuery(selected_object).text(bpm_trans_array['bpm_lng_remove_from_cart']);
                        bpmcontext.bpm_display_extension_list(1);
                    }

                    if(bpm_settings['acctmgrpage'] == 'bpm_acct_manager_cart') bpm_create_cart();
                    bpmcontext.bpm_set_admin_buttons();
                }
            });


        }

        function bpm_load_admin_page(page_id){
            switch(page_id){
                case 1:
                case 4:
                    jQuery('#bpm_acct_manager_features').click();
                    break;
                case 2:
                    jQuery('#bpm_acct_manager_statement').click();
                    break;
                case 3:
                    jQuery('#bpm_acct_manager_cart').click();
                    break;

            }

        }

        function bpm_get_cart_qty(){

            var cart_qty = 0;

            jQuery.each(bpm_settings['acctmgr'], function (index, value) {
                if(value['cart_qty']) cart_qty = cart_qty + Number(value['cart_qty']);
            });

            return cart_qty;
        }

        function bpm_create_statement_list(){

            var html_line = '';

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns text-left bpm_bold">' + bpm_trans_array['bpm_lng_feature_name'] + '</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left bpm_bold">' + bpm_trans_array['bpm_lng_next_bill_date'] + '</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-right bpm_bold">' + bpm_trans_array['bpm_lng_next_bill_amount'] + '</div>');
            html_line = html_line.concat('</div>');

            jQuery.each(bpm_settings['acctmgr'], function (index, value) {
                if((value['is_installed']=='yes' || value['prod_type']=='Storage') && value['prod_qty'] > 0){
                    var next_bill_amount = 0;
                    if( value['is_wf_sub'] == 1) {
                        var ws_billable = 0;
                        if(bpm_settings['WORKSPACES_FREE'] -  bpm_settings['WORKSPACES_USED'] < 0) ws_billable = bpm_settings['WORKSPACES_USED'] - bpm_settings['WORKSPACES_FREE'];
                        next_bill_amount = value['prod_price'] * ws_billable;
                    }else {
                        next_bill_amount = value['prod_price'] * value['prod_qty'];
                    }
                    var prod_desc = value['prod_desc'];
                    if(bpm_trans_array['bpm_lng_'+value['prod_desc'].replace(/ /g,'_')]) prod_desc = bpm_trans_array['bpm_lng_'+value['prod_desc'].replace(/ /g,'_')];
                    prod_desc = '<a class="bpm_links" onClick="bpmcontext.bpm_display_extension('+value['product_id']+', 2)">'+prod_desc+'</a>';
                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns text-left ">' + prod_desc + '</div>');
                    html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left ">' + value['next_bill_date'] + '</div>');
                    html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-right ">' + bpmcontext.bpm_format_number(next_bill_amount) + '.00</div>');
                    html_line = html_line.concat('</div>');
                }
            });

            var tab_line = '<ul class="tabs" data-tab>';
            tab_line = tab_line.concat('<li class="tab-title active"><a href="#billing_1" class="bpm_nodecoration">Statement</a></li>');
            tab_line = tab_line.concat('<li class="tab-title"><a href="#billing_2" class="bpm_nodecoration">Payment Method</a></li>');
            tab_line = tab_line.concat('<li class="tab-title"><a href="#billing_3" class="bpm_nodecoration">Invoices</a></li>');
            tab_line = tab_line.concat('</ul>');
            tab_line = tab_line.concat('<div class="tabs-content">');
            tab_line = tab_line.concat('<div class="content active" id="billing_1">');
            tab_line = tab_line.concat(html_line);
            tab_line = tab_line.concat('</div>');
            tab_line = tab_line.concat('<div class="content" id="billing_2">');
            tab_line = tab_line.concat(bpmcontext.bpm_create_payment());
            tab_line = tab_line.concat('</div>');
            tab_line = tab_line.concat('<div class="content" id="billing_3">');
            tab_line = tab_line.concat(bpmcontext.bpm_create_inv_list());
            tab_line = tab_line.concat('</div>');
            tab_line = tab_line.concat('</div>');

            jQuery('#bpm_account_manager_content').html(tab_line);

            jQuery(document).foundation('tab', 'reflow');

            braintree.setup(bpm_payment, 'dropin', {
                container: 'update_dropin',
                onReady: function(){
                    jQuery('#bpm_alert_load_payment_form').hide();
                },
                onPaymentMethodReceived: function (obj) {
                    //do nothing

                }
            });
        }

        function bpm_create_cart_list(){

            var html_line = '';
            var total_amount = 0;
            var has_ws_sub = 0;
            var ws_sub_amount = 0;

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns text-left bpm_bold">' + bpm_trans_array['bpm_lng_feature_name'] + '</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-right bpm_bold">' + bpm_trans_array['bpm_lng_price'] + '</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-right bpm_bold">&nbsp;</div>');
            html_line = html_line.concat('</div>');

            jQuery.each(bpm_settings['acctmgr'], function (index, value) {
                if(value['cart_qty']){

                    var next_bill_amount = value['prod_price'] * value['cart_qty'];

                    if( value['is_wf_sub'] == 1) {
                        has_ws_sub = 1;
                        ws_sub_amount = value['prod_price'];
                        next_bill_amount = 0;
                    }else {
                        total_amount = total_amount + next_bill_amount;
                    }



                    var prod_desc = value['prod_desc'];
                    if(bpm_trans_array['bpm_lng_'+value['prod_desc'].replace(/ /g,'_')]) prod_desc = bpm_trans_array['bpm_lng_'+value['prod_desc'].replace(/ /g,'_')];
                    prod_desc = '<a class="bpm_links" onClick="bpmcontext.bpm_display_extension('+value['product_id']+',3)">'+prod_desc+'</a>';
                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns text-left ">' + prod_desc + '</div>');
                    html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-right ">$' + bpmcontext.bpm_format_number(next_bill_amount) + '.00</div>');
                    html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left "><a class="button bpm-small-button bpm_small_bar_button bpm_nodecoration" onClick="bpmcontext.bpm_add_to_cart(this,' + value['product_id'] + ')">' + bpm_trans_array['bpm_lng_remove_from_cart'] + '</a></div>');
                    html_line = html_line.concat('</div>');
                }
            });

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns text-right ">' + bpm_trans_array['bpm_lng_total_to_pay'] + ':</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-right ">$' + bpmcontext.bpm_format_number(total_amount) + '.00</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left "> US Dollars</div>');
            html_line = html_line.concat('</div>');

            if(has_ws_sub) {
                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-left ">Your card will NOT be charged at this time for digital workspaces.  '+bpm_trans_array['bpm_lng_your_card_will_be_charged'] + ' $' + bpmcontext.bpm_format_number(ws_sub_amount) + '.00 US Dollars&nbsp;per month for each published custom workspace in excess of your free workspaces.&nbsp;&nbsp;</div>');
                html_line = html_line.concat('</div>');
            }

            html_line = html_line.concat('<br>');

            return html_line;
        }

        function bpm_format_number (num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
        }



        function bpm_create_inv_list(){

            var html_line = '';

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-4 bpm-large-4 bpm-columns text-left bpm_bold">' + bpm_trans_array['bpm_lng_invoice_number'] + '</div>');
            html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left bpm_bold bpm_no_wrap">' + bpm_trans_array['bpm_lng_invoice_date'] + '</div>');
            html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-right bpm_bold">' + bpm_trans_array['bpm_lng_invoice_amount'] + '</div>');
            html_line = html_line.concat('</div>');

            jQuery.each(bpm_settings['invoices'], function (index, value) {

                var invoice_link = '<a target="_blank" href="https://'+bpm_settings['bpm_server']+'/openfile_s3.php?d='+bpm_current_domain+'&invoice=' + value['invnumber']+'"><span class="fa fa-file-pdf-o"></span></a>';

                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-small-4 bpm-large-4 bpm-columns text-left bpm_no_wrap">'+invoice_link+'&nbsp; ' + value['invnumber'] + '</div>');
                html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-left">' + value['invdate'] + '</div>');
                html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-right">' + value['invamount'] + '</div>');
                html_line = html_line.concat('</div>');
            });

            return html_line;

        }

        function bpm_create_products(){

            var html_line = '';

            jQuery.each(bpm_settings['acctmgr'], function (index, value) {

                var ext_type = 1;
                if(value['prod_type']=='Storage') ext_type = 4;
                html_line = html_line.concat('<div id="bpm_extension_'+value['product_id']+'" class="bpm-hide">');
                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-left"><a class="bpm_links" onClick="bpmcontext.bpm_display_extension('+value['product_id']+','+ext_type+')">'+value['product_name']+'</a></div>');
                html_line = html_line.concat('</div>');
                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-large-4 bpm-small-4 bpm-columns text-left"><span class="fa '+value['product_image']+' bpm_product_icon"></span></div>');
                html_line = html_line.concat('<div class="bpm-large-8 bpm-small-8 bpm-columns text-left">'+value['short_desc']+'</div>');
                html_line = html_line.concat('</div>');
                html_line = html_line.concat('</div>');

                html_line = html_line.concat('<div id="bpm_extension_details_'+value['product_id']+'" class="bpm-hide">');
                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
                html_line = html_line.concat('<div class="bpm-large-11 bpm-small-11 bpm-columns text-left"><br>'+ value['long_desc']+'</div>');
                html_line = html_line.concat('</div>');
                html_line = html_line.concat('</div>');

            });

            jQuery('#bpm_extension_info').html(html_line);

        }

        function bpm_reinstall(this_id){

            var querystring = bpm_get_string + "&action=reinstall_templates&product_id=" + this_id;

            jQuery.getJSON('https://'+bpm_settings['bpm_server']+'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function(result) {

                bpmcontext.bpm_create_context_map(result);
                bpm_settings['acctmgr'] = result['ACCTMGR'];
                bpmcontext.bpm_create_products();
                bpmcontext.bpm_update_dashboard();
                bpmcontext.bpm_load_admin_page(1);
                bpm_settings['reload_page'] = 1;

            });
        }

        function bpm_uninstall(this_id){

            var querystring = bpm_get_string + "&action=uninstall_templates&product_id=" + this_id;

            jQuery.getJSON('https://'+bpm_settings['bpm_server']+'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function(result) {

                bpmcontext.bpm_create_context_map(result);
                bpm_settings['acctmgr'] = result['ACCTMGR'];
                bpmcontext.bpm_create_products();
                bpmcontext.bpm_update_dashboard();
                bpmcontext.bpm_load_admin_page(1);
                bpm_settings['reload_page'] = 1;
            });
        }

        function bpm_display_extension_list(this_action) {

            var html_line = '';

            html_line = html_line.concat(bpmcontext.bpm_create_extension_list('Templates'));
            html_line = html_line.concat(bpmcontext.bpm_create_extension_list('Storage'));

            if(this_action==1) {
                jQuery('#bpm_account_manager_content').html(html_line).show();
            }else{
                return html_line;
            }

        }

        function bpm_filter_extensions(selected_object){

            switch(selected_object.id) {

                case 'bpm_admin_filter_free':
                    jQuery('.bpm-extension-filter-all').hide();
                    jQuery('.bpm-extension-filter-Templates_free').show();
                    break;
                case 'bpm_admin_filter_storage':
                    jQuery('.bpm-extension-filter-all').hide();
                    jQuery('.bpm-extension-filter-Storage').show();
                    break;
                case 'bpm_admin_filter_workspaces':
                    jQuery('.bpm-extension-filter-all').hide();
                    jQuery('.bpm-extension-filter-Templates').show();
                    break;
                case 'bpm_admin_filter_custom_workspaces':


                    break;
                case 'bpm_admin_filter_all':
                    jQuery('.bpm-extension-filter-all').show();
                    break;
            }

        }

        function bpm_create_extension_list(this_type) {

            var html_line = '';
            var this_type_code = 4;
            if(!this_type){
                this_type = 'Templates';
            }

            if(this_type == 'Templates') this_type_code = 1;

            jQuery.each(bpm_settings['acctmgr'], function (index, value) {

                var extension_content = '';

                if(jQuery('#bpm_extension_'+value['product_id'])) {

                    var these_buttons = '';
                    var ext_type = 1;

                    if (value['prod_type'] == 'Storage') ext_type = 4;
                    if (this_type_code == ext_type) {
                        if (value['prod_type'] == this_type) {

                            var addl_terms = '';
                            var this_bill_period = value['bill_period'];
                            if( value['is_wf_sub'] > 0) {
                                addl_terms = ' for each published workspace in excess of your free workspaces';
                                this_bill_period = value['bill_period'].concat(addl_terms);
                            }


                            if (jQuery('#bpm_extension_' + value['product_id']) == this_type) {
                                extension_content = jQuery('#bpm_extension_' + value['product_id']).html();
                            } else {
                                extension_content = extension_content.concat('<div class="bpm-row">');
                                extension_content = extension_content.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-left"><span class="fa ' + value['product_image'] + ' bpm_product_icon"></span>&nbsp;<a class="bpm_links" onClick="bpmcontext.bpm_display_extension(' + value['product_id'] + ',' + ext_type + ')">' + value['product_name'] + '</a></div>');
                                extension_content = extension_content.concat('</div>');
                                extension_content = extension_content.concat('<div class="bpm-row">');
                                extension_content = extension_content.concat('<div class="bpm-large-4 bpm-small-4 bpm-columns text-left">&nbsp;</div>');
                                extension_content = extension_content.concat('<div class="bpm-large-8 bpm-small-8 bpm-columns text-left">' + value['short_desc'] + '</div>');
                                extension_content = extension_content.concat('</div>');

                            }

                            html_line = html_line.concat('<div class="bpm-row ">');
                            html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-left" >' + extension_content + '</div>');
                            html_line = html_line.concat('</div><br>');

                            if (value['is_installed'] == 'yes' ) {
                                if( value['is_wf_sub'] == 0) {
                                    html_line = html_line.concat('<div class="bpm-row">');
                                    html_line = html_line.concat('<div class="bpm-large-11 bpm-small-11 bpm-columns text-right">&nbsp;</div>');
                                    html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-right">&nbsp;</div>');
                                    html_line = html_line.concat('</div>');
                                    these_buttons = '<a class="button bpm-small-button bpm_small_bar_button bpm_nodecoration" onClick="bpmcontext.bpm_uninstall(' + value['product_id'] + ')">' + bpm_trans_array['bpm_lng_uninstall'] + '</a>';
                                }
                            } else {
                                if (value['reinstall'] == 1 && this_type == 'Templates' ) {
                                    if( value['is_wf_sub'] == 0) {
                                        html_line = html_line.concat('<div class="bpm-row">');
                                        if(value['prod_price'] > 0){
                                            html_line = html_line.concat('<div class="bpm-large-7 bpm-small-7 bpm-columns text-left">' + bpm_trans_array['bpm_lng_reinstall_until'] + ' ' + value['next_bill_date'] + '</div>');
                                        }else {
                                            html_line = html_line.concat('<div class="bpm-large-7 bpm-small-7 bpm-columns text-left">Free Workspace Suite</div>');
                                        }

                                        html_line = html_line.concat('<div class="bpm-large-4 bpm-small-4 bpm-columns text-right">&nbsp;</div>');
                                        html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-right">&nbsp;</div>');
                                        html_line = html_line.concat('</div>');
                                        these_buttons = '<a class="button bpm-small-button bpm_small_bar_button bpm_nodecoration" onClick="bpmcontext.bpm_reinstall(' + value['product_id'] + ')">' + bpm_trans_array['bpm_lng_reinstall'] + '</a>';
                                    }
                                } else if (value['prod_price'] > 0 && value['cart_qty']) {
                                    html_line = html_line.concat('<div class="bpm-row">');
                                    html_line = html_line.concat('<div class="bpm-large-4 bpm-small-4 bpm-columns text-left">$' + value['prod_price'] + ' US Dollars Billed ' + this_bill_period + '</div>');
                                    html_line = html_line.concat('<div class="bpm-large-5 bpm-small-5 bpm-columns text-right"></div>');
                                    html_line = html_line.concat('<div class="bpm-large-2 bpm-small-2 bpm-columns text-right"></div>');
                                    html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-right">&nbsp;</div>');
                                    html_line = html_line.concat('</div>');
                                    these_buttons = '<a id="bpm_checkout_' + value['product_id'] + '" class="button bpm-small-button bpm_small_bar_button bpm_nodecoration" onClick="bpmcontext.bpm_load_admin_page(3)">' + bpm_trans_array['bpm_lng_checkout'] + '</a>';
                                } else if (value['prod_price'] > 0) {
                                    html_line = html_line.concat('<div class="bpm-row">');
                                    html_line = html_line.concat('<div class="bpm-large-4 bpm-small-4 bpm-columns text-left">$' + value['prod_price'] + ' US Dollars Billed ' + this_bill_period + '</div>');
                                    html_line = html_line.concat('<div class="bpm-large-5 bpm-small-5 bpm-columns text-right">&nbsp;</div>');
                                    html_line = html_line.concat('<div class="bpm-large-2 bpm-small-2 bpm-columns text-right">&nbsp;</div>');
                                    html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-right">&nbsp;</div>');
                                    html_line = html_line.concat('</div>');
                                    these_buttons = '<a class="button bpm-small-button bpm_small_bar_button bpm_nodecoration" onClick="bpmcontext.bpm_add_to_cart(this,' + value['product_id'] + ')">' + bpm_trans_array['bpm_lng_add_to_cart'] + '</a>&nbsp;<a id="bpm_checkout_' + value['product_id'] + '"class="button bpm-small-button bpm_small_bar_button bpm_nodecoration bpm-hide"  onClick="bpmcontext.bpm_load_admin_page(3)">' + bpm_trans_array['bpm_lng_checkout'] + '</a>';
                                } else {
                                    html_line = html_line.concat('<div class="bpm-row">');
                                    html_line = html_line.concat('<div class="bpm-large-4 bpm-small-4 bpm-columns text-left">Free Workspace Suite</div>');
                                    html_line = html_line.concat('<div class="bpm-large-7 bpm-small-7 bpm-columns text-right">&nbsp;</div>');
                                    html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-right">&nbsp;</div>');
                                    html_line = html_line.concat('</div>');
                                    these_buttons = '<a class="button bpm-small-button bpm_small_bar_button bpm_nodecoration" onClick="bpmcontext.bpm_install(' + value['product_id'] + ')">' + bpm_trans_array['bpm_lng_install'] + '</a>';
                                }
                            }

                            html_line = html_line.concat('<div class="bpm-row">');
                            html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-left" >'+these_buttons+'</div>');
                            html_line = html_line.concat('</div>');

                            html_line = html_line.concat('<hr class="bpm_hr_gray">');
                        }
                    }
                }
            });

            return html_line;

        }

        function bpm_install(this_id){
            var querystring = bpm_get_string + "&action=install_templates&product_id=" + this_id;

            jQuery.getJSON('https://'+bpm_settings['bpm_server']+'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function(result) {

                bpmcontext.bpm_create_context_map(result);
                bpm_settings['acctmgr'] = result['ACCTMGR'];
                bpm_settings['reload_page'] = 1;
                bpmcontext.bpm_create_products();
                bpmcontext.bpm_update_dashboard();
                bpmcontext.bpm_load_admin_page(1);

            });
        }

        function bpm_display_extension(extension_id, return_to){

            var html_line = '';
            var head_line = '';
            var button_line = '';
            var html_final = '';

        //    head_line = head_line.concat('<div class="bpm-row ">');
            switch(return_to){
                case 1:
                    head_line = head_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns text-right" ><a class="button bpm-small-button bpm_small_bar_button bpm_nodecoration" onClick="bpmcontext.bpm_load_admin_page(1)">'+bpm_trans_array['bpm_lng_back_to_extensions']+'</a></div>');
                    break;
                case 2:
                    head_line = head_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns text-right" ><a class="button bpm-small-button bpm_small_bar_button bpm_nodecoration" onClick="bpmcontext.bpm_load_admin_page(2)">'+bpm_trans_array['bpm_lng_back_to_statement']+'</a></div>');
        //            button_line = '<div class="bpm-small-6 bpm-large-6 bpm-columns text-left" >&nbsp;</div>';
                    break;
                case 3:
                    head_line = head_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns text-right" ><a class="button bpm-small-button bpm_small_bar_button bpm_nodecoration" onClick="bpmcontext.bpm_load_admin_page(3)">'+bpm_trans_array['bpm_lng_back_to_cart']+'</a></div>');
        //            button_line = '<div class="bpm-small-6 bpm-large-6 bpm-columns text-left" >&nbsp;</div>';
                    break;
                case 4:
                    head_line = head_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns text-right" ><a class="button bpm-small-button bpm_small_bar_button bpm_nodecoration" onClick="bpmcontext.bpm_load_admin_page(4)">'+bpm_trans_array['bpm_lng_back_to_extensions']+'</a></div>');
                    break;
            }


            jQuery.each(bpm_settings['acctmgr'], function (index, value) {

                if(value['product_id'] == extension_id){

                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-large-6 bpm-small-6 bpm-columns text-left">'+value['product_name']+'<br><span class="fa ' + value['product_image'] + ' bpm_product_icon"></span></div>');
                    html_line = html_line.concat(head_line);
                    html_line = html_line.concat('</div>');

                    if(jQuery('#bpm_extension_details_'+extension_id).length)  html_line = html_line.concat(jQuery('#bpm_extension_details_'+extension_id).html());

                    html_final = html_line;
                }
            });

        //    head_line = head_line.concat(button_line);
        //    head_line = head_line.concat('</div>');
        //    head_line = head_line.concat(html_final);

            jQuery('#bpm_account_manager_content').html(html_final);
        }

        function bpm_create_cart(display_type){

            jQuery('#bpm_right_admin-help').hide();

            var html_line = '';

            var total_amount = 0;
            var has_ws_sub = 0;
            var ws_sub_amount = 0;
            jQuery.each(bpm_settings['acctmgr'], function (index, value) {
                if(value['cart_qty']){
                    if( value['is_wf_sub'] == 1) {
                        has_ws_sub = 1;
                        ws_sub_amount = value['prod_price'];
                    }else {
                        var next_bill_amount = value['prod_price'] * value['cart_qty'];
                        total_amount = total_amount + next_bill_amount;
                    }
                }
            });


            if(total_amount>0 || has_ws_sub == 1) {
                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-left"><strong>' + bpm_trans_array['bpm_lng_review_purchase'] + '</strong><br></div>');
                html_line = html_line.concat('</div>');

                html_line = html_line.concat('<hr class="bpm_hr_gray">');

                html_line = html_line.concat(bpm_create_cart_list());

                if (display_type == 1) {

                    var buy_message = bpm_trans_array['bpm_lng_your_card_will_be_charged'] + ' $' + bpmcontext.bpm_format_number(total_amount) + '.00 US Dollars&nbsp;&nbsp;&nbsp;&nbsp;';
                    if(has_ws_sub ==1){
                        if(total_amount > 0) {
                            buy_message = buy_message.concat('<br>'+bpm_trans_array['bpm_lng_your_card_will_be_charged'] + ' $' + bpmcontext.bpm_format_number(ws_sub_amount) + '.00 US Dollars&nbsp;per month when you publish custom workspaces in excess of your free workspaces.&nbsp;&nbsp;&nbsp;');
                        }else{
                            buy_message = 'Your card will NOT be charged at this time. '+bpm_trans_array['bpm_lng_your_card_will_be_charged'] + ' $' + bpmcontext.bpm_format_number(ws_sub_amount) + '.00 US Dollars&nbsp;per month for each published custom workspace in excess of your free workspaces.&nbsp;&nbsp;<br>';
                        }
                    }

                    var braintree_message = '<div id="bpm_braintree_message"><a href="https://www.braintreegateway.com/merchants/y63q3b26k33cztnf/verified" target="_blank">';
                    braintree_message = braintree_message.concat('<img src="https://s3.amazonaws.com/braintree-badges/braintree-badge-dark.png" width="164px" height ="44px" border="0"/></a>');
                    braintree_message = braintree_message.concat('</a></div>');


                    var we_accept = '<span class="fa fa-cc-visa bpm_file_icon"></span>&nbsp;<span class="fa fa-cc-mastercard bpm_file_icon"></span>&nbsp;<span class="fa fa-cc-paypal bpm_file_icon"></span>&nbsp;<span class="fa fa-cc-amex bpm_file_icon"></span>&nbsp;<span class="fa fa-cc-discover bpm_file_icon"></span>&nbsp;<span class="fa fa-cc-jcb bpm_file_icon"></span>';

                    html_line = html_line.concat('<br>');
                    html_line = html_line.concat(bpm_create_address_html());

                    //credit card failed notice
                    html_line = html_line.concat('<div class="bpm-row bpm-hide" id="bpm_card_failed">');
                    html_line = html_line.concat('<div class="bpm-large-11 bpm-small-11 bpm-columns text-left"><div data-alert class="alert-box alert radius">' + bpm_trans_array['bpm_lng_card_declined'] + '</div></div>');
                    html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
                    html_line = html_line.concat('</div>');

                    html_line = html_line.concat('<div class="bpm-row bpm-hide" id="bpm_card_not_valid">');
                    html_line = html_line.concat('<div class="bpm-large-11 bpm-small-11 bpm-columns text-left"><div data-alert class="alert-box alert radius">' + bpm_trans_array['bpm_lng_card_not_valid'] + '</div></div>');
                    html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
                    html_line = html_line.concat('</div>');

                    html_line = html_line.concat('<br>' + we_accept + '<br><form id="checkout" method="post" action="">');
                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-large-11 bpm-small-11 bpm-columns text-left">');
                    html_line = html_line.concat('<div id="bpm_alert_load_cart_form" data-alert class="alert-box success radius bpm-hide">' + bpm_trans_array['bpm_lng_loading_payment_form'] + '</div><div id="dropin"></div>');
                    html_line = html_line.concat('</div>');
                    html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
                    html_line = html_line.concat('</div>');

                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-large-3 bpm-small-3 bpm-columns text-left">' + braintree_message + '&nbsp;</div>');
                    html_line = html_line.concat('<div class="bpm-large-8 bpm-small-8 bpm-columns text-right">');
                    html_line = html_line.concat('<div id="bpm_alert_processing_form" data-alert class="alert-box success radius bpm-hide">' + bpm_trans_array['bpm_lng_processing_payment_form'] + '</div>' + buy_message + "<button type='submit' style='margin-top:.5em;' class='bpm-small-button' id='bpm_save'>Buy</button>");
                    html_line = html_line.concat('</div>');
                    html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
                    html_line = html_line.concat('</div>');
                    html_line = html_line.concat('</form>');

                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-large-11 bpm-small-11 bpm-columns text-left" style="font-size:.85em">');
                    html_line = html_line.concat(bpm_trans_array['bpm_lng_purchase_terms']);
                    html_line = html_line.concat('</div>');
                    html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
                    html_line = html_line.concat('</div>');
                } else {
                    html_line = html_line.concat('<br><br><div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-large-11 bpm-small-11 bpm-columns text-right">');
                    html_line = html_line.concat('<a class="button bpm-small-button bpm_small_bar_button bpm_nodecoration" onClick="bpmcontext.bpm_create_cart(1)">' + bpm_trans_array['bpm_lng_proceed_to_checkout'] + '</a>');
                    html_line = html_line.concat('</div>');
                    html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-right">&nbsp;</div>');
                    html_line = html_line.concat('</div>');
                }
            }else{
                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-left"><strong>' + bpm_trans_array['bpm_lng_cart_empty'] + '</strong><br></div>');
                html_line = html_line.concat('</div>');
            }

            jQuery('#bpm_account_manager_content').html(html_line);

            jQuery('#bpm_save').click(function() {
                jQuery('#bpm_card_failed').hide();
                jQuery('#bpm_braintree_message').hide();
                jQuery('#bpm_alert_processing_form').show();
                jQuery('#bpm_save').hide();
                jQuery('#bpm_card_not_valid').hide();
            });

            jQuery('#bpm_save').hide();

            if(display_type==1) {
                jQuery('#bpm_alert_load_cart_form').show();
                braintree.setup(bpm_payment, 'dropin', {
                    container: 'dropin',
                    onError: function (payload) {
                        jQuery('#bpm_card_not_valid').show();
                        jQuery('#bpm_braintree_message').show();
                        jQuery('#bpm_alert_processing_form').hide();
                        jQuery('#bpm_save').show();

                    },
                    onReady: function(){
                        jQuery('#bpm_alert_load_cart_form').hide();
                        jQuery('#bpm_save').show();
                        //jQuery('#bpm_acct_manager_payment_item').show();
                    },
                    onPaymentMethodReceived: function (obj) {
                        bpmcontext.bpm_save_address();
                        setTimeout(function() {
                        bpmcontext.bpm_cart_purchased(obj);
                        },500);
                    }
                });
            }
        }

        function bpm_purchase_confirm(){

            jQuery('#bpm_account_manager_content').html(jQuery('#bpm_thank_you_message').html());
            jQuery('.bpm_toolbar_admin_cart').hide();
            jQuery('#bpm_acct_manager_cart_item').hide();
        }

        function bpm_cart_purchased(bt_obj){

            var querystring = bpm_get_string + "&action=cart_purchased&braintree_token="+ bt_obj.nonce;

            jQuery.getJSON('https://'+bpm_settings['bpm_server'] +'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function(result){

                if(result){
                    if(result.TEMPLATE_INFO) {
                        bpm_settings['IS_CUSTOMER'] = result.TEMPLATE_INFO['IS_CUSTOMER'];
                        bpm_settings['WORKSPACES_AVL'] = result.TEMPLATE_INFO['WORKSPACES_AVL'];
                        bpm_settings['WORKSPACES_CUSTOMER'] = result.TEMPLATE_INFO['WORKSPACES_CUSTOMER'];
                        bpm_settings['WORKSPACES_FREE'] = result.TEMPLATE_INFO['WORKSPACES_FREE'];
                        bpm_settings['WORKSPACES_USED'] = result.TEMPLATE_INFO['WORKSPACES_USED'];
                    }
                }

                if(result.TRANSTATUS['code']){
                    if(result.TRANSTATUS['code']==1){
                        bpm_settings['refresh_page'] = 1;
                        jQuery('#bpm_card_failed').show();
                        jQuery('#bpm_braintree_message').show();
                        jQuery('#bpm_alert_processing_form').hide();
                        jQuery('#bpm_save').show();
                    }else{
                        bpm_settings['acctmgr'] = result['ACCTMGR'];
                        bpmcontext.bpm_create_products();
                        bpmcontext.bpm_create_context_map(result);
                        bpmcontext.bpm_purchase_confirm();
                        bpmcontext.bpm_update_dashboard();
                    }
                }
            });
        }

        function bpm_save_address(){

            var company = jQuery('#bpm_company_name').val();
            var address = jQuery('#bpm_company_address').val();
            var city = jQuery('#bpm_company_city').val();
            var state = jQuery('#bpm_company_state').val();
            var postal = jQuery('#bpm_company_postal').val();

            var querystring = bpm_get_string + "&action=update_billing_address&addr_action=update&company_name="+ company +'&street='+address+'&city='+city+'&state='+state+'&postal='+postal;
            jQuery('#bpm_alert_save_address').show();
            jQuery.getJSON('https://'+bpm_settings['bpm_server'] +'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function(result) {
                if(result.BILLINGADDRESS) bpm_settings['BILLINGADDRESS'] = result.BILLINGADDRESS;

                setTimeout(function() {
                    jQuery('#bpm_alert_save_address').hide();
                },1000);
            });

        }

        function bpm_create_address_html(){
            var html_line = '';
            var company = '';
            var address = '';
            var city = '';
            var state = '';
            var postal = '';

            if(bpm_settings['BILLINGADDRESS']['company']) company = bpm_settings['BILLINGADDRESS']['company'];
            if(bpm_settings['BILLINGADDRESS']['address']) address = bpm_settings['BILLINGADDRESS']['address'];
            if(bpm_settings['BILLINGADDRESS']['city']) city = bpm_settings['BILLINGADDRESS']['city'];
            if(bpm_settings['BILLINGADDRESS']['state']) state = bpm_settings['BILLINGADDRESS']['state'];
            if(bpm_settings['BILLINGADDRESS']['postal']) postal = bpm_settings['BILLINGADDRESS']['postal'];

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-large-4 bpm-small-4 bpm-columns text-left">'+bpm_trans_array['bpm_lng_company_name']+'</div>');
            html_line = html_line.concat('<div class="bpm-large-7 bpm-small-7 bpm-columns text-left"><input type="text" id="bpm_company_name" value="'+company+'" /></div>');
            html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-large-4 bpm-small-4 bpm-columns text-left">'+bpm_trans_array['bpm_lng_company_street']+'</div>');
            html_line = html_line.concat('<div class="bpm-large-7 bpm-small-7 bpm-columns text-left"><input type="text" id="bpm_company_address" value="'+address+'" /></div>');
            html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-large-4 bpm-small-4 bpm-columns text-left">&nbsp;</div>');
            html_line = html_line.concat('<div class="bpm-large-3 bpm-small-3 bpm-columns text-left"><input type="text" id="bpm_company_city" placeholder="'+bpm_trans_array['bpm_lng_company_city']+'" value="'+city+'" /></div>');
            html_line = html_line.concat('<div class="bpm-large-2 bpm-small-2 bpm-columns text-left"><input type="text" id="bpm_company_state" placeholder="'+bpm_trans_array['bpm_lng_company_state']+'" value="'+state+'" /></div>');
            html_line = html_line.concat('<div class="bpm-large-2 bpm-small-2 bpm-columns text-left"><input type="text" id="bpm_company_postal" placeholder="'+bpm_trans_array['bpm_lng_company_postal']+'" value="'+postal+'" /></div>');
            html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
            html_line = html_line.concat('</div>');

            return html_line;
        }

        function bpm_create_payment(){

            var html_line = bpm_create_address_html();

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-large-8 bpm-small-8 bpm-columns text-left"><div id="bpm_alert_save_address" data-alert class="alert-box success radius bpm-hide">'+bpm_trans_array['bpm_lng_saving']+'</div>&nbsp;</div>');
            html_line = html_line.concat('<div class="bpm-large-3 bpm-small-3 bpm-columns text-right"><a onClick="bpmcontext.bpm_save_address();" class="button bpm-small-button bpm_small_bar_button" style="text-decoration: none;">'+bpm_trans_array['bpm_lng_save_address']+'</a></div>');
            html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
            html_line = html_line.concat('</div>');

            var we_accept = '<span class="fa fa-cc-visa bpm_file_icon"></span>&nbsp;<span class="fa fa-cc-mastercard bpm_file_icon"></span>&nbsp;<span class="fa fa-cc-paypal bpm_file_icon"></span>&nbsp;<span class="fa fa-cc-amex bpm_file_icon"></span>&nbsp;<span class="fa fa-cc-discover bpm_file_icon"></span>&nbsp;<span class="fa fa-cc-jcb bpm_file_icon"></span>';

            html_line = html_line.concat(we_accept + '<br><form id="checkout" method="post" action="">');
            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-large-11 bpm-small-11 bpm-columns text-left">');
            html_line = html_line.concat('<div id="bpm_alert_load_payment_form" data-alert class="alert-box success radius">'+bpm_trans_array['bpm_lng_loading_payment_form']+'</div><div id="update_dropin"></div>');
            html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
            html_line = html_line.concat('</div>');
            html_line = html_line.concat('</div>');

            return html_line;


        }

        function bpm_toTitleCase(str)
        {
            return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        }

        function bpm_create_workspace_report(){

            var html_line = '';


            //show custom workspaces
            var free_count = 0;

            if(bpm_settings['WS_INFO']) {
                if(bpm_settings['WS_INFO']['non_library_all']) {
                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-large-11 bpm-small-11 bpm-columns text-left"><strong>Custom Workspaces</strong><br></div>');
                    html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
                    html_line = html_line.concat('</div>');

                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
                    html_line = html_line.concat('<div class="bpm-large-8 bpm-small-8 bpm-columns text-left">Parent and Workspace Title</div>');
                    html_line = html_line.concat('<div class="bpm-large-3 bpm-small-3 bpm-columns text-center">Published</div>');
                    html_line = html_line.concat('</div>');
                    jQuery(bpm_settings['WS_INFO']['non_library_all']).each(function (index, value) {
                        var template_link = '<a id="bpm_context_map_page_4" class="bpm_nodecoration side-nav-item bpm_links" onClick="bpmcontext.bpm_open_template_manager('+value['template_index']+', 0, '+value['parent_index']+');">'+value['parent_title'] + '->' + value['template_name']+'</a>';
                        html_line = html_line.concat('<div class="bpm-row">');
                        html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
                        html_line = html_line.concat('<div class="bpm-large-8 bpm-small-8 bpm-columns text-left">' + template_link + '</div>');
                        html_line = html_line.concat('<div class="bpm-large-3 bpm-small-3 bpm-columns text-center">'+bpm_toTitleCase(value['published'])+'</div>');
                        html_line = html_line.concat('</div>');
                    });
                    var paid_workspaces = '';
                    if(bpm_settings['WORKSPACES_USED'] > 2){
                        var paid_ws = bpm_settings['WORKSPACES_USED'] - 2;
                        paid_workspaces = ' plus ' + paid_ws + ' additional workspaces';
                    }
                    var free_used = Math.min(2, bpm_settings['WORKSPACES_USED']);
                    if(free_used == 1) free_used = 'one';
                    if(free_used == 2) free_used = 'both';

//                    html_line = html_line.concat('<br><div class="bpm-row">');
//                    html_line = html_line.concat('<div class="bpm-large-11 bpm-small-11 bpm-columns text-left">You are using '+free_used+' of two workspace templates available to customize for free' + paid_workspaces+'. To customize and add a new template, go to Admin>Workspace Designer from the menu bar. </div>');
//                    html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
//                    html_line = html_line.concat('</div>');
                    html_line = html_line.concat('<br><hr class="bpm_hr_gray bpm_small_sep"><br>');
                }

                //show library that are unpublished
                if(bpm_settings['WS_INFO']['library_unpub']) {
                    if (bpm_settings['WS_INFO']['library_unpub'].length) {
                        html_line = html_line.concat('<div class="bpm-row">');
                        html_line = html_line.concat('<div class="bpm-large-11 bpm-small-11 bpm-columns text-left"><strong>Hidden Workspaces</strong><br></div>');
                        html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
                        html_line = html_line.concat('</div>');

                        html_line = html_line.concat('<div class="bpm-row">');
                        html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
                        html_line = html_line.concat('<div class="bpm-large-8 bpm-small-8 bpm-columns text-left">Parent and Workspace Title</div>');
                        html_line = html_line.concat('<div class="bpm-large-3 bpm-small-3 bpm-columns text-center">Published</div>');
                        html_line = html_line.concat('</div>');

                        jQuery(bpm_settings['WS_INFO']['library_unpub']).each(function (index, value) {
                            var template_link = '<a id="bpm_context_map_page_4" class="bpm_nodecoration side-nav-item bpm_links" onClick="bpmcontext.bpm_open_template_manager(' + value['template_index'] + ', 0, ' + value['parent_index'] + ');">' + value['parent_title'] + '->' + value['template_name'] + '</a>';
                            html_line = html_line.concat('<div class="bpm-row">');
                            html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
                            html_line = html_line.concat('<div class="bpm-large-8 bpm-small-8 bpm-columns text-left">' + template_link + '</div>');
                            html_line = html_line.concat('<div class="bpm-large-3 bpm-small-3 bpm-columns text-center">No</div>');
                            html_line = html_line.concat('</div>');
                        });
                    }
                }
            }

            jQuery('#bpm_account_manager_content').html(html_line);
        }

        function bpm_create_login_url(){
            var html_line = '';

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-large-11 bpm-small-11 bpm-columns text-left">'+bpm_trans_array['bpm_lng_login_url_message']+'<br><br></div>');
            html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-large-11 bpm-small-11 bpm-columns text-left"><strong>'+bpm_trans_array['bpm_lng_login_url_current']+'</strong></div>');
            html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-large-11 bpm-small-11 bpm-columns text-left">'+bpm_settings['current_login_url']+'<br></div>');
            html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
            html_line = html_line.concat('</div><br>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-large-11 bpm-small-11 bpm-columns text-left"><strong>'+bpm_trans_array['bpm_lng_login_url_site']+'</strong></div>');
            html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-large-11 bpm-small-11 bpm-columns text-left">'+bpm_settings['site_login_url']+'<br><br></div>');
            html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-large-8 bpm-small-8 bpm-columns text-left">'+bpm_trans_array['bpm_lng_login_url_update']+'<br></div>');
            html_line = html_line.concat('<div class="bpm-large-3 bpm-small-3 bpm-columns text-right"><a onClick="bpmcontext.bpm_update_url();" class="button bpm-small-button bpm_small_bar_button" style="text-decoration: none;">'+bpm_trans_array['bpm_lng_update']+'</a></div>');
            html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
            html_line = html_line.concat('</div>');


            jQuery('#bpm_account_manager_content').html(html_line);
        }

        function bpm_update_url(){

            var querystring = bpm_get_string + "&action=update_login_url&url=" + bpm_settings['site_login_url'];

            jQuery.getJSON('https://'+bpm_settings['bpm_server'] +'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function(result) {
                bpmcontext.bpm_update_dashboard();
                jQuery('#bpm_toolbar_admin_url_item').hide();
                jQuery('#bpm_acct_manager_users').click();
                jQuery('#bpm_context_update_login_url_alert').hide();
            });

        }

        /*
        functions to build the right accordions

         */

        function bpm_create_right_side(result) {

            jQuery('#bpm_right_admin-help').hide();
            jQuery('#bpm_contact_us_widget').hide();
            jQuery('#bpm_show_cust_loc').hide();

            if(bpm_params.right_boxes){
                jQuery.each(bpm_params.right_boxes,function(index, value) {
                    switch(value['name']){
                        case 'infobox':
                            bpmcontext.bpm_create_infobox(result);
                            break;
                        case 'subscribers':
                            if(bpm_user_role == 'external' && bpm_settings['is_shared_ext'] == 1) break;
                            if (bpm_settings['TEMPLATELIBID'] != 25) bpmcontext.bpm_create_subscribers(result);
                            break;
                        case 'event_data':

                            if(bpm_user_role == 'external' || bpm_settings['VIEWINGAS'] > 0) break;
                            if (bpm_settings['TEMPLATELIBID'] != 25) bpmcontext.bpm_create_event_box(result);
                            break;
                        case 'workspace_map':
                            if (bpm_settings['TEMPLATELIBID'] == 25) bpmcontext.bpm_create_context_map(result);
                            break;
                        case 'contactform':
                            if (result['contact_us_page'] == 0) {
                                if (bpm_settings['TEMPLATELIBID'] == 25) bpmcontext.bpm_create_contact_us(result);
                            } else if (result['contact_us_page']) {
                                bpm_create_contact_us(result);
                            }
                            break;
                        case 'history':
                            if(bpm_settings['TEMPLATELIBID'] != 25) bpmcontext.bpm_create_routing_history(result);
                            break;
                        case 'sharing':
                            if(bpm_user_role == 'external' && bpm_settings['is_shared_ext'] == 1) break;
                            if(bpm_settings['TEMPLATELIBID'] != 25) bpmcontext.bpm_create_sharing(result);
                            break;
                        case 'changelog':
                            if(bpm_settings['TEMPLATELIBID'] != 25) bpmcontext.bpm_create_change_log(result);
                            break;
                        case 'cust_supp':
                            if(bpm_settings['TEMPLATELIBID'] != 25) bpmcontext.bpm_create_cust_supp(result);
                            break;
                        case 'tutorial':
                            bpmcontext.bpm_create_tutorial(result);
                            break;
                        case 'custom':

                            break;

                    }

                });
            }
            jQuery('#bpm_show_user_info').hide();

            if(result.USERDETAILS) bpmcontext.bpm_create_user_page(result);
        }

        function bpm_create_contact_us(result){
            bpm_settings['contact_us_page_detail'] = '';
            if(result['contact_us_page_detail']) bpm_settings['contact_us_page_detail'] = result['contact_us_page_detail'];

            jQuery('#bpm_contact_us_widget').show();

            var html_line = '';

            if(Object.keys(result['contact_us_page_stats']).length) {
                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-center bpm-contact-us-header ">Open Inquiries</div>');
                html_line = html_line.concat('</div>');
            }else{
                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-center bpm-contact-us-header ">No Open Inquiries</div>');
                html_line = html_line.concat('</div>');
            }

            jQuery.each(result.contact_us_page_stats,function(index, value) {
                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-large-8 bpm-small-8 bpm-columns text-left "><a class="bpm_links" onClick="bpmcontext.bpm_open_contact_us('+index+');">'+value['name']+'</a></div>');
                html_line = html_line.concat('<div class="bpm-large-3 bpm-small-3 bpm-columns text-right">'+value['count']+'</div>');
                html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
                html_line = html_line.concat('</div>');
            });

            if(result.contact_us_page_history) {
                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-center bpm-contact-us-header ">Inquiry History</div>');
                html_line = html_line.concat('</div>');
                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-large-7 bpm-small-7 bpm-columns text-left ">Current Week</div>');
                html_line = html_line.concat('<div class="bpm-large-4 bpm-small-4 bpm-columns text-right">'+result.contact_us_page_history['week']+'</div>');
                html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
                html_line = html_line.concat('</div>');
                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-large-7 bpm-small-7 bpm-columns text-left ">Current Month</div>');
                html_line = html_line.concat('<div class="bpm-large-4 bpm-small-4 bpm-columns text-right">'+result.contact_us_page_history['month']+'</div>');
                html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
                html_line = html_line.concat('</div>');
                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-large-7 bpm-small-7 bpm-columns text-left ">Current Year</div>');
                html_line = html_line.concat('<div class="bpm-large-4 bpm-small-4 bpm-columns text-right">'+result.contact_us_page_history['year']+'</div>');
                html_line = html_line.concat('<div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>');
                html_line = html_line.concat('</div>');

            }else{
                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-center bpm-contact-us-header ">No Inquiry History</div>');
                html_line = html_line.concat('</div>');
            }

            jQuery('#right_acc_13').html(html_line);

        }

        function bpm_open_contact_us(user_id){

            var content_list = [];

            jQuery.each(bpm_settings['contact_us_page_detail'],function(index, value) {
                if(value['uad_user_id'] == user_id) content_list.push({ col_1: '<a class="url_links bpm_links " href="?pageid=' + value['page_id'] + '&domain=' + bpm_current_domain + '&action=bpmcontext"  title="' + value['page_title'] + '">' + value['page_title'] + '</a>'});
            });

            jQuery('#bpm_contact_us_detail_content').html(bpmcontext.bpm_make_links_grid(content_list, 1, content_list.length));

            bpmcontext.bpm_set_url_links();
            jQuery('#bpm_contact_us_detail').foundation('reveal', 'open');

        }

        function bpm_create_cust_supp(result) {
            jQuery('#bpm_show_cust_loc').hide();

            if(result.SHOWCUSTBOX==1 && bpm_page_status > 0){
                jQuery('#right_acc_2_title').text(bpm_trans_array['bpm_lng_cust_loc_message_title']);
                jQuery('#right_acc_2').text(bpm_trans_array['bpm_lng_cust_loc_message']);
                jQuery('#bpm_show_cust_loc').show();
            }
            if(result.SHOWSUPPBOX==1 && bpm_page_status > 0){
                jQuery('#right_acc_2_title').text(bpm_trans_array['bpm_lng_supp_loc_message_title']);
                jQuery('#right_acc_2').text(bpm_trans_array['bpm_lng_supp_loc_message']);
                jQuery('#bpm_show_cust_loc').show();
            }
        }

        function bpm_prep_for_lng( str) {
            return str.replace(/[^0-9.a-zA-Z]/g,'');
        }

        function bpm_create_user_page(result){

            jQuery('#bpm_toolbar_owner').show().html('');
            bpm_user_details = result;

            jQuery('#bpm_user_real_name').html('<div class=" bpm_text_medium text-left" id="bpm_user_pref_1">' + result.USERDETAILS['name'] + '</div>');
            jQuery('#bpm_user_email').html('<div  class=" bpm_text_medium text-left" id="bpm_user_pref_2">' + result.USERDETAILS['email'] + '</div>');
            jQuery('#bpm_user_type').html('<div  class=" bpm_text_medium text-left" id="bpm_user_pref_3"><strong>' + bpm_trans_array['bpm_lng_user_type'] + ': </strong>' + result.USERDETAILS['user_type'] + '</div>');
            var display_journal = 'No';
            if(result.USERDETAILS['daily_journal']==1){
                display_journal = 'Yes';
            }
            var time_zone = result.USERDETAILS['time_zone'];
            var time_zone_lng = bpm_prep_for_lng(result.USERDETAILS['time_zone']);
            if(bpm_trans_array['bpm_lng_tz_'+time_zone_lng]) time_zone = bpm_trans_array['bpm_lng_tz_'+time_zone_lng];


            jQuery('#bpm_user_journal').html('<div class=" bpm_text_medium text-left" id="bpm_user_pref_4"><strong>' + bpm_trans_array['bpm_lng_daily_journal'] + ': </strong>' + display_journal + '</div>');

            jQuery('#bpm_user_time_zone').html('<div class=" bpm_text_medium text-left" id="bpm_user_pref_5"><strong>' + bpm_trans_array['bpm_lng_time_zone'] + ': </strong>'  + time_zone + '</div>');

            if(bpm_my_page != bpm_pageid){
         //       jQuery('#bpm_user_password_topbar').hide();
            }else{
         //       jQuery('#bpm_user_password_topbar').hide();
            }

            jQuery('#bpm_show_user_info').hide();

        }

        function bpm_create_user_page_reveal(selected_user_id){

            var result = [];
            if(selected_user_id){
                jQuery.each(bpm_settings['USERS'], function(index, value){
                    if(value['id'] == selected_user_id){
                        result.USERDETAILS = value;
                        result.USERDETAILS.name = value['real_name'];
                        bpm_settings['OTHER_USERPAGE'] = result.USERDETAILS.user_page;
                    }
                })

            }else {
                bpm_settings['OTHER_USERPAGE'] = '';
                result = bpm_user_details;
            }

            var html_line = '';
            var dd_html = '';

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-large-4 bpm-small-4 bpm-columns text-left bpm">Name</div>');
            html_line = html_line.concat('<div class="bpm-large-8 bpm-small-8 bpm-columns text-right"><div ><input style="margin-bottom:.3em;" class="bpm_profile_editing bpm_type_text" type="text" id="bpm_user_pref_edit_1" value="' + result.USERDETAILS['name'] + '" /></div></div>');
            html_line = html_line.concat('</div>');
            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-large-4 bpm-small-4 bpm-columns text-left">Email</div>');
            html_line = html_line.concat('<div class="bpm-large-8 bpm-small-8 bpm-columns text-right"><div ><input style="margin-bottom:.3em" class="bpm_profile_editing bpm_type_user_email" type="text" id="bpm_user_pref_edit_2" value="' + result.USERDETAILS['email'] + '" /></div></div>');
            html_line = html_line.concat('</div>');

            if(bpm_user_role == 'admin') {
                var admin_selected = '';
                var user_selected = '';
                var intranet_selected = '';
                var primary_admin_selected = '';
                var user_type = result.USERDETAILS['user_type'];
                if (result.USERDETAILS['user_type'] == 'Administrator') admin_selected = 'selected';
                if (result.USERDETAILS['user_type'] == 'Administrator' && result.ISPRIMADMIN == 1){
                    admin_selected = '';
                    user_type = 'Primary Administrator';
                    primary_admin_selected = 'selected';
                }
                if (result.USERDETAILS['user_type'] == 'Business User') user_selected = 'selected';

                if (result.USERDETAILS['user_type']) {
                    if ((!admin_selected && !user_selected && !intranet_selected ) || bpm_my_page == bpm_pageid ){
                        //external user - view only
                        html_line = html_line.concat('<div class="bpm-row" style="margin-bottom:.2em;">');
                        html_line = html_line.concat('<div class="bpm-large-4 bpm-small-4 bpm-columns text-left">' + bpm_trans_array['bpm_lng_user_type'] + '</div>');
                        html_line = html_line.concat('<div class="bpm-large-8 bpm-small-8 bpm-columns text-left" >' + user_type + '</div>');
                        html_line = html_line.concat('</div>');
                    } else {

                        dd_html = dd_html.concat('<select style="margin-bottom:.3em" class="bpm_profile_dropdown bpm_type_dropdown bpm_profile_editing" type="text" id="bpm_user_pref_edit_3">');
                        dd_html = dd_html.concat('<option value="pri_admin" ' + primary_admin_selected + '>'+bpm_trans_array['bpm_lng_primary_Administrator']+'</option>');
                        dd_html = dd_html.concat('<option value="admin" ' + admin_selected + '>'+bpm_trans_array['bpm_lng_Administrator']+'</option>');
                        dd_html = dd_html.concat('<option value="user" ' + user_selected + '>'+bpm_trans_array['bpm_lng_Business_User']+'</option>');
                        dd_html = dd_html.concat('</select>');

                        html_line = html_line.concat('<div class="bpm-row">');
                        html_line = html_line.concat('<div class="bpm-large-4 bpm-small-4 bpm-columns text-left">' + bpm_trans_array['bpm_lng_user_type'] + '</div>');
                        html_line = html_line.concat('<div class="bpm-large-8 bpm-small-8 bpm-columns text-right" >' + dd_html + '</div>');
                        html_line = html_line.concat('</div>');
                    }
                }
            }

            //daily journal
            var sel_yes = '';
            var sel_no = 'selected';
            var display_journal = 'No';
            dd_html = '';
            if(result.USERDETAILS['daily_journal']==1){
                sel_yes = 'selected';
                sel_no = '';
                display_journal = 'Yes';
            }
            dd_html = dd_html.concat('<select  style="margin-bottom:.3em" class="bpm_profile_dropdown bpm_type_dropdown bpm_profile_editing" type="text" id="bpm_user_pref_edit_4">');
            dd_html = dd_html.concat('<option value="1" ' + sel_yes + '>Yes</option>');
            dd_html = dd_html.concat('<option value="0" ' + sel_no + '>No</option>');
            dd_html = dd_html.concat('</select>');
            dd_html = dd_html.concat('</div>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-large-4 bpm-small-4 bpm-columns  text-left">' + bpm_trans_array['bpm_lng_daily_journal'] + '</div>');
            html_line = html_line.concat('<div class="bpm-large-8 bpm-small-8 bpm-columns text-right">'+dd_html+'</div>');
            html_line = html_line.concat('</div>');

            //time zone
            dd_html = '';

            dd_html = dd_html.concat('<select  style="margin-bottom:.3em" class="bpm_profile_dropdown bpm_type_dropdown bpm_profile_editing" type="text" id="bpm_user_pref_edit_5">');

            jQuery.each(result.USERDETAILS['timezones'],function(index, value) {
                if(result.USERDETAILS['time_zone']==value) {
                    dd_html = dd_html.concat('<option value="' + value + '" selected>' + value + '</option>');
                }else {
                    dd_html = dd_html.concat('<option value="' + value + '" >' + value + '</option>');
                }
            });

            dd_html = dd_html.concat('</select>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-large-4 bpm-small-4 bpm-columns text-left">Time Zone</div>');
            html_line = html_line.concat('<div class="bpm-large-8 bpm-small-8 bpm-columns text-right">'+dd_html+'</div>');
            html_line = html_line.concat('</div>');

            jQuery('#bpm_edit_user_profile_list').html(html_line);

            if(selected_user_id){
                jQuery('#bpm_user_profile_save_message').hide();
                jQuery('#bpm_edit_user_profile').foundation('reveal', 'open');
            }

            jQuery('.bpm_type_user_email').keypress(function (e) {
                this_id = jQuery(this).prop('id');

                if(!bpmcontext.bpm_validateEmail(jQuery(this).val())){
                    jQuery(this).css('border', 'solid 1px red');
                    jQuery('#bpm_save_user_prefs_button').hide();
                }else{
                    jQuery(this).css('border', 'solid 1px black');
                    jQuery('#bpm_save_user_prefs_button').show();
                }
            });

            jQuery(".bpm_type_user_email").blur(function () {

                this_id = jQuery(this).prop('id');

                if(!bpmcontext.bpm_validateEmail(jQuery(this).val())){
                    jQuery(this).css('border', 'solid 1px red');
                    jQuery('#bpm_save_user_prefs_button').hide();
                }else{
                    jQuery(this).css('border', 'solid 1px black');
                    jQuery('#bpm_save_user_prefs_button').show();
                }
            });
        }

        function bpm_save_user_pref(){

            var this_user_page = bpm_settings['USERPAGE'];
            if(bpm_settings['OTHER_USERPAGE']) this_user_page = bpm_settings['OTHER_USERPAGE'];

            jQuery('#bpm_user_profile_save_message').show();
            var querystring = 'domain=' + bpm_current_domain + "&action=save_user_details&pageid=" + this_user_page;

            var val_1 = 'real_name';
            var val_2 = jQuery('#bpm_user_pref_edit_1').val();
            querystring = querystring.concat('&c1[]=' + val_2+ '&gr_id[]=' +val_1);

            val_1 = 'email';
            val_2 = jQuery('#bpm_user_pref_edit_2').val();
            querystring = querystring.concat('&c1[]=' + val_2+ '&gr_id[]=' +val_1);

            if(jQuery('#bpm_user_pref_edit_3').length) {
                val_1 = 'user_type';
                val_2 = jQuery('#bpm_user_pref_edit_3 option:selected').val();
                querystring = querystring.concat('&c1[]=' + val_2 + '&gr_id[]=' + val_1);
            }

            val_1 = 'daily_journal';
            val_2 = jQuery('#bpm_user_pref_edit_4 option:selected').text();

            if(val_2=='Yes'){
                val_2 = '1';
            }else{
                val_2 = '0';
            }
            querystring = querystring.concat('&c1[]=' + val_2+ '&gr_id[]=' +val_1);

            val_1 = 'human_timezone';
            val_2 = jQuery('#bpm_user_pref_edit_5 option:selected').text();
            querystring = querystring.concat('&c1[]=' + val_2+ '&gr_id[]=' +val_1);

            jQuery.getJSON('https://'+bpm_settings['bpm_server'] +'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function(result){
                if(result && bpm_settings['USERPAGE']==bpm_pageid){
                    bpmcontext.bpm_create_user_page(result);
                }
                if(bpm_settings['OTHER_USERPAGE']) bpm_create_user_list();
                jQuery('#bpm_user_profile_save_message').hide();
                jQuery('#bpm_edit_user_profile').foundation('reveal', 'close');


            });

        }

        function bpm_run_tutorial(selected_object, tut_number){

            if(tut_number){
                var this_id = tut_number;
            }else {
                var this_id = jQuery(selected_object).prop('id').substr(18);
            }

            if(this_id != 11){
                bpmcontext.bpm_clear_tutorial(this_id, 1);
            }

            bpm_settings['tutorial_id'] = this_id;
            bpm_settings['tutorial_step'] = 0;
            bpm_settings['tutorial_overlay_off'] = 1;
            jQuery('#bpm_welcome_window').attr('data-options', '');
            jQuery('#bpm-close-welcome-button').show();
            bpmcontext.bpm_run_main_tutorial(this_id);

        }

        function bpm_in_array(lookup_array, applied_to_array){

            var this_result = false;
            jQuery(applied_to_array).each(function(i, obj) {
                if(obj==0) this_result = true;
                if(jQuery.inArray(obj, lookup_array) > -1) this_result = true;
            });
            return this_result;
        }

        function bpm_create_tutorial(result){

            var html_line = '';
            var show_now = 0;
            var has_tutorials = 0;
            bpm_settings['bpm_ws_manager_tutorial_viewed'] = 0;

            if(bpm_settings['TEMPLATELIBID']){
                var lookup_array = [0, bpm_settings['TEMPLATELIBID']];
            }else{
                var lookup_array = [0];
            }

            bpm_settings['tutorial_step'] = 0;

            if(result['TUTORIALS']) {
                jQuery.each(result['TUTORIALS'], function (index, value) {
                    if (value['tut_id'] == 11) {
                        bpm_settings['tutorial_step'] = Number(value['last_step']) + 1;
                    }
                });
            }else{
                var this_array = [];
                this_array['tut_id'] = 0;
                this_array['last_step'] = 0;

                result['TUTORIALS'] = [];
                result['TUTORIALS'].push(this_array);
            }

            var page_type = 'Consumer';
            if(bpm_settings['WORKFLOWTYPE'] == 2) page_type = 'Serial';
            if(bpm_settings['WORKFLOWTYPE'] == 3) page_type = 'Targeted';
            if(bpm_settings['TEMPLATELIBID'] == 25) page_type = 'Home';

            jQuery('.bpm_tutorials').each(function(i, obj) {

                var this_tut_id = jQuery(obj).data('tutorialid');
                var viewed = 0;
                var applied_to_lib = jQuery(obj).data('pagetype');
                if(result['TUTORIALS']) {
                    jQuery.each(result['TUTORIALS'], function (index, value) {

                        if (value['tut_id'] == this_tut_id) {
                            viewed = 1;
                        }

                    });
                }

                if(page_type != applied_to_lib) return true;
                if(jQuery(obj).data('adminonly')==1 && bpm_user_role != 'admin') return true;
                if(jQuery(obj).data('adminonly')==2 && bpm_user_role == 'admin') return true;
                if(jQuery(obj).data('adminonly')==1 && bpm_user_role == 'external') return true;
                if(jQuery(obj).data('adminonly')==2 && bpm_user_role == 'external') return true;

                if(show_now == 0 && jQuery(obj).data('shownow') == 1 && viewed == 0){
                    show_now = jQuery(obj).data('tutorialid');
                }


                has_tutorials = 1;
                var tour_name = jQuery('#bpm_tutorial_name_' + this_tut_id).text();
                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-left">');
                html_line = html_line.concat('&nbsp;<a onClick="bpmcontext.bpm_run_tutorial(this);" class="bpm_links bpm_nodecoration bpm_tutorial_text" id="bpm_tutorial_link_' + this_tut_id + '" >' + tour_name + '</a>');
                html_line = html_line.concat('</div>');
                html_line = html_line.concat('</div>');

            });

            if(result.tutorial_links){
                jQuery.each(result['tutorial_links'], function (index, value) {

                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-small-10 bpm-large-10 bpm-columns text-left">');
                    html_line = html_line.concat('&nbsp;<a href="'+value['link_info']+'" class="bpm_links bpm_nodecoration" style="font-size: 0.9em;" target="_blank" >' + value['link_title'] + '</a>&nbsp;');
                    html_line = html_line.concat('</div>');
                    html_line = html_line.concat('<div class="bpm-small-2 bpm-large-2 bpm-columns text-right"><span style="font-size: 0.9em;color:gray;" class="fa fa-external-link"></span></div>');

                    html_line = html_line.concat('</div>');

                });
            }

            jQuery('#right_acc_1').html(html_line);
            if(has_tutorials) jQuery('#bpm_right_tutorial').show();

            bpm_settings['show_now'] = 0;
            if(show_now) bpm_settings['show_now'] = show_now;
            bpm_settings['tutorial_overlay_off'] = 0;

        }

        function bpm_edit_calendar_item(){

            var event_info = bpm_settings['event_info'];

            if( ! event_info.event_time_zone) event_info.event_time_zone = bpm_settings['USERDETAILS']['time_zone'];

            //time zone
            var dd_html = '';

            dd_html = dd_html.concat('<select  style="margin-bottom:.3em" class="bpm_profile_dropdown bpm_type_dropdown bpm_profile_editing" type="text" id="bpm_event_timezone">');

            jQuery.each(bpm_settings['USERDETAILS']['timezones'],function(index, value) {
                if(event_info.event_time_zone==value) {
                    dd_html = dd_html.concat('<option value="' + value + '" selected>' + value + '</option>');
                }else {
                    dd_html = dd_html.concat('<option value="' + value + '" >' + value + '</option>');
                }
            });

            dd_html = dd_html.concat('</select>');
            var remove_event = '';
            if(event_info.event_start) remove_event = '<a id="bpm_remove_event_info" onClick="bpmcontext.bpm_remove_event_info();" class="button bpm-small  bpm_nodecoration" >Remove from Calendar</a>';

            if( ! event_info.event_title) event_info.event_title = '';
            var html_line = '';
            html_line = html_line.concat('<div class="bpm-row" style="margin-top:2em">');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns ">&nbsp;</div>');
            html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns ">Title</div>');
            html_line = html_line.concat('<div class="bpm-small-4 bpm-large-4 bpm-columns text-right bpm_text_medium"><input type="text" id="bpm_event_title" value="'+event_info.event_title+'"></div>');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns ">&nbsp;</div>');
            html_line = html_line.concat('</div>');

            if( ! event_info.event_start) event_info.event_start = '';
            html_line = html_line.concat('<div class="bpm-row" style="margin-bottom:.3em">');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns ">&nbsp;</div>');
            html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns ">Start</div>');
            html_line = html_line.concat('<div class="bpm-small-4 bpm-large-4 bpm-columns text-right bpm_text_medium"><input id="bpm_event_start_datetimepicker" class="datetimepicker" type="text" value="'+event_info.event_start+'"/></div>');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns ">&nbsp;</div>');
            html_line = html_line.concat('</div>');

            if( ! event_info.event_end) event_info.event_end = '';
            html_line = html_line.concat('<div class="bpm-row" style="margin-bottom:.3em">');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns ">&nbsp;</div>');
            html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns ">End</div>');
            html_line = html_line.concat('<div class="bpm-small-4 bpm-large-4 bpm-columns text-right bpm_text_medium"><input id="bpm_event_end_datetimepicker" class="datetimepicker" type="text" value="'+event_info.event_end+'"/></div>');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns ">&nbsp;</div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat('<div class="bpm-row" style="margin-bottom:2em">');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns ">&nbsp;</div>');
            html_line = html_line.concat('<div class="bpm-small-4 bpm-large-4 bpm-columns ">Time Zone</div>');
            html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns text-right bpm_text_medium"> ' + dd_html + '</div>');
            html_line = html_line.concat('<div class="bpm-small-1 bpm-large-1 bpm-columns ">&nbsp;</div>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns text-left">'+remove_event+'&nbsp;</div>');
            html_line = html_line.concat('<div class="bpm-large-6 bpm-small-6 bpm-columns text-right"><a onClick="bpmcontext.bpm_save_event_info();" class="button bpm-small  bpm_nodecoration" >Save</a>&nbsp;<a onClick="bpmcontext.bpm_close_generic_reveal()" class="button bpm-small  bpm_nodecoration" >Cancel</a></div>');
            html_line = html_line.concat('</div>');



            return html_line;
        }

        function bpm_remove_event_info(){

            var query_string = bpm_get_string + '&action=remove_calendar';

            //update calendar box
            jQuery.getJSON('https://'+bpm_settings['bpm_server'] +'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', query_string, function(result) {
                if(result) {
                    bpmcontext.bpm_create_event_box(result);
                }
                bpmcontext.bpm_close_generic_reveal();
            });

        }

        function bpm_save_event_info(){

            //check form
            var title = jQuery('#bpm_event_title').val();
            var start = jQuery('#bpm_event_start_datetimepicker').val();
            var end = jQuery('#bpm_event_end_datetimepicker').val();
            var timezone = jQuery('#bpm_event_timezone').val();
            var error_status = 0;

            if (!bpmcontext.bpm_test_field_for_blank(title)){
                jQuery('#bpm_event_title').css("border", "1px solid red");
                error_status = 1;
            }
            if (!bpmcontext.bpm_test_field_for_blank(start)){
                jQuery('#bpm_event_start_datetimepicker').css("border", "1px solid red");
                error_status = 1;
            }
            if (!bpmcontext.bpm_test_field_for_blank(end)){
                jQuery('#bpm_event_end_datetimepicker').css("border", "1px solid red");
                error_status = 1;
            }

            start =  moment(jQuery('#bpm_event_start_datetimepicker').datetimepicker('getValue')).format('YYYY-MM-DD HH:mm:ss');
            end =  moment(jQuery('#bpm_event_end_datetimepicker').datetimepicker('getValue')).format('YYYY-MM-DD HH:mm:ss');

            var start_date = new Date(jQuery('#bpm_event_start_datetimepicker').datetimepicker('getValue'));
            var end_date = new Date(jQuery('#bpm_event_end_datetimepicker').datetimepicker('getValue'));

            if(start_date > end_date){
                jQuery('#bpm_event_end_datetimepicker').css("border", "1px solid red");
                error_status = 1;
            }

            if(error_status){
                return;
            }

            //post to bpm
            var query_string = bpm_get_string + '&action=update_calendar&title='+title+'&start='+start+'&end='+end+'&timezone='+timezone;

            jQuery('.datetimepicker').datetimepicker('destroy');

            //update calendar box
            jQuery.getJSON('https://'+bpm_settings['bpm_server'] +'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', query_string, function(result) {
                if(result.EVENT_DATA) {
                    bpmcontext.bpm_create_event_box(result);
                }
                bpmcontext.bpm_close_generic_reveal();
            });

        }


        function bpm_expand_accord(this_accord){

            if(bpmcontext.is_read_only()) return;

            if(this_accord==9){
                //show edit profile menu
                if(bpm_settings['event_info']){
                    bpmcontext.bpm_open_generic_reveal('Edit Event Info', bpmcontext.bpm_edit_calendar_item(), false);
                }else {
                    bpmcontext.bpm_open_generic_reveal('Add Event Info', bpmcontext.bpm_edit_calendar_item(), false);
                }
                jQuery('.datetimepicker').datetimepicker({
                    format: 'm/d/Y g:i A',
                    formatTime: 'g:i A'
                });

            }

            if(this_accord==12){
                //show edit profile menu
                if(jQuery('#bpm_user_pref_bar').css('display')=='block'){
                    jQuery('#bpm_user_pref_bar').hide();
                }else {
                    jQuery('.right_accordion_menu').hide();
                    jQuery('#bpm_user_pref_bar').show();
                }
            }

            if(this_accord==3){
                //show infobox menu
                if(jQuery('#bpm_edit_infobox_menu').css('display')=='block'){
                    jQuery('#bpm_edit_infobox_menu').hide();
                }else {
                    jQuery('.right_accordion_menu').hide();
                    jQuery('#bpm_edit_infobox_menu').show();
                }
                return;
            }

            if(this_accord==0){
                if(jQuery('#bpm_talat_menu').css('display')=='block'){
                    jQuery('#bpm_talat_menu').hide();
                    jQuery('.bpm_talat_message_header').css('border','');
                }
            }

            jQuery( '#right_acc_' + this_accord ).toggleClass( "bpm_infobox_setup bpm_infobox_all" );

        }

        function bpm_load_context_map(selected_object){

            jQuery('#bpm_context_map_list').html('').hide();
            var querystring = 'domain=' + bpm_current_domain + "&action=get_context_map_suite&pageid=" + bpm_pageid + "&suite_id=" + selected_object;
            jQuery.getJSON('https://'+bpm_settings['bpm_server'] +'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function(result) {
                if(result.PAGEDATA) {

                    bpmcontext.bpm_create_context_map(result.PAGEDATA);
                }
            });

        }

        function bpm_open_template_manager(this_template, library_template_id, parent_id){

            jQuery('#bpm_context_map_window').foundation('reveal', 'close');

            bpm_edit_template(this_template, library_template_id, parent_id);
            jQuery('#bpm_main_content').html(jQuery('#bpm-workspace-designer-frame').html());
            jQuery('.bpm-right-accordion').hide();
            jQuery('.bpm-right-admin-accordion').show();
            jQuery('.bpm-non-account-manager').hide();

            bpmcontext.bpm_set_url_links();
        }

        function bpm_create_context_map(result, welcome){

            bpm_settings['intranet_plus'] = false;
            bpm_settings['client_suite'] = false;

            if(result['CONTEXTMAP']) {
                var i = 0;
                var root_node;
                bpm_context_map_count = 0;
                var html_line = '';

                if(result.CONTEXTMAPLIST) {
                    var context_list = '';
                    var context_list_selected = '';

                    jQuery.each(result.CONTEXTMAPLIST, function (index, value) {
                        if(value['selected']==1) context_list_selected = value['suite_name'];
                            context_list = context_list.concat('<li class="bpm_ul_li"><a class="bpm_nodecoration" onClick="bpmcontext.bpm_load_context_map(' + value['suiteid'] + ');">&nbsp;' + value['suite_name'] + '</a></li>');
                    });

                    jQuery('#bpm_context_map_list').html(context_list).show();;
                    jQuery('#bpm_context_map_list_selected').html(context_list_selected);
                }
                var this_id = 'bpm_context_map';
                if(welcome) this_id = 'bpm_context_map_welcome';

                html_line = html_line.concat('<table id="'+this_id+'" style="border-color:white;padding:0;margin:0;">');

                jQuery.each(result.CONTEXTMAP,function(index, value) {

                    if(i==0){
                        var root_node = index;
                        i++;
                        html_line = html_line.concat('<tr id="bpm_context_map_branch_' + index + '" data-tt-id="'+index+'">');
                        if(welcome) {
                            html_line = html_line.concat('<td style="background-color:white;border-color:white;" class="bpm_tree_row bpm_no_wrap"><span class="bpm_nodecoration bpm_fake_link" id="bpm_ws_reveal_' + value['library_id'] + '">&nbsp;' + value['template_name'] + '<span style="font-size:.75em">&nbsp(Home Page)</span></td>');
                        }else{
                            html_line = html_line.concat('<td style="background-color:white;border-color:white;" class="bpm_tree_row bpm_no_wrap"><a class="bpm_nodecoration bpm_links bpm_no_wrap" onClick="bpmcontext.bpm_open_context_map(' + index + ', 1, ' + value['library_id'] + ', ' + value['parent_template'] + ');">' + value['template_name'] + '</a></td>');
                        }
                        html_line = html_line.concat('</tr>');
                    }
                        html_line = bpmcontext.bpm_add_context_map_child(index, result.CONTEXTMAP, html_line, welcome);
                });

                html_line = html_line.concat('</table>');

                if(welcome) return html_line;

                jQuery('#right_acc_4').html(html_line);
                jQuery('#bpm_right_context_map').show();

                jQuery("#bpm_context_map").treetable({ expandable: true }).treetable('expandAll');

            }else{
                jQuery('#bpm_right_context_map').hide();
            }

        }

        function bpm_add_context_map_child(this_index, this_data, html_line, welcome){

            if(this_data[this_index]) {
                jQuery.each(this_data[this_index]['childs'], function (index, value) {
                    bpm_context_map_count++;
                    html_line = html_line.concat('<tr id="bpm_context_map_branch_' + index + '" data-tt-id="' + index + '" data-tt-parent-id="' + this_index + '">');

                    var user_page = "";
                    if(value['template_name'] == 'Employee') user_page = "<span style='font-size:.75em'>&nbsp(User's My Page)</span>";
                    if(welcome) {
                            if(value['library_id'] == 128) bpm_settings['intranet_plus'] = true;
                            if(value['library_id'] == 1) bpm_settings['client_suite'] = true;
                            html_line = html_line.concat('<td style="background-color:white;border-color:white;" class="bpm_tree_row bpm_no_wrap"><span class="bpm_nodecoration bpm_fake_link" id="bpm_ws_reveal_' + value['library_id'] + '">&nbsp;' + value['template_name'] + user_page+'</span></td>');
                        }else{
                            html_line = html_line.concat('<td style="background-color:white;border-color:white;" class="bpm_tree_row bpm_no_wrap"><a class="bpm_nodecoration bpm_links bpm_no_wrap" onClick="bpmcontext.bpm_open_context_map(' + index + ', 0,  '+value['library_id']+', '+value['parent_template']+');">' + value['template_name'] + '</a></td>');
                    }

                    html_line = html_line.concat('</tr>');
                    html_line = bpmcontext.bpm_add_context_map_child(index, this_data[this_index]['childs'], html_line, welcome);
                });
            }

            return html_line;
        }

        function bpm_open_context_map(selected_template, is_root, library_id, parent_template){

            var this_html = '';

            this_html = this_html.concat('<div class="bpm-row full-width" style="margin-bottom:5px;max-height:400px;overflow-y:auto;">');
            this_html = this_html.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-left">');
            this_html = this_html.concat('<ul class="side-nav" id="bpm_context_map_list">');

            this_html = this_html.concat(' <li class="active bpm_ul_li">');
            this_html = this_html.concat('<a class="bpm_nodecoration side-nav-item" id="bpm_context_map_page_3" onClick="bpmcontext.bpm_create_context_map_target(3, ' + selected_template + ');">Information</a>');
        //    this_html = this_html.concat('<a class="bpm_nodecoration side-nav-item" id="bpm_context_map_page_5" onClick="bpmcontext.bpm_create_context_map_target(5, ' + selected_template + ');">Workspace Metrics</a>');
            if(bpm_settings['USERTYPE']=='admin' && library_id != 24 && library_id != 25) {
                this_html = this_html.concat('<a class="bpm_nodecoration side-nav-item" id="bpm_context_map_page_4" onClick="bpmcontext.bpm_open_template_manager(' + selected_template + ', '+library_id + ', '+parent_template + ');">Admin: Edit Workspace</a>');
            }
            this_html = this_html.concat('</li>');


            if(is_root == 0) {
        //        this_html = this_html.concat(' <li class="bpm_ul_li">');
        //        this_html = this_html.concat('<a class="bpm_nodecoration side-nav-item" id="bpm_context_map_page_1" onClick="bpmcontext.bpm_create_context_map_target(1, ' + selected_template + ');">Page List&nbsp;<span id="bpm_context_page_count"></span></span></a>');
        //        this_html = this_html.concat('</li>');

        //        this_html = this_html.concat(' <li class="bpm_ul_li">');
        //        this_html = this_html.concat('<a class="bpm_nodecoration side-nav-item" id="bpm_context_map_page_2" onClick="bpmcontext.bpm_create_context_map_target(2, ' + selected_template + ');">Create Page</a>');
        //        this_html = this_html.concat('</li>');
            }
            if(bpm_user_role == 'admin') {


        //        this_html = this_html.concat(' <li class="bpm_ul_li">');
        //        this_html = this_html.concat('<a class="bpm_nodecoration side-nav-item" id="bpm_context_map_page_4" onClick="bpmcontext.bpm_create_context_map_target(4, ' + selected_template + ');">Admin - Routing</a>');
        //        this_html = this_html.concat('</li>');

        //        this_html = this_html.concat(' <li class="bpm_ul_li">');
        //        this_html = this_html.concat('<a class="bpm_nodecoration side-nav-item" id="bpm_context_map_page_5" onClick="bpmcontext.bpm_create_context_map_target(5, ' + selected_template + ');">Admin - Sharing</a>');
        //        this_html = this_html.concat('</li>');
            }

            this_html = this_html.concat('</ul>');

            this_html = this_html.concat('</div>'); //end of left column div

            this_html = this_html.concat('<div class="bpm-small-9 bpm-large-9 bpm-columns bpm_gray_border text-left" id="bpm_context_map_target">');

            this_html = this_html.concat('</div>'); //end of right column div
            this_html = this_html.concat('</div>');

            jQuery('#bpm_context_map_content').html(this_html);

            bpmcontext.bpm_create_context_map_target(3, selected_template);

            jQuery('#bpm_context_map_window').foundation('reveal', 'open');
        }

        function bpm_create_context_map_target(this_action, this_template){

            jQuery('#bpm_context_map_target').html(bpm_trans_array['bpm_lng_loading'] + '...');
            var this_html = '';

            switch(this_action){
                case 1:
                    //page list
                    var querystring = 'domain=' + bpm_current_domain + "&action=get_context_map_pages&pageid=" + bpm_pageid + "&templateid=" + this_template;

                    jQuery.getJSON('https://'+bpm_settings['bpm_server'] +'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function(result){

                        if(result.PAGELIST['pages'].length > 0) {
                            this_html = bpmcontext.bpm_make_left_report(result.PAGELIST['pages'], 'context_pages');
                            jQuery('#bpm_context_page_count').text('('+result.PAGELIST['pages'].length+')')
                        }else{
                            this_html = bpm_trans_array['bpm_lng_no_results_context_map'];
                            jQuery('#bpm_context_page_count').text('');
                        }
                        jQuery('#bpm_context_map_target').html(this_html);
                        bpmcontext.bpm_set_url_links();
                    });

                    break;
                case 2:
                    //create page

                    break;
                case 3:
                    //template information
                    var querystring = 'domain=' + bpm_current_domain + "&action=get_context_info_page&pageid=" + bpm_pageid + "&templateid=" + this_template;

                    jQuery.getJSON('https://'+bpm_settings['bpm_server'] +'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function(result){

                        if(result.PAGEINFO) {
                            jQuery('#bpm_context_map_target').html(result.PAGEINFO);
                        }else{
                            jQuery('#bpm_context_map_target').html(bpm_trans_array['bpm_lng_no_network']);
                        }
                        bpmcontext.bpm_set_url_links();
                    });
                    break;
                case 4:
                    //routing info
                    jQuery('#bpm_context_map_target').html('routing info');

                    break;
                case 5:
                    //metrics info
                    jQuery('#bpm_context_map_target').html('process metrics info');
                    break;
            }



        }

        function bpm_create_change_log(result){

            if(result['CHANGELOG'].length > 0) {
                var html_line = '';

                jQuery.each(result.CHANGELOG,function(index, value) {
                    var area_changed = '';
                    var item_changed = '';
                    if(value['infobox_id']) {
                        item_changed = 'Infobox-' + value['infobox_localized_name'];
                        area_changed = '1';
                    }
                    if(value['section_id']){
                        item_changed = value['section_localized_name'];
                        area_changed = '2';
                        if(value['section_type']==10){
                            //attachments
                            if(value['action'] == 'document_deleted'){
                                item_changed = value['section_localized_name'] + '-Deleted';
                                area_changed = '3';
                            }else{
                                item_changed = value['section_localized_name'] + '-Added';;
                                area_changed = '3';
                            }
                        }
                    }

                    var date_part = value['changed_time'].split(' ');
                    var date_parts = date_part[0].split('-');
                    var updated_on = date_parts[1] + '/' + date_parts[2] + '/' + date_parts[0];

                    html_line = html_line.concat('<div class="bpm-row">');
                    if(area_changed==1) {
                        html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-left bpm_text_medium text-left">' + item_changed + '</div>');
                    }else if(area_changed==3){
                        html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-left bpm_text_medium text-left">' + item_changed + '</div>');
                    }else {
                        html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns text-left bpm_text_medium text-left">' + item_changed + '-'+bpm_trans_array['bpm_lng_edited']+'</div>');
                    }
                    html_line = html_line.concat('</div>');
                    html_line = html_line.concat('<div class="bpm-row ">');
                    html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns bpm_text_medium text-left" style="color:gray">' + bpm_trans_array['bpm_lng_cap_by'] + ' ' + value['real_name'] + ' ' + bpm_trans_array['bpm_lng_on'] + ' '+ updated_on + '</div>');
                    html_line = html_line.concat('</div>');
                    html_line = html_line.concat('<hr class="bpm_hr_gray">');

                });

                jQuery('#right_acc_6').html(html_line).css('height', '110px');
                jQuery('#bpm_right_change_log').show();
            }else{
                jQuery('#bpm_right_change_log').hide();
            }
        }

        function bpm_show_history(type){

            jQuery('#bpm_infobox_history_window').foundation('reveal', 'open');

        }

        function bpm_create_sharing(result){

            if(result.INTRANET==1) return;

            var right_class = 'text-right';

            if(result['SHARING']) {

                var html_line = '';
                bpm_sharing_list = result['SHARING'];

                jQuery.each(result.SHARING,function(index, value) {
                    var this_status = '';

                    if(value['status']=='A'){
                        if(value['viewed']){
                            this_status = '<span class="fi-check bpm-green"></span>';
                        }else{
                            this_status = '<span class="fi-minus"></span>';
                        }
                        right_class = 'text-right';
                    }else{
                        if(value['invitation']){
                            this_status = '<a onClick="bpmcontext.bpm_invite_user('+value['user_id'] + ')" class="bpm_links">Invited:&nbsp;' + value['invitation'].substr(0,5) +'</a>';
                        }else{
                            this_status = '<a onClick="bpmcontext.bpm_invite_user('+value['user_id'] + ')" class="bpm_links">Invite</a>';
                        }
                    }

                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-small-7 bpm-large-7 bpm-columns bpm_text_medium"><a href="?pageid=' + value['uad_user_page_id'] + '&action=bpmcontext" class="url_links bpm_links">' + value['real_name'] + '</a></div>');
                    html_line = html_line.concat('<div class="bpm-small-5 bpm-large-5 bpm-columns '+right_class+' bpm_text_medium">'+ this_status +'</div>');
                    html_line = html_line.concat('</div>');
                });

                jQuery('#right_acc_5').html(html_line);
                jQuery('#bpm_right_sharing').show();
            }else{
                jQuery('#bpm_right_sharing').hide();
            }
        }

        function bpm_send_invite(){

            var send_to = jQuery('#bpm_invite_user_id').text();
            var post_text = encodeURIComponent(jQuery('#bpm_invite_external_text').val());

            jQuery('#bpm_send_invite_alert').show();
            var querystring = 'domain=' + bpm_current_domain + "&action=invite_external&pageid=" + bpm_pageid + "&users=" + send_to + "&mes=" + post_text;

            jQuery.getJSON('https://'+bpm_settings['bpm_server'] +'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function(result) {
                bpmcontext.bpm_create_sharing(result);
                jQuery('#bpm_send_invite_alert').hide();
                jQuery('#bpm_invite_external_window').foundation('reveal', 'close');
            });
        }

        function bpm_invite_user(this_user){
            var this_user_name = '';
            jQuery.each(bpm_sharing_list,function(index, value) {
                if(value['user_id']==this_user) this_user_name = value['real_name'];
            });

            jQuery('#bpm_invite_user_name').text(this_user_name);
            jQuery('#bpm_invite_user_id').text(this_user);

            var user_type = this_user_name.split(':');
            switch(user_type){
                case 'Corp Cust':
                    jQuery('#bpm_invite_external_title').text(bpm_trans_array['bpm_lng_Corp_Customer']);
                    break;
                case 'Cust':
                    jQuery('#bpm_invite_external_title').text(bpm_trans_array['bpm_lng_Customer']);
                    break;
                case 'Corp Supp':
                    jQuery('#bpm_invite_external_title').text(bpm_trans_array['bpm_lng_Corp_Supplier']);
                    break;
                case 'Supp':
                    jQuery('#bpm_invite_external_title').text(bpm_trans_array['bpm_lng_Supplier']);
                    break;
            }

            jQuery('#bpm_invite_external_window').foundation('reveal', 'open');
        }

        function bpm_create_routing_history(result) {

            if(result['ROUTINGHISTORY'].length > 0) {

                var html_line = '';
                jQuery.each(result.ROUTINGHISTORY,function(index, value) {
                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns bpm_text_medium">' + value['real_name'] + '</div>');
                    html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns text-center bpm_text_medium">'+ value['date'] +'</div>');
                    html_line = html_line.concat('</div>');
                });

                jQuery('#right_acc_7').html(html_line);
                jQuery('#bpm_right_routing_history').show();
            }else{
                jQuery('#bpm_right_routing_history').hide();
            }
        }

        function bpm_create_event_box(result){

            if(result['EVENT_DATA'][0]) {
                var event_info = result['EVENT_DATA'][0];
                bpm_settings['event_info'] = event_info;
                if( ! event_info.event_title) event_info.event_title = '';
                var html_line = '';
                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-small-8 bpm-large-8 bpm-columns bpm_text_medium">Title</div>');
                html_line = html_line.concat('<div class="bpm-small-4 bpm-large-4 bpm-columns text-right bpm_text_medium"> '+event_info.event_title+'</div>');
                html_line = html_line.concat('</div>');

                if( ! event_info.event_start) event_info.event_start = '';
                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-small-4 bpm-large-4 bpm-columns bpm_text_medium">Start</div>');
                html_line = html_line.concat('<div class="bpm-small-8 bpm-large-8 bpm-columns text-right bpm_text_medium"> '+event_info.event_start+'</div>');
                html_line = html_line.concat('</div>');

                if( ! event_info.event_end) event_info.event_end = '';
                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-small-4 bpm-large-4 bpm-columns bpm_text_medium">End</div>');
                html_line = html_line.concat('<div class="bpm-small-8 bpm-large-8 bpm-columns text-right bpm_text_medium"> ' + event_info.event_end + '</div>');
                html_line = html_line.concat('</div>');

                if( ! event_info.event_end) event_info.event_time_zone = '';
                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-small-4 bpm-large-4 bpm-columns bpm_text_medium">Time Zone</div>');
                html_line = html_line.concat('<div class="bpm-small-8 bpm-large-8 bpm-columns text-right bpm_text_medium"> ' + event_info.event_time_zone + '</div>');
                html_line = html_line.concat('</div>');

                jQuery('#right_acc_9').html(html_line).show();
                jQuery('#bpm_event_data').show();
            }else{
                bpm_settings['event_info'] = [];
                jQuery('#right_acc_9').html('').show();
                jQuery('#bpm_event_data').show();
            }

        }

        function bpm_create_subscribers(result) {

            if(result['SUBSCRIBERS'].length > 0) {
                var html_line = '';
                jQuery.each(result.SUBSCRIBERS,function(index, value) {
                    var read_in = 'fi-minus';
                    if(bpm_settings['WFSTATUS'] > 0) {
                        if (value['viewed'] == 0 && bpm_page_status > 0) read_in = 'fi-check bpm-green';
                        if (value['user_index'] == bpm_settings['userid']) read_in = 'fi-check bpm-green';
                        if (bpm_settings['WFSTATUS'] == 0) read_in = 'fi-check bpm-green';
                    }
                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-small-9 bpm-large-9 bpm-columns bpm_text_medium">' + value['real_name'] + '</div>');
                    html_line = html_line.concat('<div class="bpm-small-3 bpm-large-3 bpm-columns text-right bpm_text_medium '+read_in+'"></div>');
                    html_line = html_line.concat('</div>');

                });

                jQuery('#right_acc_8').html(html_line);
                jQuery('#bpm_right_subscribers').show();
            }else{
                jQuery('#bpm_right_subscribers').hide();
            }
        }

        function bpm_create_infobox(this_content){

            var this_id = '';
            if(this_content['INFOBOX'].length > 0) {
                bpm_infobox_data = this_content['INFOBOX'];
                bpm_infobox_data_users = this_content['INFOBOXUSERS'];
                var html_line = '';
        //        html_line = html_line.concat(bpm_show_functional_tutorial(1010));
                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns" style="height:.25em;">&nbsp;</div>');
                html_line = html_line.concat('</div>');

                jQuery.each(this_content.INFOBOX,function(index, value) {

                    var info_name = value['info_name'];

                    if(bpm_trans_array['bpm_infobox_name_'+value['info_name'].replace(' ','_')]){
                        info_name = bpm_trans_array['bpm_infobox_name_'+value['info_name'].replace(' ','_')];
                    }

                    var this_value = '&nbsp;';
                    var can_edit_class = 'bpm_read_only';
                    if(value['editable']=='yes') can_edit_class = 'bpm_editable';
                    if(value['info_value']) this_value = value['info_value'];
                    switch(value['info_type']){
                        case '3':
                            this_value = this_value.substr(0,10);
                            break;
                        case '16':
                            if(value['display_value']) this_value = value['display_value'];
                            break;
                        case '19':

                            this_value = '';
                            if(bpm_infobox_data_users) {
                                jQuery.each(bpm_infobox_data_users, function (user_index, user_value) {
                                    if(value['info_value'] == user_value['user_page']) this_value = user_value['user_name'];
                                });
                            }

        //                    if(value['real_name']) this_value = value['real_name'];
                            break;
                    }
                    var external_div = '';
                    if(value['external_infobox_id']){
                        external_div = '<span style="width:4px;background-color:blue" data-tooltip aria-haspopup="true" class="has-tip tip-left" title="This infobox field is shared with external users">&nbsp;</span>&nbsp;';
                    }

                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-small-4 bpm-large-4 bpm-columns bpm_text_medium">' + external_div  + info_name + '</div>');
                    if(value['info_type'] == 2){
                        html_line = html_line.concat('<div class="bpm-small-8 bpm-large-8 bpm-columns text-right bpm_text_medium" id="bpm_field_value_' + value['info_index'] + '">' + this_value + '</div>');
                    }else {
                        html_line = html_line.concat('<div class="bpm-small-8 bpm-large-8 bpm-columns text-left bpm_text_medium" id="bpm_field_value_' + value['info_index'] + '">' + this_value + '</div>');
                    }
                    html_line = html_line.concat('</div>');

                });
                jQuery('#bpm_infobox_accordion').show();

                jQuery('#bpm_infobox_accord_content').html(html_line);
                jQuery('#bpm_right_infobox').show();
            }else{
                jQuery('#bpm_infobox_accord_content').html('');
                jQuery('#bpm_right_infobox').hide();
            }

        }

        function bpm_close_generic_reveal(){
            jQuery('.datetimepicker').datetimepicker('destroy');
            jQuery('#bpm_generic_reveal').foundation('reveal', 'close');
        }
        function bpm_open_generic_reveal(title, content, no_close){

            jQuery('#bpm_generic_reveal_list').text(title);
            jQuery('#bpm_generic_reveal_content').html(content);

            if(no_close) jQuery('#bpm_generic_reveal').data('options','close_on_background_click:false;close_on_esc:false;');

            jQuery('#bpm_generic_reveal').foundation('reveal', 'open');
        }

        function make_widget_list(){

            var html_line = '';
            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-large-6 bpm-small-6 bpm-columns text-left bpm_bold">Widget Name</div>');
            html_line = html_line.concat('<div class="bpm-large-6 bpm-small-6 bpm-columns text-center bpm_bold">Visible</div>');
            html_line = html_line.concat('</div><br>');

            jQuery.each(bpm_params.home_page, function (index, value) {
                var checked = 'checked';
                if(index == 'custom') {
                    jQuery.each(bpm_params.home_page.custom, function (this_index, this_value) {
                        checked = 'checked';
                        if (this_value['domain'] && this_value['domain'] != bpm_current_domain) return true;
                        jQuery.each(bpm_settings['homepage_widgets'], function(test_index, text_value){
                            if(text_value['widget_id']==this_value['id']) checked = '';
                        })

                        html_line = html_line.concat('<div class="bpm-row">');
                        html_line = html_line.concat('<div class="bpm-large-6 bpm-small-6 bpm-columns text-left">' + this_value['title'] + '</div>');
                        html_line = html_line.concat('<div class="bpm-large-6 bpm-small-6 bpm-columns text-center"><input class="bpm_homepage_widget" type="checkbox" name="'+this_value['id']+'" value="1" '+checked+'></div>');
                        html_line = html_line.concat('</div>');
                    });
                }else {

                    jQuery.each(bpm_settings['homepage_widgets'], function(test_index, text_value){
                        if(text_value['widget_id']==value['name']) checked = '';
                    })
                    html_line = html_line.concat('<div class="bpm-row">');
                    html_line = html_line.concat('<div class="bpm-large-6 bpm-small-6 bpm-columns text-left">' + value['title'] + '</div>');
                    html_line = html_line.concat('<div class="bpm-large-6 bpm-small-6 bpm-columns text-center"><input class="bpm_homepage_widget" type="checkbox" name="'+value['name']+'" value="1" '+checked+'></div>');
                    html_line = html_line.concat('</div>');
                }
            });

            html_line = html_line.concat('<br><div class="bpm-row full-width">');
            html_line = html_line.concat('<div class="bpm-large-12 bpm-small-12 bpm-columns text-right"><a id="bpm_save_dropdown_button" onClick="bpmcontext.bpm_save_home_page_widgets();" class="button bpm-small  bpm_nodecoration" >Save</a>&nbsp;<a onClick="bpmcontext.bpm_close_generic()" class="button bpm-small  bpm_nodecoration" >Cancel</a></div>');
            html_line = html_line.concat('</div>');

            return html_line;
        }

        function bpm_save_home_page_widgets(){

            var widgets = [];
            var widget_list = '';

            jQuery('.bpm_homepage_widget').each(function(){
                if(!jQuery(this).is(':checked') ){
                    widget_list = widget_list.concat('&widget[]=' + this.name);
                }
            })

            var query_string = '&action=save_homepage_widgets&' + widget_list;

            jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + query_string, function (result) {

                bpm_settings['homepage_widgets'] = result.homepage_widgets;
                jQuery('#bpm_generic_reveal').foundation('reveal', 'close');
                bpmcontext.bpm_refresh_page_loading();
                bpmcontext.bpm_load_page(bpm_get_string + '&action=bpmcontext', 1);
            });
        }

        function bpm_close_generic(){
            jQuery('#bpm_generic_reveal').foundation('reveal', 'close');
        }

        this.bpm_manage_widget = function(selected_object) {

            var query_string = '&action=remove_homepage_widget&widget=' + selected_object.substring(13);

            jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/' + bpm_settings['bpm_api'] + '/bpmcontext_wordpress.php?callback=?', bpm_get_string + query_string, function (result) {

                jQuery('#' + selected_object).parent().remove();

                jQuery('#bpm_widget_area').masonry({
                    // options
                    itemSelector: '.grid-item',
                    columnWidth: '.grid-sizer',
                    gutter: '.gutter-sizer',
                    percentPosition: true
                });

                bpm_settings['homepage_widgets'] = result.homepage_widgets;
                jQuery('#bpm_generic_reveal').foundation('reveal', 'close');
            })
        }

        function bpm_update_qtip_display(){

            if(bpm_settings['qtip_display'] > 0){
                jQuery('#bpm_user_qtips_display').text('Turn Off Tooltips');
            }else{
                jQuery('#bpm_user_qtips_display').text('Turn On Tooltips');
            }
            bpmcontext.bpm_create_tips();

        }

        function bpm_info_action(selected_object){

            switch (selected_object.id) {
                case 'bpm_user_qtips_display':
                    var querystring = '&action=toggle_qtip_display';

                    jQuery.getJSON('https://' + bpm_settings['bpm_server']  + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + querystring, function (result) {

                        if(result){
                            bpm_settings['qtip_display'] = result.qtip_display;
                            bpmcontext.bpm_update_qtip_display();
                        }

                    });
                    break;

                case 'bpm_user_homepage_manager':
                    var content = bpmcontext.make_widget_list();
                    bpmcontext.bpm_open_generic_reveal('Home Page Options', content , false);
                    break;
                case 'bpm_infobox_edit':
                    bpmcontext.bpm_create_infobox_reveal();
                    jQuery('#bpm_edit_infobox').foundation('reveal', 'open');
                    break;
                case 'bpm_user_info_edit':
                    bpmcontext.bpm_create_user_page_reveal();
                    jQuery('#bpm_user_profile_save_message').hide();
                    jQuery('#bpm_edit_user_profile').foundation('reveal', 'open');
                    break;
                case 'bpm_user_info_topbar':
                    jQuery('#bpm_delegate_window').foundation('reveal', 'open');
                    break;
                case 'bpm_user_password_topbar':
                    jQuery('#bpm_confirm_password_html').html('<input id="bpm_confirm_password_field" type="password" size="20" /> <small id="bpm_password_error" class="error" style="display: none;">Passwords do not match</small>');
                    jQuery('#bpm_password_html').html('<input id="bpm_password_field" type="password" size="20" />');

                    jQuery('#bpm_password_field').val('');
                    jQuery('#bpm_confirm_password_field').val('');

                    //autocomplete="false" readonly onfocus="this.removeAttribute('readonly');"

                    jQuery('.bpm_confirm_password_field').keypress(function (e) {
                        if (e.which == 13) {
                            bpmcontext.bpm_save_password();
                            return false;
                        }
                    });

                    jQuery('.bpm_password_field').keypress(function (e) {
                        if (e.which == 13) {
                            bpmcontext.bpm_save_password();
                            return false;
                        }
                    });
                    jQuery('#bpm_cancel_password').show();

                    jQuery('#bpm_reset_password_window').foundation('reveal', 'open');
                    break;

            }
        }

        function bpm_create_infobox_reveal(){
            var html_line = '';
            var dd_values = [];

            html_line = html_line.concat('<div class="bpm-row">');
            html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns" style="height:.25em;">&nbsp;</div>');
            html_line = html_line.concat('</div>');
            jQuery.each(bpm_infobox_data, function(index, value) {

                var info_name = value['info_name'];
                if(bpm_trans_array['bpm_infobox_name_'+value['info_name'].replace(' ','_')]){
                    info_name = bpm_trans_array['bpm_infobox_name_'+value['info_name'].replace(' ','_')];
                }

                var this_value = '';
                var can_edit_class = 'bpm_read_only';
                if(value['editable']=='yes') can_edit_class = 'bpm_editable';
                if(value['info_value']) this_value = value['info_value'];
                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns text-left">' + info_name + '</div>');
                switch(value['info_type']){
                    case '1':
                        //text field
                        if(value['editable']=='yes'){
                            html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns ' + can_edit_class + '" "><input style="margin-bottom:.25em;" class="bpm_editing bpm_type_text" type="text" id="bpm_infobox_' + value['info_index'] + '" value="' + this_value + '" /></div>');
                        }else {
                            html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns ' + can_edit_class + '  text-left" id="bpm_infobox_' + value['info_index'] + '"><span id="bpm_field_value_' + value['info_index'] + '">' + this_value + '</span></div>');
                        }
                        break;
                    case '2':
                        //number field
                        if(value['editable']=='yes'){
                            html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns ' + can_edit_class + '" "><input style="margin-bottom:.25em;" class="bpm_editing bpm_type_number" type="text" id="bpm_infobox_' + value['info_index'] + '" value="' + this_value + '" /></div>');
                        }else {
                            html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns ' + can_edit_class + ' text-left" id="bpm_infobox_' + value['info_index'] + '"><span id="bpm_field_value_' + value['info_index'] + '">' + this_value + '</span></div>');
                        }
                        break;
                    case '3':
                        //date field
                        this_value = this_value.substr(0,10);
                        can_edit_class = '';
                        if(value['editable']=='yes') {
                            html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns bpm_editable" ><input readonly style="margin-bottom:.25em;" class="bpm_date_editable" type="text" id="bpm_infobox_' + value['info_index'] + '" value="' + this_value + '" /></div>');
                        }else{
                            html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns text-left" id="bpm_field_value_' + value['info_index'] + '">' + this_value + '</div>');
                        }
                        break;
                    case '6':
                        //dropdown field
                        var cell_data = value['cell_data'];

                        html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns ' + can_edit_class + '" id="bpm_infobox_' + value['info_index'] + '">');
                        if(value['editable']=='yes') {
                            html_line = html_line.concat('<select style="margin-bottom:.25em;" class="bpm_editing bpm_type_dropdown" type="text" id="bpm_current_edit_' + value['info_index'] + '">');

                            if(!value['info_value']) {
                                html_line = html_line.concat('<option value="0" selected>None</option>');
                            }else{
                                html_line = html_line.concat('<option value="0">None</option>');
                            }

                            html_line = html_line.concat(cell_data);
                            html_line = html_line.concat('</select>');
                        }else{
                            html_line = html_line.concat(this_value);
                        }
                        html_line = html_line.concat('</div>');
                        break;
                    case '12':
                        //read only field - page ID
                        html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns text-left" id="bpm_field_value_' + value['info_index'] + '">' + this_value + '</div>');
                        break;
                    case '17':
                        if(value['editable']=='yes'){
                            html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns ' + can_edit_class + '" "><input style="margin-bottom:.25em;" class="bpm_editing bpm_type_email" type="text" id="bpm_infobox_' + value['info_index'] + '" value="' + this_value + '" /></div>');
                        }else {
                            html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns ' + can_edit_class + '" id="bpm_infobox_' + value['info_index'] + '"><span id="bpm_field_value_' + value['info_index'] + '">' + this_value + '</span></div>');
                        }
                        break;
                    case '16':
                        //page links
                        var cell_data = '';
                        if(value['info_value']){
                            cell_data = '<option value="0">None</option>';
                            cell_data = cell_data.concat(value['cell_data']);
                            if(value['display_value']){
                                dd_values[value['info_index']] = value['display_value'];
                            }
                        }else{
                            cell_data = '<option value="0" selected>' + bpm_trans_array['bpm_lng_Select'] + ' ' + info_name + '</option>' + value['cell_data'];
                        }

                        html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns ' + can_edit_class + '" id="bpm_infobox_' + value['info_index'] + '">');

                        if(value['editable']=='yes') {
                            html_line = html_line.concat('<select style="margin-bottom:.25em;" class="bpm_editing bpm_type_dropdown" type="text" id="bpm_current_edit_' + value['info_index'] + '">');

                            html_line = html_line.concat(cell_data);
                            html_line = html_line.concat('</select>');
                        }else{
                            html_line = html_line.concat(value['real_name']);
                        }
                        html_line = html_line.concat('</div>');
                        break;
                    case '19':

                        //user list
                        var cell_data = value['info_value'];
                        html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns ' + can_edit_class + ' text-left" id="bpm_infobox_' + value['info_index'] + '">');
                        if(value['editable']=='yes') {
                            var dropdown_string = '';
                            var build_string = '';
                            var has_selected = 0;
                            if(bpm_infobox_data_users) {
                                jQuery.each(bpm_infobox_data_users, function (user_index, user_value) {
                                    //bpm_infobox_data_users
                                    if (user_value['user_page'] == cell_data) {
                                        has_selected = 1;
                                        build_string = build_string.concat('<option value="' + user_value['user_page'] + '" selected>' + user_value['user_name'] + '</option>');
                                    } else {
                                        build_string = build_string.concat('<option value="' + user_value['user_page'] + '">' + user_value['user_name'] + '</option>');
                                    }
                                    if (has_selected == 0) {
                                        dropdown_string = '<option value="0" selected></option>';
                                    }
                                    dropdown_string = dropdown_string.concat(build_string);
                                    build_string = '';
                                });
                            }

                            html_line = html_line.concat('<select  style="margin-bottom:.25em;" class="bpm_editing bpm_type_dropdown" type="text" id="bpm_current_edit_' + value['info_index'] + '">');
                            html_line = html_line.concat(dropdown_string);
                            html_line = html_line.concat('</select>');
                        }else{
                            html_line = html_line.concat(value['real_name']);
                        }
                        html_line = html_line.concat('</div>');
                        break;
                    case '20':
                        html_line = html_line.concat('<div class="bpm-small-6 bpm-large-6 bpm-columns text-left" id="bpm_field_value_' + value['info_index'] + '">' + value['cell_data'] + '</div>');
                        break;
                    default:

                        break;

                }
                html_line = html_line.concat('</div>');
            });

            html_line = html_line.concat('<br><br>');
            jQuery('#bpm_infobox_content').html(html_line);


            jQuery.each(dd_values, function(index, value) {
                jQuery('#bpm_current_edit_' + index + ' option').filter(function() {
                    //may want to use $.trim in here
                    return jQuery(this).text() == value;
                }).prop('selected', true);
            });

            var this_id = '';
            jQuery('.bpm_type_email').keypress(function (e) {
                this_id = jQuery(this).prop('id');

                if(!bpm_validateEmail(jQuery(this).val())){
                    jQuery(this).css('border', 'solid 1px red');
                    jQuery('#bpm_infobox_reveal_save').hide();
                }else{
                    jQuery(this).css('border', 'solid 1px black');
                    jQuery('#bpm_infobox_reveal_save').show();
                }
            });

            jQuery(".bpm_type_email").blur(function () {
                this_id = jQuery(this).prop('id');

                if(!bpm_validateEmail(jQuery(this).val())){
                    jQuery(this).css('border', 'solid 1px red');
                    jQuery('#bpm_infobox_reveal_save').hide();
                }else{
                    jQuery(this).css('border', 'solid 1px black');
                    jQuery('#bpm_infobox_reveal_save').show();
                }
            });


            jQuery( ".bpm_date_editable" ).datepicker({
                onSelect: function(selectedDate) {
                    this_id = jQuery(this).prop('id');
        //            jQuery('#bpm_field_value_' + this_id.substr(17)).text(selectedDate).show();
                }
            });

        }

        function bpm_save_infobox(){

            jQuery('#bpm_user_infobox_save_message').show();
            var trans_string = '&action=save_infobox';

            jQuery.each(bpm_infobox_data, function(index, value) {
                if(value['editable']=='yes') {
                    trans_string = trans_string.concat('&infoboxid[]=' + value['info_index']);
                    var infoboxnewvalue = jQuery('#bpm_infobox_' + value['info_index']).val();
                    switch(value['info_type']) {
                        case '3':
                            infoboxnewvalue = infoboxnewvalue.substr(6, 4) + '-' + infoboxnewvalue.substr(0, 2) + '-' + infoboxnewvalue.substr(3, 2) + 'T12:00:00.000Z';
                            trans_string = trans_string.concat('&type[]=dhxCalendar');
                            break;
                        case '16':
                        case '6':
                        case '19':
                            infoboxnewvalue = jQuery('#bpm_infobox_' + value['info_index'] + ' option:selected').val();
                            if(infoboxnewvalue=='0') infoboxnewvalue = '';
                            trans_string = trans_string.concat('&type[]=data');
                            break;
                        default:
                        trans_string = trans_string.concat('&type[]=data');
                            break;
                    }
                    trans_string = trans_string.concat('&infoboxnewvalue[]=' + encodeURIComponent(infoboxnewvalue));
                }
            });

            jQuery.getJSON('https://' + bpm_settings['bpm_server']  + '/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', bpm_get_string + trans_string, function (result) {
                if(result){

                    bpm_dashboard[5] = [];
                    if(result.TRANSTATUS) {
                        if(result.TRANSTATUS['reloadpage']) {
                            bpmcontext.bpm_load_page(bpm_get_string + '&action=bpmcontext', 1);
                        }
                    }else{
                        bpmcontext.bpm_create_infobox(result);
                        bpmcontext.bpm_create_change_log(result);
                        jQuery('#bpm_edit_infobox_menu').hide();
                        bpmcontext.bpm_update_dashboard();
                    }
                }
                jQuery('#bpm_user_infobox_save_message').hide();
                jQuery('#bpm_edit_infobox').foundation('reveal', 'close');
            });
        }

        function bpm_cancel_password(){
            jQuery('#bpm_reset_password_window').foundation('reveal', 'close');
        }

        function bpm_set_right_content_options(this_content) {
            jQuery('#bpm_right_talat').hide();

        }

        function bpm_show_talat_messages(this_content) {

            var html_line = '';
            var message_count = 0;

            jQuery('#bpm_talat_menu').hide();
            jQuery('.bpm_talat_message_header').css('border','');

            jQuery.each(this_content.TALAT_MESSAGES,function(index, value) {

                if(value['recipients']) {
                    var recipients = '';
                    var reply_all = '';
                    jQuery.each(value['recipients'], function (index, value) {
                        if (recipients) {
                            recipients = recipients.concat(', ');
                            reply_all = reply_all.concat(',');
                        } else {
                            recipients = 'Also Received: ';
                        }
                        reply_all = reply_all.concat(value['user_id'])
                        recipients = recipients.concat(value['real_name']);
                    });
                }

                if(html_line){
                    html_line = html_line.concat('<hr>');
                }

                html_line = html_line.concat('<div id="bpm_talat_message_'+value['id']+'" class="bpm_talat_message_header" style="width:100%">');
                html_line = html_line.concat('<div class="bpm-row">');
                html_line = html_line.concat('<div class="bpm-small-12 bpm-large-12 bpm-columns"><span id="bpm_talat_message_text_'+value['id']+'" class="bpm_talat_message">' + value['message'] + '</span></div>');
                html_line = html_line.concat('</div><br>');

                var send_date = '';
                if(value['send_date_2']) send_date = value['send_date_2'].substr(5,2) + '/' + value['send_date_2'].substr(8,2) + '/' + value['send_date_2'].substr(2,2);
                html_line = html_line.concat('<div class="bpm-row full-width">');
                html_line = html_line.concat('<div class="bpm-small-8 bpm-large-8 bpm-columns"><span style="padding-left:1em; font-size: .75em;">' + value['real_name'] + '</span></div>')
                html_line = html_line.concat('<div class="bpm-small-4 bpm-large-4 bpm-columns text-right" style="font-size: .75em;">' + send_date + '</div>')
                html_line = html_line.concat();
                html_line = html_line.concat('</div>');

                if(value['recipients']){

                    html_line = html_line.concat('<div class="bpm-row full-width">');
                    html_line = html_line.concat('<div id="bpm_talat_recip_list" class="bpm-small-12 bpm-large-12 bpm-columns bpm_talat_message">' + recipients + '</div>')
                    html_line = html_line.concat('<div class="hide" id="bpm_talat_reply_all_'+value['id']+'">'+reply_all+'</div>');
                    html_line = html_line.concat('<div class="hide" id="bpm_talat_reply_to_'+value['id']+'">'+value['uad_user_id']+'</div>');
                    html_line = html_line.concat('</div>');
                }
                html_line = html_line.concat('</div>');
                message_count = 1;
            });

            jQuery('#right_acc_0').html(html_line);

            if(message_count==0) jQuery('#bpm_right_talat').hide();

            jQuery('.bpm_talat_message_header').click(function() {
                jQuery('.bpm_talat_message_header').css('border','');
                jQuery('#bpm_talat_menu').show();
                bpm_current_message_id = jQuery(this).prop('id').substr(18);
                jQuery(this).css('border','solid 1px green');
            });
        }

        function bpm_talat_dismiss(message_id, reply_page_id){

            var querystring = 'domain=' + bpm_current_domain + "&action=dismiss_message&pageid=" + reply_page_id + "&message_id=" + message_id;

            jQuery.getJSON('https://'+bpm_settings['bpm_server'] +'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function(result) {
                jQuery('#bpm_talat_menu').hide();
                jQuery('.bpm_talat_message_header').css('border','');
                jQuery('#bpm_talat_message_item_'+message_id).hide();

                if(result.NOTIFICATIONS) {
                    bpm_dashboard[12] = result.NOTIFICATIONS;

                    if (bpm_dashboard[12]) {
                        var total_messages = bpm_dashboard[12].wfdocs.length;
                        if(bpm_dashboard[12].WORKFLOW_MESSAGES) var talat_messages = bpm_dashboard[12].WORKFLOW_MESSAGES.length;
                        if(talat_messages) {
                            jQuery('#bpm_talat_badge').text(talat_messages);
                            jQuery('#left_talat_messages').show();
                        }else{
                            jQuery('#left_talat_messages').hide();
                            jQuery('#bpm_left_widget_window').foundation('reveal', 'close');

                        }
                    } else {
                        var total_messages = 0;
                        jQuery('#left_talat_messages').hide();
                    }
                    jQuery('#bpm_notification_badge').text(total_messages);
                    jQuery('#bpm_subscription_badge').text(bpm_dashboard[3].length);
                }

            });
        }

        function bpm_talat_reply(reply_type, message_id, reply_page_id, try_count){

            if(try_count > 1){
                return;
            }

            if(reply_page_id != bpm_pageid && !bpm_dashboard[98]){
                //reply from different page requires new reply to list
                var querystring = 'domain=' + bpm_current_domain + "&action=get_talat_users&pageid=" + reply_page_id;
                jQuery.getJSON('https://'+bpm_settings['bpm_server'] +'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function(result){
                    bpm_dashboard[98] = result.TALATALL;
                    bpmcontext.bpm_talat_reply(reply_type, message_id, reply_page_id, try_count++);
                });

            }else{

                var user_list = [];
                if (bpm_dashboard[98]) {
                    user_list = bpm_dashboard[98];
                } else {
                    user_list = bpm_dashboard[99];
                }

                bpmcontext.bpm_config_talat(user_list);
                var reply_list = [];

                jQuery('#bpm_edit_TALAT_text').val('\n\n' + jQuery('#bpm_talat_message_text_' + message_id).text());

                var reply_to = jQuery('#bpm_talat_reply_to_' + message_id).text();

                if (reply_type == 1) {
                    //reply all
                    var all_list = jQuery('#bpm_talat_reply_all_' + message_id).text();
                    reply_list = all_list.split(",");
                }
                reply_list.push(reply_to);

                jQuery.each(reply_list, function (i, val) {

                    jQuery.each(user_list, function (i, value) {

                        if (val == value.user_id) {
                            var friend = value.user_id,
                                span = jQuery("<span>").text(value.real_name).prop('id', 'bpm_talat_user_' + value.user_id).addClass("bpm_talat_user"),
                                a = jQuery("<a>").addClass("remove").attr({
                                    onclick: "bpm_remove_talat_user(" + value.user_id + ")",
                                    title: "Remove " + value.real_name
                                }).text(" x ").appendTo(span);
                            span.insertBefore("#bpm_talat_list");
                            bpm_talat_list.push(value.user_id);
                        }
                    });
                });
                bpm_reply_talat_page_id = reply_page_id;
                bpm_reply_talat_message_id = message_id;
                bpm_dashboard[98] = null;

                if(bpm_settings['bpm_has_shared'] == 1){
                    jQuery('#bpm_talat_external').show();
                }else{
                    jQuery('#bpm_talat_external').hide();
                }

                jQuery('#bpm_talat_window').foundation('reveal', 'open');
            }

        }

        function bpm_config_talat(user_list){
            var suggestions = [];
            bpm_talat_list = [];
            jQuery('.bpm_talat_user').remove();
            jQuery('#bpm_talat_alert').hide();


            jQuery.each(user_list, function(i, val) {
                suggestions.push({ label: val.real_name  + ' ', value: val.user_id });

            });

            jQuery('#bpm_talat_to').css('z-index','1006');
            jQuery("#bpm_talat_to").autocomplete({

                //define callback to format results
                source: suggestions,
                appendTo: '#bpm_form_talat',

                //define select handler
                select: function(e, ui) {

                    var add_item = 0;
                    jQuery(bpm_talat_list).each(function(index, value){
                        if (value === ui.item.value) {
                            add_item = 1;
                        }
                    });

                    if(add_item==0) {
                        var friend = ui.item.value,
                            span = jQuery("<span>").text(ui.item.label).prop('id', 'bpm_talat_user_' + ui.item.value).addClass("bpm_talat_user"),
                            a = jQuery("<a>").addClass("remove").attr({
                                onclick: "bpm_remove_talat_user(" + ui.item.value + ")",
                                title: "Remove " + ui.item.label
                            }).text(" x ").appendTo(span);
                        span.insertBefore("#bpm_talat_list");
                        bpm_talat_list.push(ui.item.value);
                    }

                },
                close: function(){
                    jQuery("#bpm_talat_to").val('');
                },
                change: function() {
                    jQuery("#bpm_talat_to").val("").css("top", 2);
                }
            });


        }

        function bpm_go_to_dashboard(){

            window.open(bpm_params.login_url, '_blank');
        }

        function bpm_go_to_new_account(user_email, admin){
            if(admin){
                if(jQuery('#bpm_admin_settings_create_account').is(':visible')) {
                    jQuery('#bpm_admin_settings_create_account').hide();
                    jQuery('#bpm_admin_submit_create_account').prop('value', 'Create New Account');
                }else {
                    jQuery('#bpm_new_account_content').remove();
                    jQuery('#bpm_new_acct_password_html_admin').html('<input id="bpm_password_field" class="bpm_new_account_field" type="password" />');
                    jQuery('#bpm_admin_settings_create_account').show();
                    jQuery('#bpm_admin_submit_create_account').prop('value', 'Close New Account');
                }

                jQuery('#bpm_create_account_process_button_admin').on('click', Foundation.utils.debounce(function(e){
                    // Handle Click
                    if(!bpm_settings['new_acct_processing']) {
                        bpm_settings['new_acct_processing'] = 1;
                        jQuery('#bpm_new_account_content_exit').hide();
                        jQuery('#bpm_create_account_process_button').attr('disabled', 'disabled');
                        jQuery('#bpm_admin_new_create_account').attr('disabled', 'disabled');
                        bpmcontext.bpm_create_account_process();
                    }
                }, 1000, true));
            }else {
                window.open(bpm_params.login_url + '?newacct=' + user_email, '_blank');
            }
        }

        function bpm_admin_login(){
            if(jQuery('#bpm_admin_settings_login_form').is(':visible')) {
                jQuery('#bpm_admin_settings_login_form').hide();
                jQuery('#bpm_admin_submit_login_account').prop('value', 'Login');
            }else{
                jQuery('#bpm_admin_settings_login_form').show();
                jQuery('#bpm_admin_submit_login_account').prop('value', 'Close Login');
                jQuery('#bpm_admin_settings_reset_password_form').hide();
                jQuery('#bpm_admin_submit_lost_password').text('Lost Password');
            }
        }

        function bpm_admin_lost_password(){
            if(jQuery('#bpm_admin_settings_reset_password_form').is(':visible')) {
                jQuery('#bpm_admin_settings_reset_password_form').hide();
                jQuery('#bpm_admin_submit_lost_password').text('Lost Password');
            }else{
                jQuery('#bpm_admin_settings_reset_password_form').show();
                jQuery('#bpm_admin_submit_lost_password').text('Hide Lost Password');
                jQuery('#bpm_admin_settings_login_form').hide();
                jQuery('#bpm_admin_submit_login_account').prop('value', 'Login');
            }
        }
        function set_up_admin_settings_page(){

            if(bpm_settings['bpm_login_status']) {
                //setup contact us form management
                if (bpm_params.has_contact_us) {

                    var api_key = '';
                    var site_id = '';

                    jQuery.each(bpm_contact_us_keys,function(this_index, this_value) {
                        api_key = this_index;
                        return true;
                    });

                    var querystring = 'action=get_contact_us_info&apikey='+api_key+'&site_id='+bpm_params.current_site;

                    jQuery.getJSON('https://'+bpm_settings['bpm_server']+'/'+bpm_settings['bpm_api']+'/bpmcontext_wordpress.php?callback=?', querystring, function(result) {
                        //if user is admin on more than one contexts then setup context list else set context id in bpm_settings

                        bpm_settings['bpm_admin_contact_us_selected'] = 0;
                        bpm_settings['bpm_admin_contact_us_selected_info'] = result;

                        //setup forms list
                        bpmcontext.bpm_admin_add_contact_us_forms();

                        //for each installed form, add a form object
                        jQuery('.bpm_contact_us_add_form').click(jQuery.debounce(250, function(e) {
                            jQuery('#bpm_api_connected_alert').hide();
                            bpmcontext.bpm_admin_add_form(999999);
                        }));

                        jQuery('.bpm-admin-api-button').click(jQuery.debounce(1000, function(e) {
                            bpmcontext.bpm_admin_get_contact_us_api(this);
                        }));

                        jQuery('#bpm_admin_has_contact_forms').show();
                    });
                } else {
                    var plugin_list = '';
                    jQuery.each(bpm_contact_us_list,function(index, value) {
                        plugin_list = plugin_list.concat('<li><a href="'+value['url']+'" target="_blank" >'+value['name']+'</a></li>');
                    });
                    jQuery('#bp_admin_approved_plugin_list').html(plugin_list);
                    jQuery('#bpm_admin_no_contact_forms').show();
                }
            }else{
                jQuery('#bpm_admin_contact_forms_not_logged_in').show();
            }

            jQuery(document).foundation();

        }

        function bpm_admin_add_contact_us_forms(selected_account){

            var context_list = [];
            var item_selected = '';
            var first_context = 0;
            var no_data = 1;
            bpm_settings['bpm_contact_us_form_count'] = 0;
            bpm_settings['contact_us_api_keys'] = [];
            bpm_settings['bpm_contact_us_workspaces'] = [];

            jQuery('#bpm_admin_contact_us_form_item_0').html('');
            jQuery('#bpm_admin_contact_us_form_list').html('');
            jQuery('#bpm_api_connected_alert').hide();

            if(selected_account) item_selected = selected_account;

            jQuery.each(bpm_settings['bpm_admin_contact_us_selected_info'],function(index, value) {

                //create context list
                context_list.push({val: value['account_info']['id'], text: value['account_info']['name']});

                if(!item_selected){
                    item_selected =  value['account_info']['id'];
                    bpm_settings['bpm_contact_us_users'] = value['users'];
                    if(value['workspaces']) bpm_settings['bpm_contact_us_workspaces'] = value['workspaces'];
                }

                if(value['data']) {

                    if(!first_context && !selected_account) {

                        jQuery.each(value['data'],function(form_index, form_value) {
                            var has_key = false;
                            if(form_value['api_key']){
                                jQuery.each(bpm_contact_us_keys,function(this_index, this_value) {
                                    if(this_index == form_value['api_key']) has_key = true;
                                });

                                if(has_key){
                                    no_data = 0;
                                    item_selected = value['account_info']['id'];
                                    first_context = 1;
                                    bpm_settings['bpm_contact_us_users'] = value['users'];
                                    bpm_settings['bpm_contact_us_workspaces'] = value['workspaces'];
                                    bpmcontext.bpm_admin_add_form(bpm_settings['bpm_contact_us_form_count'], form_value);
                                }
                            }
                        });
                    }
                    if(selected_account && selected_account == value['account_info']['id']){

                        jQuery.each(value['data'],function(form_index, form_value) {
                            var has_key = false;
                            if(form_value['api_key']){
                                jQuery.each(bpm_contact_us_keys,function(this_index, this_value) {
                                    if(this_index == form_value['api_key']){
                                        has_key = true;
                                    }

                                });

                                if(has_key){
                                    no_data = 0;
                                    item_selected = value['account_info']['id'];
                                    first_context = 1;
                                    bpm_settings['bpm_contact_us_users'] = value['users'];
                                    bpm_settings['bpm_contact_us_workspaces'] = value['workspaces'];
                                    bpmcontext.bpm_admin_add_form(bpm_settings['bpm_contact_us_form_count'], form_value);
                                }
                            }
                        });
                    }
                }

                if(selected_account == value['account_info']['id']){
                    if(value['users']) bpm_settings['bpm_contact_us_users'] = value['users'];
                    if(value['workspaces']) bpm_settings['bpm_contact_us_workspaces'] = value['workspaces'];
                }
            });

            if(no_data) bpmcontext.bpm_admin_add_form(0, '');

            context_list.sort(bpmcontext.bpm_dynamicSort('text'));

            jQuery('#bpm_context_list').html(bpmcontext.bpm_admin_create_dropdown('bpm_context_list_contact_us', 'bpm_context_list_contact_us', context_list, item_selected, '', 'bpm_on_change_contact_us_account_list'));

        }

        function bpm_dynamicSort(property) {
            var sortOrder = 1;
            if(property[0] === "-") {
                sortOrder = -1;
                property = property.substr(1);
            }
            return function (a,b) {
                var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
                return result * sortOrder;
            }
        }

        function bpm_on_change_contact_us_account_list(){
            bpmcontext.bpm_admin_add_contact_us_forms(jQuery('#bpm_context_list_contact_us').val());
        }


        function bpm_admin_add_form(item_id, value){

            if(bpm_settings['contact_is_processing'] == 1) return;

            bpm_settings['contact_is_processing'] = 1;

            if(!value) value = [];

            if(item_id == 999999) item_id = bpm_settings['bpm_contact_us_form_count'];

            var this_item_id = '';

            if(item_id == 0 ) {
                bpm_settings['bpm_contact_us_form_count'] = 0;
                jQuery('#bpm_admin_contact_us_form_item_0').html(jQuery('#bpm_add_contact_us_form_item').html());
                this_item_id = '#bpm_admin_contact_us_form_item_0';

            }else{
                //add a div with a new form object to the list
                jQuery('#bpm_admin_contact_us_form_list').append('<div id="bpm_admin_contact_us_form_item_' + bpm_settings['bpm_contact_us_form_count'] + '"></div>');
                jQuery('#bpm_admin_contact_us_form_item_' + bpm_settings['bpm_contact_us_form_count']).html(jQuery('#bpm_add_contact_us_form_item').html());
                this_item_id = '#bpm_admin_contact_us_form_item_' + bpm_settings['bpm_contact_us_form_count'];
            }

            if(value['api_key']) bpm_settings['contact_us_api_keys'][item_id] = value['api_key'];

            bpm_settings['contact_us_form_update_'+item_id] = 0;

            //setup plugin source dropdown
            jQuery(this_item_id +' .bpm-admin-contact-us-plugins').html(bpmcontext.bpm_admin_get_plugin_dropdown(value, item_id, this_item_id));

            //setup api key button
            jQuery(this_item_id +' .bpm-admin-api-button').html(bpmcontext.bpm_admin_get_set_api_button(value, item_id, this_item_id));

            //setup contact form to manage - wordpress storage
            jQuery(this_item_id +' .bpm-admin-contact-us-contact-form-to-manage').html(bpmcontext.bpm_admin_get_form_to_manage(value, item_id, this_item_id));

            //setup destination workspace
            jQuery(this_item_id +' .bpm-admin-contact-us-dest-workspace').html(bpmcontext.bpm_admin_get_form_dest_ws_dropdown(value, item_id, this_item_id));

            //setup parent page
            jQuery(this_item_id +' .bpm-admin-contact-us-parent-page').html(bpmcontext.bpm_admin_get_form_parent_page_dropdown(value, item_id, this_item_id));

            //setup workflow initiatior
            jQuery(this_item_id +' .bpm-admin-contact-us-workflow-initiator').html(bpmcontext.bpm_admin_get_form_initiator_dropdown(value, item_id, this_item_id));

            //setup workflow reciepeint
            jQuery(this_item_id +' .bpm-admin-contact-us-workflow-assignee').html(bpmcontext.bpm_admin_get_form_assignee_dropdown(value, item_id, this_item_id));

            //setup enable submit to go to BPMContext - wordpress storage
            jQuery(this_item_id +' .bpm-admin-contact-us-enabled').html(bpmcontext.bpm_admin_get_is_enabled_checkbox(value, item_id, this_item_id));

            //setup already used form error
            jQuery(this_item_id +' .bpm-admin-contact-us-error').html(bpmcontext.bpm_admin_get_is_error(item_id));

            //setup form email field
            jQuery(this_item_id +' .bpm-admin-contact-us-workflow-email-field').html(bpmcontext.bpm_admin_get_form_fields_dropdown( item_id, this_item_id , 'email'));

            //setup form subject field
            jQuery(this_item_id +' .bpm-admin-contact-us-workflow-subject-field').html(bpmcontext.bpm_admin_get_form_fields_dropdown( item_id, this_item_id , 'subject'));

            //setup form fields
            var selected_form = jQuery('#bpm_get_form_to_manage_id_'+item_id).val();
            if(selected_form){
                bpm_build_contact_us_editor('#bpm_admin_contact_us_form_item_'+item_id , item_id);
            }else{
                bpm_set_contact_forms_click();
            }

            //add active overlay
            jQuery(this_item_id +' .bpm-admin-overlay').attr('id', 'bpm_admin_overlay_' + item_id);
            jQuery(this_item_id +' .bpm-admin-confirmation-message').attr('id', 'bpm_admin_confirmation_message_' + item_id);

            bpm_settings['bpm_contact_us_form_count']++;

            bpm_settings['contact_is_processing'] = 0;

            jQuery('.bpm-admin-api-button').click(jQuery.debounce(1000, function(e) {
                bpm_admin_get_contact_us_api(this);
                jQuery('#bpm_api_connected_alert').hide();
            }));

            bpm_admin_check_contact_us_form({id: this_item_id});

        }

        function bpm_set_contact_forms_click(){
            jQuery('.bpm_contact_us_form_field').click(function(){
                //check if all data are present and if so make button save either Get API or Update API or Delete API Key
                var this_item = jQuery(this).prop('id');
                var id_parts = this_item.split('_');
                var this_id = id_parts[id_parts.length - 1];
                bpm_settings['contact_us_form_update_'+this_id] = 1;
                bpmcontext.bpm_admin_check_contact_us_form(this);
                jQuery('#bpm_api_connected_alert').hide();
            });
            jQuery('.bpm_contact_us_form_field_settings').click(function(){
                var this_item = jQuery(this).parent().parent().parent().parent().parent().parent().prop('id');
                var id_parts = this_item.split('_');
                var this_id = id_parts[id_parts.length - 1];
                bpmcontext.bpm_contact_form_make_savable(this_id);

            });
        }

        function bpm_contact_form_make_savable(this_id){
            jQuery('#bpm_admin_confirmation_message_' + this_id).text('').hide();
            jQuery('#bpm_get_api_key_' + this_id).removeAttr('disabled');
            if( ! jQuery('#bpm-demo-button').length) {
                jQuery(window).bind('beforeunload', function () {
                    return 'Are you sure you want to leave?';
                });
            }
        }

        function bpm_admin_get_form_fields_dropdown(item_id, this_item_id , field_name){

            var selected_plugin = jQuery('#bpm_get_plugin_id_'+item_id).val();
            var selected_form = jQuery('#bpm_get_form_to_manage_id_'+item_id).val();
            var field_list = [];
            var email_selected = '';
            var subject_selected = '';

            if(selected_form) {
                jQuery.each(bpm_contact_us, function (this_index, this_value) {
                    if (this_value['slug'] == selected_plugin) {
                        jQuery.each(this_value['forms'], function (form_index, form_value) {
                            if(form_index == selected_form) {
                                jQuery.each(form_value.fields, function (this_form_index, this_form_value) {
                                    if(this_form_value.is_email) email_selected = this_form_value.name;
                                    if(this_form_value.is_subject) subject_selected = this_form_value.name;
                                    var this_display = this_form_value.name;
                                    if(this_form_value.label) this_display = this_display.concat(' - ('+this_form_value.label+')');
                                    if(this_display.toLowerCase().indexOf('email') > -1 && !email_selected) email_selected = this_form_value.name;
                                    if(this_display.toLowerCase().indexOf('subject') > -1 && !subject_selected) subject_selected = this_form_value.name;
                                    if(this_form_value.type == 'text' || this_form_value.type == 'email') field_list.push({val: this_form_value.name, type: this_form_value.type , text: this_display, info_name: this_form_value.infobox_name, info_id:this_form_value.infobox_id});
                                });
                            }
                        });
                    }
                });
            }

            var no_fields = 'No Fields Found';
            if(field_list) no_fields = '';

            if(field_name == 'email') {
                var dropdown = bpmcontext.bpm_admin_create_dropdown('bpm-admin-contact-us-email-field-data', 'bpm_admin_contact_us_email_field_' + item_id, field_list, email_selected, no_fields, 'bpm_admin_update_parent_page_list');
                jQuery(this_item_id +' .bpm-admin-contact-us-workflow-email-field').html(dropdown);
            }else{
                var dropdown = bpmcontext.bpm_admin_create_dropdown('bpm-admin-contact-us-subject-field-data', 'bpm_admin_contact_us_subject_field_' + item_id, field_list, subject_selected, no_fields, 'bpm_admin_update_parent_page_list');
                jQuery(this_item_id +' .bpm-admin-contact-us-workflow-subject-field').html(dropdown);
            }

        }

        function bpm_admin_check_contact_us_form(this_item){

            var id_parts = this_item.id.split('_');
            var this_id = id_parts[id_parts.length - 1];
            var enabled = 0;
            var action = 'Get API Key';
            var this_item_id = '#bpm_admin_contact_us_form_item_' + this_id;

            //check plugin
            var plugin_id = jQuery('#bpm_get_plugin_id_'+this_id).val();

            //check form to manage
            var selected_form = jQuery('#bpm_get_form_to_manage_id_'+this_id).val();

            //check destination workspace
            var template_id = jQuery('#bpm_admin_contact_us_dest_workspace_'+this_id).val();

            //check page parent
            var parent_page = jQuery('#bpm_admin_contact_us_parent_page_'+this_id).val();

            //check workflow initiator
            var user_id = jQuery('#bpm_admin_contact_us_workflow_initiator_'+this_id).val();

            //check enable
            if (jQuery('#bpm_get_is_enabled_' + this_id).is(':checked')) enabled = 1;

            //check update or get
            if (bpm_settings['contact_us_api_keys'][this_id]) action = 'Update API Key';

            if(enabled == 0 && action =='Update API Key'){
                action = "Delete API Key";
            }

            jQuery('#bpm_get_api_key_' + this_id).text(action);

            var do_not_update = false;
            if(selected_form == 0 && bpm_settings['contact_us_form_update_' + this_id]){
                do_not_update = true;
            }

            if(plugin_id) {
                if (selected_form > 0 && plugin_id.length > 1 && template_id > 0 && parent_page > 0 && user_id > 0 && !bpm_settings['contact_us_form_update_' + this_id]) {

                    jQuery('#bpm_get_api_key_' + this_id).attr('disabled', 'disabled');
                    jQuery(window).unbind('beforeunload');
                } else {
                    jQuery('#bpm_admin_confirmation_message_' + this_id).text('').hide();
                    jQuery('#bpm_get_api_key_' + this_id).removeAttr('disabled');

                    if(bpm_settings['contact_us_form_update_' + this_id]) {
                        if( ! jQuery('#bpm-demo-button').length) {
                            jQuery(window).bind('beforeunload', function () {
                                return 'Are you sure you want to leave?';
                            });
                        }
                    }
                }
            }

            if(do_not_update){
                jQuery('#bpm_get_api_key_' + this_id).attr('disabled', 'disabled');
                if(bpm_settings['contact_us_form_update_' + this_id]){
                    if( ! jQuery('#bpm-demo-button').length) {
                        jQuery(window).bind('beforeunload', function () {
                            return 'Are you sure you want to leave?';
                        });
                    }
                }
            }
        }

        function bpm_build_contact_us_editor(object_id , item_id){

            var template_id = jQuery('#bpm_admin_contact_us_dest_workspace_'+item_id).val();
            bpm_settings['contact_fields_open'] = 0;


            var html_line = '';
            html_line = html_line.concat('<div class="row">');
            html_line = html_line.concat('<div class="large-4 columns bpm_bold">Form Field - ID (Label)</div>');
            html_line = html_line.concat('<div class="large-4 columns bpm_bold">infoboxes</div>');
            html_line = html_line.concat('<div class="large-2 columns bpm_bold text-center">Visible?</div>');
            html_line = html_line.concat('<div class="large-2 columns bpm_bold text-center">Ignore?</div>');
            html_line = html_line.concat('</div>');

            var selected_plugin = jQuery('#bpm_get_plugin_id_'+item_id).val();
            var selected_form = jQuery('#bpm_get_form_to_manage_id_'+item_id).val();
            var field_list = [];
            var email_selected = '';
            var subject_selected = '';
            var textareas = [];

            if(selected_form) {

                jQuery.each(bpm_contact_us, function (this_index, this_value) {
                    if (this_value['slug'] == selected_plugin) {
                        jQuery.each(this_value['forms'], function (form_index, form_value) {
                            if(form_index == selected_form) {
                                if(form_value.textarea) {
                                    jQuery.each(form_value.textarea, function (this_form_index, this_form_value) {
                                        textareas.push(this_form_value.name);
                                    });
                                }

                                jQuery.each(form_value.fields, function (this_form_index, this_form_value) {

                                    if(this_form_value.type != 'submit') {
                                        var ignore_checked = '';
                                        var visible_checked = 'checked';
                                        if(this_form_value.type == 'hidden' || this_form_value.ignore){
                                            ignore_checked = 'checked';
                                            visible_checked = 'disabled';
                                        }else{
                                            if(this_form_value.visible && this_form_value.visible != 1){
                                                visible_checked = '';
                                            }
                                        }

                                        var this_display = this_form_value.name;

                                        if (this_form_value.label) this_display = this_display.concat(' - (' + this_form_value.label + ')');


                                        //create infobox dropdown
                                        var infobox_list = [];
                                        var item_selected = '';
                                        var add_item_id = '';
                                        var add_item_name = '';
                                        jQuery.each(bpm_settings['bpm_contact_us_workspaces'], function (template_index, template_value) {
                                            if(template_value.template_index == template_id){
                                                jQuery.each(template_value.infoboxes, function (infobox_index, infobox_value) {
                                                    infobox_list.push({val:infobox_value.info_index , text:infobox_value.ib_name});
                                                    if(this_form_value.infobox_name == infobox_value.ib_name){
                                                        //item already mapped
                                                        item_selected = infobox_value.info_index;
                                                        add_item_id = '';
                                                    }else{
                                                        //item not mapped
                                                        if(this_form_value.name == infobox_value.ib_name){
                                                            //this matches
                                                            item_selected = infobox_value.info_index;
                                                            add_item_id = '';
                                                        }else{
                                                            //no match flag to add later
                                                            add_item_id = this_form_value.name;
                                                            add_item_name = this_form_value.name;
                                                            if(!item_selected) item_selected = this_form_value.name;
                                                        }
                                                     }
                                                });
                                            }
                                        });

                                        if(add_item_id){
                                            infobox_list.push({val:add_item_id , text:add_item_name});
                                        }

                                        var this_item_id = selected_form + '_' + add_item_id;
                                        var dropdown = bpm_admin_create_dropdown('bpm_form_infobox_dd_'+this_item_id, 'bpm_form_infobox_dd_'+this_item_id, infobox_list, item_selected, '', '', 'bpm_contact_us_form_field_settings');
                                        var infobox_editor = '<input type="text" id="bpm_form_infobox_edit_field_name_'+this_item_id+'" class="bpm-hide" value="'+add_item_name+'">';
                                        var button = '<a onClick="bpmcontext.bpm_edit_infobox_name(this)" id="bpm_form_infobox_open_edit_field_'+this_item_id+'"><span class="fa fa-pencil "></span></a><a onClick="bpmcontext.bpm_save_edit_infobox_name(this)" id="bpm_form_infobox_open_save_field_'+this_item_id+'" class="bpm-hide"><span class="fa fa-save"></span></a>';
                                        this_display = this_display + '<div class="bpm-contact-form-field bpm-hide" data-field_id="'+add_item_id+'" data-page_id="'+selected_form+'" data-id=' + this_item_id + '>'+add_item_name+'</div>';

                                        html_line = html_line.concat('<div class="row">');
                                        html_line = html_line.concat('<div class="large-4 columns">' + this_display + '</div>');
                                        html_line = html_line.concat('<div class="large-3 columns">'+ dropdown + infobox_editor+'</div>');
                                        html_line = html_line.concat('<div class="large-1 columns">'+ button + '</div>');
                                        html_line = html_line.concat('<div class="large-2 columns text-center"><input class="bpm_contact_us_form_field_settings" type="checkbox" id="bpm_form_infobox_visible_'+this_item_id+'" value="1" '+visible_checked+'></div>');
                                        html_line = html_line.concat('<div class="large-2 columns text-center"><input onchange="bpm_contact_form_field_ignore(this)" type="checkbox" id="bpm_form_infobox_ignore_'+this_item_id+'" value="1" '+ignore_checked +'></div>');
                                        html_line = html_line.concat('</div>');

                                    }
                                });
                            }
                        });
                    }
                });
            }

            jQuery.each(textareas, function (index, value) {
                html_line = html_line.concat('<div class="bpm-contact-form-textarea bpm-hide" data-field_id="'+value+'"></div>')
            });

            jQuery(object_id + ' .bpm_contact_us_field_editor_content').html(html_line);
            bpmcontext.bpm_set_contact_forms_click();
        }

        function bpm_expand_contact_us_editor(this_item){

            var object_id = jQuery(this_item).parent().parent().parent().parent().parent().attr('id');

            if(bpm_settings['contact_fields_open']){
                jQuery('#' + object_id + ' .bpm_contact_us_field_editor_content').hide();
                bpm_settings['contact_fields_open'] = 0;
            }else{
                jQuery('#' + object_id + ' .bpm_contact_us_field_editor_content').show();
                bpm_settings['contact_fields_open'] = 1;
            }

        }

        function bpm_contact_form_field_ignore(this_item_id){

            var this_item_id = this_item_id.id;
            var parts = this_item_id.split('_');

            var open_item = '';
            for(var i = 4;i<parts.length;i++){
                open_item = open_item.concat(parts[i] + '_');
            }
            open_item = open_item.substring(0, open_item.length - 1);

            if (jQuery('#'+this_item_id).attr("checked")) {
                // checked
                jQuery('#bpm_form_infobox_visible_'+open_item).attr('checked', false).attr('disabled', 'disabled');

            }else{
                jQuery('#bpm_form_infobox_visible_'+open_item).removeAttr('disabled')
            }

            var this_item = jQuery('#'+this_item_id).parent().parent().parent().parent().parent().parent().prop('id');
            var id_parts = this_item.split('_');
            var this_id = id_parts[id_parts.length - 1];
            bpmcontext.bpm_contact_form_make_savable(this_id);

        }

        function bpm_edit_infobox_name(this_item_id){

            var this_item_id = this_item_id.id;
            var parts = this_item_id.split('_');

            var open_item = '';
            for(var i = 6;i<parts.length;i++){
                open_item = open_item.concat(parts[i] + '_');
            }
            open_item = open_item.substring(0, open_item.length - 1);

            jQuery('#bpm_contact_form_infobox_'+open_item).hide();
            jQuery('#bpm_form_infobox_edit_field_name_'+open_item).show();
            jQuery('#bpm_form_infobox_open_edit_field_'+open_item).hide();
            jQuery('#bpm_form_infobox_open_save_field_'+open_item).show();

        }

        function bpm_save_edit_infobox_name(this_item_id){

            var item_id = this_item_id.id;
            var parts = item_id.split('_');

            var open_item = '';
            for(var i = 6;i<parts.length;i++){
                open_item = open_item.concat(parts[i] + '_') ;
            }
            open_item = open_item.substring(0, open_item.length - 1);

            var field_name = jQuery('#bpm_form_infobox_edit_field_name_'+open_item).val();
            var dropdown_val = jQuery( '#bpm_contact_form_infobox_'+open_item + ' option:selected').val();

            jQuery( '#bpm_contact_form_infobox_'+open_item ).find('option[value="'+dropdown_val+'"]').text(field_name);

            jQuery('#bpm_contact_form_infobox_'+open_item).show();
            jQuery('#bpm_form_infobox_edit_field_name_'+open_item).hide();
            jQuery('#bpm_form_infobox_open_edit_field_'+open_item).show();
            jQuery('#bpm_form_infobox_open_save_field_'+open_item).hide();

            bpm_contact_form_validate_contact_settings();

            jQuery(window).bind('beforeunload', function(){
                return 'Are you sure you want to leave?';
            });
        }

        function bpm_contact_us_change_selected_form(this_item){

            //create form fields for editing
            var id_parts = this_item.id.split('_');
            bpmcontext.bpm_build_contact_us_editor('#bpm_admin_contact_us_form_item_'+id_parts[id_parts.length - 1] , id_parts[id_parts.length - 1]);
            bpmcontext.bpm_admin_get_is_error(id_parts[id_parts.length - 1]);
        }

        function bpm_admin_get_is_error(item_id){

            var this_api_key = bpm_settings['contact_us_api_keys'][item_id];

            //check plugin
            var plugin_id = jQuery('#bpm_get_plugin_id_'+item_id).val();

            //check form to manage
            var selected_form = jQuery('#bpm_get_form_to_manage_id_'+item_id).val();

            if(selected_form == 0){
                jQuery('#bpm_admin_contact_us_form_item_'+item_id+' .bpm_contact_us_field_editor_message_selected').hide();
            }else{
                jQuery('#bpm_admin_contact_us_form_item_'+item_id+' .bpm_contact_us_field_editor_message_selected').show();
                //setup form email field
                jQuery('#bpm_admin_contact_us_form_item_'+item_id+' .bpm-admin-contact-us-workflow-email-field').html(bpmcontext.bpm_admin_get_form_fields_dropdown( item_id, '#bpm_admin_contact_us_form_item_'+item_id , 'email'));

                //setup form subject field
                jQuery('#bpm_admin_contact_us_form_item_'+item_id+' .bpm-admin-contact-us-workflow-subject-field').html(bpmcontext.bpm_admin_get_form_fields_dropdown( item_id, '#bpm_admin_contact_us_form_item_'+item_id , 'subject'));
            }

            var is_in_use = 0;
            var company_name = ' another Administrator\'s set of accounts';
            var conflicting_api = '';

            jQuery.each(bpm_contact_us_keys,function(index, value) {
                if(index != this_api_key || ! this_api_key){
                    if(value) {
                        if (value.form == selected_form && value.source == plugin_id){
                            //find account with this setting
                            jQuery.each(bpm_settings['bpm_admin_contact_us_selected_info'],function(api_index, api_value) {
                                if(api_value['data']){
                                    jQuery.each(api_value['data'],function(this_index, this_value) {
                                        if(this_value['api_key'] == index) {
                                            company_name = api_value.account_info['name'];
                                            if(api_value.account_info['id'] == jQuery('#bpm_context_list_contact_us').val()) {
                                                jQuery.each(bpm_settings['contact_us_api_keys'],function(conflict_index, conflict_value) {
                                                    if(index == conflict_value) bpm_settings['conflicting_api'] = conflict_index;
                                                });
                                            }
                                        }
                                    });
                                }
                            });
                            is_in_use = 1;
                        }
                    }
                }
            });

            if(is_in_use){
                var html_line = '<div class="large-12 columns" style="color:red">This plugin and form combination are already in use in ' + company_name + '.  If you click Get API Key this combination will be deleted and moved to this new location.</div>';
                jQuery('#bpm_admin_contact_us_form_item_' + item_id +' .bpm-admin-contact-us-error').show().html(html_line);
            }else{
                jQuery('#bpm_admin_contact_us_form_item_' + item_id +' .bpm-admin-contact-us-error').hide();
            }


        }

        function bpm_admin_get_is_enabled_checkbox(value, item_id, this_item_id){

            var checked = 'checked';
            if(value['is_enabled'] == 0) checked = '';

            var checkbox = '<input type="checkbox" class="bpm_contact_us_checkbox" id="bpm_get_is_enabled_' + item_id +'" value="1" '+checked+'> ';

            jQuery(this_item_id +' .bpm-admin-contact-us-enabled').html(checkbox);

            jQuery('.bpm_contact_us_checkbox').click(function(){
                bpm_settings['contact_us_form_update_'+item_id] = 1;
                var $this = jQuery(this);
                if ($this.is(':checked')) {
                    if (bpm_settings['contact_us_api_keys'][item_id]){
                        jQuery(this_item_id +' .bpm-admin-api-button').attr('id', 'bpm_get_api_key_' + item_id).text('Update API Key');
                    }else{
                        jQuery(this_item_id +' .bpm-admin-api-button').attr('id', 'bpm_get_api_key_' + item_id).text('Get API Key');
                    }
                }else{
                    if (bpm_settings['contact_us_api_keys'][item_id]){
                        jQuery(this_item_id +' .bpm-admin-api-button').attr('id', 'bpm_get_api_key_' + item_id).text('Delete API Key');
                    }else{
                        jQuery(this_item_id +' .bpm-admin-api-button').attr('id', 'bpm_get_api_key_' + item_id).text('Get API Key');
                    }
                }
                bpmcontext.bpm_admin_check_contact_us_form({id: this_item_id});
            })

        }

        function bpm_admin_get_set_api_button(value, item_id, this_item_id){

            if (bpm_settings['contact_us_api_keys'][item_id]){
                jQuery(this_item_id +' .bpm-admin-api-button').attr('id', 'bpm_get_api_key_' + item_id).text('Update API Key');
            }else{
                jQuery(this_item_id +' .bpm-admin-api-button').attr('id', 'bpm_get_api_key_' + item_id).text('Get API Key');
            }

        }

        function bpm_admin_get_plugin_dropdown(data, item_id, this_item_id){

            //create a dropdown of approved plugins
            var selected = '';
            var plugin_list = [];
            if(data['plugin_id']) selected = data['plugin_id'];

            jQuery.each(bpm_contact_us,function(index, value) {
                plugin_list.push({val: value['slug'], text: value['name']});
            });

            var dropdown = bpmcontext.bpm_admin_create_dropdown('bpm_admin_contact_us_plugin_id', 'bpm_get_plugin_id_' + item_id, plugin_list, selected, '', 'bpm_admin_on_change_plugin_dd')

            jQuery(this_item_id +' .bpm-admin-contact-us-plugins').html(dropdown);


        }

        function bpm_admin_on_change_plugin_dd(this_item){

            var id_parts = this_item.id.split('_');
            var item_id = id_parts[4];
            bpm_admin_get_form_to_manage('', item_id, '#bpm_admin_contact_us_form_item_'+item_id);

            //reset form fields to nada
            jQuery('#bpm_admin_contact_us_email_field_'+item_id).find('option').remove();
            jQuery('#bpm_admin_contact_us_subject_field_'+item_id).find('option').remove();

            jQuery('#bpm_admin_contact_us_form_item_'+item_id+' .bpm_contact_us_field_editor_content').hide();
            jQuery('#bpm_admin_contact_us_form_item_'+item_id+' .bpm_contact_us_field_editor_message_selected').hide();

            bpmcontext.bpm_admin_get_is_error(item_id);
        }


        function bpm_admin_get_form_dest_ws_dropdown(value, item_id, this_item_id){

            var workspace_list = [];
            var selected = '';

            if(value['template_id']) selected = value['template_id'];

            jQuery.each(bpm_settings['bpm_contact_us_workspaces'],function(index, value) {
                workspace_list.push({val: value['template_index'], text: value['template_name']});
            });

            var dropdown = bpmcontext.bpm_admin_create_dropdown('bpm-admin-contact-us-dest-workspace', 'bpm_admin_contact_us_dest_workspace_' + item_id, workspace_list, selected, '', 'bpm_admin_update_parent_page_list')
            jQuery(this_item_id +' .bpm-admin-contact-us-dest-workspace').html(dropdown);

        }

        function bpm_admin_update_parent_page_list_old(this_item){

            var id_parts = this_item.id.split('_');
            var this_id = id_parts[id_parts.length - 1];
            var template_id = jQuery('#bpm_admin_contact_us_dest_workspace_'+this_id).val();
            var accountid = jQuery('#bpm_context_list_contact_us').val();
            var this_item_id = '#bpm_admin_contact_us_form_item_' + this_id;

            bpm_admin_get_form_assignee_dropdown('', this_id, this_item_id);

            var querystring = 'action=get_contact_us_parent_list&accountid=' + accountid +'&templateid='+template_id;

                jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/' + bpm_settings['bpm_api'] + '/bpmcontext_wordpress.php?callback=?', querystring, function (result) {

                    if (result) {
                        bpmcontext.bpm_admin_get_form_parent_page_dropdown(result, this_id, this_item_id);

                    }
                });


        }

        function bpm_admin_get_form_parent_page_dropdown(value, item_id, this_item_id){

            var page_list = [];
            var selected = '';

            if(value['parent_page']) {
                selected = value['parent_page'];
            }

            if(!selected) selected = jQuery('#bpm_admin_contact_us_dest_workspace_'+item_id).val();

            setTimeout(function() {
                //doing nothing
            },200);

            if(value['parent_pages']) {
                jQuery.each(value['parent_pages'], function (index, value) {
                    page_list.push({val: value['page_id'], text: value['page_title']});
                });
            }

            var dropdown = bpm_admin_create_dropdown('bpm-admin-contact-us-parent-page', 'bpm_admin_contact_us_parent_page_' + item_id, page_list, selected, '')
            jQuery(this_item_id +' .bpm-admin-contact-us-parent-page').html(dropdown);

            if(!value['parent_pages']) bpm_admin_update_parent_page_list({id:'bpm_admin_contact_us_parent_page_' + item_id});

        }

        function bpm_admin_get_form_initiator_dropdown(value, item_id, this_item_id){

            var user_list = [];
            var selected = '';

            if(value['user_id']) selected = value['user_id'];

            jQuery.each(bpm_settings['bpm_contact_us_users'],function(index, value) {
                user_list.push({val: value['user_id'], text: value['real_name']});
            });

            var dropdown = bpm_admin_create_dropdown('bpm-admin-contact-us-workflow-initiator', 'bpm_admin_contact_us_workflow_initiator_' + item_id, user_list, selected, '')
            jQuery(this_item_id +' .bpm-admin-contact-us-workflow-initiator').html(dropdown);

        }

        function bpm_admin_get_form_assignee_dropdown(value, item_id, this_item_id){

            var user_list = [];
            var selected = '';
            var this_template_id = '';

            if(value['route_to']) selected = value['route_to'];
            if(value['template_id']) this_template_id = value['template_id'];
            if(!this_template_id) this_template_id = jQuery('#bpm_admin_contact_us_dest_workspace_'+item_id).val();

            jQuery.each(bpm_settings['bpm_contact_us_users'],function(index, value) {
                user_list.push({val: value['user_id'], text: value['real_name']});
            });

            var dropdown = bpm_admin_create_dropdown('bpm-admin-contact-us-workflow-assignee', 'bpm_admin_contact_us_workflow_assignee_' + item_id, user_list, selected, '')
            jQuery(this_item_id +' .bpm-admin-contact-us-workflow-assignee').html(dropdown);

            var template_type = 1;

            jQuery.each(bpm_settings['bpm_contact_us_workspaces'],function(index, this_value) {
                if(this_value['template_index'] == this_template_id) template_type = this_value['workflow_type'];
            });

            if( template_type == 3 ){
                jQuery(this_item_id + ' .bpm-admin-contact-us-workflow-assignee-row').show();
            }
        }

        function bpm_admin_get_form_to_manage(value, item_id, this_item_id){

            //if this plugin has forms then use dropdown
            var selected_plugin = '';
            var form_list = [];
        //    if(value['plugin_id']) selected_plugin = value['plugin_id'];
            if(!selected_plugin) selected_plugin = jQuery('#bpm_get_plugin_id_'+item_id).val();

            if(selected_plugin) {
                jQuery.each(bpm_contact_us, function (this_index, this_value) {
                        if (this_value['slug'] == selected_plugin) {
                            jQuery.each(this_value['forms'], function (form_index, form_value) {
                                form_list.push({val: form_value.id, text: form_value.title});
                            });
                        }
                    });
            }

            var this_value = '';
            if(value['form_info']) this_value = value['form_info'];

            if(form_list.length){
                var dropdown = bpm_admin_create_dropdown('bpm_admin_contact_us_form_to_manage', 'bpm_get_form_to_manage_id_' + item_id, form_list, this_value, 'Select Form...', 'bpm_contact_us_change_selected_form');
                jQuery(this_item_id +' .bpm-admin-contact-us-contact-form-to-manage').html(dropdown);
            }else{
                //else use text field
        //        var dropdown = '<input type="text" class="bpm_contact_us_form_field_text" id="bpm_get_form_to_manage_id_' + item_id+'" value="'+this_value+'" placeholder="Enter form ID here">';
        //        jQuery(this_item_id +' .bpm-admin-contact-us-contact-form-to-manage').html(dropdown);
            }

            jQuery( ".bpm_contact_us_form_field_text" ).keyup(function() {
                bpmcontext.bpm_admin_check_contact_us_form(this);
            });

        }

        function bpm_admin_get_contact_us_api(this_item){

            if( ! bpm_params.has_logged_in) return;

            if(bpm_settings['contact_is_processing'] == 1) return;

            jQuery('#bpm_api_connected_alert').hide();

            bpm_settings['contact_is_processing'] = 1;

            var id_parts = this_item.id.split('_');
            var this_id = id_parts[4];

            jQuery('#bpm_admin_overlay_'+this_id).show();

            var this_item_id = 'bpm_admin_contact_us_form_item_'+this_id;

            var api_key = '';
            var accountid = jQuery('#bpm_context_list_contact_us').val();
            var plugin_id = jQuery('#bpm_get_plugin_id_'+this_id).val();
            var user_id = jQuery('#bpm_admin_contact_us_workflow_initiator_'+this_id).val();
            var template_id = jQuery('#bpm_admin_contact_us_dest_workspace_'+this_id).val();
            var parent_page = jQuery('#bpm_admin_contact_us_parent_page_'+this_id).val();
            var selected_form = jQuery('#bpm_get_form_to_manage_id_'+this_id).val();
            var route_to = jQuery('#bpm_admin_contact_us_workflow_assignee_'+this_id).val();


            var enabled = 0;
            var delete_request = 0;
            if (bpm_settings['contact_us_api_keys'][this_id]) api_key = bpm_settings['contact_us_api_keys'][this_id];

            var main_api_key = '';

            jQuery.each(bpm_contact_us_keys,function(this_index, this_value) {
                main_api_key = this_index;
                return true;
            });

            if (bpm_settings['contact_us_api_keys'][this_id] && !jQuery('#bpm_get_is_enabled_'+this_id).is(':checked')){
                //this is a delete request
                var querystring = 'action=delete_contact_us_api_key&apikey=' + api_key + '&accountid=' + accountid + '&mainapikey='+main_api_key;
                delete_request = 1;

            }else {
                if (jQuery('#bpm_get_is_enabled_' + this_id).is(':checked')) enabled = 1;
                var querystring = 'action=get_contact_us_api_key&apikey=' + api_key + '&accountid=' + accountid + '&plugin_id=' + plugin_id + '&userid=' + user_id + '&templateid=' + template_id + '&parentpage=' + parent_page + '&forminfo='+selected_form +'&isenabled=' + enabled + '&routeto=' + route_to + '&mainapikey='+main_api_key+'&site_id='+bpm_params.current_site;

            }

                if(accountid && plugin_id && user_id && template_id && parent_page && selected_form) {

                jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/' + bpm_settings['bpm_api'] + '/bpmcontext_wordpress.php?callback=?', querystring, function (result) {

                    if (result['apikey']) {

                        bpm_settings['bpm_admin_contact_us_selected_info'] = result['updated_data'];

                        var action = 'update';
                        if(delete_request){
                            action = 'delete';
                        }

                        api_key = result['apikey'];
                        var nonce = result['nonce'];

                        bpm_settings['contact_us_api_keys'][this_id] = api_key;

                        //get field data
                            var field_array = [];
                            jQuery('#'+this_item_id+ ' .bpm-contact-form-field').each(function() {

                                var field_id = jQuery(this).data('id');
                                var infobox_name = jQuery('#bpm_form_infobox_dd_'+field_id +' option:selected').text();
                                var visible = 'no';
                                var ignore = 'no';
                                var page_id = jQuery(this).data('page_id');

                                if (jQuery('#bpm_form_infobox_visible_'+field_id).attr("checked")) visible = 'yes';
                                if (jQuery('#bpm_form_infobox_ignore_'+field_id).attr("checked"))  ignore = 'yes';

                                field_id = jQuery(this).data('field_id');

                                field_array.push({id:field_id, page_id: page_id, infobox_name:infobox_name, visible:visible, ignore:ignore});
                            });

                        var email_field = jQuery('#bpm_admin_contact_us_email_field_'+this_id+' option:selected').val();
                        var subject_field = jQuery('#bpm_admin_contact_us_subject_field_'+this_id+' option:selected').val();
                        var text_areas = [];
                        jQuery('#'+this_item_id+ ' .bpm-contact-form-textarea').each(function() {
                            text_areas.push(jQuery(this).data('field_id'));
                        });

                        var data = {
                            'action': 'form_update_contact_us',
                            'bpm_admin_action': action,
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

                        jQuery.post(ajaxurl, data, function(result) {

                            var result_json = JSON.parse(result);
                            bpm_contact_us_keys = result_json.data;

                            bpm_settings['contact_is_processing'] = 0;

                            if(delete_request){
                                //remove section

                                if(this_id == 0){
                                    jQuery('#bpm_admin_contact_us_form_item_0').html('');
                                }else {
                                    jQuery('#bpm_admin_contact_us_form_item_' + this_id).remove();
                                }

                            }else{

                                jQuery('#bpm_admin_overlay_'+this_id).hide();
                                jQuery('#bpm_admin_confirmation_message_'+this_id).text('Saved').show();
                                bpm_settings['contact_us_form_update_'+this_id] = 0;
                                jQuery('#bpm_api_connected_alert').show();

                                if(bpm_settings['conflicting_api'] != undefined){
                                    if(bpm_settings['conflicting_api'] == 0){
                                        jQuery('#bpm_admin_contact_us_form_item_0').html('');
                                    }else {
                                        jQuery('#bpm_admin_contact_us_form_item_' + bpm_settings['conflicting_api']).remove();
                                    }
                                    bpm_settings['conflicting_api'] = undefined;
                                }
                                    jQuery('#bpm_admin_contact_us_form_item_' + this_id +' .bpm-admin-contact-us-error').hide();

                                bpmcontext.bpm_admin_check_contact_us_form({id:this_item_id});
                            }

                        });

                    }else{
                        if(result['message']){
                            alert(result['message']);
                        }
                    }
                });
            }
        }

        function bpm_admin_create_dropdown(name, id, optionList, item_selected, default_value, onchange_function, addl_class) {

            var this_selected = '';
            var onchange_function_info = '';

            if(onchange_function == 'bpm_admin_get_is_error'){
                var id_parts = id.split('_');
                var this_id = id_parts[6];
                onchange_function_info = 'onchange="'+onchange_function+'('+this_id+')"';
            }else if(onchange_function){
                onchange_function_info = 'onchange="'+onchange_function+'(this)"';
            }


            var combo = '<select id="'+id+'" class="bpm_contact_us_form_field '+addl_class+'" name="'+name+'" '+onchange_function_info+'>';

            if(!item_selected) this_selected = 'selected';

            if(default_value) combo = combo.concat('<option value="0" '+this_selected+'>'+default_value+'</option>');

            jQuery.each(optionList, function (i, el) {
                this_selected = '';
                if(el['val'] == item_selected) this_selected = 'selected';
                combo = combo.concat('<option value="'+el['val']+'" '+this_selected+'>' + el['text'] + '</option>');
            });

            combo = combo.concat('</select>');
            return combo;

        }

        this.checkCookie = function(){
            var cookieEnabled=(navigator.cookieEnabled)? true : false;
            if (typeof navigator.cookieEnabled=="undefined" && !cookieEnabled){
                document.cookie="testcookie";
                cookieEnabled=(document.cookie.indexOf("testcookie")!=-1)? true : false;
            }
            return (cookieEnabled)?true:bpmcontext.showCookieFail();
        }

        this.showCookieFail = function(){

            alert('Cookies not enabled. This application will not work without cookies');
        }

        this.CheckThirdPartyCookies = function(){

            jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/cookietest.php?callback=?', '&step=1', function (result) {
                if(result) {
                    jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/cookietest.php?callback=?', '&step=2', function (result) {
                        if(result){
                            bpm_settings['third_party_cookie'] = result.result;
                        }
                        if(bpm_settings['third_party_cookie'] == 'no'){
                            bpmcontext.show_third_party_cookie_message();
                            return;
                        }
                        bpmcontext.bpm_open_bpmcontext();
                    });
                }
            });
        }

        this.show_third_party_cookie_message = function(){
            jQuery('#bpm_page_area').hide();
            jQuery('#bpm_login_area').hide();
            jQuery('#bpm_page_loading_alert').hide();
            jQuery('#bpm_context_third_party_cookie').show();
        }

        this.bpm_submit_dev_code = function(){

            jQuery('#bpm_dev_code_error').hide();
            jQuery('#bpm_dev_code_error_invalid').hide();
            jQuery('#bpm_admin_submit_dev_code_button').hide();

            var dev_code = jQuery('#bpm_dev_code').val();
            if ( ! bpmcontext.bpm_test_field_for_blank(dev_code)){
                jQuery('#bpm_dev_code_error').show();
                return;
            }
            var querystring = '&action=dev_code&dev_code='+ dev_code;
            jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/' + bpm_settings['bpm_api'] + '/bpmcontext_wordpress.php?callback=?', querystring, function (result) {
                if(result){
                    if(result.updated){
                        var data = {
                            'action': 'bpm_update_dev_code',
                            'dev_code' : dev_code
                        };

                        jQuery.post(bpm_params.ajaxurl, data, function (result) {
                            location.reload(true);
                        });

                    }else{
                        jQuery('#bpm_dev_code_error_invalid').show();
                        jQuery('#bpm_admin_submit_dev_code_button').show();
                    }
                }
            });
        }

        this.add_custom_section = function(current_index){

            var is_shared = '';
            var icon = '';
            var return_data = '';
            jQuery.each(bpm_params['custom_sections'], function (index, value) {
                if(value.position == current_index && (bpm_settings['TEMPLATELIBID'] == value.template_library_id || bpm_settings['TEMPLATE_ID'] == value.template_id) && (bpm_current_domain == value.domain || ! value.domain)) {
                    if(value.icon) icon = value.icon;
                    return_data = return_data.concat('<ul class="accordion"  id="bpm_acc_' + value['id'] + '" data-accordion><li class="accordion-navigation"><a href="#acc_' + value['id'] + '" id="bpm_top_bar_' + value['id'] + '" class="bpm_top_bar bpm_nodecoration bpm_text_section"><span class="'+icon+'"></span>&nbsp;' + value.title + '<div style="float:right;display: inline;" ></div> ' + is_shared + '</a> <div id="acc_' + value['id'] + '" class="active bpm_custom_section bpm_section_height"> ' + bpmcontext.executeFunctionByName(value['callback'], window) + '</div> </li>  </ul>');
                }
            });
            return return_data;
        }

        this.bpm_admin_extensions_front_end = function(){
            return '<div id="bpm_admin_extensions_front_end"></div><script>bpmcontext.bpm_admin_extensions_front_end_display();</script>';
        }

        this.bpm_admin_extensions_front_end_display = function(){

            if(bpm_settings['USERTYPE'] != 'admin'){
                jQuery('#bpm_acc_bpm_homepage_admin_extensions').hide();
                return;
            }
            var html_line = '';
            if(bpm_settings['dashboard']) {
                jQuery.each(bpm_settings['dashboard']['ACCTMGR'], function (index, value) {
                    html_line = html_line.concat(bpmcontext.create_extension_badge(value));
                })
            }

            jQuery('#bpm_main_content').html(html_line);

            jQuery('.bpm_product_action_button').click(function(){
                if(jQuery(this).data('action')=='Buy') {
                    var url = 'https://' + jQuery(this).data('mktsite') + '/checkout/?add-to-cart=' + jQuery(this).data('webid');
                    var win = window.open(url, '_blank');
                    win.focus();
                }else{
                    //show management window
                    jQuery('.bpm-admin-extensions-overlay').show();
                    jQuery('#bpm_extension_manager_'+jQuery(this).data('prod_id')).show();
                    jQuery('#bpm_extension_manager_acct_alert_message_'+jQuery(this).data('prod_id')).hide();
                    bpm_settings['allowed_installs'] = jQuery(this).data('installs');
                }
            });

            jQuery('.bpm_product_manager_cancel_button').click(function(){
                jQuery('.bpm-admin-extensions-overlay').hide();
                jQuery('#bpm_extension_manager_'+jQuery(this).data('prod_id')).hide();
                jQuery('.bpm_extension_manager_acct_'+jQuery(this).data('prod_id')).each(function(index, value) {

                    if(jQuery(this).data('ischecked') == 'checked'){
                        jQuery(this).prop('checked', true);
                    }else{
                        jQuery(this).prop('checked', false);
                    }
                });
            })

            jQuery('.bpm_extension_manager_acct_checkbox').click(function(){

                var prod_id = jQuery(this).data('prod_id');
                var this_id = jQuery(this).prop('id');
                var current_installs = 0;
                jQuery('.bpm_extension_manager_acct_'+prod_id).each(function(index, value) {
                    var this_value = jQuery(this).val();
                    if(jQuery(this).is(':checked')){
                        current_installs++;
                    }else{
                        current_installs--;
                    }
                });
                if(current_installs > bpm_settings['allowed_installs']){
                    jQuery( '#'+this_id ).attr('checked', false);
                    jQuery('#bpm_extension_manager_acct_alert_message_'+prod_id).show();
                }
            });


            jQuery('.bpm_product_manager_save_button').click(function(){

                var prod_id = jQuery(this).data('prod_id');
                jQuery('#bpm_extension_manager_overlay_'+prod_id).show();

                var query_string = '&domain='+bpm_current_domain+'&action=update_installations&prod_id='+prod_id;

                jQuery('.bpm_extension_manager_acct_'+prod_id).each(function(index, value) {
                    var this_value = jQuery(this).val();
                    if(jQuery(this).is(':checked')){
                        query_string = query_string.concat('&install[]='+this_value);
                    }else{
                        query_string = query_string.concat('&no_install[]='+this_value);
                    }

                });

                jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/' + bpm_settings['bpm_api'] + '/bpmcontext_wordpress.php?callback=?', query_string, function (result) {

                    if(result) {

                        if(result.dashboard.ACCTMGR){

                            bpm_settings['dashboard']['ACCTMGR'] = result.dashboard.ACCTMGR
                            bpm_settings['dashboard']['IMADMIN'] = result.dashboard.IMADMIN

                            bpmcontext.bpm_admin_extensions_front_end_display();

                        }

                    }else{
                        alert('A network error occoured.  Please try again');
                        jQuery('#bpm_extension_manager_overlay_'+prod_id).hide();
                    }

                });
            });

            jQuery('.bpm_product_more_info_button').click(function(){
                var url = jQuery(this).data('webslug');
                var win = window.open(url, '_blank');
                win.focus();
            });
        }

        this.create_extension_badge = function(product_info){

            var button_action = 'Activate';
            var can_activate = 0;
            var can_manage = 0;
            var can_update = 0;
            var account_list = [];
            var bpm_price = '';
            var bpm_period ='';

            if (product_info['installs_allowed'] > 0 && !product_info['accounts'] && product_info['installs_allowed']) {
                can_activate = 1;
            }
            if (product_info['installs_allowed'] > 0 && product_info['accounts'] && product_info['installs_allowed']) {
                can_manage = 1;
            }
            if (product_info['prod_price'] > 0) button_action = 'Buy';
            if (product_info['can_update']) can_update = product_info['can_update'];

            if(product_info['accounts']) {
                jQuery.each(product_info['accounts'], function (index, value) {
                    account_list[value['account_id']] = 1;
                })
            }

            if(can_activate)  button_action = 'Activate';
            if(can_manage)    button_action = 'Manage';
            if((can_activate || can_manage) && can_update) button_action = 'Update';

            var html_line =  '<div id="bpm_product_badge_'+product_info['product_id']+'" class="bpm_product_badge_holder">';

            html_line = html_line.concat('<div id="bpm_product_badge_icon_'+product_info['product_id']+'" class="bpm_product_badge_icon_holder">');
            html_line = html_line.concat('<span class="bpm_product_badge_icon fa '+ product_info['product_image']+' fa-5x">&nbsp;</span>');
            html_line = html_line.concat('</div>');

            html_line = html_line.concat('<div id="bpm_product_name_'+product_info['product_id']+'" class="bpm_product_name_holder">');
            html_line = html_line.concat(product_info['product_name']);
            html_line = html_line.concat('</div>');

            bpm_price = 'Free';
            if(product_info['prod_price'] > 0){
                bpm_period = ' per month';
                if(product_info['bill_period']=='Annual') bpm_period = ' per year';
                bpm_price = '$' + product_info['prod_price'] + bpm_period;
            }

            html_line = html_line.concat('<div id="bpm_product_status_'+product_info['product_id']+'" class="bpm_product_status_holder">');
            html_line = html_line.concat(bpm_price);
            html_line = html_line.concat('</div>');

            html_line = html_line.concat('<div id="bpm_product_short_desc_'+product_info['product_id']+'" class="bpm_product_short_desc_holder">');
            html_line = html_line.concat(product_info['short_desc']);
            html_line = html_line.concat('</div>');

            var bpm_web_id = 0;
            var bpm_web_slug = '';

            if(product_info['product_web_id'])   bpm_web_id = product_info['product_web_id'];
            if(product_info['product_web_slug']) bpm_web_slug = product_info['product_web_slug'];

            //add buy button

            html_line = html_line.concat('<div id="bpm_product_action_'+product_info['product_id']+'" class="bpm_product_action_button_holder">');
            html_line = html_line.concat('<div id="bpm_product_action_button_'+product_info['product_id']+'" data-webid="'+bpm_web_id+'" data-action="'+button_action+'" data-installs="'+product_info['installs_allowed']+'" data-prod_id="'+product_info['product_id'] +'" data-mktsite="bpmcontext.com" class="bpm_product_action_button">');
            html_line = html_line.concat(button_action);
            html_line = html_line.concat('</div>');

            //add more information button
            html_line = html_line.concat('<div id="bpm_product_more_info_button_'+product_info['product_id']+'" data-webslug="'+bpm_web_slug+'" data-mktsite="bpmcontext.com" class="bpm_product_more_info_button">More Info</div>');

            html_line = html_line.concat('</div>');

            html_line = html_line.concat('</div>'); // end of badge div

            //create manage div
            if( button_action != 'Buy'){

                html_line = html_line.concat('<div class="bpm_extension_manager_holder bpm-hide" id="bpm_extension_manager_'+product_info['product_id']+'" >');

                html_line = html_line.concat('<div class="bpm_extension_manager_title">'+ product_info['product_name']+'</div>');

                var installs_message = '';
                if(product_info['installs_allowed'] < 100){
                    installs_message = 'Click up to '+product_info['installs_allowed']+' accounts to activate and install.';
                }
                html_line = html_line.concat('<div class="bpm_extension_installs_message">Click the checkbox to activate workspace suites in your account. '+installs_message+'</div>');

                html_line = html_line.concat('<div class="bpm_ext_act_list"><table style="width:80%;margin:2em;">');

                jQuery.each(bpm_settings['dashboard']['IMADMIN'], function (index, value) {
                    if(value['admin_type'] == 2) {
                        var checked = '';
                        if(account_list[value['account_id']]) checked = 'checked';
                        html_line = html_line.concat('<tr class="bpm_extension_manager_row"><td>' + value['name'] + '</td><td style="text-align:right"><input type="checkbox" data-ischecked="' + checked + '"  data-prod_id="' + product_info['product_id'] + '" class="bpm_extension_manager_acct_checkbox bpm_extension_manager_acct_' + product_info['product_id'] + '" id="bpm_extension_manager_acct_' + product_info['product_id'] + '_' + value['account_id'] + '" value="' + value['account_id'] + '" ' + checked + '></td></tr>');
                    }
                })

                html_line = html_line.concat('</table></div>');

                html_line = html_line.concat('<div class="bpm_product_action_button_holder">');
                html_line = html_line.concat('<div data-webid="'+bpm_web_id+'" data-prod_id="'+product_info['product_id'] +'" class="bpm_product_manager_cancel_button">');
                html_line = html_line.concat('Cancel');
                html_line = html_line.concat('</div>');
                html_line = html_line.concat('<div data-webid="'+bpm_web_id+'" data-prod_id="'+product_info['product_id'] +'" class="bpm_product_manager_save_button">');
                html_line = html_line.concat('Save');
                html_line = html_line.concat('</div>');
                html_line = html_line.concat('<div id="bpm_extension_manager_acct_alert_message_'+product_info['product_id'] +'" class="bpm_extension_manager_acct_alert_message bpm-hide">You have already selected the maximum number of installs.</div>');
                html_line = html_line.concat('</div>');
                html_line = html_line.concat('<div id="bpm_extension_manager_overlay_'+product_info['product_id']+'" class="bpm-admin-overlay bpm-hide"><div class="bpm-admin-activity" ><span class="fa fa-spinner fa-spin" >&nbsp;</span></div></div>');
                html_line = html_line.concat('</div>');

            }

            return html_line;
        }

        this.bpm_get_data = function(query_vars , callback){

            var query_string = bpm_get_string;

            jQuery.each(query_vars, function (index, value) {
               query_string = query_string.concat('&'+index+'='+value);
            });

            jQuery.getJSON('https://' + bpm_settings['bpm_server'] + '/' + bpm_settings['bpm_api'] + '/bpmcontext_wordpress.php?callback=?', query_string, function (result) {

                if( ! callback) return;

                if(result){
                    bpmcontext.executeFunctionByName(callback, window , result);
                }else{
                    bpmcontext.executeFunctionByName(callback, window ,{error:'Request Failed'});
                }

            });
        }


    }//end if bomcontext class
}//end of check for existing bpmcontext class
jQuery(document).ready(function(){

    try {
        bpmcontext = new bpmcontext;
        bpmcontext.checkCookie();
        bpmcontext.CheckThirdPartyCookies();

    }catch(err){
        alert(err.message);
    }
});