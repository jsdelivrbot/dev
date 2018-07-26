/* ==========================================================================
database migrations
========================================================================== */


/* ==========================================================================
create column
========================================================================== */

public function create_column() {
	$table = 'table_name';
	$new_column = 'column_name';
	if (! $this->db->field_exists($new_column, $table)) {
		$this->db->query('ALTER TABLE '.$table.' ADD COLUMN '.$new_column.' datetime NULL');

		echo '<p>'.$table.' columns: '.$new_column.' created</p>';
	} else {
		echo '<p>'.$table.' columns: '.$new_column.' already exist</p>';
	}
}

/* ==========================================================================
create table
========================================================================== */

public function create_table() {
	$table = 'table_name';
	if (! $this->db->table_exists($table)) {
		$this->db->query(
			'CREATE TABLE IF NOT EXISTS '.$table.' (
				`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
				`foreign_id` INT(10) UNSIGNED NOT NULL,
				`name` varchar(100) DEFAULT NULL,
				`ref_type` enum("option_one","option_two") NOT NULL,
				`true_or_false` INT(1) UNSIGNED NULL DEFAULT 0,
				`created_at` DATETIME NULL,
				`deleted_at` DATETIME NULL,
				PRIMARY KEY (`id`)
			)'
		);
		echo '<p>'.$table.' table created<p/>';
	} else {
		echo '<p>'.$table.' table already exist</p>';
	}
}

/* ==========================================================================
create a join table
========================================================================== */

public function create_join_table() {
	$table = 'table_name';
	if (! $this->db->table_exists($table)) {
		$this->db->query('
			CREATE TABLE
			IF NOT EXISTS '.$table.' (
				`apples_id` INT UNSIGNED NOT NULL,
				`oranges_id` INT UNSIGNED NOT NULL,
				PRIMARY KEY (
					`apples_id`,
					`oranges_id`
				)
			)
		');

		echo '<p>'.$table.' table created</p>';		
	} else {
		echo '<p>'.$table.' table already exist</p>';
	}
}

/* ==========================================================================
insert or update row
========================================================================== */

$q = $this->db->from('users')->where('id',$id)->get();

$data = array(
        'title' => 'My title',
        'name' => 'My Name',
        'date' => 'My date'
);

if ( $q->num_rows() > 0 ) {
	//update
  	$this->db->where('id',$id)->update('my_table',$data);
} else {
	//insert
 	$this->db->insert('my_table', $data);
}


/* ==========================================================================
add another enum to existing col
========================================================================== */

public function add_enum_type()
{
	$table = 'my_table';
	$column = 'culumn_to_alter';
	$new_enum_types = '"type1","type2","type3"';
	$default_type = '"type1"';

	$result = $this->db->query('SHOW COLUMNS FROM '.$table.' LIKE "'.$column.'"')->result();
	if (! ($result[0]->Type === 'enum('.$new_enum_types.')')) {
		$this->db->query('ALTER TABLE '.$table.' CHANGE '.$column.' '.$column.' ENUM('.$new_enum_types.') DEFAULT '.$default_type);
		echo '<p>+ new enum types: '.$new_enum_types.' add for table '.$table.'</p>';
	} else {
		echo '<p># enum types '.$new_enum_types.' for table '.$table.' already exist</p>';
	}
}


/* ==========================================================================
check for missing folders. If missing, create them
========================================================================== */

//check upload folders are in place. If not, create them.
echo '<p>Checking upload folders...</p>';

$folders = [
	'folder1',
	'folder1/folder2'
];

$path = $_SERVER["DOCUMENT_ROOT"].'/uploads/';

foreach ($folders as $folder) {
	if(is_dir($path.$folder))
	  {
	  echo ('<p>'.$path.$folder.'<br>is a directory</p>');
	  }
	else
	  {
	  mkdir($path.$folder);
	  echo ('<p>'.$path.$folder.'<br>is not a directory. Directory created.</p>');

	  }
}

echo '<p>Done.</p>';



// get the absolute path to $file $path = pathinfo(realpath($file), PATHINFO_DIRNAME);

Zip:
$zip = new ZipArchive; $res = $zip->open('file.zip'); if ($res === TRUE) { $zip->extractTo('/myzips/extract_path/'); $zip->close(); echo 'woot!'; } else { echo 'doh!'; }

