(function() {
	var container = document.getElementById('container');
	//create an element (attached to nothing)
	//document.createElement(nodeName)
	var newElement = document.createElement('div');
	//insert contents
	newElement.innerHTML = "foobar";
	//append to container
	container.appendChild(newElement);
})();