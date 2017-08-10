//utilities from:
//https://plainjs.com/

/* ==========================================================================
//toggle class (useful for css animations)
========================================================================== */

//functions to use
function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
}
function addClass(el, className) {
    if (el.classList) el.classList.add(className);
    else if (!hasClass(el, className)) el.className += ' ' + className;
}
function removeClass(el, className) {
    if (el.classList) el.classList.remove(className);
    else el.className = el.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');
}
function toggle(el) {
    hasClass(el, 'is_hidden') ? removeClass(el, 'is_hidden') : addClass(el, 'is_hidden');
}
function toggleClass(el, className) {
    hasClass(el, className) ? removeClass(el, className) : addClass(el, className);
}
//usecase:
var el = document.querySelector('div');
if (!hasClass(el, 'foo')) addClass(el, 'foo');


//parse JSON
var json = '{ "foo": true, "bar": 1 }',
obj = JSON.parse(json);
console.log(obj);


/* ==========================================================================
//test if array contains something
========================================================================== */

var contains = function(needle) {
  // Per spec, the way to identify NaN is that it is not equal to itself
  var findNaN = needle !== needle;
  var indexOf;

  if(!findNaN && typeof Array.prototype.indexOf === 'function') {
      indexOf = Array.prototype.indexOf;
  } else {
      indexOf = function(needle) {
          var i = -1, index = -1;
          for(i = 0; i < this.length; i++) {
              var item = this[i];

              if((findNaN && item !== item) || item === needle) {
                  index = i;
                  break;
              }
          }
          return index;
      };
  }
  return indexOf.call(this, needle) > -1;
};

//usage:
//contains.call(myArray, lookupValue) //true

/* ==========================================================================
//trim leading and trailing white space
========================================================================== */

// IE 8
if (!String.prototype.trim) {
    String.prototype.trim = function(){ return this.replace(/^\s+|\s+$/g, ''); };
}
// example
var s = '  Hello World!  ';
s = s.trim();
console.log(s);
// "Hello World!"

/* ==========================================================================
//merge two js objects
========================================================================== */

function extend(obj, src) {
    for (var key in src) {
        if (src.hasOwnProperty(key)) obj[key] = src[key];
    }
    return obj;
}

// example
var a = { foo: true }, b = { bar: false };
var c = extend(a, b);

console.log(c);
// { foo: true, bar: false }


/* ==========================================================================
//hide or show element
========================================================================== */
//usage:
//toggle(myEl, 'block')

var el = document.querySelect('div');
// hide
el.style.display = 'none';
// show
el.style.display = '';
// or if the div element is hidden by default via CSS stylesheet
el.style.display = 'block';

//or make some helper functions...

function hide(el) {
    el.style.display = 'none';
}
function show(el, value) {
    el.style.display = value;
}
function toggle(el, value) {
    var display = (window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle).display;
    if (display == 'none') el.style.display = value;
    else el.style.display = 'none';
}

/* ==========================================================================
//find next, prev. item in the array
========================================================================== */

let nextItem = '';
let prevItem = '';
let index = 0;
index = pagesCopy.indexOf(currentPage);
if(index >= 0) {
    //need -1 since index uses 0 index and length doesn't
    if(index !== pagesCopy.length - 1) {
        nextItem = pagesCopy[index + 1];
    } else {
        console.log('called')
        nextItem = '';
    }
    if(index !== 0) {
        prevItem = pagesCopy[index - 1];
    } else {
        prevItem = '';
    }
}
// console.log('prevItem: ', prevItem);
// console.log('nextItem: ', nextItem);


/* ==========================================================================
//Listen for a transition!
========================================================================== */

var transitionEvent = whichTransitionEvent();
transitionEvent && e.addEventListener(transitionEvent, function() {
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


/* ==========================================================================
// debounce
========================================================================== */


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

//usage:
// function checkWindowSize() {
    
//   console.log('called');

//     //match height if above 400px
//     if (window.innerWidth > 766) {
//         //do something
//         console.log('greater than 766');

//     } else {
//         //do something
//         console.log('less than 766');

//   }
// }

// let checkSize =debounce(checkWindowSize , 100);
// window.addEventListener('resize', checkSize);


// from: https://jsfiddle.net/oriadam/63zn9qtd/
////////////////////////////////////////////////////////////////////////
// Data on DOM elements.
// Set data with: elem.data('key',anything)
// Get data with: elem.data('key')
// Remove data (kind of) with: elem.data('key',undefined)

    // This will generate random id on element if id is missing
    Node.prototype.force_id = function() {
    	return this.id || (this.id = ('' + Math.random()).replace('0.', 'id-'));
    }
    
    // Our own data implementation
    window.DATAOFDOM = {}; // I like naming globals as ALLCAPS
	Node.prototype.data = function(k, v) {
    	if (arguments.length == 1) {
    		// getter
    		if (window.DATAOFDOM[this.id]) {
    			return window.DATAOFDOM[this.id][k]; // returns undefined when k isn't there
    		}
    		// else: implicitly returns undefined when there's no data for this element
    	} else {
    		// setter
    		this.force_id();
    		if (!window.DATAOFDOM[this.id])
    			window.DATAOFDOM[this.id] = {};
    		return window.DATAOFDOM[this.id][k] = v;
    	}
    }
////////////////////////////////////////////////////////////////////////

// Usage example
document.querySelector('l').data('life, etc',42); 
                              // ^ Did you notice the use of space and comma inside a key name? blasphemy!
document.querySelector('n').data('all_e',document.querySelectorAll('e'));
document.querySelector('s').data('hi',function(you){console.log('hello world, and hello ' + you)});

// somewhere completely different in code:
console.log('life = ',document.querySelector('l').data('life, etc'));
console.log('all_e = ',document.querySelector('n').data('all_e'));
document.querySelector('s').data('hi')('Pythagoras');
console.log('when key is not set = ',document.querySelector('t').data('all_e'));
document.querySelector('n').data('all_e',undefined);
console.log('all_e after removal = ',document.querySelector('n').data('all_e'));



