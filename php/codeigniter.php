
<?php

/* ==========================================================================
// load models
========================================================================== */

$this->load->model('model_name', 'variable_name');
//then access if via: $variable_name

/* ==========================================================================
// load view
========================================================================== */

$this->load->view('folder/view_file', array(
		'data1'=>'some value',
		//...
));

/* ==========================================================================
// db operations
========================================================================== */

// get the result
// returns the query result as an array of objects, or an empty array on failure. 
// Typically you’ll use this in a foreach loop, like this
$query = $this->db->query("YOUR QUERY");
foreach ($query->result() as $row)
{
        echo $row->title;
        echo $row->name;
        echo $row->body;
}
result();

// --------------------------------------------------------------------

// get()
// Runs the selection query and returns the result. 
// Can be used by itself to retrieve all records from a table
// it's like a short form of $this->db->query
// need to use this if you're not using $this->db->query();
// basically this turns re-orders all your clausees and turns it into a
// formatted query
$query = $this->db->get('mytable');
foreach ($query->result() as $row)
{
        echo $row->title;
}
// optional second and third parameters enable you to set a limit and offset clause:
$query = $this->db->get('mytable', 10, 20);

// --------------------------------------------------------------------

// get the single result row.
// same as result() but it returns the first single row
// optional parameters for row number and row class name
$query = $this->db->query("YOUR QUERY");
$row = $query->row();
if (isset($row))
{
        echo $row->title;
        echo $row->name;
        echo $row->body;
}

// --------------------------------------------------------------------

//join
$data = $this->db
	->select('id')
	->from('table_a a')
	->join('table_b b', 'b.id=a.b_id', 'inner')
	->group_by('a.id')
	->get()
	->result();

// --------------------------------------------------------------------

//where
$this->db
	->where('a.id = 3');
	//or pass in values to test this way:
	->where('a.id', 3, false);
// or_where (for or statements)
$this->db
	->or_where('a.id != 3')
	->or_where('a.id != 4');

//use of where:

// --------------------------------------------------------------------

//insert
$data = array(
    'title' => 'My title',
    'name' => 'My Name',
    'date' => 'My date'
);

$this->db->insert('mytable', $data);

// --------------------------------------------------------------------

//update
$data = array(
        'title' => $title,
        'name' => $name,
        'date' => $date
);

$this->db->update('mytable', $data);

// offset with limit
// Produces: LIMIT 20, 10 
// (in MySQL.  Other databases have slightly different syntax)
$this->db->limit(10, 20);

// --------------------------------------------------------------------

//delete/remove and entry
$this->db->where('id', $id)->delete('table_name');

// --------------------------------------------------------------------

//check if column exists
$this->db->field_exists('column_name', 'table_name');

/* ==========================================================================
// query bindings/prepared statements
========================================================================== */

// ? are the bind parameters, the second argument array binds values to them
$this->db->query("SELECT * FROM some_table WHERE id = ? AND status = ? AND author = ?", array(3, 'live', 'Rick'));

/* ==========================================================================
// helpful db queries
========================================================================== */

//select within two months
$this->drivers->where('MONTH(date_col) = '.date('m').' OR MONTH(date_col) = '.(date('m')+1).' AND YEAR(date_col) = '.date('y'));

//get date within month of today
date('M d, Y', strtotime($date_time.' -1 month'));
//get date of first day of the current month
date('Y-m-01');
//get the date of the last day of current month
date('Y-m-t');

//joing up where clause using $this->db->query
// --------------------------------------------------------------------

$where_list = array();
$where = ''

$where_list[] = '1=1'
$where_list[] = '2=2'

if (! emplty($where_list)) {
	$where = 'WHERE '.implode($where_list, ' AND ');
}

$result = $this->db->query("
	SELECT * FROM my_table
	{$where}
");

// doing a union codeigniter equivalent
// --------------------------------------------------------------------

// Query #1
$this->db->select('title, content, date');
$this->db->from('mytable1');
$query1 = $this->db->get()->result();

// Query #2
$this->db->select('title, content, date');
$this->db->from('mytable2');
$query2 = $this->db->get()->result();

// Merge both query results
$query = array_merge($query1, $query2);


/* ==========================================================================
// session
========================================================================== */

//setting session data
$newdata = array(
        'username'  => 'johndoe',
        'email'     => 'johndoe@some-site.com',
        'logged_in' => TRUE
);

$this->session->set_userdata($array);
//or also supports this syntax
$this->session->set_userdata('some_name', 'some_value');
//retreiving the session data
$this->session->userdata('item');

/* ==========================================================================
// flashdata
========================================================================== */

// flashdata is session data that will only be available for the next request, and is then automatically cleared.

//set
$this->session->set_flashdata('item', 'value');

//retreive
$this->session->flashdata('item');

/* ==========================================================================
// html elements
========================================================================== */

anchor('segment1/segment2/'.$slug, $display_text, 'rel="my-attrib"');
//or for multiple attributes:
anchor('fleet/view/'.$slug, $display_text, array('rel' => 'rel="my-attrib', 'target' => '_blank'));

/* ==========================================================================
// POST, GET, COOKIE or SERVER items
========================================================================== */

// like ($_POST['something']) but will return null if not set so you can use it without isset().
$this->input->post();
$this->input->get();
$this->input->cookie();
$this->input->server();

//use like:
if ($this->input->post('btnCancel')) ...;

/* ==========================================================================
// form validation
========================================================================== */

//set validation rules
$this->form_validation->set_rules(array(
		array('field'=>'txtSubject', 'label'=>'Subject', 'rules'=>'trim|required'),
		array('field'=>'txtDescription', 'label'=>'Description', 'rules'=>'numeric'))
);

//run the validation. If valid ...
if ($this->form_validation->run()) {
	//gather date from the post array
	$data = array(
			'subject' => set_value('txtSubject'),
			'description' => set_value('txtDescription'),
	);

	//send to db query
	$this->db->save($data, $id);
}

//in the html it would be something like:
?>
<textarea name="txtDescription" id="txtDescription" rows="6">
<?php echo set_value( "txtDescription", ($project) ? $project->description : '' )?>
</textarea>
<?php

/* ==========================================================================
// setting custom validation errors
========================================================================== */

// through codeigniter (callback)
$this->form_validation->set_rules(array(
		array('field'=>'txtFile', 'label'=>'Video File', 'rules'=>'trim|callback__validate_file')
	)
);

public function _validate_file($str)
{
	if ($str == 'foo') {
		return true;
	} else {
		// also set a custom validation message
		$this->form_validation->set_message('_validate_file', 'My custom message');
		return false;
	}
}

// To execute a script on validation:
$this->form_validation->set_message('_validate_file', '<script>execute a script...</script>My error message');

// or manually
// --------------------------------------------------------------------

// setting custom validation errors
$this->viewdata['custom_msg'] = 'My custom err msg';
// then in view:
?>
<dd class="end-row"><?php echo form_error( "selClass" ) ? $class_required_msg : ''; ?></dd>
<?php


/* ==========================================================================
// forms
========================================================================== */

?>


<?=form_open('projectsplus/set_highlight', array('class'=>'clearfix'))?>

<?php
$data = array(
        'type'  => 'hidden',
        'name'  => 'email',
        'id'    => 'hiddenemail',
        'value' => 'john@example.com',
        'class' => 'hiddenemail'
        //'readonly' => 'readonly'
);
?>

<?=form_input($data)?>

<?=form_submit('btnForecastHighlightButton', 'Apply', 'class="button no-icon"')?>

<?=form_close()?>

<?php

/* ==========================================================================
// loading additional config files
========================================================================== */

//load in the config file
$this->config->load('filename');

//use the config item
$config_item = $this->config->item('item_name');

//in your config file you'd define it like:
$config['item_name'] = array(0, 1, 2);

//if you need the entire config array:
CI::$APP->config->config

/* ==========================================================================
// resize images
========================================================================== */

$config['image_library'] = 'gd2';
$config['source_image'] = '/path/to/image/mypic.jpg';
$config['create_thumb'] = TRUE;
$config['maintain_ratio'] = TRUE;
$config['width']         = 75;
$config['height']       = 50;

$this->load->library('image_lib', $config);

$this->image_lib->resize();

/* ==========================================================================
// debugging
========================================================================== */

//show last query
$this->db->last_query();

//query profiler
$this->output->enable_profiler(true);

/* ==========================================================================
// get the id of the last inserted item
========================================================================== */

$new_id = $this->db->insert_id();

/* ==========================================================================
// send email
========================================================================== */

$this->load->library('email');

$this->email->from('your@example.com', 'Your Name');
$this->email->to('someone@example.com');
$this->email->cc('another@another-example.com');
$this->email->bcc('them@their-example.com');

$this->email->subject('Email Test');
$this->email->message('Testing the email class.');

if ($this->email->send()) {
	//email sent
}

//if need to debug the send
dbug($this->email->print_debugger());

/* ==========================================================================
// delete files in a directory
========================================================================== */

delete_files('./path/to/directory/');

/* ==========================================================================
// escaping sql
========================================================================== */

// This function determines the data type so that it can escape only string data. It also automatically adds single quotes around the data so you don’t have to
$sql = "INSERT INTO table (title) VALUES(".$this->db->escape($title).")";

// $this->db->escape_like_str() This method should be used when strings are to be used in LIKE conditions so that LIKE wildcards (‘%’, ‘_’) in the string are also properly escaped.
$search = '20% raise';
$sql = "SELECT id FROM table WHERE column LIKE '%" .
    $this->db->escape_like_str($search)."%' ESCAPE '!'";
