	/* ==========================================================================
	session storage (Window.sessionStorage)
	========================================================================== */

	// Save data to sessionStorage
	sessionStorage.setItem('key', 'value');

	// Get saved data from sessionStorage
	var data = sessionStorage.getItem('key');

	// Remove saved data from sessionStorage
	sessionStorage.removeItem('key');

	// Remove all saved data from sessionStorage
	sessionStorage.clear();

	/* ==========================================================================
	local storage
	========================================================================== */

	//check if item is in local storage
	if (localStorage.getItem('country')) {
		//do stuff
	}

	//get item
	COUNTRY = localStorage.getItem('country');

	//set item
	localStorage.setItem('country', countryCode);

	//remove item
	localStorage.removeItem('country');
