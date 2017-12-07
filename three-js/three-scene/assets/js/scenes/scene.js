//regular scene version
var scene = function(onComplete) {

	//if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

	var controls, manager, interval,
	camera, scene, renderer, light, mouse;

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
		controls = Controls.init(camera.getCamera(), renderer.renderer);
		manager = LoadingManager.init();

		//-----------------------------------------------------------------------------//
		// load assets
		//-----------------------------------------------------------------------------//

		// Skybox
		var cubeMatBox = CubeMatBox.init('assets/textures/cube/sky/');
		scene.add(cubeMatBox);

		//floor
		var floorTexture = Texture.load('assets/textures/uv-grid.jpg');
		var floorMaterial = new THREE.MeshLambertMaterial({ map: floorTexture });
		var floorGeometry = new THREE.CircleGeometry( 20, 50 );
		var floor = new THREE.Mesh(floorGeometry, floorMaterial);
		floor.position.y = -2;
		floor.rotation.x = (Math.PI / 2) * -1;
		scene.add(floor);

		//model
		 var model = Model.load(scene, manager, 'assets/models/obj/teapot/teapot.obj', 
		 	'assets/textures/uv-grid.jpg', function(model) {});
		 

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

}