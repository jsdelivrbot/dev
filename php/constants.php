<?php 
/* ==========================================================================
majic constants
========================================================================== */

//current line number
__LINE__

//the name of the file or include which contains the currently executing line of PHP code.
__FILE__

//return a parent directory path
dirname(__FILE__)
//in php 5.5 this works the same:
__DIR__

//the name of the PHP function which is currently executing
__FUNCTION__

//the class which is currently in use
__CLASS__

//the name of the method in the current class which is currently executing
__METHOD__

//namespace
__NAMESPACE__

//The default path where PHP looks for include files
DEFAULT_INCLUDE_PATH

/* ==========================================================================
defining constants
========================================================================== */

//constants are defined different than regular variables
//preferred:
const ROOT_URL = '/1pix_app/';
//or
define('INCHES_PER_YARD', 36);

//to check if it's defined
if (defined('INCHES_PER_YARD')) {
	echo 'inches per yard is defined';
}

?>

