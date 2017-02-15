// touchstart	Triggers when the user makes contact with the touch surface and creates a touch point inside the element the event is bound to.
// touchmove	Triggers when the user moves the touch point across the touch surface.
// touchend	Triggers when the user removes a touch point from the surface. It fires regardless of whether the touch point is removed while inside the bound-to element, or outside, such as if the user's finger slides out of the element first or even off the edge of the screen.
// touchenter	Triggers when the touch point enters the bound-to element. This event does not bubble.
// touchleave	Triggers when the touch point leaves the bound-to element. This event does not bubble.
// touchcancel	Triggers when the touch point no longer registers on the touch surface. This can occur if the user has moved the touch point outside the browser UI or into a plugin, for example, or if an alert modal pops up.

//info here
//http://www.javascriptkit.com/javatutors/touchevents.shtml


//only fire touch on touch and not drag////

//var to store dragging
var dragging = false;

//when dragging
$("body").on("touchmove", function(){
  dragging = true;
  //console.log('touchmove');
  //Hide All Popovers
  WebuiPopovers.hideAll();

});


//resetting dragging to false
$("body").on("touchend", function(){
    dragging = false;
    //console.log('touchend');
});