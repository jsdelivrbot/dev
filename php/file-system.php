<?php
/* ==========================================================================
open files
========================================================================== */

//fopen(filename, mode, include_path, context)
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
// "b" (binary - optional on end like "a+b" and only for compatability with some systems. There to indicate that you intend to treat the contents of the file as not being text.)
// include_path Optional. Set this parameter to '1' if you want to search for the file in the include_path (in php.ini) as well
// context  Optional. Specifies the context of the file handle. Context is a set of options that can modify the behavior of a stream

// Check if the file can be opened
if ($fp = @fopen($filepath, FOPEN_READ)) {
	//file can be opened
}

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
creating a temp file
========================================================================== */

// make a temp file to write contents to right away
// tempnam(dir,prefix)
tempnam('/filepath/'. 'temp_');

//example
$temp = tempnam('/temp/', 'temp_');
$final = '/myfile.cache';

$fh = fopen($temp, 'r');
fwrite($fh, $data);
fclose($fh);

rename($temp, $final);
@chmod($final, 0666);

/* ==========================================================================
print temp directory
========================================================================== */

// print temp dir listed in php.ini
ini_get('upload_tmp_dir');
// print system default temp dir
sys_get_temp_dir();

/* ==========================================================================
lock file
========================================================================== */
//usually used for writting to a file without interruption (like with caching)

$path = '/myfile.txt'
$data = ['1', '2']

$fh = fopen($path, 'wb');
if (flock($fh, LOCK_EX)) {
	fwrite($fh, $data);
	flock($fh, LOCK_UN);
} else {
	log_message('error', "Unable to lock file at: ".$path);
}
fclose($fh);

//usually want to move it and change permissoin
rename($temp_path, $cache_path);
@chmod($cache_path, 0666);

/* ==========================================================================
reading from a file (opened from fopen)
========================================================================== */

$fileHandle = fopen('/tmp/php_essentials.txt', 'r')
 OR die ("Can't open file\n");

$fileData = fread($fileHandle, 1024);

echo "data = $fileData";

fclose($fileHandle);

/* ==========================================================================
go to beginning of file / truncate file
========================================================================== */

// go to the beginning opsition of the file
fseek($h,0); 

// truncate(cut's off) the file to a given length
ftruncate($h,0);

/* ==========================================================================
change file permissions
========================================================================== */

@chmod($cache_path, 0666);

/* ==========================================================================
common file permissions
========================================================================== */
// use the search to view permissions:
// http://www.filepermissions.com/

// readable files
0644
// readable/writable files
0666
// readable directories
0755
// readable/writable directories
0777

/* ==========================================================================
check / move / copy / rename / delete files
========================================================================== */

//check if a file exists (returns bool)
$fileExists = file_exists('/tmp/php_essentials.txt');

// copy a file to another location 
// (if file exists, it overrites it)
copy($file, $to_file);

//delete a file
unlink($file);
//to test unlink
if (!unlink($file)) {
  echo ("Error deleting $file");
} else {
  echo ("Deleted $file");
}

//move file
rename('/tmp/php_essentials.bak', '/tmp/php_essentials.old');
//won't overrite existing file on windows and produces an error. Workaround:
function rename_win($oldfile,$newfile) {
    if (!rename($oldfile,$newfile)) {
        if (copy ($oldfile,$newfile)) {
            unlink($oldfile);
            return TRUE;
        }
        return FALSE;
    }
    return TRUE;
}


// example usage:
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

//

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

/* ==========================================================================
pathinfo (for getting file name/info)
========================================================================== */

pathinfo($path, $options);

// get dirname only:
$ext = pathinfo($path, PATHINFO_DIRNAME);
// get filename only:
$ext = pathinfo($path, PATHINFO_FILENAME);
// get file extension:
$ext = pathinfo($path, PATHINFO_EXTENSION);
// get filename with extension:
$ext = pathinfo($path, PATHINFO_BASENAME);

// or get the parts of the file:
$filename = '/mydir/test.txt'
$parts = pathinfo($filename);

// returns:
// Array
// (
// [dirname] => /testweb
// [basename] => test.txt
// [extension] => txt
// )

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
$ok = @move_uploaded_file('path/'.$filename);
if ($ok) {
    // good to go
}

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
// upload file or zip file to it's own folder
========================================================================== */

// Get file data from form post response send to iframe
// then copied to input
$file = json_decode($this->input->post($field, true));
$file = $file->files->file_attachment;

$file_path = $path.'/uploads/';

if (!is_dir($file_path)) {
	mkdir($file_path, 0777, true);
}

$file_data = array(
	'temp_path' => $path.'tmp/',
	'file_path' => $file_path,
	'name' => $file->name,
	'filename' => $file->name,
	'tmp_name' => $file->tmp_name
);

// extract zip file to it's own directory
$new_file = $this->file->store_zip('directory', $course_id, $file_data);
// save file normally
$new_file = $this->file->store('file', $course_id, $file_data);



public function store($ref_src, $ref_id, $file_data)
{
	$parts = pathinfo($file_data['name']);

	// Rename file with _### or increment
	if (is_numeric(substr($parts['filename'], -3)) && substr($parts['filename'], -4, -3) === '_') {
		$new_name = $this->_incriment_file_name($parts['filename']);
	} else {
		$new_name = $parts['filename'].'_000';
	}

	$file_data['name'] = $new_name.'.'.$parts['extension'];

	// If file name exists, increment until unique
	if (is_file($file_data['file_path'].$new_name.'.'.$parts['extension'])) {
		$loop_file_name = $new_name;

		while (is_file($file_data['file_path'].$loop_file_name.'.'.$parts['extension'])) {
			$loop_file_name = $this->_incriment_file_name($loop_file_name);
		}

		$file_data['name'] = $loop_file_name.'.'.$parts['extension'];
	}

	// Save to db
	$file_id = $this->save(array(
		'ref_src' => $ref_src,
		'ref_id' => $ref_id,
		'name' => $file_data['name'],
		'filename' => $file_data['filename'],
		'filesize' => filesize($file_data['temp_path'].$file_data['tmp_name'])/1000,
		'created_on' => date('Y-m-d H:i:s')
	));

	// Move file
	if ($file_data['tmp_name']) {
		rename($file_data['temp_path'].$file_data['tmp_name'], $file_data['file_path'].$file_data['name']);
	}

	$result =  array('name' => $file_data['name']) ;
	
	return $result;
}

// --------------------------------------------------------------------

public function store_zip($ref_src, $ref_id, $file_data)
{
	$parts = pathinfo($file_data['name']);

	// Rename file with _### or increment
	if (is_numeric(substr($parts['filename'], -3)) && substr($parts['filename'], -4, -3) === '_') {
		$new_name = $this->_incriment_file_name($parts['filename']);
	} else {
		$new_name = $parts['filename'].'_000';
	}

	$new_name = strtolower($new_name);
	$file_data['directory'] = $new_name;

	// If dir exists, increment until unique
	if (is_dir($file_data['file_path'].$new_name)) {
		$loop_dir_name = $new_name;

		while (is_dir($file_data['file_path'].$loop_dir_name)) {
			$loop_dir_name = $this->_incriment_file_name($loop_dir_name);
		}
		
		$file_data['directory'] = $loop_dir_name;
	}

	// Save to db
	$file_id = $this->save(array(
		'ref_src' => $ref_src,
		'ref_id' => $ref_id,
		'name' => $file_data['directory'],
		'filename' => $file_data['filename'],
		'filesize' => filesize($file_data['temp_path'].$file_data['tmp_name'])/1000,
		'created_on' => date('Y-m-d H:i:s')
	));

	// Move file
	if ($file_data['tmp_name']) {
		$new_dir = $file_data['file_path'].$file_data['directory'];
		if (! is_dir($new_dir)) {
			mkdir($new_dir, 0777, true);
			$new_file = $new_dir.'/'.$file_data['name'];
			rename($file_data['temp_path'].$file_data['tmp_name'], $new_file);
			//Unzip into the new dir
			$zip = new ZipArchive;
			$res = $zip->open($new_file);
			if ($res === TRUE) {
			  $zip->extractTo($new_dir.'/');
			  $zip->close();
			}
		}
	}

	$result = array('name' => $file_data['name'], 'directory' => $file_data['directory']) ;
	
	return $result;
}

// --------------------------------------------------------------------

private function _incriment_file_name($file_name) 
{
	$counter = substr($file_name, -3) + 1;
	$counter = str_pad($counter, 3, '0', STR_PAD_LEFT);
	return substr($file_name, 0, -3).$counter;
}

/* ==========================================================================
// to download
========================================================================== */

// this is a controller hit via url like:
//	https://site.com/download/file/f9de8244ded95c6128de7b7c6420f4c9
// (hash is stored in the db table for the file)

public function download($id = null)
{
	$mimes = array(
			'png'=>'image/png',
			'jpg'=>'image/jpeg',
			'jpeg'=>'image/jpeg',
			'pjpeg'=>'image/jpeg',
			'gif'=>'image/gif',
			'pdf'=>'application/pdf',
			'doc'=>'application/msword',
			'docx'=>'application/msword',
			'xls'=>'application/msexcel',
			'xlsx'=>'application/msexcel',
			'txt'=>'text/plain',
			'xml'=>'text/xml',
			'csv'=>'text/csv'
	);


	header("Cache-Control: no-cache, must-revalidate");
	header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");

	include(APPPATH.'config/mimes.php');

	if ($file = $this->files->find_by_hash($id)) {
		$ext = pathinfo(strtolower($file->filename), PATHINFO_EXTENSION);

		if (array_key_exists($ext, $mimes)) {
			header('Content-type: '.(is_array($mimes[$ext]) ? reset($mimes[$ext]) : $mimes[$ext]));
		}

		header('Content-Disposition: attachment; filename="'.$file->filename.'"');
		readfile('filepath/'.$file->id.'.'.$ext);
	}
}


public function find_by_hash($hash, $options = array())
{
	return $this->files->where('hash', $hash)->get();
}

/* ==========================================================================
// sanitize file names
========================================================================== */

// simple sanitize (lowercase, replace speces with underscores, etc.)
$string = 'Acc Inj eBase  - Storyline 122output.zip';
$string = strtolower(preg_replace(array('/\s/', '/\.[\.]+/', '/[^\w_\.\-]/'), array('_', '.', ''), $string));


//wordpress's
function sanitize_file_name( $filename ) 
{ 
    $filename_raw = $filename;
    $special_chars = array("?", "[", "]", "/", "\\", "=", "<", ">", ":", ";", ",", "'", "\"", "&", "$", "#", "*", "(", ")", "|", "~", "`", "!", "{", "}");
    $special_chars = apply_filters('sanitize_file_name_chars', $special_chars, $filename_raw);
    $filename = str_replace($special_chars, '', $filename);
    $filename = preg_replace('/[\s-]+/', '-', $filename);
    $filename = trim($filename, '.-_');
    return apply_filters('sanitize_file_name', $filename, $filename_raw);
}

/* ==========================================================================
// clean up/delete unused files
========================================================================== */
// if the files in the database are deleted, move the unused physical files to a 'deleted' directory

public function cleanup_files($article_id)
{
	$path = '/uploads';

	if (!is_dir($path.'/deleted')) {
		mkdir($path.$delete_dir.'/deleted', 0777, true);
	}

	// Get all existing files
	$files = $this->db
			->select('*')
			->from('files')
			->where('ref_id', $article_id)
			->where('deleted_at', null)
			->get()
			->result();

	// Get files that were in the article
	$article_files = $this->articles->find_all(array('article_id' => $article_id, 'files_only' => true));
	
	$delete_files = array_diff($article_files, $files);

	if (!empty($delete_files)) {
		foreach ($delete_files as $delete_file) {
			$this->db
			->where('name', $delete_file)
			->where('ref_id', $article_id)
			->update('files', array('deleted_at' => date('Y-m-d H:i:s')));

			if (is_file($path.$type.'/deleted/'.$delete_file))	{
				// if deleted file already exists, increment it
				rename($path.$type.'/'.$delete_file, $path.$type.'/deleted/'.(pathinfo($delete_file, PATHINFO_FILENAME )).'_'.$article_id.'.'.(pathinfo($delete_file, PATHINFO_EXTENSION)));
			} else {
				rename($path.$type.'/'.$delete_file, $path.$type.'/deleted/'.$delete_file);
			}
		}
	}
}

/* ==========================================================================
get image size
========================================================================== */

getimagesize()//returns an array with the image size info
//Index 0 and 1 contains respectively the width and the height of the image.
list();
list($width, $height) = getimagesize($file_name);

/* ==========================================================================
get last modified time of a file
========================================================================== */

filemtime($filename)

