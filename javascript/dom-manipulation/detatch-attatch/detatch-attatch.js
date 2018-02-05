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

/* ==========================================================================
// ben's detach - re-attach module
========================================================================== */

var DetachReAttach = {
    detatch: function(el) {
      if (el) {
        //if we don't already have a detached el...
        if(!this.node) {
          this.node = el || this.node;
          this.parent = this.node.parentNode || this.parent;
          this.next = this.node.nextSibling || this.next;
          // abort if no parent
          if (!this.parent) { return; }
          // Detach .node from DOM.
          this.parent.removeChild(this.node);
        }
      }
    },
    // Re-attach node to DOM.
    reAttach: function (callback) {
         // abort if no parent
        if (!this.parent) { return; }
        if(this.node) {
          this.parent.insertBefore(this.node, this.next);
        }
        //reset the node
        this.node = null;
        //fire callback
        callback();
    }
};

//remove full width vid to prevent playing it
DetachReAttach.detatch(myEl);

//re attach the video
DetachReAttach.reAttach(function() {
  //element re-attached to same spot...
});