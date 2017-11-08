/* ==========================================================================
Object.keys
========================================================================== */

//Object.keys(obj)
//returns an array whose elements are strings corresponding the incoming object keys.

var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array like object with random key ordering
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // ['2', '7', '100']

// getFoo is property which isn't enumerable
var myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  } 
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']

/* ==========================================================================
Object.assign
========================================================================== */

//merge one or more objects into the target one, overriding exiting values if applicable
//returns the target object
//Object.assign(target, ...sources)
var a = { name: 'foo', age: 12 }
var b = Object.assign({}, a, { name: 'fred' }, { foo: 'poo' });
// { name: 'fred', age: 12, foo: 'poo' }

/* ==========================================================================
removing values from an object
========================================================================== */
//todo: make this return a new object
Object.prototype.remove = function(arr) {
	var _this  = this;
	arr.forEach((key) => {
		delete(_this[key]);
	});
}

var objA = { name: 'colin', car: 'suzuki', age: 17 }
objA.remove(['car', 'age']);
//{ name: "colin" }

/* ==========================================================================
return a new object with just the selected keys
========================================================================== */

Object.prototype.pick = function(arr) {
	var _this = this;
	var obj = {};
	arr.forEach(function(key) {
		obj[key] = this[key];
	});
	return obj;
}

var fruit = { name: 'bannana', color: 'yellow', variety: 'tropical' }
var newFruit = fruit.pick(['color', 'variety']);
//{ color: 'yellow', variety: 'tropical' }