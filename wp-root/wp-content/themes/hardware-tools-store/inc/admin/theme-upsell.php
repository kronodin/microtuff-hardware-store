<?php
/**
 * Theme Upsell Page
 * 
 * @package Hardware Tools Store
 */

if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Add theme upsell page to admin menu
 */
add_action( 'admin_menu', 'hardware_tools_store_add_theme_page' );
function hardware_tools_store_add_theme_page() {
    add_theme_page(
        __( 'Upgrade to PRO', 'hardware-tools-store' ),
        __( 'Upgrade to PRO', 'hardware-tools-store' ),
        'manage_options',
        'hardware-tools-store-pro',
        'hardware_tools_store_pro_page_callback'
    );
}
/**
 * Render theme upsell page
 */
function hardware_tools_store_pro_page_callback() {
    ?>
    <div class="wrap ot-pro-wrap">
        <h1><?php esc_html_e('Upgrade to Hardware Tools Store Pro 🚀', 'hardware-tools-store'); ?></h1>
        
        <div class="ot-pro-hero">
            <div class="hero-content">
                <div class="hero-left">
                    <h2><?php esc_html_e('Take Your Hardware Tools Store Business to the Next Level', 'hardware-tools-store'); ?></h2>
                    <p class="subtitle"><?php esc_html_e('Get access to premium features, advanced layouts, and priority support', 'hardware-tools-store'); ?></p>
                    <div class="button-group">
                        <?php
                        // Check if theme is FSE (block theme) or customizer based
                        if ( function_exists( 'wp_is_block_theme' ) && wp_is_block_theme() ) {
                            // Block theme - link to Site Editor
                            $editor_url = admin_url( 'site-editor.php' );
                            $editor_text = __('Site Editor', 'hardware-tools-store');
                            $editor_icon = 'dashicons-layout';
                        } else {
                            // Classic theme - link to Customizer
                            $editor_url = admin_url( 'customize.php' );
                            $editor_text = __('Customize', 'hardware-tools-store');
                            $editor_icon = 'dashicons-admin-customizer';
                        }
                        // Check if the Ovation Elements plugin is active
                        $is_plugin_active = is_plugin_active('ovation-elements/ovation-elements.php');
                        ?>
                        <a class="button button-hero button-primary theme-install" id="install-activate-button" href="#" style="display:<?php echo $is_plugin_active ? 'none' : 'inline-flex'; ?> !important;">
                            <span class="dashicons dashicons-download"></span>
                            <?php _e('Begin Installation', 'hardware-tools-store'); ?>
                        </a>
                        <a class="button button-hero button-success" id="view-site-button" href="<?php echo esc_url( home_url('/') ); ?>" target="_blank" style="display:<?php echo $is_plugin_active ? 'inline-flex' : 'none'; ?> !important;">
                            <span class="dashicons dashicons-admin-site"></span>
                            <?php _e('View Site', 'hardware-tools-store'); ?>
                        </a>
                        <a target="_blank" href="<?php echo esc_url( $editor_url ); ?>" class="button button-hero button-customize" style="display:<?php echo $is_plugin_active ? 'inline-flex' : 'none'; ?> !important;">
                            <span class="dashicons <?php echo esc_attr( $editor_icon ); ?>"></span>
                            <?php echo esc_html( $editor_text ); ?>
                        </a>
                        <a href="<?php echo esc_url( HARDWARE_TOOLS_STORE_LIVE_DEMO ); ?>" target="_blank" class="button button-hero button-demo">
                            <span class="dashicons dashicons-visibility"></span>
                            <?php esc_html_e('Live Demo', 'hardware-tools-store'); ?>
                        </a>
                        <a href="<?php echo esc_url( HARDWARE_TOOLS_STORE_BUY_PRO ); ?>" target="_blank" class="button button-primary button-hero button-pro">
                            <span class="dashicons dashicons-star-filled"></span>
                            <?php esc_html_e('Get Pro Theme', 'hardware-tools-store'); ?>
                        </a>
                        <a href="<?php echo esc_url( HARDWARE_TOOLS_STORE_FREE_DOC ); ?>" target="_blank" class="button button-hero button-docs">
                            <span class="dashicons dashicons-book"></span>
                            <?php esc_html_e('Documentation', 'hardware-tools-store'); ?>
                        </a>
                        <a href="<?php echo esc_url( HARDWARE_TOOLS_STORE_BUNDLE_LINK ); ?>" target="_blank" class="button button-hero button-bundle">
                            <span class="dashicons dashicons-cart"></span>
                            <?php esc_html_e('WordPress Theme Bundle', 'hardware-tools-store'); ?>
                        </a>
                    </div>
                </div>
                <div class="hero-right">
                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/screenshot.png" alt="<?php esc_attr_e('Hardware Tools Store Theme Screenshot', 'hardware-tools-store'); ?>" class="theme-screenshot">
                </div>
            </div>
        </div>

        <div class="ot-pro-features">
            <h2><?php esc_html_e('Why Upgrade to Pro?', 'hardware-tools-store'); ?></h2>
            
            <div class="feature-grid">
                <div class="feature-box">
                    <span class="dashicons dashicons-layout"></span>
                    <h3><?php esc_html_e('Different styling Options', 'hardware-tools-store'); ?></h3>
                    <p><?php esc_html_e('This content will change based on different styling options.', 'hardware-tools-store'); ?></p>
                </div>
                
                <div class="feature-box">
                    <span class="dashicons dashicons-admin-customizer"></span>
                    <h3><?php esc_html_e('Section Reordering Option', 'hardware-tools-store'); ?></h3>
                    <p><?php esc_html_e('Sections can be reordered or rearranged as per your preference.', 'hardware-tools-store'); ?></p>
                </div>
                
                <div class="feature-box">
                    <span class="dashicons dashicons-editor-table"></span>
                    <h3><?php esc_html_e('Footer Builder', 'hardware-tools-store'); ?></h3>
                    <p><?php esc_html_e('Create custom footers with advanced widgets', 'hardware-tools-store'); ?></p>
                </div>
                
                <div class="feature-box">
                    <span class="dashicons dashicons-art"></span>
                    <h3><?php esc_html_e('Typography Controls', 'hardware-tools-store'); ?></h3>
                    <p><?php esc_html_e('Full control over fonts, sizes, and text styling', 'hardware-tools-store'); ?></p>
                </div>
                
                <div class="feature-box">
                    <span class="dashicons dashicons-cart"></span>
                    <h3><?php esc_html_e('WooCommerce Styling', 'hardware-tools-store'); ?></h3>
                    <p><?php esc_html_e('Advanced WooCommerce integration with custom product layouts', 'hardware-tools-store'); ?></p>
                </div>
                
                <div class="feature-box">
                    <span class="dashicons dashicons-admin-tools"></span>
                    <h3><?php esc_html_e('Advanced Options', 'hardware-tools-store'); ?></h3>
                    <p><?php esc_html_e('Advanced theme options available for themes', 'hardware-tools-store'); ?></p>
                </div>
                
                <div class="feature-box">
                    <span class="dashicons dashicons-performance"></span>
                    <h3><?php esc_html_e('Performance Optimized', 'hardware-tools-store'); ?></h3>
                    <p><?php esc_html_e('3X faster loading with optimized code and assets', 'hardware-tools-store'); ?></p>
                </div>
                
                <div class="feature-box">
                    <span class="dashicons dashicons-sos"></span>
                    <h3><?php esc_html_e('Priority Support', 'hardware-tools-store'); ?></h3>
                    <p><?php esc_html_e('Get expert help within 24 hours through our priority support system', 'hardware-tools-store'); ?></p>
                </div>
                
                <div class="feature-box">
                    <span class="dashicons dashicons-admin-appearance"></span>
                    <h3><?php esc_html_e('Unlimited Color Schemes', 'hardware-tools-store'); ?></h3>
                    <p><?php esc_html_e('Customize every color to match your brand identity with unlimited color options', 'hardware-tools-store'); ?></p>
                </div>
                
                <div class="feature-box">
                    <span class="dashicons dashicons-download"></span>
                    <h3><?php esc_html_e('One-Click Demo Import', 'hardware-tools-store'); ?></h3>
                    <p><?php esc_html_e('Import complete demo content with just one click and get started instantly', 'hardware-tools-store'); ?></p>
                </div>
            </div>
        </div>

        <div class="ot-pro-comparison">
            <h2><?php esc_html_e('Free vs Pro Comparison', 'hardware-tools-store'); ?></h2>
            
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th><?php esc_html_e('Feature', 'hardware-tools-store'); ?></th>
                        <th><?php esc_html_e('Free', 'hardware-tools-store'); ?></th>
                        <th class="pro-col"><?php esc_html_e('Pro', 'hardware-tools-store'); ?></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><?php esc_html_e('Typography Controls', 'hardware-tools-store'); ?></td>
                        <td><?php esc_html_e('Limited', 'hardware-tools-store'); ?></td>
                        <td class="pro-col"><?php esc_html_e('Full Control', 'hardware-tools-store'); ?></td>
                    </tr>
                    <tr>
                        <td><?php esc_html_e('WooCommerce Styling', 'hardware-tools-store'); ?></td>
                        <td>❌</td>
                        <td class="pro-col">✅</td>
                    </tr>
                    <tr>
                        <td><?php esc_html_e('Custom Widgets', 'hardware-tools-store'); ?></td>
                        <td><?php esc_html_e('Basic', 'hardware-tools-store'); ?></td>
                        <td class="pro-col"><?php esc_html_e('Advanced', 'hardware-tools-store'); ?></td>
                    </tr>
                    <tr>
                        <td><?php esc_html_e('Color Schemes', 'hardware-tools-store'); ?></td>
                        <td><?php esc_html_e('Limited', 'hardware-tools-store'); ?></td>
                        <td class="pro-col"><?php esc_html_e('Unlimited', 'hardware-tools-store'); ?></td>
                    </tr>
                    <tr>
                        <td><?php esc_html_e('Demo Import', 'hardware-tools-store'); ?></td>
                        <td>❌</td>
                        <td class="pro-col">✅</td>
                    </tr>
                    <tr>
                        <td><?php esc_html_e('Priority Support', 'hardware-tools-store'); ?></td>
                        <td>❌</td>
                        <td class="pro-col">✅</td>
                    </tr>
                    <tr>
                        <td><?php esc_html_e('Custom Post Types', 'hardware-tools-store'); ?></td>
                        <td>❌</td>
                        <td class="pro-col">✅</td>
                    </tr>
                    <tr>
                        <td><?php esc_html_e('Page Builder Integration', 'hardware-tools-store'); ?></td>
                        <td><?php esc_html_e('Gutenberg', 'hardware-tools-store'); ?></td>
                        <td class="pro-col"><?php esc_html_e('Gutenberg/Customizer', 'hardware-tools-store'); ?></td>
                    </tr>
                    <tr>
                        <td><?php esc_html_e('Speed Optimization', 'hardware-tools-store'); ?></td>
                        <td><?php esc_html_e('Standard', 'hardware-tools-store'); ?></td>
                        <td class="pro-col"><?php esc_html_e('Advanced (3X Faster)', 'hardware-tools-store'); ?></td>
                    </tr>
                    <tr>
                        <td><?php esc_html_e('Sticky Header', 'hardware-tools-store'); ?></td>
                        <td>❌</td>
                        <td class="pro-col">✅</td>
                    </tr>
                    <tr>
                        <td><?php esc_html_e('Preloader Options', 'hardware-tools-store'); ?></td>
                        <td>❌</td>
                        <td class="pro-col">✅</td>
                    </tr>
                    <tr>
                        <td><?php esc_html_e('Blog Layouts', 'hardware-tools-store'); ?></td>
                        <td><?php esc_html_e('1', 'hardware-tools-store'); ?></td>
                        <td class="pro-col"><?php esc_html_e('Advanced', 'hardware-tools-store'); ?></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="ot-pro-testimonials">
            <h2><?php esc_html_e('What Our Users Say', 'hardware-tools-store'); ?></h2>
            
        <div class="testimonial-grid">
            <div class="testimonial-box">
                <div class="stars">⭐⭐⭐⭐⭐</div>
                <p><?php esc_html_e('"I was looking for a clean and professional theme for my hardware tools store website and this theme delivered exactly that. Setup was quick and the layout looks very modern."', 'hardware-tools-store'); ?></p>
                <span class="author"><?php esc_html_e('- John D.', 'hardware-tools-store'); ?></span>
            </div>

            <div class="testimonial-box">
                <div class="stars">⭐⭐⭐⭐</div>
                <p><?php esc_html_e('"The theme design is professional and easy to customize. The documentation helped me set up my accounting website without any issues."', 'hardware-tools-store'); ?></p>
                <span class="author"><?php esc_html_e('- Sarah M.', 'hardware-tools-store'); ?></span>
            </div>

            <div class="testimonial-box">
                <div class="stars">⭐⭐⭐⭐⭐</div>
                <p><?php esc_html_e('"Very flexible and beginner-friendly. I was able to adjust colors, sections, and layouts directly from the Customizer. Highly recommended."', 'hardware-tools-store'); ?></p>
                <span class="author"><?php esc_html_e('- Michael R.', 'hardware-tools-store'); ?></span>
            </div>

            <div class="testimonial-box">
                <div class="stars">⭐⭐⭐⭐</div>
                <p><?php esc_html_e('"The mobile responsive design works perfectly. Most of my clients visit from their phones, and the site looks clean and professional."', 'hardware-tools-store'); ?></p>
                <span class="author"><?php esc_html_e('- Emily T.', 'hardware-tools-store'); ?></span>
            </div>

            <div class="testimonial-box">
                <div class="stars">⭐⭐⭐⭐⭐</div>
                <p><?php esc_html_e('"Great theme for tax professionals. The service sections and homepage layout helped me present my services clearly to potential clients."', 'hardware-tools-store'); ?></p>
                <span class="author"><?php esc_html_e('- David L.', 'hardware-tools-store'); ?></span>
            </div>

            <div class="testimonial-box">
                <div class="stars">⭐⭐⭐⭐</div>
                <p><?php esc_html_e('"Customer support is very helpful and responsive. They guided me during setup and solved my issue quickly."', 'hardware-tools-store'); ?></p>
                <span class="author"><?php esc_html_e('- Jennifer K.', 'hardware-tools-store'); ?></span>
            </div>

            <div class="testimonial-box">
                <div class="stars">⭐⭐⭐⭐⭐</div>
                <p><?php esc_html_e('"Fast loading and SEO friendly. After launching my website with this theme, I started receiving more inquiries from clients."', 'hardware-tools-store'); ?></p>
                <span class="author"><?php esc_html_e('- Robert H.', 'hardware-tools-store'); ?></span>
            </div>

            <div class="testimonial-box">
                <div class="stars">⭐⭐⭐⭐</div>
                <p><?php esc_html_e('"A very good theme with useful features for hardware tools store businesses. Easy to install and configure."', 'hardware-tools-store'); ?></p>
                <span class="author"><?php esc_html_e('- Lisa P.', 'hardware-tools-store'); ?></span>
            </div>
        </div>
        </div>

        <div class="ot-pro-cta">
            <h2><?php esc_html_e('Ready to Upgrade?', 'hardware-tools-store'); ?></h2>
            <p><?php esc_html_e('Join hundreds of satisfied customers who upgraded to Pro', 'hardware-tools-store'); ?></p>
            <a href="<?php echo esc_url( HARDWARE_TOOLS_STORE_BUY_PRO ); ?>" target="_blank" class="button button-primary button-hero">
                <?php esc_html_e('Get Hardware Tools Store Pro Now', 'hardware-tools-store'); ?> →
            </a>
        </div>

        <div class="ot-pro-footer">
            <p><?php printf( __('Need help? Contact our <a href="%s" target="_blank">support</a> team anytime.', 'hardware-tools-store'), esc_url( HARDWARE_TOOLS_STORE_SUPPORT ) ); ?></p>
        </div>
    </div>
    <?php
}
