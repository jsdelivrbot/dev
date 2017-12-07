var Texture = {
	load: function(path) {
		var texLoader = new THREE.TextureLoader();
		var tex = texLoader.load(path, function() {
			tex.wrapS = THREE.RepeatWrapping; 
			tex.wrapT = THREE.RepeatWrapping;
			tex.repeat.set( 1, 1 );
		});
		return tex;
	}
}