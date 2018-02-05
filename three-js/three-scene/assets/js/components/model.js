var Model = {
	//-----------------------------------------------------------------------------//
	//FBX loader
	//-----------------------------------------------------------------------------//

	// var loader = new THREE.FBXLoader( manager );
	// loader.load( 'assets/models/fbx/xsi_man_skinning.fbx', function( object ) {

	// 	scene.add (new THREE.Mesh (geometry,
	// 	    new THREE.MeshBasicMaterial ({ color: 0x00ffff, wireframe: true })));


	// 	console.log('loaded object: ', object);

	// 	//notify all items loaded
	// 	allItemsLoaded();


	// 	object.mixer = new THREE.AnimationMixer( object );
	// 	mixers.push( object.mixer );

	// 	var action = object.mixer.clipAction( object.animations[ 0 ] );
	// 	action.play();

	// 	//scene.add( object );

	// }, onProgress, onError );

	load: function(scene, manager, modelPath, texturePath, cb) {
		this.scene = scene;
		this.manager = manager;
		this.cb = cb;
		this.modelTexture = Texture.load(texturePath);
		this.shader = THREE.DiffuseFresnelShader;
		this.modelMat = this.createMat(this.modelTexture, this.shader);

		var objLoader = new THREE.OBJLoader(this.manager);
		objLoader.load(modelPath, this.onModelLoaded.bind(this), onProgress, onError);

		var onProgress = function(xhr) {
			if ( xhr.lengthComputable ) {
				var percentComplete = xhr.loaded / xhr.total * 100;
				console.log( Math.round( percentComplete, 2 ) + '% downloaded' );

				//if all loaded
				if(xhr.loaded === xhr.total) {
					//allItemsLoaded();
				}
			}
		};

		var onError = function( xhr ) {
			console.log('loading manager error: ', xhr);
		};
	},

	onModelLoaded: function(object) {
		object.traverse( function (child) {
			if (child instanceof THREE.Mesh) {
				// switch ( child.material.name ) {
				// 	case "Body" :
				// 		child.material = this.modelMat;
				// 		break;
				// }
				child.material = this.modelMat;
			}
		}.bind(this));

		//size and position obj
		object.scale.x = 3;
		object.scale.y = 3;
		object.scale.z = 3;
		
		this.scene.add(object);
		this.cb();
	},
	
	createMat: function(texture, shader) {
	    var uniforms = THREE.UniformsUtils.clone(shader.uniforms);
	    uniforms[ "texture1" ].value = texture;
	    var parameters = {fragmentShader: shader.fragmentShader, vertexShader: shader.vertexShader, uniforms: uniforms};
	    return new THREE.ShaderMaterial(parameters);
	}
}