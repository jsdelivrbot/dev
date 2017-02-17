(function () {

	init();

	function init() {
		console.log('this is working');

		//initailize webgl
		var canvas = document.getElementById('viewport-canvas');
		var gl = canvas.getContext('webgl');
		if(!gl) {
			console.log('webgl not supported, falling back on experimental');
			gl = canvas.getConetxt('experimental-webgl');
		}
		if(!gl) {
			console.log('your browser does not support webgl');
		}


	}

})();