//elements neeeded to keep camer/renderer/window size intact:

var camera, scene, renderer,

window.addEventListener( 'resize', onWindowResize, false );

renderer.setSize( window.innerWidth, window.innerHeight );

camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function render() {
  camera.updateProjectionMatrix();
  renderer.render( scene, camera );
}