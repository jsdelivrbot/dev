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

// var helper = new THREE.SpotLightHelper( spotlight2, 2.5 );
// scene.add(helper);