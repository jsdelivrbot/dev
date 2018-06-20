<?php
/* ==========================================================================
// security/prepared statement
========================================================================== */

// / is a bind parameter
$stmt = $mysqli->prepare("INSERT INTO People VALUES (?, ?, ?, ?)");
$stmt->bind_param('sssd', $firstName, $lastName, $email, $age);
