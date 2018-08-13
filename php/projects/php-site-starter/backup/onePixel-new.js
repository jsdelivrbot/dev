;(function ( $, window, document, undefined ) {
    
    $.fn.onePixel = function ( options ) {
        
        
        // // fadein on page load --------------------------------------------------------//
        //    to display loading animation before it's ready
        $(document).ready(function() {
            
            //to show loading animation
            $imgloader = $('.loading-container');
            $loadingimg = $( '<div id="canvasloader-container" class="onepix-imgloader"></div>' );
            

//          $loadingimg.attr("src","images/flexslider/loading.gif");
            $imgloader.prepend( $loadingimg );
            
//          canvasloader code
            var cl = new CanvasLoader('canvasloader-container');
            cl.setColor('#dbb65f'); // default is '#000000'
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

        
    //end $.fn.onePixel = function ( options )
    }
    
    // call the plugin (must use body since it will only work when an element is called)
    $('body').onePixel();

    
})( jQuery, window, document );