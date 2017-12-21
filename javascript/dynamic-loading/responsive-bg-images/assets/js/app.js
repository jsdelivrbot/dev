(function() {
	/* ==========================================================================
	variables
	========================================================================== */
	var mediaSize = '';
	var mobileThreshold = 480;
	var tabletThreshold = 768;

	/* ==========================================================================
	window size
	========================================================================== */

	//if mobile detexted or smaller screen than 600
	checkMobile();

	//check window size (jquery)
	$(window).resize(function() {
		checkMobile();
	});

	function checkMobile() {
		if(window.innerWidth < mobileThreshold) {
			if(mediaSize !== 'mobile') {
				responsiveBgImages('small');
			}
		} else if(window.innerWidth >= mobileThreshold && window.innerWidth < tabletThreshold) {
			if(mediaSize !== 'tablet') {
				responsiveBgImages('medium');
			}
		}
		else {
			if(mediaSize !== 'desktop') {
				responsiveBgImages('large');
			}
		}
	}



	/* ==========================================================================
	// responsive images
	========================================================================== */

	var responsiveImages = [].slice.call(document.querySelectorAll('.responsive-image'));

	function responsiveBgImages(size) {
		if(responsiveImages) {
			for(var i = 0; i < responsiveImages.length; i++) {
				var urlString = 'url(' + responsiveImages[i].dataset[size] + ')';
				responsiveImages[i].style.backgroundImage = urlString;
			}
		}
	}
})();