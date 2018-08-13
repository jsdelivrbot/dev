<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */
 
 /** insert into wp_config when using a temp. url: */
//define('WP_HOME','http://biz142.inmotionhosting.com/~wpauto5/ontariomoldremoval.com');
//define('WP_SITEURL','http://biz142.inmotionhosting.com/~wpauto5/ontariomoldremoval.com');
 

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'ontmold');

/** MySQL database username */
define('DB_USER', 'ontmold');

/** MySQL database password */
define('DB_PASSWORD', 'T0Ab*rP%Hl;x');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'xxcxdzkxjsn5rwhqiiw2plm65z3porfdfbqtbztxuwykxy89ybjztg45eizzdxoc');
define('SECURE_AUTH_KEY',  '12br4zwodl8mggsv9rppatphs8jd96bopgpdb80pqrfolacfz3qmiubepwz0okd3');
define('LOGGED_IN_KEY',    't4uacl8crmae4qefujmt9vgnsprlxtveyukkmykmrr9dq1atzffmxhcrjyzhdfby');
define('NONCE_KEY',        '072r55egv9xbet7ioqzoitkzq9brlk3jrgk5danjyhznh51g151z847xh4hrqdcu');
define('AUTH_SALT',        'uyzl0ijvnix56wte4vux0whbjhphwobq88jocjwzdfmbk5cqdav28v2cyfuaxspd');
define('SECURE_AUTH_SALT', 'dhpv9qgudipjrna0hy6vqpfqayehldq89hylp5b5zy1kmb8k4tm2wvnl2khx3md0');
define('LOGGED_IN_SALT',   'e3rmfi8jcqdvxzdsgdkd6dmjatv190dqzymgsbsay5ab827kd7sfhafkbkvmz5gz');
define('NONCE_SALT',       'szqu4nucvm6oq9wdoiqvfmjbhdgyrgacoeczehjh0yqnygfh1tnokxmzha3dm1sc');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'rawkz_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
//Disable File Edits
define('DISALLOW_FILE_EDIT', false);