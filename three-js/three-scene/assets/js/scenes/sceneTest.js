var SceneTest = function(onComplete) {

    var scene, camera, renderer;
    var geometry, material, mesh;

    this.activate = function() {

        // disable controls
        controls.enableZoom = true;
        controls.enableRotate = true;
        controls.enablePan = true;
        controls.autoRotate = true;
        //start the scene again
        //update();
    }

    this.deactivate = function() {

        // disable controls
        controls.enableZoom = false;
        controls.enableRotate = false;
        controls.enablePan = false;
        controls.autoRotate = false;
        //cancel scene update
        //stopUpdate();
        //clear rendere

        //clear popovers
        clearPopovers();

    }
     
    this.init = function() {

        console.log('initializing');
     
        scene = new THREE.Scene();
     
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.z = 1000;
     
        geometry = new THREE.BoxGeometry( 200, 200, 200 );
        material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
     
        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );
     
        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
     
        CONTAINER.appendChild( renderer.domElement );

        animate();

        allItemsLoaded();
     
    }
     
    function animate() {
     
        requestAnimationFrame( animate );
     
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;
     
        renderer.render( scene, camera );
     
    }

    function allItemsLoaded() {

        console.log('scene fully loaded');

        //fade in scene container
        TweenMax.to(CONTAINER, 1, {className:"+=is_active", autoAlpha: 1}, 0.6);

        //notify scene fully loaded
        onComplete();
        
    }


}