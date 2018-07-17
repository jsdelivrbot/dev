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
    // usually used for moving files
    // Attempts to rename oldname to newname, moving it between directories if necessary 
    // * The wrapper used in oldname must match the wrapper used in newname.
    rename('/tmp/php_essentials.bak', '/tmp/php_essentials.old');
    // Delete the file
    unlink('/tmp/php_essentials.old'); 
}

//test unlink
if (!unlink($file)) {
  echo ("Error deleting $file");
} else {
  echo ("Deleted $file");
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

//making a dir
//create directory
$result = mkdir ("/path/to/directory", "0777");
//example:
$path = .'/temp/';
if (! file_exists($path)) {
    mkdir($path, 0777, true);
}

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

/* ==========================================================================
reading from a file
========================================================================== */

// Reads entire file into a string
// use with 'php://input' to get raw post data
file_get_contents();

pathinfo($path, $options);

// returns:
// Array
// (
// [dirname] => /testweb
// [basename] => test.txt
// [extension] => txt
// )

// Possible second parameter values:

// PATHINFO_DIRNAME - return only dirname
// PATHINFO_BASENAME - return only basename
// PATHINFO_EXTENSION - return only extension

/* ==========================================================================
Move uploaded file
========================================================================== */

// move_uploaded_file — Moves an uploaded file to a new location 
// This function checks to ensure that the file designated by filename is a valid upload file (meaning that it was uploaded via PHP's HTTP POST upload mechanism). If the file is valid, it will be moved to the filename given by destination. 

$uploads_dir = '/uploads';
foreach ($_FILES["pictures"]["error"] as $key => $error) {
    if ($error == UPLOAD_ERR_OK) {
        $tmp_name = $_FILES["pictures"]["tmp_name"][$key];
        // basename() may prevent filesystem traversal attacks;
        // further validation/sanitation of the filename may be appropriate
        $name = basename($_FILES["pictures"]["name"][$key]);
        move_uploaded_file($tmp_name, "$uploads_dir/$name");
    }
}

//can also use like:
$filename = pathinfo('filename', PATHINFO_FILENAME);
move_uploaded_file('path/'.$filename);

/* ==========================================================================
Is uploaded file
========================================================================== */

// is_uploaded_file — Tells whether the file was uploaded via HTTP POST 
if (is_uploaded_file($_FILES['userfile']['tmp_name'])) {
   echo "File ". $_FILES['userfile']['name'] ." uploaded successfully.\n";
   echo "Displaying contents\n";
   readfile($_FILES['userfile']['tmp_name']);
} else {
   echo "Possible file upload attack: ";
   echo "filename '". $_FILES['userfile']['tmp_name'] . "'.";
}

/* ==========================================================================
sha1 hash file
========================================================================== */

// sha1_file — Calculate the sha1 hash of a file 
foreach(glob('/home/Kalle/myproject/*.php') as $ent)
{
    if(is_dir($ent))
    {
        continue;
    }

    echo $ent . ' (SHA1: ' . sha1_file($ent) . ')', PHP_EOL;
}

/* ==========================================================================
check if is a file
========================================================================== */

//Returns TRUE if the filename exists and is a regular file, FALSE otherwise.
is_file('/usr/bin/a_file.txt')

/* ==========================================================================
file upload example
========================================================================== */

//http://php.net/manual/en/features.file-upload.php

header('Content-Type: text/plain; charset=utf-8');

try {
    
    // Undefined | Multiple Files | $_FILES Corruption Attack
    // If this request falls under any of them, treat it invalid.
    if (
        !isset($_FILES['upfile']['error']) ||
        is_array($_FILES['upfile']['error'])
    ) {
        throw new RuntimeException('Invalid parameters.');
    }

    // Check $_FILES['upfile']['error'] value.
    switch ($_FILES['upfile']['error']) {
        case UPLOAD_ERR_OK:
            break;
        case UPLOAD_ERR_NO_FILE:
            throw new RuntimeException('No file sent.');
        case UPLOAD_ERR_INI_SIZE:
        case UPLOAD_ERR_FORM_SIZE:
            throw new RuntimeException('Exceeded filesize limit.');
        default:
            throw new RuntimeException('Unknown errors.');
    }

    // You should also check filesize here. 
    if ($_FILES['upfile']['size'] > 1000000) {
        throw new RuntimeException('Exceeded filesize limit.');
    }

    // DO NOT TRUST $_FILES['upfile']['mime'] VALUE !!
    // Check MIME Type by yourself.
    $finfo = new finfo(FILEINFO_MIME_TYPE);
    if (false === $ext = array_search(
        $finfo->file($_FILES['upfile']['tmp_name']),
        array(
            'jpg' => 'image/jpeg',
            'png' => 'image/png',
            'gif' => 'image/gif',
        ),
        true
    )) {
        throw new RuntimeException('Invalid file format.');
    }

    // You should name it uniquely.
    // DO NOT USE $_FILES['upfile']['name'] WITHOUT ANY VALIDATION !!
    // On this example, obtain safe unique name from its binary data.
    if (!move_uploaded_file(
        $_FILES['upfile']['tmp_name'],
        sprintf('./uploads/%s.%s',
            sha1_file($_FILES['upfile']['tmp_name']),
            $ext
        )
    )) {
        throw new RuntimeException('Failed to move uploaded file.');
    }

    echo 'File is uploaded successfully.';

} catch (RuntimeException $e) {

    echo $e->getMessage();

}

/* ==========================================================================
get image size
========================================================================== */

getimagesize()//returns an array with the image size info
//Index 0 and 1 contains respectively the width and the height of the image.
list();
list($width, $height) = getimagesize($file_name);

