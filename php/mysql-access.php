<?php

/* ==========================================================================
connecting to mySql
========================================================================== */

$dbhandle = mysql_connect('localhost', 'phptest', '3579php');
if ($dbhandle)
{
        echo "Connected to MySQL Database<br>";
        mysql_close($dbhandle);

} else {
         echo "Unable to connect to MySQL Database<br>";
}

/* ==========================================================================
select db
========================================================================== */

$db = select_mysql_db('sample_DB');
if (! $db) {
	die ('unable to select databse<br>');
}

/* ==========================================================================
query
========================================================================== */

$dbquery = 'SELECT * FROM my_table';
//$dbquery = "INSERT INTO customer VALUES ('James Wilson', 'james@nospam.co.uk', '00001111')";

$dbresult = mysql_query($dbquery, $dbhandle);

if (! $dbresult) {
	die ('unable to perform query<br>')
}

while ($dbrow = mysql_fetch_assoc($dbresult))
{
        print_r($dbrow);
        echo '<br>';
}

mysql_close($dbhandle);

/* ==========================================================================
get information about mysql database
========================================================================== */

$listhandle = mysql_list_fields ('PHPsampleDB', 'customer', $dbhandle);

$numfields = mysql_num_fields ($listhandle);

for ($i=0; $i<$numfields; $i++)
{
        echo 'Name: ' . mysql_field_name($listhandle, $i) . '<br>';
        echo 'Type: ' . mysql_field_type($listhandle, $i) . '<br>';
        echo 'Length: ' . mysql_field_len($listhandle, $i) . '<br>';
}