<?php

/* ==========================================================================
check whether a value is a nunber
========================================================================== */

is_numeric($var_name);

/* ==========================================================================
change settings in the php.ini
========================================================================== */

ini_set(string $varname , string $newvalue);
//example:
if (!ini_get('display_errors')) {
    ini_set('display_errors', '1');
}


