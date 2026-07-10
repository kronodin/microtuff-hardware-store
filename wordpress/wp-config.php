<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'wp' );

/** Database password */
define( 'DB_PASSWORD', 'wp' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          ')UF}8Gs[&]}=B|cf9wquf8P-KNh*QtI>5`Dy?RIIA2tN?lN=Onqk7HtxKW9Oxyx}' );
define( 'SECURE_AUTH_KEY',   'wxs3y:|Y5C&F4oQW8IKSa/p`-N<G)}]b#`Nd`AxpWE9a3w^NIvKp:i0nfc|3,XB+' );
define( 'LOGGED_IN_KEY',     '@e}Lutb h#0@IZ!;JN>bdQOK?T8A>f2,E/,qQnLD0h+;3r0:zVx}ITiK9;Xz/O:%' );
define( 'NONCE_KEY',         ']f#oZQvaEQK(,gJFmB/.Rb7l%LTd}$(8JR>I@X?H*8$$dQ/src2r-^Rj&U[ mQ;k' );
define( 'AUTH_SALT',         'mEYAH&Lc1IObd7Qb|<[xl!_WKW]Ym^4Ai9SS1LkS,O)*{`I^K&a%#wC.GCL$)F6N' );
define( 'SECURE_AUTH_SALT',  'Yl6*(j:WY.mwa1qcjX#-D6U,B->ZOJia_=Rq5=G?E^;!6|@fP%VNq%,q|(!%[8+P' );
define( 'LOGGED_IN_SALT',    'e`IH4kFE@tY<hdEV+IR(O2#njeD@8Z_)INE=RZ[i_Co/osXp7i@7 9|_Z8_tk./_' );
define( 'NONCE_SALT',        'JqCeVEP5-sfN$eljuKD.`}Rz^`^QIQk]jKZ$[8-/0H9&0WpO+<3#@n,t#TK.p|~k' );
define( 'WP_CACHE_KEY_SALT', 'GJNFLT25O6-$+].nTZ-Ks@Ndv?zNLMM:2@NW(fA^D#*#:3AL!weRR+^hw.QvV)WI' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
