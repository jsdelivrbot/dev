<?php

/* ==========================================================================
get JSON data from the request
========================================================================== */

// file_get_contents — Reads entire file into a string
// php://input allows you to read raw POST data. 
file_get_contents('php://input');

// Takes a JSON encoded string and converts it into a PHP variable. 
json_decode($rawjason, true);

/* ==========================================================================
give a response to a get request using JSON
========================================================================== */

$data = array(
	array('id' => '1', 'name' => 'Ben', 'city' => 'St. Catharines'),
	array('id' => '2', 'name' => 'Angela', 'city' => 'St. Catharines'),
	array('id' => '3', 'name' => 'Jaime', 'city' => 'St. Catharines'),
);
echo json_encode($data);

// might need to use
// htmlspecialchars(json_encode($json_array), ENT_QUOTES, 'UTF-8');
// also this before sending the JSON
// header('Content-Type: application/json')

//note for json encode:
//json_encode will only encode your PHP array as a JSON array if 
//your PHP array is sequential - that is, if its keys are 0, 1, 2, 3, ...
//otherwise it will wrap it as an object instead.
