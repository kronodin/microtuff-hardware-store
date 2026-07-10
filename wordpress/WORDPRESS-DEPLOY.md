# C.G WOOLERY JR WordPress — latest pushed build

Contents
- `hardware-tools-store/` — custom patched theme
- WooCommerce 50-product catalog (JMD pricing)
- WhatsApp checkout integration to `18763599983`
- Custom `.htaccess` rewrite rules for pretty permalinks

Deploy notes
- Excluded `wp-content/uploads/` from repo to save space; re-upload from source server.
- Requires WooCommerce plugin installed on target.
- Apache vhost should AllowOverride All for pretty permalinks.
