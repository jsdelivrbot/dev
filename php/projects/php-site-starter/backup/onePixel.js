;(function ( $, window, document, undefined ) {
    
    $.fn.onePixel = function ( options ) {
        
        // Create some defaults, extending them with any options that were provided
        var settings = $.extend( {
            'location'         : 'top',
            'background-color' : 'blue'
        }, options);
        
        
        //fadein on page load --------------------------------------------------------//
        //to display loading animation before it's ready
        $(document).ready(function() {
            
            //to show loading animation
            $imgloader = $('.loading-container');
            $loadingimg = $( '<div id="canvasloader-container" class="onepix-imgloader"></div>' );
            

//          $loadingimg.attr("src","images/flexslider/loading.gif");
            $imgloader.prepend( $loadingimg );
            
//          canvasloader code
            var cl = new CanvasLoader('canvasloader-container');
            cl.setColor('#4f4f4f'); // default is '#000000'
            cl.setDiameter(45); // default is 40
            cl.setDensity(75); // default is 40
            cl.setRange(0.7); // default is 1.3
            cl.setSpeed(3); // default is 2
            cl.setFPS(22); // default is 24
            cl.show(); // Hidden by default
            
            $(window).load(function(){
                $('.onepix-imgloader').fadeOut();
                // fade in content (using opacity instead of fadein() so it retains it's height.
                $('.loading-container > *:not(.onepix-imgloader)').fadeTo(8000, 100);
            
            });
        });
        
        // init flexsliders ---------------------------------------------------------------//
    
        $(window).load(function() {
    
            $('.home .flexslider').flexslider({
                direction: "horizontal",
                slideshowSpeed: 7000,
                animationSpeed: 600,
                controlNav: false,
                animationLoop: false,
                animation: "slide",
                slideshow: false
            });
    
            // The slider being synced must be initialized first
            $('#carousel').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 210,
                itemMargin: 5,
                asNavFor: '#slider'
            });

            $('#slider').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                sync: "#carousel"
            });
    
            $('#slider-thumbnav').flexslider({
                animation: "slide",
                controlNav: "thumbnails"
            });
    
            $('.slider-widget .flexslider').flexslider({
                animation: "slide",
                directionNav: false
            });
  
        });
    

        // mobile menu------------------------------------------------------------//
        $(document).ready(function() {
       
            // non dropdown select version mobile menu
            $('#mobile-menu .menu').custom_mobileMenu();


            // for submenu...
            // the stop is to make smooth animatins without the common problem of multiple queued animations 
            $('#nav-secondary ul.sub-menu > li > a, #nav-primary ul.sub-menu > li > a').hover(function() {
                $(this).find('.sub-menu').fadeIn();
            },
            function() {
                $(this).find('.sub-menu').fadeOut();
            });
            
        });


        // "stellar" parallax --------------------------------------------------//

        $(document).ready(function() {
            $.stellar({
                horizontalScrolling: false
//                responsive: true
                //              verticalOffset: 33
                // adjust this is you see repetition in the image
//                verticalOffset: 1000
            });

        })
        


        //sticky navigation menu fade in --------------------------------------------------//

//        $(document).ready(function() {
//            $(window).scroll(function() {
//                var yPos = ( $(window).scrollTop() );
//                if(yPos > 200) { // show when scroll 200px
//                    $("#topnav").fadeIn();
//                } else {
//                    $("#topnav").fadeOut();
//                }
//            });
//        })

        //back to top --------------------------------------------------//

        $(function() {
            $(window).scroll(function() {
                
                if($(this).scrollTop() > 100) {
                    $('#toTop').fadeIn(3000);
                } else {
                    $('#toTop').fadeOut();
                }
            });
            $('#toTop').click(function() {
                $('html, body').animate(
                {
                    scrollTop:0
                },
                800,
                function() {
                    $('#toTop').fadeOut(500);
                });
            });
        });

        //tabs ---------------------------------------------------------//

        $(function(){
            
//             alert('fired');

            // Tabs
            $('.onepix-tabs').tabs({
                activate: function( event, ui ) {
                    ui.newPanel.find("div.tabcontent")
                    .css({
                        opacity:0
                    })
                    .animate({
                        opacity:1
                    });  
            
                }
            });

            //hover states on the static widgets
            $('#dialog_link, ul#icons li').hover(
                function() {
                    $(this).addClass('ui-state-hover');
                },
                function() {
                    $(this).removeClass('ui-state-hover');
                }
                );


        });

        //accordion ----------------------------------------------------//

        $(document).ready(function($) {
            $( "#accordion" ).accordion({
                collapsible: true,
                active: false,
                header: '> div.accordion-section > h3',
                heightStyle: 'content'
            });
        });
        
        //giant version dropdown menu ------------------------------------------------------------//
        
        $(document).ready(function($){
//            only execute if has giant menu
            if ($('body').hasClass( "belowheader-menu" )) {
                
                // get the screen position of the nav menu (must do this because events cant properly handle
                // the giant menu mouse over
                var offset = $('#nav-primary-giant').offset();
                var menu_top = offset.top;

                // hide/show giant menu
                $('#nav-primary-giant-wrapper').hover(
                        function() {
                            $(this).show();
                        }, function() {
                    //"mouseout"
                    hide_giant_menu();
                }
                );

                // hide/show giant menu
                $('#nav-primary-giant > nav > div > ul > li').hover(
                        function() {
                            if ($(this).hasClass('menu-item-has-children')) {

                                hide_giant_menu();
                                show_giant_menu($(this));
                                //set all other menu items to off
                                $('#nav-primary-giant > nav > div > ul > li').data('current', 'off');
                            }
                        }, function() {
                    //must have this "mouseout" emply funtion to avoid hover firing on mouseout

                }
                );

                function show_giant_menu(this_element) {
                    if (this_element.hasClass('menu-item-has-children')) {
                        this_element.find('#giant-submenu-wrapper').clone().appendTo("#giant-menu-wrapper #giant-menu");
                        $('#giant-menu-wrapper #giant-menu').stop(true, true).fadeIn(100);
                        $('#giant-menu-wrapper #giant-menu #giant-submenu-wrapper').stop(true, true).fadeIn(100);
                    }
                }

                function hide_giant_menu() {
                    $('#giant-menu-wrapper #giant-menu').stop(true, true).fadeOut(100);
                    $('#giant-menu-wrapper #giant-menu #giant-submenu-wrapper').remove();
                }

            }
        });
        
    //end $.fn.onePixel = function ( options )
    }
    
    // call the plugin (must use body since it will only work when an element is called)
    $('body').onePixel();

    
})( jQuery, window, document );