
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



