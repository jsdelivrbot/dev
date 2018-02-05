var Camera = {
	update: function update() {
		this.camera.aspect = CANVAS_WIDTH / CANVAS_HEIGHT;
		this.camera.updateProjectionMatrix();
	},
	getCamera: function() {
		return this.camera;
	},
	// calcCamDistance: function() {
	// 	//get the camera position from orbit controls
	// 	//call this from debounced ticker
	// 	cameraPosition = controls.getPos();
	// 	camPos.x = cameraPosition.x;
	// 	camPos.y = cameraPosition.y;
	// 	camPos.z = cameraPosition.z;
		
	// 	var distToTarget = camPos.distanceTo( origin );

	//     //animate zoom monitor
	// 	TweenLite.set(".zoom-monitor .zoom-mask", { css: {top: distToTarget + '%'} });
	// }
	init: function() {
		var instance = Object.create(this);
		instance.camera = new THREE.PerspectiveCamera( CONFIG.camera.fov, CANVAS_WIDTH / CANVAS_HEIGHT, 1, 10000 );
		instance.camera.name = CONFIG.camera.name;
		instance.camera.position.x = CONFIG.camera.eye[ 0 ];
		instance.camera.position.y = CONFIG.camera.eye[ 1 ];
		instance.camera.position.z = CONFIG.camera.eye[ 2 ];
		instance.camera.up.x = CONFIG.camera.up[ 0 ];
		instance.camera.up.y = CONFIG.camera.up[ 1 ];
		instance.camera.up.z = CONFIG.camera.up[ 2 ];
		return instance;
	}

}