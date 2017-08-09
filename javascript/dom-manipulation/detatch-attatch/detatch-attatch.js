node = document.createElement("p")

//remove child node:
node.removeChild(node)

//method 2:
node.innerHTML = "";

//example

//get an element
let elem = document.getElementById("elem");
//check if it has children
if (elem.hasChildNodes()) {
  //remove first child node
  //elem.removeChild(list.childNodes[0]);
  //remove all child nodes
  while (elem.hasChildNodes()) {
      elem.removeChild(elem.lastChild);
  }
}

//insert back into the dom
var next = node.nextSibling;
parent.insertBefore(node, next);

//appendChild
parent.appendChild(node);

//prev. sibling
var previous = el.previousSibling;

//next sibling
var next = el.nextSibling;

//replace a dom element (replaceChild):
var el = document.querySelector('span');
var myEl = document.createElement('span');
myEl.innerHTML = 'foo';
//replace el with myEl
el.parentNode.replaceChild(myEl, el)




//ben's detach - re-attach module
var DetachReAttach = (function() {
  var node = null;
  var parent = null;
  var next = null;

  return {
    detatch: function(selector) {
      if (selector) {
        //if we don't already have a detached el...
        if(!node) {
          console.log('detatching and storing');
          node = document.querySelector(selector) || node;
          parent = node.parentNode || parent;
          next = node.nextSibling || next;
          // abort if no parent
          if (!parent) { return; }
          // Detach node from DOM.
          parent.removeChild(node);
        }
      }
    },
    // Re-attach node to DOM.
    reAttach: function (callback) {
         // abort if no parent
        if (!parent) { return; }
        if(node) {
          console.log('re attaching');
          parent.insertBefore(node, next);
        }
        //reset the node
        node = null;
        //fire callback
        callback();
    }
  }
})();

//remove full width vid to prevent playing it
DetachReAttach.detatch('.full-screen-video');

//re attach the video
DetachReAttach.reAttach(function() {
  document.querySelector('.full-screen-video').play();
});



/*!
 * JavaScript detach - v0.2 - 5/18/2011
 * http://benalman.com/
 * 
 * Copyright (c) 2011 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

function detach(node, async, fn) {
  var parent = node.parentNode;
  var next = node.nextSibling;
  // No parent node? Abort!
  if (!parent) { return; }
  // Detach node from DOM.
  parent.removeChild(node);
  // Handle case where optional `async` argument is omitted.
  if (typeof async !== "boolean") {
    fn = async;
    async = false;
  }
  // Note that if a function wasn't passed, the node won't be re-attached!
  if (fn && async) {
    // If async == true, reattach must be called manually.
    fn.call(node, reattach);
  } else if (fn) {
    // If async != true, reattach will happen automatically.
    fn.call(node);
    reattach();
  }
  // Re-attach node to DOM.
  function reattach() {
    parent.insertBefore(node, next);
  }
}


// Get an element.
var elem = document.getElementById('huge-table');

// Just detach element from the DOM.
detach(elem);

// Detach + exec fn + reattach, synchronous.
detach(elem, function() {
  // this == elem, do stuff here.
  // , reattach will happen automatically.
});

// Detach + exec fn + reattach, asynchronous.
detach(elem, true, function(reattach) {
  // this == elem, do stuff here, call reattach() when done!
  setTimeout(reattach, 1000);
});