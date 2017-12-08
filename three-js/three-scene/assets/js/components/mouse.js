var Mouse = {
	init: function() {
		this.mouse = new THREE.Vector2();
		CONTAINER.addEventListener( 'mousemove', this.onDocumentMouseMove.bind(this), false );
		return this.mouse;
	},

	onDocumentMouseMove: function( event ) {
		this.mouse.x = ((event.clientX - CONTAINER.offsetLeft) / CANVAS_WIDTH) * 2 - 1;
		this.mouse.y = - ((event.clientY - CONTAINER.offsetTop) / CANVAS_HEIGHT) * 2 + 1;
	}
}