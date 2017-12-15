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

	checkMobile();

	function checkMobile() {
		if(window.innerWidth < mobileThreshold) {
			if(mediaSize !== 'mobile') {
				responsiveVidPoster('small');
			}
		} else if(window.innerWidth >= mobileThreshold && window.innerWidth < tabletThreshold) {
			if(mediaSize !== 'tablet') {
				responsiveVidPoster('medium');
			}
		}
		else {
			if(mediaSize !== 'desktop') {
				responsiveVidPoster('large');
			}
		}
	}

	/* ==========================================================================
	// responsive bg vid
	========================================================================== */

	//only call responsiveVidPoster on initial page load.
	//don't load it on resize or it will reload the video.

	var responsiveVideos = [].slice.call(document.querySelectorAll('.responsive-video-poster'));

	function responsiveVidPoster(size) {
		if(responsiveVideos) {
			for(var i = 0; i < responsiveVideos.length; i++) {
				responsiveVideos[i].poster = responsiveVideos[i].dataset[size];
			}
		}
	}

})();