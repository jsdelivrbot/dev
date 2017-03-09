(function() {

	//placeholder for now
	var mobile = false;

	//for debugging

	var scrubtimeCoords = document.getElementById('co-oridinates');
	
	var vidTimeDebug = document.getElementById('vid-time');
	var mouseDnScrubTimeDebug = document.getElementById('vid1-dntime');

	//get video
	// var vid = document.querySelector(".video1");
	// var vid2 = document.querySelector(".video2");
	//get the canvases
    var canvas = document.querySelector('#c1');
    // var canvas2 = document.querySelector('#c2');
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height


    //scrubed time
    // var mouseDnScrubTime = 0;
    var scrubTime = 0;
    
    //create video objects
    // var videoList = [
    // 	{
    // 		video: document.querySelector(".video1"),
    // 		mouseDnScrubTime: 0,
    // 		velocity: 0.7,
    // 		isMainVid: true
    // 	},
    // 	{
    // 		//create ghost video
    // 		video: document.createElement('video'),
    // 		mouseDnScrubTime: 0,
    // 		velocity: 0.3
    // 	},
    // 	{
    // 		//create ghost video
    // 		video: document.createElement('video'),
    // 		mouseDnScrubTime: 0,
    // 		velocity: 0.1
    // 	}
    // ]


	//create video factory
	const videoFactory = {
	  Video (vType, velocity) {
	    return Object.create(this.vidType[vType]);
	  },

	  vidType: {
	    main: {
	    	video: document.createElement('video'),
	    	mouseDnScrubTime: 0,
	    	isMainVid: true
	    },
	    onionSkin: {
			//create ghost video
			video: document.createElement('video'),
			mouseDnScrubTime: 0,
			globalAlpha: 0.5

	    }

	  }
	};

    var videoList = [];


	//init
	//------------------------------------------------------------//

	//(selector for main vid, array of velocity values for main then skins)
	//init(".video1", 0.7, [0.3, 0.1, 0.05]);
   	//init(".video1", 0.1, [0.1, 0.3, 0.7]);
   	init(".video1", 0.1, [0.5, 1]);

	function init (mainVid, velocity, onionSkins) {

		//create array of video onion skin video objects
		for (var i = 0; i <  onionSkins.length; i++) {
			videoList[i] = videoFactory.Video('onionSkin');
			videoList[i].velocity = onionSkins[i];
		}

		//add the main video to the front of the array
		var mainVid = videoFactory.Video('main');
		mainVid.video.classList.add('video1');
		mainVid.velocity = velocity;	
		videoList.unshift(mainVid);
	

		//if mobile, enable inline video using
		//iphone-inline-video plugin
		// or if you have multiple videos:
		// $('video').each(function () {
		//     enableInlineVideo(this);
		// });
		if(mobile) {
			enableInlineVideo(vid);
		}


		//set initial video source for all
		for (var i = 0; i <  videoList.length; i++) {
			setSrc(videoList[i].video, 0);
		}
		// setSrc(videoList[0].video, 0);
		
		//enable dragging (drag element, video list)
		enableDrag(document.querySelector('.hammer'));


		// pause video on load
		//vid.pause();
		//run loop
		timerCallback();

		//add event listeners
		//vid.addEventListener('play', timerCallback());
		var buttonArray = document.querySelectorAll('vid-bttn');
		for (var i = 0; i <  buttonArray.length; i++) {
			buttonArray[i].addEventListener('click', changeVid);
		}


	}


	function enableDrag(dragEl) {

		// set teh initial mouse down scrubtime
		dragEl.addEventListener("mousedown", onMouseDown.bind(this));

		function onMouseDown(e) {


			for (var i = 0; i <  videoList.length; i++) {
				//videoList[i].mouseDnScrubTime = calcScrubTime(e.clientX);
				videoList[i].mouseDnScrubTime = scrubTime;
				//reset the global alpha
				videoList[i].globalAlpha = 0.5;
			}
			//videoList[0].mouseDnScrubTime = scrubTime;
			
			//debug
			mouseDnScrubTimeDebug.textContent = videoList[0].mouseDnScrubTime;

		}

		//hook up hammer.js------------------//

		// create a simple instance
		// by default, it only adds horizontal recognizers
		var mc = new Hammer(dragEl);

		mc.on("panleft panright", panCallback.bind(this));

		function panCallback(e) {

			//get the current mouse/touch position
			scrubTime = calcScrubTime(e.center.x);

		}


		function calcScrubTime(xpos) {
			//calculate position to 100% of the canvas width
			var totalCalc = 100/canvasWidth;
			var percent = xpos * totalCalc;
			//clamp between 0  and 100
			if (percent < 0) {
				percent = 0;
			}
			if (percent > 100) {
				percent = 100;
			}
			//set video to this position
			//pass in duration of the first video
			var st = percent * (videoList[0].video.duration/100);

			//debug
			scrubtimeCoords.textContent = scrubTime;

			return st;
		}
	}




	//swap vids
	//------------------------------------------------------------//
	function changeVid(e){

		var n = e.target.dataset.video;
		e.preventDefault();
		setSrc(n);

	}

	function setSrc(video, n) {

		var v = new Array();

		v[0] = [
				//"videos/skater.webm",
		        "videos/googlevid.webm",
		        "videos/video1.ogv",
		        "videos/video1.mp4"
		        ];
		v[1] = [
				//"videos/skater.webm",
		        "videos/googlevid.webm",
		        "videos/video2.ogv",
		        "videos/video2.mp4"
		        ];
		
		// console.log('Modernizr.video: ', Modernizr.video);
		// console.log('Modernizr.video.webm: ', Modernizr.video.webm);
		// console.log('Modernizr.video.ogg: ', Modernizr.video.ogg);
		// console.log('Modernizr.video.h264: ', Modernizr.video.h264);

	    if(Modernizr.video && Modernizr.video.webm) {
	        video.setAttribute("src", v[n][0]);

	    } else if(Modernizr.video && Modernizr.video.ogg) {
	        video.setAttribute("src", v[n][1]);
	    } else if(Modernizr.video && Modernizr.video.h264) {
     	    video.setAttribute("src", v[n][2]);
    	}

    	video.load();
    	//video.play();

	}



	//paint video
	//------------------------------------------------------------//

	function calcScrub(video) {

    	//find difference between mouse down position to current position
		video.mouseDnScrubTime += (scrubTime - video.mouseDnScrubTime) * video.velocity;

		video.video.currentTime = video.mouseDnScrubTime;

        //debug
    	vidTimeDebug.textContent = video.video.currentTime;
	}


	function timerCallback() {

		// if(!mobile) {

		// //exit if paused or stopped
		// if (vid.paused || vid.ended) {
		//   return;
		// }

		//do the image processing (must put this first)
		for (var i = 0; i <  videoList.length; i++) {
			//(video, index order to draw)
			computeFrame(videoList[i]);
			calcScrub(videoList[i]);
		}
		// computeFrame(videoList[0].video);
		// calcScrub(videoList[0]);


		//call again recursively
		requestAnimationFrame(timerCallback);
	
	}


	function computeFrame(video) {

		var ctx = canvas.getContext("2d");

		if(video.isMainVid) {

		    //draw vid frame on the canvas1
			ctx.drawImage(video.video, 0, 0, canvasWidth, canvasHeight);

		} else if (video.globalAlpha !== 0) {

		    //draw vid frame on the canvas1
		    ctx.globalAlpha = video.globalAlpha;
			ctx.drawImage(video.video, 0, 0, canvasWidth, canvasHeight);
			
			//clamp between 0  and 0.5
			if (video.globalAlpha < 0) {
				video.globalAlpha = 0;
			}
			if (video.globalAlpha > 0.5) {
				video.globalAlpha = 0.5;
			}

			//slowly fade away the alpha
			video.globalAlpha = video.globalAlpha - 0.005
			
			console.log(video.globalAlpha);

		}

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