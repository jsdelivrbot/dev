(function () { 

	function traverse(element, callback) {

	  callback(element);
	  var list = element.children;
	  for(var i = 0; i < list.length; i++) {
	    //recursive call
	    traverse(list[i], callback);
	  }
	  
	}

	var root = document.getElementById("root");

	console.log(root);

	var myCallback = function (elem) {
		console.log('elem: ', elem);
	  //console.log(elem.id.toString());
	}

	traverse(root, myCallback);

})();