var Renderer = {
	init: function(container) {
		this.renderer = new THREE.WebGLRenderer( { antialias: true } );
		//lense flare
		//renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
		this.renderer.autoClear = false; // to allow overlay
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		this.renderer.setClearColor( 0x000000 );
		container.appendChild( this.renderer.domElement );
		return this.renderer;
	},
	updateSize: {

	},
	render: {

	}
}