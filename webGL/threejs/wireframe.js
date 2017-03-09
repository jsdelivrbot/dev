//http://stackoverflow.com/questions/31539130/display-wireframe-and-solid-color/31541369#31541369
//live example:
//http://jsfiddle.net/tfjvggfu/24/

// mesh
var material = new THREE.MeshPhongMaterial( {
    color: 0xff0000,
    polygonOffset: true,
    polygonOffsetFactor: 1, // positive value pushes polygon further away
    polygonOffsetUnits: 1
} );
var mesh = new THREE.Mesh( geometry, material );
scene.add( mesh )

// wireframe
var geo = new THREE.EdgesGeometry( mesh.geometry ); // or WireframeGeometry
var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 2 } );
var wireframe = new THREE.LineSegments( geo, mat );
mesh.add( wireframe );