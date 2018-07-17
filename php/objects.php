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

//sort object array alphabitically revised:
usort($users, function ($a, $b) {
	if (isset($a->first_name) && isset($b->first_name)) {
		return strcasecmp($a->first_name, $b->first_name);
	} else {
		return 0;
	}
});

/* ==========================================================================
// sort an array alphabetically
========================================================================== */

//sort by two properties (first name, then last name)
usort($users, function ($a, $b) {
	if (isset($a->first_name) && isset($b->first_name)) {
		if ($a->first_name == $b->first_name) {
			return strcasecmp($a->last_name, $b->last_name);
		}
		return strcasecmp($a->first_name, $b->first_name);
	} else {
		return 0;
	}
});
