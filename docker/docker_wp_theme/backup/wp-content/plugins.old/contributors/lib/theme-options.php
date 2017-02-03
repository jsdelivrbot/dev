<?php


/* ------------------------------------------------------------------------ *
 * Define our settings sections 
 * ------------------------------------------------------------------------ */ 
 
    function contrib_options_page_sections() { 
        
        /** 
        * array key=$id, array value=$title in: add_settings_section( $id, $title, $callback, $page ); 
        * @return array 
        */ 
          
        $sections = array();  
        // $sections[$id]       = __($title, 'contrib_textdomain');   
        $sections['general_settings']    = __('General Settings', 'contrib_textdomain');  
//        $sections['txtarea_section']    = __('Textarea Form Fields', 'contrib_textdomain');  
//        $sections['select_section']     = __('Select Form Fields', 'contrib_textdomain');  
//        $sections['checkbox_section']   = __('Checkbox Form Fields', 'contrib_textdomain');  
          
        return $sections;     
    }
    
        /** 
     * Define our form fields (settings)  
     * 
     * @return array 
     */  
    function contrib_options_page_fields() {  


        
// Text Form Fields section  
        $options[] = array(  
            "section" => "general_settings",  
            "id"      => CONTRIB_SHORTNAME . "_title",  
            "title"   => __( 'Main Title' ),  
            "desc"    => __( 'The title to appear at the top of the contributors area.', 'contrib_textdomain' ),  
            "type"    => "text",  
            "std"     => __('The main title','contrib_textdomain'),
            "class"   => "contrib-title"
        );
        
        $options[] = array(  
            "section" => "general_settings",  
            "id"      => CONTRIB_SHORTNAME . "_order",  
            "title"   => __( 'Users to Include' ),  
            "desc"    => __( 'Enter the user id separated by a comma (ex: 1,2,3).', 'contrib_textdomain' ),  
            "type"    => "sort",  
            "std"     => '',
            "class"   => "sort" 
        ); 
          
//        $options[] = array(  
//            "section" => "txt_section",  
//            "id"      => CONTRIB_SHORTNAME . "_nohtml_txt_input",  
//            "title"   => __( 'No HTML!', 'contrib_textdomain' ),  
//            "desc"    => __( 'A text input field where no html input is allowed.', 'contrib_textdomain' ),  
//            "type"    => "text",  
//            "std"     => __('Some plain text','contrib_textdomain'),
//            "class"   => "nohtml"  
//        );  
//          
//        $options[] = array(  
//            "section" => "txt_section",  
//            "id"      => CONTRIB_SHORTNAME . "_numeric_txt_input",  
//            "title"   => __( '12345', 'contrib_textdomain' ),  
//            "desc"    => __( 'A text input field where only numeric input is allowed.', 'contrib_textdomain' ),  
//            "type"    => "text",  
//            "std"     => "123",  
//            "class"   => "numeric"  
//        );  
//          
//        $options[] = array(  
//            "section" => "txt_section",  
//            "id"      => CONTRIB_SHORTNAME . "_multinumeric_txt_input",  
//            "title"   => __( 'Multinumeric Input', 'contrib_textdomain' ),  
//            "desc"    => __( 'A text input field where only multible numeric input (i.e. comma separated numeric values) is allowed.', 'contrib_textdomain' ),  
//            "type"    => "text",  
//            "std"     => "123,234,345",  
//            "class"   => "multinumeric"  
//        );  
//          
//        $options[] = array(  
//            "section" => "txt_section",  
//            "id"      => CONTRIB_SHORTNAME . "_url_txt_input",  
//            "title"   => __( 'URL Input', 'contrib_textdomain' ),  
//            "desc"    => __( 'A text input field which can be used for urls.', 'contrib_textdomain' ),  
//            "type"    => "text",  
//            "std"     => "http://www.website.com",  
//            "class"   => "url"  
//        );  
//          
//        $options[] = array(  
//            "section" => "txt_section",  
//            "id"      => CONTRIB_SHORTNAME . "_email_txt_input",  
//            "title"   => __( 'Email Input', 'contrib_textdomain' ),  
//            "desc"    => __( 'A text input field which can be used for email input.', 'contrib_textdomain' ),  
//            "type"    => "text",  
//            "std"     => "email@email.com<script type=\"text/javascript\">  /* <![CDATA[ */ (function(){try{var s,a,i,j,r,c,l,b=document.getElementsByTagName(\"script\");l=b[b.length-1].previousSibling;a=l.getAttribute('data-cfemail');if(a){s='';r=parseInt(a.substr(0,2),16);for(j=2;a.length-j;j+=2){c=parseInt(a.substr(j,2),16)^r;s+=String.fromCharCode(c);}s=document.createTextNode(s);l.parentNode.replaceChild(s,l);}}catch(e){}})(); /* ]]> */ </script>",  
//            "class"   => "email"  
//        );  
//          
//        $options[] = array(  
//            "section" => "txt_section",  
//            "id"      => CONTRIB_SHORTNAME . "_multi_txt_input",  
//            "title"   => __( 'Multi-Text Inputs', 'contrib_textdomain' ),  
//            "desc"    => __( 'A group of text input fields', 'contrib_textdomain' ),  
//            "type"    => "multi-text",  
//            "choices" => array( __('Text input 1','contrib_textdomain') . "|txt_input1", __('Text input 2','contrib_textdomain') . "|txt_input2", __('Text input 3','contrib_textdomain') . "|txt_input3", __('Text input 4','contrib_textdomain') . "|txt_input4"),  
//            "std"     => ""  
//        );  
//          
//        // Textarea Form Fields section  
//        $options[] = array(  
//            "section" => "txtarea_section",  
//            "id"      => CONTRIB_SHORTNAME . "_txtarea_input",  
//            "title"   => __( 'Textarea - HTML OK!', 'contrib_textdomain' ),  
//            "desc"    => __( 'A textarea for a block of text. HTML tags allowed!', 'contrib_textdomain' ),  
//            "type"    => "textarea",  
//            "std"     => __('Some default value','contrib_textdomain')  
//        );  
//      
//        $options[] = array(  
//            "section" => "txtarea_section",  
//            "id"      => CONTRIB_SHORTNAME . "_nohtml_txtarea_input",  
//            "title"   => __( 'No HTML!', 'contrib_textdomain' ),  
//            "desc"    => __( 'A textarea for a block of text. No HTML!', 'contrib_textdomain' ),  
//            "type"    => "textarea",  
//            "std"     => __('Some default value','contrib_textdomain'),  
//            "class"   => "nohtml"  
//        );  
//          
//        $options[] = array(  
//            "section" => "txtarea_section",  
//            "id"      => CONTRIB_SHORTNAME . "_allowlinebreaks_txtarea_input",  
//            "title"   => __( 'No HTML! Line breaks OK!', 'contrib_textdomain' ),  
//            "desc"    => __( 'No HTML! Line breaks allowed!', 'contrib_textdomain' ),  
//            "type"    => "textarea",  
//            "std"     => __('Some default value','contrib_textdomain'),  
//            "class"   => "allowlinebreaks"  
//        );  
//      
//        $options[] = array(  
//            "section" => "txtarea_section",  
//            "id"      => CONTRIB_SHORTNAME . "_inlinehtml_txtarea_input",  
//            "title"   => __( 'Some Inline HTML ONLY!', 'contrib_textdomain' ),  
//            "desc"    => __( 'A textarea for a block of text.  
//                Only some inline HTML  
//                (<a>, <b>, <em>, <strong>, <abbr>, <acronym>, <blockquote>, <cite>, <code>, <del>, <q>, <strike>)   
//                is allowed!', 'contrib_textdomain' ),  
//            "type"    => "textarea",  
//            "std"     => __('Some default value','contrib_textdomain'),  
//            "class"   => "inlinehtml"  
//        );    
//          
//// Select Form Fields section  
//        $options[] = array(  
//            "section" => "select_section",  
//            "id"      => CONTRIB_SHORTNAME . "_select_input",  
//            "title"   => __( 'Select (type one)', 'contrib_textdomain' ),  
//            "desc"    => __( 'A regular select form field', 'contrib_textdomain' ),  
//            "type"    => "select",  
//            "std"    => "3",  
//            "choices" => array( "1", "2", "3")  
//        );  
//          
//        $options[] = array(  
//            "section" => "select_section",  
//            "id"      => CONTRIB_SHORTNAME . "_select2_input",  
//            "title"   => __( 'Select (type two)', 'contrib_textdomain' ),  
//            "desc"    => __( 'A select field with a label for the option and a corresponding value.', 'contrib_textdomain' ),  
//            "type"    => "select2",  
//            "std"    => "",  
//            "choices" => array( __('Option 1','contrib_textdomain') . "|opt1", __('Option 2','contrib_textdomain') . "|opt2", __('Option 3','contrib_textdomain') . "|opt3", __('Option 4','contrib_textdomain') . "|opt4")  
//        );  
//          
//// Checkbox Form Fields section  
//        $options[] = array(  
//            "section" => "checkbox_section",  
//            "id"      => CONTRIB_SHORTNAME . "_checkbox_input",  
//            "title"   => __( 'Checkbox', 'contrib_textdomain' ),  
//            "desc"    => __( 'Some Description', 'contrib_textdomain' ),  
//            "type"    => "checkbox",  
//            "std"     => 1 // 0 for off  
//        );  
//          
//        $options[] = array(  
//            "section" => "checkbox_section",  
//            "id"      => CONTRIB_SHORTNAME . "_multicheckbox_inputs",  
//            "title"   => __( 'Multi-Checkbox', 'contrib_textdomain' ),  
//            "desc"    => __( 'Some Description', 'contrib_textdomain' ),  
//            "type"    => "multi-checkbox",  
//            "std"     => '',  
//            "choices" => array( __('Checkbox 1','contrib_textdomain') . "|chckbx1", __('Checkbox 2','contrib_textdomain') . "|chckbx2", __('Checkbox 3','contrib_textdomain') . "|chckbx3", __('Checkbox 4','contrib_textdomain') . "|chckbx4")    
//        );  
          
        return $options;      
    }
    
    
 /* ------------------------------------------------------------------------ *
 * Contextual Help
 * ------------------------------------------------------------------------ */ 
    
    function contrib_options_page_contextual_help() {  
      
    $settings = array(
        'id'	=> 'contributors_help_tab',
        'title'	=> __('Contributors Help'),
        'content' => '<p>' . __( 'Descriptive content that will show in My Help Tab-body goes here.' ) . '</p>',
    );    

    // return text  
    return $settings;  
}  

?>