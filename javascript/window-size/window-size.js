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





//check window size (jquery)
 $(window).resize(function() {
  if ($(window).width() < 960) {
     alert('Less than 960');
  }
  else {
    alert('More than 960');
  }
});