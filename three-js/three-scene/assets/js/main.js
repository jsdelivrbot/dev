(function () {
	//-----------------------------------------------------------------------------// 
	//create container
	//-----------------------------------------------------------------------------//

	CONTAINER = document.createElement('div');
	CONTAINER.className = "scene-container";
	//append container before the 4th child element in the body (just above the site container)
	document.body.appendChild(CONTAINER);

	//-----------------------------------------------------------------------------//
	// load scene
	//-----------------------------------------------------------------------------//

	var sceneLoaded = false;
	var sceneLoading = false;

	currentScene = new Scene(onComplete);
	currentScene.init();

	sceneLoading = true;
	console.log('loading scene...');

	//let the done callback take care of fading in
	function onComplete() {
		sceneLoaded = true;
		sceneLoading = false;
		//fade in scene container
		TweenMax.to(CONTAINER, 1, {className:"+=is_active", autoAlpha: 1}, 0.2);
	}

})()