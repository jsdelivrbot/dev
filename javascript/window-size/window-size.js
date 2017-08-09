//window.resize
//using lodash for debouncing

var isMobile = false;
//ipad landscape
var mediaThreshold = 1024;

checkWindowSize() {
	  //match height if above 400px
	  if (window.innerWidth >= mediaThreshold) {
      isMobile = false;
      //do something
	  } else {
      isMobile = true;
      //do something
	}
}

let checkSize =_.debounce(this.checkWindowSize.bind(this) , 100)
window.addEventListener('resize', checkSize);