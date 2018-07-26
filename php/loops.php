<?php

/* ==========================================================================
for loop
========================================================================== */

// basic for loop
$j = 10;
for ($i=0; $i<10; $i++)
{
	$j += $j;
}

//breaking out of a loop
for ($i = 0; $i < 1000; $i++)
{
	echo $i . "\n";

    if ($i == 10) 
    {
         break;
    }
}

/* ==========================================================================
continue
========================================================================== */

//causes the loop to skip eveluating the rest of the current itteration
//but to continue the rest of the loop
//don't forget the ; at the end of continue
for ($i = 0; $i < 5; ++$i) {
    if ($i == 2)
        continue;
    print "$i\n";
}

/* ==========================================================================
while loop
========================================================================== */

// contually loop until the value no longer passes
$myVar = 1;
while($myVar <= 10) {
	echo $myVar . "\n";
	$myVar++;
}

/* ==========================================================================
do while loop
========================================================================== */

// same as while, but ensure it runs at least once
// even if expression doesn't pass
$myVar = 1;
do 
{
	echo $myVar . "\n";
	$myVar++;
} while ($myVar <= 0);
// this will still print out 1

?>
