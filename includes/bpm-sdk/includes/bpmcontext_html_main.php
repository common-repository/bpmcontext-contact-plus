<?php
/**
 * Created by BPMContext.
 * User: fred
 * Date: 3/1/16
 * Time: 6:04 PM
 */

if ( ! class_exists('bpmcontext_sdk_html_manager') ) {


    class bpmcontext_sdk_html_manager
    {

        function __construct()
        {

        }

        function bpm_sdk_get_html_new_account_page(){

            $image_source = plugins_url( '../images/plugin-icon.png', __FILE__ );
            $user_info = get_userdata(get_current_user_id());
            $user_email = $user_info->user_email;

            $first_name = $user_info->user_firstname;
            $only_first_name = ' ' . $first_name;
            if ( empty( $first_name ) ) {
                $first_name = $user_info->nickname;
            }else{
                $first_name = $first_name . ' ' . $user_info->user_lastname;
            }

            $html_line = '<div style="margin:1em;height:10em;">
                                <div class="bpm_div_inline" style="position:relative;float:left;margin-right:1em;"><img style="max-width:10em;border-radius: 20px;" src="'.$image_source.'"></div>';
            $html_line .= '<div class="bpm_admin_header_row bpm_div_inline" style="position:relative;width:59em;float:left;height:2em;"><h1>' . __('Welcome.  Your private workspace is almost ready!','bpmcontext') . '</h1></div><br><br>';
            $html_line .= '<div class="bpm_admin_header_row bpm_div_inline" style="position:relative;width:59em;margin-top:3em;"><h3 style="color:darkslategray">' . __('Intranet, Extranet & Workflow Solutions - 100% in your WordPress site','bpmcontext') . '</h3></div>';
            $html_line .= '</div>';

            $html_line .= '<div class="bpm_new_account_page_div" style="background-color: white;">

                            <br>
                            <div class="bpm-row">
                                <div class="bpm-large-12 bpm-small-12 bpm-columns text-center" style="font-size: 1.2em;text-align: center;">Create a BPMContext WordPress Account</div>
                            </div>
                            <br>
                            <div class="bpm-row">
                                <div class="bpm-large-12 bpm-small-12 bpm-columns text-left" >We added a private workspace area on a page called "Dashboard". It is a secure password protected workspace in your site that requires you, and your invited users, to login to view or edit content.</div>
                            </div>

                            <div style="width:80%;">


                            <div style="height:2em">&nbsp;</div>
                            <div class="bpm-row">
                                <div class="bpm-large-6 bpm-small-6 bpm-columns text-right"><span class="bpm_lng_your_email">' . __('Your Name', 'bpmcontext') . ':</span>&nbsp;</div>
                                <div class="bpm-large-4 bpm-small-4 bpm-columns text-left"><input type="text" class="bpm_new_account_field" id="bpm_new_account_real_name"  placeholder="e.g: Bob Smith" value="'.$first_name.'"></div>
                                <div class="bpm-large-2 bpm-small-2 bpm-columns text-left">&nbsp;</div>
                            </div>
                            <div class="bpm-row">
                                <div class="bpm-large-6 bpm-small-6 bpm-columns text-right"><span class="bpm_lng_your_email">' . __('Your Email Address', 'bpmcontext') . ':</span>&nbsp;</div>
                                <div class="bpm-large-4 bpm-small-4 bpm-columns text-left"><input type="text" class="bpm_new_account_field" id="bpm_new_account_email"  placeholder="e.g: Bob.Smith@mycoolcompany.com" value="'.$user_email.'"></div>
                                <div class="bpm-large-2 bpm-small-2 bpm-columns text-left">&nbsp;</div>
                            </div>
                            <div class="bpm-row">
                                <div class="bpm-large-6 bpm-small-6 bpm-columns text-right"><span class="bpm_lng_your_password">' . __('Create a Password', 'bpmcontext') . ':</span>&nbsp;</div>
                                <div class="bpm-large-4 bpm-small-4 bpm-columns text-left"><div id="bpm_new_acct_password_html_admin_main"></div>&nbsp;</div>
                                <div class="bpm-large-2 bpm-small-2 bpm-columns text-right">&nbsp;</div>
                            </div>

                            </div>

                            <div class="bpm-row" style="width:93%;">
                                <div class="bpm-large-12 bpm-small-12 bpm-columns text-right" ><input style="float:right" onClick="bpmcontext.bpm_create_new_account();" id="bpm_admin_new_create_account" class="button button-primary " value="Get it & Go To My Workspace" name="submit" type="submit"><br><br></div>
                            </div>

                            <div style="width:80%;">
                            <div class="bpm-row">
                                <div class="bpm-large-12 bpm-small-12 bpm-columns">
                                    <div data-alert class="alert-box alert radius bpm_acct_error_1 bpm-hide" id="bpm_new_acct_error_alert" >' . __('Your Name cannot match the Company Name.  Please re-enter.', 'bpmcontext') . '</div>
                                </div>
                                <div class="bpm-large-12 bpm-small-12 bpm-columns">
                                    <div data-alert class="alert-box alert radius bpm_acct_error_2 bpm-hide" id="bpm_new_acct_setup_alert" >' . __('An error occourred setting up your account.  Please re-enter.', 'bpmcontext') . '</div>
                                </div>
                            </div>
                            <div class="bpm-row">
                                <div class="bpm-large-12 bpm-small-12 bpm-columns">
                                    <div data-alert class="alert-box success radius bpm_lng_creating_account bpm-hide" id="bpm_page_loading_new_acct_alert" >' . __('OK, we got this.  You will be taken to your account in 5 to 15 seconds', 'bpmcontext') . '.</div>
                                </div>
                             </div>

                                <div id="bpm_progress_image" class="bpm-admin-overlay bpm-hide text-center" style="padding-top:10rem;"><div class="bpm-admin-activity" ><span class="fa fa-spinner fa-spin" >&nbsp;</span></div></div>
                                <div id="bpm_create_account_error_message" class="bpm-hide bpm_admin_notification" style="margin:1em;">There is already an account using the email address <span id="bpm_error_email"></span>.  Use the Login button to login and use that account.</div>
                            </div>


                            <hr style="height:1px;border:none;color:#333;background-color:#333;margin:2em;">

                            <div style="margin-left:1em;margin-right:1em;">
                            <div class="bpm_div_inline" id="bpm_new_acct_login_message"><p>If you already have an account click the login button to open the login screen.</p></div>
                            <div class="bpm_div_inline" style="float:right;"><input style="float:right;" id="bpm_admin_new_login_account" class="button button-primary " value="Login" name="submit" type="submit" onClick="bpmcontext.bpm_admin_show_new_login();"></div>
                            <div class="bpm_div_inline" style="float:right;"><input style="float:right;" id="bpm_admin_new_login_show_all" class="button button-primary" value="Back" name="back" type="submit" onClick="bpmcontext.bpm_admin_show_new_welcome();"></div>
                            </div>

                            <div id="bpm_initial_login" class="bpm-hide" style="margin:1em;">'.$this->bpm_create_admin_login_content(true , $user_email).' </div>

                            <div id="bpm_admin_settings_reset_password_form" class="bpm-hide" style="margin:1em 1em 3em 1em;">' . $this->bpm_admin_reset_password() . '</div>

                            <hr style="height:2px;border:none;color:#333;background-color:#333;margin:2em;">
                            <div id="bpm_initial_message">
                            <h3>About BPMContext</h3>

                            <p>BPMContext provides WordPress service plugins that include Intranet, Extranet and Workflow tools.  As the backend processing of our service is huge and is used to support both our WordPress and Enterprise customers, we do some of the processing required to implement our solutions in your WordPress site and most of it on our servers. The benefits of this include:</p>
                            <ul>
                            <li>100% of the user experience is in your WordPress site.</l>
                            <li>Daily backups of your data plus redundant databases to protect all of your information.</li>
                            <li>File storage in Amazon\'s S3 storage system with encryption to manage files and documents. </li>
                            <li>Optional file storage in Dropbox using our Intranet Plus Dropbox plugin.</li>
                            <li>Complete revision history of files - all stored in Amazon\'s S3 system.</li>
                            <li>Complete management of user accounts, including the lost password process, outside of the WordPress user management system. </li>
                            </ul>

                            </div>

                            <div class="bpm-row">
                                <div class="bpm-large-12 bpm-small-12 bpm-columns text-right bpm_text_medium">' . __('By signing up for an account you agree to the BPMContext ', 'bpmcontext') . ' <a class="bpm_links bpm_lng_terms_of_service" href="https://bpmcontext.com/terms-of-service" target="_blank">' . __('Terms of Service', 'bpmcontext') . '</a> & <a class="bpm_links bpm_lng_privacy_policy" href="https://bpmcontext.com/privacy" target="_blank">' . __('Privacy Policy', 'bpmcontext') . '</a>&nbsp;&nbsp; </div>
                            </div>
                            <br>
                           </div>';

            return $html_line;
        }

        function bpm_sdk_get_html_main()
        {

            $imagedir = plugins_url() . '/bpmcontext/images/';

            ob_start();

            echo '<div id="bpm_content_area" class="bpm_content_area bpm_content_area_top foundation" >

        <div class="bpm-row full-width"  id="bpm_page_loading_alert" >
            <div data-alert class="alert-box success radius" > ' . __('Page loading...', 'bpmcontext') . '</div >
        </div >

        <div data-alert class="alert-box warning radius bpm_alert_bar bpm-hide" id="bpm_context_third_party_cookie" ><h4 style="color:white">' . __('Browser Setting Change Required', 'bpmcontext') .'</h4>'.__("The BPMContext plugin relies on setting authentication cookies in a your browser on behalf of BPMContext. Such cookies are called 'third-party cookies'. These cookies help identify your browser and maintain your session once you have logged in.<br><br>For a helpful article on how to add an exception and allow our cookies, which will then allow our plugin to work, go to our ", 'bpmcontext') .'<a target="_blank" style="color:white;text-decoration: underline !important;" href="https://support.bpmcontext.com/setup-my-account/web-browser-third-party-cookies/">Support Site</a></div>

        <div id="bpm_login_area" class="bpm-hide" >
            <div class="bpm-row full-width" >
                <div class="bpm-small-12 bpm-large-12 bpm-columns bpm_height_50" >&nbsp;</div >
            </div >
            <div class="bpm-row full-width" >
                <div class="bpm-small-2 bpm-large-2 bpm-columns" >&nbsp;</div >
                <div class="bpm-small-6 bpm-large-6 bpm-columns" id="bpm_header_main_4" >
                    <div class="bpm-row" >
                        <div class="bpm-small-6 bpm-large-6 bpm-columns text-right bpm_left_menu " > ' . __('Email Address', 'bpmcontext') . ' </div >
                        <div class="bpm-small-6 bpm-large-6 bpm-columns text-right" ><input class="bpm_email_login bpm_pl_email" type="text" placeholder="' . __('Email Address', 'bpmcontext') . '" name="BPM_Email" id="bpm_email_3" tabindex="3" value="" /></div >
                    </div >
                    <div class="bpm-row" >
                        <div class="bpm-small-6 bpm-large-6 bpm-columns text-right " > ' . __('Password', 'bpmcontext') . ':</div >
                        <div class="bpm-small-6 bpm-large-6 bpm-columns text-right" ><input class="bpm_password_login " type="password" placeholder="' . __('Password', 'bpmcontext') . '" name="BPM_Password" id="bpm_password1_4" tabindex="4" value="" /></div >
                    </div >
                    <div class="bpm-row" >
                        <div class="bpm-small-9 bpm-large-9 bpm-columns text-right" >&nbsp;
                            <div data-alert class="alert-box alert radius text-left bpm-hide" id="bpm_error_message_4" ></div >
                        </div >
                        <div class="bpm-small-3 bpm-large-3 bpm-columns text-right" ><input id="bpm_login_button_2" type="button" onClick="bpmcontext.bpm_submitLogIn();" value="' . __('Login', 'bpmcontext') . '" tabindex="2" class="bpm_button" ></div >
                        </div >
                    <div class="bpm-row" >
                        <div class="bpm-small-12 bpm-large-12 bpm-columns text-right" ><div id="bpm_lost_password_4" class="bpm_return_link" onClick="bpmcontext.bpm_showGetPassword();" ><a > ' . __('Lost Password', 'bpmcontext') . ' </a ></div ></div >
                    </div >
                    <div id="bpm_create_account_button_area" >
                        <div class="bpm-row" >
                            <div class="bpm-small-12 bpm-large-12 bpm-columns text-right" ><input id="bpm_create_account_button" type="button" onClick="bpmcontext.bpm_show_new_account();" value="' . __('Create a free BPMContext Account', 'bpmcontext') . '" class="bpm_button " ></div >
                        </div >
                    </div>
                </div >
                <div class="bpm-small-6 bpm-large-6 bpm-columns bpm-hide" id="bpm_reset_password_4" >

                    <div class="bpm-row" >
                        <div class="bpm-small-12 bpm-large-12 bpm-columns text-right" >
                            <div id="bpm_lost_password_message" class="bpm_lng_lost_password_message" > ' . __('We will help you get your password by emailing a link to create a new one.', 'bpmcontext') . '<br ></div >
                        </div >
                    </div ><br >

                    <div class="bpm-row" >
                        <div class="bpm-small-6 bpm-large-6 bpm-columns text-right" >' . __('Email Address', 'bpmcontext') . '</div >
                        <div class="bpm-small-6 bpm-large-6 bpm-columns text-right" ><input type="text" placeholder="' . __('Email Address', 'bpmcontext') . '"  name="bpm_email_forgot" id="bpm_email_forgot_4" tabindex="1" value="" /></div >
                    </div >

                    <div class="bpm-row" >
                        <div class="bpm-small-12 bpm-large-12 bpm-columns text-right" >
                            <div data-alert class="alert-box success radius text-left bpm_lng_bpm_error_message_6 bpm-hide" id="bpm_error_message_6"  >' . __('We have sent an email with reset instructions. If the email does not arrive soon, check your spam folder.', 'bpmcontext') . '</div >
                        </div >
                    </div >

                    <div class="bpm-row" >
                        <div class="bpm-small-7 bpm-large-7 bpm-columns text-right" >&nbsp;
                            <div data-alert class="alert-box alert radius text-left bpm_lng_bpm_error_message_5 bpm-hide" id="bpm_error_message_5"  >' . __('The Email address entered does not seem to have an account on our site.  Please check for spelling errors and retry.', 'bpmcontext') . ' </div>
                        </div>
                        <div class="bpm-small-5 bpm-large-5 bpm-columns text-right" id="bpm_lost_password_button_4_row"><input id="bpm_lost_password_button_4" type="button" onClick="bpmcontext.bpm_set_email();" value="' . __('Reset Password', 'bpmcontext') . '" class="bpm_lost_password_button"></div>
                    </div>
                    <div class="bpm-row">
                        <div class="bpm-small-12 bpm-large-12 bpm-columns text-right">
                            <div id="bpm_return_link_4" class="bpm_return_link" onClick="currentScreen=1;bpmcontext.bpm_reshow_login();"><a>' . __('Back to Login', 'bpmcontext') . '</a></div>
                        </div>
                    </div>
                </div>
            <br>
            </div>
            <div class="bpm-small-4 bpm-large-4 bpm-columns"></div>
            <br><br>
        </div>

        <div id="bpm_page_area" class="bpm_page_area" >

            <div class="bpm-row full-width bpm-hide" id="bpm_admin_bar_header">
                <div class="bpm-small-12 bpm-large-12 bpm-columns bpm_height_50">&nbsp;</div>
            </div>

            <div class="bpm-row full-width">
                <div class="bpm-small-12 bpm-large-12 bpm-columns">
                    <div data-alert class="alert-box success radius bpm-hide" id="bpm_top_messages">
                        <a href="#" class="close">&times;</a>
                    </div>
                </div>
            </div>

            <div class="bpm-breadcrumb-row">
                <div class="bpm_inline_div bpm_breadcrumb_left" ><ul class="breadcrumbs" id="bpm_breadcrumbs" ></ul></div>
                <div id="bpm_profile_drop_holder" class="bpm_inline_div bpm_breadcrumb_right" >
                    <button href="#" data-dropdown="bpm_profile_drop" aria-controls="bpm_profile_drop" aria-expanded="false" class="dropdown bpm_breadcrumb_button" data-options="is_hover: false"><span class="fi-torso"></span>&nbsp;Profile</button><br>
                    <ul id="bpm_profile_drop" data-dropdown-content class="f-dropdown" aria-hidden="true">
                      <li><a class="bpm_nodecoration" id="left_prefmgr" onClick="bpmcontext.bpm_open_modal(this);">' . __('My Page', 'bpmcontext') . '</a></li>
                      <li><a class="bpm_nodecoration" id="bpm_user_info_edit" onClick="bpmcontext.bpm_info_action(this);">' . __('Edit Profile', 'bpmcontext') . '</a></li>
                      <li><a class="bpm_nodecoration" id="bpm_user_password_topbar" onClick="bpmcontext.bpm_info_action(this);">' . __('Change Password', 'bpmcontext') . '</a></li>
                      <li><a class="bpm_nodecoration" id="bpm_user_homepage_manager" onClick="bpmcontext.bpm_info_action(this);">' . __('Homepage Options', 'bpmcontext') . '</a></li>
                      <li><a class="bpm_nodecoration" id="bpm_user_qtips_display" onClick="bpmcontext.bpm_info_action(this);">' . __('Turn Tooltips Off', 'bpmcontext') . '</a></li>
                      <li id="bpm_help_doc_widget_display" class="bpm-hide"><a id="bpm_help_doc_widget_display_link" class="bpm_nodecoration"  onClick="bpmcontext.bpm_open_help_doc_widget();">' . __('About This Workspace Type', 'bpmcontext') . '</a></li>
                      <li class="bpm-help-center"><a id="bpm_toolbar_help_widget" class="bpm_nodecoration button-discussion-plus" onClick="bpmcontext.bpm_open_help_widget();"><span class="fa fa-search"></span> &nbsp;' . __('Help Center', 'bpmcontext') . '</a></li>
                      <li><a class="bpm_nodecoration" id="left_logout" onClick="bpmcontext.bpm_open_modal(this);"><span class="fa fa-sign-out"></span>&nbsp;<span>' . __('Logout', 'bpmcontext') . '</span></a></li>
                    </ul>
                    </div>
            </div>

            <div class="bpm-row full-width">

                <div class="bpm-small-12 bpm-large-12 bpm-columns">

                <div data-alert class="alert-box success radius bpm_alert_bar bpm-hide" id="bpm_main_loading_alert">' . __('Page loading...', 'bpmcontext') . '</div>

                <div data-alert class="alert-box success radius bpm_alert_bar bpm-hide" id="bpm_context_loading_alert" >' . __('Account loading...', 'bpmcontext') . '</div>

                <div data-alert class="alert-box success radius bpm_alert_bar bpm-hide" id="bpm_main_publishing_alert" >' . __('Hurray! Your work is done...time for a coffee!', 'bpmcontext') . '</div>

                <div data-alert class="alert-box success radius bpm_alert_bar bpm-hide" id="bpm_main_routing_alert" >' . __('Assigning task and sending notifications. Maybe a snack is in order.', 'bpmcontext') . '</div>

                <div data-alert class="alert-box success radius bpm_alert_bar bpm-hide" id="bpm_context_deleting_alert" >' . __('Deleting page...', 'bpmcontext') . '</div>

                <div data-alert class="alert-box alert radius bpm_alert_bar bpm-hide" id="bpm_context_error_alert" >&nbsp;</div>

                    <div id="bpm_main_toolbar" class="bpm_main_toolbar bpm-top-bar" data-topbar role="navigation">

                        <section class="top-bar-section">
                            <ul class="right">
                                <li class="bpm_ul_li bpm-non-account-manager"><label id="bpm_toolbar_owner" class="bpm_toolbar_owner" title="' . __('Documents in Draft mode can only be edited and viewed by the owner. Published documents and closed workflows can still be edited.', 'bpmcontext') . '"></label></li>

                                <li class="active has-dropdown bpm-hide  bpm_ul_li bpm-non-account-manager" id="bpm_workflow_menu" >
                                    <a class="fi-page-export button-discussion-plus bpm_nodecoration" id="bpm-workflow-button">&nbsp;' . __('Workflow', 'bpmcontext') . '</a>
                                    <ul class="dropdown">
                                        <li class="bpm_ul_li"><a class="bpm-hide bpm_nodecoration" id="bpm_toolbar_can_route_to" onClick="bpmcontext.bpm_action(this);">' . __('Route to...', 'bpmcontext') . '</a></li>
                                        <li class="bpm_ul_li"><a class="bpm-hide bpm_nodecoration" id="bpm_toolbar_can_subroute_back" onClick="bpmcontext.bpm_action(this);">' . __('Route to {name}', 'bpmcontext') . '</a></li>
                                        <li class="bpm_ul_li"><a class="bpm-hide bpm_nodecoration" id="bpm_toolbar_can_route_next" onClick="bpmcontext.bpm_action(this);">' . __('Route to {name}', 'bpmcontext') . '</a></li>
                                        <li class="bpm_ul_li"><a class="bpm-hide bpm_nodecoration" id="bpm_toolbar_can_route_owner" onClick="bpmcontext.bpm_action(this);">' . __('Route to {name}', 'bpmcontext') . '</a></li>
                                        <li class="bpm_ul_li"><a class="bpm-hide bpm_nodecoration" id="bpm_toolbar_can_route_back" onClick="bpmcontext.bpm_action(this);">' . __('Route back to...', 'bpmcontext') . ' </a></li>
                                        <li class="bpm_ul_li"><a class="bpm-hide bpm_nodecoration" id="bpm_toolbar_can_subroute" onClick="bpmcontext.bpm_action(this);">' . __('Sub-route to...', 'bpmcontext') . '</a></li>
                                        <li class="bpm_ul_li"><a class="bpm-hide bpm_nodecoration" id="bpm_toolbar_recall" onClick="bpmcontext.bpm_action(this);">' . __('Recall', 'bpmcontext') . '</a></li>
                                        <li class="bpm_ul_li"><a class="bpm-hide bpm_nodecoration" id="bpm_toolbar_terminate" onClick="bpmcontext.bpm_action(this);">' . __('Terminate', 'bpmcontext') . '</a></li>
                                        <li class="bpm_ul_li"><a class="bpm-hide bpm_nodecoration" id="bpm_toolbar_publish" onClick="bpmcontext.bpm_action(this);">' . __('Publish', 'bpmcontext') . '</a></li>
                                        <li class="bpm_ul_li"><a class="bpm-hide bpm_nodecoration" id="bpm_toolbar_close" onClick="bpmcontext.bpm_action(this);">' . __('Close', 'bpmcontext') . '</a></li>
                                        <li class="bpm_ul_li"><a class="bpm-hide bpm_nodecoration" id="bpm_toolbar_cancel_delete" onClick="bpmcontext.bpm_action(this);">' . __('Cancel and Delete', 'bpmcontext') . '</a></li>
                                    </ul>
                                </li>

                                <li class="divider bpm_width_8" id="bpm_workflow_menu_target"></li>

                                <li class="bpm_ul_li bpm-help-center"><a id="bpm_toolbar_search_widget" class="bpm_nodecoration button-discussion-plus" onClick="bpmcontext.bpm_open_search_widget();"><span class="fa fa-search"></span> &nbsp;' . __('Search', 'bpmcontext') . '</a></li>

                            </ul>

                            <ul class="left">

                                <li class="has-dropdown bpm_ul_li" id="bpm_main_menu_dd" >
                                    <a id="bpm_main_menu_dd_items" class="fi-list bpm_nodecoration button-discussion-plus" >&nbsp;' . __('Main Menu', 'bpmcontext') . '&nbsp;
                                        <span id="bpm_has_notifications" class="fa-stack bpm_font_size_point_7">
                                            <i class="fa fa-square fa-stack-2x bpm_color_red"></i>
                                            <i id="bpm_notification_badge" class="fa fa-inverse fa-stack-1x bpm_notification_numbers bpm_bold">0</i>
                                        </span>
                                    </a>
                                    <ul class="dropdown " id="bpm_toolbar_main_menu">
                                    <li class="has-dropdown bpm_ul_li" id="bpm_left_context_list"><a class="bpm_nodecoration">' . __('Switch Account', 'bpmcontext') . '...</a>
                                            <ul class="dropdown" id="bpm_context_list"> </ul>
                                        </li>

                                        <li class="bpm_ul_li" id="bpm_notifications_list_parent">
                                            <a class="bpm_nodecoration bpm_left_menu" id="left_notifications" onClick="bpmcontext.bpm_open_modal(this);"><span class="fa fa-bell-o"></span>&nbsp;<span>' . __('Notifications', 'bpmcontext') . '</span>&nbsp;<span id="bpm_notification_count">&nbsp;</span></a>
                                        </li>

                                        <li class="bpm_ul_li">
                                            <a class="bpm_nodecoration bpm_left_menu" id="left_talat_messages" onClick="bpmcontext.bpm_open_modal(this);"><span class="fi-mail"></span>&nbsp;<span>' . __('Messages', 'bpmcontext') . '</span>&nbsp;<span id="bpm_talat_messages_count"></span></a>
                                        </li>
                                        <li class="bpm_ul_li bpm-hide" id="left_quick_docs_item">
                                            <a class="bpm_nodecoration bpm_left_menu" id="left_quick_docs" onClick="bpmcontext.bpm_open_modal(this);"><span class="fi-plus"></span>&nbsp;<span>' . __('Quick Docs', 'bpmcontext') . '</span></a>
                                        </li>
                                        <li class="bpm_ul_li">
                                            <a class="fi-mail bpm_nodecoration bpm_left_menu"  id="left_subscriptions" onClick="bpmcontext.bpm_open_modal(this);">&nbsp;<span >' . __('Subscriptions', 'bpmcontext') . '</span>&nbsp;<span id="bpm_subscription_count"></span></a>
                                        </li>
                                        <li class="bpm_ul_li">
                                            <a class="fi-comment bpm_nodecoration bpm_left_menu" id="left_discussions" onClick="bpmcontext.bpm_open_modal(this);">&nbsp;' . __('Discussions', 'bpmcontext') . '</a>
                                        </li>
                                        <li class="bpm_ul_li">
                                            <a class="fi-bookmark bpm_nodecoration bpm_left_menu"  id="left_bookmarks" onClick="bpmcontext.bpm_open_modal(this);">&nbsp;' . __('Bookmarks', 'bpmcontext') . '</a>
                                        </li>
                                        <div class="bpm_menu_divider bpm-hide">Pages</div>
                                        <li class="bpm_ul_li">
                                            <a class="fi-clock bpm_nodecoration bpm_left_menu" id="left_recent" onClick="bpmcontext.bpm_open_modal(this);">&nbsp;' . __('Recent', 'bpmcontext') . '</a>
                                        </li>
                                        <li class="bpm_ul_li">
                                            <a class="bpm_nodecoration bpm_left_menu"  id="left_history" onClick="bpmcontext.bpm_open_modal(this);"><span class="fa fa-history"></span>&nbsp;<span class="bpm_lng_my_history">' . __('My History', 'bpmcontext') . '</span></a>
                                        </li>
                                        <li class="bpm_ul_li">
                                            <a class="fi-page-multiple bpm_nodecoration bpm_left_menu"  id="left_pagetypes" onClick="bpmcontext.bpm_open_modal(this);">&nbsp;' . __('All Workspaces', 'bpmcontext') . '</a>
                                        </li>
                                        <li class="bpm_ul_li ">
                                            <a class="fi-torsos bpm_nodecoration bpm_left_menu bpm-hide"  id="left_customers" onClick="bpmcontext.bpm_open_modal(this);">&nbsp;' . __('Customer List', 'bpmcontext') . '</a>
                                        </li>
                                        <li class="bpm_ul_li">
                                            <a class="fi-torsos bpm_nodecoration bpm_left_menu bpm-hide" id="left_suppliers" onClick="bpmcontext.bpm_open_modal(this);">&nbsp;' . __('Supplier List', 'bpmcontext') . '</a>
                                        </li>
                                        <li class="bpm_ul_li bpm-hide">
                                            <a class="fi-checkbox bpm_nodecoration bpm_left_menu bpm-hide"  id="left_teamtasks" onClick="bpmcontext.bpm_open_modal(this);">&nbsp;' . __('Team Tasks', 'bpmcontext') . '</a>
                                        </li>
                                        <li class="bpm_ul_li" id="left_directory_item">
                                            <a class="fi-torsos-all bpm_nodecoration bpm_left_menu"  id="left_directory" onClick="bpmcontext.bpm_open_modal(this);">&nbsp;' . __('Directory', 'bpmcontext') . '</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="bpm_ul_li bpm-hide bpm-account-manager "><a id="bpm_toolbar_admin_home" onClick="bpmcontext.bpm_open_modal(this);" class=" fi-home button-discussion-plus bpm_nodecoration bpm-unselectable">&nbsp;' . __('Home', 'bpmcontext') . '</a></li>
                                <li class="bpm_ul_li bpm-hide bpm-account-manager "><a id="bpm_toolbar_admin_users" onClick="bpmcontext.bpm_open_modal(this);" class=" fi-torso button-discussion-plus bpm_nodecoration bpm-unselectable">&nbsp;' . __('Users', 'bpmcontext') . '</a></li>
                                <li class="bpm_ul_li bpm-hide bpm-account-manager"><a id="bpm_toolbar_admin_workspaces" onClick="bpmcontext.bpm_open_modal(this);" class="button-discussion-plus bpm_nodecoration bpm-unselectable"><span class="fa fa-sitemap"></span>&nbsp;' . __('Workspaces', 'bpmcontext') . '</a></li>
                                <li class="bpm_ul_li bpm-hide bpm-account-manager" id="bpm_toolbar_admin_url_item"><a id="bpm_toolbar_admin_url" onClick="bpmcontext.bpm_open_modal(this);" class=" fi-alert button-discussion-plus bpm_nodecoration bpm-unselectable">&nbsp;' . __('Login URL', 'bpmcontext') . '</a></li>

                                <li class="has-dropdown bpm_ul_li bpm-non-account-manager" id="bpm_add_pages_dd" >
                                    <a class="fi-plus bpm_lng_add_new bpm_nodecoration button-discussion-plus" >&nbsp;' . __('Add New', 'bpmcontext') . '</a>
                                    <ul class="dropdown  " id="bpm_toolbar_add_page"></ul>
                                </li>

                                <li class="bpm_ul_li bpm-non-account-manager"><a id="bpm_toolbar_talat" onClick="bpmcontext.bpm_open_modal(this);" class="fi-comment button-discussion-plus bpm_nodecoration">&nbsp;' . __('Take a Look', 'bpmcontext') . '</a></li>

                                <li class="has-dropdown bpm_ul_li bpm-non-account-manager" id="bpm_view_as_dd_button">
                                    <a class="fi-eye button-discussion-plus bpm_nodecoration">&nbsp;' . __('View As', 'bpmcontext') . '</a>
                                    <ul class="dropdown  " id="bpm_view_as_dd"></ul>
                                </li>

                                <li class="has-dropdown bpm_ul_li bpm-non-account-manager" id="bpm_toolbar_options">
                                    <a class="fi-list-thumbnails button-discussion-plus bpm_nodecoration">&nbsp;' . __('Options', 'bpmcontext') . '</a>
                                    <ul class="dropdown bpm_toolbar_options_dd">
                                        <li class="bpm_toolbar_options_dd bpm_ul_li"><a onClick="bpmcontext.bpm_action(this);" class="fi-alert bpm-hide bpm_nodecoration" id="bpm_stop_sharing">&nbsp;' . __('Stop Sharing', 'bpmcontext') . '</a></li>
                                        <li class="bpm_toolbar_options_dd bpm_ul_li"><a onClick="bpmcontext.bpm_action(this);" class="fi-alert bpm-hide bpm_nodecoration" id="bpm_restart_sharing">&nbsp;' . __('Restart Sharing', 'bpmcontext') . '</a></li>
                                        <li class="bpm_toolbar_options_dd bpm_ul_li"><a onClick="bpmcontext.bpm_action(this);" class="bpm_nodecoration" id="bpm_toolbar_bookmark">' . __('Bookmark', 'bpmcontext') . '</a></li>
                                        <li class="bpm_toolbar_options_dd bpm_ul_li"><a onClick="bpmcontext.bpm_action(this);" class="bpm_nodecoration" id="bpm_toolbar_unbookmark">' . __('Remove Bookmark', 'bpmcontext') . '</a></li>
                                        <li class="bpm_toolbar_options_dd bpm_ul_li"><a onClick="bpmcontext.bpm_action(this);" class="bpm_nodecoration" id="bpm_toolbar_subscribe_page">' . __('Subscribe', 'bpmcontext') . '</a></li>
                                        <li class="bpm_toolbar_options_dd bpm_ul_li"><a onClick="bpmcontext.bpm_action(this);" class="bpm_nodecoration bpm-hide" id="bpm_toolbar_unsubscribe_page">' . __('Un-Subscribe', 'bpmcontext') . '</a></li>
                                        <li class="bpm_toolbar_options_dd bpm_ul_li"><a onClick="bpmcontext.bpm_action(this);" class="bpm_nodecoration" id="bpm_toolbar_tag_page">' . __('Tag Workspace Type', 'bpmcontext') . '</a></li>
                                        <li class="bpm_toolbar_options_dd bpm_ul_li"><a onClick="bpmcontext.bpm_action(this);" class="bpm_nodecoration bpm-hide" id="bpm_toolbar_untag_page">' . __('Un-Tag Workspace Type', 'bpmcontext') . '</a></li>
                                    </ul>
                                </li>

                                <li class="has-dropdown bpm_ul_li bpm-hide bpm-non-account-manager" id="bpm_toolbar_page_menu">
                                    <a class="fi-thumbnails bpm_nodecoration button-discussion-plus">&nbsp;' . __('Page Menu', 'bpmcontext') . '</a>
                                    <ul class="dropdown  " id="bpm_toolbar_page_menu_dd"></ul>
                                </li>

                                <li class="has-dropdown bpm_admin_only bpm_ul_li bpm-hide bpm-non-account-manager" id="bpm_admin_toolbar_dd">
                                    <a class="fi-widget bpm_nodecoration button-discussion-plus">&nbsp;' . __('Admin', 'bpmcontext') . '</a>
                                    <ul class="dropdown  ">
                                        <li class="bpm_ul_li" id="left_acctmgr_item" >
                                            <a class="fi-lock bpm_nodecoration bpm_left_menu" id="left_acctmgr" onClick="bpmcontext.bpm_open_modal(this);">&nbsp;' . __('Account Mgr', 'bpmcontext') . '</a>
                                        </li>
                                        <li class="bpm_ul_li" id="left_acctmgr_invite_item" >
                                            <a class="fi-torso bpm_nodecoration bpm_left_menu bpm_lng_acct_mgr_invite" id="left_acctmgr_invite" onClick="bpmcontext.bpm_open_modal(this);">&nbsp;' . __('Invite Team Members', 'bpmcontext') . '</a>
                                        </li>
                                        <li class="bpm_ul_li"><a id="bpm_toolbar_admin_rename" class="bpm_admin_menu_item bpm_nodecoration" onClick="bpmcontext.bpm_action(this);">' . __('Rename', 'bpmcontext') . '</a></li>

                                        <li class="bpm_ul_li bpm-hide" id="bpm_toolbar_admin_extensions" >
                                            <a class="bpm_admin_menu_item bpm_nodecoration" onClick="bpmcontext.bpm_admin_extensions_front_end_display();">' . __('Extensions', 'bpmcontext') . '</a>
                                        </li>

                                        <li class="bpm_ul_li"><a id="bpm_toolbar_admin_delete" class="bpm_admin_menu_item bpm_nodecoration" onClick="bpmcontext.bpm_action(this);">' . __('Delete', 'bpmcontext') . '</a></li>
                                        <li class="bpm_ul_li"><a id="bpm_toolbar_admin_undelete" class="bpm-hide bpm_admin_menu_item bpm_nodecoration" onClick="bpmcontext.bpm_action(this);">' . __('Undelete', 'bpmcontext') . '</a></li>
                                        <li class="bpm_ul_li"><a id="bpm_toolbar_admin_move" class="bpm_admin_menu_item bpm_nodecoration bpm-hide" onClick="bpmcontext.bpm_action(this);">' . __('Move', 'bpmcontext') . '</a></li>
                                        <li class="bpm_ul_li"><a id="bpm_toolbar_admin_close" class="bpm_admin_menu_item bpm_nodecoration" onClick="bpmcontext.bpm_action(this);">' . __('Close', 'bpmcontext') . '</a></li>
                                        <li class="has-dropdown bpm_ul_li" id="bpm_toolbar_admin_editor"><a class="bpm_admin_menu_item bpm_nodecoration">' . __('Workspace Designer', 'bpmcontext') . '</a>
                                            <ul class="dropdown">
                                                <li class="bpm_ul_li"><a id="bpm_toolbar_admin_edit_ws" class="bpm_nodecoration" onClick="bpmcontext.bpm_action(this);">' . __('Edit this Workspace Template', 'bpmcontext') . '</a></li>
                                                <li class="bpm_ul_li"><a id="bpm_toolbar_admin_add_ws" class="bpm_nodecoration" onClick="bpmcontext.bpm_action(this);">' . __('Add Child Workspace Template', 'bpmcontext') . '</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li class="bpm_ul_li bpm-non-account-manager bpm-hide active" id="bpm_theme_width_button"><a id="bpm_theme_width" onClick="bpmcontext.bpm_open_modal(this);" class="button-discussion-plus bpm_nodecoration">&nbsp;' . __('Theme Width', 'bpmcontext') . '</a></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>

            <div class="bpm-row full-width">
                <div class="bpm-small-8 bpm-large-8 bpm-columns">
                    <div class="bpm-row">
                        <div id="bpm_main_content_holder" class="bpm-large-12 bpm-columns bpm_main_content">

                                <div data-alert class="alert-box success radius bpm-hide" id="bpm_main_success_alert" >
                                    <a href="#" class="close">&times;</a>
                                </div>

                                <div data-alert class="alert-box info radius bpm-hide" id="bpm_main_change_name" >' . __('It looks like you are using the default account name.  You can change the name by clicking ', 'bpmcontext') . '<a onclick="bpmcontext.bpm_rename_homepage();">Rename</a>
                                </div>

                                <div data-alert class="alert-box info radius bpm-hide" id="bpm_main_change_my_name" >' . __('It looks like you are using the default account User Name.  You can change the name by clicking ', 'bpmcontext') . '<a onclick="bpmcontext.bpm_rename_my_name();">Rename</a>
                                </div>

                                <div data-alert class="alert-box alert radius bpm-hide" id="bpm_main_error_alert" >
                                    <a href="#" class="close">&times;</a>
                                </div>

                                <div data-alert class="alert-box info radius bpm-hide" id="bpm_context_update_login_url_alert" >' . __('The login URL associated with this account is not the same as the current url.  You can update this using the Account Manager.', 'bpmcontext') . '
                                </div>

                                <div class="bpm_main_content" id="bpm_main_content"> </div>
                         </div>
                    </div>
                </div>

                <div class="bpm-small-4 bpm-large-4 bpm-columns" id="bpm_right_menu" >

                    <ul class="accordion bpm-hide bpm-right-accordion" id="bpm_right_talat" data-accordion>
                        <li class="accordion-navigation bpm_ul_li">
                            <a class="bpm_nodecoration  " onClick="bpmcontext.bpm_expand_accord(0);">' . __('Messages', 'bpmcontext') . '</a>
                            <nav id="bpm_talat_menu" class="bpm-top-bar bpm-hide" data-topbar role="navigation">
                                <section class="top-bar-section">
                                    <ul class="left">
                                        <li class="bpm_ul_li"><a class="bpm_nodecoration" onClick="bpmcontext.bpm_talat_dismiss()">' . __('Dismiss', 'bpmcontext') . '</a></li>
                                        <li class="bpm_ul_li"><a class="bpm_nodecoration" onClick="bpmcontext.bpm_talat_reply(0)">' . __('Reply', 'bpmcontext') . '</a></li>
                                        <li class="bpm_ul_li"><a class="bpm_nodecoration" onClick="bpmcontext.bpm_talat_reply(1)">' . __('Reply to All', 'bpmcontext') . '</a></li>
                                    </ul>
                                </section>
                            </nav>
                            <div id="right_acc_0" class="active bpm_infobox_all bpm_infobox_setup"> </div>
                        </li>
                    </ul>

                    <ul class="accordion bpm-right-accordion bpm-hide" data-accordion id="bpm_right_sharing" >
                        <li class="accordion-navigation bpm_ul_li">
                            <a class="bpm_nodecoration" onClick="bpmcontext.bpm_expand_accord(5);"  ><span class="bpm_lng_sharing">' . __('Sharing', 'bpmcontext') . '</span><div class="bpm_accordion_content"><span class="fa fa-info" ></span></div></a>
                            <div id="right_acc_5" class="active bpm_infobox_all bpm_infobox_setup" >

                            </div>
                        </li>
                    </ul>

                    <ul class="accordion bpm-hide bpm-right-accordion" data-accordion id="bpm_right_tutorial">
                        <li class="accordion-navigation bpm_ul_li">
                            <a href="#right_acc_1" onClick="bpmcontext.bpm_expand_accord(1);" id="right_acc_1_title" class="bpm_nodecoration ">' . __('Tutorials', 'bpmcontext') . '</a>
                            <div id="right_acc_1" class="active bpm_infobox_all bpm_infobox_setup"></div>
                        </li>
                    </ul>

                    <ul class="accordion bpm-hide bpm-right-accordion" data-accordion id="bpm_contact_us_widget">
                        <li class="accordion-navigation bpm_ul_li">
                            <a id="right_acc_13_title" ref="#right_acc_13" onClick="bpmcontext.bpm_expand_accord(13);" class="bpm_nodecoration ">' . __('Contact Form Summary', 'bpmcontext') . '</a>
                            <div id="right_acc_13" class="active bpm_infobox_all bpm_infobox_setup bpm_text_medium">

                            </div>
                        </li>
                    </ul>

                    <ul class="accordion bpm-hide bpm-right-accordion" data-accordion id="bpm_show_cust_loc">
                        <li class="accordion-navigation bpm_ul_li">
                            <a id="right_acc_2_title" ref="#right_acc_2" onClick="bpmcontext.bpm_expand_accord(2);" class="bpm_nodecoration ">' . __('Customer / Supplier Location Message', 'bpmcontext') . '</a>
                            <div id="right_acc_2" class="active bpm_infobox_all bpm_infobox_setup bpm_text_medium">

                            </div>
                        </li>
                    </ul>

                    <ul class="accordion bpm-hide bpm-right-accordion" data-accordion id="bpm_right_infobox">
                        <li class="accordion-navigation bpm_ul_li">
                            <a href="#right_acc_3" onClick="bpmcontext.bpm_expand_accord(3);"  class="bpm_nodecoration " ><span>' . __('Infobox', 'bpmcontext') . '</span><div class="bpm_accordion_content"><span class="fi-pencil" ></span></div></a>
                            <div id="right_acc_3" class="active">
                                <div class="bpm-row bpm-hide right_accordion_menu" id="bpm_edit_infobox_menu">
                                    <div class="bpm-large-12 bpm-small-12 bpm-columns">
                                        <nav class="bpm-top-bar " data-topbar role="navigation">
                                            <section class="top-bar-section">
                                                <ul class="left">
                                                    <li class="bpm_ul_li"><a onClick="bpmcontext.bpm_info_action(this);" class="fi-pencil bpm_lng_edit button-discussion-plus bpm_nodecoration" id="bpm_infobox_edit" >&nbsp;' . __('Edit', 'bpmcontext') . '</a></li>
                                                </ul>
                                            </section>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div id="bpm_infobox_accord_content"></div>
                        </li>
                    </ul>

                    <ul class="accordion bpm-hide bpm-right-accordion" data-accordion id="bpm_show_user_info">
                        <li class="accordion-navigation bpm_ul_li">
                            <a href="#right_acc_12"  onClick="bpmcontext.bpm_expand_accord(12);"  class="bpm_nodecoration " >' . __('Settings', 'bpmcontext') . '<div class="bpm_accordion_content"><span class="fa fa-lock"></span></div></a>
                            <div id="right_acc_12" class="active">
                                <div class="bpm-row bpm-hide right_accordion_menu" id="bpm_user_pref_bar">
                                    <div class="bpm-large-12 bpm-small-12 bpm-columns">
                                        <nav class="bpm-top-bar " data-topbar role="navigation">
                                            <section class="top-bar-section">
                                                <ul class="left">
                                                    <li class="bpm_ul_li"><a onClick="bpmcontext.bpm_info_action(this);" class="fi-pencil button-discussion-plus bpm_nodecoration" id="bpm_user_info_edit_back" >&nbsp;' . __('Edit', 'bpmcontext') . '</a></li>
                                                </ul>
                                            </section>
                                        </nav>
                                    </div>
                                </div>
                                <div class="bpm-row">
                                    <div class="bpm-large-12 bpm-small-12 bpm-columns text-right" id="bpm_user_real_name"></div>
                                 </div>
                                <div class="bpm-row">
                                    <div class="bpm-large-12 bpm-small-12 bpm-columns text-right" id="bpm_user_email"></div>
                                </div>
                                <div class="bpm-row">
                                    <div class="bpm-large-12 bpm-small-12 bpm-columns text-right" id="bpm_user_type"></div>
                                </div>
                                <div class="bpm-row">
                                    <div class="bpm-large-12 bpm-small-12 bpm-columns text-right" id="bpm_user_journal"></div>
                                </div>
                                <div class="bpm-row">
                                    <div class="bpm-large-12 bpm-small-12 bpm-columns text-right" id="bpm_user_time_zone"></div>
                                </div>
                            </div>
                        </li>
                    </ul>


                    <ul class="accordion bpm-right-accordion bpm-hide" data-accordion id="bpm_right_context_map" >
                        <li class="accordion-navigation bpm_ul_li">
                            <a class=" bpm_nodecoration" onClick="bpmcontext.bpm_expand_accord(4);"  ><span class="bpm_lng_context_map">' . __('Workspace Map', 'bpmcontext') . '</span><div class="bpm_accordion_content"><span class="fa fa-sitemap" ></span></div></a>
                            <div id="right_acc_4" class="active  bpm_infobox_setup bpm_infobox_setup_ws_map">
                            </div>
                        </li>
                    </ul>

                    <ul class="accordion bpm-right-accordion bpm-hide" data-accordion id="bpm_right_change_log" >
                        <li class="accordion-navigation bpm_ul_li">
                            <a class=" bpm_nodecoration" onClick="bpmcontext.bpm_expand_accord(6);" ><span class="bpm_lng_change_log">' . __('Change Log', 'bpmcontext') . '</span><div class="bpm_accordion_content"><span class="fa fa-info" ></span></div></a>
                            <div id="right_acc_6" class="bpm_infobox_all bpm_infobox_setup">

                            </div>
                        </li>
                    </ul>

                    <ul class="accordion bpm-right-accordion bpm-hide" data-accordion id="bpm_right_routing_history" >
                        <li class="accordion-navigation bpm_ul_li">
                            <a class=" bpm_nodecoration"  onClick="bpmcontext.bpm_expand_accord(7);" ><span class="bpm_lng_routing">' . __('Routing', 'bpmcontext') . '</span><div class="bpm_accordion_content"><span class="fa fa-info" ></span></div></a>
                            <div id="right_acc_7" class="active bpm_infobox_all bpm_infobox_setup">

                            </div>
                        </li>
                    </ul>

                    <ul class="accordion bpm-hide bpm-right-accordion" data-accordion id="bpm_right_subscribers" style="margin-bottom:2em;">
                        <li class="accordion-navigation bpm_ul_li">
                            <a class=" bpm_nodecoration"  onClick="bpmcontext.bpm_expand_accord(8);" ><span >' . __('Subscribers', 'bpmcontext') . '</span><div class="bpm_accordion_content"><span class="fa fa-info" ></span></div></a>
                            <div id="right_acc_8" class="active bpm_infobox_all bpm_infobox_setup">

                            </div>
                        </li>
                    </ul>

                    <ul class="accordion bpm-hide bpm-right-accordion" data-accordion id="bpm_event_data" style="margin-bottom:2em;">
                        <li class="accordion-navigation bpm_ul_li">
                            <a class=" bpm_nodecoration"  onClick="bpmcontext.bpm_expand_accord(9);" ><span >' . __('Calendar Info', 'bpmcontext') . '</span><div class="bpm_accordion_content"><span class="fa fa-calendar" ></span></div></a>
                            <div id="right_acc_9" class="bpm_infobox_all bpm_infobox_setup bpm-hide">

                            </div>
                        </li>
                    </ul>

                    <ul class="accordion bpm-right-admin-accordion bpm-hide" data-accordion id="bpm_right_admin-help" >
                        <li class="accordion-navigation bpm_ul_li">
                            <a class=" bpm_nodecoration"  onClick="bpmcontext.bpm_expand_accord(7);"  ><span class="bpm_lng_routing">' . __('Help', 'bpmcontext') . '</span><div class="bpm_accordion_content"><span class="fa fa-info" ></span></div></a>
                            <div id="bpm-admin-help-info" class="active bpm_infobox_all bpm_infobox_admin_help"></div>
                        </li>
                    </ul>

                    </div>
                </div>
            <div id="bpm_objects">
                <div id="bpm_left_widget_window" class="reveal-modal bpm-large" data-reveal aria-labelledby="bpm_widget_title" aria-hidden="true" role="dialog">
                    <h2 id="bpm_widget_title" class="bpm-header-2 ">' . __('Recent Changes', 'bpmcontext') . '</h2>

                    <div id="bpm_account_manager" class="bpm-hide">
                        <div class="bpm-row full-width">
                            <div class="bpm-large-3 bpm-small-3 bpm-columns">
                                <ul id="bpm_acct_manager_menu" class="side-nav">
                                    <li class="active bpm_ul_li text-left">
                                        <a id="bpm_acct_manager_users" class="bpm_nodecoration side-nav-item  " onClick="bpmcontext.bpm_acct_mgr(this);">' . __('Users', 'bpmcontext') . '</a>
                                    </li>
                                    <li class=" bpm_ul_li text-left">
                                        <a id="bpm_acct_manager_features" class="bpm_nodecoration side-nav-item " onClick="bpmcontext.bpm_acct_mgr(this);">' . __('Extensions', 'bpmcontext') . '</a>
                                    </li>
                                    <li class=" bpm_ul_li text-left">
                                        <a id="bpm_acct_manager_storage" class="bpm_nodecoration side-nav-item " onClick="bpmcontext.bpm_acct_mgr(this);">' . __('Storage', 'bpmcontext') . '</a>
                                    </li>
                                    <li class=" bpm_ul_li text-left bpm-hide" id="bpm_acct_manager_cart_item">
                                        <a id="bpm_acct_manager_cart" class="bpm_nodecoration side-nav-item " onClick="bpmcontext.bpm_acct_mgr(this);">' . __('Cart', 'bpmcontext') . '</a>
                                    </li>
                                    <li class=" bpm_ul_li text-left bpm-hide" id="bpm_acct_manager_payment_item" >
                                        <a id="bpm_acct_manager_payment" class="bpm_nodecoration side-nav-item " onClick="bpmcontext.bpm_acct_mgr(this);">' . __('Payment Info', 'bpmcontext') . '</a>
                                    </li>
                                    <li class=" bpm_ul_li text-left" id="bpm_acct_manager_statement_item">
                                        <a id="bpm_acct_manager_statement" class="bpm_nodecoration side-nav-item " onClick="bpmcontext.bpm_acct_mgr(this);">' . __('Statement', 'bpmcontext') . '</a>
                                    </li>
                                    <li class=" bpm_ul_li text-left" id="bpm_acct_manager_invoices_item">
                                        <a id="bpm_acct_manager_invoices" class="bpm_nodecoration side-nav-item " onClick="bpmcontext.bpm_acct_mgr(this);">' . __('Invoices', 'bpmcontext') . '</a>
                                    </li>
                                    <li class=" bpm_ul_li text-left" id="bpm_acct_manager_workspaces_item">
                                        <a id="bpm_acct_manager_workspaces" class="bpm_nodecoration side-nav-item " onClick="bpmcontext.bpm_acct_mgr(this);">' . __('Workspaces', 'bpmcontext') . '</a>
                                    </li>
                                    <li class=" bpm_ul_li text-left bpm-hide" id="bpm_acct_manager_login_url_item">
                                        <a id="bpm_acct_manager_login_url" class="bpm_nodecoration side-nav-item " onClick="bpmcontext.bpm_acct_mgr(this);">' . __('Login URL', 'bpmcontext') . ' (1)</a>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>


                    <div class="bpm-hide" id="bpm-admin-manager-frame">
                        <div class="bpm-row">
                            <div class="bpm-large-12 bpm-small-12 bpm-columns">
                                <div id="bpm_admin_users_topbar">
                                    <nav class="bpm-top-bar" data-topbar role="navigation">
                                        <section class="top-bar-section">

                                            <ul class="left">
                                                <li class="bpm_ul_li" id="bpm_admin_users_bar_button"><a onClick="bpmcontext.bpm_admin_action(this);" class="fi-plus bpm_nodecoration bpm-hide button-discussion-plus" id="bpm_admin_add_intranet_user" >&nbsp;' . __('Add Business User', 'bpmcontext') . '</a></li>
                                            </ul>
                                        </section>
                                    </nav><br>
                                </div>
                                <div id="bpm_account_manager_content" style="overflow-x: hidden;" class="text-left">' . __('Loading', 'bpmcontext') . '</div>
                                <div id="bpm_add_intranet_user_form" class="bpm-hide" >
                                    <form>
                                        <div data-alert class="alert-box success radius bpm-hide" id="bpm_add_intranet_user_added_alert" >' . __('User was added', 'bpmcontext') . '</div>

                                        <div class="bpm-row">
                                            <div class="bpm-large-6 bpm-small-6 bpm-columns text-right bpm_lng_name">' . __('Name', 'bpmcontext') . ': </div>
                                            <div class="bpm-large-6 bpm-small-6 bpm-columns"><input type="text" placeholder="e.g. Bob Smith" id="bpm_new_intranet_user_name"  /> </div>
                                        </div>
                                        <div class="bpm-row">
                                            <div class="bpm-large-6 bpm-small-6 bpm-columns text-right ">' . __('Email Address', 'bpmcontext') . ':</div>
                                            <div class="bpm-large-6 bpm-small-6 bpm-columns"><input type="text" placeholder="e.g. bob.smith@myreallycoolcompany.com" id="bpm_new_intranet_user_email"  /> </div>
                                        </div>
                                        <div class="bpm-row">
                                            <div class="bpm-large-6 bpm-small-6 bpm-columns text-right bpm_lng_message">' . __('Message', 'bpmcontext') . ': </div>
                                            <div class="bpm-large-6 bpm-small-6 bpm-columns"><textarea maxlength="250" placeholder="Optional welcome message" id="bpm_email_new_intranet_message" rows="3" ></textarea><br></div>
                                        </div>
                                        <div class="bpm-row">
                                            <div class="bpm-large-6 bpm-small-6 bpm-columns">&nbsp;
                                                <div data-alert class="alert-box alert radius bpm-hide" id="bpm_add_intranet_user_alert" ></div>
                                            </div>
                                            <div class="bpm-large-6 bpm-small-6 bpm-columns text-right"><a id="bpm_create_user_button" class="button bpm-small bpm_lng_invite_users bpm-unselectable bpm-debounce-button bpm_nodecoration" >' . __('Invite User', 'bpmcontext') . '</a>&nbsp;<a onClick="bpmcontext.bpm_cancel_create_user()" class="button bpm-small  bpm_nodecoration bpm-unselectable" >' . __('Return to List', 'bpmcontext') . '</a></div>
                                        </div>
                                    </form>
                                    <div class="bpm-add-user-overlay bpm-hide text-center" id="bpm-admin-add-user-activity"><div class="bpm-admin-activity"><span class="fa fa-spinner fa-spin fa-4x" >&nbsp;</span></div></div>
                                </div>
                            </div>
                        </div>
                    </div>';
global $bpm_plugin_name;
            echo '              <div class="bpm-hide" id="bpm_page_type_tabs">
                        <ul class="tabs" data-tab>
                            <li id="bpm_tab_tagged" class="tab-title bpm_ul_li" ><a href="#bpm_page_types_fav" class="bpm_nodecoration">' . __('Tagged', 'bpmcontext') . '</a></li>
                            <li id="bpm_tab_all" class="tab-title active bpm_ul_li" ><a href="#bpm_page_types_all" class="bpm_nodecoration">' . __('All Types', 'bpmcontext') . '</a></li>
                            <li id="bpm_tab_list" class="tab-title bpm-hide bpm_ul_li" ><a href="#bpm_page_types_res" class="bpm_nodecoration">' . __('List', 'bpmcontext') . '</a></li>
                        </ul>
                        <div class="tabs-content bpm_left_modal" id="bpm_page_type_tabs_content" ></div>
                    </div>

                    <div class="bpm-hide" id="bpm_left_customers_content">
                        <div class="bpm-row">
                            <div class="bpm-small-12 bpm-large-12 bpm-columns text-left">
                                <ul class="tabs" data-tab>
                                    <li class="tab-title active bpm_ul_li" ><a href="#bpm_left_customers_corp" class="bpm_nodecoration">' . __('Customers', 'bpmcontext') . '</a></li>
                                    <li class="tab-title bpm_ul_li" ><a href="#bpm_left_customers_loc" class="bpm_nodecoration">' . __('Customer Locations', 'bpmcontext') . '</a></li>
                                    <li class="tab-title bpm_ul_li" ><a href="#bpm_left_customers_contact" class="bpm_nodecoration">' . __('Contacts', 'bpmcontext') . '</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="tabs-content bpm_left_modal" id="bpm_left_customers_tab_content" style="overflow-x: hidden"></div>
                    </div>

                    <div class="bpm-hide" id="bpm_left_suppliers_content">
                        <ul class="tabs" data-tab>
                            <li class="tab-title active bpm_ul_li" ><a href="#bpm_left_customers_corp" class="bpm_nodecoration">' . __('Suppliers', 'bpmcontext') . '</a></li>
                            <li class="tab-title " ><a href="#bpm_left_customers_loc"  class="bpm_lng_suppliers bpm_nodecoration">' . __('Supplier Locations', 'bpmcontext') . '</a></li>
                            <li class="tab-title " ><a href="#bpm_left_customers_contact"  class="bpm_lng_contacts bpm_nodecoration">' . __('Contacts', 'bpmcontext') . '</a></li>
                        </ul>
                        <div class="tabs-content bpm_left_modal" id="bpm_left_suppliers_tab_content" style="overflow-x: hidden"></div>
                    </div>

                    <div id="bpm_left_widget_content" class="bpm_left_modal text-left">  </div>

                    <a class="close-reveal-modal bpm_nodecoration" aria-label="Close">&#215;</a>
                </div>

                <div id="bpm_edit_text_window" class="reveal-modal bpm-large" data-reveal aria-labelledby="bpm_edit_text_title" aria-hidden="true" role="dialog" data-options="close_on_background_click:false;close_on_esc:false;">
                    <h2 id="bpm_edit_text_title" class="bpm-header-2 bpm_lng_edit_text">' . __('Edit Text', 'bpmcontext') . '</h2>
                    <div id="bpm_edit_text_content" style="height:25em;">
                        <form autocomplete="off">
                            <div class="bpm-row">
                                <div class="bpm-small-12 bpm-large-12 bpm-columns">
                                    <textarea maxlength="3800" id="bpm_edit_text_reveal_text" bpm-rows="10" cols="120"></textarea><br>
                                </div>
                            </div>
                            <div class="bpm-row">
                                <div class="bpm-small-3 bpm-large-6 bpm-columns">&nbsp;<div data-alert class="alert-box success radius  bpm-hide" id="bpm_saving_text_alert" >' . __('Saving', 'bpmcontext') . '...</div>
                                </div>
                                <div class="bpm-small-9 bpm-large-6 bpm-columns text-right"><a onClick="bpmcontext.bpm_save_text(0);" class="button bpm-small bpm_lng_save bpm_nodecoration" >' . __('Save', 'bpmcontext') . '</a>&nbsp;<a onClick="bpmcontext.bpm_close_text()" class="button bpm-small bpm_lng_cancel bpm_nodecoration">' . __('Cancel', 'bpmcontext') . '</a></div>
                            </div>
                        </form>
                    </div>
                </div>

                <div id="bpm_text_history_window" class="reveal-modal bpm-large" data-reveal aria-labelledby="bpm_text_history_title" aria-hidden="true" role="dialog">
                    <h2 id="bpm_text_history_title" class="bpm-header-2 bpm_lng_view_history">' . __('View History', 'bpmcontext') . '</h2>
                    <div id="bpm_text_history_content" style="height:25em;"></div>
                    <a class="close-reveal-modal bpm_nodecoration" aria-label="Close">&#215;</a>
                </div>

                <div id="bpm_admin_template_wizard" class="reveal-modal bpm-large" data-reveal aria-labelledby="bpm_tempalte_wizard_title" aria-hidden="true" role="dialog">
                    <h2 id="bpm_tempalte_wizard_title" class="bpm-header-2 bpm_lng_view_history">' . __('Theme Width & Compatibility', 'bpmcontext') . '</h2>
                    <div id="bpm_template_wizard_content" style="max-height:40em;height:40em;"><br>
                    Once you dismiss this wizard it will not appear again.  To re-enable it go to the "Theme Settings" tab on the Theme Settings page in the WordPress Admin area.<br><br>
                        <ul class="tabs" data-tab>
                          <li class="tab-title active"><a class="bpm_nodecoration" id="bpm_admin_wizard_tab_1" href="#bpm_admin_wizard_1">Full Width Template</a></li>
                          <li class="tab-title"><a class="bpm_nodecoration" id="bpm_admin_wizard_tab_3" href="#bpm_admin_wizard_3">Theme Support</a></li>
                        </ul>
                        <div class="tabs-content">
                          <div class="content active" id="bpm_admin_wizard_1">
                            <div id="bpm_admin_wizard_1_full_selected" class="bpm-hide"> <p>Great news!  Your theme has a full-width template and it is already selected.  If you are still not happy with how the plugin looks in your theme go to the Custom CSS tab.</p></div>
                            <div id="bpm_admin_wizard_1_full_not_selected" class="bpm-hide"><p>You can select a different page template below to try to make the plugin wider on your theme.  Once you click "Update" the page will be refreshed so you can see the results.  If this fixes the width of the plugin then you will not see this wizard again, otherwise, we will give you some more options to resolve the issue.</p></div>
                            <div id="bpm_admin_wizard_1_full_not_selected_data" class="bpm-hide"></div>
                            <div id="bpm_admin_wizard_1_full_no_templates" class="bpm-hide"><p>We were unable to find a list of template names for this theme.  Your theme settings may allow you to select a full width template.</p>
                            <ul><li>Click the link to view your page and look for page layout options. </li>
                            <li>Select a Full Width template</li>
                            <li>If sidebars or widgets are displayed, the plugin may appear too narrow. Your theme settings may allow you to hide widgets and sidebars on specific pages.</li>
                            </ul>
                            <p>This help window will not reappear if the width issue is resolved.</p></div>
                            <div id="bpm_admin_wizard_1_full_no_templates_data" class="bpm-hide"></div>
                          </div>
                          <div class="content" id="bpm_admin_wizard_2">
                            <div id="bpm_admin_wizard_2_css" ><p>You can make changes to the css which will be utilized on this page ONLY to help make the plugin fit better. No other pages in your site will be affected.</p></div>
                            <div id="bpm_admin_wizard_2_css_data" style="overflow-y:scroll;max-height:26em;"></div>
                          </div>
                          <div class="content" id="bpm_admin_wizard_3">
                            <p>If you are still unable to get the plugin looking great in your site maybe we can help.</p>
                            <p>We will be happy to help troubleshoot your theme and plugins for compatibility with '. $bpm_plugin_name.'. </p>
                            <ul>
                            <li>Send us a note to <a href="mailto:customer.service@bpmcontext.com" target="_top">customer.service@bpmcontext.com</a></li>
                            <li>Please include a screenshot and your theme name</li>
                            <li>Include the URL if the site is available for us to see on the Internet</li>
                            </ul>
                          </div>
                        </div>
                    </div>
                    <a class="close-reveal-modal bpm_nodecoration" aria-label="Close">&#215;</a>
                </div>

                <div id="bpm_feedback_support_window" class="reveal-modal bpm-large" data-reveal aria-labelledby="bpm_feedback_support_title" aria-hidden="true" role="dialog">
                    <h2 id="bpm_feedback_support_title" class="bpm-header-2 bpm_lng_view_history">' . __('Feedback & Support', 'bpmcontext') . '</h2>
                    <div id="bpm_feedback_support_content" style="min-height:27rem;">
                        <div class="bpm-row">
                            <div class="bpm-small-12 bpm-large-12 bpm-columns" style="font-size: 1.25rem;">' . __('How can we help? The BPMContext Support Team is ready to help. We want your questions, feedback, feature requests and bug reports.', 'bpmcontext') . '</div>
                        </div>
                        <br>
                        <div class="bpm-row">
                            <div class="bpm-small-2 bpm-large-2 bpm-columns">' . __('Subject', 'bpmcontext') . '</div>
                            <div class="bpm-small-10 bpm-large-10 bpm-columns"><input id="bpm_support_subject" type="text" /></div>
                        </div>
                        <br>
                        <div class="bpm-row">
                            <div class="bpm-small-12 bpm-large-12 bpm-columns">
                                <textarea  placeholder="' . __('Enter feedback or support request information...', 'bpmcontext') . '" id="bpm_edit_support_text" rows="10" cols="120"></textarea>
                            </div>
                        </div>
                        <div class="bpm-row">
                            <div class="bpm-small-12 bpm-large-12 bpm-columns text-right">
                                <a onClick="bpmcontext.bpm_save_support_text();" class="button bpm-small bpm_lng_save bpm_nodecoration" >' . __('Send', 'bpmcontext') . '</a>&nbsp;<a onClick="bpmcontext.bpm_cancel_support_text()" class="button bpm-small bpm_lng_cancel bpm_nodecoration" >' . __('Cancel', 'bpmcontext') . '</a>
                            </div>
                        </div>
                        <div id="bpm_ws_support_activity_cover" class="bpm-admin-overlay bpm-hide text-center"><div class="bpm-admin-activity"><span class="fa fa-spinner fa-spin">&nbsp;</span></div></div>
                    </div>
                    <div id="bpm_feedback_support_content_reply" class="bpm-hide"  style="min-height:27rem;">
                        <div class="bpm-row">
                            <div class="bpm-small-12 bpm-large-12 bpm-columns ">' . __('Thank you for sending us your message.', 'bpmcontext') . '</div>
                        </div>
                        <br>
                        <div class="bpm-row">
                            <div class="bpm-small-12 bpm-large-12 bpm-columns ">' . __('One of our BPMContext Support Team members will get back to you soon.  In the meantime, you can always check out our ', 'bpmcontext') . '<a class="bpm_links" href="http://support.bpmcontext.com" target="_blank">' . __('Help Center', 'bpmcontext') . '</a>.</div>
                        </div>
                        <br>
                        <div class="bpm-row">
                            <div class="bpm-small-12 bpm-large-12 bpm-columns ">' . __('Note:  All of your messages are saved.  To access them go to Main Menu -> Switch Accounts -> BPMContext Support.', 'bpmcontext') . '</div>
                        </div>
                    </div>
                    <a class="close-reveal-modal bpm_nodecoration" aria-label="Close">&#215;</a>
                </div>

                <div id="bpm_reset_password_window" class="reveal-modal bpm-small" data-reveal aria-labelledby="bpm_reset_password_title" aria-hidden="true" role="dialog" data-options="close_on_background_click:false;close_on_esc:false;">
                    <h2 id="bpm_reset_password_title" class="bpm-header-2 bpm_lng_update_password">' . __('Update Password', 'bpmcontext') . '</h2>
                    <div id="bpm_reset_password_content">
                        <form autocomplete="off">
                        <div class="bpm-row">
                            <div class="bpm-small-6 bpm-large-6 bpm-columns text-right ">' . __('Password', 'bpmcontext') . ':&nbsp;</div>
                            <div class="bpm-small-6 bpm-large-6 bpm-columns text-left" id="bpm_password_html"></div>
                        </div>
                        <div class="bpm-row">
                            <div class="bpm-small-6 bpm-large-6 bpm-columns text-right bpm_lng_re_enter_password">' . __('Re-enter Password', 'bpmcontext') . ':&nbsp;</div>
                            <div class="bpm-small-6 bpm-large-6 bpm-columns text-left" id="bpm_confirm_password_html"></div>
                        </div>
                        <div class="bpm-row">
                            <div class="bpm-small-12 bpm-large-12 bpm-columns text-right"><a onClick="bpmcontext.bpm_save_password();" class="button bpm-password-button bpm_nodecoration" >Save Password</a>&nbsp;<a id="bpm_cancel_password" onClick="bpmcontext.bpm_cancel_password();" class="button bpm-password-button bpm_nodecoration bpm-hide" >' . __('Cancel', 'bpmcontext') . '</a></div>
                        </div>
                        </form>
                    </div>
                </div>

                <div id="bpm_talat_window" class="reveal-modal medium" data-reveal aria-labelledby="bpm_talat_title" aria-hidden="true" role="dialog" data-options="close_on_background_click:false;close_on_esc:false;">
                    <h2 id="bpm_talat_title" class="bpm-header-2 bpm_lng_talat">' . __('Take a Look at This', 'bpmcontext') . '</h2>
                    <div id="bpm_talat_content" style="max-height:25em;height:25em;">
                        <form id="bpm_form_talat" autocomplete="off">
                            <div class="bpm-row">
                                <div class="bpm-small-12 bpm-large-12 bpm-columns"><div style="width:3%;float:left;margin-top:.25em;display:inline;"><a onClick="bpmcontext.bpm_add_talat_users()" class="bpm_links fi-plus bpm_nodecoration"></a></div><div style="width:300px;float:left;display:inline;"><input type="text" id="bpm_talat_to" placeholder="' . __('Add recipients', 'bpmcontext') . '..." /></div></div>
                            </div>
                            <div class="bpm-row">
                                <div class="bpm-small-12 bpm-large-12 bpm-columns">
                                    <div id="bpm_talat_list" style="margin-left:3%"></div>
                                </div>
                             </div>
                             <div class="bpm-row">
                                <div class="bpm-small-12 bpm-large-12 bpm-columns">
                                    <br><textarea  style="z-index: 100;" maxlength="2500" placeholder="' . __('Take a look at this message', 'bpmcontext') . '..." id="bpm_edit_TALAT_text" rows="10" cols="120"></textarea><br>
                                </div>
                            </div>
                            <div class="bpm-row bpm-hide" id="bpm_talat_external">
                                <div class="bpm-small-12 bpm-large-12 bpm-columns bpm_lng_talat_cc_message">' . __('Customer and supplier users are prefixed to help you identify them. C is a Customer Contact, CC is a Corporate Customer Contact, S is a Suppplier Contact and CS is a Coporate Supplier Contact.', 'bpmcontext') . '<br>
                                </div>
                            </div>
                            <div class="bpm-row" id="bpm_talat_send_group">
                                <div class="bpm-small-4 bpm-large-6 bpm-columns text-left " >&nbsp;
                                    <div data-alert class="alert-box alert radius bpm-hide" id="bpm_talat_alert" >
                                        <a href="#" class="close">&times;</a>
                                    </div>
                                </div>';

            echo '                      <div class="bpm-small-8 bpm-large-6 bpm-columns text-right"><a onClick="bpmcontext.bpm_save_talat();" class="button bpm-small bpm_lng_send bpm_nodecoration" >' . __('Send', 'bpmcontext') . '</a>&nbsp;<a onClick="bpmcontext.bpm_close_talat()" class="button bpm-small bpm_lng_cancel bpm_nodecoration" >' . __('Cancel', 'bpmcontext') . ' </a></div>
                            </div>
                        </form>
                    </div>
                </div>

                <div id="bpm_add_page_window" class="reveal-modal medium" data-reveal aria-labelledby="bpm_add_page_title" aria-hidden="true" role="dialog">
                    <h2 id="bpm_add_page_title" class="bpm-header-2 bpm_lng_add_page">' . __('Add New', 'bpmcontext') . '</h2>
                    <div id="bpm_add_page_content" style="margin-top:5px;height:100px;min-height:100px;"></div>
                    <div id="bpm_add_page_invite_user" class="bpm-hide">
                        <div class="bpm-row">
                            <div class="bpm-large-6 bpm-small-6 bpm-columns text-left">' . __('Invite User Now?', 'bpmcontext') . '</div>
                            <div class="bpm-small-6 bpm-large-6 bpm-columns text-right"> <input id="bpm_invite_on_create" type="checkbox" value="0"/></div>
                        </div>
                    </div>
                    <div id="bpm_add_page_invite_user_message" class="bpm-hide">
                        <div class="bpm-row">
                            <div class="bpm-large-6 bpm-small-6 bpm-columns text-left">&nbsp;</div>
                            <div class="bpm-small-6 bpm-large-6 bpm-columns text-right"> <textarea maxlength="2500" placeholder="' . __('Optional invitation message', 'bpmcontext') . '..." id="bpm_invite_external_text_add_page" bpm-rows="7" cols="120"></textarea></div>
                        </div>
                    </div>
                    <div class="bpm-row full-width">
                        <div class="bpm-large-8 bpm-small-8 bpm-columns text-left" id="bpm-add-page-tutorial">&nbsp;</div>
                        <div class="bpm-large-4 bpm-small-4 bpm-columns text-right"><a onClick="bpmcontext.bpm_create_new_page(1,0);" class="button bpm-small bpm_lng_create_draft bpm_nodecoration" id="bpm_add_page_button">' . __('Create Draft', 'bpmcontext') . '</a></div>
                    </div>
                    <a class="close-reveal-modal bpm_nodecoration" aria-label="Close">&#215;</a>
                </div>

                <div id="bpm_stop_sharing_window" class="reveal-modal bpm-small" data-reveal aria-labelledby="bpm_stop_sharing_title" aria-hidden="true" role="dialog">
                    <h2 id="bpm_stop_sharing_title" class="bpm-header-2 bpm_lng_stop_sharing">' . __('Stop Sharing', 'bpmcontext') . '</h2>
                    <form autocomplete="off">
                        <div class="bpm-row">
                            <div class="bpm-small-12 bpm-large-12 bpm-columns">
                                <textarea maxlength="2500" placeholder="' . __('Stop sharing message', 'bpmcontext') . '..." id="bpm_edit_stop_sharing_text" rows="8" cols="120"></textarea><br>
                            </div>
                        </div>
                        <div class="bpm-row">
                            <div class="bpm-small-12 bpm-large-12 bpm-columns">
                                ' . __('This will hide the page from external users and notify the administrator to resolve an issue if necessary.  Only you or an administrator can restart sharing.', 'bpmcontext') . '<br>
                            </div>
                        </div>
                        <div class="bpm-row">
                            <div class="bpm-small-9 bpm-large-9 bpm-columns">&nbsp; </div>
                            <div class="bpm-small-3 bpm-large-3 bpm-columns text-right"> <a onClick="bpmcontext.bpm_send_stop_sharing();" class="button bpm-small bpm_class_send bpm_nodecoration" >' . __('Send', 'bpmcontext') . '</a></div>
                         </div>
                    </form>

                    <a class="close-reveal-modal bpm_nodecoration" aria-label="Close">&#215;</a>
                </div>

                <div id="bpm_context_map_window" class="reveal-modal medium" data-reveal aria-labelledby="bpm_context_map_title" aria-hidden="true" role="dialog">
                    <h2 id="bpm_context_map_title" class="bpm-header-2 bpm_lng_context_map ">' . __('Workspace Map', 'bpmcontext') . '</h2>

                    <div id="bpm_context_map_content" style="margin-top:5px;height:25em;min-height:6.25em;overflow-x: hidden;"></div>

                    <a class="close-reveal-modal bpm_nodecoration" aria-label="Close">&#215;</a>
                </div>

                <div id="bpm_welcome_window" class="reveal-modal medium bpm-tutorial-reveal" data-reveal aria-labelledby="bpm_welcome_window_title" aria-hidden="true" role="dialog" data-options="close_on_background_click:false;close_on_esc:false;">
                    <h2 id="bpm_welcome_window_title" class="bpm-header-2 bpm_lng_welcome_tour bpm_welcome_window_title">' . __('Welcome!', 'bpmcontext') . '</h2>
                    <div class="bpm-tutorial-holder">
                    <div id="bpm_welcome_window_subtitle" class="bpm_welcome_window_subtitle" ></div>
                    <div id="bpm_welcome_window_content" class="bpm_welcome_window_content"></div>
                    </div>
                    <a id="bpm-close-welcome-button" class="close-reveal-modal bpm_nodecoration bpm-hide" aria-label="Close">&#215;</a>
                </div>

                <div id="bpm_delegate_window" class="reveal-modal bpm-small" data-reveal aria-labelledby="bpm_delegate_title" aria-hidden="true" role="dialog">
                    <h2 id="bpm_delegate_title" class="bpm-header-2 bpm_lng_delegate_options">' . __('Delegate Options', 'bpmcontext') . '</h2>
                    <div id="bpm_delegate_content" style="margin-top:5px;height:25em;min-height:6.25em;overflow-x: hidden;"></div>

                    <a class="close-reveal-modal bpm_nodecoration" aria-label="Close">&#215;</a>
                </div>

                <div id="bpm_invite_external_window" class="reveal-modal bpm-small" data-reveal aria-labelledby="bpm_invite_external_title" aria-hidden="true" role="dialog">
                    <h2 id="bpm_invite_external_title" class="bpm-header-2 bpm_lng_invite_external_users">' . __('Invite External User', 'bpmcontext') . '</h2>
                    <div id="bpm_invite_external_content" style="margin-top:5px;height:300px;min-height:300px;overflow: hidden;">
                        <div class="bpm-hide" id="bpm_invite_user_id"></div>
                        <div class="bpm-row full-width">
                            <div class="bpm-large-12 bpm-small-12 bpm-columns text-left" style="margin-bottom:1em">Invite <span id="bpm_invite_user_name"></span></div>
                        </div>
                        <div class="bpm-row full-width">
                            <div class="bpm-large-12 bpm-small-12 bpm-columns text-left" style="margin-bottom:1em"><textarea maxlength="2500" placeholder="' . __('Optional invitation message', 'bpmcontext') . '..." id="bpm_invite_external_text" bpm-rows="7" cols="120"></textarea></div>
                        </div>
                        <div class="bpm-row full-width">
                            <div class="bpm-large-12 bpm-small-12 bpm-columns text-left bpm_lng_invite_external_message" style="margin-bottom:1em">' . __('Inviting this user will send an email to them with instructions on setting up their account.  Then they can see this page and other pages shared with this user type for their company only.  To see what they see, go to the View As dropdown on the Page Actions bar and select a user type.', 'bpmcontext') . '</div>
                        </div>
                        <div class="bpm-row full-width">
                            <div class="bpm-large-8 bpm-small-8 bpm-columns  text-left">&nbsp;<div data-alert class="alert-box success radius  bpm-hide" id="bpm_send_invite_alert" >' . __('Inviting', 'bpmcontext') . '...</div></div>
                            <div class="bpm-large-4 bpm-small-4 bpm-columns text-right"><a onClick="bpmcontext.bpm_send_invite();" class="button bpm-small bpm_lng_send_invitation bpm_nodecoration" >' . __('Send invitation', 'bpmcontext') . '</a></div>
                        </div>
                    </div>

                    <a class="close-reveal-modal bpm_nodecoration" aria-label="Close">&#215;</a>
                </div>

                <div id="bpm_infobox_history_window" class="reveal-modal bpm-small" data-reveal aria-labelledby="bpm_infobox_history_title" aria-hidden="true" role="dialog">
                    <h2 id="bpm_infobox_history_title" class="bpm-header-2 bpm_lng_infobox_history">' . __('Infobox History', 'bpmcontext') . '</h2>
                    <div id="bpm_infobox_history_content" style="margin-top:5px;height:100px;min-height:100px;"></div>
                    <a class="close-reveal-modal bpm_nodecoration" aria-label="Close">&#215;</a>
                </div>

                <div id="bpm_rename_window" class="reveal-modal bpm-small" data-reveal aria-labelledby="bpm_rename_title" aria-hidden="true" role="dialog">
                    <h2 id="bpm_rename_title" class="bpm-header-2 bpm_lng_rename_page">' . __('Rename Page', 'bpmcontext') . '</h2>
                    <div id="bpm_rename_content" style="margin-top:5px;height:100px;min-height:100px;">
                        <div class="bpm-row">
                            <div class="bpm-large-10 bpm-small-10 bpm-columns"><input id="bpm_admin_rename_field" type="text" /></div>
                            <div class="bpm-large-2 bpm-small-2 bpm-columns"><a onClick="bpmcontext.bpm_change_name()" class="button bpm_nodecoration bpm_lng_update">' . __('Update', 'bpmcontext') . '</a></div>
                        </div>
                        <div data-alert class="alert-box alert radius  bpm-hide" id="bpm_rename_error_alert" >
                        ' . __('This page name already exists.  Please try again.', 'bpmcontext') . '
                            <a href="#" class="close">&times;</a>
                        </div>
                    </div>
                    <a class="close-reveal-modal bpm_nodecoration" aria-label="Close">&#215;</a>
                </div>

                <div id="bpm_attachment_window" class="reveal-modal large" data-reveal aria-labelledby="bpm_attachment_title" aria-hidden="true" role="dialog">
                    <h2 id="bpm_attachment_title" class="bpm-header-2 bpm_lng_upload_documents">' . __('Upload Documents', 'bpmcontext') . '</h2>
                    <div id="bpm_attachment_content" style="margin-top:5px;height:25em">
                        <div class="bpm-row">
                            <div class="bpm-large-6 bpm-small-6 bpm-columns"><div id="bpm_upload_form" style="height:100%;"></div></div>
                            <div class="bpm-large-6 bpm-small-6 bpm-columns">
                                <form id="bpm_upload_form_talat" autocomplete="off">
                                    <div class="bpm-row">
                                        <div class="bpm-small-12 bpm-large-12 bpm-columns"><div style="display:inline-block;width:6%;float:left;margin-top:.25em;"><a id="bpm_add_talat_user_button" onClick="bpmcontext.bpm_add_talat_users(2)" class="bpm_links fi-plus bpm_nodecoration"></a></div><div style="width:300px;float:left;display:inline;"><input type="text" id="bpm_upload_talat_to" placeholder="' . __('Add recipients', 'bpmcontext') . '..." /></div></div>
                                    </div>
                                    <div class="bpm-row">
                                        <div class="bpm-small-12 bpm-large-12 bpm-columns">
                                            <div id="bpm_upload_talat_list" style="margin-left:3%"></div>
                                        </div>
                                    </div>
                                    <div class="bpm-row">
                                        <div class="bpm-small-12 bpm-large-12 bpm-columns">
                                            <br><textarea maxlength="2500" placeholder="' . __('Take a look at this message', 'bpmcontext') . '..." id="bpm_edit_upload_text" bpm-rows="8" cols="120"></textarea><br>
                                        </div>
                                    </div>
                                </form>
                                <div class="bpm-row">
                                    <div class="bpm-small-12 bpm-large-12 bpm-columns">
                                        <div data-alert class="alert-box alert radius bpm-hide" id="bpm_upload_talat_alert" >
                                            <a href="#" class="close">&times;</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div><br>
                        <div class="bpm-row">
                            <div class="bpm-large-6 bpm-small-6 bpm-columns text-left bpm_lng_select_folder">' . __('Select Folder', 'bpmcontext') . ':<br><div id="bpm_upload_folders"></div></div>
                            <div class="bpm-large-6 bpm-small-6 bpm-columns text-right">
                                <a id="bpm_upload_files" class="button bpm-small bpm_lng_upload  bpm_nodecoration bpm-hide" >' . __('Upload', 'bpmcontext') . '</a>
                                <div data-alert class="alert-box success radius bpm_lng_files_uploading bpm-hide" id="bpm_file_uploading_alert" style="margin-left:1em;margin-right:1em;">' . __('Files uploading', 'bpmcontext') . '...</div>
                                <div data-alert class="alert-box alert radius bpm_lng_no_recipient bpm-hide" id="bpm_file_uploading_no_talat_alert" style="margin-left:1em;">' . __('No recipient selected', 'bpmcontext') . '.</div>
                            </div>
                        </div>
                    </div>

                    <a class="close-reveal-modal bpm_nodecoration" aria-label="Close">&#215;</a>
                </div>

                <div id="bpm_discussion_window" class="reveal-modal medium" data-reveal aria-labelledby="bpm_discussion_title" aria-hidden="true" role="dialog" data-options="close_on_background_click:false;close_on_esc:false;">
                    <h2 id="bpm_discussion_title" class="bpm-header-2 bpm_lng_add_to_discussion">' . __('Add to the Discussion', 'bpmcontext') . '</h2>
                    <div id="bpm_discussion_content" style="height:25em;">
                        <form autocomplete="off">
                            <div class="bpm-row full-width">
                                <div class="bpm-large-12 bpm-small-12 bpm-columns" style="margin-bottom:1em"><textarea maxlength="2500" placeholder="' . __('Add to the discussion', 'bpmcontext') . '..." id="bpm_disc_reveal_text" bpm-rows="10" cols="120"></textarea></div>
                            </div>
                            <div class="bpm-row full-width">
                                <div class="bpm-large-6 bpm-small-6 bpm-columns">&nbsp;<div data-alert class="alert-box success radius  bpm-hide" id="bpm_saving_disc_alert" >' . __('Saving', 'bpmcontext') . '...</div></div>
                                <div class="bpm-large-6 bpm-small-6 bpm-columns text-right"><a onClick="bpmcontext.bpm_send_post(0);" class="button bpm-small bpm_lng_save bpm-unselectable bpm_nodecoration" >' . __('Save', 'bpmcontext') . '</a>&nbsp;&nbsp;<a onClick="bpmcontext.bpm_cancel_post();" class="button bpm-small bpm_lng_cancel bpm-unselectable bpm_nodecoration" >' . __('Cancel', 'bpmcontext') . '</a></div>
                            </div>
                        </form>
                    </div>
                </div>

                <div id="bpm_new_account" class="reveal-modal medium" data-reveal aria-labelledby="bpm_new_account_title" aria-hidden="true" role="dialog">
                    <div class="bpm-row" style="margin-bottom:.5em">
                        <div class="bpm-large-12 bpm-small-12 bpm-columns bpm_lng_welcome_header text-center"><h2 id="bpm_new_account_title" class="bpm-header-2 bpm_lng_create_account">' . __('Create a BPMContext account to login', 'bpmcontext') . '</h2></div>
                    </div>
                    <div id="bpm_new_account_content" style="height:20em;">

                        <div class="bpm-row" style="margin-bottom:2.5em">
                            <div class="bpm-large-12 bpm-small-12 bpm-columns bpm_lng_welcome_header text-center"><h3>' . __('Intranet and Digital Workspaces for Your WordPress Site', 'bpmcontext') . '</h3></div>
                        </div>

                        <form autocomplete="off">
                            <div class="bpm-row">
                                <div class="bpm-large-6 bpm-small-6 bpm-columns text-right"><span class="bpm_lng_your_email">' . __('Your Name', 'bpmcontext') . ':</span>&nbsp;</div>
                                <div class="bpm-large-4 bpm-small-4 bpm-columns text-left"><input type="text" class="bpm_new_account_field" id="bpm_new_account_real_name"  placeholder="e.g: Bob Smith"></div>
                                <div class="bpm-large-2 bpm-small-2 bpm-columns text-left">&nbsp;</div>
                            </div>
                            <div class="bpm-row">
                                <div class="bpm-large-6 bpm-small-6 bpm-columns text-right"><span class="bpm_lng_your_email">' . __('Your Company Name', 'bpmcontext') . ':</span>&nbsp;</div>
                                <div class="bpm-large-4 bpm-small-4 bpm-columns text-left"><input type="text" class="bpm_new_account_field" id="bpm_new_account_company_name"  placeholder="e.g: My Really Cool Company"></div>
                                <div class="bpm-large-2 bpm-small-2 bpm-columns text-left">&nbsp;</div>
                            </div>
                            <div class="bpm-row">
                                <div class="bpm-large-6 bpm-small-6 bpm-columns text-right"><span class="bpm_lng_your_email">' . __('Your Email Address', 'bpmcontext') . ':</span>&nbsp;</div>
                                <div class="bpm-large-4 bpm-small-4 bpm-columns text-left"><input type="text" class="bpm_new_account_field" id="bpm_new_account_email"  placeholder="e.g: Bob.Smith@mycoolcompany.com"></div>
                                <div class="bpm-large-2 bpm-small-2 bpm-columns text-left">&nbsp;</div>
                            </div>
                            <div class="bpm-row">
                                <div class="bpm-large-6 bpm-small-6 bpm-columns text-right"><span class="bpm_lng_your_password">' . __('Password', 'bpmcontext') . ':</span>&nbsp;</div>
                                <div class="bpm-large-4 bpm-small-4 bpm-columns text-left"><div id="bpm_new_acct_password_html"></div>&nbsp;</div>
                                <div class="bpm-large-2 bpm-small-2 bpm-columns text-right">&nbsp;<a id="bpm_create_account_process_button"  class="button bpm-small-ws-button bpm_nodecoration" >' . __('Create', 'bpmcontext') . '</a>&nbsp;&nbsp;</div>
                            </div>

                            <div class="bpm-row">
                                <div class="bpm-large-12 bpm-small-12 bpm-columns "><br></div>
                            </div>

                            <div class="bpm-row">
                                <div class="bpm-large-12 bpm-small-12 bpm-columns">
                                    <div data-alert class="alert-box alert radius bpm_acct_error_1 bpm-hide" id="bpm_new_acct_error_alert" >' . __('Your Name cannot match the Company Name.  Please re-enter.', 'bpmcontext') . '</div>
                                </div>
                                <div class="bpm-large-12 bpm-small-12 bpm-columns">
                                    <div data-alert class="alert-box alert radius bpm_acct_error_2 bpm-hide" id="bpm_new_acct_setup_alert" >' . __('An error occourred setting up your account.  Please re-enter.', 'bpmcontext') . '</div>
                                </div>
                            </div>
                            <div class="bpm-row">
                                <div class="bpm-large-12 bpm-small-12 bpm-columns">
                                    <div data-alert class="alert-box success radius bpm_lng_creating_account bpm-hide" id="bpm_page_loading_new_acct_alert" >' . __('OK, we got this.  You will be taken to your account in 5 to 15 seconds', 'bpmcontext') . '.</div>
                                </div>
                             </div>
                            <div class="bpm-row">
                                <div class="bpm-large-12 bpm-small-12 bpm-columns text-right bpm_text_medium">' . __('By signing up for an account you agree to the BPMContext ', 'bpmcontext') . ' <a class="bpm_links bpm_lng_terms_of_service" href="https://bpmcontext.com/terms-of-service" target="_blank">' . __('Terms of Service', 'bpmcontext') . '</a> & <a class="bpm_links bpm_lng_privacy_policy" href="https://bpmcontext.com/privacy" target="_blank">' . __('Privacy Policy', 'bpmcontext') . '</a>&nbsp;&nbsp; </div>
                            </div>
                    <div id="bpm_progress_image" class="bpm-admin-overlay bpm-hide text-center" style="padding-top:10rem;"><div class="bpm-admin-activity" ><span class="fa fa-spinner fa-spin" >&nbsp;</span></div></div>
                    </form>
                    </div>
                    <a id="bpm_new_account_content_exit" class="close-reveal-modal bpm_nodecoration" aria-label="Close">&#215;</a>
                </div>

                <div id="bpm_discussion_section" class="bpm_discussion_section bpm-hide" >
                    <div id="bpm_section_top_bar_bpm_acc_disc_DISCINDEX"  >
                    <nav class="bpm-top-bar" data-topbar role="navigation">
                        <section class="top-bar-section" >
                            <ul class="right">
                                <li ><a style="display:none;" class="bpm_nodecoration bpm-hide button-discussion-plus" id="bpm_disc_delete_button_DISCINDEX" onClick="bpmcontext.bpm_delete_discussion(\'DISCINDEX\');">' . __('Admin Delete', 'bpmcontext') . '...</a></li>
                                <li ><a style="display:none;" class="bpm_nodecoration bpm-hide button-discussion-plus" id="bpm_disc_delete_cancel_button_DISCINDEX" onClick="bpmcontext.bpm_confirm_delete_discussion(\'DISCINDEX\',0);">' . __('Cancel Delete', 'bpmcontext') . '</a></li>
                                <li ><a style="display:none;" class="bpm_nodecoration bpm-hide button-discussion-plus" id="bpm_disc_delete_confirm_button_DISCINDEX" onClick="bpmcontext.bpm_confirm_delete_discussion(\'DISCINDEX\',1);">' . __('Confirm Delete', 'bpmcontext') . '</a></li>
                                <li ><a style="display:none;" class="bpm_nodecoration bpm-hide button-discussion-plus" id="bpm_disc_edit_button_DISCINDEX" onClick="bpmcontext.bpm_edit_discussion(\'DISCINDEX\');">' . __('Edit', 'bpmcontext') . '</a></li>
                                <li ><a style="display:none;" class="bpm_nodecoration button-discussion-plus" id="bpm_disc_expand_button_DISCINDEX" onClick="bpmcontext.bpm_expand_discussion(\'DISCINDEX\',1);">' . __('Expand', 'bpmcontext') . '</a></li>
                                <li ><a style="display:none;" class="bpm_nodecoration bpm-hide button-discussion-plus" id="bpm_disc_shrink_button_DISCINDEX" onClick="bpmcontext.bpm_expand_discussion(\'DISCINDEX\',0);">' . __('Shrink', 'bpmcontext') . '</a></li>
                            </ul>
                            <ul class="left" id="bpm_disc_menu_left_side">
                                <li class="active"><a onClick="bpmcontext.bpm_open_discussion(\'DISCINDEX\');" class="fi-plus button-discussion-plus bpm_nodecoration"></a></li>
                                <li class="divider"></li>
                                <li class="has-form">
                                    <div class="bpm-row full-width">
                                        <div class="bpm-large-8 bpm-small-9 bpm-columns"><input class="bpm_quick_post_input bpm_in_bar_text" type="text" style="width:100%;" id="bpm_disc_post_field_DISCINDEX"  placeholder="' . __('Add a comment', 'bpmcontext') . '..."></div>
                                        <div class="bpm-large-4 bpm-small-3 bpm-columns"><a onClick="bpmcontext.bpm_send_post(\'DISCINDEX\')" class="button bpm_lng_post bpm-unselectable bpm_small_bar_button bpm_nodecoration">' . __('Post', 'bpmcontext') . '</a></div>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </nav>
                    </div>
                    <div id="bpm_disc_list_DISCINDEX" style="min-height:6.25em;max-height: 15.625em;overflow-x: hidden;">DISCDATA</div>
                </div>

                <div id="bpm_attachment_section" class="bpm_attachment_section bpm-hide" >
                    <div id="bpm_section_top_bar_bpm_acc_FILEINDEX" class="bpm_section_top_bar_bpm_acc_all bpm-hide">
                        <div class="bpm-top-bar" data-topbar role="navigation">
                            <section class="top-bar-section">
                                <ul class="right">
                                    <li class="has-dropdown bpm-hide" id="bpm_file_options_FILEINDEX" >
                                        <a class="fi-page-export bpm_lng_file_actions button-discussion-plus bpm_nodecoration">&nbsp;' . __('File actions', 'bpmcontext') . '...</a>
                                        <ul class="dropdown">
                                            <li class="bpm_ul_li"><a class="bpm_action bpm_admin_only bpm-hide bpm_lng_admin_delete bpm_nodecoration" id="bpm_file_delete" onClick="bpmcontext.bpm_file_button(FILEINDEX,14);">' . __('Admin Delete', 'bpmcontext') . '</a></li>
                                            <li class="has-dropdown"><a class="bpm_action bpm_lng_move_files bpm_nodecoration" id="bpm_file_move_FILEINDEX">' . __('Move Files', 'bpmcontext') . '...</a>FILEFOLDERS</li>
                                        </ul>
                                    </li>

                                    <li class="divider" style="width:1em;">&nbsp;</li>
                                     <li class="active"><a onClick="bpmcontext.bpm_file_button(FILEINDEX,6);" class="bpm_lng_add_files bpm_nodecoration">' . __('Add Files', 'bpmcontext') . '</a></li>
                                </ul>

                                <ul class="left">
                                    <li class="bpm_ul_li"><a id="bpm_button_new_folder_FILEINDEX" onClick="bpmcontext.bpm_file_button(FILEINDEX,5);" class="bpm_lng_new_folder button-discussion-plus bpm_nodecoration">' . __('New Folder', 'bpmcontext') . '</a></li>

                                    <li class="has-dropdown bpm-hide" id="bpm_file_folder_option_FILEINDEX" >
                                        <a class="fi-page-export bpm_nodecoration">&nbsp;Folder Actions...</a>
                                        <ul class="dropdown">
                                            <li class="bpm_ul_li"><a class="bpm_action bpm_lng_delete_folder_message bpm_nodecoration" onClick="bpmcontext.bpm_file_button(\'FILEINDEX\',10)" id="bpm_folder_delete">' . __('Delete Folder and move files to the main directory', 'bpmcontext') . '</a></li>
                                            <li class="bpm_ul_li"><a class="bpm_action bpm_lng_rename_folder bpm_nodecoration" onClick="bpmcontext.bpm_file_button(\'FILEINDEX\',8)" id="bpm_folder_rename">' . __('Rename Folder', 'bpmcontext') . '</a></li>
                                        </ul>
                                    </li>

                                    <li class="has-form bpm-hide"  id="bpm_file_add_folder_form_FILEINDEX">
                                        <div class="bpm-row ">
                                            <div class="bpm-large-8 bpm-small-9 bpm-columns"><input class="bpm_add_folder_input bpm_in_bar_text" maxlength="15" type="text" style="width:100%" id="bpm_add_folder_FILEINDEX"  placeholder="Folder name..."></div>
                                            <div class="bpm-large-4 bpm-small-3 bpm-columns"><a onClick="bpmcontext.bpm_file_button(\'FILEINDEX\',4)" class="button bpm_lng_create bpm_small_bar_button  bpm_nodecoration" style="white-space: nowrap">' . __('Create', 'bpmcontext') . '</a></div>
                                        </div>
                                    </li>

                                    <li class="has-form bpm-hide" id="bpm_file_rename_folder_form_FILEINDEX">
                                        <div class="bpm-row ">
                                            <div class="bpm-large-8 bpm-small-9 bpm-columns"><input class="bpm_rename_folder_input bpm_in_bar_text" maxlength="15" type="text" style="width:100%" id="bpm_rename_folder_FILEINDEX"  placeholder="Rename folder..."></div>
                                            <div class="bpm-large-4 bpm-small-3 bpm-columns"><a onClick="bpmcontext.bpm_file_button(\'FILEINDEX\',9)" class="button  bpm_nodecoration" style="white-space: nowrap">' . __('Rename', 'bpmcontext') . '</a></div>
                                        </div>
                                    </li>

                                </ul>
                            </section>
                        </div>
                    </div>
                    <div class="bpm_file_placeholder bpm-hide" id="bpm_file_placeholder_FILEINDEX" style="min-height:10em;max-height: 18em;overflow-x: hidden;">FILEPLACEHOLDER</div>
                    <div class="bpm_file_area" id="bpm_file_area_FILEINDEX" style="min-height:10em;max-height: 18em;overflow-x: hidden;">
                    <div class="bpm-row full-width">
                        <div class="bpm-large-4 bpm-small-4 bpm-columns" id="tree_folder_div_FILEINDEX" style="max-height: 15.625em;overflow-x: hidden;"></div>

                        <div class="bpm-large-8 bpm-small-8 bpm-columns">

                        <div id="bpm_file_list_FILEINDEX">
                        FILEDATA
                        </div>
                    </div>
                    </div>
                    </div>
                </div>


                <div id="bpm_text_section" class="bpm_text_section bpm-hide" >
                    <div id="bpm_section_top_bar_bpm_acc_TEXTINDEX"  class="bpm_section_top_bar_bpm_acc_all bpm-hide" >
                        <nav class="bpm-top-bar" data-topbar role="navigation">
                            <section class="top-bar-section">

                                <ul class="left">
                                    <li class="bpm_ul_li"><a id="bpm_edit_button_TEXTINDEX" class="bpm-text-edit-button bpm_nodecoration button-discussion-plus" onClick="bpmcontext.bpm_edit_text(TEXTINDEX);" >' . __('Edit', 'bpmcontext') . '</a></li>
                                    <li class="bpm_ul_li"><a class="bpm-hide button-discussion-plus bpm_nodecoration" id="bpm_history_button_TEXTINDEX" onClick="bpmcontext.bpm_view_text_history(TEXTINDEX);">' . __('History', 'bpmcontext') . '</a></li>
                                    <li class="bpm_ul_li"><a class="bpm-hide button-discussion-plus bpm_nodecoration" id="bpm_promote_button_TEXTINDEX" onClick="bpmcontext.bpm_hp_promote(TEXTINDEX);" >' . __('Promote', 'bpmcontext') . '</a></li>
                                </ul>
                            </section>
                        </nav>
                    </div>
                    <div class="bpm_file_placeholder bpm-hide" id="bpm_file_placeholder_TEXTINDEX" style="min-height:10em;max-height: 18em;overflow-x: hidden;">TEXTPLACEHOLDER</div>
                    <div id="bpm_text_TEXTINDEX" style="max-height: 15.625em;overflow-x: hidden;">TEXTDATA</div>
                </div>

                <div id="bpm_readonly_text_section" class="bpm_readonly_text_section bpm-hide" >
                    <div id="bpm_readonly_text_TEXTINDEX" style="min-height:6.25em;max-height: 15.625em;overflow-x: hidden;">TEXTDATA</div>
                </div>

                <div id="bpm_tagged_page_section" class="bpm_tagged_page_section bpm-hide" >
                    <div id="bpm_section_top_bar_bpm_acc_TAGGEDINDEX" class="bpm_section_top_bar_bpm_acc_all bpm-hide" >
                        <nav class="bpm-top-bar" data-topbar role="navigation">
                            <section class="top-bar-section">
                                <ul class="right">
                                    <li class="name"  style="padding-top:.6rem">
                                        <span style="color:white;display:none;margin-right:1em;font-size:1rem;" id="bpm_links_search_count_TAGGEDINDEX" class="bpm_lng_results">' . __('Results', 'bpmcontext') . ':</span>
                                    </li>
                                </ul>
                                <ul class="left">
                                    <li class="active TAGGEDBUTTONCLASS"><a id="bpm_add_button_TAGGEDINDEX" onClick="bpmcontext.bpm_open_add_page(\'TAGGEDINDEX\', 1, \'TAGGEDNAME\');" class="fi-plus button-discussion-plus bpm_nodecoration"></a></li>
                                    <li class="divider"></li>
                                    <li class="has-form">
                                        <div class="bpm-row">
                                            <div class="bpm-large-7 bpm-small-7 bpm-columns"><input class="bpm_search_pages_input bpm_in_bar_text" type="text" id="bpm_links_search_field_TAGGEDINDEX"  placeholder="' . __('Search page names', 'bpmcontext') . '..."></div>
                                            <div class="bpm-large-5 bpm-small-5 bpm-columns"><a id="bpm_links_search_button_TAGGEDINDEX" onClick="bpmcontext.bpm_search_grid(\'TAGGEDINDEX\')" class="button bpm_lng_search bpm_small_bar_button bpm_nodecoration" >' . __('Search', 'bpmcontext') . '</a><div id="bpm_links_search_clear_TAGGEDINDEX" class="bpm-hide bpm_hide_button"><a  onClick="bpmcontext.bpm_clear_search_grid(\'TAGGEDINDEX\')" class="button bpm-hide bpm_nodecoration">' . __('Clear', 'bpmcontext') . '</a></div></div>
                                        </div>
                                    </li>
                                </ul>
                            </section>
                        </nav>
                    </div>

                    <div id="bpm_text_TAGGEDINDEX" style="margin-top:3px;overflow-x: hidden;">TAGGEDDATA</div>
                    <div id="bpm_tagged_search_results_TAGGEDINDEX" style="margin-top:3px;max-height: 250px;overflow-x: hidden;display:none;"></div>
                </div>

                <div id="bpm_child_links_section" class="bpm_child_links_section bpm-hide" >
                    <div id="bpm_section_top_bar_bpm_acc_holder_999999" >
                    <div id="bpm_section_top_bar_bpm_acc_999999" class="bpm_section_top_bar_bpm_acc_all bpm-hide" >
                        <nav class="bpm-top-bar" data-topbar role="navigation">
                            <section class="top-bar-section">
                                <ul class="right">
                                    <li class="name"  style="padding-top:.6rem">
                                        <span style="color:white;display:none;margin-right:1em;font-size:1rem;" id="bpm_links_search_count_999999" class="bpm_lng_results">' . __('Results', 'bpmcontext') . ':</span>
                                    </li>
                                </ul>
                                <ul class="left">
                                    <li class="active bpm-hide" id="bpm_add_page_child_links"><a onClick="bpmcontext.bpm_open_add_page(bpm_child_link_create_id, 1, bpm_child_link_create_name);" class="fi-plus button-discussion-plus bpm_nodecoration"></a></li>
                                    <li class="divider"></li>
                                    <li class="has-form">
                                        <div class="bpm-row">
                                            <div class="bpm-large-7 bpm-small-7 bpm-columns"><input class="bpm_search_pages_input bpm_in_bar_text" type="text"  id="bpm_links_search_field_999999"  placeholder="' . __('Search page names', 'bpmcontext') . '..."></div>
                                            <div class="bpm-large-5 bpm-small-5 bpm-columns"><div id="bpm_links_search_button_999999"><a onClick="bpmcontext.bpm_search_grid(\'999999\')" class="button bpm_small_bar_button bpm_nodecoration" >' . __('Search', 'bpmcontext') . '</a></div><div id="bpm_links_search_clear_999999" class="bpm-hide bpm_hide_button"><a  onClick="bpmcontext.bpm_clear_search_grid(\'999999\')" class="button bpm_lng_search bpm_small_bar_button bpm_nodecoration" >' . __('Clear', 'bpmcontext') . '</a></div></div>
                                        </div>
                                    </li>
                                </ul>
                            </section>
                        </nav>
                    </div>
                    <div id="bpm_child_links_999999" style="min-height:100px;">LINKSDATA</div>
                    </div>
                </div>

                <div id="bpm_confirm_cancel_delete" class="reveal-modal bpm-small" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog" data-options="close_on_background_click:false;close_on_esc:false;">
                    <h2 id="modalTitle" class="bpm-header-2 bpm_lng_delete_this_page">' . __('Delete this Page?', 'bpmcontext') . '</h2>
                    <div class="bpm-row">
                        <div class="bpm-large-12 bpm-small-12 bpm-columns text-left bpm_delete_message">' . __('Deleting this page is permanent...forever...cannot be undone.  This page and any child pages for this page will be deleted.  <br><br>Are you sure?', 'bpmcontext') . '</div><br>
                        </div>
                    <div class="bpm-row">
                        <div class="bpm-large-12 bpm-small-12 bpm-columns text-right "><a onClick="bpmcontext.bpm_confirm_yes();" class="button bpm-small  bpm_nodecoration" >' . __('Yes', 'bpmcontext') . '</a>&nbsp;&nbsp;<a onClick="bpmcontext.bpm_confirm_no(\'bpm_confirm_cancel_delete\')" class="button bpm-small bpm_nodecoration" >' . __('No', 'bpmcontext') . '</a></div>
                    </div>
                </div>

                <div id="bpm_confirm_terminate" class="reveal-modal bpm-small" data-reveal aria-labelledby="modalTitleT" aria-hidden="true" role="dialog" data-options="close_on_background_click:false;close_on_esc:false;">
                    <h2 id="modalTitleT" class="bpm-header-2 bpm_terminate_this_workflow">' . __('Terminate this Workflow?', 'bpmcontext') . '</h2>
                    <div class="bpm-row">
                        <div class="bpm-large-12 bpm-small-12 bpm-columns text-left bpm_lng_terminate_message">' . __('Terminate will stop routing and the status will be closed.  Terminated pages can still be viewed and edited.<br><br>Click Yes to terminate or No to cancel.', 'bpmcontext') . '</div><br>
                    </div>
                    <div class="bpm-row">
                        <div class="bpm-large-12 bpm-small-12 bpm-columns text-right"><a onClick="bpmcontext.bpm_confirm_yes();" class="button bpm-small bpm_nodecoration" >' . __('Yes', 'bpmcontext') . '</a>&nbsp;&nbsp;<a onClick="bpmcontext.bpm_confirm_no(\'bpm_confirm_terminate\')" class="button bpm-small bpm_nodecoration">' . __('No', 'bpmcontext') . '</a></div>
                    </div>
                </div>

                <div id="bpm_contact_us_detail" class="reveal-modal bpm-small" data-reveal aria-labelledby="modalTitleContact" aria-hidden="true" role="dialog" >
                    <h2 id="modalTitleContact" class="bpm-header-2 ">' . __('Contact Inquiries', 'bpmcontext') . '</h2>
                    <div id="bpm_contact_us_detail_content" style="max-height:20rem;height:20rem;overflow-x:hidden;overflow-y:auto;"></div>
                    <a class="close-reveal-modal bpm_nodecoration" aria-label="Close">&#215;</a>
                </div>

                <div id="bpm_promote_page" class="reveal-modal bpm-small" data-reveal aria-labelledby="modalTitleP" aria-hidden="true" role="dialog" data-options="close_on_background_click:false;close_on_esc:false;">
                    <h2 id="modalTitleP" class="bpm-header-2 bpm_lng_promote_to_homepage">' . __('Promote Page to Home Page', 'bpmcontext') . '</h2>
                    <div class="bpm-row">
                        <div class="bpm-large-12 bpm-small-12 bpm-columns text-left bpm_lng_promote_message">' . __('Pin a message to the Home dashboard to share an update about your published page.', 'bpmcontext') . '<br><br></div>
                    </div>
                    <div class="bpm-row">
                        <div class="bpm-large-12 bpm-small-12 bpm-columns text-left" id="bpm_promote_page_content">&nbsp;</div>
                    </div>
                    <div class="bpm-row" id="bpm_promote_page_content_footer">
                        <div class="bpm-large-7 bpm-small-7 bpm-columns text-left"><br><span class="bpm_lng_promote_message">' . __('This is the summary that will appear on the home page newsfeed. Editing this text will NOT change the main content.  Delete text that you do not want as part of the home page summary.', 'bpmcontext') . '</span></div>
                        <div class="bpm-large-5 bpm-small-5 bpm-columns text-right"><a onClick="bpmcontext.bpm_promote_to_home_page_action();" class="button bpm-small bpm_lng_promote  bpm_nodecoration" style="margin-top:1em;">Promote</a>&nbsp;&nbsp;<a id="bpm_hp_cancel_promote" onClick="bpmcontext.bpm_hp_cancel_promote()" class="button bpm-small bpm_lng_cancel bpm_nodecoration" >' . __('Cancel', 'bpmcontext') . '</a></div>
                    </div>
                </div>

                <div id="bpm_confirm_admin_close" class="reveal-modal bpm-small" data-reveal aria-labelledby="modalTitleC" aria-hidden="true" role="dialog" data-options="close_on_background_click:false;close_on_esc:false;">
                    <h2 id="modalTitleC" class="bpm-header-2 bpm_lng_close_this_page">' . __('Close this Page?', 'bpmcontext') . '</h2>
                    <div class="bpm-row">
                        <div class="bpm-large-12 bpm-small-12 bpm-columns text-left bpm_lng_close_page_message">' . __('Closing this page will stop routing and the status will change to Closed.  This page will still be editable by users with access to this page.<br><br>Click Close to continue or Cancel to exit', 'bpmcontext') . '</div><br>
                    </div>
                    <div class="bpm-row">
                        <div class="bpm-large-12 bpm-small-12 bpm-columns text-right"><a onClick="bpmcontext.bpm_confirm_yes();" class="button bpm-small bpm_nodecoration" >' . __('Close', 'bpmcontext') . '</a>&nbsp;&nbsp;<a onClick="bpmcontext.bpm_confirm_no(\'bpm_confirm_admin_close\')" class="button bpm-small  bpm_nodecoration" >' . __('Cancel', 'bpmcontext') . '</a></div>
                    </div>
                </div>

                <div id="bpm_confirm_publish" class="reveal-modal bpm-small" data-reveal aria-labelledby="modalTitlePublish" aria-hidden="true" role="dialog" data-options="close_on_background_click:false;close_on_esc:false;">
                    <h2 id="modalTitlePublish" class="bpm-header-2 bpm_lng_close_this_page">' . __('Publish this Page?', 'bpmcontext') . '</h2>
                    <div class="bpm-row">
                        <div class="bpm-large-12 bpm-small-12 bpm-columns text-left bpm_lng_publish_page_message">' . __('When published. this page will be listed on the Parent menu and available in Recent, My History and All Workspaces', 'bpmcontext') . '</div>
                    </div>
                    <div class="bpm-row">
                        <div class="bpm-large-12 bpm-small-12 bpm-columns text-left ">' . __('Others can edit, comment and share files after it is published', 'bpmcontext') . '</div>
                    </div>

                    <br>
                    <div class="bpm-row">
                        <div class="bpm-large-12 bpm-small-12 bpm-columns text-right"><a onClick="bpmcontext.bpm_confirm_yes();" class="button bpm-small bpm_nodecoration" >' . __('Publish', 'bpmcontext') . '</a>&nbsp;&nbsp;<a onClick="bpmcontext.bpm_confirm_yes_with_publish();" class="button bpm-small bpm_nodecoration" >Publish & Promote</a>&nbsp;&nbsp;<a onClick="bpmcontext.bpm_confirm_no(\'bpm_confirm_publish\')" class="button bpm-small  bpm_nodecoration" >' . __('Cancel', 'bpmcontext') . '</a></div>
                    </div>
                </div>


                <div id="bpm_confirm_admin_file_delete" class="reveal-modal bpm-small" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog" data-options="close_on_background_click:false;close_on_esc:false;">
                    <h2 class="bpm-header-2 bpm_lng_delete_selected_files">' . __('Delete Selected Files?', 'bpmcontext') . '</h2>
                    <div class="bpm-row">
                        <div class="bpm-large-12 bpm-small-12 bpm-columns bpm_lng_delete_selected_files_message">' . __('Deleting the selected files is permanent...forever...cannot be undone.  <br><br>Are you sure?', 'bpmcontext') . '</div><br>
                    </div>
                    <div class="bpm-row">
                        <div class="bpm-large-12 bpm-small-12 bpm-columns text-right"><a onClick="bpmcontext.bpm_delete_files();" class="button bpm-small bpm_nodecoration" >' . __('Yes', 'bpmcontext') . '</a>&nbsp;&nbsp;<a onClick="bpmcontext.bpm_confirm_no(\'bpm_confirm_admin_file_delete\')" class="button bpm-small  bpm_nodecoration" >' . __('No', 'bpmcontext') . '</a></div>
                    </div>
                </div>

                <div id="bpm_attachments_view_versions" class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog" >
                    <h2 class="bpm-header-2 bpm_lng_file_version_history">' . __('File Version History', 'bpmcontext') . '</h2>
                    <div class="bpm-row">
                        <div class="bpm-large-12 bpm-small-12 bpm-columns" id="bpm_attachments_versions_content"></div><br>
                    </div>
                    <div class="bpm-row">
                        <div class="bpm-large-12 bpm-small-12 bpm-columns text-right"><a id="bpm_confirm_version_delete" onClick="bpmcontext.bpm_confirm_version_delete()" class="button bpm-small  bpm_nodecoration bpm-hide" >' . __('Admin Delete', 'bpmcontext') . '...</a>&nbsp;&nbsp;<a onClick="bpmcontext.bpm_confirm_no(\'bpm_attachments_view_versions\')" class="button bpm-small  bpm_nodecoration" >' . __('Close', 'bpmcontext') . '</a></div>
                    </div>
                </div>

                <div id="bpm_attachment_no_storage_window" class="reveal-modal bpm-small" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
                    <h2 class="bpm-header-2 bpm_lng_out_of_storage">' . __('Out of Storage', 'bpmcontext') . '</h2>
                    <div class="bpm-row">
                        <div class="bpm-large-12 bpm-small-12 bpm-columns bpm_lng_out_of_storage_messsage">' . __('Free accounts have 1 GB of free storage and you have used you available storage space.   You can delete files to create space or upgrade to get additional space.', 'bpmcontext') . '</div><br>
                    </div>
                    <div class="bpm-row">
                        <div class="bpm-large-12 bpm-small-12 bpm-columns text-right"><a onClick="bpmcontext.bpm_confirm_no(\'bpm_attachment_no_storage_window\')" class="button bpm-small  bpm_nodecoration">' . __('Close', 'bpmcontext') . '</a></div>
                    </div>
                </div>

                <div id="bpm_get_route_to_user" class="reveal-modal tiny" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog" data-options="close_on_background_click:false;close_on_esc:false;">
                    <h2 class="bpm-header-2 bpm_lng_route_to_title" id="bpm_route_to_reveal_title">' . __('Route To', 'bpmcontext') . '</h2>
                    <div class="bpm-row full-width">
                        <div class="bpm-large-12 bpm-small-12 bpm-columns text-center " id="bpm_route_to_reveal_list" style="margin-top:3px;margin-bottom:10px;max-height:15em;overflow-x:hidden;"></div>
                    </div>
                    <div class="bpm-row full-width">
                        <div class="bpm-large-12 bpm-small-12 bpm-columns text-right"><a onClick="bpmcontext.bpm_confirm_yes();" class="button bpm-small  bpm_nodecoration" >' . __('Send', 'bpmcontext') . '</a>&nbsp;<a onClick="bpmcontext.bpm_confirm_no(\'bpm_get_route_to_user\')" class="button bpm-small  bpm_nodecoration" >' . __('Cancel', 'bpmcontext') . '</a></div>
                    </div>
                </div>

                <div id="bpm_workspace_manager" class="reveal-modal xlarge" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog" data-options="close_on_background_click:false;close_on_esc:false;">
                    <div class="bpm-row full-width">
                        <div class="bpm-large-12 bpm-small-12 bpm-columns text-left">
                    <h2 class="bpm-header-2 bpm_lng_ws_manager_title" id="bpm_workspace_manager_reveal_title">' . __('Workspace Designer', 'bpmcontext') . '</h2>
                            </div>
                    </div>


                </div>';


            echo '          <div id="bpm-workspace-designer-frame" class="bpm-hide">
                    <div class="bpm-row full-width">
                        <div class="bpm-large-12 bpm-small-12 bpm-columns text-right" id="bpm_ws_master_save_buttons">
                            ' . __('Status', 'bpmcontext') . ':&nbsp;<div id="bpm_ws_pub_dd" style="display: inline;">&nbsp;</div>&nbsp;&nbsp;<a id="bpm_save_workspace"  class="button bpm-unselectable bpm-small-ws-button bpm_lng_save bpm_ws_save_button bpm-debounce-button bpm_nodecoration" >' . __('Save', 'bpmcontext') . '</a>&nbsp;<a id="bpm_ws_manager_cancel_0" onClick="bpmcontext.bpm_cancel_workspace(0);" class="button bpm-unselectable bpm-small-ws-button  bpm_nodecoration bpm_ws_cancel_button bpm-debounce-button" >' . __('Close', 'bpmcontext') . '</a>&nbsp;<a onClick="bpmcontext.bpm_show_ws_tutorial(2000)"><span style="font-size:1.8em;vertical-align: middle;" class="fa fa-question-circle bpm-wsd-help-icon"></span></a>
                        </div>
                    </div>

                    <div class="bpm-row">
                        <div class="bpm-small-12 bpm-large-12 bpm-columns text-right" >
                            <div id="bpm_ws_cancel_alert_0" class="bpm-hide "><div class="bpm-row"><div class="bpm-small-12 bpm-large-12 bpm-columns text-right bpm_tutorial_text" >You have unsaved changes. &nbsp;<a onClick="bpmcontext.bpm_cancel_workspace_confirmed(0);" class="button bpm-unselectable bpm-small-ws-button  bpm_nodecoration bpm_ws_cancel_button" >' . __('Close without Saving', 'bpmcontext') . '</a> &nbsp;<a onClick="bpmcontext.bpm_cancel_workspace_not_confirmed(0);" class="button bpm-unselectable bpm-small-ws-button  bpm_nodecoration bpm_ws_cancel_button" >' . __('Cancel', 'bpmcontext') . '</a></div></div></div>
                        </div>
                    </div>
                    <div class="bpm-row">
                        <div class="bpm-small-5 bpm-large-5 bpm-columns " >&nbsp;</div>
                        <div class="bpm-small-7 bpm-large-7 bpm-columns " > <div id="bpm_ws_unpublished_message">&nbsp;</div>  </div>
                    </div>
                    <hr class="bpm_hr_gray bpm_small_sep"><br>
                    <div data-alert class="alert-box info radius text-left  bpm-hide" id="bpm_ws_purchase_message" >' . __('When you change the status to \'Published\' a workspace will be added to your account at $20 per month.  If you unpublish a workspace, pages created with this workspace will still be available but you will no longer be billed for the workspace.', 'bpmcontext') . '</div>
                    <div data-alert class="alert-box alert radius text-left  bpm-hide" id="bpm_ws_error_message" >' . __('Fix the errors and try again.', 'bpmcontext') . '</div>
                    <div data-alert class="alert-box success radius text-left  bpm-hide" id="bpm_ws_success_message" >' . __('Voila! All workspace template elements saved.', 'bpmcontext') . '</div>
                    <div data-alert class="alert-box warning radius text-left  bpm-hide" id="bpm_ws_success_message_unpub" >' . __('This Workspace design is NOT published and will not be available for users to create new pages. All workspace template elements saved.', 'bpmcontext') . '</div>
                    <div id="bpm_workspace_manager_content" style="overflow-x: hidden; ">' . __('Loading...', 'bpmcontext') . '</div>
                    <div id="bpm_ws_deisgner_activity_cover" class="bpm-admin-overlay bpm-hide text-center"><div class="bpm-admin-ws-activity"><span style="color:#008cba;margin-top:4em" class="fa fa-spinner fa-spin fa-3x">&nbsp;</span></div></div>
                </div>

                <div id="bpm_purchase_message_primary_admin" class="bpm-hide">
                <div class="bpm-row full-width" style="margin-top:3em;">
                        <div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>
                        <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" style="font-size:1.25em">' . __('Unfortunately you have no available custom workspace templates to use to create a new workspace template for this account. You can purchase additional workspaces on our site at ', 'bpmcontext') . '<a style="font-size:1.15em" target="_blank" href="https://bpmcontext.com/product-category/workspace-suites/">BPMContext</a>.</div>
                        <div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>
                </div>

                <div id="bpm_purchase_message_not_primary_admin" class="bpm-hide">
                <div class="bpm-row full-width" style="margin-top:3em;">
                        <div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>
                        <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" style="font-size:1.25em">' . __('Unfortunately you have no available custom workspace templates to use to create a new workspace template for this account. The primary admininstrator can purchase additional workspaces on our site at ', 'bpmcontext') . '<a style="font-size:1.15em" target="_blank" href="https://bpmcontext.com/product-category/workspace-suites/">BPMContext</a>.</div>
                        <div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>
                  </div>
                  <div class="bpm-row full-width" style="margin-top:3em;">
                        <div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>
                        <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" style="font-size:1.25em" >' . __('The primary admininstrator for this account is ', 'bpmcontext') . '<span style="font-size:1.15em" id="bpm_workspace_primary_admin_name">&nbsp;</span></div>
                        <div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>
                </div>

                <div id="bpm_edit_infobox" class="reveal-modal bpm-small" data-reveal aria-labelledby="bpm_edit_infobox_title" aria-hidden="true" role="dialog" data-options="close_on_background_click:false;close_on_esc:false;">
                    <h2 id="bpm_edit_infobox_title" class="bpm-header-2 bpm_lng_edit_infobox">' . __('Edit Infobox', 'bpmcontext') . '</h2>
                    <div class="bpm-row full-width">
                        <div class="bpm-large-12 bpm-small-12 bpm-columns text-left" id="bpm_infobox_content" style="margin-top:3px;margin-bottom:10px;max-height: 350px;overflow-x:hidden;"></div>
                    </div>
                    <div class="bpm-row full-width">
                        <div class="bpm-large-6 bpm-small-6 bpm-columns text-left">
                            <div data-alert class="alert-box success radius text-left bpm-hide" id="bpm_user_infobox_save_message" >' . __('Saving infobox information.', 'bpmcontext') . '</div>&nbsp;
                        </div>
                        <div class="bpm-large-6 bpm-small-6 bpm-columns text-right"><a id="bpm_infobox_reveal_save" onClick="bpmcontext.bpm_save_infobox();" class="button bpm-small  bpm_nodecoration" >' . __('Save', 'bpmcontext') . '</a>&nbsp;<a onClick="bpmcontext.bpm_confirm_no(\'bpm_edit_infobox\')" class="button bpm-small  bpm_nodecoration" >' . __('Cancel', 'bpmcontext') . '</a></div>
                    </div>
                </div>

                <div id="bpm_edit_user_profile" class="reveal-modal" data-reveal aria-labelledby="bpm_edit_user_profile_title" aria-hidden="true" role="dialog" data-options="close_on_background_click:false;close_on_esc:false;">
                    <h2 id="bpm_edit_user_profile_title" class="bpm-header-2 bpm_lng_edit_user_profile">' . __('Edit User Profile', 'bpmcontext') . '</h2>
                    <div class="bpm-row full-width">
                        <div class="bpm-large-12 bpm-small-12 bpm-columns text-center" id="bpm_edit_user_profile_list" style="margin-top:3px;margin-bottom:10px;max-height: 350px;overflow-x:hidden;"></div>
                    </div>
                    <div class="bpm-row full-width">
                        <div class="bpm-large-6 bpm-small-6 bpm-columns text-left">
                            <div data-alert class="alert-box success radius text-left  bpm-hide" id="bpm_user_profile_save_message" >' . __('Saving profile settings.', 'bpmcontext') . '</div>&nbsp;
                        </div>
                        <div class="bpm-large-6 bpm-small-6 bpm-columns text-right"><a id="bpm_save_user_prefs_button" onClick="bpmcontext.bpm_save_user_pref();" class="button bpm-small  bpm_nodecoration" >' . __('Save', 'bpmcontext') . '</a>&nbsp;<a onClick="bpmcontext.bpm_confirm_no(\'bpm_edit_user_profile\')" class="button bpm-small  bpm_nodecoration" >' . __('Cancel', 'bpmcontext') . '</a></div>
                    </div>
                </div>

                <div id="bpm_edit_dropdown" class="reveal-modal" data-reveal aria-labelledby="bpm_edit_dropdown_list" aria-hidden="true" role="dialog" data-options="close_on_background_click:false;close_on_esc:false;">
                    <h2 id="bpm_edit_dropdown_list" class="bpm-header-2 ">' . __('Edit Dropdown List', 'bpmcontext') . '</h2>
                    <div id="bpm_edit_dropdown_content"></div>
                    <div class="bpm-row full-width">
                        <div class="bpm-large-12 bpm-small-12 bpm-columns text-right"><a id="bpm_save_dropdown_button" onClick="bpmcontext.bpm_save_dropdown();" class="button bpm-small  bpm_nodecoration" >' . __('Save', 'bpmcontext') . '</a>&nbsp;<a onClick="bpmcontext.bpm_confirm_no(\'bpm_edit_dropdown\')" class="button bpm-small  bpm_nodecoration" >' . __('Cancel', 'bpmcontext') . '</a></div>
                    </div>
                </div>

                <div id="bpm_generic_reveal" class="reveal-modal" data-reveal aria-labelledby="bpm_generic_reveal_list" aria-hidden="true" role="dialog" data-options="">
                    <h2 id="bpm_generic_reveal_list" class="bpm-header-2 ">%nbsp;</h2>
                    <div id="bpm_generic_reveal_content"></div>
                </div>

                <div id="bpm_extension_info"></div>

                <ol id="bpm_tutorial" class="joyride-list" data-joyride></ol>

                <div id="bpm_tutorial_name_11" data-pagetype="Home" data-shownow="1" data-tutorialid="11" data-adminonly="0" class="bpm_tutorials bpm_page_0 bpm-hide bpm_lng_welcome_tour">' . __('Getting Started', 'bpmcontext') . '</div>

                <div id="bpm_thank_you_message" class="bpm-hide">
                    <p class="bpm_lng_thank_you_1">' . __('Thank you for your purchase.  You will receive an email in a few moments with your invoice.', 'bpmcontext') . '</p>
                    <p class="bpm_lng_thank_you_2">' . __('Upgrades and extensions are visible on the Workspace Map and ready to use.', 'bpmcontext') . '</p>
                    <br><br>
                    <span class="fa fa-smile-o" style="color:green;font-size:3em;"></span>
                </div>
            </div>
        </div>

        <div id="bpm_functional_tutorial_1000" class="bpm-hide">
            <div class="bpm-message-wrapper bpm-shadow">
            <div class="bpm-row full-width">
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>
                <div class="bpm-large-10 bpm-small-10 bpm-columns text-left">
                    <span class="bpm-notification-header">' . __('Notifications keep you current', 'bpmcontext') . '</span>
                    <p class="bpm-notification-text">' . __('There are three types of notifications that are displayed here:', 'bpmcontext') . '</p>
                    <div  class="bpm-notification-text">
                        ' . __('<strong>Drafts</strong> – any documents that you have started but have not yet published or assigned to a team member will be displayed in the Drafts section.', 'bpmcontext') . '<br>
                        ' . __('<strong>Consumer Notifications</strong> – if you subscribe to a page type in the Subscriptions widget, you will be notified via email and on here each time a page of that type is published.', 'bpmcontext') . '<br>
                        ' . __('<strong>Assignments</strong> – if a document, for example an Action Item, is assigned to you, then you will recieve an email and the page will be listed here as well.', 'bpmcontext') . '<br>
                    </div>
                </div>
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>
            </div>
            <div class="bpm-row full-width">
                <div class="bpm-large-11 bpm-small-11 bpm-columns text-right"><br><a onClick="bpmcontext.bpm_clear_tutorial(1000)"><span class="fa fa-remove"></span>&nbsp;' . __('Got it', 'bpmcontext') . '</a></div>
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>
            </div>
            </div>
        </div>

        <div id="bpm_functional_tutorial_1001" class="bpm-hide">
            <div class="bpm-message-wrapper bpm-shadow">
                <div class="bpm-row full-width">
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>
                    <div class="bpm-large-10 bpm-small-10 bpm-columns text-left">
                        <span class="bpm-notification-header">' . __('Create pages with your favorite workspaces', 'bpmcontext') . '</span>
                        <p class="bpm-notification-text">' . __('To add workspace types to your Quick Docs list, click the Add or Remove link above to select the workspace types that will be displayed on the left side of this widget.', 'bpmcontext') . '</p>
                    </div>
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>
                </div>
                <div class="bpm-row full-width">
                    <div class="bpm-large-11 bpm-small-11 bpm-columns text-right"><a onClick="bpmcontext.bpm_clear_tutorial(1001)"><span class="fa fa-remove"></span>&nbsp;' . __('Got it', 'bpmcontext') . '</a></div>
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>
                </div>
            </div>
        </div>

        <div id="bpm_functional_tutorial_1002" class="bpm-hide">
            <div class="bpm-message-wrapper bpm-shadow">
                <div class="bpm-row full-width">
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>
                    <div class="bpm-large-10 bpm-small-10 bpm-columns text-left">
                        <span class="bpm-notification-header">' . __('Manage page types you follow', 'bpmcontext') . '</span>
                        <p>' . __('Subscriptions can keep you up-to-date on activities as pages are added and changed.', 'bpmcontext') . '</p>
                        <p>' . __('To add workspace types to your subscription list, click the Add or Remove link above to select the workspaces that you want to be notified about when new pages are created or changed.', 'bpmcontext') . '</p>
                    </div>
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>
                </div>
                <div class="bpm-row full-width">
                    <div class="bpm-large-11 bpm-small-11 bpm-columns text-right"><a onClick="bpmcontext.bpm_clear_tutorial(1002)"><span class="fa fa-remove"></span>&nbsp;' . __('Got it', 'bpmcontext') . '</a></div>
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>
                </div>
            </div>
        </div>

        <div id="bpm_functional_tutorial_1003" class="bpm-hide">
            <div class="bpm-message-wrapper bpm-shadow">
                <div class="bpm-row full-width">
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>
                    <div class="bpm-large-10 bpm-small-10 bpm-columns text-left">
                        <span class="bpm-notification-header">' . __('Tag a page to add your favorite workspaces', 'bpmcontext') . '</span>
                        <p>' . __('The All Workspaces report lets you see all the pages of a specific workspace type.', 'bpmcontext') . '</p>
                        <p>' . __('You can add your favorites by tagging a page from the Page Actions -> Options menu when you are on a published page.', 'bpmcontext') . '</p>
                    </div>
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>
                </div>
                <div class="bpm-row full-width">
                    <div class="bpm-large-11 bpm-small-11 bpm-columns text-right"><a onClick="bpmcontext.bpm_clear_tutorial(1003)"><span class="fa fa-remove"></span>&nbsp;' . __('Got it', 'bpmcontext') . '</a></div>
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>
                </div>
            </div>
        </div>

        <div id="bpm_functional_tutorial_1004" class="bpm-hide">
            <div class="bpm-message-wrapper-admin-manager ">
                <div class="bpm-row full-width">
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>
                    <div class="bpm-large-10 bpm-small-10 bpm-columns text-left">
                        <span class="bpm-notification-header">' . __('Add users and features', 'bpmcontext') . '</span>
                        <p>' . __('The account manager enables you to add users and extend your site with additional workspace types and storage.', 'bpmcontext') . '</p>
                        <p>' . __('To add a team member, click the Add Business User button.  If you have upgraded with the Customer Portal, you can add customer users by navigating to their company page, clicking Add New on the Page Actions toolbar and then selecting Customer Contact.', 'bpmcontext') . '</p>
                    </div>
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>
                </div>
            </div>
        </div>

        <div id="bpm_functional_tutorial_1005" class="bpm-hide">
            <div class="bpm-message-wrapper bpm-shadow">
                <div class="bpm-row full-width">
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left">&nbsp;</div>
                    <div class="bpm-large-10 bpm-small-10 bpm-columns text-left">
                        <p>' . __('The directory provides quick access to team member pages and contact information.', 'bpmcontext') . '</p>
                        <p>' . __('To edit the information displayed here, click the team member\'s name and then edit the Infobox information on the right side of the page.', 'bpmcontext') . '</p >
                    </div >
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                </div >
                <div class="bpm-row full-width" >
                    <div class="bpm-large-11 bpm-small-11 bpm-columns text-right" ><a onClick="bpmcontext.bpm_clear_tutorial(1005)" ><span class="fa fa-remove" ></span >&nbsp;' . __('Got it ', 'bpmcontext') . '</a ></div >
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                </div >
            </div >
        </div >

        <div id="bpm_functional_tutorial_1010" class="bpm-hide" >
            <div >
                <div class="bpm-row full-width" >
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                    <div class="bpm-large-10 bpm-small-10 bpm-columns text-left " >
                        <p class="bpm_text_medium" > ' . __('The Infobox provides a sidebar to capture information specific to a workspace ', 'bpmcontext') . '.</p >
                        <p class="bpm_text_medium" > ' . __('To edit the information, click the Infobox header and click the Edit button ', 'bpmcontext') . '.</p >
                    </div >
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                </div >
                <div class="bpm-row full-width" >
                    <div class="bpm-large-11 bpm-small-11 bpm-columns text-right" ><a onClick="bpmcontext.bpm_clear_tutorial(1010)" class="bpm_links" ><span class="fa fa-remove" ></span >&nbsp;' . __('Got it', 'bpmcontext') . ' </a ></div >
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                </div >
            </div >
            <hr class="bpm_hr_gray" >
        </div >

        <div id="bpm_functional_tutorial_1011" class="bpm-hide" >
            <hr class="bpm_hr_gray" >
            <div >
                <div class="bpm-row full-width" >
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                    <div class="bpm-large-10 bpm-small-10 bpm-columns text-left bpm_text_medium" >
                        <p style="font-size: 1em" > ' . __('You can set your preferences by clicking the Settings header and then clicking Edit.', 'bpmcontext') . '</p >
                        <p style="font-size: 1em" > ' . __('The email address is used for your username, so if you want to change your displayed email address, you will need to change it in the Infobox as well.', 'bpmcontext') . '</p >
                    </div >
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                </div >
                <div class="bpm-row full-width" >
                    <div class="bpm-large-11 bpm-small-11 bpm-columns text-right" ><a onClick="bpmcontext.bpm_clear_tutorial(1011)" class="bpm_links" ><span class="fa fa-remove" ></span >&nbsp;' . __('Got it', 'bpmcontext') . ' </a ></div >
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                </div >
            </div >
        </div >

        <div id="bpm_functional_tutorial_1013" class="bpm-hide" >
            <div >
                <div class="bpm-row full-width" >
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                    <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >
                        <p class="bpm_text_medium" > ' . __('The Workspace Map details how workspaces are related to each other.', 'bpmcontext') . ' </p >
                        <p class="bpm_text_medium" > ' . __('Click on a Workspace name to get more information about how the workspace is typically utilized. Administrators can add additional template sets using the Account Manager.', 'bpmcontext') . '</p >
                    </div >
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                </div >
                <div class="bpm-row full-width" >
                    <div class="bpm-large-11 bpm-small-11 bpm-columns text-right" ><a onClick="bpmcontext.bpm_clear_tutorial(1013)" class="bpm_links" ><span class="fa fa-remove" ></span >&nbsp;' . __('Got it', 'bpmcontext') . ' </a ></div >
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                </div >
            </div >
            <hr class="bpm_hr_gray" >
        </div >

        <div id="bpm_functional_tutorial_1014" class="bpm-hide" >
            <div class="bpm-message-wrapper" >
                <div class="bpm-row full-width" >
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                    <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >
                        <p > ' . __('Sharing area tutorial.', 'bpmcontext') . '</p >
                        <p ></p >
                    </div >
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                </div >
                <div class="bpm-row full-width" >
                    <div class="bpm-large-11 bpm-small-11 bpm-columns text-right" ><a onClick="bpmcontext.bpm_clear_tutorial(1014)" class="bpm_links" ><span class="fa fa-remove" ></span >&nbsp;' . __('Got it', 'bpmcontext') . ' </a ></div >
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                </div >
            </div >
        </div >

        <div id="bpm_functional_tutorial_1015" class="bpm-hide" >
            <div class="bpm-message-wrapper-admin-manager" >
                <div class="bpm-row full-width" >
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                    <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >
                        <p > ' . __('Extensions help your team collaborate.', 'bpmcontext') . '</p >
                        <p ><strong > ' . __('Help Center Articles ', 'bpmcontext') . '</strong ></p >
                        <p ><a class="bpm_links" href="https://support.bpmcontext.com/learn-about-our-platform/customer-portal/" target="_blank" > ' . __('Customer Portal', 'bpmcontext') . ' </a ></p >
                        <p ><a class="bpm_links" href="https://support.bpmcontext.com/learn-about-our-platform/workspaces/" target="_blank" > ' . __('Workspaces', 'bpmcontext') . '</a ></p >
                    </div >
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                </div >
            </div >
        </div >

        <div id="bpm_functional_tutorial_1016" class="bpm-hide" >
            <div class="bpm-message-wrapper-admin-manager" >
                <div class="bpm-row full-width" >
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                    <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >
                    </div >
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                </div >
            </div >
        </div >

        <div id="bpm_functional_tutorial_1017" class="bpm-hide" >
            <div class="bpm-message-wrapper-admin-manager" >
                <div class="bpm-row full-width" >
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                    <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >
                        <p > ' . __('Your statement lists upcoming charges for your acccount. Subscriptions are charged on a monthly or annual basis depending on the product.  If you want to cancel a subscription for an item, go to the item and uninstall it. Workspaces are billed monthly for each workspace you have published in addition to the two free ones included with each account. Unpublish them to terminate billing. This will terminate billing for the next bill date.', 'bpmcontext') . '</p >
                        <p > ' . __('You can change the credit card we use for subscription billing by updating the information on the Payment Method tab.', 'bpmcontext') . '</p >
                        <p > ' . __('All of you invoices can be found on the Invoices tab.', 'bpmcontext') . '</p >
                    </div >
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                </div >
            </div >
        </div >

        <div id="bpm_functional_tutorial_1018" class="bpm-hide" >
            <div class="bpm-message-wrapper-admin-manager" >
                <div class="bpm-row full-width" >
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                    <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >

                        <p > ' . __('Custom Workspaces extend the ways your team can collabrate and share information.', 'bpmcontext') . '</p >
                        <p ><strong > ' . __('Help Center Articles', 'bpmcontext') . ' </strong ></p >
                        <p ><a class="bpm_links" href="https://support.bpmcontext.com/learn-about-our-platform/workspaces/" target="_blank" > ' . __('Workspaces', 'bpmcontext') . '</a ></p >


                    </div >
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                </div >
            </div >
        </div >

        <div id="bpm_functional_tutorial_1019" class="bpm-hide" >
            <div class="bpm-message-wrapper-admin-manager" >
                <div class="bpm-row full-width" >
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                    <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >
                        <p > ' . __('When notifications are sent to registered users, or to people that are invited to your account, we use the Login URL to send them to your site.  If you changed servers, changed the page that '.$bpm_plugin_name.' is on or moved from sandbox to production you will get this message.', 'bpmcontext') . '</p >
                        <p > ' . __('Updating the Login URL will ensure that users are directed to the correct site location.', 'bpmcontext') . '</p >
                    </div >
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                </div >
            </div >
        </div >

        <div id="bpm_functional_tutorial_2000" class="bpm-hide" data-height="550" >
            <div class="bpm-row full-width" >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >
                    <p > ' . __('The Digital Workspace Designer allows Admins to:', 'bpmcontext') . '</p >
                    <ul >
                        <li style="list-style-type: square;" > ' . __('Edit '.$bpm_plugin_name.' - click a link in Workspace Map and go to Edit Workspace ', 'bpmcontext') . '</li >
                        <li style="list-style-type: square;" > ' . __('Edit Intranet Pro or Customer Portal Suites(Suites can be purchased and installed via Extensions in Acct Manager)', 'bpmcontext') . '</li >
                        <li style="list-style-type: square;" > ' . __('Create your own workspace or suite without complicated code - click Workspace Designer in Admin Menu on a page to add a child workspace.', 'bpmcontext') . '</li >
                    </ul >
                    <p > ' . __('A subscription is required for more than 2 custom workspaces. No credit card needed to add 2 custom workspaces.', 'bpmcontext') . '</p >
                    <ul >
                    <li style="list-style-type: square;" > ' . __('Click the help icon for instructions on section for more information.', 'bpmcontext') . '</li >
                    <li style="list-style-type: square;" > ' . __('Save your workspace changes. Publish to install and make it available to your team.', 'bpmcontext') . '</li>
                    <li style="list-style-type: square;" > ' . __('Unpublish workspaces - view a list the account manager and on the Admin menu.', 'bpmcontext') . '</li >
                    <li style="list-style-type: square;" > ' . __('Publish workspaces - visible in the Workspace Map.', 'bpmcontext') . '</li >
                    </ul >
                    <p > ' . __('Launch the designer when you want to create and link a workspace to the hierarchy of that page.', 'bpmcontext') . '</p >
                    <p >' . __('For example launch the designer from Human Resource Department to add a Meetings Workspace for all Departments. Departments can then publish meeting workspaces to organize agendas, presentations and meeting minutes.', 'bpmcontext') . '</p >
                    <p > ' . __('Includes 2 custom designed workspaces with '.$bpm_plugin_name.'. Purchase the subscription plan when you want to add a third workspace. Suites are not counted as part of the subscription plan. Go to the Account Manager for details.', 'bpmcontext') . '</p >
                </div >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
            </div >
        </div >

        <div id="bpm_functional_tutorial_2001" class="bpm-hide" data-height="500" >
            <div class="bpm-row full-width" >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >
                    <p > ' . __('Workspace settings affect how workspaces are created, routed and made visible for users.', 'bpmcontext') . '</p >
                </div >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
            </div >
            <div class="bpm-row full-width" >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >
                    <p >' . __('<strong > Workspace Name </strong > – is the name of the activity or process. The workspace name is utilized in the naming of new pages so it should be descriptive of the information you want to share or process that you are creating – for example ‘Sales Quote’. It will also be associated with notifications, All Workspaces reports and page links sections. You can edit the name for workspaces that you create but names for workspaces provided by BPMContext cannot be edited.', 'bpmcontext') . ' </p >
                </div >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
            </div >
            <div class="bpm-row full-width" >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >
                    <p >' . __('<strong > Workspace Type </strong > – there are three workspace types:', 'bpmcontext') . '</p >
                </div >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
            </div >

            <div class="bpm-row full-width" >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >
                    <ul >
                        <li >
                            ' . __('<strong > Consumer(no workflow):</strong > these documents are created and published by registered users in the system and are available for registered users to view and edit.', 'bpmcontext') . '
                        </li >
                        <li >
                            ' . __('<strong > Serial Routed:</strong > these documents follow a pre - defined routing path that you create at the bottom of the Workspace Designer.  If you have a process that is routed through the same people each time, then you can automate the routing using this workspace type.  For example, a sales quote might go from the sales person, to Bob(the manufacturing manager) to Liz(the CFO) then to Henry(the Sales Leader) before being routed back to the original sales person.', 'bpmcontext') . '
                        </li >
                        <li >
                            ' . __('<strong > Targeted Routing:</strong > sometimes we have a process where we rarely know who will get assigned the task. In this case use the Targeted workflow type to allow the creator of the document to select a user for the task assignment after they create a draft document.', 'bpmcontext') . '
                        </li >
                    </ul >

                </div >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
            </div >
            <div class="bpm-row full-width" >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >
                    <p >' . __('<strong > Workspace Status:</strong > You can publish a workspace template to make it available for users to create new documents. Also, if you have a workspace template that you no longer use, then you can un - publish it. Content created with this workspace template will still be available but users just will not be able to create new workspaces using this workspace template.', 'bpmcontext') . '</p >
                </div >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
            </div >
        </div >

        <div id="bpm_functional_tutorial_2002" class="bpm-hide" data-height="400" >
            <div class="bpm-row full-width" >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >
                    <p >' . __('<strong > Sections</strong > allow you to create and share content with team members and with customers or suppliers. There are three section types available:', 'bpmcontext') . '</p >
                </div >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
            </div >

            <div class="bpm-row full-width" >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >
                    <ul >
                        <li >
                            ' . __('<strong > Text:</strong > provides an area to create content and to promote that content to the Intranet home page using the ‘Promote’ button.', 'bpmcontext') . '
                        </li >
                        <li >
                            ' . __('<strong > Discussions:</strong > creates a place for team members, and other invited users(like Customers or Suppliers) to share thoughts about a particular process or announcement.', 'bpmcontext') . '
                        </li >
                        <li >
                            ' . __('<strong > Attachments:</strong > a place to upload files to be shared internally or with other invited users. Files are stored in Amazon S3 unless you install the BPMContext Dropbox plugin, in which case, your files will then be stored on your Dropbox account.', 'bpmcontext') . '
                        </li >
                    </ul >

                </div >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
            </div >
            <div class="bpm-row full-width" >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >
                    <p >' . __('If information has already been stored in a section, then you cannot delete it, you can only hide it from users by chaing the visible status to No.', 'bpmcontext') . '</p >
                </div >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
            </div >
        </div >

        <div id="bpm_functional_tutorial_2003" class="bpm-hide" data-height="500" >
            <div class="bpm-row full-width" >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >
                    <p >' . __('<strong > Infoboxes</strong > provide a form based information area on the right side of each workspace. There are seven field types available:', 'bpmcontext') . '</p >
                </div >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
            </div >

            <div class="bpm-row full-width" >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >
                    <ul >
                        <li >
                            ' . __('<strong > Text:</strong > Free form text field', 'bpmcontext') . '
    </li >
                        <li >
                            ' . __('<strong > Number:</strong > Free form field allows numbers and decimals only', 'bpmcontext') . '
    </li >
                        <li >
                            ' . __('<strong > Date:</strong > The user can select a date or you can populate it when the page is created(for custom workspaces)', 'bpmcontext') . '
                        </li >
                        <li >
                            ' . __('<strong > Dropdown:</strong > allows the user to select from a list of values that you define. Some pre - defined dropdown sets are available. OR, configure to add your own dropdown list.', 'bpmcontext') . '
                        </li >
                        <li >
                            ' . __('<strong > Page ID:</strong > this is the page ID of the current page', 'bpmcontext') . '
    </li >
                        <li >
                            ' . __('<strong > Email:</strong > validates that the email meets email formatting rules', 'bpmcontext') . '
    </li >
                        <li >
                            ' . __('<strong > User:</strong > provides a dropdown with names of registered users', 'bpmcontext') . '
    </li >
                    </ul >

                </div >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
            </div >

            <div class="bpm-row full-width" >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >
                    <p >' . __('<strong > Editable Fields:</strong > You can make the field read - only by changing the editable status. This is typically utilized if you are populating infoboxes using the Naming rules for the page.', 'bpmcontext') . '</p >
                </div >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
            </div >

            <div class="bpm-row full-width" >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >
                    <p >' . __('If information has already been stored in an Infobox, then you cannot delete it, you can only hide it from users by chaing the visible status to No.', 'bpmcontext') . '</p >
                </div >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
            </div >
        </div >

        <div id="bpm_functional_tutorial_2004" class="bpm-hide" data-height="500" >
            <div class="bpm-row full-width" >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >
                    <p >' . __('<strong > Naming rules </strong > determine how pages are named in the BPMContext system. You have the ability to customize the structure of page names. You can select a default name order and then edit it to meet your needs. There are several options that you can edit to change how your page names will be created.', 'bpmcontext') . '</p >

                    <p >' . __('<strong > Page Name Prefixes </strong >', 'bpmcontext') . '</p >

                    <ul >
                        <li >' . __('<strong > Workspace Name as Prefix </strong > – this is the workspace name of this workspace. It can be utilized to prefix pages so you know the general content of a page.  For example, it may be beneficial for you to use this feature for a Sales Quote workspace template. This way all of your Sales Quote pages will start with ‘Sales Quote’.', 'bpmcontext') . '</li >
                        <li >' . __('<strong > Parent Page as Prefix </strong > – this is the name of the parent page that a new page is created under using the ‘Add New’ feature. This is often useful to further identify the general content of a page.  For example, if you have a customer called ‘ABC Widget’ and you create a sales quote with both Workspace Name and Parent Page as prefixes, then your page name would start with ‘Sales Quote – ABC Widget’.', 'bpmcontext') . '</li >
                    </ul >

                    <p >' . __('<strong > Naming Type Options ', 'bpmcontext') . '</strong ></p >

                    <p > ' . __('There are four field types that you can use for page naming. They include: ', 'bpmcontext') . '</p >
                    <ul >

                        <li >' . __('<strong > Text Field </strong >  – using this will cause a window to popup when creating a new page requesting that the user enter information in the field to be utilized for page naming. Building on the example above, if you have a Text Field in the naming options call ‘Quote Description’ and the user enters ‘100 Blue Widgets’ in the naming field, then the page name will grow to become ‘Sales Quote - ABC Widget - 100 Blue Widgets’.', 'bpmcontext') . '</li >

                        <li >' . __('<strong > User Name Field </strong > -this will append the user’s name that created the page to the page name.  If the user’s name is Bob Smith, then the above example page name will then become ‘Sales Quote - ABC Widget - 100 Blue Widgets - Bob Smith’.', 'bpmcontext') . '</li >

                        <li >' . __('<strong > Date Field </strong >  – this will append the date the document was created to the page name.  If today is December 11, 2015, then the above example page name will then become ‘Sales Quote - ABC Widget - 100 Blue Widgets - Bob Smith - 12 - 11 - 2015’.', 'bpmcontext') . '</li >

                        <li >' . __('<strong > Page ID Field </strong >  – this will append the page ID of this page to the page name. This is not a feature often used, but, since all page names are unique, it is sometimes helpful to have a way to be sure that you can create a page.  For example, If you do multiple Sales Quotes on the same day, for the same item, then by adding the page ID you can then create as many Sales Quotes as you want for the same item to the same customer on any given day.  If the page ID for a new page is 103 then the example above would become ‘Sales Quote - ABC Widget - 100 Blue Widgets - Bob Smith - 12 - 11 - 2015 - 103’', 'bpmcontext') . '</li >
                    </ul >

                    <p >' . __('<strong > Infobox Target </strong > -Autofill Infobox Fields and save time ', 'bpmcontext') . '</p >

                    <p > ' . __('The Infobox Target allows you to pick an existing infobox from the infoboxes on this workspace type where the information generated when the page is created will be inserted.  For example, if you have an infobox field for Sales Rep on the Sales Quote workspace template, and you identify this field to be populated when a page is created, then the name of the person creating the Sales Quote will be inserted in the Sales Rep infobox. If you have added new Infoboxes, then you will have to save the Workspace to make them available in the dropdown.', 'bpmcontext') . '</p >

                    <p >' . __('<strong > Add New Field Name </strong > ', 'bpmcontext') . '</p >

                    <p > ' . __('You can enter then title for the ‘Add New’ field here.  For example, if you want to capture a description of the sales quote, then you might want to call this field ‘Description’.  Then when a user creates a page, they will enter the description of the sales quote in the description field, which will then be used in creating the page name. In our example above, the description field would have been used to capture the ‘100 Blue Widgets’ information.', 'bpmcontext') . ' </p >

                </div >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
            </div >
        </div >

        <div id="bpm_functional_tutorial_2005" class="bpm-hide" data-height="500" >
            <div class="bpm-row full-width" >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >
                    <p >' . __('<strong > Sharing</strong > is part of the Customer and Supplier Portal and allows you to share information with Customers and Suppliers. When you choose to share content with a Customer or Supplier it is important to note how information is shared.', 'bpmcontext') . '</p >

                    <p > ' . __('You set up external users by adding Customer Contacts or Supplier Contacts by going to the Add New feature on the toolbar when you are on a customer or supplier. You can then invite them to share by sending an invitation from the Sharing box on the right side of any shared page. Once they register and setup a password, they will then have access ONLY to the sections and infoboxes that you have agreed to share by clicking the checkboxes on the workspace designer for that page type. Sections that are not shared will not be visible to external users, but will be visible to internal team members.', 'bpmcontext') . '</p >

                    <p > ' . __('Shared sections are indicated by a message in the header of the section telling users which customers or suppliers are able to view each section. Infoboxes that are shared have a blue marker next to the infobox.', 'bpmcontext') . '</p >

                    <p > ' . __('To share information just click the checkbox so it is checked. To hide, simply uncheck the checkbox. The change is instant and applies to all Workspaces created using the selected workspace type.', 'bpmcontext') . '</p >

                    <p > ' . __('Also, if you want external users to be able to create a page of this type, make sure the External can create new workspace option is set to ‘Yes’.', 'bpmcontext') . '</p >
                </div >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
            </div >
        </div>

        <div id="bpm_functional_tutorial_60001" class="bpm-hide" >
        ' . __('Enter the name of the customer\'s company then click \'Create Draft\'', 'bpmcontext') . '
        </div>

        <div id="bpm_functional_tutorial_6000128" class="bpm-hide" >
        ' . __('Enter a headline for the new announcement and then click \'Create Draft\'', 'bpmcontext') . '
        </div>
        <div id="bpm_functional_tutorial_6000127" class="bpm-hide" >
        ' . __('Enter a headline for the new Company News item and then click \'Create Draft\'', 'bpmcontext') . '
        </div>

        <div id="bpm_functional_tutorial_2006" class="bpm-hide" data-height="500" >
            <div class="bpm-row full-width" >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div>
                <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >
                    <p ><strong > Routing</strong > ' . __('Serial routing allows you to create a predetermined or ordered path that new pages follow when created using this workspace type.', 'bpmcontext') . '
        ' . __('Route to User is the only required field for the routing option. When a page is created it will be routed to the first person in the list. Subsequent routings follow the order you specify to the next task owner. Any owner also has an option to sub - route and assign a task to another team member. After a sub - route is complete, the page is returned and ready to continue in the routing order.', 'bpmcontext') . '</p >

                    <p > ' . __('Escalation setup is optional. Escalation triggers email notifications to other team members when a task is past due. There are three fields to enable this feature:', 'bpmcontext') . '</p >

                </div>
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
            </div >

            <div class="bpm-row full-width" >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >
                    <ul >
                        <li >
                            ' . __('<strong > Step Name :</strong > a process name to call the step – for example ‘Quote Review’ might be utilized for reviewing a sales quote.', 'bpmcontext') . '
                        </li >
                        <li >
                            ' . __('<strong > Goal Time :</strong > this is the amount of time to wait before alerting the \'Escalate T\' team member', 'bpmcontext') . '
        </li >
                        <li >
                            ' . __('<strong > Escalate To:</strong > is the team member to get a notice when a document is overdue at a particular process step. The document will show up on an escalated list in their notifications.', 'bpmcontext') . '
                        </li >
                    </ul >
                </div >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
            </div >

            <div class="bpm-row full-width" >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
                <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >
                    <p > ' . __('You can reorder the steps by dragging the arrow icon on the left up or down.', 'bpmcontext') . '</p >
                </div >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
            </div >

            <div class="bpm-row full-width" >
                <div class="bpm-large-11 bpm-small-11 bpm-columns text-right" ><a onClick="bpmcontext.bpm_clear_ws_tutorial(2006)" class="bpm_links" ><span class="fa fa-remove" ></span >&nbsp;' . __('Got it', 'bpmcontext') . ' </a ></div >
                <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div >
            </div >
        </div>

        <div id="bpm_image_library" class="bpm-hide" >
            <select id="bpm_image_library_all_images" class="image-picker" >
                <option data-img - src="' . $imagedir . 'fireworks.jpg" value="fireworks.jpg" ></option >
                <option data-img - src="' . $imagedir . 'fireworks2.jpg" value="fireworks2.jpg" ></option >
            </select >
        </div>';

            $connect_my_form = '';
            if (current_user_can('manage_options')) {

                $connect_my_form = '<a href="' . admin_url('options-general.php?page=bpm_options&tab=bpm_tab_contact') . '" class="bpm_href_normal">Admin: Click to go to the WordPress Settings Page and connect forms</a>';
            }
            $image_source = plugins_url() . '/bpmcontext/images/contactform_page.png';

            //Connect My Form

            echo '
            <ul id="bpm_joyride_11_1" class="bpm-hide" >
            <li data-id="bpm_profile_drop_holder" data-button="Next" data-options="tip_location:left;prev_button: false" >
                <h3 > ' . __('You are logged in!', 'bpmcontext') . '</h3 >
                <p >' . __('This private workspace is secured with a password protected login. Front-end access to data in your account for you and your team.', 'bpmcontext') . '  </p >
                <p > ' . __('People who are not logged in see a login form along with a lost password link.', 'bpmcontext') . '</p >
            </li >
            <li data-id="bpm_root_breadcrumb" data-button="Next"  data-options="tip_location:bottom;prev_button: false" >
                <h3 > ' . __('See where you are', 'bpmcontext') . '</h3 >
                <p > ' . __($bpm_plugin_name.' pages are automatically structured in a parent-child hierarchy. Breadcrumbs help you navigate to pages in the hierarchy starting with the Company page.', 'bpmcontext') . ' </p >
            </li >
            <li data-id="" data-button="Next"  data-options="prev_button: false" >
                <h3 > ' . __('Central area is your team’s homepage', 'bpmcontext') . ' </h3 >
                <p > ' . __('A list of recently published pages or promoted pages appear in the center area of the Company page. ', 'bpmcontext') . '</p >
            </li >
            <li data-id="bpm_add_pages_dd" data-button="Next"  data-options="tip_location:bottom;prev_button: false" >
                <h3 > ' . __('Pages organize information ', 'bpmcontext') . '</h3 >
                <p > ' . __('You create and add pages from this list. Write, share files, comment and more. Then publish to share.', 'bpmcontext') . '</p >
            </li >';

            global $bpm_onboarding;
            if ($bpm_onboarding['joyride_11']) {

                foreach ($bpm_onboarding['joyride_11'] as $value) {
                    echo $value;
                }
            }

/**
          echo '<li data-id="bpm_right_context_map" data-callback="bpmcontext.bpm_open_add_pages_menu" data-args="Announcement" data-button="Next"  data-options="tip_location:left;prev_button: false" >
                <h3 > ' . __('User friendly templates', 'bpmcontext') . '</h3 >
                <p > ' . __('Workspaces are templates designed to organize info. To use a workspace go to Add Page menu and select a topic.', 'bpmcontext') . '</p >
                <p > ' . __('Administrators can edit workspaces in the hierarchy and can add new workspaces types as well.', 'bpmcontext') . '</p >
            </li >';
**/
    echo '</ul >

        <ul id="bpm_joyride_12_1" class="bpm-hide" >
            <li data-id="" data-button="Next" data-options="prev_button: false" >
                <h3 > ' . __('Workspaces', 'bpmcontext') . '</h3 >
                <p > ' . __('All workspace templates have a similar look and feel. Plus, they look the same whether they are in draft or published status. Most workspace templates have three sections - text, dicussion and attachments. Administrators can edit the workspace using the Workspace Designer in the Admin menu.', 'bpmcontext') . '</p >
                <p > ' . __('Workspaces come in three types:', 'bpmcontext') . '</p >
                <ul >
                    <li style="list-style-type: square;" class="bpm_joyride_li_text"> ' . __('Consumer - documents that are published and are viewable by registered users.', 'bpmcontext') . '</li >
                    <li style="list-style-type: square;" class="bpm_joyride_li_text"> ' . __('Assignable - documents that are assigned to a chosen user using the Workflow menu.', 'bpmcontext') . '</li >
                    <li style="list-style-type: square;" class="bpm_joyride_li_text"> ' . __('Routed - documents have a predetermined routing path as determined by the Admin using the Workspace Designer.', 'bpmcontext') . '</li >
                </ul >
            </li >
            <li data-id="bpm_last_breadcrumb" data-button="Next" data-options="tip_location:bottom;prev_button: false" >
                <h3 > ' . __('Current Document Name', 'bpmcontext') . ' </h3 >
                <p > ' . __('You can see the page hierarchy in the breadcrumb line. The last page is the current page and you can click up the path to get to other documents in the chain.', 'bpmcontext') . '</p >
            </li >
            <li data-id="bpm_workflow_menu_target" data-button="Next" data-options="tip_location:left;prev_button: false" >
                <h3 > ' . __('Publishing', 'bpmcontext') . '</h3 >
                <p > ' . __('After you finish creating your document you can publish it to make it viewable by registered users. You have two options in the Publish menu - Publish or Cancel and Delete. When you publish the document you will also have a choice to promote it to the homepage.', 'bpmcontext') . '</p >
                <p > ' . __('Documents that are in Draft status are only viewable by the user that created the document until they are published.', 'bpmcontext') . '</p >
                <p > ' . __('After a document is published only an Admin can delete it.', 'bpmcontext') . '</p >
            </li >
            <li data-id="" data-button="Close" data-options="prev_button: false" >
                <h3 > ' . __('Publish your Document', 'bpmcontext') . ' </h3 >
                <p > ' . __('Edit the text section or add a file to share then go to the Publish menu and publish the document. Once published you will have the option to promote it to the home page as well.', 'bpmcontext') . '</p >
            </li >
        </ul >

        <ul id="bpm_joyride_13_1" class="bpm-hide" >
            <li data-id="" data-button="Next" data-options="prev_button: false" >
                <h3 > ' . __('Editing your Document', 'bpmcontext') . ' </h3 >
                <p > ' . __('You can edit any section: add files, post comments and edit notes. Click the section header to get started. The Change Log is a detail of who made edits and what section changed.', 'bpmcontext') . '</p >
            </li >
            <li data-id="bpm_workflow_menu_target" data-button="Close" data-options="tip_location:left;prev_button: false" >
                <h3 > ' . __('Assigning a Document', 'bpmcontext') . ' </h3 >
                <p > ' . __('After you finish creating your document you can assign the document to any registered user. You have two options in the Workflow menu - Route To or Cancel and Delete.', 'bpmcontext') . ' </p >
                <p > ' . __('Documents that are in Draft status are only viewable by the user that created the document until they are assigned.', 'bpmcontext') . '</p >
                <p > ' . __('After a document is routed only an Admin can delete it.', 'bpmcontext') . '</p >
            </li >
        </ul >

        <ul id="bpm_spot_joyride_1" class="bpm-hide" >
            <li data-id="bpm_profile_drop_holder" data-button="Next" data-options="tip_location:left;prev_button: false" >
                <h3 > ' . __('You are logged in!', 'bpmcontext') . '</h3 >
                <p >' . __('This private workspace is secured with a password protected login. Front-end access to data in your account for you and your team.', 'bpmcontext') . '  </p >
                <p > ' . __('People who are not logged in see a login form along with a lost password link.', 'bpmcontext') . '</p >
            </li >
        </ul>

        ' . $this->bpm_get_help_widget() . '

    </div > ';

            $outstring = ob_get_contents();

            ob_end_clean();

            return $outstring;
        }

        function bpm_get_help_widget($display = false)
        {

            ob_start();

            if ($display) {
                echo '<div id="bpm_help_widget" class="bpm_help_widget">';
            } else {
                echo '<div id="bpm_help_widget" class="bpm_help_widget bpm-hide">';
            }

            echo '<div id="bpm_help_widget_header" class="bpm_help_widget_header">
                <div class="bpm-row full-width" >
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left bpm_help_widget_header_text_close"><a id="bpm_help_widget_back" onClick="bpmcontext.bpm_back_help_widget()" class="bpm_nodecoration fa fa-arrow-left bpm_white bpm-hide" style="color:white"></a>&nbsp;</div>
                    <div class="bpm-large-9 bpm-small-9 bpm-columns text-center bpm_help_widget_header_text" >' . __('Help Center', 'bpmcontext') . '</div >
                    <div class="bpm-large-2 bpm-small-2 bpm-columns text-right bpm_help_widget_header_text_close bpm_white" ><a onClick="bpmcontext.bpm_close_help_widget()" class="bpm_nodecoration fa fa-close bpm_white" style="color:white"></a></div >
                </div>
                <div class="bpm-row full-width" >
                    <div class="bpm-large-12 bpm-small-12 bpm-columns text-left" >
                    <div class="bpm_search">
                        <span class="fa fa-search bpm_clear_help_search"></span>
                        <span id="bpm_help_widget_clear_search" class="fa fa-close bpm-hide bpm_clear_help_search"></span>
                        <input placeholder="Search help articles" id="bpm_help_widget_search">
                    </div>
                    <div class="bpm-row full-width" >
                    <div class="bpm-large-11 bpm-columns text-left" ><div id="bpm_help_widget_post_title" class="bpm_help_widget_post_title bpm-hide">&nbsp;</div></div>
                    <div class="bpm-large-1 bpm-columns text-right" ><div id="bpm_help_widget_post_title_open" class="bpm_help_widget_post_title bpm-hide">&nbsp;</div></div>
                    </div>
                    </div >
                </div>
            </div>
            <div id="bpm_help_widget_content_area" class="bpm_help_widget_content_area">
                <div class="bpm-row full-width bpm_help_widget_content_area_articles_header" id="bpm_help_widget_content_area_articles_header">
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div>
                    <div class="bpm-large-11 bpm-small-11 bpm-columns text-left bpm_bold" id="bpm_help_widget_content_title">' . __('Popular Articles', 'bpmcontext') . '</div>
                </div>
                <div id="bpm_help_widget_content_area_articles" class="bpm_help_widget_content_area_articles">&nbsp;</div>
                <div id="bpm_help_widget_content_area_articles_post" class="bpm_help_widget_content_area_articles_post bpm-hide">&nbsp;</div>
                <div id="bpm_help_widget_content_area_feedback" class=" bpm-hide">
                    <div class="bpm-row full-width bpm_help_center_subject" >
                        <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div>
                        <div class="bpm-large-10 bpm-small-10 bpm-columns text-left " ><p>' . __('Drop us a note with your feedback', 'bpmcontext') . '</p></div>
                        <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div>
                    </div>
                    <div class="bpm-row full-width " >
                        <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div>
                        <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >' . __('Subject', 'bpmcontext') . '</div>
                        <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div>
                    </div>
                    <div class="bpm-row full-width " >
                        <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div>
                        <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" ><input id="bpm_help_center_feedback_subject" type="text" /></div>
                        <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div>
                    </div>
                    <div class="bpm-row full-width " >
                        <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div>
                        <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >' . __('Message', 'bpmcontext') . '</div>
                        <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div>
                    </div>
                     <div class="bpm-row full-width " >
                        <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div>
                        <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" ><textarea  placeholder="' . __('Enter feedback or suggestion information...', 'bpmcontext') . '" id="bpm_edit_help_center_feedback_text" rows="4" cols="120"></textarea></div>
                        <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div>
                    </div>
                    <div class="bpm-row full-width " >
                        <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div>
                        <div class="bpm-large-10 bpm-small-10 bpm-columns text-right" ><a onClick="bpmcontext.bpm_save_help_center_support_text();" class="button bpm-small logout-button bpm_nodecoration" >' . __('Send', 'bpmcontext') . '</a></div>
                        <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div>
                    </div>
                </div>
                <div id="bpm_help_widget_feecback_confirmation" class="bpm_help_widget_feecback_confirmation bpm-hide">
                    <div class="bpm-row full-width " >
                        <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div>
                        <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" >' . __('Thank you for your feedback', 'bpmcontext') . '</div>
                        <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div>
                    </div>
                    <div class="bpm-row full-width " >
                        <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div>
                        <div class="bpm-large-10 bpm-small-10 bpm-columns text-left" ><a class="bpm_nodecoration  bpm_links" onClick="bpmcontext.bpm_close_general_feedback()">' . __('Return to Articles', 'bpmcontext') . '</a></div>
                        <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" >&nbsp;</div>
                    </div>
                </div>
            </div>
            <div id="bpm_help_widget_browse_all_area" class="bpm_help_widget_browse_all_area">
                <div class="bpm-row full-width bpm_help_widget_margin_spacer" >
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" ><span class="fa fa-external-link"></span></div >
                    <div class="bpm-large-11 bpm-small-11 bpm-columns text-left" ><a class="bpm_nodecoration  bpm_links" href="http://support.bpmcontext.com" target="_blank">' . __('Help Center Website', 'bpmcontext') . '</a></div >
                </div>
            </div>
            <div id="bpm_help_widget_footer_area" class="bpm_help_widget_footer_area">
                <div class="bpm-row full-width bpm_help_widget_margin_spacer" id="bpm_help_widget_feedback_line">
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" ><span class="fa fa-pencil-square-o"></span></div >
                    <div class="bpm-large-11 bpm-small-11 bpm-columns text-left" ><a class="bpm_nodecoration bpm_links" onClick="bpmcontext.bpm_open_general_feedback()">' . __('Feedback', 'bpmcontext') . '</a></div >
                </div>
                <div class="bpm-row full-width bpm_help_widget_margin_spacer bpm-hide" id="bpm_help_widget_back_to_articles_line">
                    <div class="bpm-large-1 bpm-small-1 bpm-columns text-left" ><span class="fa fa-pencil-square-o"></span></div >
                    <div class="bpm-large-11 bpm-small-11 bpm-columns text-left" ><a class="bpm_nodecoration  bpm_links" onClick="bpmcontext.bpm_close_general_feedback()">' . __('Return to Articles', 'bpmcontext') . '</a></div >
                </div>
            </div>
        </div>';

            $outstring = ob_get_contents();

            ob_end_clean();

            return $outstring;
        }

        function bpm_get_htmladmin()
        {

            ob_start();
            $html_string = $this->bpm_get_intranet_plus_settings_content();
            echo '<div id="bpm_settings_content" >' . $html_string . '</div>';
            $outstring = ob_get_contents();

            ob_end_clean();

            return $outstring;
        }

        function bpm_create_admin_header($page_title, $hide_menu_notification = false, $hide_buttons = true)
        {

            $options = get_option('bpm_has_account');

            $user_info = get_userdata(get_current_user_id());
            $user_email = $user_info->user_email;

            if (!$options) {
                $status_button = '<div id="bpm_admin_submit_create_account_div" class="bpm-hide bpm_div_inline bpm_header_button bpm_right"><input onClick="bpmcontext.bpm_go_to_new_account(\'' . $user_email . '\', 1 );" id="bpm_admin_submit_create_account" class="button button-primary " value="Create New Account" name="submit" type="submit"></div>';
                $status_button .= '<div id="bpm_admin_submit_login_account_div" class="bpm-hide bpm_div_inline bpm_header_button bpm_right"><input id="bpm_admin_submit_login_account" class="button button-primary " value="Login" name="submit" type="submit" onClick="bpmcontext.bpm_admin_login();"></div>';
            } else {
                $status_button = '<div id="bpm_admin_submit_check_account_div" class="bpm_div_inline bpm_header_button bpm_right"><input id="bpm_admin_check_login_account" class="button button-primary" value="Checking Status..." name="submit" type="submit"></div>';
                $status_button .= '<div id="bpm_admin_submit_go_dashboard_div" class="bpm_div_inline bpm_header_button bpm_right bpm-hide"><input id="bpm_admin_submit_create_account" onClick="bpmcontext.bpm_go_to_dashboard();" class="button button-primary " value="Go To Dashboard" name="submit" type="submit"></div>';
                $status_button .= '<div id="bpm_admin_submit_login_account_div" class="bpm_div_inline bpm_header_button bpm_right bpm-hide"><input id="bpm_admin_submit_login_account" class="button button-primary " value="Login" name="submit" type="submit" onClick="bpmcontext.bpm_admin_login();"></div>';
                $status_button .= '<div id="bpm_admin_submit_logout_account_div" class="bpm_div_inline bpm_header_button bpm_right bpm-hide"><input id="bpm_admin_submit_logout_account" class="button button-primary " value="Logout" name="submit" type="submit" onClick="bpmcontext.bpm_logout_bpmcontext(1);"></div>';
                $status_button .= '<div id="bpm_admin_submit_create_account_div" class="bpm_div_inline bpm_header_button bpm_right bpm-hide"><input onClick="bpmcontext.bpm_go_to_new_account(\'' . $user_email . '\' , 1);" id="bpm_admin_submit_create_account" class="button button-primary " value="Create New Account" name="submit" type="submit"></div>';
            }

            if ($hide_buttons) {
                $html_line = '<div class="bpm_admin_header_row"><div class="bpm_div_inline" style="width:50%;"><h1 style="font-weight:bold;">' . $page_title . '</h1></div><div class="bpm_div_inline bpm_login_button_div bpm_right"> ' . $status_button . '</div></div>';
                $html_line .= '<div class="bpm_admin_header_row" id="bpm_admin_submit_lost_password_div" style="float:left;width:100%;"><a style="float:right" id="bpm_admin_submit_lost_password" onClick="bpmcontext.bpm_admin_lost_password()">Lost Password</a></div><br>';
                $html_line .= '<div id="bpm_admin_settings_login_form" class="bpm_admin_header_row bpm_admin_header_education_row_login bpm-hide">' . $this->bpm_create_admin_login_content() . '</div>';
                $html_line .= '<div id="bpm_admin_settings_reset_password_form" class="bpm_admin_header_row bpm_admin_header_education_row_login bpm-hide">' . $this->bpm_admin_reset_password() . '</div>';
                $html_line .= '<div id="bpm_admin_settings_create_account" class="bpm_admin_header_row bpm_admin_header_education_row_login bpm-hide">' . $this->bpm_admin_create_account() . '</div>';
            }else{
                $html_line = '<div class="bpm_admin_header_row"><div class="bpm_div_inline" style="width:100%;"><h1 style="font-weight:bold;">' . $page_title . '</h1></div></div>';
            }

            $html_line .= '<div id="bpm_context_third_party_cookie" class="bpm_admin_theme_header_row bpm_admin_notification bpm-hide">';
            $html_line .= '<h2>' . __('Browser Setting Change Required', 'bpmcontext') .'</h2><p>'.__("The BPMContext plugin relies on setting authentication cookies in a your browser on behalf of BPMContext. Such cookies are called 'third-party cookies'. These cookies help identify your browser and maintain your session once you have logged in. For a helpful article on how to add an exception and allow our cookies, which will then allow our plugin to work, go to our ", 'bpmcontext') .'<a target="_blank" style="text-decoration: underline !important;" href="https://support.bpmcontext.com/setup-my-account/web-browser-third-party-cookies/">Support Site</a></p>';
            $html_line .= '</div>';

            //notifications
            if (!$hide_menu_notification) {
                $bpm = new bpmcontext_sdk_manager();
                if (!$bpm->bpm_is_on_menu() && $_REQUEST['page'] == 'bpm_options') {
                    $html_line .= $this->bpm_notification_no_menu();
                } else {
                    if( ! $_REQUEST['page'] == 'bpm_extensions_options' ) {
                        $html_line .= $this->bpm_notification_with_menu();
                    }
                }
            }


            $html_line .= '<div id="bpm_settings_first_time_password" class="bpm_admin_header_row bpm_admin_header_education_row_action bpm-hide">' . $this->bpm_create_first_time_content_action(1) . '</div>';

            return $html_line;

        }

        function bpm_admin_create_account(){

            $user_info = get_userdata(get_current_user_id());
            $user_email = $user_info->user_email;

            $first_name = $user_info->user_firstname;
            if ( empty( $first_name ) ) {
                $first_name = $user_info->nickname;
            }else{
                $first_name = $first_name . ' ' . $user_info->user_lastname;
            }

            return '<div id="bpm_new_account_content_admin">

                    <div class="bpm-row" style="margin-bottom:2.5em">
                        <div class="bpm-large-12 bpm-small-12 bpm-columns bpm_lng_welcome_header text-center"><h3>' . __('Intranet and Digital Workspaces for Your WordPress Site', 'bpmcontext') . '</h3></div>
                    </div>

                    <div class="bpm-row">
                        <div class="bpm-large-12 bpm-small-12 bpm-columns">
                            <div data-alert class="alert-box alert radius bpm_acct_error_1 bpm-hide" id="bpm_new_acct_error_alert" style="border-left:solid 3px red;font-size:1.5em;font-weight:bold;margin-bottom:2em;">&nbsp;&nbsp;' . __('Your Name cannot match the Company Name.  Please re-enter.', 'bpmcontext') . '</div>
                        </div>
                        <div class="bpm-large-12 bpm-small-12 bpm-columns">
                            <div data-alert class="alert-box alert radius bpm_acct_error_2 bpm-hide" id="bpm_new_acct_setup_alert" style="border-left:solid 3px red;font-size:1.5em;font-weight:bold;margin-bottom:2em;">&nbsp;&nbsp;' . __('An error occurred setting up your account.  Please re-enter.', 'bpmcontext') . '</div>
                        </div>
                    </div>

                    <form autocomplete="off">
                        <div class="bpm-row">
                            <div class="bpm-large-6 bpm-small-6 bpm-columns text-right"><span class="bpm_lng_your_email">' . __('Your Name', 'bpmcontext') . ':</span>&nbsp;</div>
                            <div class="bpm-large-4 bpm-small-4 bpm-columns text-left"><input type="text" class="bpm_new_account_field" id="bpm_new_account_real_name"  placeholder="e.g: Bob Smith" value="'.$first_name.'"></div>
                            <div class="bpm-large-2 bpm-small-2 bpm-columns text-left">&nbsp;</div>
                        </div>
                        <div class="bpm-row">
                            <div class="bpm-large-6 bpm-small-6 bpm-columns text-right"><span class="bpm_lng_your_email">' . __('Your Email Address', 'bpmcontext') . ':</span>&nbsp;</div>
                            <div class="bpm-large-4 bpm-small-4 bpm-columns text-left"><input type="text" class="bpm_new_account_field" id="bpm_new_account_email"  placeholder="e.g: Bob.Smith@mycoolcompany.com" value="'.$user_email.'"></div>
                            <div class="bpm-large-2 bpm-small-2 bpm-columns text-left">&nbsp;</div>
                        </div>
                        <div class="bpm-row">
                            <div class="bpm-large-6 bpm-small-6 bpm-columns text-right"><span class="bpm_lng_your_email">' . __('Your Company Name', 'bpmcontext') . ':</span>&nbsp;</div>
                            <div class="bpm-large-4 bpm-small-4 bpm-columns text-left"><input type="text" class="bpm_new_account_field" id="bpm_new_account_company_name"  placeholder="e.g: My Really Cool Company"></div>
                            <div class="bpm-large-2 bpm-small-2 bpm-columns text-left">&nbsp;</div>
                        </div>
                        <div class="bpm-row">
                            <div class="bpm-large-6 bpm-small-6 bpm-columns text-right"><span class="bpm_lng_your_password">' . __('Password', 'bpmcontext') . ':</span>&nbsp;</div>
                            <div class="bpm-large-4 bpm-small-4 bpm-columns text-left"><div id="bpm_new_acct_password_html_admin"></div>&nbsp;</div>
                            <div class="bpm-large-2 bpm-small-2 bpm-columns text-left">&nbsp;</div>
                        </div>
                        <div class="bpm_div_inline bpm_header_button bpm_right"><input id="bpm_create_account_process_button_admin" class="button button-primary " value="Create Account" style=" text-align: center;"></div>

                        <div class="bpm-row">
                            <div class="bpm-large-12 bpm-small-12 bpm-columns "><br></div>
                        </div>


                        <div class="bpm-row">
                            <div class="bpm-large-12 bpm-small-12 bpm-columns">
                                <div data-alert class="alert-box success radius bpm_lng_creating_account bpm-hide" id="bpm_page_loading_new_acct_alert" >' . __('OK, we got this.  You will be taken to your account in 5 to 15 seconds', 'bpmcontext') . '.</div>
                            </div>
                         </div>
                        <div class="bpm-row">
                            <div class="bpm-large-12 bpm-small-12 bpm-columns text-right bpm_text_medium">' . __('By signing up for an account you agree to the BPMContext ', 'bpmcontext') . ' <a class="bpm_links bpm_lng_terms_of_service" href="https://bpmcontext.com/terms-of-service" target="_blank">' . __('Terms of Service', 'bpmcontext') . '</a> & <a class="bpm_links bpm_lng_privacy_policy" href="https://bpmcontext.com/privacy" target="_blank">' . __('Privacy Policy', 'bpmcontext') . '</a>&nbsp;&nbsp; </div>
                        </div>
                </form>
                <div id="bpm_progress_image" class="bpm-admin-overlay bpm-hide text-center" ><div class="bpm-admin-activity" ><span class="fa fa-spinner fa-spin" >&nbsp;</span></div></div>
            </div>';

        }

        function bpm_notification_with_menu()
        {

            $is_checked = 'checked';

            $bpm = new bpmcontext_sdk_manager();

            if ($bpm->bpm_is_on_menu()) {
                $is_checked = '';
            }

            $options = get_option('bpm_show_login_header');

            if ($options) {
                if ($options == 'checked') {
                    $is_checked = 'checked';
                } else {
                    $is_checked = '';
                }
            }

            $html_line = '<div class="bpm_admin_theme_header_row ">';
            $html_line .= '<p><strong>Login Header</strong> - Show a login header at the top of the page:&nbsp;&nbsp;<input type="checkbox" id="bpm_show_login_header" value="1" ' . $is_checked . '>&nbsp;&nbsp;<span id="bpm_show_login_header_message" class="bpm-hide" style="color:green;font-size:1.2em;padding-top:.25em;" >Saved</span></p>';
            $html_line .= '</div>';

            return $html_line;
        }

        function bpm_notification_no_menu()
        {

            $is_checked = 'checked';

            $bpm = new bpmcontext_sdk_manager();

            if ($bpm->bpm_is_on_menu()) {
                $is_checked = '';
            }

            $options = get_option('bpm_show_login_header');

            if ($options) {
                if ($options == 'checked') {
                    $is_checked = 'checked';
                } else {
                    $is_checked = '';
                }
            }

            $html_line = '<div class="bpm_admin_theme_header_row bpm_admin_notification">';
            $html_line .= '<h2>BPMContext requires a navigation menu option to access content</h2>';

            $html_line .= '<p>BPMContext is a private password protected area in your website. We created a page called Dashboard to provide user access from the frontend. Your theme did not have a navigation menu available so we added a header with a Login. <br><strong>To remove the header:</strong> unclick the checkbox or add the Dashboard page to a menu.  </p><br>';
            $html_line .= '<p>Show a login header at the top of the page:&nbsp;&nbsp;<input type="checkbox" id="bpm_show_login_header" value="1" ' . $is_checked . '>&nbsp;&nbsp;<span id="bpm_show_login_header_message" class="bpm-hide" style="color:green;font-size:1.2em;padding-top:.25em;" >Saved</span></p>';
            $html_line .= '</div>';


            return $html_line;
        }

        function bpm_get_contact_plus_content()
        {
            ob_start();
            echo bpm_create_admin_header(__('Contact Plus Plugin Extension', 'bpmcontext'));

            echo 'marketing content';

            $outstring = ob_get_contents();
            ob_end_clean();

            return $outstring;
        }

        function bpm_get_intranet_plus_settings_content()
        {

            ob_start();
            if ($_REQUEST['page'] == 'bpm_options') {
                echo $this->bpm_create_admin_header(__('About BPMContext Workspaces', 'bpmcontext'));
                echo $this->bpm_create_intranet_plus_settings_first_time();
            }else if ($_REQUEST['page'] == 'bpm_extensions_options') {
                echo $this->bpm_create_admin_header(__('Extensions', 'bpmcontext') , false );
            } else {
                echo $this->bpm_create_admin_header(__('Help Center', 'bpmcontext'));
                echo $this->bpm_create_intranet_plus_settings_return();
            }
            $outstring = ob_get_contents();
            ob_end_clean();

            return $outstring;
        }

        function bpm_create_admin_login_content($show_lost_password = false, $email = '')
        {
            $lost_password = '';
            if($show_lost_password){
                $lost_password = '<tr><td colspan="3" style="text-align:right;"><a style="font-size:.8em;" id="bpm_admin_submit_lost_password" onClick="bpmcontext.bpm_admin_lost_password()">Lost Password</a></td></tr>';
            }

            return '<h2 style="padding-top:.5em">Welcome back. Login to your account</h2><br>
                <table>
                    <tr>
                        <td><div> ' . __('Email Address', 'bpmcontext') . ': </div ></td>
                        <td><div><input style="padding: 0;width:20em;" id="bpm_email_3" type="text" placeholder="' . __('Email Address', 'bpmcontext') . '" name="BPM_Email"  tabindex="1" value="'.$email.'" />&nbsp;</div ></td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><div> ' . __('Password', 'bpmcontext') . ':</div ></td>
                        <td><div><input style="padding: 0;width:20em;"  id="bpm_password1_4" type="password" placeholder="' . __('Password', 'bpmcontext') . '" name="BPM_Password"  tabindex="2" value="" />&nbsp;&nbsp;</div ></td>
                        <td><div><input id="bpm_login_button_2" type="button" onClick="bpmcontext.bpm_submitLogIn(1);" value="' . __('Login', 'bpmcontext') . '" tabindex="3" class="button button-primary" ></div></td>
                    </tr>
                    '.$lost_password.'
                </table>
                <div class="bpm-row" >
                    <div class="bpm-small-9 bpm-large-9 bpm-columns text-right" >&nbsp;
                        <div data-alert class="alert-box alert radius text-left bpm-hide" id="bpm_error_message_4" ></div >
                    </div >
                </div >

     ';

        }

        function bpm_admin_reset_password()
        {

            return '<h2 style="padding-top:.5em"> ' . __('We will help you get your password by emailing a link to create a new one.', 'bpmcontext') . '</h2><br>
                    <table>
                        <tr>
                        <td style="font-size:1.2em;white-space: nowrap;">' . __('Email Address', 'bpmcontext') . ':&nbsp;&nbsp;</td>
                        <td style="font-size:1.2em"><input type="text" placeholder="' . __('Email Address', 'bpmcontext') . '"  name="bpm_email_forgot" id="bpm_email_forgot_4" size="50" tabindex="4" value="" />&nbsp;&nbsp;</td>
                        <td style="font-size:1.2em"><input id="bpm_lost_password_button_4" type="submit" onClick="bpmcontext.bpm_set_email();" value="' . __('Reset Password', 'bpmcontext') . '" class="button button-primary "></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="margin-top:1em"><div class="bpm-hide bpm_admin_notification_green" id="bpm_error_message_6"  >' . __('We have sent an email with reset instructions. If the email does not arrive soon, check your spam folder.', 'bpmcontext') . '</div></td>
                    </tr >
                    <tr>
                        <td colspan="3" style="margin-top:1em"><div class="bpm-hide bpm_admin_notification_yellow" id="bpm_error_message_5"  >' . __('The Email address entered does not seem to have an account on our site.  Please check for spelling errors and retry.', 'bpmcontext') . ' </div></td>
                    </tr>
                </table>';
        }

        function bpm_create_intranet_plus_settings_first_time()
        {

//            $html_line = '<div id="bpm_settings_first_time_password" class="bpm_admin_header_row bpm_admin_header_education_row_action bpm-hide">' . $this->bpm_create_first_time_content_action(1) . '</div>';
            $html_line = '<div id="bpm_settings_first_time_no_account" class="bpm_admin_theme_header_row  bpm-hide">' . $this->bpm_create_first_time_content_action(999) . '</div>';
            $html_line .= $this->bpm_create_first_time_content_one();
            $html_line .= '<div class="bpm_admin_theme_header_row bpm_welcome_content bpm-hide">' . $this->bpm_create_first_time_content_two() . '</div>';
            $html_line .= '<div class="bpm_admin_theme_header_row bpm_welcome_content bpm-hide">' . $this->bpm_create_first_time_content_three() . '</div>';
            $html_line .= '<div class="bpm_admin_theme_header_row bpm_welcome_content bpm-hide">' . $this->bpm_create_first_time_content_four() . '</div>';
            $html_line .= '<div id="bpm_dev_code_div" class="bpm_admin_theme_header_row bpm_welcome_content bpm-hide">' . $this->bpm_create_developer_code() . '</div>';


            return $html_line;
        }

        function bpm_create_first_time_content_action($action = 1)
        {

            $html_line = '';
            if ($action == 1) {

                global $bpm_plugin_name;

                $html_line = '
                <p class="bpm_setup_message_text">' . $bpm_plugin_name . __(' is a secure workspace in your WordPress site.  Set your password to complete your account setup.', 'bpmcontext') . '</p>
                <div>
                <form autocomplete="off">
                    <table >
                        <tr>
                            <td>' . __('Password', 'bpmcontext') . ':&nbsp;</td>
                            <td><div id="bpm_password_html"><input id="bpm_password_field" type="password" size="20" /></div></td>
                            <td><div id="bpm_password_error" class="error" style="display: none;">Passwords do not match</div></td>
                        </tr>
                    <tr>
                        <td>' . __('Re-enter Password', 'bpmcontext') . ':&nbsp;</div>
                        <td><div id="bpm_confirm_password_html"><input id="bpm_confirm_password_field" type="password" size="20" /></div></td>
                        <td><a onClick="bpmcontext.bpm_save_password(1);" class="button button-primary bpm_nodecoration" >Save Password</a></td>
                    </tr>
                </table>
                </div>
            </form>';

            }
            if ($action == 999) {
                $html_line = '<h1>' . __('Welcome back!', 'bpmcontext') . '</h1>';
                $html_line .= '<p>' . __('It looks like you already have an BPMContext account. You can login using the Login button above.', 'bpmcontext') . '</p>';
            }

            return $html_line;
        }

        function bpm_create_first_time_content_one()
        {

            $html_line = '<div class="bpm_header_education_top"><h1>How BPMContext works inside WordPress</h1></div>';

            $html_line .= '<div class="bpm_admin_theme_header_row bpm_welcome_content bpm-hide">';

            $html_line .= '<h1>Secure Access to Content on the Front End</h1>';
            $html_line .= '<p>When you installed this plugin we created a page called Dashboard that has a shortcode on it to create the login form and work area.  This is your home page where users can add pages, view notifications, add or edit content and files, as well as, keep up to date on new activity. Workspace templates allow you and your team to publish content from the front end.</p>';

            $html_line .= '</div>';

            return $html_line;

        }

        function bpm_create_first_time_content_two()
        {

            $html_line = '<h1>User Friendly Templates</h1>';
            $html_line .= '<p>Workspace templates are designed to make it easy to share information with your team. Each workspace is named after a specific topic or category such as department, announcement, IT help request. Templates include the capability for users to write, upload files, add comments, track data and changes. Admins can edit and create new workspaces. All organized automatically in a parent-child hierarchy.</p>';

            return $html_line;

        }

        function bpm_create_first_time_content_three()
        {

            $html_line = '<h1>Page and Sub Page Hierarchy</h1>';
            $html_line .= '<p>Users create and publish pages and sub-pages by selecting a workspace from the Add New menu. New pages are automatically added to page menu navigation and breadcrumb.</p>';

            return $html_line;

        }

        function bpm_create_first_time_content_four()
        {

            $html_line = '<h1>Administrator Tools</h1>';
            $html_line .= '<p><strong>Workflow</strong>&nbsp;- This service provides an easy to use process platform for teams and organizations built to work inside WordPress. This system includes workflow with sub-route, route back, review and approve, editing and commenting and features structured data fields for input, customized by the admin.</p>';
            $html_line .= '<br><p><strong>User Management</strong>&nbsp;- Users with admin rights can login from the frontend to invite users to login to the Dashboard area. </p>';
            return $html_line;

        }

        function bpm_create_developer_code()
        {
            $html_line = '<h1>Developer Code</h1>';
            $options = get_option('bpm_dev_code');
            if( ! $options ) {
                $submit_button = '<div id="bpm_admin_submit_dev_code" class="bpm_div_inline bpm_header_button"><input onClick="bpmcontext.bpm_submit_dev_code();" id="bpm_admin_submit_dev_code_button" class="button button-primary " value="Submit" name="submit" type="submit"></div>';

                $html_line .= '<p class="bpm_div_inline">Enter BPMContext partner code: <input type="text" id="bpm_dev_code">'.$submit_button.'</p>';
                $html_line .= '<p style="color:red" id="bpm_dev_code_error" class="bpm-hide">' . __('Developer code cannnot be blank.', 'bpmcontext'). '</p>';
                $html_line .= '<p style="color:red" id="bpm_dev_code_error_invalid" class="bpm-hide">' . __('Developer code is not valid.', 'bpmcontext'). '</p>';
            }else{
                $html_line .= '<p>Developer Code: '.$options.'</p>';
                delete_option('bpm_dev_code');
            }
            return $html_line;

        }

        function bpm_create_intranet_plus_settings_return()
        {

            $help_content = $this->bpm_get_help_widget_for_admin();

            //    $html_line = '<div class="bpm_admin_header_row"><div class="bpm_div_inline bpm_settings_left">'.$help_content.'</div><div class="bpm_div_inline bpm_settings_right bpm_div_top"> '.bpm_get_support_content().'</div></div>';
            $html_line = '<div id="bpm_admin_settings_login_form" class="bpm_admin_header_row bpm_admin_header_education_row_login bpm-hide"><br><br>' . $this->bpm_create_admin_login_content() . '</div>';
            $html_line .= '<div id="bpm_admin_settings_reset_password_form" class="bpm_admin_header_row bpm_admin_header_education_row_login bpm-hide"><br><br>' . $this->bpm_admin_reset_password() . '</div>';


            $html_line .= '<div class="bpm_admin_header_row"><div class="bpm_div_inline bpm_settings_help_center_left"><br>' . $help_content . '</div></div>';
            return $html_line;
        }

        function bpm_get_theme_settings_content()
        {

            $bpm = new bpmcontext_sdk_manager();

            $out_string = $this->bpm_create_admin_header(__('Theme Settings', 'bpmcontext'), false);

            if (isset($_REQUEST['bpm_site_options'])) $bpm->bpm_update_theme_css();
            unset($_REQUEST['bpm_site_options']);

            $options = get_option('bpm_site_options');
            $theme = wp_get_theme();

            $theme_name = str_replace(' ', '_', strtolower($theme->get('Name')));

            if (!isset($options['custom_css_' . $theme_name])) $options['custom_css_' . $theme_name] = '';


            $options = get_option('bpm_site_options');
            $theme = wp_get_theme();

            $theme_name = str_replace(' ', '_', strtolower($theme->get('Name')));

            if (!isset($options['custom_css_' . $theme_name])) $options['custom_css_' . $theme_name] = '';


            $page_array = $bpm->bpm_find_shortcode('BPMContext_Content');

            if ($page_array) {
                $the_page = $page_array[0];
                $edit_post = get_edit_post_link($the_page);
                $bpm_page = '<a href="' . get_permalink($the_page) . '" target="_blank">Dashboard</a>';
            } else {
                $edit_post = '"Missing page with BPMContext Shortcode"';
                $bpm_page = '"Missing page with BPMContext Shortcode"';
            }

            global $bpm_plugin_name;

            return $out_string . '<div class="bpm_admin_theme_header_row">
                                <h1 >' . __('Setup Instructions', 'bpmcontext') . '</h1>
                                <div id="panel1a" class="content active">
                                    <p id="bpm_has_full_width" style="display:none;">' . __('The '.$bpm_plugin_name.' plugin is a single page application in your site.  When you activated this plugin we looked to see if your theme has a full-width template and when we found it we applied that template to the BPMContext Dashboard page.', 'bpmcontext') . '</p>
                                    <p id="bpm_has_no_full_width" style="display:none;">' . __('The '.$bpm_plugin_name.' plugin is a single page application in your site.  When you activated this plugin we looked to see if your theme has a full-width template and we did <strong>not</strong> find one so you might need to do a little work to get our plugin displayed on your site.  Take a look at the Dashboard page and if you need to make any changes, this page will guide you through the process.', 'bpmcontext') . '</p>
                                    <p>' . __('You can view it in your '.$bpm_plugin_name.' ' . $bpm_page . '. ', 'bpmcontext') . '</p>
                                    <p class="bpm-hide" style="color:green" id="bpm_updated_display_wizard">Updated</p>
                                </div>
                            </div>

                            <div class="bpm_admin_theme_header_row">
                                <h1 >' . __('Plugin Width', 'bpmcontext') . '</h1>
                                <div id="panel4a" class="content active">
                                    <p>' . __('If your plug in does not appear wide enough, you can find the CSS class for the div containing it, or in some cases the parent div containing it, and add the code to make it wider to the Custom CSS box.  Typical classes for ths tend to be .content, .entry or .entry-content.  you might have to try a few to get it right.', 'bpmcontext') . '</p>
                                    <p>' . __('To find your class identifiers, simply right-click on the element that you want to change and use the Inspect Element option to find the class for the object.  Then enter the CSS in the Custom CSS box on this page.  For example:', 'bpmcontext') . '</p>

                                    <p>.sidebar{ display: none !important;  }<br>
                                        .banner-title{ display: none !important;  }<br>
                                        .content{ width: 100% !important;  }
                                        </pre>
                                    </p>
                                </div>
                            </div>

                            <div class="bpm_admin_theme_header_row">
                                    <h1>Side Bar</h1>
                                    <div id="panel2a" class="content">
                                        ' . __('If you have a side bar you can either remove it by editing the', 'bpmcontext') . ' <a href="' . $edit_post . '">' . __('Page in Wordpress', 'bpmcontext') . '</a> ' . __('to remove the sidebar or, you can look at the page HTML and find the class identifier for the div container for the sidebar.  Usually the class identifier is named something catchy like \'sidebar\'.  Once you find it, simply add CSS in the Custom CSS box to hide it.', 'bpmcontext') . '
                                    </div>
                            </div>

                            <div class="bpm_admin_theme_header_row">
                                    <h1>' . __('Page Title', 'bpmcontext') . '</h1>
                                    <div id="panel3a" class="content">
                                        ' . __('If you have a page title above the plug in you can find the CSS class and add the code to hide it to the Custom CSS box.  Once again, it is often something catchy like banner-title or page-title.', 'bpmcontext') . '
                                    </div>
                            </div>

                            <div class="bpm_admin_theme_header_row">
                                <h1>' . __('Themes and Custom CSS', 'bpmcontext') . '</h1>
                                <div id="bpm_admin_custom_css" class="content active">
                                    <p>' . __('Sometimes you might need to add a CSS code snippet to get the Intranet plugin to look good in your particular theme.  You can enter the CSS information here to be included only when the '.$bpm_plugin_name.' plugin is displayed.', 'bpmcontext') . '</p>
                                    <p>' . __('Note that this entry is THEME SPECIFIC so if you change themes you might need to add new Custom CSS to make the plugin play nice with your new theme. ', 'bpmcontext') . '</p>
                                    <br>
                                </div>

                                <form method="post" action="admin.php?page=bpm_theme_options">
                                    <div id="bpm_options_fields"></div>
                                    <textarea name="bpm_site_options[custom_css_' . $theme_name . '] id="bpm_admin_custom_css_text" style="height:20em;width:100%;border:solid 1px darkslategrey;">' . $options['custom_css_' . $theme_name] . '</textarea><br><br>
                                    <input id="bpm_admin_submit_css" style="float:right;" class="button button-primary" value="Update CSS" name="submit" type="submit">
                                </form>
                                <br><br>
                            </div>';
        }

        function bpm_get_support_content()
        {
            global $bpm_plugin_name;

            $out_string = $this->bpm_create_admin_header(__('Support', 'bpmcontext'), true);

            return $out_string . '<div class="bpm_admin_theme_header_row  bpm_support_row">
                                <h1>' . __('We love hearing from our users', 'bpmcontext') . '</h1>
                                <div id="bpm_admin_support" class="content active">
                                        ' . __('If you need help getting the '.$bpm_plugin_name.' plugin working in your site, have feedback, questions or comments please feel free to contact us and we will get back to you quickly.', 'bpmcontext') . '<br><br>
                                </div>
                                <div>Support Website: <a href="https://support.bpmcontext.com" target="_blank">' . __('BPMContext Support Site', 'bpmcontext') . '</a></div>
                                <div>Web: <a href="https://bpmcontext.com" target="_blank">' . __('BPMContext Web Site', 'bpmcontext') . '</a></div>
                                <div style="margin-bottom:2.5em;">' . __('Email', 'bpmcontext') . ': <a href="mailto:customer.service@bpmcontext.com" target="_top">Support Email</a></div>

                                <div>' . __('Drop us a note with your feedback', 'bpmcontext') . '<br><br></div>
                                <div style="margin-bottom:.5em;" >' . __('Subject', 'bpmcontext') . '</div>
                                <div><input style="margin-bottom:.5em;border:solid 1px darkslategrey;width:100%"  id="bpm_settings_feedback_subject" type="text" /></div>
                                <div style="margin-bottom:.5em;" >' . __('Message', 'bpmcontext') . '</div>
                                <div><textarea  style="border:solid 1px darkslategrey;width:100%" placeholder="' . __('Enter feedback or suggestion information...', 'bpmcontext') . '" id="bpm_edit_settings_feedback_text" rows="10" ></textarea></div>
                                <div><div class="bpm-hide" id="bpm_save_settings_support_text_error">' . __('Please enter feedback or suggestion.', 'bpmcontext') . '</div>&nbsp;</div>
                                <div><a style="float:right;" onClick="bpmcontext.bpm_save_settings_support_text();" class="button bpm-small logout-button bpm_nodecoration" >' . __('Send', 'bpmcontext') . '</a></div><br><br><br>
                                <div id="bpm_settings_feedback_confirmation" class="bpm-hide">
                                    <br><p>' . __('Thank you for your feedback.  We will get back to you shortly.', 'bpmcontext') . '</p>
                                </div>
                            <div id="bpm_settings_send_feedback_overlay" class="bpm-admin-overlay bpm-hide text-center"><div class="bpm-admin-activity"><span class="fa fa-spinner fa-spin">&nbsp;</span></div></div>
                        </div>';
        }

        function bpm_get_help_widget_for_admin()
        {

            ob_start();

            echo '<div id="bpm_help_widget" class="bpm_help_widget_settings_admin" >';

            echo '<div id="bpm_help_widget_header_admin">
                  <div class="bpm_1em_spacer">&nbsp;</div>

                  <div class="bpm_div_inline" style="width:15%"><a id="bpm_help_widget_back" onClick="bpmcontext.bpm_back_help_widget()" class="bpm_nodecoration bpm-hide bpm-admin-back-arrow"><span class=" fa fa-arrow-left"></span>&nbsp;' . __('Back', 'bpmcontext') . '</a>&nbsp;</div>
                  <div class="bpm_help_widget_header_text_settings bpm_div_inline" style="width:68%">' . __('BPMContext Help Center', 'bpmcontext') . '</div>
                  <div class="bpm_div_inline" style="width:15%">&nbsp;</div>

                    <div class="bpm-large-12 bpm-small-12 bpm-columns text-left" >
                    <div class="bpm_search_settings">
                        <span class="fa fa-search bpm_clear_help_search"></span>
                        <span id="bpm_help_widget_clear_search" class="fa fa-close bpm_clear_help_search"></span>
                        <input placeholder="Search help articles" id="bpm_help_widget_search">
                    </div>
            <div id="bpm_help_widget_post_title" class="bpm_help_widget_post_title_admin bpm-hide">&nbsp;</div>
                </div>
            </div>
            <div id="bpm_help_widget_content_area" class="bpm_help_widget_content_area_settings">
                <div class="bpm_help_widget_content_area_articles_header_settings_admin" id="bpm_help_widget_content_area_articles_header">
                    <div class="bpm_bold" id="bpm_help_widget_content_title">' . __('Popular Articles', 'bpmcontext') . '</div>
                </div>
                <div id="bpm_help_widget_content_area_articles" class="bpm_help_widget_content_area_articles_settings_admin">&nbsp;</div>
                <div id="bpm_help_widget_content_area_articles_post" class="bpm_help_widget_content_area_articles_post_settings_admin bpm-hide">&nbsp;</div>
            </div>
            <div id="bpm_help_widget_browse_all_area" class="bpm_help_widget_browse_all_area_settings_admin" style="position: absolute; bottom:0">
                <div class="bpm_inline_div" ><span class="fa fa-external-link"></span></div >
                <div class="bpm_inline_div" ><a class="bpm_nodecoration  bpm_links" href="http://support.bpmcontext.com" target="_blank">' . __('Help Center Website', 'bpmcontext') . '</a></div >
            </div>
        </div>';

            $outstring = ob_get_contents();

            ob_end_clean();

            return $outstring;
        }

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