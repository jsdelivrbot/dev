<?php

/* ==========================================================================
// XSS
========================================================================== */

// problem: GET data is sent through URL: http://example.com/search.php?search=<script>alert('test')</script>
$search = $_GET['search'] ?: null;
echo 'Search results for '.$search;

// solution: htmlspecialchars
$search = htmlspecialchars($search, ENT_QUOTES, 'UTF-8');
echo 'Search results for '.$search;

// To all for html - like input like is a blog post, you can use:
// http://pear.php.net/package/HTML_BBCodeParser2
// example

/* ==========================================================================
// SQL injection
========================================================================== */

// problem: sql inserted into url query
$_GET['username'] = "'; DELETE FROM users; /*"

// solution: PDO, "manual" escaping
// PDO::quote() places quotes around the input string (if required) and escapes special characters within 
// it, using a quoting style appropriate to the underlying driver.
$username = PDO::quote($_GET['username']);
$pdo->query("SELECT * FROM users WHERE username = $username");

//or

// PDO, prepared statement
// :username is a bind parameter
$pdo->prepare('SELECT * FROM users WHERE username = :username');
$pdo->execute(array(':username' => $_GET['username']));

/* ==========================================================================
// Directory traversal (path injection)
========================================================================== */

// (injecting malicious SQL parts into your existing SQL statement)

// Directory traversal (path injection)
// Also known as ../ (dot, dot, slash) attacks, happen when users supply filenames as 
// input that can traverse to parent directories. Data can be set as index.php?page=../secret, 
// or /var/www/secret, etc.

// problem: echo page file contents from url query string
$page = $_GET['page'] ?: 'home';
require $page;
// or something like this
echo file_get_contents('../pages/'.$page.'.php');

// solution: checking if the string contains parent directory
if (strstr($_GET['page'], '../') !== false) {
    throw new \Exception("Directory traversal attempt!");
}
// Checking remote file inclusions
if (strstr($_GET['page'], 'file://') !== false) {
    throw new \Exception("Remote file inclusion attempt!");
}
// Using whitelists of pages that are allowed to be included in the first place
$allowed = ['home', 'blog', 'gallery', 'catalog'];
$page = (in_array($page, $allowed)) ? $page : 'home';
echo file_get_contents('../pages/'.$page.'.php');

/* ==========================================================================
// Command injection
========================================================================== */

// careful executing shell commands with unfiltered data
exec('rm -rf '.$GET['path']);

/* ==========================================================================
// Code injection
========================================================================== */

// careful executing anything with eval withouth validating first
eval('include '.$_GET['path']);

/* ==========================================================================
// Hide error reporting
========================================================================== */

// hide error reporting when site goes live.
// put this at top of page
error_reporting(0);
// set custom error handler to log errors to protected file
set_error_handle()

/* ==========================================================================
// Disable register globals
========================================================================== */
    
// Disabling with .htaccess
php_flag register_globals 0
// Disabling with php.ini
register_globals = Off

/* ==========================================================================
// Disable magic quotes
========================================================================== */
    
// Disabling with .htaccess
php_flag magic_quotes_gpc 0 
php_flag magic_quotes_runtime 0
// Disabling with php.ini
magic_quotes_gpc = Off
magic_quotes_runtime = Off
magic_quotes_sybase = Off
    
/* ==========================================================================
// Validate input
========================================================================== */

//making data valid
    
if ( ! preg_match( "/^[0-9]{1,2}$/", $_GET['month'] ) )
{
    // handle error
}
if ( ! preg_match( "/^[0-9]{1,2}$/", $_GET['day'] ) )
{
    // handle error
}
if ( ! preg_match( "/^[0-9]{4}$/", $_GET['year'] ) )
{
    // handle error
}

// or

if(filter_var($address, FILTER_VALIDATE_EMAIL)) {
 echo "Email is valid.";
} else {
 echo "Not valid.";
}

/* ==========================================================================
// Sanitize output
========================================================================== */

// cleaning/removing harmful characters

//Remove all characters from the email except letters, digits and !#$%&'*+-=?^_`{|}~@.[]
echo filter_var($dirtyAddress, FILTER_SANITIZE_EMAIL);

/* ==========================================================================
// Escape output
========================================================================== */

// Convert to HTML entities to make them safe for the web browser.
// Even if you’ve sanitized this data as it arrives, it needs to be re-sanitized
// when it is displayed to other site visitors (right before it is sent to the web browser).
// data can be coming from external api or a hacker may have tricked your application into creating harmful data for output.

echo 'Thanks for your order. Please visit us again. You ordered '.esc_html($productName)';

/* ==========================================================================
// Disable directory browsing
========================================================================== */

// in .htaccess file:
Options -Indexes

/* ==========================================================================
// Sanitize file uploads
========================================================================== */

sanitized the contents of the file being uploaded. Sanitize and and escape the file data 
when saved to the filesystem



    
