//fadeTo using opacity to keep the dom flow (milliseconds, opacity)
//normally don't use fadeIn/fadeOut
$('.loading-container').fadeTo(500, 1);
$('.loading-container').fadeTo(500, 0.5);
//fadeto callback example
$( "#book" ).fadeTo( "slow" , 0.5, function() {
// Animation complete.
});
//or for immediate results
jQuery('#main').css('opacity', '0.6');