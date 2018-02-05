
//scroll event
document.addEventListener('scroll', function() {
	//find the current scroll position
	var scrollPos = document.querySelector('.container').scrollTop;
	//** important
	//to get the scroll pos you need to set the css to:
	//overflow: auto;
}, true);

//jquery
$(window).scroll(function (event) {
	//find the current scroll position
    var scrollPos = $(window).scrollTop();
    //** important
    //to get the scroll pos you need to set the css to:
    //overflow: auto;
});

 
/* ==========================================================================
finding find out when scrolled to the bottom
========================================================================== */

//scroll event
document.addEventListener('scroll', function() {
	var scrollEl = document.querySelector('.slide-inner');

	//the current scroll position (distance from top of el to top of the scrollbar)
	var scrollPos = scrollEl.scrollTop;
	//height of the element
	var clientHeight = scrollEl.clientHeight;
	//the hight of the contained document (the total scrollable amount)
	var scrollHeight = scrollEl.scrollHeight;
	//the amount to scroll to reach the bottom
	var scrollableDistance = scrollHeight - clientHeight;

	if(scrollPos === scrollableDistance) {
		console.log('scrolled to the bottom');
	}

}, true);



