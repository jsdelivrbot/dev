<?php
/* ==========================================================================
//std class
========================================================================== */

// std classes are simple objects (like in js)

//use
$page = new stdClass();
$page->name = 'Home';
$page->status = 1;
//or commonly convert an array to an object to create one
$obj = (object) array('1' => 'foo');


/* ==========================================================================
// convert an object to an array
========================================================================== */

get_object_vars($object)