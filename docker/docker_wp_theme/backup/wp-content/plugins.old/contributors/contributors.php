<?php
/*
  Plugin Name: Contributors
  Plugin URI:
  Description: Display Authors widget.
  Author: Ben Chung
  Version: 1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
} // Exit if accessed directly

//define paths
define('ACFSURL', WP_PLUGIN_URL . "/" . dirname(plugin_basename(__FILE__)));
define('ACFPATH', WP_PLUGIN_DIR . "/" . dirname(plugin_basename(__FILE__)));

/* ------------------------------------------------------------------------ *
 * //Collects our plugin options
 * ------------------------------------------------------------------------ */

 /**
 * Call the function and collect in variable
 *
 * Should be used in template files like this:
 * <?php echo $contrib_option['contrib_txt_input']; ?>
 * Note: Should you notice that the variable ($contrib_option) is empty when used in certain templates such as header.php, sidebar.php and footer.php
 * you will need to call the function (copy the line below and paste it) at the top of those documents (within php tags)!

 */ 

$contrib_option = contrib_get_global_options();

function contrib_get_global_options(){

	$contrib_option = array();
	$contrib_option 	= get_option('contrib_options');
        return $contrib_option;
}

/* ------------------------------------------------------------------------ *
 * add actions
 * ------------------------------------------------------------------------ */ 

//must enque admin scripts with admin_head hook
add_action('admin_head', 'contrib_enqueuescripts');
//must enque styles with wp_enqueue_scripts hook
add_action('wp_enqueue_scripts', 'contrib_register_styles');
add_action( 'admin_menu', 'contrib_add_menu' );  
add_action( 'admin_init', 'contrib_register_settings' );
add_action('init', 'con_initialize');


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

//shortcodes for theme elements
require_once('lib/shortcodes.php');

//page custom widgets
require_once('lib/widgets.php');

//order sorting
require_once('lib/sort-order.php');


/* ------------------------------------------------------------------------ *
 * Group scripts (js & css) for the admin page
 * ------------------------------------------------------------------------ */


/* ------------------------------------------------------------------------ *
 * Group scripts (js & css)
 * ------------------------------------------------------------------------ */


//load scripts
function contrib_settings_scripts(){
    //settings	
    wp_enqueue_style('theme_settings_css', ACFSURL . '/lib/css/theme-settings.css');
    wp_enqueue_script('theme_settings_js', ACFSURL . '/lib/js/theme-settings.js', array('jquery'));
    wp_enqueue_script( 'jquery-ui-draggable' );
    wp_enqueue_script( 'jquery-ui-droppable' );
    wp_enqueue_script( 'jquery-ui-sortable' );
    //this will go in the footer
    wp_enqueue_script('sort_order', ACFSURL . '/lib/js/sort-order.js', array('jquery-ui-sortable'), 1.0, true);
    
    // collect our contextual help text (defined in theme-options.php  * Contextual Help) 
    $settings_output = contrib_get_settings();  
    $contrib_help_settings = $settings_output['contrib_contextual_help'];  
    $screen = get_current_screen();
    // Add my_help_tab if current screen is My Admin Page
    $screen->add_help_tab( $contrib_help_settings );
}


function contrib_enqueuescripts() {


//    if (isset($_GET['page']) && $_GET['page'] == 'my_plugin_page') {
        wp_enqueue_media();
        wp_register_script('contrib_img_uploader', ACFSURL . '/lib/js/media-uploader.js', array('jquery'));
        wp_enqueue_script('contrib_img_uploader');
//    }

//    wp_enqueue_script('price-calculator', ACFSURL . '/js/pricecalculator.js', array('jquery'));
//    wp_enqueue_script('ajaxcontact', ACFSURL . '/js/ajaxcontact.js', array('jquery'));
//    wp_localize_script('ajaxcontact', 'ajaxcontactajax', array('ajaxurl' => admin_url('admin-ajax.php')));
//    
//    // Respects SSL, Style.css is relative to the current file
//    wp_register_style( 'dc-stylesheet', plugins_url('directory-commerce/css/dc-style.css') );

}

//load stylesheets

function contrib_register_styles() {

    //template
    wp_register_style( 'template_style_css', ACFSURL . '/css/template-style.css' );
    wp_enqueue_style('template_style_css');  

}

//initialize
function con_initialize() {

}

/* ------------------------------------------------------------------------ *
 * The Admin menu page 
 * ------------------------------------------------------------------------ */ 

//add_action('admin_menu', 'my_admin_add_page');
//function my_admin_add_page() {
//    $my_admin_page = add_options_page(__('My Admin Page', 'map'), __('My Admin Page', 'map'), 'manage_options', 'map', 'my_admin_page');
//
//    // Adds my_help_tab when my_admin_page loads
//    add_action('load-'.$my_admin_page, 'my_admin_add_help_tab');
//}
//
//function my_admin_add_help_tab () {
//    $screen = get_current_screen();
//
//    // Add my_help_tab if current screen is My Admin Page
//    $screen->add_help_tab( array(
//        'id'	=> 'my_help_tab',
//        'title'	=> __('My Help Tab'),
//        'content'	=> '<p>' . __( 'Descriptive content that will show in My Help Tab-body goes here.' ) . '</p>',
//    ) );
//}


function contrib_add_menu(){  

    // Display Settings Page link under the "Settings" Admin Menu  
    // add_theme_page( $page_title, $menu_title, $capability, $menu_slug, $function);         

    $contrib_settings_page = add_options_page( 'Contributors Options', __('Contributors Options','contrib_textdomain'), 'manage_options', CONTRIB_PAGE_BASENAME, 'contrib_settings_page_fn');

    // contextual help  
//    if ($contrib_settings_page) {  
//
//        add_contextual_help( $contrib_settings_page, $contrib_contextual_help );  
//
//    }  
    // css & js, also contixtual help in the same function
    //this will ensures the scripts and help tab just gets loaded if on the settings page
    add_action( 'load-'. $contrib_settings_page, 'contrib_settings_scripts' );	

}

add_action( 'admin_menu', 'contrib_add_menu' );  

/* ------------------------------------------------------------------------ *
 * options in user profile settings
 * ------------------------------------------------------------------------ */ 

add_action('show_user_profile', 'contrib_user_profile_edit_action');
add_action('edit_user_profile', 'contrib_user_profile_edit_action');

function contrib_user_profile_edit_action($user) {

//  $checked = (isset($user->add_contributor) && $user->add_contributor) ? ' checked="checked"' : '';
  $user_img= get_user_meta($user->ID,'add_image',true);
  $name= get_user_meta($user->ID,'contrib_name',true);
  $role= get_user_meta($user->ID,'contrib_role',true);

  

?>

  <h3>Contributors</h3>
  <label for="upload_image">
          <input id="upload_image" type="text" size="36" name="add_image" value="<?php echo $user_img; ?>" />
          <input id="upload_image_button" class="button" type="button" value="Upload Image" />
          <br />Enter a URL or upload an image
  </label>
  <br>
  <br>

  <?php if($user_img){   ?>

        <img src="<?php echo $user_img; ?>" >
        <br />Please ensure uploaded images are 100px by 100px

   <?php } ?>

  <br>
  <br>
  <label for="contributor-name">
    <input name="contrib_name" type="text"  id="contributor-name" value="<?php echo $name; ?>">
    <br />Contributor full name (user first & last name used if left blank)
  </label>
  <br>
  <br>
  <label for="contributor-role">
    <input name="contrib_role" type="text"  id="contributor-role" value="<?php echo $role; ?>">
    <br />Contributor role (user role used if left blank)
  </label>
  <br>
  <br>
<?php 

}


add_action('personal_options_update', 'contrib_user_profile_update_action');
add_action('edit_user_profile_update', 'contrib_user_profile_update_action');


function contrib_user_profile_update_action($user_id) {

//  update_user_meta($user_id, 'add_contributor', isset($_POST['add_contributor']));
  update_user_meta($user_id, 'add_image', esc_attr($_POST['add_image']));
  update_user_meta($user_id, 'contrib_name', esc_attr($_POST['contrib_name']));
  update_user_meta($user_id, 'contrib_role', esc_attr($_POST['contrib_role']));
}

//use:
//if (get_user_meta($current_user->ID, 'add_contributor', true)) { ... }

?>