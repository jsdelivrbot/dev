<?php

    // Initialize array for errors
    $errors = array();
    // Initialize array for response
    $results = array();

    // verify wp_nonce_field for better form security.
    if (!isset($_POST['nonce_field_onepixplugin']) || !wp_verify_nonce($_POST['nonce_field_onepixplugin'], 'onepixplugin_nonce_field_action')) {
        $results = array("results" => "Error");
    //        exit;
    } else {
        // process form data
        
        //optionally add expected for values for security
        // $expected = array('name', 'email', 'message');
        // Set required fields
        $required = array('repair_number');
//       set fields that must be numeric
        $numeric = array('repair_number');
//       set email fields
//        $email_fields = array('email');

        
        //loop through all post fields and validate
        foreach ($_POST as $field => $value) {
            // Assign to $temp and trim spaces if not array
            $temp = is_array($value) ? $value : trim($value);
            
            //check if required fields are empty
            if (empty($temp) && in_array($field, $required)) {
                array_push($errors, $field . ' is required');
            }
            //check if numeric fields have numbers - do this in addition to your jqyery validation
            if (!is_numeric($temp) && in_array($field, $numeric)) {
                array_push($errors, $field . ' must be numeric');
            }
            //validate email
//            if (!filter_var($temp, FILTER_VALIDATE_EMAIL) && in_array($field, $email_fields)) {
//                array_push($errors, $field);
//            }
            
        }
        

        
        //copy post array and adjust it
        $contentsarray = array();
        $contentsarray = $_POST;
        
        //remove extra post values
        unset($contentsarray['action']);
        unset($contentsarray['_wp_http_referer']);
        unset($contentsarray['nonce_field_onpix']);
        
        if (empty($errors)) {
            //The form is completed properly to do with as you please
            unset($errors);
            
            //      $results = print_r($contentsarray, true);
                $results = array(
                    "results" => "Success",
                    "content" => $_POST['repair_number']
                );
            } else {
        //  Send a JSON response back to an AJAX request, and die().
//          send_response($errors);
                
            //      $results = print_r($contentsarray, true);
                $results = array(
                    "results" => "Validation Error",
                    "validation_errors" => $errors
                );
            
        }

    }
    

//  Send a JSON response back to an AJAX request, and die().
    send_response($results);
    
function send_response ($response) {
    wp_send_json($response);
}


//// Our variables
//$inputValue = (isset($_GET['inputValue'])) ? $_GET['inputValue'] : 'default';
////$inputValue2 = (isset($_GET['inputValue2'])) ? $_GET['inputValue2'] : '';
//
////be sure to wrap the output in html or you can't do something like: $data = $(data); when receiving the data
//echo '<p>Your ' . $inputValue . ' Received and Processed!</p>'

?>

