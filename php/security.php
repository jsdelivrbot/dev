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
