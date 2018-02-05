var Mouse = {
	init: function() {
		var instance = Object.create(this);
		instance.mouse = new THREE.Vector2();
		CONTAINER.addEventListener( 'mousemove', instance.onDocumentMouseMove.bind(instance), false );
		return instance.mouse;
	},

	onDocumentMouseMove: function( event ) {
		this.mouse.x = ((event.clientX - CONTAINER.offsetLeft) / CANVAS_WIDTH) * 2 - 1;
		this.mouse.y = - ((event.clientY - CONTAINER.offsetTop) / CANVAS_HEIGHT) * 2 + 1;
	}
}