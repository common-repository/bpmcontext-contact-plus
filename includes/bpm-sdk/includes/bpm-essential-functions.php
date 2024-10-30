<?php
	/**
	 * @package     Freemius
	 * @copyright   Copyright (c) 2015, Freemius, Inc.
	 * @license     http://opensource.org/licenses/gpl-2.0.php GNU Public License
	 * @since       1.1.5
	 */

	if ( ! function_exists( 'bpm_normalize_path' ) ) {
		if ( function_exists( 'wp_normalize_path' ) ) {
			/**
			 * Normalize a filesystem path.
			 *
			 * Replaces backslashes with forward slashes for Windows systems, and ensures
			 * no duplicate slashes exist.
			 *
			 * @param string $path Path to normalize.
			 *
			 * @return string Normalized path.
			 */
			function bpm_normalize_path( $path ) {
				return wp_normalize_path( $path );
			}
		} else {
			function bpm_normalize_path( $path ) {
				$path = str_replace( '\\', '/', $path );
				$path = preg_replace( '|/+|', '/', $path );

				return $path;
			}
		}
	}

	#region Core Redirect (copied from BuddyPress) -----------------------------------------

	if ( ! function_exists( 'bpm_redirect' ) ) {
		/**
		 * Redirects to another page, with a workaround for the IIS Set-Cookie bug.
		 *
		 * @link  http://support.microsoft.com/kb/q176113/
		 * @since 1.5.1
		 * @uses  apply_filters() Calls 'wp_redirect' hook on $location and $status.
		 *
		 * @param string $location The path to redirect to
		 * @param int    $status   Status code to use
		 *
		 * @return bool False if $location is not set
		 */
		function bpm_redirect( $location, $status = 302 ) {
			global $is_IIS;

			if ( headers_sent() ) {
				return false;
			}

			if ( ! $location ) // allows the wp_redirect filter to cancel a redirect
			{
				return false;
			}

			$location = bpm_sanitize_redirect( $location );

			if ( $is_IIS ) {
				header( "Refresh: 0;url=$location" );
			} else {
				if ( php_sapi_name() != 'cgi-fcgi' ) {
					status_header( $status );
				} // This causes problems on IIS and some FastCGI setups
				header( "Location: $location" );
			}

			return true;
		}

		if ( ! function_exists( 'bpm_sanitize_redirect' ) ) {
			/**
			 * Sanitizes a URL for use in a redirect.
			 *
			 * @since 2.3
			 *
			 * @param string $location
			 *
			 * @return string redirect-sanitized URL
			 */
			function bpm_sanitize_redirect( $location ) {
				$location = preg_replace( '|[^a-z0-9-~+_.?#=&;,/:%!]|i', '', $location );
				$location = bpm_kses_no_null( $location );

				// remove %0d and %0a from location
				$strip = array( '%0d', '%0a' );
				$found = true;
				while ( $found ) {
					$found = false;
					foreach ( (array) $strip as $val ) {
						while ( strpos( $location, $val ) !== false ) {
							$found    = true;
							$location = str_replace( $val, '', $location );
						}
					}
				}

				return $location;
			}
		}

		if ( ! function_exists( 'bpm_kses_no_null' ) ) {
			/**
			 * Removes any NULL characters in $string.
			 *
			 * @since 1.0.0
			 *
			 * @param string $string
			 *
			 * @return string
			 */
			function bpm_kses_no_null( $string ) {
				$string = preg_replace( '/\0+/', '', $string );
				$string = preg_replace( '/(\\\\0)+/', '', $string );

				return $string;
			}
		}
	}

	#endregion Core Redirect (copied from BuddyPress) -----------------------------------------

	/**
	 * Leverage backtrace to find caller plugin main file path.
	 *
	 * @author Vova Feldman (@svovaf)
	 * @since  1.0.6
	 *
	 * @return string
	 */
	function bpm_find_caller_plugin_file() {
		/**
		 * All the code below will be executed once on activation.
		 * If the user changes the main plugin's file name, the file_exists()
		 * will catch it.
		 */
		if ( ! function_exists( 'get_plugins' ) ) {
			require_once( ABSPATH . 'wp-admin/includes/plugin.php' );
		}

		$all_plugins       = get_plugins();
		$all_plugins_paths = array();

		// Get active plugin's main files real full names (might be symlinks).
		foreach ( $all_plugins as $relative_path => &$data ) {
			$all_plugins_paths[] = bpm_normalize_path( realpath( WP_PLUGIN_DIR . '/' . $relative_path ) );
		}

		$plugin_file = null;
		for ( $i = 1, $bt = debug_backtrace(), $len = count( $bt ); $i < $len; $i ++ ) {
			if ( in_array( bpm_normalize_path( $bt[ $i ]['file'] ), $all_plugins_paths ) ) {
				$plugin_file = $bt[ $i ]['file'];
				break;
			}
		}

		if ( is_null( $plugin_file ) ) {
			// Throw an error to the developer in case of some edge case dev environment.
			wp_die( __fs( 'failed-finding-main-path' ), __fs( 'error' ), array( 'back_link' => true ) );
		}

		return $plugin_file;
	}

/**
	 * Find the plugin main file path based on any give file inside the plugin's folder.
	 *
	 * @author Vova Feldman (@svovaf)
	 * @since  1.1.7.1
	 *
	 * @param string $file Absolute path to a file inside a plugin's folder.
	 *
	 * @return string
	 */
	function bpm_find_direct_caller_plugin_file( $file ) {
		/**
		 * All the code below will be executed once on activation.
		 * If the user changes the main plugin's file name, the file_exists()
		 * will catch it.
		 */
		if ( ! function_exists( 'get_plugins' ) ) {
			require_once( ABSPATH . 'wp-admin/includes/plugin.php' );
		}

		$all_plugins = get_plugins();

		$file_real_path = bpm_normalize_path( realpath( $file ) );

		// Get active plugin's main files real full names (might be symlinks).
		foreach ( $all_plugins as $relative_path => &$data ) {
			if ( 0 === strpos( $file_real_path, bpm_normalize_path( dirname( realpath( WP_PLUGIN_DIR . '/' . $relative_path ) ) ) ) ) {
				return $relative_path;
			}
		}

		return null;
	}

	/**
	 * Update SDK newest version reference.
	 *
	 * @author Vova Feldman (@svovaf)
	 * @since  1.1.6
	 *
	 * @param string      $sdk_relative_path
	 * @param string|bool $plugin_file
	 *
	 * @global            $bpm_active_plugins
	 */
	function bpm_update_sdk_newest_version( $sdk_relative_path, $plugin_file = false ) {
		global $bpm_active_plugins;

		if ( ! is_string( $plugin_file ) ) {
			$plugin_file = plugin_basename( bpm_find_caller_plugin_file() );
		}

		$bpm_active_plugins->newest = (object) array(
			'plugin_path'   => $plugin_file,
			'sdk_path'      => $sdk_relative_path,
			'version'       => $bpm_active_plugins->plugins[ $sdk_relative_path ]->version,
			'in_activation' => ! is_plugin_active( $plugin_file ),
			'timestamp'     => time(),
		);

		// Update DB with latest SDK version and path.
		update_option( 'bpm_active_plugins', $bpm_active_plugins );
	}

	/**
	 * Reorder the plugins load order so the plugin with the newest Freemius SDK is loaded first.
	 *
	 * @author Vova Feldman (@svovaf)
	 * @since  1.1.6
	 *
	 * @return bool Was plugin order changed. Return false if plugin was loaded first anyways.
	 *
	 * @global $bpm_active_plugins
	 */
	function bpm_newest_sdk_plugin_first() {
		global $bpm_active_plugins;

		/**
		 * @todo Multi-site network activated plugin are always loaded prior to site plugins so if there's a a plugin activated in the network mode that has an older version of the SDK of another plugin which is site activated that has new SDK version, the fs-essential-functions.php will be loaded from the older SDK. Same thing about MU plugins (loaded even before network activated plugins).
		 *
		 * @link https://github.com/Freemius/wordpress-sdk/issues/26
		 */
//		$active_sitewide_plugins = get_site_option( 'active_sitewide_plugins' );

		$active_plugins        = get_option( 'active_plugins' );
		$newest_sdk_plugin_key = array_search( $bpm_active_plugins->newest->plugin_path, $active_plugins );
		if ( 0 == $newest_sdk_plugin_key ) {
			// if it's 0 it's the first plugin already, no need to continue
			return false;
		}

		array_splice( $active_plugins, $newest_sdk_plugin_key, 1 );
		array_unshift( $active_plugins, $bpm_active_plugins->newest->plugin_path );
		update_option( 'active_plugins', $active_plugins );

		return true;
	}

	/**
	 * Go over all Freemius SDKs in the system and find and "remember"
	 * the newest SDK which is associated with an active plugin.
	 *
	 * @author Vova Feldman (@svovaf)
	 * @since  1.1.6
	 *
	 * @global $bpm_active_plugins
	 */
	function bpm_fallback_to_newest_active_sdk() {
		global $bpm_active_plugins;

		$newest_sdk_data = null;
		$newest_sdk_path = null;

		foreach ( $bpm_active_plugins->plugins as $sdk_relative_path => $data ) {
			if ( is_null( $newest_sdk_data ) || version_compare( $data->version, $newest_sdk_data->version, '>' )
			) {
				// If plugin inactive or SDK starter file doesn't exist, remove SDK reference.
				if ( ! is_plugin_active( $data->plugin_path ) ||
				     ! file_exists( bpm_normalize_path( WP_PLUGIN_DIR . '/' . $sdk_relative_path . '/start.php' ) )
				) {
					unset( $bpm_active_plugins->plugins[ $sdk_relative_path ] );

					// No need to store the data since it will be stored in bpm_update_sdk_newest_version()
					// or explicitly with update_option().
				} else {
					$newest_sdk_data = $data;
					$newest_sdk_path = $sdk_relative_path;
				}
			}
		}

		if ( is_null( $newest_sdk_data ) ) {
			// Couldn't find any SDK reference.
			$bpm_active_plugins = new stdClass();
			update_option( 'bpm_active_plugins', $bpm_active_plugins );
		} else {
			bpm_update_sdk_newest_version( $newest_sdk_path, $newest_sdk_data->plugin_path );
		}
	}

	#region Actions / Filters -----------------------------------------

	/**
	 * Apply filter for specific plugin.
	 *
	 * @author Vova Feldman (@svovaf)
	 * @since  1.0.9
	 *
	 * @param string $slug  Plugin slug
	 * @param string $tag   The name of the filter hook.
	 * @param mixed  $value The value on which the filters hooked to `$tag` are applied on.
	 *
	 * @return mixed The filtered value after all hooked functions are applied to it.
	 *
	 * @uses   apply_filters()
	 */
	function bpm_apply_filter( $slug, $tag, $value ) {
		$args = func_get_args();

		return call_user_func_array( 'apply_filters', array_merge(
				array( 'bpm_' . $tag . '_' . $slug ),
				array_slice( $args, 2 ) )
		);
	}

	#endregion Actions / Filters -----------------------------------------