//window.resize
//using lodash for debouncing

var heightRemoved = true;

checkWindowSize() {
	  
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

let checkSize =_.debounce(this.checkWindowSize.bind(this) , 100)
window.addEventListener('resize', checkSize);