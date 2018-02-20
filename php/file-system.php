<?php 

/* ==========================================================================
open files
========================================================================== */

//fopen(filename,mode,include_path,context)
$file = fopen("test.txt","r");
$file = fopen("/home/test/test.txt","r");
$file = fopen("/home/test/test.gif","wb");
$file = fopen("http://www.example.com/","r");
$file = fopen("ftp://user:password@example.com/test.txt","w");

// filename:    
//Required. Specifies the file or URL to open

// mode:    
//Required. Specifies the type of access you require to the file/stream.

// Possible values:

// "r" (Read only. Starts at the beginning of the file)
// "r+" (Read/Write. Starts at the beginning of the file)
// "w" (Write only. Opens and clears the contents of file; or creates a new file if it doesn't exist)
// "w+" (Read/Write. Opens and clears the contents of file; or creates a new file if it doesn't exist)
// "a" (Write only. Opens and writes to the end of the file or creates a new file if it doesn't exist)
// "a+" (Read/Write. Preserves file content by writing to the end of the file)
// "x" (Write only. Creates a new file. Returns FALSE and an error if file already exists)
// "x+" (Read/Write. Creates a new file. Returns FALSE and an error if file already exists)
// include_path Optional. Set this parameter to '1' if you want to search for the file in the include_path (in php.ini) as well
// context  Optional. Specifies the context of the file handle. Context is a set of options that can modify the behavior of a stream

/* ==========================================================================
close files (opened from fopen)
========================================================================== */

$fileHandle = fopen('/tmp/php_essentials.txt', 'w+')
 OR die ("Can't open file\n");

fclose ($fileHandle);

/* ==========================================================================
writting to a file (opened from fopen)
========================================================================== */

$fileHandle = fopen('/tmp/php_essentials.txt', 'w+')
 OR die ("Can't open file\n");

$result = fwrite($fileHandle, "This line of text was written by PHP\n");

if ($result)
{
     echo "Data written successfully.<br>";
} else {
     echo "Data write failed.<br>";
}

fclose($fileHandle);

/* ==========================================================================
reading from a file (opened from fopen)
========================================================================== */

$fileHandle = fopen('/tmp/php_essentials.txt', 'r')
 OR die ("Can't open file\n");

$fileData = fread($fileHandle, 1024);

echo "data = $fileData";

fclose($fileHandle);

/* ==========================================================================
check if file exists
========================================================================== */

//check if a file exists (returns bool)
$fileExists = file_exists('/tmp/php_essentials.txt');

/* ==========================================================================
move / rename / delete files
========================================================================== */

if (file_exists('/tmp/php_essentials.txt'))
{
    // Copy the file
    copy('/tmp/php_essentials.txt', '/tmp/php_essentials.bak'); 
    // Rename the file
    rename('/tmp/php_essentials.bak', '/tmp/php_essentials.old');
    // Delete the file
    unlink('/tmp/php_essentials.old'); 
}

/* ==========================================================================
accessing file attributes
========================================================================== */

//get file info using stat
//returs and associative array
stat('/tmp/php_essentials.txt');

//get file info using fstat
//returs and associative array
$fileHandle = fopen('/tmp/php_essentials.txt', 'r')
 OR die ("Can't open file\n");
fstat($fileHandle);

/* ==========================================================================
output buffering
========================================================================== */

//used when output to user is delayed. Like when gathering db data.
//content that would normally be sent directly to the output stream 
//is initially held in a buffer until the buffer is flushed
//provides control over when output is presented to user

ob_start(); //start buffering

echo "This content will be buffered";   // write some content to the buffer

ob_end_flush(); // flush the output from the buffer

//note the below can be used to inspect the contents of the buffer
//at any time
ob_get_contents();


/* ==========================================================================
glob
========================================================================== */

// get all php files
$files = glob('*.php');
 
print_r($files);
/* output looks like:
Array
(
    [0] => phptest.php
    [1] => pi.php
    [2] => post_output.php
    [3] => test.php
)
*/

// get all php files AND txt files
$files = glob('*.{php,txt}', GLOB_BRACE);
 
print_r($files);
/* output looks like:
Array
(
    [0] => phptest.php
    [1] => pi.php
    [2] => post_output.php
    [3] => test.php
    [4] => log.txt
    [5] => test.txt
)
*/

/* ==========================================================================
directories
========================================================================== */

//create directory
$result = mkdir ("/path/to/directory", "0777");

//delete a directory
rmdir("/path/to/directory");

//get current working directory
$current_dir = getCwd();
echo "Current directory is $current_dir";

//change current working directory
$current_dir = getCwd();
echo "Current directory is $current_dir <br>";
chdir ("/tmp");
$current_dir = getCwd();
echo "Current directory is now $current_dir <br>";

//list files in a directory
//scandir(<path-to-directory>, <sort-options>)
//sort options:
//1 the listing is sorted reverse-alphabetically
//If the argument is omitted or set to 0 the list is sorted alphabetically
chdir ("/tmp");
$current_dir = getCwd();
echo "Current directory is now $current_dir";
$array = scandir(".", 1);
print_r($array);

?>
