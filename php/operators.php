<?php

/* ==========================================================================
assignment operators
========================================================================== */

// Concatenation-Operand
$speak = 'My';
$speak .= ' name';
$speak .= ' is';
$speak .= ' Bear.';
echo $speak;

// other assignment operators
// +=
// -=
// *=
// /=
// %=

/* ==========================================================================
comparison operators
========================================================================== */

// equal to
==

// not equal to
!= 

// identical to
===

//not identical to
!== 

// <> 
// not equal to (same as !=)
//Returns true if first operand is not equal to second
$myVar = 10; 
if ($myVar <> 20)
echo 'myVar does not equal 10';

/* ==========================================================================
logical operators
========================================================================== */

&&
// same as 
AND

|| 
// same as 
OR

// returns true if ONLY ONE of the expressions evaluates to be true
xor
// same as 
XOR

/* ==========================================================================
execution operator
========================================================================== */

//runs as if in the terminal
echo `ls -la`;

/* ==========================================================================
elvis operator
========================================================================== */

$bar = null;
$baz = '1234'
$foo = $bar ?: $baz;
echo $foo;

//roughly resolves to

$foo = $bar ? $bar : $baz;

/* ==========================================================================
null coalescing operator (double question mark)
========================================================================== */

// ??
// same as ?: except it allows you to chain multiple conditions (available in php7)

// $a is not set
$b = 16;

echo $a ?? 2; // outputs 2
echo $a ?? $b ?? 7; // outputs 16

?>
