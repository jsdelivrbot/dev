<?php

/* ==========================================================================
escaping
========================================================================== */

//only double quotes work with escape characters
echo 1 . "\n";

//this doesn't work:
echo 1 . '\n';

//string without need of escaping
$myString = <<<EOD
This is some free form text. It can span mutliple
lines and can contain otherwise troublesome characters like
\ and " and ' without causing any problems.
EOD;

echo $myString;

/* ==========================================================================
//padding strings
========================================================================== */

//padding strings
$input = "Alien";
echo str_pad($input, 10);                      // produces "Alien     "
echo str_pad($input, 10, "-=", STR_PAD_LEFT);  // produces "-=-=-Alien"
echo str_pad($input, 10, "_", STR_PAD_BOTH);   // produces "__Alien___"
echo str_pad($input,  6, "___");               // produces "Alien_"
echo str_pad($input,  3, "*");                 // produces "Alien"


/* ==========================================================================
case formatting
========================================================================== */

$myString = "This is a test string";

//to uppercase
echo strtoupper($myString) . "\n";
//to lowercase
echo strtolower($myString) . "\n";

//first letter to uppercase
echo ucfirst($myString) . "\n";
//first letter of every word to uppercase
echo ucwords($myString) . "\n";

/* ==========================================================================
print formatted strings
========================================================================== */

$myColor = "Green";
$myNumber = 12;

// printf ( "String", variable1, variable2, ... );
printf("My favorite color is %s and my lucky number is %d.", $myColor, $myNumber);

// The formatting specifiers begin with a '%' character 
// following by a letter to indicate the type of variable to be displayed:

// %%	Displays a percent sign
// %b	A integer represented as a binary number
// %c	A character based on the ASCII value
// %d	A signed decimal number
// %e	Scientific notation (for example 1.2e+2)
// %u	An unsigned decimal number
// %f	A floating-point number
// %F	Floating-point number
// %o	An octal number
// %s	A String
// %x	Hexadecimal number in lowercase letters
// %X	Hexadecimal number in uppercase letters

/* ==========================================================================
find length of a string
========================================================================== */

$myString = "This is a short string";
$strLength = strlen($myString);
echo "The string length is $strLength.<br>";

/* ==========================================================================
trim whitespace
========================================================================== */

trim()

/* ==========================================================================
pad strings
========================================================================== */

//pad to the right of a string
$str = "Hello World";
echo str_pad($str,20,".");
//Hello World.........

//pad to the left of a string
$str = "Hello World";
echo str_pad($str,20,".",STR_PAD_LEFT);
//.........Hello World

//pad both sides of a string
$str = "Hello World";
echo str_pad($str,20,".:",STR_PAD_BOTH);
//.:.:Hello World.:.:.

/* ==========================================================================
replace all occurrences of the search string with the replacement string
========================================================================== */

// Provides: <body text='black'>
$bodytag = str_replace("%body%", "black", "<body text='%body%'>");

// Provides: Hll Wrld f PHP
$vowels = array("a", "e", "i", "o", "u", "A", "E", "I", "O", "U");
$onlyconsonants = str_replace($vowels, "", "Hello World of PHP");

// Provides: You should eat pizza, beer, and ice cream every day
$phrase  = "You should eat fruits, vegetables, and fiber every day.";
$healthy = array("fruits", "vegetables", "fiber");
$yummy   = array("pizza", "beer", "ice cream");

$newphrase = str_replace($healthy, $yummy, $phrase);

// Provides: 2
$str = str_replace("ll", "", "good golly miss molly!", $count);
echo $count;

