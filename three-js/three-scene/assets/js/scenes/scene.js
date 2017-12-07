//regular scene version
var scene = function(onComplete) {

	//if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

	var stats, controls, projector, canvas, manager, interval,
	camera, scene, renderer, light, raycaster, mouse, popovers;

	var blueishCol = new THREE.Color("rgb(200,255,255)");

	//camera tweens
	//-----------------//

	var zoomSpeed = 1.03;
	//for tweenlite for camera
	var cameraZoom = {
		z: zoomSpeed
	};
	var zoomType = '';
	var zooming = false;

	var cameraPosition 
	var camPos = new THREE.Vector3( 0, 0, 0 );
	//no arguments; will be initialised to (0, 0, 0)
	var origin = new THREE.Vector3();
	

	//custom materials and textures
	var matHeadHands, matShoes, matBody;
	var textureTest;


	//-----------------//

	var clock = new THREE.Clock();
	var delta;
	var mixers = [];
	//for requestAnimationFrame
	var requestId;

	//-----------------------------------------------------------------------------// 
	//initialize
	//-----------------------------------------------------------------------------//

	this.init = function() {

		//-----------------------------------------------------------------------------//
		//setup renderer
		//-----------------------------------------------------------------------------//

		renderer = Renderer.init(container);

		//-----------------------------------------------------------------------------//  
		//setup scene
		//-----------------------------------------------------------------------------// 

		camera = Camera.init();

		scene = new THREE.Scene();

		//for hit detection
		raycaster = new THREE.Raycaster(); // create once
		mouse = new THREE.Vector2(); // create once

		//-----------------------------------------------------------------------------//
		//setup orbit controls
		//-----------------------------------------------------------------------------//

		controls = Controls.init(camera.getCamera(), renderer);

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
		// spotlight #2 -- bluish
		//SpotLight( color, intensity, distance, angle, penumbra, decay )
		var spotlight2 = new THREE.SpotLight(blueishCol, 0.7, 1000, 0.7, 1, 1);
		spotlight2.position.set(-1.19, 20, 1.18);
		//shadows
		//spotlight2.shadowCameraVisible = true;
		//spotlight2.shadowDarkness = 0.70;
		//spotlight2.intensity = 2;
		//spotlight2.castShadow = true;
		scene.add(spotlight2);

		// var helper = new THREE.SpotLightHelper( spotlight2, 2.5 );
		// scene.add(helper);

		//-----------------------------------------------------------------------------//
		// misc. init
		//-----------------------------------------------------------------------------//

		container.addEventListener( 'mousemove', onDocumentMouseMove, false );
		container.addEventListener( 'click', onDocumentClick, false );
		window.addEventListener( 'resize', onWindowResize, false );

		//debounced ticker
		interval = setInterval(debouncedTicker, 40);

		// * re-init
		popovers = Popovers.init(scene);

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

	//-----------------------------------------------------------------------------// 
	// create hit objects
	//-----------------------------------------------------------------------------//


	function onWindowResize() {
		camera.update(window.innerWidth, window.innerHeight);

		renderer.setSize( window.innerWidth, window.innerHeight );
	}

	function update() {
		delta = clock.getDelta();
		requestId = requestAnimationFrame(update);
		  // updateAnimation(delta);

		//cause horizon mesh to always face the camera
		// horizon.lookAt( camera.position );
		
	    //render
	    render();
	    //process camera zoom
	    // * re-init
	    //animateZoom();

	    //update obitcontrolls
	    controls.update();
	}

	function stopUpdate() {
	   cancelAnimationFrame(requestId);
	   requestId = undefined;

	}

	//debounced version of update
	function debouncedTicker() {
		// * re-init
		//hitDetection();
	}


	function render() {
		//update renderer
		var left   = Math.floor( window.innerWidth  * CONFIG.camera.left );
		var bottom = Math.floor( window.innerHeight * CONFIG.camera.bottom );
		var width  = Math.floor( window.innerWidth  * CONFIG.camera.width );
		var height = Math.floor( window.innerHeight * CONFIG.camera.height );
		renderer.setViewport( left, bottom, width, height );
		renderer.setScissor( left, bottom, width, height );
		renderer.setScissorTest( true );
		renderer.setClearColor( CONFIG.camera.background );

		//update camera
		camera.update(width, height);

		renderer.render( scene, camera.getCamera());
	}

	function onDocumentMouseMove( event )
	{
		// the following line would stop any other event handler from firing
		// (such as the mouse's TrackballControls)
		// event.preventDefault();

		mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.width ) * 2 - 1;
		mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.height ) * 2 + 1;

	}

	function onDocumentClick( event ) {
		//call to popovers onDoc Click
	}

}