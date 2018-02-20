<?php // fw_header.php

// begin output buffering (allows you to send headers before session_start())
ob_start();

include 'fw_functions.php';
session_start();

if (isset($_SESSION['user']))
{
	$user = $_SESSION['user'];
	$loggedin = TRUE;
}
else $loggedin = FALSE;

echo "<html><head><title>$appname";
if ($loggedin) echo " ($user)";

echo "</title></head><body><font face='verdana' size='2'>";
echo "<h2>$appname</h2>";

if ($loggedin)
{
	echo "<b>$user</b>:
		 <a href='fw_members.php?view=$user'>Home</a> |
		 <a href='fw_members.php'>Members</a> |
		 <a href='fw_friends.php'>Friends</a> |
		 <a href='fw_messages.php'>Messages</a> |
		 <a href='fw_profile.php'>Profile</a> |
		 <a href='fw_logout.php'>Log out</a>";
}
else
{
	echo "<a href='index.php'>Home</a> |
		 <a href='fw_signup.php'>Sign up</a> |
		 <a href='fw_login.php'>Log in</a>";
}
?>