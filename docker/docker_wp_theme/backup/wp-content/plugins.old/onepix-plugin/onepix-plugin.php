<?php
/*
  Plugin Name: One Pixel Plugin
  Plugin URI:
  Description: Multipurpose plugin.
  Author: Ben Chung
  Version: 1.0

 */

//if(!function_exists('wp_get_current_user')) {
//    include(ABSPATH . "wp-includes/pluggable.php"); 
//}

//define paths
define('OPPSURL', WP_PLUGIN_URL . "/" . dirname(plugin_basename(__FILE__)));
//define('OPPPATH', WP_PLUGIN_DIR . "/" . dirname(plugin_basename(__FILE__)));

/* ------------------------------------------------------------------------ *
 * //Collects our plugin options
 * ------------------------------------------------------------------------ */
 /**
 * Call the function and collect in variable
 *
 * Should be used in template files like this:
 * <?php echo $onepixplugin_option['onepixplugin_txt_input']; ?>
 *
 * Note: Should you notice that the variable ($onepixplugin_option) is empty when used in certain templates such as header.php, sidebar.php and footer.php
 * you will need to call the function (copy the line below and paste it) at the top of those documents (within php tags)!
 */ 
$onepixplugin_option = onepixplugin_get_global_options();

function onepixplugin_get_global_options(){
	
	$onepixplugin_option = array();
	$onepixplugin_option 	= get_option('onepixplugin_options');

        return $onepixplugin_option;
}


/* ------------------------------------------------------------------------ *
 * includes
 * ------------------------------------------------------------------------ */ 

//page settings sections & fields  
require_once('lib/helper-functions.php');

//page settings sections & fields  
require_once('lib/theme-options.php');  

//require only in admin! Globals
if(is_admin()){   
    require_once('lib/theme-settings.php');
}
//page custom meta box
require_once('lib/meta-box.php');

//shortcodes for theme elements
require_once('lib/shortcodes.php');

//page custom widgets
require_once('lib/widgets.php');


/* ------------------------------------------------------------------------ *
 * Group scripts (js & css) for the admin page
 * ------------------------------------------------------------------------ */

//load settings scripts (only when on settings page)
//action is added within fuction onepixplugin_add_menu()
function onepixplugin_settings_scripts(){
	wp_enqueue_style('theme_settings_css', OPPSURL . '/lib/css/theme-settings.css');
	wp_enqueue_script( 'theme_settings_js', OPPSURL . '/lib/js/theme-settings.js', array('jquery'));
        //this will go in the footer
        wp_enqueue_script('sort_order', OPPSURL . '/lib/js/sort-order.js', array('jquery-ui-sortable'), 1.0, true);
        
        // collect our contextual help text (defined in theme-options.php  * Contextual Help) 
        $settings_output = onepixplugin_get_settings();  
        $onepixplugin_help_settings = $settings_output['onepixplugin_contextual_help'];  
        $screen = get_current_screen();
        // Add my_help_tab if current screen is My Admin Page
        $screen->add_help_tab( $onepixplugin_help_settings );
        
}


//must enque admin scripts with admin_head hook
add_action('admin_head', onepixplugin_enqueue_admin);

function onepixplugin_enqueue_admin() {
    
//    if (isset($_GET['page']) && $_GET['page'] == 'my_plugin_page') {
//    wp_enqueue_script('price-calculator', OPPSURL . '/js/pricecalculator.js', array('jquery'));
//    wp_enqueue_script('ajaxcontact', OPPSURL . '/js/ajaxcontact.js', array('jquery'));
//    }
//    wp_localize_script('ajaxcontact', 'ajaxcontactajax', array('ajaxurl' => admin_url('admin-ajax.php')));
//    
//    // Respects SSL, Style.css is relative to the current file
//    wp_register_style( 'dc-stylesheet', plugins_url('directory-commerce/css/dc-style.css') );
    
}

//load scripts & styles
add_action('wp_enqueue_scripts', 'onepixplugin_register_scripts');

function onepixplugin_register_scripts() {
//    wp_register_style( 'pc-style', OPPSURL . '/css/pc-style.css' );
//    wp_enqueue_style( 'pc-style' );    
    
    //   our main js file 
        wp_enqueue_script( 'onepix_plugin', OPPSURL . '/js/onepix-plugin.js', array('jquery'));
    
        //localize script
        //test access by: alert(onePixPlugin_data.plugin_url); (in your .js file)
        $onePixPlugin_data = array(
            'plugin_url' => OPPSURL,
            'ajaxurl' => admin_url('admin-ajax.php')
            );
        
        wp_localize_script('onepix_plugin', 'onePixPlugin_data', $onePixPlugin_data);


    
}

//initialize
add_action('init', 'onepixplugin_initialize');

function onepixplugin_initialize() {
    
}


/* ------------------------------------------------------------------------ *
 * The Admin menu page 
 * ------------------------------------------------------------------------ */ 

add_action( 'admin_menu', 'onepixplugin_add_menu' );  
    
function onepixplugin_add_menu(){  
    
    // Display Settings Page link under the "Settings" Admin Menu  
    // add_theme_page( $page_title, $menu_title, $capability, $menu_slug, $function);         

    $onepixplugin_settings_page = add_options_page( '1 Pixel Plugin Options', __('1 Pixel Plugin Options','onepixplugin_textdomain'), 'manage_options', ONEPIX_PAGE_BASENAME, 'onepixplugin_settings_page_fn');
    
    
    // contextual help  
//    if ($onepixplugin_settings_page) {  
//        add_contextual_help( $onepixplugin_settings_page, $onepixplugin_contextual_help );  
//    }  
    
    // css & js, also contixtual help in the same function
    //this will ensures the scripts and help tab just gets loaded if on the settings page
    add_action( 'load-'. $onepixplugin_settings_page, 'onepixplugin_settings_scripts' );	
    
}

add_action( 'admin_menu', 'onepixplugin_add_menu' ); 


/* ------------------------------------------------------------------------ *
 * Repair number lookup form
 * ------------------------------------------------------------------------ */ 

//put this in your theme: 
//do_action('repairnumber_form_hook');
//<div id="ajax-output"></div>
function repairnumber_show_form() {
?>   

<form method="post" id="repair-number-lookup">
    <input type="text" name="repair_number" id="repair-number">
    <?php //for better security for Wordpress forms - validate this where it posts to
        wp_nonce_field('onepixplugin_nonce_field_action','nonce_field_onepixplugin'); 
    ?>
    <a id="form-submit" class="button" title="Submit Repair Number" >Submit</a>
</form>

<?php } 

add_action('repairnumber_form_hook','repairnumber_show_form');

/*-----------------------------------------------------------------------------------*/
// Ajax
/*-----------------------------------------------------------------------------------*/

function onepixplugin_ajaxload(){
  //get the data from ajax() call

    //this method will return the condents of the require once;
    ob_start();
    require_once('process-ajax.php');
    // Return the String
//    return ob_get_clean();
    die(ob_get_clean());

  }
  // creating Ajax call for WordPress
   add_action( 'wp_ajax_nopriv_onepixplugin_ajaxload', 'onepixplugin_ajaxload' );
   add_action( 'wp_ajax_onepixplugin_ajaxload', 'onepixplugin_ajaxload' );



?>