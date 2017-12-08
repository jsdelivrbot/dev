var CONFIG = {
	camera: {
		name: 'camera',
		left: 0,
		bottom: 0,
		width: 1,
		height: 1,
		background: new THREE.Color().setRGB( 0.5, 0.5, 0.7 ),
		eye: [ 2, 18, -100 ],
		up: [ 0, 1, 0 ],
		fov: 30,
	}
}
var CONTAINER = null;
var CANVAS_WIDTH = window.innerWidth;
var CANVAS_HEIGHT = window.innerHeight;
