<?php
/**
 * Created by PhpStorm.
 * User: fred
 * Date: 5/2/16
 * Time: 1:09 PM
 */

define('BPM_FORM_DEBUG', false);

global $bpm_server_info;

if(BPM_FORM_DEBUG) {
    //force reload if in debug mode so no shift refresh
    $bpm_server_info['bpm_file_version'] = uniqid();
}else{
    $bpm_server_info['bpm_file_version'] = '3.1.9';
}
