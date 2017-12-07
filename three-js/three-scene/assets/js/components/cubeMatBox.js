var CubeMatBox = function() {
	//-----------------------------------------------------------------------------//
	//texture loader
	//-----------------------------------------------------------------------------//
	function init() {
		var texLoader = new THREE.TextureLoader();

		// Textures
		var r = 'assets/textures/cube/sky/';
		var urls = [ r + "px.jpg", r + "nx.jpg",
					 r + "py.jpg", r + "ny.jpg",
					 r + "pz.jpg", r + "nz.jpg" ];

		textureCube = new THREE.CubeTextureLoader().load( urls );
		textureCube.format = THREE.RGBFormat;
		textureCube.mapping = THREE.CubeReflectionMapping;

		var cubeShader = THREE.ShaderLib[ "cube" ];
		var cubeMaterial = new THREE.ShaderMaterial( {
			fragmentShader: cubeShader.fragmentShader,
			vertexShader: cubeShader.vertexShader,
			uniforms: cubeShader.uniforms,
			depthWrite: false,
			side: THREE.BackSide
		} );

		cubeMaterial.uniforms[ "tCube" ].value = textureCube;
		var mesh = new THREE.Mesh( new THREE.BoxGeometry( 100, 100, 100 ), cubeMaterial );
	}

	return {
		init: function() {
			return cubeMaterial;
		}
	}
}