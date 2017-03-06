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
    var deltaText = document.getElementById('delta')

    //scrubed time
    var mouseDnScrubTime = 0;
    var scrubTime = 0;


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
	setSrc(0);

	vid.load();
	vid.play();
	// pause video on load
	//vid.pause();
	//paint to canvas
	timerCallback();

	//add event listeners
	//vid.addEventListener('play', timerCallback());
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
		        "videos/googlevid.webm",
		        "videos/video1.ogv",
		        "videos/video1.mp4"
		        ];
		v[1] = [
		        "videos/googlevid.webm",
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
	}


	//hammer.js
	//------------------------------------------------------------//

	var videoHolder = document.querySelector('.hammer');

	// create a simple instance
	// by default, it only adds horizontal recognizers
	var mc = new Hammer(videoHolder);

	// listen to events...

	videoHolder.addEventListener("mousedown", function(){
		mouseDnScrubTime = scrubTime;
		console.log(mouseDnScrubTime);
	});


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

	}


	//paint video
	//------------------------------------------------------------//

	var delta = 0;

	function timerCallback() {

		// 	if(!mobile) {

		// 		//exit if paused or stopped
		// 		// if (vid.paused || vid.ended) {
		// 		//   return;
		// 		// }
        
        //display the video current time
    	vidTime.textContent = vid.currentTime;

    	//debug
    	deltaText.textContent = scrubTime - mouseDnScrubTime;

    	//find difference between mouse down position to current position
		mouseDnScrubTime += (scrubTime - mouseDnScrubTime) * 0.1;

		vid.currentTime = mouseDnScrubTime;


        //display the video current time
    	vidTime.textContent = vid.currentTime;


		//do the image processing
		computeFrame();

		//call again recursively
		requestAnimationFrame(timerCallback);
	

	}

	// function timerCallback() {
	// 	setInterval(function(){  

		    
	// 	}, 40);
	// }


	function computeFrame() {

		console.log('computeFrame called')

  	    //draw vid frame on the canvas1
  		//canvas.getContext('2d').drawImage(vid, 0, 0, canvasWidth, canvasHeight);

  		//draw vid frame on the canvas2
  		//canvas2.getContext('2d').drawImage(vid, 0, 0, canvasWidth, canvasHeight);

  	   var ctx1 = canvas.getContext('2d');
       ctx1.drawImage(vid, 0, 0, canvasWidth, canvasHeight);
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