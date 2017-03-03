(function() {

	//placeholder for now
	var mobile = false;

	//init
	//------------------------------------------------------------//

	//get video
	var vid = document.querySelector(".video1");
	//get the canvases
    var canvas = document.querySelector('#c1');
    var canvas2 = document.querySelector('#c2');
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height

    //for debugging
    var coords = document.getElementById('co-oridinates');
    var vidTime = document.getElementById('vid-time');

    //scrubed time
    var scrubTime = 0;

    //just call timer on load for now
	timerCallback();

	//add event listeners
	//vid.addEventListener('play', timerCallback());

	//if mobile, enable inline video using
	//iphone-inline-video plugin
	if(mobile) {
		enableInlineVideo(vid);
	}
	
	// or if you have multiple videos:
	// $('video').each(function () {
	//     enableInlineVideo(this);
	// });

	//set initial video source
	//setSrc(0);
	vid.setAttribute("src", "videos/skater.webm");

	document.querySelector('.vid1').addEventListener('click', changeVid);
	document.querySelector('.vid2').addEventListener('click', changeVid);




	//swap vids
	//------------------------------------------------------------//
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
	    //vid.play();
	    timerCallback();
	}


	//hammer.js
	//------------------------------------------------------------//

	var videoHolder = document.querySelector('.hammer');

	console.log(videoHolder);

	// create a simple instance
	// by default, it only adds horizontal recognizers
	var mc = new Hammer(videoHolder);

	// listen to events...
	mc.on("panleft panright", panCallback.bind(this));

	function panCallback(e) {
		//message.textContent = e.type +" gesture detected.";
		//get the current mouse/touch position
		var x1;
		x1 = e.center.x;

		//debug
		coords.textContent = "x1: " + x1;

		//calculate position to 100% of the canvas width
		var totalCalc = 100/canvasWidth;
		var percent = x1 * totalCalc;
		//clamp between 0  and 100
		if (percent < 0) {
			percent = 0;
		}
		if (percent > 100) {
			percent = 100;
		}
		//set video to this position
		//get total length of video
		//totoal duration: 5.5

		scrubTime = percent * (vid.duration/100);

		vid.currentTime = scrubTime;

		//update the video if during touch/move
		timerCallback();
	}


	//paint video
	//------------------------------------------------------------//

	function timerCallback() {
		//todo: call this based on the video's frame rate

		//apply the scrub time
		//vid.currentTime = 4;

		if(!mobile) {

			//exit if paused or stopped
			if (vid.paused || vid.ended) {
			  return;
			}
			//do the image processing
			computeFrame();

			//call again recursively
			requestAnimationFrame(timerCallback);
		}


	}


	function computeFrame() {

	    //display the video current time
		//vidTime.textContent = vid.currentTime;

  	    //draw vid frame on the canvas1
  		canvas.getContext('2d').drawImage(vid, 0, 0, canvasWidth, canvasHeight);

  		//draw vid frame on the canvas2
  		canvas2.getContext('2d').drawImage(vid, 0, 0, canvasWidth, canvasHeight);


      // this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
      // let frame = this.ctx1.getImageData(0, 0, this.width, this.height);
      // let l = frame.data.length / 4;

      // for (let i = 0; i < l; i++) {
      //   let r = frame.data[i * 4 + 0];
      //   let g = frame.data[i * 4 + 1];
      //   let b = frame.data[i * 4 + 2];
      //   if (g > 100 && r > 100 && b < 43)
      //     frame.data[i * 4 + 3] = 0;
      // }
      // this.ctx2.putImageData(frame, 0, 0);
      	return;
    }


})();