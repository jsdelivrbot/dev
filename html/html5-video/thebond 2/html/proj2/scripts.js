(function() {

	var video;
	var canvas;

	function startPlayback()
	{
	  if (!video) {
	    video = document.createElement('video');
	    video.src = 'image.mp4';
	    video.loop = true;
	    video.addEventListener('playing', paintVideo);
	  }
	  video.play();
	}

	function paintVideo()
	{
	  if (!canvas) {
	    canvas = document.createElement('canvas');
	    canvas.width = video.videoWidth;
	    canvas.height = video.videoHeight;
	    document.body.appendChild(canvas);
	  }
	  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
	  if (!video.paused)
	    requestAnimationFrame(paintVideo);
	}
	
})();	

