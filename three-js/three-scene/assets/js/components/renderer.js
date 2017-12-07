var Renderer = {
	init: function(container, camera, scene) {
		this.renderer = new THREE.WebGLRenderer( { antialias: true } );
		//lense flare
		//renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
		this.renderer.autoClear = false; // to allow overlay
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		this.renderer.setClearColor( 0x000000 );
		container.appendChild( this.renderer.domElement );
		this.camera = camera;
		this.scene = scene;
		return this;
	},
	updateSize: function() {
		this.renderer.setSize( window.innerWidth, window.innerHeight );
	},
	render: function() {
		//update renderer
		var left   = Math.floor(window.innerWidth  * CONFIG.camera.left);
		var bottom = Math.floor(window.innerHeight * CONFIG.camera.bottom);
		var width  = Math.floor(window.innerWidth  * CONFIG.camera.width);
		var height = Math.floor(window.innerHeight * CONFIG.camera.height);
		this.renderer.setViewport(left, bottom, width, height);
		this.renderer.setScissor(left, bottom, width, height);
		this.renderer.setScissorTest(true);
		this.renderer.setClearColor(CONFIG.camera.background);

		this.renderer.render(this.scene, this.camera);
	}
}