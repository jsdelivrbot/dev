<?php

/* ==========================================================================
session
========================================================================== */

// start a session
session_start();

// set session variables
$_SESSION['userName'] = 'JohnW';
// or
session_register('username', 'JohnW');

// reading from session
if (session_is_registered('userName'))
{
        echo 'userName = ' . $_SESSION['userName'];
}

/* ==========================================================================
writting session data to file
========================================================================== */

// set session data
$_SESSION['userName'] = 'JohnW';
$_SESSION['emailAddress'] = 'johnw@nospam.com';
// Get the session data
$session_data = session_encode();
// open a file write session data
$filehandle = fopen ('/tmp/php_session.txt', 'w+');
// write the session data to file
fwrite ($filehandle, $session_data);
fclose ($filehandle);

//data would look like:
//userName|s:5:"JohnW";emailAddress|s:16:"johnw@nospam.com";

/* ==========================================================================
reading saved session from file
========================================================================== */

// open file containing session data 
$filehandle = fopen ('/tmp/php_session.txt', 'r'); 
// read the session data from file
$sessiondata = fread ($filehandle, 4096);
fclose ($filehandle);
// Decode the session data
session_decode($sessiondata); 
// Display the session data
print_r($sessiondata); 

?>
