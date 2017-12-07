//test the texture using a plane
//var testMat, testPlane;
// how many times to repeat in each direction; the default is (1,1),
//texture.repeat.set( 1, 1 ); 
// material = new THREE.MeshLambertMaterial({ map : texture });
// plane = new THREE.Mesh(new THREE.PlaneGeometry(400, 3500), material);
// plane.position.x = 100;
// scene.add(plane);

//test material using sphere
// geometry = new THREE.SphereGeometry(10, 80, 80);
// mesh = new THREE.Mesh(geometry, material1);
// group.add(mesh);

// function loadObj() {
// 	// model
// 	var objLoader = new THREE.OBJLoader(manager);
// 	objLoader.load('assets/models/obj/teapot/teapot.obj', function ( object ) {
// 		object.traverse( function ( child ) {
// 			if ( child instanceof THREE.Mesh ) {
// 				// switch ( child.material.name ) {
// 				// 	case "Body" :
// 				// 		child.material = mainTex;
// 				// 		break;
// 				// }
// 				child.material = mainTex;
// 			}
// 		} );

// 		//size and position obj
// 		object.scale.x = 3;
// 		object.scale.y = 3;
// 		object.scale.z = 3;
// 		//object.position.y = - 95;
		
// 		//scene.add( object );
// 		scene.add(object);

// 	}, onProgress, onError );
// }