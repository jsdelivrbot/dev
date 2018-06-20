<?php
/* ==========================================================================
// send javascript via php as a service
========================================================================== */
?>
<script src="js.php?script1=jquery.js"></script>
<?php
$script1 = $_GET['script1'];

//... in the php file js.php:
//sent back appropriate header
header('Content-Type: application/javascript');
// Load the content of jquery.js and print it to browser
echo file_get_contents($script1);