<?php 

function hardware_tools_store_add_admin_menu() {
    add_menu_page(
        'Theme Settings', // Page title
        'Theme Settings', // Menu title
        'manage_options', // Capability
        'hardware-tools-store-theme-settings', // Menu slug
        'hardware_tools_store_settings_page' // Function to display the page
    );
}
add_action( 'admin_menu', 'hardware_tools_store_add_admin_menu' );

function hardware_tools_store_settings_page() {
    ?>
    <div class="wrap">
        <h1><?php esc_html_e( 'Theme Settings', 'hardware-tools-store' ); ?></h1>
        <form action="options.php" method="post">
            <?php
            settings_fields( 'hardware_tools_store_settings_group' );
            do_settings_sections( 'hardware-tools-store-theme-settings' );
            submit_button();
            ?>
        </form>
    </div>
    <?php
}

function hardware_tools_store_register_settings() {
    register_setting( 'hardware_tools_store_settings_group', 'hardware_tools_store_enable_animations' );

    add_settings_section(
        'hardware_tools_store_settings_section',
        __( 'Animation Settings', 'hardware-tools-store' ),
        null,
        'hardware-tools-store-theme-settings'
    );

    add_settings_field(
        'hardware_tools_store_enable_animations',
        __( 'Enable Animations', 'hardware-tools-store' ),
        'hardware_tools_store_enable_animations_callback',
        'hardware-tools-store-theme-settings',
        'hardware_tools_store_settings_section'
    );
}
add_action( 'admin_init', 'hardware_tools_store_register_settings' );

function hardware_tools_store_enable_animations_callback() {
    $checked = get_option( 'hardware_tools_store_enable_animations', true );
    ?>
    <input type="checkbox" name="hardware_tools_store_enable_animations" value="1" <?php checked( 1, $checked ); ?> />
    <?php
}

