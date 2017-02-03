<?php


/* ------------------------------------------------------------------------ *
 * Define our settings sections 
 * ------------------------------------------------------------------------ */ 
 
    function onepixplugin_options_page_sections() { 
        
        /** 
        * array key=$id, array value=$title in: add_settings_section( $id, $title, $callback, $page ); 
        * @return array 
        */ 
          
        $sections = array();  
        // $sections[$id]       = __($title, 'onepixplugin_textdomain');   

//        $sections['txt_section']    = __('Text Form Fields', 'onepixplugin_textdomain');  
//        $sections['txtarea_section']    = __('Textarea Form Fields', 'onepixplugin_textdomain');  
//        $sections['select_section']     = __('Select Form Fields', 'onepixplugin_textdomain');  
//        $sections['checkbox_section']   = __('Checkbox Form Fields', 'onepixplugin_textdomain');  
          
        return $sections;     
    }
    
        /** 
     * Define our form fields (settings)  
     * 
     * @return array 
     */  
    function onepixplugin_options_page_fields() {  


// Text Form Fields section  
//        $options[] = array(  
//            "section" => "txt_section",  
//            "id"      => ONEPIX_SHORTNAME . "_txt_input",  
//            "title"   => __( 'Text Input - Some HTML OK!', 'onepixplugin_textdomain' ),  
//            "desc"    => __( 'A regular text input field. Some inline HTML (<a>, <b>, <em>, <i>, <strong>) is allowed.', 'onepixplugin_textdomain' ),  
//            "type"    => "text",  
//            "std"     => __('<h1>Html</h1> and text','onepixplugin_textdomain')  
//        );  
//          
//        $options[] = array(  
//            "section" => "txt_section",  
//            "id"      => ONEPIX_SHORTNAME . "_nohtml_txt_input",  
//            "title"   => __( 'No HTML!', 'onepixplugin_textdomain' ),  
//            "desc"    => __( 'A text input field where no html input is allowed.', 'onepixplugin_textdomain' ),  
//            "type"    => "text",  
//            "std"     => __('Some plsin text','onepixplugin_textdomain'),
//            "class"   => "nohtml"  
//        );  
//          
//        $options[] = array(  
//            "section" => "txt_section",  
//            "id"      => ONEPIX_SHORTNAME . "_numeric_txt_input",  
//            "title"   => __( '12345', 'onepixplugin_textdomain' ),  
//            "desc"    => __( 'A text input field where only numeric input is allowed.', 'onepixplugin_textdomain' ),  
//            "type"    => "text",  
//            "std"     => "123",  
//            "class"   => "numeric"  
//        );  
//          
//        $options[] = array(  
//            "section" => "txt_section",  
//            "id"      => ONEPIX_SHORTNAME . "_multinumeric_txt_input",  
//            "title"   => __( 'Multinumeric Input', 'onepixplugin_textdomain' ),  
//            "desc"    => __( 'A text input field where only multible numeric input (i.e. comma separated numeric values) is allowed.', 'onepixplugin_textdomain' ),  
//            "type"    => "text",  
//            "std"     => "123,234,345",  
//            "class"   => "multinumeric"  
//        );  
//          
//        $options[] = array(  
//            "section" => "txt_section",  
//            "id"      => ONEPIX_SHORTNAME . "_url_txt_input",  
//            "title"   => __( 'URL Input', 'onepixplugin_textdomain' ),  
//            "desc"    => __( 'A text input field which can be used for urls.', 'onepixplugin_textdomain' ),  
//            "type"    => "text",  
//            "std"     => "http://www.website.com",  
//            "class"   => "url"  
//        );  
//          
//        $options[] = array(  
//            "section" => "txt_section",  
//            "id"      => ONEPIX_SHORTNAME . "_email_txt_input",  
//            "title"   => __( 'Email Input', 'onepixplugin_textdomain' ),  
//            "desc"    => __( 'A text input field which can be used for email input.', 'onepixplugin_textdomain' ),  
//            "type"    => "text",  
//            "std"     => "email@email.com<script type=\"text/javascript\">  /* <![CDATA[ */ (function(){try{var s,a,i,j,r,c,l,b=document.getElementsByTagName(\"script\");l=b[b.length-1].previousSibling;a=l.getAttribute('data-cfemail');if(a){s='';r=parseInt(a.substr(0,2),16);for(j=2;a.length-j;j+=2){c=parseInt(a.substr(j,2),16)^r;s+=String.fromCharCode(c);}s=document.createTextNode(s);l.parentNode.replaceChild(s,l);}}catch(e){}})(); /* ]]> */ </script>",  
//            "class"   => "email"  
//        );  
//          
//        $options[] = array(  
//            "section" => "txt_section",  
//            "id"      => ONEPIX_SHORTNAME . "_multi_txt_input",  
//            "title"   => __( 'Multi-Text Inputs', 'onepixplugin_textdomain' ),  
//            "desc"    => __( 'A group of text input fields', 'onepixplugin_textdomain' ),  
//            "type"    => "multi-text",  
//            "choices" => array( __('Text input 1','onepixplugin_textdomain') . "|txt_input1", __('Text input 2','onepixplugin_textdomain') . "|txt_input2", __('Text input 3','onepixplugin_textdomain') . "|txt_input3", __('Text input 4','onepixplugin_textdomain') . "|txt_input4"),  
//            "std"     => ""  
//        );  
//          
//        // Textarea Form Fields section  
//        $options[] = array(  
//            "section" => "txtarea_section",  
//            "id"      => ONEPIX_SHORTNAME . "_txtarea_input",  
//            "title"   => __( 'Textarea - HTML OK!', 'onepixplugin_textdomain' ),  
//            "desc"    => __( 'A textarea for a block of text. HTML tags allowed!', 'onepixplugin_textdomain' ),  
//            "type"    => "textarea",  
//            "std"     => __('Some default value','onepixplugin_textdomain')  
//        );  
//      
//        $options[] = array(  
//            "section" => "txtarea_section",  
//            "id"      => ONEPIX_SHORTNAME . "_nohtml_txtarea_input",  
//            "title"   => __( 'No HTML!', 'onepixplugin_textdomain' ),  
//            "desc"    => __( 'A textarea for a block of text. No HTML!', 'onepixplugin_textdomain' ),  
//            "type"    => "textarea",  
//            "std"     => __('Some default value','onepixplugin_textdomain'),  
//            "class"   => "nohtml"  
//        );  
//          
//        $options[] = array(  
//            "section" => "txtarea_section",  
//            "id"      => ONEPIX_SHORTNAME . "_allowlinebreaks_txtarea_input",  
//            "title"   => __( 'No HTML! Line breaks OK!', 'onepixplugin_textdomain' ),  
//            "desc"    => __( 'No HTML! Line breaks allowed!', 'onepixplugin_textdomain' ),  
//            "type"    => "textarea",  
//            "std"     => __('Some default value','onepixplugin_textdomain'),  
//            "class"   => "allowlinebreaks"  
//        );  
//      
//        $options[] = array(  
//            "section" => "txtarea_section",  
//            "id"      => ONEPIX_SHORTNAME . "_inlinehtml_txtarea_input",  
//            "title"   => __( 'Some Inline HTML ONLY!', 'onepixplugin_textdomain' ),  
//            "desc"    => __( 'A textarea for a block of text.  
//                Only some inline HTML  
//                (<a>, <b>, <em>, <strong>, <abbr>, <acronym>, <blockquote>, <cite>, <code>, <del>, <q>, <strike>)   
//                is allowed!', 'onepixplugin_textdomain' ),  
//            "type"    => "textarea",  
//            "std"     => __('Some default value','onepixplugin_textdomain'),  
//            "class"   => "inlinehtml"  
//        );    
//          
//        // Select Form Fields section  
//        $options[] = array(  
//            "section" => "select_section",  
//            "id"      => ONEPIX_SHORTNAME . "_select_input",  
//            "title"   => __( 'Select (type one)', 'onepixplugin_textdomain' ),  
//            "desc"    => __( 'A regular select form field', 'onepixplugin_textdomain' ),  
//            "type"    => "select",  
//            "std"    => "3",  
//            "choices" => array( "1", "2", "3")  
//        );  
//          
//        $options[] = array(  
//            "section" => "select_section",  
//            "id"      => ONEPIX_SHORTNAME . "_select2_input",  
//            "title"   => __( 'Select (type two)', 'onepixplugin_textdomain' ),  
//            "desc"    => __( 'A select field with a label for the option and a corresponding value.', 'onepixplugin_textdomain' ),  
//            "type"    => "select2",  
//            "std"    => "",  
//            "choices" => array( __('Option 1','onepixplugin_textdomain') . "|opt1", __('Option 2','onepixplugin_textdomain') . "|opt2", __('Option 3','onepixplugin_textdomain') . "|opt3", __('Option 4','onepixplugin_textdomain') . "|opt4")  
//        );  
//          
//        // Checkbox Form Fields section  
//        $options[] = array(  
//            "section" => "checkbox_section",  
//            "id"      => ONEPIX_SHORTNAME . "_checkbox_input",  
//            "title"   => __( 'Checkbox', 'onepixplugin_textdomain' ),  
//            "desc"    => __( 'Some Description', 'onepixplugin_textdomain' ),  
//            "type"    => "checkbox",  
//            "std"     => 1 // 0 for off  
//        );  
//          
//        $options[] = array(  
//            "section" => "checkbox_section",  
//            "id"      => ONEPIX_SHORTNAME . "_multicheckbox_inputs",  
//            "title"   => __( 'Multi-Checkbox', 'onepixplugin_textdomain' ),  
//            "desc"    => __( 'Some Description', 'onepixplugin_textdomain' ),  
//            "type"    => "multi-checkbox",  
//            "std"     => '',  
//            "choices" => array( __('Checkbox 1','onepixplugin_textdomain') . "|chckbx1", __('Checkbox 2','onepixplugin_textdomain') . "|chckbx2", __('Checkbox 3','onepixplugin_textdomain') . "|chckbx3", __('Checkbox 4','onepixplugin_textdomain') . "|chckbx4")    
//        );  
          
        return $options;      
    }
    
    
 /* ------------------------------------------------------------------------ *
 * Contextual Help
 * ------------------------------------------------------------------------ */ 
    
    function onepixplugin_options_page_contextual_help() {  
      
    $settings = array(
        'id'	=> 'onepixplugin_help_tab',
        'title'	=> __('One Pixel Plugin Help'),
        'content' => '<p>' . __( 'Descriptive content that will show in My Help Tab-body goes here.' ) . '</p>',
    );    

    // return text  
    return $settings;  
}  

?>
