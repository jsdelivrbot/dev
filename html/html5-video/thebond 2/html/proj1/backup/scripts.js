(function() {

	//get video
	var vid = document.querySelector(".video1");

	//enable inline video using
	//iphone-inline-video plugin
	enableInlineVideo(vid);

	// or if you have multiple videos:
	// $('video').each(function () {
	//     enableInlineVideo(this);
	// });

	//set initial video source
	setSrc(0);

	document.querySelector('.playvid').addEventListener('click', changeVid);
	document.querySelector('.swapvid').addEventListener('click', changeVid);


	function changeVid(e){

		var n = e.target.dataset.video;
		e.preventDefault();
		setSrc(n);

	}

	function setSrc(n) {

		var v = new Array();

		v[0] = [
		        "videos/video1.webm",
		        "videos/video1.ogv",
		        "videos/video1.mp4"
		        ];
		v[1] = [
		        "videos/video2.webm",
		        "videos/video2.ogv",
		        "videos/video2.mp4"
		        ];
		
		// console.log('Modernizr.video: ', Modernizr.video);
		// console.log('Modernizr.video.webm: ', Modernizr.video.webm);
		// console.log('Modernizr.video.ogg: ', Modernizr.video.ogg);
		// console.log('Modernizr.video.h264: ', Modernizr.video.h264);

	    if(Modernizr.video && Modernizr.video.webm) {
	        vid.setAttribute("src", v[n][0]);

	    } else if(Modernizr.video && Modernizr.video.ogg) {
	        vid.setAttribute("src", v[n][1]);
	    } else if(Modernizr.video && Modernizr.video.h264) {
        	video.setAttribute("src", v[n][2]);
    	}

	    vid.load();
	    vid.play();
	}


	//hammer.js
	var message = document.getElementById('message');
	var videoHolder = document.querySelector('.vid-holder');

	console.log(message);
	console.log(videoHolder);

	// create a simple instance
	// by default, it only adds horizontal recognizers
	var mc = new Hammer(videoHolder);

	// listen to events...
	mc.on("panleft panright", function(ev) {
	    message.textContent = ev.type +" gesture detected.";
	});



})();