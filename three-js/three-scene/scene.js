//regular scene version
var scene = function(onComplete) {

	//if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

	var stats, controls, projector, canvas, manager, interval,
	camera, camera2, scene, renderer, light, raycaster, mouse;

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
	var distToTarget = 0;

	//hit detection
	//-----------------//

	var hitFocused = false;
	var overHitArea = false;
	var hitObj = {
		name: '',
		x: 0,
		y: 0
	};
	var popovers = [];
	var popover = null;

	//custom materials and textures
	var matHeadHands, matShoes, matBody;
	var textureHeadHands, textureShoes, textureBody;
	//background mesh
	// var backgroundMesh;
	// var horizon;


	//-----------------//

	//var debugItems = [{'cameraZoomz' : cameraZoom.z}];

	//set up multiple views
	var	views = [
	//large view
	{
		left: 0,
		bottom: 0,
		width: 1,
		height: 1,
		background: new THREE.Color().setRGB( 0.5, 0.5, 0.7 ),
		eye: [ 2, 18, -100 ],
		up: [ 0, 1, 0 ],
		fov: 30,
		updateCamera: function ( camera2, scene, mouseX, mouseY) {
			//optionally update camera
		}
	},
	//small view
		// {
		// 	left: 0,
		// 	bottom: 0,
		// 	width: 0.2,
		// 	height: 0.2,
		// 	background: new THREE.Color().setRGB( 0.5, 0.5, 0.7 ),
		// 	eye: [ 0, 10, 100 ],
		// 	up: [ 0, 1, 0 ],
		// 	fov: 30,
		// 	updateCamera: function ( camera2, scene, mouse.x, mouseY ) {
		// 		//optionally update camera
		// 	}
		// }
	];

	var clock = new THREE.Clock();
	var delta;
	var mixers = [];
	var hitObjects = [];
	//for requestAnimationFrame
	var requestId;

	//-----------------------------------------------------------------------------// 
	//destroy the scene
	//-----------------------------------------------------------------------------//

	this.activate = function() {

		// disable controls
		controls.enableZoom = true;
		controls.enableRotate = true;
		controls.autoRotate = true;
		//start the scene again
		//update();
	}

	this.deactivate = function() {

		// disable controls
		controls.enableZoom = false;
		controls.enableRotate = false;
		controls.autoRotate = false;
		//cancel scene update
		//stopUpdate();
		//clear rendere

		//clear popovers
		clearPopovers();

		// //Stop the animation
		// cancelAnimationFrame(requestId);
		// //clear the debounce interval
	 //    clearInterval(interval);

		// //remove all geometry with their materials and maps, from the scene
		// var i;
		// for( var i = scene.children.length - 1; i >= 0; i--) {
		//      obj = scene.children[i];

		//      //console.log(scene.children[i])
		//      //if mesh group
		//      if (obj.type === "Mesh") {

		//      	scene.remove(obj);
		//      	if (obj.geometry) {
		//      		obj.geometry.dispose();
		//      	}
		//      	if (obj.material) {
		//      		if (obj.material.map) {
		//      			obj.material.map.dispose();
		//      			//deallocate the memory
		//      			//renderer.deallocateTexture( obj.material.map );
		//      		}
		//      		obj.material.dispose();
		//      	}

		//      }

		//   }

	 //    matHeadHands.dispose();
	 //    matShoes.dispose();
	 //    matBody.dispose();

	 //    textureHeadHands.dispose();
	 //    textureShoes.dispose();
	 //    textureBody.dispose();

	 //    //renderer.domElement.addEventListener('dblclick', null, false); //remove listener to render

	 //    delete(projector);
	 //    delete(controls);
	 //    delete(manager);
	 //    delete(renderer);
	 //    delete(camera);
	 //    delete(camera2);
	 //    delete(controls);
	 //    delete(raycaster);
	 //    delete(texLoader);
	 //    delete(spotlight2);

	 //    //remove scene
	 //    scene = null;
	    
	 //    //remove event listeners
		// container.removeEventListener( 'mousemove', onDocumentMouseMove, false );
		// container.removeEventListener( 'click', onDocumentClick, false );
		// window.removeEventListener( 'resize', onWindowResize, false );
		// //TweenLite.ticker.removeEventListener("tick", ticker);

		// //empty container
		// empty(container);
	 //    function empty(elem) {
		//     while (elem.lastChild) elem.removeChild(elem.lastChild);
		// }

	}


	//-----------------------------------------------------------------------------// 
	//initialize
	//-----------------------------------------------------------------------------//

	this.init = function() {

		//-----------------------------------------------------------------------------//
		//setup renderer
		//-----------------------------------------------------------------------------//

		renderer = new THREE.WebGLRenderer( { antialias: true } );
		//lense flare
		//renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
		renderer.autoClear = false; // to allow overlay
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.setClearColor( 0x000000 );
		container.appendChild( renderer.domElement );
		// enable shadows on the renderer 
		//renderer.shadowMapEnabled = true;

		//-----------------------------------------------------------------------------//  
		//setup camara
		//-----------------------------------------------------------------------------// 
		//set up views
		for (var ii =  0; ii < views.length; ++ii ) {

			var view = views[ii];

			camera2 = new THREE.PerspectiveCamera( view.fov, window.innerWidth / window.innerHeight, 1, 10000 );
			camera2.name = "camera1";
			camera2.position.x = view.eye[ 0 ];
			camera2.position.y = view.eye[ 1 ];
			camera2.position.z = view.eye[ 2 ];
			camera2.up.x = view.up[ 0 ];
			camera2.up.y = view.up[ 1 ];
			camera2.up.z = view.up[ 2 ];

			//set up orbit controls
			controls = new THREE.OrbitControls( camera2, renderer.domElement );
			controls.autoRotate = true;
			controls.autoRotateSpeed = -0.15;
			controls.enableDamping = true;
			controls.dampingFactor = 0.1;
			controls.enablePan = false;
			controls.rotateSpeed = 0.2;
			controls.minDistance = 25;
			controls.maxDistance = 42;
			controls.maxPolarAngle = Math.PI/2 - .04;
			controls.target.set( 0, 12, 0 );

			view.camera = camera2;

		}

		scene = new THREE.Scene();

		//for hit detection
		raycaster = new THREE.Raycaster(); // create once
		mouse = new THREE.Vector2(); // create once

		//-----------------------------------------------------------------------------//
		//debugging
		//-----------------------------------------------------------------------------//

		// grid
		// var gridHelper = new THREE.GridHelper( 28, 28, 0x303030, 0x303030 );
		// gridHelper.position.set( 0, - 0.04, 0 );
		// scene.add( gridHelper );

		// stats
		// stats = new Stats();
		// container.appendChild( stats.dom );

		//must init this after container.appendChild(renderer.domElement)
		//because we need the canvas to be created first in order to ad mouseover events to it
		//initMouse(container);

		//axes
		// var axes = new THREE.AxisHelper(2);
		// scene.add(axes);

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


		//-----------------------------------------------------------------------------//
		//FBX loader
		//-----------------------------------------------------------------------------//

		// var loader = new THREE.FBXLoader( manager );
		// loader.load( 'assets/media/three-scene/models/fbx/xsi_man_skinning.fbx', function( object ) {

		// 	scene.add (new THREE.Mesh (geometry,
		// 	    new THREE.MeshBasicMaterial ({ color: 0x00ffff, wireframe: true })));


		// 	console.log('loaded object: ', object);

		// 	//notify all items loaded
		// 	allItemsLoaded();


		// 	object.mixer = new THREE.AnimationMixer( object );
		// 	mixers.push( object.mixer );

		// 	var action = object.mixer.clipAction( object.animations[ 0 ] );
		// 	action.play();

		// 	//group.add(object);

		// 	//scene.add( object );


		// }, onProgress, onError );

		//-----------------------------------------------------------------------------//
		//create backdrop
		//-----------------------------------------------------------------------------//

		// //var testMat = new THREE.MeshBasicMaterial ({ color: 0x00ffff, wireframe: true });
		// var texLoader = new THREE.TextureLoader();

		// // Load the background texture
		// var texture = texLoader.load( 'assets/media/three-scene/textures/backdrop.jpg' );               
		// var backgroundMat = new THREE.MeshBasicMaterial({map: texture});
		// backgroundMesh = new THREE.Mesh( new THREE.PlaneGeometry(75, 35, 1, 1), backgroundMat);
		// backgroundMesh.position.y = 10;
		// backgroundMesh.position.x = 0;

		// //cause it to always be at the back
		// backgroundMesh.material.depthTest = false;
		// backgroundMesh.material.depthWrite = false;

		// scene.add(backgroundMesh);

		//-----------------------------------------------------------------------------//
		//texture loader
		//-----------------------------------------------------------------------------//

		var texLoader = new THREE.TextureLoader();

		//-----------------------------------------------------------------------------//
		//create cubemap skybox
		//-----------------------------------------------------------------------------//

		// Textures
		var r = 'assets/media/three-scene/textures/cube/crowd/';
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

		// Skybox

		cubeMesh = new THREE.Mesh( new THREE.BoxGeometry( 100, 100, 100 ), cubeMaterial );
		scene.add( cubeMesh );


		// //-----------------------------------------------------------------------------//
		// //create horizon
		// //-----------------------------------------------------------------------------//

		// //create backdrop floor for horizon line
		// var horizonTexture = texLoader.load('assets/media/three-scene/textures/horizon.png', function() {

		// 	horizonTexture.wrapS = horizonTexture.wrapT = THREE.RepeatWrapping; 
		// 	horizonTexture.repeat.set( 1, 1 );

		// });
		// // PlaneGeometry(width, height, widthSegments, heightSegments)
		// horizonGeometry = new THREE.PlaneGeometry(200, 85, 1, 1);
		// //var horizonMat = new THREE.MeshBasicMaterial({map: horizonTexture})
		// var horizonMat = new THREE.MeshPhongMaterial();
		// horizonMat.map = horizonTexture;
		// horizonMat.transparent = true;
		// horizonMat.depthWrite = false;
		// horizonMat.color = new THREE.Color(0x000000);

		// horizon = new THREE.Mesh(horizonGeometry, horizonMat);
		// //put it slightly below the ice
		// horizon.position.y = -25;
		// // horizon.position.x = -100;
		// horizon.rotation.x = (Math.PI / 2) * -1;

		// scene.add(horizon);

		//-----------------------------------------------------------------------------//
		//create ground plane
		//-----------------------------------------------------------------------------//

		var floorTexture = texLoader.load('assets/media/three-scene/textures/hockey-ice-background.jpg', function() {

			floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping; 
			floorTexture.repeat.set( 1, 1 );

		});

		// Note the change to Lambert material.
		var floorMaterial = new THREE.MeshLambertMaterial( { map: floorTexture } );
		// PlaneGeometry(width, height, widthSegments, heightSegments)
		//var floorGeometry = new THREE.PlaneGeometry(100, 100, 50, 50);

		//THREE.CircleGeometry( radius, segments )
		var floorGeometry = new THREE.CircleGeometry( 20, 50 );
		var floor = new THREE.Mesh(floorGeometry, floorMaterial);
		floor.position.y = -2;
		floor.rotation.x = (Math.PI / 2) * -1;
		// Note the mesh is flagged to receive shadows
		//floor.receiveShadow = true;
		scene.add(floor);

		//-----------------------------------------------------------------------------//
		//create skater
		//-----------------------------------------------------------------------------//

		textureHeadHands = texLoader.load('assets/media/three-scene/models/obj/skater/tex/head_hand.gif', function() {

			textureHeadHands.wrapS = THREE.RepeatWrapping; 
			textureHeadHands.wrapT = THREE.RepeatWrapping;
			textureHeadHands.repeat.set( 1, 1 );

		});
		textureShoes = texLoader.load('assets/media/three-scene/models/obj/skater/tex/shoes.gif', function() {

			textureShoes.wrapS = THREE.RepeatWrapping; 
			textureShoes.wrapT = THREE.RepeatWrapping;
			textureShoes.repeat.set( 1, 1 );

		});
		textureBody = texLoader.load('assets/media/three-scene/models/obj/skater/tex/body.gif', function() {

			textureBody.wrapS = THREE.RepeatWrapping; 
			textureBody.wrapT = THREE.RepeatWrapping;
			textureBody.repeat.set( 1, 1 );

		});

		//text the texture using a plane
		//var testMat, testPlane;
		// how many times to repeat in each direction; the default is (1,1),
		//texture.repeat.set( 1, 1 ); 
		// material = new THREE.MeshLambertMaterial({ map : texture });
		// plane = new THREE.Mesh(new THREE.PlaneGeometry(400, 3500), material);
		// plane.material.side = THREE.DoubleSide;
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

		//head hands
		matHeadHands = CreateMat(textureHeadHands, shader);
		//shoes
		matShoes = CreateMat(textureShoes, shader);
		//body
		matBody = CreateMat(textureBody, shader);

		//test material using sphere
	    // geometry = new THREE.SphereGeometry(10, 80, 80);
	    // mesh = new THREE.Mesh(geometry, material1);
	    // group.add(mesh);

		function loadObj() {

			// model
			var objLoader = new THREE.OBJLoader( manager );
			objLoader.load( 'assets/media/three-scene/models/obj/skater/skater.obj', function ( object ) {

				object.traverse( function ( child ) {

					if ( child instanceof THREE.Mesh ) {

						switch ( child.material.name ) {
							
							case "Body" :

								child.material = matBody;

								break;

							case "Hand_Head" :

								child.material = matHeadHands;
								//child.material.map = textureHeadHands;

								break;

							case "Shoe_l" :

								child.material = matShoes;
								//child.material.map = textureShoes;

								break;

							case "Shoe_r" :

								child.material = matShoes;
								//child.material.map = textureShoes;

								break;

							case "eye" :

								child.material = matHeadHands;

								break;

						}

					}

				} );

				//size and position obj
				object.scale.x = 0.1;
				object.scale.y = 0.1;
				object.scale.z = 0.1;
				//object.position.y = - 95;
				
				//scene.add( object );
				scene.add(object);

			}, onProgress, onError );

		}

		//-----------------------------------------------------------------------------//
		//setup lights
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
		// lens flares
		//-----------------------------------------------------------------------------//
		
		// var textureLoader = new THREE.TextureLoader();

		// var textureFlare0 = textureLoader.load( "assets/media/three-scene/textures/lensflare0-2.png" );
		// var textureFlare2 = textureLoader.load( "assets/media/three-scene/textures/lensflare2-2.png" );
		// var textureFlare3 = textureLoader.load( "assets/media/three-scene/textures/lensflare3-2.png" );

		// addLight( 0.55, 0.9, 0.5, 5000, 0, -1000 );
		// addLight( 0.08, 0.8, 0.5,    0, 0, -1000 );
		// addLight( 0.995, 0.5, 0.9, 5000, 5000, -1000 );

		// function addLight( h, s, l, x, y, z ) {

		// 	var light = new THREE.PointLight( 0xffffff, 1.5, 2000 );
		// 	light.color.setHSL( h, s, l );
		// 	light.position.set( x, y, z );
		// 	scene.add( light );

		// 	var flareColor = new THREE.Color( 0xffffff );
		// 	flareColor.setHSL( h, s, l + 0.5 );

		// 	var lensFlare = new THREE.LensFlare( textureFlare0, 700, 0.0, THREE.AdditiveBlending, flareColor );

		// 	lensFlare.add( textureFlare2, 512, 0.0, THREE.AdditiveBlending );
		// 	lensFlare.add( textureFlare2, 512, 0.0, THREE.AdditiveBlending );
		// 	lensFlare.add( textureFlare2, 512, 0.0, THREE.AdditiveBlending );

		// 	lensFlare.add( textureFlare3, 60, 0.6, THREE.AdditiveBlending );
		// 	lensFlare.add( textureFlare3, 70, 0.7, THREE.AdditiveBlending );
		// 	lensFlare.add( textureFlare3, 120, 0.9, THREE.AdditiveBlending );
		// 	lensFlare.add( textureFlare3, 70, 1.0, THREE.AdditiveBlending );

		// 	lensFlare.customUpdateCallback = lensFlareUpdateCallback;
		// 	lensFlare.position.copy( light.position );

		// 	scene.add( lensFlare );

		// }

		//----------------

		//add the group to the scene
		//scene.add(group);

		// initialize object to perform world/screen calculations
		//projector = new THREE.Projector();

		container.addEventListener( 'mousemove', onDocumentMouseMove, false );
		container.addEventListener( 'click', onDocumentClick, false );
		window.addEventListener( 'resize', onWindowResize, false );

		//initDebug(debugItems);

		makeUI();

		//animate();
		//use tweenlite for updates
		//TweenLite.ticker.addEventListener("tick", ticker);

		//debounced ticker
		interval = setInterval(debouncedTicker, 40);

		createHitObjects();

		//call to update animation
		update();

		//notify all items loaded
		setTimeout(function() {
			allItemsLoaded();
		}, 1500);

	}//init

	//-----------------------------------------------------------------------------// 
	//loading animation/activation
	//-----------------------------------------------------------------------------//

	//once all items loaded, tween in scene...

	function allItemsLoaded() {

		console.log('scene fully loaded');

		//notify scene loaded commplete
		onComplete();
		
	}

	function createHitObjects() {

		//elbow
		//(radius, width segs, height segs)
	    var geometry = new THREE.SphereGeometry( 0.8, 20, 20 );
	    var material = new THREE.MeshBasicMaterial({color: 0xff0000, transparent: true, opacity: 0.2});
	    var mesh = new THREE.Mesh( geometry, material );
		mesh.name = "elbow";
	    mesh.position.set(5.3,15.5,-0.3);

		scene.add(mesh);
		//scene.add( mesh );
		hitObjects.push(mesh);

		//lower back
		//(radius, width segs, height segs)
	    var geometry = new THREE.SphereGeometry( 1.2, 20, 20 );
	    var material = new THREE.MeshBasicMaterial({color: 0xff0000, transparent: true, opacity: 0.2});
	    var mesh = new THREE.Mesh( geometry, material );
		mesh.name = "lower-back";
	    mesh.position.set(1.7,14,0.5);

		scene.add(mesh);
		//scene.add( mesh );
		hitObjects.push(mesh);

		//skate
		//(radius, width segs, height segs)
	    var geometry = new THREE.SphereGeometry( 1.2, 20, 20 );
	    var material = new THREE.MeshBasicMaterial({color: 0xff0000, transparent: true, opacity: 0.2});
	    var mesh = new THREE.Mesh( geometry, material );
		mesh.name = "skate";
	    mesh.position.set(-1.3,5,-1.5);

		scene.add(mesh);
		//scene.add( mesh );
		hitObjects.push(mesh);

		//mid thigh
		//(radius, width segs, height segs)
	    var geometry = new THREE.SphereGeometry( 1.2, 20, 20 );
	    var material = new THREE.MeshBasicMaterial({color: 0xff0000, transparent: true, opacity: 0.2});
	    var mesh = new THREE.Mesh( geometry, material );
		mesh.name = "mid-thigh";
	    mesh.position.set(1.8,10.5,-0.7);

		scene.add(mesh);
		//scene.add( mesh );
		hitObjects.push(mesh);

	}

	// function lensFlareUpdateCallback( object ) {

	// 	var f, fl = object.lensFlares.length;
	// 	var flare;
	// 	var vecX = -object.positionScreen.x * 2;
	// 	var vecY = -object.positionScreen.y * 2;


	// 	for( f = 0; f < fl; f++ ) {

	// 		flare = object.lensFlares[ f ];

	// 		flare.x = object.positionScreen.x + vecX * flare.distance;
	// 		flare.y = object.positionScreen.y + vecY * flare.distance;

	// 		flare.rotation = 0;

	// 	}

	// 	object.lensFlares[ 2 ].y += 0.025;
	// 	object.lensFlares[ 3 ].rotation = object.positionScreen.x * 0.5 + THREE.Math.degToRad( 45 );

	// }

	function onWindowResize() {

		camera2.aspect = window.innerWidth / window.innerHeight;
		camera2.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );

	}


	// function ticker() {

	//   //to animate model
	//   // if ( mixers.length > 0 ) {
	//   // 	for ( var i = 0; i < mixers.length; i ++ ) {
	//   // 		mixers[ i ].update( clock.getDelta() );
	//   // 	}
	//   // }

	//   //stats.update();
	  
	//   //render
	//   render();
	//   //process camera zoom
	//   animateZoom();
	//   //update obitcontrolls
	//   controls.update();

	// }

	function update() {

		delta = clock.getDelta();
		requestId = requestAnimationFrame(update);
		  // updateAnimation(delta);

		//cause horizon mesh to always face the camera
		// horizon.lookAt( camera2.position );
		
	    //render
	    render();
	    //process camera zoom
	    animateZoom();
	    //update obitcontrolls
	    controls.update();


	}

	function stopUpdate() {

	   cancelAnimationFrame(requestId);
	   requestId = undefined;

	}

	// function updateAnimation(delta) {
	// 	//keep update consistent
	//     THREE.AnimationHandler.update(delta);
	// }

	//debounced version of update
	function debouncedTicker () {

		hitDetection();

		//update our debug info
		//updateDebugInfo(debugItems);

		//check if animation is complete
		// if (typeof tweenZoom !== 'undefined' && tweenZoom.progress) {
		//    if(tweenZoom.progress() === 1) {
		//    	zooming = true;
		//    } else {
		//    	zooming = false;
		//    }
		// }

		calcCamDistance();

	}

	function calcCamDistance() {
		//get the camera position from orbit controls
		cameraPosition = controls.getPos();
		camPos.x = cameraPosition.x;
		camPos.y = cameraPosition.y;
		camPos.z = cameraPosition.z;

		distToTarget = camPos.distanceTo( origin );

	    //animate zoom monitor
		TweenLite.set(".zoom-monitor .zoom-mask", { css: {top: distToTarget + '%'} });
	}


	function render() {

		//renderer.clear();

		//render the extra views
		for ( var ii = 0; ii < views.length; ++ii ) {

			view = views[ii];
			//camera2 = view.camera;

			view.updateCamera( camera2, scene, mouse.x, mouse.y );

			var left   = Math.floor( window.innerWidth  * view.left );
			var bottom = Math.floor( window.innerHeight * view.bottom );
			var width  = Math.floor( window.innerWidth  * view.width );
			var height = Math.floor( window.innerHeight * view.height );
			renderer.setViewport( left, bottom, width, height );
			renderer.setScissor( left, bottom, width, height );
			renderer.setScissorTest( true );
			renderer.setClearColor( view.background );

			camera2.aspect = width / height;
			camera2.updateProjectionMatrix();

			//console.log(camera2.position.x, camera2.position.y, camera2.position.z)

			renderer.render( scene, camera2 );
		}

		//renderer.clearDepth();

		//render the main view
		//renderer.render( scene, camera );

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

		//don't interrupt zoom
		if(!zooming){

			if(!hitFocused && overHitArea) {

				hitFocused = true;
				zoomCamera('zoomin');
				triggerPopover(hitObj.name, hitObj.x , hitObj.y);
				// disable controls
				controls.enableZoom = false;
				controls.enableRotate = false;
				controls.autoRotate = false;


			} else if (hitFocused){
				hitFocused = false;
				clearPopovers();
				zoomCamera('zoomout');
				//enable controls
				// disable controls
				controls.enableZoom = true;
				controls.enableRotate = true;
				controls.autoRotate = true;
			}
		}
	}

	//mouse hit detection
	//==============================//

	function hitDetection() {

		// // find intersections (old way)
		// // create a Ray with origin at the mouse position
		// //   and direction into the scene (camera direction)
		// var vector = new THREE.Vector3( mouse.x, mouse.y, 1 );
		// projector.unprojectVector( vector, camera2 );
		// var ray = new THREE.Raycaster( camera2.position, vector.sub( camera2.position ).normalize() );
		// // create an array containing all objects in the scene with which the ray intersects
		// var intersects = ray.intersectObjects( hitObjects );

	    //---------

	    // find intersections
	    raycaster.setFromCamera( mouse, camera2 );
	    var intersects = raycaster.intersectObjects( hitObjects, true );


	    if(intersects[0] && intersects.length > 0) {

	    	var proj = toScreenPosition(intersects[0].object, camera2);
	    	hitObj.name = intersects[0].object.name;
	    	hitObj.x = proj.x;
	    	hitObj.y = proj.y;

	    	overHitArea = true;
	    	toggleMaterial(true, intersects[0].object);

	    } else {

	    	overHitArea = false;
	    	toggleMaterial(false);

	    }

	}


	function toggleMaterial(isActive, obj) {

		if(hitFocused || isActive) {
			
			if(obj) {
				//change the material color of current object
				//obj.material.color.setHex( 0xffff00 );
				obj.material.opacity = 0.5;
			}

		} else {
			//change back the material color for all
			for(var i=0; i<hitObjects.length; i++) {
				// hitObjects[i].material.color.setHex( 0xff0000 );
				hitObjects[i].material.opacity = 0.2;
			}
		}

	}

	//convert world position to screen position
	function toScreenPosition(obj, camera) {
	    var vector = new THREE.Vector3();

	    var widthHalf = 0.5*renderer.context.canvas.width;
	    var heightHalf = 0.5*renderer.context.canvas.height;

	    obj.updateMatrixWorld();
	    vector.setFromMatrixPosition(obj.matrixWorld);
	    vector.project(camera);

	    vector.x = ( vector.x * widthHalf ) + widthHalf;
	    vector.y = - ( vector.y * heightHalf ) + heightHalf;

	    return { 
	        x: vector.x,
	        y: vector.y
	    };
	};

	//popovers
	//==============================//

	function triggerPopover(popoverName, x, y) {

		//adjust popover postion according to position in window
		//if too close to the bottom
		var heightBias = 200;
		if(y > (window.innerHeight - heightBias)) {
			y = y - 200;
		}
		//if too close to the right
		var widthBias = 200;
		if(x > (window.innerWidth - widthBias)) {
			console.log('over width')
			x = x - 200;
		}

		//tween popover in
		TweenLite.set("#" + popoverName, { css: {left: x + "px", top: y + 'px'} });
		TweenMax.to("#" + popoverName, 0.5, {className:"+=is_active", opacity:"1", left: x + "px", top: y + 'px', ease:Power2.easeInOut});

	}

	function clearPopovers() {

		//clear all popovers
		TweenLite.set(".popover", { css: {left: 0 + "px", top: -1000 + 'px'} });
		TweenMax.to(".popover", 0.5, {className:"-=is_active", opacity:"0", ease:Power2.easeInOut});

	}

	//camera zoom
	//==============================//

	function animateZoom() {

		if(zoomType === 'zoomin') {
			//camera dolly in
			controls.dIn(cameraZoom.z);

		} else if (zoomType === 'zoomout') {
			//camera dolly out
			controls.dOut(cameraZoom.z);
		}

	}

	function zoomCamera(zoomFunc) {

		//only animate if there isn't one already playing
		//to debug, turn this to this:
		if(!zooming ) {

			//reset zoom value
			cameraZoom.z = zoomSpeed;

			zooming = true;

			tweenZoom = TweenMax.to(
			    cameraZoom, 0.5, {
			    	z: 1,
			    	ease: Power2.easeInOut,
			    	onComplete: function() {
			    		zooming = false;
			    	}
			    }
			);

			//animate zoom monitor
			TweenMax.to("zoom-mask", 1, {className:"+=zoomed-in", top:"0", ease:Power2.easeInOut});

			//camera dolly out
			zoomType = zoomFunc;

		} 

	}


	//make UI
	//==============================//
	function makeUI() {

		//make zoom monitor
		var zoomMonitor = document.createElement('div');
		zoomMonitor.classList.add('zoom-monitor');

		//zoom monitor mask
		var zoomMask = document.createElement('div');
		zoomMask.classList.add('zoom-mask');
		zoomMonitor.appendChild(zoomMask);

		//inner
		var zInnerCount = 12;
		for(var i=0; i<zInnerCount; i++) {
			var zoomInner = document.createElement('div');
			zoomInner.classList.add('inner');
			zoomInner.id = 'inner-' + i;
			zoomMask.appendChild(zoomInner);
		}


		container.appendChild(zoomMonitor);
	}


	//utils
	//==============================//

	//toggle class (useful for css animations)
	//---------------------------

	//functions to use
	function hasClass(el, className) {
		if(el && className) {
			return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
		}
	}
	function addClass(el, className) {
		if(el && className) {
			if (el.classList) el.classList.add(className);
			else if (!hasClass(el, className)) el.className += ' ' + className;
		}
	}
	function removeClass(el, className) {
		if(el && className) {
			if (el.classList) el.classList.remove(className);
			else el.className = el.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');
		}
	}
	function toggle(el) {
	    hasClass(el, 'is_hidden') ? removeClass(el, 'is_hidden') : addClass(el, 'is_hidden');
	}
}











