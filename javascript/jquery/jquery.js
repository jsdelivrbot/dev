//latest jquery
<script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>

//a function literal that is executed immediately passing int the 
//jQuery object within the scope of the function
(function ($) { $(document).ready(function() { 
        //do something...
    });
})(jQuery);


jQuery(function ($) {
/* You can safely use $ in this code block to reference jQuery */
});