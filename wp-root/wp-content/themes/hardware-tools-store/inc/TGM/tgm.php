<?php
	
load_template( get_template_directory() . '/inc/TGM/class-tgm-plugin-activation.php' );

/**
 * Recommended plugins.
 */
function hardware_tools_store_register_recommended_plugins() {
	$plugins = array(
		array(
			'name'             => __( 'WooCommerce', 'hardware-tools-store' ),
			'slug'             => 'woocommerce',
			'required'         => false,
			'force_activation' => false,
		),
		array(
            'name'             => __( 'GTranslate', 'hardware-tools-store' ),
            'slug'             => 'gtranslate',
            'required'         => false,
            'force_activation' => false,
        ),
        array(
			'name'             => __( 'woocommerce-currency-switcher', 'hardware-tools-store' ),
			'slug'             => 'woocommerce-currency-switcher',
			'required'         => false,
			'force_activation' => false,
		),
		array(
			'name'             => __( 'MC Woocommerce Wishlist', 'hardware-tools-store' ),
			'slug'             => 'smart-wishlist-for-more-convert',
			'source'           => '',
			'required'         => false,
			'force_activation' => false,
		),
		array(
			'name'             => __( 'Ovation Elements', 'hardware-tools-store' ),
			'slug'             => 'ovation-elements',
			'required'         => false,
			'force_activation' => false,
		)
	);
	$config = array();
	hardware_tools_store_tgmpa( $plugins, $config );
}
add_action( 'tgmpa_register', 'hardware_tools_store_register_recommended_plugins' );