<?php
/**
 * Hardware Tools Store functions and definitions
 *
 * @package Hardware Tools Store
 */

if ( ! function_exists( 'hardware_tools_store_setup' ) ) :
function hardware_tools_store_setup() {
	
	if ( ! isset( $content_width ) )
		$content_width = 640; /* pixels */

    load_theme_textdomain( 'hardware-tools-store', get_template_directory() . '/languages' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'custom-logo', array(
	'height'      => 240,
	'width'       => 240,
	'flex-height' => true,
	) );

	add_theme_support( 'menus' );
	add_theme_support( 'wp-block-styles' );
	
	// Add support for Block Styles.
	add_theme_support( 'wp-block-styles' );

	// Add support for full and wide align images.
	add_theme_support( 'align-wide' );
			
	// Add support for responsive embedded content.
	add_theme_support( 'responsive-embeds' );

    add_theme_support('woocommerce');

	// Enqueue editor styles.
	add_editor_style( array( 'assets/css/editor-style.css' ) );

	if (! defined('HARDWARE_TOOLS_STORE_VERSION')) {
		// Replace the version number of the theme on each release.
		define('HARDWARE_TOOLS_STORE_VERSION', wp_get_theme()->get('Version'));
	}

    require get_parent_theme_file_path( '/inc/dashboard/dashboard.php' );

	require get_parent_theme_file_path( '/inc/admin/theme-upsell.php' );

    require get_parent_theme_file_path( '/inc/customizer/customizer.php' );
	
}
endif; // hardware_tools_store_setup
add_action( 'after_setup_theme', 'hardware_tools_store_setup' );

function hardware_tools_store_scripts() {
	wp_enqueue_style( 'hardware-tools-store-basic-style', get_stylesheet_uri() );

    $hardware_tools_store_enable_animations = get_option( 'hardware_tools_store_enable_animations', true );

    if ( $hardware_tools_store_enable_animations ) {
        //animation
	wp_enqueue_script( 'wow-js', get_theme_file_uri( '/assets/js/wow.js' ), array( 'jquery' ), true );

	wp_enqueue_style( 'animate-css', get_template_directory_uri().'/assets/css/animate.css' );
    }

	//font-awesome
	wp_enqueue_style( 'fontawesome', get_template_directory_uri() . '/assets/font-awesome/css/all.css', array(), '5.15.3' );

	//homepage slider
	wp_enqueue_style('hardware-tools-store-swiper-bundle-css', get_template_directory_uri() . '/assets/css/swiper-bundle.css', array(), HARDWARE_TOOLS_STORE_VERSION);

	wp_enqueue_script('hardware-tools-store-swiper-bundle-js', get_template_directory_uri() . '/assets/js/swiper-bundle.js', array('jquery'), HARDWARE_TOOLS_STORE_VERSION, true);

	// script.js
	wp_enqueue_script('hardware-tools-store-main-script', get_theme_file_uri( '/assets/js/script.js' ), array( 'jquery' ), HARDWARE_TOOLS_STORE_VERSION, true);

	// storefront fix
	wp_enqueue_style('hardware-tools-store-storefront', get_theme_file_uri( '/assets/css/storefront.css' ), array(), HARDWARE_TOOLS_STORE_VERSION);

    wp_style_add_data( 'hardware-tools-store-basic-style', 'rtl', 'replace' );
	
}
add_action( 'wp_enqueue_scripts', 'hardware_tools_store_scripts' );

function hardware_tools_store_enqueue_admin_script($hook) {
    // Enqueue admin JS for notices
    wp_enqueue_script('hardware-tools-store-welcome-notice', get_template_directory_uri() . '/inc/dashboard/hardware-tools-store-welcome-notice.js', array('jquery'), '', true);
    
    // Localize script to pass data to JavaScript
    wp_localize_script('hardware-tools-store-welcome-notice', 'hardware_tools_store_localize', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('hardware_tools_store_welcome_nonce'),
        'dismiss_nonce' => wp_create_nonce('hardware_tools_store_welcome_nonce'), // Nonce for dismissal
        'redirect_url' => admin_url('themes.php?page=hardware-tools-store-guide-page')
    ));
}
add_action('admin_enqueue_scripts', 'hardware_tools_store_enqueue_admin_script');

function hardware_tools_store_admin_theme_style() {
   wp_enqueue_style('hardware-tools-store-custom-admin-style', esc_url(get_template_directory_uri()) . '/inc/dashboard/dashboard.css');
   wp_enqueue_style('hardware-tools-store-admin-upsell-style', esc_url(get_template_directory_uri()) . '/assets/css/admin-style.css');
}
add_action('admin_enqueue_scripts', 'hardware_tools_store_admin_theme_style');

// Block Patterns.
require get_template_directory() . '/block-patterns.php';
require get_template_directory() .'/inc/TGM/tgm.php';
require get_template_directory() . '/custom-setting.php';
require_once get_template_directory() . '/inc/dashboard/welcome-notice.php';

/**
 * Redirect to Pro upsell page after theme activation
 */
add_action('after_switch_theme', 'hardware_tools_store_redirect_after_activation');
function hardware_tools_store_redirect_after_activation() {
    if ( ! get_option( 'hardware_tools_store_activation_redirect', false ) ) {
        update_option( 'hardware_tools_store_activation_redirect', true );
        wp_safe_redirect( admin_url( 'themes.php?page=hardware-tools-store-pro' ) );
        exit;
    }
}


//woocommerce plugin skip 
add_filter( 'woocommerce_prevent_automatic_wizard_redirect', '__return_true' );

add_action( 'admin_bar_menu', 'hardware_tools_store_add_upgrade_button', 100 );

function hardware_tools_store_add_upgrade_button( $hardware_tools_store_wp_admin_bar ) {

    $hardware_tools_store_theme_name = wp_get_theme()->get( 'Name' );

    $hardware_tools_store_args = array(
        'id'    => 'hardware_tools_store_upgrade',
        'title' => '<span style="color:#fff;font-weight:600;">
            🚀 Upgrade to ' . esc_html( $hardware_tools_store_theme_name ) . ' Pro - 20% OFF 
            <span style="background:#ff5722;color:#fff;padding:2px 8px;border-radius:3px;margin-left:6px;">
                Buy Now
            </span>
        </span>',
        'href'  => esc_url( HARDWARE_TOOLS_STORE_BUY_PRO ),
        'meta'  => array(
            'class'  => 'hardware-tools-store-upgrade-btn',
            'title'  => 'Upgrade to Pro',
            'target' => '_blank'
        )
    );

    $hardware_tools_store_wp_admin_bar->add_node( $hardware_tools_store_args );
}