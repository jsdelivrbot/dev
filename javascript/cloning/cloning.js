/* ==========================================================================
JSON.stringify
========================================================================== */

//deep clone using JSON.parse with JSON.stringify
//but will only work if there are no functions wihin the object
var clone = parse(JSON.stringify(objectToClone));

//important to error handle when using JSON.parse...
function parse(str) {
	try {
		return JSON.parse(str);
	}
	catch(e) {
		return false;
	}
}

console.log(parse('a'));
//false (not an object)
console.log(parse('{ "name": "bob" }'));
//{ name: "bob" }

/* ==========================================================================
lodash
========================================================================== */

//shallow clone 
_.clone(arrayWithNestedObjects);

//deep clone
_.cloneDeep(arrayWithNestedObjects);

/* ==========================================================================
slice
========================================================================== */

// shallow copy of an array
// (same as state.slice(0,state.length))
let stateCopy = state.slice();

/* ==========================================================================
Object.assign
========================================================================== */

//shallow copy object(s)
//merge one or more objects into the target one, overriding exiting values if applicable
//returns the target object
//Object.assign(target, ...sources)
var a = { name: 'foo', age: 12 }
var b = Object.assign({}, a);
console.log(a === b);
// false