/* ==========================================================================
//Listen for a transition!
========================================================================== */

var myElement = document.querySelector('.animate');

var transitionEvent = whichTransitionEvent();
transitionEvent && myElement.addEventListener(transitionEvent, function() {
    console.log('Transition complete!  This is the callback, no library needed!');
});

/*
    The "whichTransitionEvent" can be swapped for "animation" instead of "transition" texts, as can the usage :)
*/

/* From Modernizr */
//listen for end of css animation
function whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    }

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}