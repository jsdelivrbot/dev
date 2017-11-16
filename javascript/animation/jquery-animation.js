//fadeTo using opacity to keep the dom flow (milliseconds, opacity)
//normally don't use fadeIn/fadeOut
$('.loading-container').fadeTo(500, 1);
$('.loading-container').fadeTo(500, 0.5);


/* ==========================================================================
//fadeto callback with visibility example
========================================================================== */

//fade in
$(this).css("visibility", "visible"); 
$( "#book" ).fadeTo( "slow" , 1, function() {
// Animation complete.
});

//fade out
$( "#book" ).fadeTo( "slow" , 0, function() {
	$(this).css("visibility", "hidden"); 
// Animation complete.
});

/* ==========================================================================
//or for immediate results
========================================================================== */

jQuery('#main').css('opacity', '0.6');