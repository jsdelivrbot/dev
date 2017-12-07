var LoadingManager = {
	init: function() {
		this.manager = new THREE.LoadingManager();
		this.manager.onProgress = function( item, loaded, total ) {
			console.log( item, loaded, total );
		};
		this.manager.onError = function( xhr ) {
			console.log('loading manager error: ', xhr);
		};
		
		return this.manager
	}
}