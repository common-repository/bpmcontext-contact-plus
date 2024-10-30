/**
 * Created by BPMContext on 4/25/16.
 */

jQuery(document).ready(function() {
//add a header to the page if not on a menu
    if (bpm_menu_params) {
        if (bpm_menu_params.on_navigation == 0) {
            jQuery('body').prepend('<div class="bpm_menu_notice "><div class="bpm_div_inline "> &nbsp;</div><div class="bpm_div_inline" style="float:right;margin-right:2em;"><a href="' + bpm_menu_params.login_url + '" class="bpm_login_header_button">Login</a></div> </div>');
        }
    }
});