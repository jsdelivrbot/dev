var Popovers = {
	init: function(scene, container, mouse, camera, canvas, controls, update) {
		this.container = container;
		this.scene = scene;
		this.mouse = mouse;
		this.camera = camera;
		this.canvas = canvas;
		this.controls = controls;
		this.hitFocused = false;
		this.overHitArea = false;
		this.hitObj = {
			name: '',
			x: 0,
			y: 0
		};
		this.popovers = [];
		this.hitObjects = [];
		this.zoomSpeed = 1.03;
		//for tweenlite for camera
		this.cameraZoom = {
			z: this.zoomSpeed
		};
		this.zoomType = '';
		this.zooming = false;
		this.cameraPosition 
		this.camPos = new THREE.Vector3( 0, 0, 0 );
		//no arguments; will be initialised to (0, 0, 0)
		this.origin = new THREE.Vector3();
		this.requestId = null;

		this.container.addEventListener( 'click', this.onDocumentClick.bind(this), false );

		this.createHitObjects();
		this.update();

		//return Object.create(this);
		return this;
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
	},

	onDocumentClick: function(event) {
		//don't interrupt zoom
		if(!this.zooming) {
			if(!this.hitFocused && this.overHitArea) {
				this.hitFocused = true;
				this.zoomCamera('zoomin');
				this.triggerPopover(this.hitObj.name, this.hitObj.x , this.hitObj.y);
				// disable controls
				this.controls.enableZoom = false;
				this.controls.enableRotate = false;
				this.controls.autoRotate = false;
			} else if (this.hitFocused) {
				this.hitFocused = false;
				this.clearPopovers();
				this.zoomCamera('zoomout');
				//enable this.controls
				// disable this.controls
				this.controls.enableZoom = true;
				this.controls.enableRotate = true;
				this.controls.autoRotate = true;
			}
		}
	},

	hitDetection: function() {
	    // find intersections
	    raycaster = new THREE.Raycaster(); // create once
	    raycaster.setFromCamera( this.mouse, this.camera );
	    var intersects = raycaster.intersectObjects( this.hitObjects, true );

	    if(intersects[0] && intersects.length > 0) {

	    	var proj = this.toScreenPosition(intersects[0].object, this.camera);
	    	this.hitObj.name = intersects[0].object.name;
	    	this.hitObj.x = proj.x;
	    	this.hitObj.y = proj.y;
	    	this.overHitArea = true;
	    	this.toggleMaterial(true, intersects[0].object);

	    } else {
	    	this.overHitArea = false;
	    	this.toggleMaterial(false);
	    }
	},

	toggleMaterial: function(isActive, obj) {
		if(this.hitFocused || isActive) {
			if(obj) {
				//change the material color of current object
				//obj.material.color.setHex( 0xffff00 );
				obj.material.opacity = 0.5;
			}
		} else {
			//change back the material color for all
			for(var i=0; i<this.hitObjects.length; i++) {
				// this.hitObjects[i].material.color.setHex( 0xff0000 );
				this.hitObjects[i].material.opacity = 0.2;
			}
		}
	},

	//convert world position to screen position
	toScreenPosition: function(obj, camera) {
	    var vector = new THREE.Vector3();

	    var widthHalf = 0.5 * this.canvas.width;
	    var heightHalf = 0.5 * this.canvas.height;

	    obj.updateMatrixWorld();
	    vector.setFromMatrixPosition(obj.matrixWorld);
	    vector.project(this.camera);

	    vector.x = ( vector.x * widthHalf ) + widthHalf;
	    vector.y = - ( vector.y * heightHalf ) + heightHalf;

	    return { 
	        x: vector.x,
	        y: vector.y
	    };
	},

	triggerPopover: function(popoverName, x, y) {
		//adjust popover postion according to position in window
		//if too close to the bottom
		var heightBias = 200;
		if(y > (window.innerHeight - heightBias)) {
			y = y - 200;
		}
		//if too close to the right
		var widthBias = 200;
		if(x > (window.innerWidth - widthBias)) {
			x = x - 200;
		}

		//tween popover in
		TweenLite.set("#" + popoverName, { css: {left: x + "px", top: y + 'px'} });
		TweenMax.to("#" + popoverName, 0.5, {className:"+=is_active", opacity:"1", left: x + "px", top: y + 'px', ease:Power2.easeInOut});
	},

	clearPopovers: function() {
		//clear all this.popovers
		TweenLite.set(".popover", { css: {left: 0 + "px", top: -1000 + 'px'} });
		TweenMax.to(".popover", 0.5, {className:"-=is_active", opacity:"0", ease:Power2.easeInOut});
	},

	animateZoom: function() {
		if(this.zoomType === 'zoomin') {
			//camera dolly in
			this.controls.dIn(this.cameraZoom.z);
		} else if (this.zoomType === 'zoomout') {
			//camera dolly out
			this.controls.dOut(this.cameraZoom.z);
		}
	},

	zoomCamera: function(zoomFunc) {
		//only animate if there isn't one already playing
		//to debug, turn this to this:

		if(!this.zooming) {
			//reset zoom value
			this.cameraZoom.z = this.zoomSpeed;

			this.zooming = true;

			var tweenZoom = TweenMax.to(
			    this.cameraZoom, 0.5, {
			    	z: 1,
			    	ease: Power2.easeInOut,
			    	onComplete: function() {
			    		this.zooming = false;
			    	}.bind(this)
			    }
			);
			//camera dolly out
			this.zoomType = zoomFunc;
		} 
	},

	update: function() {
		this.requestId = requestAnimationFrame(this.update.bind(this));

		this.hitDetection();
		this.animateZoom();
	},

	stopUpdate: function() {
	   cancelAnimationFrame(requestId);
	   this.requestId = undefined;

	}
}