<?php

//this will remove extra p and br tags normall between shortcodes
remove_filter( 'the_content', 'wpautop' );
add_filter( 'the_content', 'wpautop' , 12);

////small icons shortcode [sectionheader title="Section Header Title"]
//function onepixplugin_shortcode_sectionheader($atts, $content = null) {
//	extract(shortcode_atts(array(
//                "title" => ''
//	), $atts));
//	
//        $sectionheader = '<div class="sectionHeader"><div class="sectionHeadingWrap"><span class="sectionHeading">' . $title . '</span></div></div>';
//        return $sectionheader;
//}
//add_shortcode('sectionheader', 'onepixplugin_shortcode_sectionheader');
//
////small icons shortcode [fa img=pencil size=med circle=true]
//function onepixplugin_shortcode_icon_fa($atts, $content = null) {
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
//add_shortcode('icon-fa', 'onepixplugin_shortcode_icon_fa');
//
////spacer shortcode [spacer size=med]
//function onepixplugin_shortcode_spacer($atts, $content = null) {
//	extract(shortcode_atts(array(
//		"size" => ''
//	), $atts));
//
//        $spacer = '<div class="spacer spacer-' . $size . '"></div>';
//        return $spacer;
//}
//add_shortcode('spacer', 'onepixplugin_shortcode_spacer');
//
//
////imagebox shortcode [imagebox title="title" linkurl="yourlinkurl.com image=images/area-commercial-img.png"]some filler content here...[/imagebox]
//function onepixplugin_shortcode_imagebox( $atts, $content = null ) {
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
//add_shortcode( 'imagebox', 'onepixplugin_shortcode_imagebox' );
//
////infobox shortcode [infobox title="Infobox Title"]some filler content here...[/infobox]
//function onepixplugin_shortcode_infobox( $atts, $content = null ) {
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
//add_shortcode( 'infobox', 'onepixplugin_shortcode_infobox' );
//
////row shortcode [row class="custom-class"]
//function onepixplugin_shortcode_row( $atts, $content = null ) {
//    	extract(shortcode_atts(array(
//		"class" => ''
//	), $atts));
//        //do_shortcode() permits other shortcode to be allowed within this shortcode
//        return '<div class="row ' . esc_attr($class) . '">' . do_shortcode($content) . '</div>'; 
//}
//add_shortcode( 'row', 'onepixplugin_shortcode_row' );
//
////columns shortcode [column size=large spaces=6 class="custom-class"]
//function onepixplugin_shortcode_column( $atts, $content = null ) {
//    	extract(shortcode_atts(array(
//            "size" => '',
//            "spaces" => '',
//            "class" => ''
//	), $atts));
//        //do_shortcode() permits other shortcode to be allowed within this shortcode
//        return '<div class="' . esc_attr($size) . '-' . esc_attr($spaces) . ' columns ' . esc_attr($class) . '">' . do_shortcode($content) . '</div>'; 
//}
//add_shortcode( 'column', 'onepixplugin_shortcode_column' );


////antispam email display shortcode [email] or [email email="you@youremaildomain.com"]
//function onepixplugin_shortcode_antispamemail( $atts, $content = null ) {
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
//add_shortcode( 'email', 'onepixplugin_shortcode_antispamemail' );


//display contributors shortcode [contributors] or [contributors option="myoption"]
function onepixplugin_shortcode_contributors( $atts, $content = null ) {
    	extract(shortcode_atts(array(
            "option" => ''
	), $atts));
        //use the built in antispambot in wordpress
        if($option) {
            //do something with $option
        } else {
            
            $onepixplugin_option = array();
            $onepixplugin_option = get_option('onepixplugin_options');
            
            
            $output = print_r($onepixplugin_option['onepixplugin_txt_input'], true);
            
            
            return $output;
        }
        
         
}
add_shortcode( 'contributors', 'onepixplugin_shortcode_contributors' );

?>