<?php
// This could be supplied by a user, for example
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

// Check result
// This shows the actual query sent to MySQL, and the error. Useful for debugging.
if (!$result) {
    $message  = 'Invalid query: ' . mysql_error() . "\n";
    $message .= 'Whole query: ' . $query;
    die($message);
}

// Use result
// Attempting to print $result won't allow access to information in the resource
// One of the mysql result functions must be used
// See also mysql_result(), mysql_fetch_array(), mysql_fetch_row(), etc.
while ($row = mysql_fetch_assoc($result)) {
    echo $row['firstname'];
    echo $row['lastname'];
    echo $row['address'];
    echo $row['age'];
}

// Free the resources associated with the result set
// This is done automatically at the end of the script
mysql_free_result($result);


//handle IN statements that have no values
'IN ('.implode(',', $ids ?: array('FALSE')).')'
//or
'IN ('.implode(',', $ids ?: array(0)).')'
//if in a function can also do this first
if (! is_array($ids)) {
    $ids = explode(',', array_filter($ids));
}

/* ==========================================================================
store objects in db
========================================================================== */

$person = ['name' => 'Bob', 'age' => '30'];
$serializedObj = serialize($person);
//insert into the database...
$this->db->insert($serializedObj);
//will look something like this:
//O:6:"Person":2:{s:4:"name";s:8:"Bob";s:9:"*age";s:4:"30";}

//unserialize to read it back
$unSerializedObj = unserialize($this->db->read($some_id));

?>