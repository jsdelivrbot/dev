<?php
// file caching class probably use for sql queries

/* ==========================================================================
// Cache class
========================================================================== */

class Cache
{
	// This is the function you store information with
	public function store($key, $data, $ttl)
	{
		$file_path = $this->getFileName($key);

	    // Opening the file in truncate mode
		if (! $fh = @fopen($file_path, 'w')) {
			throw new Exception('Could not write to cache');
		}

		// Exclusive lock (writer) - released when file is closed
		if (flock($fh, LOCK_EX)) {
		    // Serializing along with the TTL
			$data = serialize(array(time()+$ttl, $data));
			if (fwrite($fh, $data) === false) {
				throw new Exception('Could not write to cache');
			}
		} else {
			throw new Exception('Cache was unable to lock file at: '.$file_path);
			return;
		}

		fclose($fh);
	}

	// The function to fetch data returns false on failure
	public function fetch($key)
	{
		$file_path = $this->getFileName($key);
		if (! file_exists($filename) || !is_readable($filename)) {
			return false;
		}

		if (! $fh = @fopen($file_path, 'r')) {
			return false;
		}

		// shared lock (reader)
		flock($fh, LOCK_SH);
		$data = file_get_contents($file_path);
		fclose($fh);

		if (! $data = @unserialize($data)) {
			// Unlinking the file when unserializing failed
			unlink($file_path);
			return false;
		}

		// checking if the data was expired
		if (time() > $data[0]) {
			// Unlinking
			unlink($file_path);
			return false;
		}

		return $data[1];
	}

	public function delete($key)
	{
		$filename = $this->getFileName($key);
	    
		if (file_exists($filename)) {
			return unlink($filename);
		} else {
			return false;
		}
	}

	// General function to find the filename for a certain key
	private function getFileName($key)
	{
		return '/tmp/s_cache'.md5($key);
	}
}

/* ==========================================================================
// usage (with mysql query)
========================================================================== */

function getUsers()
{
	$cache = new Cache();

	// A somewhat unique key (use the class name in it)
	$key = 'getUsers:selectAll';

	// check if the data is not in the cache already
	if (! $data = $cache->fetch($key)) {
	   // there was no cache version, get fresh data
	   $data = $this->users->get_all();

	   // Storing the data in the cache for 10 minutes
	   $cache->store($key, $data, 600);
	}

	return $data;
}

/* ==========================================================================
// HTML page caching (using above class)
========================================================================== */

<?php
	$cache = new Cache();
	$key = 'pageid_unique_key';

	// check if the data is in the cache already
	if ($data = $cache->fetch($key)) {
		//include($cachefile);
		readfile($cachefile);
	 	exit;
	}

	// start output buffering (render page and capture the html)
	ob_start();
?>

<html>
	output all your html here.
</html>

<?php
	// Save the cached content to a file (10 minutes lifespan)
	$cache->store($key, ob_get_contents(), 600);
	// send output to browser and turn off buffering
	ob_end_flush();
?>

/* ==========================================================================
// OPcache is a drop-in replacement for APC that runs on PHP 5.5 and later versions
========================================================================== */

// For PHP 5.5 and above, Zend OpCache is compiled as a shared extension by default unless you specify 
// --disable-all when configuring. To explicitly enable it, you must specify 
// --enable-opcache
