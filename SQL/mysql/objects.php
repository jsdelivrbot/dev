<?php

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