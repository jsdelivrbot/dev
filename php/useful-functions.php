<?php

/* ==========================================================================
// updating images (comparing new ones with existing ones and updating accordingly)
========================================================================== */

$files_to_update = array(
	(object) array('id' => '4', 'file_data' => 'some_data1'),
	(object) array('id' => '4', 'file_data' => 'some_data2'),
	(object) array('file_data' => 'some_data3'),
);

$existing_files = array();
$new_files = array();

foreach ($files_to_update as $file) {
	if (property_exists($file, 'id')) {
		$existing_files[] = $file->id;
	} else {
		$new_files[] = $file;
	}
}

foreach ($images_in_db as $file) {
	if (! in_array($file->id, $existing_files)) {
		$this->images->remove_from_job($file->id);
	}
}

if ($new_files) {
	add_neww_files($new_files);
}