<?php
/* ==========================================================================
using die
========================================================================== */

//with fopen
$site = "https://www.w3schools.com/";
fopen($site,"r")
or die("Unable to connect to $site");

//with mysql
$result = mysql_query('SELECT * WHERE 1=1');
if (!$result) {
    die('Invalid query: ' . mysql_error());
}

?>