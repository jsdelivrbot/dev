<?php
//helper functions----------------------------------------------------------------//
//------------------------------------------------------------------------------------//

//insert this instead of the_content() for a stripped html version
function contrib_strip_html_the_content() {
    ob_start();
    the_content();
    $old_content = ob_get_clean();
    $new_content = strip_tags($old_content);
    echo $new_content;
}

//filter content
function contrib_filter_content($content) {
    $content = apply_filters('the_content', $content);
    $content = str_replace(']]>', ']]&gt;', $content);
    return $content;
}

//shorten string and add suffix "more" link
function contrib_shorten($string, $length)
{
    // By default, an ellipsis will be appended to the end of the text.
    $suffix = '&hellip;';
    // Convert 'smart' punctuation to 'dumb' punctuation, strip the HTML tags,
    // and convert all tabs and line-break characters to single spaces.
    $short_desc = trim(str_replace(array("\r","\n", "\t"), ' ', strip_tags($string)));
    // Cut the string to the requested length, and strip any extraneous spaces 
    // from the beginning and end.
    $desc = trim(substr($short_desc, 0, $length));
    // Find out what the last displayed character is in the shortened string
    $lastchar = substr($desc, -1, 1);
    // If the last character is a period, an exclamation point, or a question 
    // mark, clear out the appended text.
    // Append the text.
    $desc .= $suffix;
    // Send the new description back to the page.
    return $desc;
}

//remove http://
function contrib_strip_http ($input) {
 //$input  = 'www.google.co.uk/';
// in case scheme relative URI is passed, e.g., //www.google.com/
$input = trim($input, '/');
// If scheme not included, prepend it
if (!preg_match('#^http(s)?://#', $input)) {
    $input = 'http://' . $input;
}
$urlParts = parse_url($input);
// remove www
$domain = preg_replace('/^www\./', '', $urlParts['host']);
echo $domain;
// output: google.co.uk
}


//for testing purposes----------------------------------------------------------------//
//------------------------------------------------------------------------------------//

// add the action
add_action( 'testhook_output', 'contrib_test_output' );

//create custom testing hook -delete-me
function contrib_test_output($print_me) {
   print_r($print_me);
}


?>