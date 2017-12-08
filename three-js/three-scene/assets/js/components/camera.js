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
		this.camera = new THREE.PerspectiveCamera( CONFIG.camera.fov, CANVAS_WIDTH / CANVAS_HEIGHT, 1, 10000 );
		this.camera.name = CONFIG.camera.name;
		this.camera.position.x = CONFIG.camera.eye[ 0 ];
		this.camera.position.y = CONFIG.camera.eye[ 1 ];
		this.camera.position.z = CONFIG.camera.eye[ 2 ];
		this.camera.up.x = CONFIG.camera.up[ 0 ];
		this.camera.up.y = CONFIG.camera.up[ 1 ];
		this.camera.up.z = CONFIG.camera.up[ 2 ];
		return Object.create(this);
	}

}