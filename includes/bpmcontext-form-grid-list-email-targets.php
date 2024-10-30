<?php
if ( ! class_exists( 'WP_List_Table' ) )
	require_once( ABSPATH . 'wp-admin/includes/class-wp-list-table.php' );

class bpmcontext_contact_form_email_targets extends WP_List_Table {

    public static function define_columns() {
		$columns = array(
			'workspace_parent' => __( 'Parent Workspace', 'bpmcontext-form' ),
			'email_address' => __( 'Email Address', 'bpmcontext-form' )
        );

		return $columns;
	}

	function __construct() {
		parent::__construct( array(
			'singular' => 'post',
			'plural' => 'posts',
			'ajax' => false ) );
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
			if ( 'plugin' == $_REQUEST['plugin'] )
				$args['orderby'] = 'plugin';
		}

		if ( ! empty( $_REQUEST['order'] ) ) {
			if ( 'asc' == strtolower( $_REQUEST['order'] ) )
				$args['order'] = 'ASC';
			elseif ( 'desc' == strtolower( $_REQUEST['order'] ) )
				$args['order'] = 'DESC';
		}

        $per_page     = $this->get_items_per_page( 'plugins_per_page', $per_page );
        $current_page = $this->get_pagenum();

        global $allowed_plugins_array;

		$total_items = sizeof($allowed_plugins_array);
		$total_pages = ceil( $total_items / $per_page );

		$this->set_pagination_args( array(
			'total_items' => $total_items,
			'total_pages' => $total_pages,
			'per_page' => $per_page ) );

        $this->items = $this->get_emails( $per_page , $current_page);

	}

	function get_columns() {

        $columns = array(
			'workspace_parent' => __( '<strong>Workspace Parent</strong>', 'bpmcontext-form' ),
			'email_address' => __( '<strong>Email Address</strong>', 'bpmcontext-form' )
        );
        return $columns;

	}

	function get_sortable_columns() {
		$columns = array(
			'workspace_parent' => array( 'workspace_parent', true ) );

		return $columns;
	}

	function get_bulk_actions() {
		$actions = array();

		return $actions;
	}

	function column_default( $item, $column_name ) {
		switch( $column_name ) {
            case 'email_address':
			case 'workspace_parent':
              return $item[ $column_name ];
            default:
              return print_r( $item, true ) ; //Show the whole array for troubleshooting purposes
            }
	}

    function get_emails( $per_page , $current_page){

        //create items list
        $start = ($current_page * $per_page) - $per_page;
        $end = $start + $per_page;
        $current_item = 0;

        $items = array();

		$email_for_workspaces = get_option('bpm_email_for_workspaces');

        if($email_for_workspaces){

			foreach ( $email_for_workspaces as $temp_array) {
                if($current_item >= $start && $current_item < $end) $items[] = array('id' => $temp_array['workspace_parent'] , 'email_address' => $temp_array['email_address'] );
                $current_item++;
            }
        }

        return $items;
    }

}