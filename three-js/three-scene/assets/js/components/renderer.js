var Renderer = {
	init: function(container, camera, scene) {
		var instance = Object.create(this);
		instance.renderer = new THREE.WebGLRenderer({ antialias: true });
		//lense flare
		//renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
		instance.renderer.autoClear = false; // to allow overlay
		instance.renderer.setPixelRatio( window.devicePixelRatio );
		instance.renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);
		instance.renderer.setClearColor( 0x000000 );
		container.appendChild( instance.renderer.domElement );
		instance.camera = camera;
		instance.scene = scene;
		return instance;
	},
	updateSize: function() {
		this.renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);
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