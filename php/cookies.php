<?php

/* ==========================================================================
creation
========================================================================== */

// setcookie(key, value, expiration, active_path, domain)
// active path is the directory from the website that is allowed to access the
// cookie. for example foo.com/dir/
// domain is what domain is allowed access
// fifth is the security setting (0 for http, 1 for https)
setcookie('userName', 'JohnW', time() + 4800);
echo 'Cookie has been set<br>';

/* ==========================================================================
reading a cookie
========================================================================== */

echo 'Reading cookie<br>';
echo 'userName = ' . $_COOKIE['userName'];
// Reading cookie
// userName = JohnW

/* ==========================================================================
deleting a cookie
========================================================================== */

// Note that if you specified domain and/or path arguments when you 
// created the cookie you must also specify them when you delete the cookie.
setcookie ('userName', '', time() - 4800);




