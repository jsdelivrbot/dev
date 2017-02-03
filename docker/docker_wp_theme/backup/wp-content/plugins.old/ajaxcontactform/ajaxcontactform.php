<?php
/*
  Plugin Name: Ajax Contact Form
  Plugin URI:
  Description: Contact form Calculator
  Author: Ben Chung
  Version: 1.0

 */

//if(!function_exists('wp_get_current_user')) {
//    include(ABSPATH . "wp-includes/pluggable.php"); 
//}

//define paths
define('ACFSURL', WP_PLUGIN_URL . "/" . dirname(plugin_basename(__FILE__)));
define('ACFPATH', WP_PLUGIN_DIR . "/" . dirname(plugin_basename(__FILE__)));

//load scripts
function ajaxcontact_enqueuescripts() {
    wp_enqueue_script('price-calculator', ACFSURL . '/js/pricecalculator.js', array('jquery'));
    wp_enqueue_script('ajaxcontact', ACFSURL . '/js/ajaxcontact.js', array('jquery'));
    wp_localize_script('ajaxcontact', 'ajaxcontactajax', array('ajaxurl' => admin_url('admin-ajax.php')));
    
    // Respects SSL, Style.css is relative to the current file
    wp_register_style( 'dc-stylesheet', plugins_url('directory-commerce/css/dc-style.css') );
    
}

add_action('wp_enqueue_scripts', 'ajaxcontact_enqueuescripts');

//load stylesheets
function pc_register_styles() {
    wp_register_style( 'pc-style', ACFSURL . '/css/pc-style.css' );
    wp_enqueue_style( 'pc-style' );    
}

add_action('init', 'pc_register_styles');


//create contact form - call this from somewhere in your theme
function ajaxcontact_show_contact() {
    ?>

    <div class="price-calc">
        <form id="ajaxcontactform" action="" method="post"enctype="multipart/form-data" name="calc">
            <table border="1" cellspacing="0" cellpadding="0">
                <colgroup> 
                    <col/> 
                    <col/> 
                </colgroup>
                <tbody>
                    <tr>
                        <td >Price</td>
                        <td class="loan-dollar-sign">$</td>
                        <td>
                            <span id="car-initial-price">
                            <?php 
                            echo get_post_meta(get_the_ID(), 'price', true); 
                            ?>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">Appraisal</td>
                        <td>
                            <ul class="radio-options">
                                <li><label>Yes&nbsp;<input type="radio" name="appraisal" value="yes" /></label></li>
                                <li><label>No&nbsp;<input type="radio" name="appraisal" value="no" /></label></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">Warranty</td>
                        <td>
                            <select name="warranties">
                                <option value="289">1 year Limited Powertrain at $1000/claim - $289</option>
                                <option value="899">3 year Powertrain Plus @ $1500/claim - $899</option>
                                <option value="1219">2 year Limited Superior @ $2500/claim - $1219</option>
                                <option value="0">No extended warranty - $0</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Estimated trade in value</td>
                        <td class="loan-dollar-sign">$</td>
                        <td><input type="text" name="trade-in"/></td>
                    </tr>
                    <tr>
                        <td><strong>Grand Total (incl. 13% HST and $95 License sticker)</strong></td>
                        <td class="loan-dollar-sign">$</td>
                        <td>
                            <input type="text" name="total-cost-estimate" value="0" readonly/>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">Interest rates</td>
                        <td>
                            <select name="interest-rate">
                                <option name="excellent-credit" value="0.0675">Excellent Credit - 6.75%</option>
                                <option name="medium-credit" value="0.1195">Medium Credit - 11.95%</option>
                                <option name="poor-credit" value="0.1995">Poor Credit - 19.95%</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Loan term</td>
                        <td class="loan-dollar-sign">$</td>
                        <td>
                            <select name="loan-term">
                                <option name="3-yrs" value="36">3 years</option>
                                <option name="4-yrs" value="48">4 years</option>
                                <option name="5-yrs" value="60" selected="selected" >5 years</option>
                                <option name="6-yrs" value="72">6 years</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Approximate Monthly Payment<br>(taxes included)</strong></td>
                        <td class="loan-dollar-sign">$</td>
                        <td>
                            <input type="text" name="monthly-payments" value="0" readonly/>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2"><span class="label controller">Want a lower monthly payment? Check here</span></td>
                        <td class="nopadding-bottom dropdown-container">
                            <input type="checkbox" name="inquire">
                            <div class="foldown" id="inquiry-fields" data-price="400">
                                    <div class="one-half first nomargin-bottom">
                                        <ul class="input-list-vertical input-list">
                                            <li><input type="text" id="name" placeholder="Your Name" name="name" /></li>
                                            <li><input type="text" id="email" placeholder="Your Email" name="email" /></li>
                                            <li><input type="text" id="phone" placeholder="Your Phone (xxxxxxxxxx)" name="phone" /></li>
                                        </ul>
                                    </div>
                                    <div class="one-half nomargin-bottom">
                                        <textarea id="message" name="message" placeholder="your message"  rows="10" cols="20"></textarea>
                                        <div class="clear"></div>
                                    </div>
                                    <div class="clear"></div>
<!--                                for sending the vehicle title-->
                                    <input type="hidden" name="vehicle" value="<?php echo get_the_title(get_the_ID()) . ' - ' .get_post_meta(get_the_ID(), 'price', true) . ' url: ' . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"] ; ?> "/>
                                    <?php //for better security for Wordpress forms - validate this where it posts to
                                     wp_nonce_field('onepx_nonce_field_action','nonce_field_onpix'); 
                                    ?>
                                    <a id="form-submit" class="button" title="Submit Estimate" style="cursor: pointer">Send Mail</a>
<!--                                    <input class="button" style="cursor: poineter;" type="button" value="Submit Estimate" />-->
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form></div> 
    <div id="ajaxcontact-response" ></div>
    <?php
}

add_action('ajaxcontact_hook','ajaxcontact_show_contact');

function ajaxcontact_send_mail() {

    // Initialize array for errors
    $errors = array();
    // Initialize array for response
    $results = array();

    // verify wp_nonce_field for better form security.
    if (!isset($_POST['nonce_field_onpix']) || !wp_verify_nonce($_POST['nonce_field_onpix'], 'onepx_nonce_field_action')) {
        $results = array("results" => "Error");
//        exit;
    } else {
        // process form data
        
        //optionally add expected for values for security
        // $expected = array('name', 'email', 'message');
        // Set required fields
        $required = array('name', 'email');
//       set fields that must be numeric
        $numeric = array('landing-pages', 'internal-pages', 'phone');
//       set email fields
        $email_fields = array('email');

        
        //loop through all post fields and validate
        foreach ($_POST as $field => $value) {
            // Assign to $temp and trim spaces if not array
            $temp = is_array($value) ? $value : trim($value);
            
            //check if required fields are empty
            if (empty($temp) && in_array($field, $required)) {
                array_push($errors, $field);
            }
            //check if numeric fields have numbers - do this in addition to your jqyery validation
            if (!is_numeric($temp) && in_array($field, $numeric)) {
                array_push($errors, $field);
            }
            
            //validate email
            if (!filter_var($temp, FILTER_VALIDATE_EMAIL) && in_array($field, $email_fields)) {
                array_push($errors, $field);
            }
            
        }
        
        if (empty($errors)) {
            //The form is completed properly to do with as you please
            unset($errors);
        } else {
            //  Send a JSON response back to an AJAX request, and die().
            send_response($errors);
        }
        

         

        //copy post array and adjust it
        $contentsarray = array();
        $contentsarray = $_POST;
        //remove extra post values
        unset($contentsarray['action']);
        unset($contentsarray['_wp_http_referer']);
        unset($contentsarray['nonce_field_onpix']);
        
        
        
        
        $contents =
                    "Name: " . $contentsarray['name'] . "\n".
                    "Email: " . $contentsarray['email'] . "\n".
                    "Phone: " . $contentsarray['phone'] . "\n".
                    "Vehicle: " . $contentsarray['vehicle'] . "\n".
                    "Appraisal: " . $contentsarray['appraisal'] . "\n".
                    "Warranty: " . $contentsarray['warranties'] . "\n".
                    "Trade-In: " .  $contentsarray['trade-in'] . "\n".
                    "Estimated Cost: " . $contentsarray['total-cost-estimate'] . "\n".
                    "Interest Rate: " . $contentsarray['interest-rate'] . "\n" .
                    "Loan Term: " . $contentsarray['loan-term'] . " months" . "\n".
                    "Monthly Payments: " . $contentsarray['monthly-payments'] . "\n".
                    "Message: " . $contentsarray['message'] . "\n";

        
        
        //send contents array in message
//        $contents = print_r($contentsarray, true);



        if ($error == 0) {
            
//            $name = $_POST['name'];
            $email = $_POST['email'];
//            $message = $_POST['message'];
            $admin_email = get_option('admin_email');

            $headers = 'From:' . $email;
            $subject = "Price Estimate Application";

  
            if (wp_mail($admin_email, $subject, $contents, $headers)) {
//                $results = "Thank your for you mail! We'll get back to you shortly.";
                $results = array("results" => "Success");
            } else {
                $results = array("results" => "Error");
            }
        }
    }
    

    
//  Send a JSON response back to an AJAX request, and die().
    send_response($results);
    
}

function send_response ($response) {
    wp_send_json($response);
}

// creating Ajax call for WordPress
add_action( 'wp_ajax_nopriv_ajaxcontact_send_mail', 'ajaxcontact_send_mail' );
add_action( 'wp_ajax_ajaxcontact_send_mail', 'ajaxcontact_send_mail' );
?>