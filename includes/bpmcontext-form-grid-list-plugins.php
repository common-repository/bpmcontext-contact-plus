<?php
if ( ! class_exists( 'WP_List_Table' ) )
	require_once( ABSPATH . 'wp-admin/includes/class-wp-list-table.php' );

class bpmcontext_contact_form_grid_plugins extends WP_List_Table {

    public static function define_columns() {
		$columns = array(
			'plugin' => __( 'Plugin', 'bpmcontext-form' ),
			'status' => __( 'Status', 'bpmcontext-form' )
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

        $this->items = $this->get_plugins( $per_page , $current_page);

	}

	function get_columns() {

        $columns = array(
			'plugin' => __( '<strong>Plugin</strong>', 'bpmcontext-form' ),
			'status' => __( '<strong>Status</strong>', 'bpmcontext-form' )
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
            case 'plugin':
            case 'status':
              return $item[ $column_name ];
            default:
              return print_r( $item, true ) ; //Show the whole array for troubleshooting purposes
            }
	}

    function get_plugins( $per_page , $current_page){

        //create items list
        global $allowed_plugins_array;

        $start = ($current_page * $per_page) - $per_page;
        $end = $start + $per_page;
        $current_item = 0;

        $items = array();

        if($allowed_plugins_array){

			foreach ( $allowed_plugins_array as $temp_array) {
                $this_slug = $temp_array['plugin_slug'] . '/' . $temp_array['plugin_file'];

                if (is_plugin_active($this_slug)) {
					$is_installed = 'Installed';
                }else{
                    $is_installed = '<a href="https://wordpress.org/plugins/'.$temp_array['plugin_slug'].'" target="_blank">Plugin Information on WordPress.org</a>';
                }
                if($current_item >= $start && $current_item < $end) $items[] = array('id' => $temp_array['slug'] , 'plugin' => $temp_array['name'] , 'status' => $is_installed);
                $current_item++;
            }
        }

        return $items;
    }

}