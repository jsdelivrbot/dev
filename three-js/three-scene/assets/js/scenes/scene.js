//regular scene version
var scene = function(onComplete) {

	//if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

	var stats, controls, projector, canvas, manager, interval,
	camera, scene, renderer, light, raycaster, mouse, popovers;

	//custom materials and textures
	var matHeadHands, matShoes, matBody;
	var textureTest;



	// var clock = new THREE.Clock();
	// var delta;
	//for requestAnimationFrame
	var requestId;


	this.init = function() {
		//-----------------------------------------------------------------------------//  
		// init
		//-----------------------------------------------------------------------------//

		camera = Camera.init();
		scene = new THREE.Scene();
		renderer = Renderer.init(container, camera.getCamera(), scene);
		mouse = new THREE.Vector2(); // create once

		//-----------------------------------------------------------------------------//
		//setup orbit controls
		//-----------------------------------------------------------------------------//

		controls = Controls.init(camera.getCamera(), renderer.renderer);

		// model
		manager = new THREE.LoadingManager();
		manager.onProgress = function( item, loaded, total ) {
			console.log( item, loaded, total );
		};

		var onProgress = function( xhr ) {

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

		// Skybox
		var cubeMatBox = CubeMatBox.init('assets/textures/cube/sky/');

		scene.add( cubeMatBox );

		//-----------------------------------------------------------------------------//
		//create ground plane
		//-----------------------------------------------------------------------------//

		var floorTexture = Texture.load('assets/textures/uv-grid.jpg');

		var floorMaterial = new THREE.MeshLambertMaterial( { map: floorTexture } );

		var floorGeometry = new THREE.CircleGeometry( 20, 50 );
		var floor = new THREE.Mesh(floorGeometry, floorMaterial);
		floor.position.y = -2;
		floor.rotation.x = (Math.PI / 2) * -1;
		// Note the mesh is flagged to receive shadows
		//floor.receiveShadow = true;
		scene.add(floor);

		//-----------------------------------------------------------------------------//
		//load model
		//-----------------------------------------------------------------------------//

		var textureTest = Texture.load('assets/textures/uv-grid.jpg');

		//test the texture using a plane
		//var testMat, testPlane;
		// how many times to repeat in each direction; the default is (1,1),
		//texture.repeat.set( 1, 1 ); 
		// material = new THREE.MeshLambertMaterial({ map : texture });
		// plane = new THREE.Mesh(new THREE.PlaneGeometry(400, 3500), material);
		// plane.position.x = 100;
		// scene.add(plane);

		loadObj();

	    //materials
		//---------------------//

		function CreateMat(texture, shader) {
		    var uniforms = THREE.UniformsUtils.clone(shader.uniforms);
		    uniforms[ "texture1" ].value = texture;
		    var parameters = {fragmentShader: shader.fragmentShader, vertexShader: shader.vertexShader, uniforms: uniforms};
		    return new THREE.ShaderMaterial(parameters);
		}
		
		var shader = THREE.DiffuseFresnelShader;

		//main texture
		mainTex = CreateMat(textureTest, shader);

		//test material using sphere
	    // geometry = new THREE.SphereGeometry(10, 80, 80);
	    // mesh = new THREE.Mesh(geometry, material1);
	    // group.add(mesh);

		function loadObj() {
			// model
			var objLoader = new THREE.OBJLoader( manager );
			objLoader.load('assets/models/obj/teapot/teapot.obj', function ( object ) {
				object.traverse( function ( child ) {
					if ( child instanceof THREE.Mesh ) {
						// switch ( child.material.name ) {
						// 	case "Body" :
						// 		child.material = mainTex;
						// 		break;
						// }
						child.material = mainTex;
					}
				} );

				//size and position obj
				object.scale.x = 3;
				object.scale.y = 3;
				object.scale.z = 3;
				//object.position.y = - 95;
				
				//scene.add( object );
				scene.add(object);

			}, onProgress, onError );
		}

		//-----------------------------------------------------------------------------//
		// setup lights
		//-----------------------------------------------------------------------------//

		//for ground plane
		//----------------
		//SpotLight( color, intensity, distance, angle, penumbra, decay )
		var blueishCol = new THREE.Color("rgb(200,255,255)");
		var spotlight2 = new THREE.SpotLight(blueishCol, 0.7, 1000, 0.7, 1, 1);
		spotlight2.position.set(-1.19, 20, 1.18);
		scene.add(spotlight2);

		//-----------------------------------------------------------------------------//
		// misc. init
		//-----------------------------------------------------------------------------//

		container.addEventListener( 'mousemove', onDocumentMouseMove, false );
		window.addEventListener( 'resize', onWindowResize, false );

		//setup popovers
		popovers = Popovers.init(scene, container, mouse, camera.getCamera(), renderer.renderer.context.canvas, controls);

		//debounced ticker
		interval = setInterval(debouncedTicker, 40);

		//call to update animation
		update();

		//notify all items loaded
		setTimeout(function() {
			allItemsLoaded();
		}, 1500);

	}//init

	//-----------------------------------------------------------------------------// 
	// loading animation/activation
	//-----------------------------------------------------------------------------//

	//once all items loaded, tween in scene...

	function allItemsLoaded() {
		console.log('scene fully loaded');
		//notify scene loaded commplete
		onComplete();
	}

	function onWindowResize() {
		camera.update(window.innerWidth, window.innerHeight);
		renderer.updateSize();
	}

	function update() {
		// delta = clock.getDelta();
		requestId = requestAnimationFrame(update);
		// updateAnimation(delta);

	    renderer.render();
	    //update camera
	    camera.update(window.innerWidth, window.innerHeight);

	    //update obitcontrolls
	    controls.update();
	}

	function stopUpdate() {
	   cancelAnimationFrame(requestId);
	   requestId = undefined;
	}

	//debounced version of update
	function debouncedTicker() {
		
	}

	function onDocumentMouseMove( event )
	{
		// the following line would stop any other event handler from firing
		// (such as the mouse's TrackballControls)
		// event.preventDefault();

		mouse.x = ( ( event.clientX - renderer.renderer.domElement.offsetLeft ) / renderer.renderer.domElement.width ) * 2 - 1;
		mouse.y = - ( ( event.clientY - renderer.renderer.domElement.offsetTop ) / renderer.renderer.domElement.height ) * 2 + 1;

	}

	function onDocumentClick( event ) {
		//call to popovers onDoc Click
	}

}