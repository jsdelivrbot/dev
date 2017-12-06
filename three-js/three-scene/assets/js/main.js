(function () {
	//-----------------------------------------------------------------------------// 
	//create container
	//-----------------------------------------------------------------------------//

	container = document.createElement( 'div' );
	container.className = "scene-container";
	//append container before the 4th child element in the body (just above the site container)
	document.body.appendChild(container);

	//-----------------------------------------------------------------------------//
	// load scene
	//-----------------------------------------------------------------------------//

	var sceneLoaded = false;
	var sceneLoading = false;

	currentScene = new scene(onComplete);
	currentScene.init();

	sceneLoading = true;
	console.log('loading scene...');

	//let the done callback take care of fading in
	function onComplete() {
		sceneLoaded = true;
		sceneLoading = false;
		//fade in scene container
		TweenMax.to(container, 1, {className:"+=is_active", autoAlpha: 1}, 0.2);
	}

})()