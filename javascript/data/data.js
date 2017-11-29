/* ==========================================================================
// using .data in vanilla js
========================================================================== */

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