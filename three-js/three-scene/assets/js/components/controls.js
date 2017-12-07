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
		//set up orbit controls
		this.controls = new THREE.OrbitControls( camera, renderer.domElement );
		this.controls.autoRotate = true;
		this.controls.autoRotateSpeed = -0.15;
		this.controls.enableDamping = true;
		this.controls.dampingFactor = 0.1;
		this.controls.enablePan = false;
		this.controls.rotateSpeed = 0.2;
		this.controls.minDistance = 25;
		this.controls.maxDistance = 42;
		this.controls.maxPolarAngle = Math.PI/2 - .04;
		this.controls.target.set( 0, 12, 0 );
		return this.controls;
	}
}