<?php

//this will remove extra p and br tags normall between shortcodes
remove_filter( 'the_content', 'wpautop' );
add_filter( 'the_content', 'wpautop' , 12);

////small icons shortcode [sectionheader title="Section Header Title"]
//function contrib_shortcode_sectionheader($atts, $content = null) {
//	extract(shortcode_atts(array(
//                "title" => ''
//	), $atts));
//	
//        $sectionheader = '<div class="sectionHeader"><div class="sectionHeadingWrap"><span class="sectionHeading">' . $title . '</span></div></div>';
//        return $sectionheader;
//}
//add_shortcode('sectionheader', 'contrib_shortcode_sectionheader');
//
////small icons shortcode [fa img=pencil size=med circle=true]
//function contrib_shortcode_icon_fa($atts, $content = null) {
//	extract(shortcode_atts(array(
//		"img" => '',
//                "size" => '',
//                "circle" => ''
//	), $atts));
//	
//        $icon = '';
//
//        if ($circle == "true") {
//            $icon = '<span class="icon-circle icon-' . $size . '"><i class="fa fa-' . $img . '"></i></span>';
//        } else { 
//            $icon = '<i class="icon-' . $size . ' fa fa-' . $img . '"></i>';
//        }
//        return $icon;
//}
//add_shortcode('icon-fa', 'contrib_shortcode_icon_fa');
//
////spacer shortcode [spacer size=med]
//function contrib_shortcode_spacer($atts, $content = null) {
//	extract(shortcode_atts(array(
//		"size" => ''
//	), $atts));
//
//        $spacer = '<div class="spacer spacer-' . $size . '"></div>';
//        return $spacer;
//}
//add_shortcode('spacer', 'contrib_shortcode_spacer');
//
//
////imagebox shortcode [imagebox title="title" linkurl="yourlinkurl.com image=images/area-commercial-img.png"]some filler content here...[/imagebox]
//function contrib_shortcode_imagebox( $atts, $content = null ) {
//    	extract(shortcode_atts(array(
//            "title" => '',
//            "image" => '',
//            "linkurl" => ''
//	), $atts));
//        //do_shortcode() permits other shortcode to be allowed within this shortcode
//        
//        $imagebox = '<div class="imgbox-call-action">
//            <img src="' . $image . '" /> <div class="caption center">' . esc_attr($title) . '</div><div class="clear"></div>
//            <div class="imbox-content">' . do_shortcode($content) . '</div><div class="clear"></div>
//            <a href="' . $linkurl . '" class="learnmore small-text">Learn More &rsaquo;</a><div class="clear"></div></div>';
//        
////        esc_attr($size);
//
//        return $imagebox;
//}
//add_shortcode( 'imagebox', 'contrib_shortcode_imagebox' );
//
////infobox shortcode [infobox title="Infobox Title"]some filler content here...[/infobox]
//function contrib_shortcode_infobox( $atts, $content = null ) {
//    	extract(shortcode_atts(array(
//            "title" => '',
//	), $atts));
//        //do_shortcode() permits other shortcode to be allowed within this shortcode
//        $infobox = '<div class="infobox">
//            <div class="title center">' . esc_attr($title) . '</div><div class="clear"></div>
//            <div class="infobox-content">' . do_shortcode($content) . '</div><div class="clear"></div></div>';
//        
////        esc_attr($size);
//
//        return $infobox;
//}
//add_shortcode( 'infobox', 'contrib_shortcode_infobox' );
//
////row shortcode [row class="custom-class"]
//function contrib_shortcode_row( $atts, $content = null ) {
//    	extract(shortcode_atts(array(
//		"class" => ''
//	), $atts));
//        //do_shortcode() permits other shortcode to be allowed within this shortcode
//        return '<div class="row ' . esc_attr($class) . '">' . do_shortcode($content) . '</div>'; 
//}
//add_shortcode( 'row', 'contrib_shortcode_row' );
//
////columns shortcode [column size=large spaces=6 class="custom-class"]
//function contrib_shortcode_column( $atts, $content = null ) {
//    	extract(shortcode_atts(array(
//            "size" => '',
//            "spaces" => '',
//            "class" => ''
//	), $atts));
//        //do_shortcode() permits other shortcode to be allowed within this shortcode
//        return '<div class="' . esc_attr($size) . '-' . esc_attr($spaces) . ' columns ' . esc_attr($class) . '">' . do_shortcode($content) . '</div>'; 
//}
//add_shortcode( 'column', 'contrib_shortcode_column' );


////antispam email display shortcode [email] or [email email="you@youremaildomain.com"]
//function contrib_shortcode_antispamemail( $atts, $content = null ) {
//    	extract(shortcode_atts(array(
//            "email" => ''
//	), $atts));
//        //use the built in antispambot in wordpress
//        if($email) {
//            //return provided emal address protected
//            return antispambot($email);
//        } else {
//            //return admin emal address protected
//            return antispambot(get_the_author_email());
//        }
//        
//         
//}
//add_shortcode( 'email', 'contrib_shortcode_antispamemail' );


//display contributors shortcode [contributors] or [contributors option="myoption"] or in template: echo do_shortcode('[contributors]')
function contrib_shortcode_contributors( $atts, $content = null ) {
    	extract(shortcode_atts(array(
            "option" => ''
	), $atts));
        //use the built in antispambot in wordpress
        if($option) {
            //do something with $option
        } else {
            
            //must include this to get our plugin options
            $contrib_option = get_option('contrib_options');
            
//            get the authors output template  
//            $output = require_once('template-authors.php');
//            return $output;
//            
            //this method will return the condents of the require once;
            ob_start();
            require_once('template-authors.php');
            return ob_get_clean();
            
        }
        
         
}
add_shortcode( 'contributors', 'contrib_shortcode_contributors' );

?>