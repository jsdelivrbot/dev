//regular scene version
var Scene = function(onComplete) {

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
		renderer = Renderer.init(CONTAINER, camera.getCamera(), scene);
		mouse =  Mouse.init();
		controls = Controls.init(camera.getCamera(), renderer.renderer);
		manager = LoadingManager.init();

		window.addEventListener( 'resize', onWindowResize, false );

		//setup popovers
		popovers = Popovers.init(scene, mouse, camera.getCamera(), controls);

		//update
		update();

		//notify all items loaded
		setTimeout(function() {
			allItemsLoaded();
		}, 1500);

		//-----------------------------------------------------------------------------//
		// load assets
		//-----------------------------------------------------------------------------//

		// Skybox
		CubeMatBox.init(scene, 'assets/textures/cube/sky/');

		// floor
		var floorTexture = Texture.load('assets/models/obj/teapot/textures/uv-grid.jpg');
		var floorMaterial = new THREE.MeshLambertMaterial({ map: floorTexture });
		var floorGeometry = new THREE.CircleGeometry( 20, 50 );
		var floor = new THREE.Mesh(floorGeometry, floorMaterial);
		floor.position.y = -2;
		floor.rotation.x = (Math.PI / 2) * -1;
		scene.add(floor);

		//model
		 var model = Model.load(scene, manager, 'assets/models/obj/teapot/teapot.obj', 
		 	'assets/models/obj/teapot/textures/uv-grid.jpg', function(model) {});
		 
		//-----------------------------------------------------------------------------//
		// lights
		//-----------------------------------------------------------------------------//

		//SpotLight( color, intensity, distance, angle, penumbra, decay )
		var blueishCol = new THREE.Color("rgb(200,255,255)");
		var spotlight2 = new THREE.SpotLight(blueishCol, 0.7, 1000, 0.7, 1, 1);
		spotlight2.position.set(-1.19, 20, 1.18);
		scene.add(spotlight2);

	}

	function allItemsLoaded() {
		console.log('scene fully loaded');
		//notify scene loaded commplete
		onComplete();
	}

	function onWindowResize() {
		CANVAS_WIDTH = window.innerWidth;
		CANVAS_HEIGHT = window.innerHeight;

		camera.update();
		renderer.updateSize();
	}

	function update() {
		// delta = clock.getDelta();
		requestId = requestAnimationFrame(update);
		// updateAnimation(delta);
	    renderer.render();
	    //update camera
	    camera.update();
	    //update obitcontrolls
	    controls.update();
	}

	function stopUpdate() {
	   cancelAnimationFrame(requestId);
	   requestId = undefined;
	}
}