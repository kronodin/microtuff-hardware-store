<?php
/**
 * Hardware Tools Store: Customizer
 *
 * @subpackage Hardware Tools Store
 * @since 1.0
 */

function hardware_tools_store_customize_register( $wp_customize ) {

	wp_enqueue_style('customizercustom_css', esc_url( get_template_directory_uri() ). '/inc/customizer/customizer.css');

	$wp_customize->add_section('hardware_tools_store_premium_features_section', array(
		'title'    => __('🔒 Unlock Premium Features', 'hardware-tools-store'),
		'priority' => 2,
	));
	
	$wp_customize->add_setting('hardware_tools_store_premium_features');
	$wp_customize->add_control(
		new WP_Customize_Control(
			$wp_customize,
			'hardware_tools_store_premium_features',
			array(
				'section'     => 'hardware_tools_store_premium_features_section',
				'type'        => 'hidden',
				'description' => '<div style="background: linear-gradient(135deg, #2B136B 0%, #A47AE2 100%); padding: 20px; border-radius: 8px; text-align: center; color: #fff;">
									<h3 style="margin-top: 0; color: #fff;">' . __('Unlock Advanced Features', 'hardware-tools-store') . '</h3>
									<p style="margin: 15px 0;">' . __('Upgrade to Pro to get:', 'hardware-tools-store') . '</p>
									<ul style="list-style: none; padding: 0; text-align: left; max-width: 300px; margin: 20px auto;">
										<li style="margin-bottom: 10px;">✓ ' . __('12+ Premium Header Layouts', 'hardware-tools-store') . '</li>
										<li style="margin-bottom: 10px;">✓ ' . __('Advanced Footer Builder', 'hardware-tools-store') . '</li>
										<li style="margin-bottom: 10px;">✓ ' . __('Typography Controls', 'hardware-tools-store') . '</li>
										<li style="margin-bottom: 10px;">✓ ' . __('WooCommerce Styling Options', 'hardware-tools-store') . '</li>
										<li style="margin-bottom: 10px;">✓ ' . __('Priority Support', 'hardware-tools-store') . '</li>
										<li style="margin-bottom: 10px;">✓ ' . __('One-Click Demo Import', 'hardware-tools-store') . '</li>
									</ul>
									<a href="' . esc_url(admin_url('themes.php?page=hardware-tools-store-pro')) . '" 
									   style="display: inline-block; background: #fff; color: #667eea; padding: 12px 30px; text-decoration: none; border-radius: 4px; font-weight: 600; margin: 10px 5px; transition: all 0.3s;">
									   ' . __('View All Features', 'hardware-tools-store') . '
									</a>
									<a href="' . esc_url(HARDWARE_TOOLS_STORE_BUY_PRO) . '" target="_blank" 
									   style="display: inline-block; background: #ffc107; color: #333; padding: 12px 30px; text-decoration: none; border-radius: 4px; font-weight: 600; margin: 10px 5px;">
									   ' . __('Upgrade Now 🚀', 'hardware-tools-store') . '
									</a>
									<a href="' . esc_url(HARDWARE_TOOLS_STORE_BUNDLE_LINK) . '" target="_blank" 
									   style="display: inline-block; background: #28a745; color: #fff; padding: 12px 30px; text-decoration: none; border-radius: 4px; font-weight: 600; margin: 10px 5px;">
									   ' . __('WordPress Bundle 🎁', 'hardware-tools-store') . '
									</a>
								  </div>',
			)
		)
	);
}
add_action( 'customize_register', 'hardware_tools_store_customize_register' );