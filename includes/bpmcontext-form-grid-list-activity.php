<?php
if ( ! class_exists( 'WP_List_Table' ) )
	require_once( ABSPATH . 'wp-admin/includes/class-wp-list-table.php' );

class bpmcontext_contact_form_grid_activity extends WP_List_Table {

	public $current_page;

    function __construct() {
		parent::__construct( array(
			'singular' => 'post',
			'plural' => 'posts',
			'ajax' => true,
			'screen' => 'interval_list') );
	}

    function prepare_items() {

		$per_page = 5;
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
			if ( 'left_column' == $_REQUEST['left_column'] )
				$args['orderby'] = 'left_column';
		}

		if ( ! empty( $_REQUEST['order'] ) ) {
			if ( 'asc' == strtolower( $_REQUEST['order'] ) )
				$args['order'] = 'ASC';
			elseif ( 'desc' == strtolower( $_REQUEST['order'] ) )
				$args['order'] = 'DESC';
		}

        $per_page     = $this->get_items_per_page( 'analytics_per_page', $per_page );
        $current_page = $this->get_pagenum();

		$total_items = $this->get_grid_data_count();
		$total_pages = ceil( $total_items / $per_page );
/**
		$this->set_pagination_args( array(
			'total_items' => $total_items,
			'total_pages' => $total_pages,
			'per_page' => $per_page ) );
**/
        $this->items = $this->get_grid_data( $total_items , 1);

	}

	function get_columns() {
		if(!isset($_REQUEST['activity_table']) || $_REQUEST['activity_table'] == 'open_status') {
			$this->current_page = 'open_status';
			$columns = array(
					'account_column' => __( 'Account', 'bpmcontext-form' ),
					'left_column' => __( 'Assigned To', 'bpmcontext-form' ),
					'right_column' => __( 'Open Items', 'bpmcontext-form' )
			);
		}else if($_REQUEST['activity_table'] == 'locations') {
			$this->current_page = $_REQUEST['activity_table'];
			$columns = array(
					'left_column' => __( 'Location', 'bpmcontext-form' ),
					'right_column' => __( 'Count', 'bpmcontext-form' )
			);
		}else{
			//forms recieved
			$this->current_page = $_REQUEST['activity_table'];
			$columns = array(
					'left_column' => __( 'Period', 'bpmcontext-form' ),
					'right_column' => __( 'Received', 'bpmcontext-form' )
			);
		}

        return $columns;

	}

	function get_sortable_columns() {
		$columns = array(
			'left_column' => array( 'left_column', true ) );

		return $columns;
	}

	function get_bulk_actions() {
		$actions = array();

		return $actions;
	}

	function column_default( $item, $column_name ) {
		switch( $column_name ) {
			case 'account_column':
            case 'left_column':
            case 'right_column':
              return $item[ $column_name ];
            default:
              return print_r( $item, true ) ; //Show the whole array for troubleshooting purposes
            }
	}

    function get_grid_data( $per_page , $current_page){

        //create items list

		$options = get_option('bpm_contact_form_analytics_'.$this->current_page);

		if( ! $options) return array();

        $start = ($current_page * $per_page) - $per_page;
        $end = $start + $per_page;
        $current_item = 0;

        $items = array();

		foreach ($options as $temp_array) {

			if ($this->current_page == 'open_status') {
				if ($current_item >= $start && $current_item < $end) {
					$items[] = array(
							'account_column' => $temp_array['account_column'],
							'left_column' => $temp_array['left_column'],
							'right_column' => $temp_array['right_column']
					);
				}
			} else {
				$items[] = array(
						'left_column' => $temp_array['left_column'],
						'right_column' => $temp_array['right_column']
				);
			}
			$current_item++;
		}

        return $items;
    }

	function get_grid_data_count(){

		$options = get_option('bpm_contact_form_analytics_'.$this->current_page);
		return sizeof($options);

	}

}