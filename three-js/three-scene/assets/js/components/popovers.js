var Popovers = {
	init: function(scene) {
		this.scene = scene;
		this.hitFocused = false;
		this.overHitArea = false;
		this.hitObj = {
			name: '',
			x: 0,
			y: 0
		};
		this.popovers = [];
		this.hitObjects = [];

		this.createHitObjects();
	},
	createHitObjects: function() {
		//elbow
		//(radius, width segs, height segs)
	    var geometry = new THREE.SphereGeometry( 0.8, 20, 20 );
	    var material = new THREE.MeshBasicMaterial({color: 0xff0000, transparent: true, opacity: 0.2});
	    var mesh = new THREE.Mesh( geometry, material );
		mesh.name = "elbow";
	    mesh.position.set(5.3,15.5,-0.3);

		this.scene.add(mesh);
		//this.scene.add( mesh );
		this.hitObjects.push(mesh);

		//lower back
		//(radius, width segs, height segs)
	    var geometry = new THREE.SphereGeometry( 1.2, 20, 20 );
	    var material = new THREE.MeshBasicMaterial({color: 0xff0000, transparent: true, opacity: 0.2});
	    var mesh = new THREE.Mesh( geometry, material );
		mesh.name = "lower-back";
	    mesh.position.set(1.7,14,0.5);

		this.scene.add(mesh);
		//this.scene.add( mesh );
		this.hitObjects.push(mesh);

		//skate
		//(radius, width segs, height segs)
	    var geometry = new THREE.SphereGeometry( 1.2, 20, 20 );
	    var material = new THREE.MeshBasicMaterial({color: 0xff0000, transparent: true, opacity: 0.2});
	    var mesh = new THREE.Mesh( geometry, material );
		mesh.name = "skate";
	    mesh.position.set(-1.3,5,-1.5);

		this.scene.add(mesh);
		//this.scene.add( mesh );
		this.hitObjects.push(mesh);

		//mid thigh
		//(radius, width segs, height segs)
	    var geometry = new THREE.SphereGeometry( 1.2, 20, 20 );
	    var material = new THREE.MeshBasicMaterial({color: 0xff0000, transparent: true, opacity: 0.2});
	    var mesh = new THREE.Mesh( geometry, material );
		mesh.name = "mid-thigh";
	    mesh.position.set(1.8,10.5,-0.7);

		this.scene.add(mesh);
		//this.scene.add( mesh );
		this.hitObjects.push(mesh);

		return Object.create(this);
	},


	// function onDocumentClick( event ) {
	// 	//don't interrupt zoom
	// 	if(!zooming){

	// 		if(!this.hitFocused && this.overHitArea) {

	// 			this.hitFocused = true;
	// 			zoomCamera('zoomin');
	// 			triggerPopover(this.hitObj.name, this.hitObj.x , this.hitObj.y);
	// 			// disable controls
	// 			controls.enableZoom = false;
	// 			controls.enableRotate = false;
	// 			controls.autoRotate = false;


	// 		} else if (this.hitFocused){
	// 			this.hitFocused = false;
	// 			clearPopovers();
	// 			zoomCamera('zoomout');
	// 			//enable controls
	// 			// disable controls
	// 			controls.enableZoom = true;
	// 			controls.enableRotate = true;
	// 			controls.autoRotate = true;
	// 		}
	// 	}
	// }

	// function hitDetection() {
	// 	// // find intersections (old way)
	// 	// // create a Ray with origin at the mouse position
	// 	// //   and direction into the scene (camera direction)
	// 	// var vector = new THREE.Vector3( mouse.x, mouse.y, 1 );
	// 	// projector.unprojectVector( vector, camera );
	// 	// var ray = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );
	// 	// // create an array containing all objects in the scene with which the ray intersects
	// 	// var intersects = ray.intersectObjects( this.hitObjects );

	//     //---------

	//     // find intersections
	//     raycaster.setFromCamera( mouse, camera.getCamera() );
	//     var intersects = raycaster.intersectObjects( this.hitObjects, true );


	//     if(intersects[0] && intersects.length > 0) {

	//     	var proj = toScreenPosition(intersects[0].object, camera);
	//     	this.hitObj.name = intersects[0].object.name;
	//     	this.hitObj.x = proj.x;
	//     	this.hitObj.y = proj.y;

	//     	this.overHitArea = true;
	//     	toggleMaterial(true, intersects[0].object);

	//     } else {

	//     	this.overHitArea = false;
	//     	toggleMaterial(false);

	//     }
	// }

	// function toggleMaterial(isActive, obj) {

	// 	if(this.hitFocused || isActive) {
			
	// 		if(obj) {
	// 			//change the material color of current object
	// 			//obj.material.color.setHex( 0xffff00 );
	// 			obj.material.opacity = 0.5;
	// 		}

	// 	} else {
	// 		//change back the material color for all
	// 		for(var i=0; i<this.hitObjects.length; i++) {
	// 			// this.hitObjects[i].material.color.setHex( 0xff0000 );
	// 			this.hitObjects[i].material.opacity = 0.2;
	// 		}
	// 	}
	// }

	// //convert world position to screen position
	// function toScreenPosition(obj, camera) {
	//     var vector = new THREE.Vector3();

	//     var widthHalf = 0.5 * renderer.context.canvas.width;
	//     var heightHalf = 0.5 * renderer.context.canvas.height;

	//     obj.updateMatrixWorld();
	//     vector.setFromMatrixPosition(obj.matrixWorld);
	//     vector.project(camera.getCamera());

	//     vector.x = ( vector.x * widthHalf ) + widthHalf;
	//     vector.y = - ( vector.y * heightHalf ) + heightHalf;

	//     return { 
	//         x: vector.x,
	//         y: vector.y
	//     };
	// }

	// function triggerPopover(popoverName, x, y) {
	// 	//adjust popover postion according to position in window
	// 	//if too close to the bottom
	// 	var heightBias = 200;
	// 	if(y > (window.innerHeight - heightBias)) {
	// 		y = y - 200;
	// 	}
	// 	//if too close to the right
	// 	var widthBias = 200;
	// 	if(x > (window.innerWidth - widthBias)) {
	// 		console.log('over width')
	// 		x = x - 200;
	// 	}

	// 	//tween popover in
	// 	TweenLite.set("#" + popoverName, { css: {left: x + "px", top: y + 'px'} });
	// 	TweenMax.to("#" + popoverName, 0.5, {className:"+=is_active", opacity:"1", left: x + "px", top: y + 'px', ease:Power2.easeInOut});
	// }

	// function clearPopovers() {

	// 	//clear all this.popovers
	// 	TweenLite.set(".popover", { css: {left: 0 + "px", top: -1000 + 'px'} });
	// 	TweenMax.to(".popover", 0.5, {className:"-=is_active", opacity:"0", ease:Power2.easeInOut});
	// }

	// function animateZoom() {
	// 	if(zoomType === 'zoomin') {
	// 		//camera dolly in
	// 		controls.dIn(cameraZoom.z);

	// 	} else if (zoomType === 'zoomout') {
	// 		//camera dolly out
	// 		controls.dOut(cameraZoom.z);
	// 	}
	// }

	// function zoomCamera(zoomFunc) {
	// 	//only animate if there isn't one already playing
	// 	//to debug, turn this to this:
	// 	if(!zooming ) {

	// 		//reset zoom value
	// 		cameraZoom.z = zoomSpeed;

	// 		zooming = true;

	// 		tweenZoom = TweenMax.to(
	// 		    cameraZoom, 0.5, {
	// 		    	z: 1,
	// 		    	ease: Power2.easeInOut,
	// 		    	onComplete: function() {
	// 		    		zooming = false;
	// 		    	}
	// 		    }
	// 		);

	// 		//camera dolly out
	// 		zoomType = zoomFunc;
	// 	} 
	// }
}