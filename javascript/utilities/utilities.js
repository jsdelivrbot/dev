//utilities from:
//https://plainjs.com/

//toggle class (useful for css animations)
//---------------------------

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

//test if array contains something
//---------------------------

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


//trim leading and trailing white space
//---------------------------
// IE 8
if (!String.prototype.trim) {
    String.prototype.trim = function(){ return this.replace(/^\s+|\s+$/g, ''); };
}
// example
var s = '  Hello World!  ';
s = s.trim();
console.log(s);
// "Hello World!"


//merge two js objects
//---------------------------
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



//hide or show element
//---------------------------
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


//find next, prev. item in the array
//---------------------------
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

/* Listen for a transition! */
var transitionEvent = whichTransitionEvent();
transitionEvent && e.addEventListener(transitionEvent, function() {
    console.log('Transition complete!  This is the callback, no library needed!');
});

/*
    The "whichTransitionEvent" can be swapped for "animation" instead of "transition" texts, as can the usage :)
*/

