<?php
/**
 * Hardware Tools Store: Block Patterns
 *
 * @since Hardware Tools Store 1.0
 */

/**
 * Registers block patterns and categories.
 *
 * @since Hardware Tools Store 1.0
 *
 * @return void
 */
function hardware_tools_store_register_block_patterns() {
	$hardware_tools_store_block_pattern_categories = array(
		'hardware-tools-store'    => array( 'label' => __( 'Hardware Tools Store', 'hardware-tools-store' ) ),
	);

	$hardware_tools_store_block_pattern_categories = apply_filters( 'hardware_tools_store_block_pattern_categories', $hardware_tools_store_block_pattern_categories );

	foreach ( $hardware_tools_store_block_pattern_categories as $name => $properties ) {
		if ( ! WP_Block_Pattern_Categories_Registry::get_instance()->is_registered( $name ) ) {
			register_block_pattern_category( $name, $properties );
		}
	}
}
add_action( 'init', 'hardware_tools_store_register_block_patterns', 9 );
