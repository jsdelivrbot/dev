//equivalent to jQuery's $(document).ready() method:
document.addEventListener('DOMContentLoaded', function(){
    // do something
});

//but the below covers ajax cases and pre-ie8
function run() {
    // do something
}
// in case the document is already rendered
if (document.readyState!='loading') run();
// modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
// IE <= 8
else document.attachEvent('onreadystatechange', function(){
    if (document.readyState=='complete') run();
});



//window load event

//cleanly add multiple window load events
//by Simon Willison.
// "The way this works is relatively simple: if window.onload has not already been assigned a function, 
// the function passed to addLoadEvent is simply assigned to window.onload. If window.onload has already 
// been set, a brand new function is created which first calls the original onload handler, 
// then calls the new handler afterwards."

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}
addLoadEvent(nameOfSomeFunctionToRunOnPageLoad);
addLoadEvent(function() {
  /* more code to run on page load */
});