<?php
if ( ! class_exists( 'WP_List_Table' ) )
	require_once( ABSPATH . 'wp-admin/includes/class-wp-list-table.php' );

class bpmcontext_contact_form_grid extends WP_List_Table {

	function __construct() {
		parent::__construct( array(
			'singular' => 'post',
			'plural' => 'posts',
			'ajax' => false ) );
	}

	function no_items(){
		echo 'Activate a form, using a compatible plugin, and add it to a page to view the form workflow settings.';
	}

    function prepare_items() {

		$per_page = 50;
        $columns = $this->get_columns();
        $hidden = array();
        $sortable = array();

        $this->_column_headers = array($columns, $hidden, $sortable);

		$args = array(
			'posts_per_page' => $per_page,
			'orderby' => 'plugin',
			'order' => 'ASC',
			'offset' => ( $this->get_pagenum() - 1 ) * $per_page );

		if ( ! empty( $_REQUEST['s'] ) )
			$args['s'] = $_REQUEST['s'];

		if ( ! empty( $_REQUEST['orderby'] ) ) {
			if ( 'plugin' == $_REQUEST['orderby'] )
				$args['orderby'] = 'title';
		}

		if ( ! empty( $_REQUEST['order'] ) ) {
			if ( 'asc' == strtolower( $_REQUEST['order'] ) )
				$args['order'] = 'ASC';
			elseif ( 'desc' == strtolower( $_REQUEST['order'] ) )
				$args['order'] = 'DESC';
		}

        $form_manager = new bpmcontext_form_manager();
		$total_items = sizeof($form_manager->get_all_forms());
		$this->items = $this->get_forms( $total_items , 1);
	}

	function get_columns() {
        $columns = array(
			'enabled' => '<strong>'.__( 'Active', 'bpmcontext-form' ).'</strong>',
			'page_name' => '<strong>'.__( 'Form Landing Page', 'bpmcontext-form' ).'</strong>',
			'account' => '<strong>'.__( 'Account', 'bpmcontext-form' ).'</strong>',
			'parent_page' => '<strong>'.__( 'Parent Page', 'bpmcontext-form' ).'</strong>',
			'owner' => '<strong>'.__( 'Owner', 'bpmcontext-form' ).'</strong>',
	        'assigned_to' => '<strong>'.__( 'Assigned To', 'bpmcontext-form' ).'</strong>'
        );
        return $columns;
	}

	function get_sortable_columns() {
		$columns = array(
			'plugin' => array( 'plugin', true ) );

		return $columns;
	}

	function get_bulk_actions() {
		$actions = array();

		return $actions;
	}

	function column_default( $item, $column_name ) {
		switch( $column_name ) {
			case 'enabled':
				$is_enabled = 'checked';
		        if($item['enabled'] == 0) $is_enabled = '';
        		return '<input class="bpm_contact_enabled_list_id" type="checkbox" name="enabled" value="1" '.$is_enabled.'>';
				break;
            case 'plugin':
			case 'account':
            case 'page_name':
			case 'parent_page':
			case 'owner':
		    case 'assigned_to':
			return $item[ $column_name ];
            default:
              return print_r( $item, true ) ; //Show the whole array for troubleshooting purposes
            }
	}

	function get_forms( $per_page , $current_page){

        //create items list
        $start = ($current_page * $per_page) - $per_page;
        $end = $start + $per_page;
        $current_item = 0;
        $options = get_option('bpm_contact_us_options_'.bpm_contact_form_get_current_site());
        $form_manager = new bpmcontext_form_manager();
		$form_items = array();

        $items = $form_manager->get_all_forms();

		for($x=0;$x<sizeof($items);$x++){
			if($current_item >= $start && $current_item < $end){
				$enabled = 0;
                $account = '';
                $parent_page = '';
                $owner = '';
				$assigned_to = '';
				$account_id = '';
				$mail_to = '';

                //get connected form information
                if($options){
                    foreach($options as $option_item){
                        if($option_item['source'] == $items[$x]['source'] && $option_item['form'] == $items[$x]['form_id']){
							$enabled = $option_item['enabled'];
                            $account = $option_item['account'];
							$account_id = $option_item['account_id'];
                            $parent_page = $option_item['parent_page'];
                            $owner = $option_item['owner'];
	                        $assigned_to= $option_item['doer'];
							$mail_to = $option_item['mail_to_api_key'];
                        }
                    }
                }

                $page_name_url = '<a title="Edit Settings" href="admin.php?page=bpm_form_options&action=bpm_form_options_edit&account='.$account_id.'&form_id='.$items[$x]['form_id'].'&mail_key='.$mail_to.'">'.  $items[$x]['page_name'] . '</a>';

                $form_items[] = array( 'enabled' => $enabled ,'plugin' => $items[$x]['plugin'] , 'page_name' => $page_name_url , 'account' => $account, 'parent_page' => $parent_page , 'owner' => $owner , 'assigned_to' => $assigned_to);
            }
			$current_item++;
        }

        return $form_items;
    }


}