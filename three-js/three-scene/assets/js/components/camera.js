var Camera = function() {
	var camera;

	function init() {
		camera = new THREE.PerspectiveCamera( CONFIG.camera.fov, window.innerWidth / window.innerHeight, 1, 10000 );
		camera.name = CONFIG.camera.name;
		camera.position.x = CONFIG.camera.eye[ 0 ];
		camera.position.y = CONFIG.camera.eye[ 1 ];
		camera.position.z = CONFIG.camera.eye[ 2 ];
		camera.up.x = CONFIG.camera.up[ 0 ];
		camera.up.y = CONFIG.camera.up[ 1 ];
		camera.up.z = CONFIG.camera.up[ 2 ];
	}

	var cam = {
		update: function update(width, height) {
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
		},
		getCamera: function() {
			return camera;
		},
	}
	return {
		init: function() {
			init();
			return cam;
		}
	}
}