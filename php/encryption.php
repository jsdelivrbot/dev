<?php

/* ==========================================================================
md5...
========================================================================== */

//md5 encryption
md5(time());


/* ==========================================================================
//generate unique id
========================================================================== */

// generate unique string
echo uniqid();
/* prints
4bd67c947233e
*/

//with prefix
echo uniqid('prefix_', null);

//with more entrophy
echo uniqid('', true);

//can also use:
bin2hex(openssl_random_pseudo_bytes(16));
// produces:
// 9e2d72f077918ea46f9f162b8c6cfd6e

/* ==========================================================================
//serialize
========================================================================== */

$arr = array(
	array(1 => "one", 2 => "two"),
	array(1 => "one", 2 => "two")
	);

//convert to serialized string
$str = serialize($arr);

echo $str;
//a:2:{i:0;a:2:{i:1;s:3:"one";i:2;s:3:"two";}i:1;a:2:{i:1;s:3:"one";i:2;s:3:"two";}}

//unserialize
$unsarray = unserialize($str);

print_r($unsarray);


// a complex array
$myvar = array(
    'hello',
    42,
    array(1,'two'),
    'apple'
);
 
/* ==========================================================================
//now can also use json_encode()
========================================================================== */

// convert to a string
$string = json_encode($myvar);
 
echo $string;
/* prints
["hello",42,[1,"two"],"apple"]
*/
 
// you can reproduce the original variable
$newvar = json_decode($string);
 
print_r($newvar);
/* prints
Array
(
    [0] => hello
    [1] => 42
    [2] => Array
        (
            [0] => 1
            [1] => two
        )
 
    [3] => apple
)
*/


?>



