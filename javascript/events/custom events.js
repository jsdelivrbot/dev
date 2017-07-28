

//create custom event

//some params to pass
var slideChangedParams =  { bubbles: false, cancelable: false, detail: { prevSlide: 0, currentSlide: 1 } };

var SlideChangedEvent = CustomEvent("slideComplete", slideChangedParams);



setTimeout(function() {
  //later.. dispatch the event
  window.dispatchEvent(SlideChangedEvent);
}, 500);


//listen
window.addEventListener('slideComplete', function(e) {
  //do something
  console.log('called: ', e);
  console.log(e.detail.currentSlide);
});