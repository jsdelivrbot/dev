<?php

/* ==========================================================================
//functions within functions
========================================================================== */
//creating a function within a function
//use a variable as the function.
function myFunc() {
	$innerFunc = function(echo 'called';) {};
	$innerFunc();
}

/* ==========================================================================
//using args
========================================================================== */

function someFunc() {
    $args = func_get_args();
    foreach($args as $arg) {
        echo $arg . "\n";
    }
}

someFunc('foo', 'bar', 'baz');
// foo
// bar
// baz

/* ==========================================================================
//passing by reference
========================================================================== */

//passing a variable by reference
function foo(&$var)
{
    $var++;
}

$a=5;
foo($a);
// $a is 6 here

//return a result by reference
function &addNumbers ($arg1, $arg2)
{
        $arg1 += 10;
        $varg2 += 10;
        return $arg1 + $arg2;
}

$myVar = &addNumbers (20, 10);

/* ==========================================================================
//error handling
========================================================================== */

// @functionname will supress warnings if they occur
// use commonly with unlink.

@functionname();