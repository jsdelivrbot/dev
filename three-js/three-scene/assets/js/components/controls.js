var Controls = {
	activate: function() {
		// disable controls
		this.controls.enableZoom = true;
		this.controls.enableRotate = true;
		this.controls.autoRotate = true;
	},
	deactivate: function() {
		// disable controls
		this.controls.enableZoom = false;
		this.controls.enableRotate = false;
		this.controls.autoRotate = false;
	},
	init: function(camera, renderer) {
		var instance = Object.create(this);
		//set up orbit controls
		instance.controls = new THREE.OrbitControls( camera, renderer.domElement );
		instance.controls.autoRotate = true;
		instance.controls.autoRotateSpeed = -0.15;
		instance.controls.enableDamping = true;
		instance.controls.dampingFactor = 0.1;
		instance.controls.enablePan = false;
		instance.controls.rotateSpeed = 0.2;
		instance.controls.minDistance = 25;
		instance.controls.maxDistance = 42;
		instance.controls.maxPolarAngle = Math.PI/2 - .04;
		instance.controls.target.set( 0, 12, 0 );
		return instance.controls;
	}
}