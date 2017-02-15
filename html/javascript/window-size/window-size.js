//window.resize
//using lodash for debouncing

function onResize() {
	_.debounce(function(event) {
		// All the taxing stuff you do
	}, 100);

	  var heightRemoved = true;
	  //match height if above 400px
	  if (window.innerWidth > 766) {
	    if(heightRemoved === true) {

	      //do something
	      heightRemoved = false;
	    }

	  } else {
	    if(heightRemoved === false) {

	      //do something
	      heightRemoved = true;
	    }
	}
}
//another example...
// window is resized 
var reloadIfResizeChange = _.debounce(function() {
    window.location.reload();
}, 200);
window.addEventListener('resize', reloadIfResizeChange);