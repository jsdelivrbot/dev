<?php
/* ==========================================================================
functions and variable scope
========================================================================== */

$myString = "global string";

function showString ()
{
        //the below will produce an error:
        //echo $myString;
        //can't access variables outide the function
        //must use the $GLOBALS array to access it:
        echo $GLOBALS['myString'];
}
?>
