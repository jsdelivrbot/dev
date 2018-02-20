<?php

//string sprintf ( string $format [, mixed $args [, mixed $... ]] )

//example:

$firstname = 'fred';
$lastname  = 'fox';

// Formulate Query
// This is the best way to perform an SQL query
// For more examples, see mysql_real_escape_string()
$query = sprintf("SELECT firstname, lastname, address, age FROM friends 
    WHERE firstname='%s' AND lastname='%s'",
    mysql_real_escape_string($firstname),
    mysql_real_escape_string($lastname));

// Perform Query
$result = mysql_query($query);

//---------------------------------------------

//argument swapping
$num = 5;
$location = 'tree';

$format = 'There are %d monkeys in the %s';
echo sprintf($format, $num, $location);

//---------------------------------------------

//argument swapping
$format = 'The %2$s contains %1$d monkeys';
echo sprintf($format, $num, $location);
?>