<?php

//format date for proper display from db:
//"May 4, 2018"
date('M j, Y', strtotime($db_start_date));

//save date from input data back into the db
//"2018-05-04"
date('Y-m-d', strtotime($input_start_date));

//get today's date
date('M j, Y', strtotime('now'))
//or
date('Y-m-d H:i:s')

// date with time
date('M, j Y \a\t g:i a', strtotime($row->timestamp));
// Looks like:
// Jul, 6 2018 at 10:01 am


?>