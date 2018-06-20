<?php
/* ==========================================================================
// security/escaping
========================================================================== */

// sql injection attack
$_GET['username'] = "'; DELETE FROM users; /*"

// PDO, "manual" escaping
$username = PDO::quote($_GET['username']);
$pdo->query("SELECT * FROM users WHERE username = $username");

/* ==========================================================================
// security/prepared statement
========================================================================== */

// PDO, prepared statement
// :username is a bind parameter
$pdo->prepare('SELECT * FROM users WHERE username = :username');
$pdo->execute(array(':username' => $_GET['username']));