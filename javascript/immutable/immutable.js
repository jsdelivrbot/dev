//immutablility is in programming for a long time but in javascript we need to take care of it manually

//objects are passed by reference in Javascript:
var refObj = {name: 'foo'};
var newObj = refObj;
newObj.name = 'bar';
console.log(refObj.name);

//so to make objects immutable, we need to create an instance of the original
//can be done using:
// Object.assign
// $.extend (jquery)
// _.assign (lodash)

var refObj2 = {name: 'foo', age: 35};
//Object.assign(object_to_override, valuse_to_override...)
var newObj2 = Object.assign({}, refObj2, {name: 'baz'}, {car: 'Honda'})
console.log(newObj2);

//one thing to watch out for though is if you have an object within your object
//that embedded one will still be a referece, so need to handle it.
var refObj3 = {name: 'foo', age: 35, things: [1,2,3]};
var newObj3 = Object.assign({}, refObj3);
//test to see the problem...
//newObj3.things.push(4);
//console.log(refObj3.things);
//now using concat to solve the problem
newObj3.things = newObj3.things.concat(4);
console.log(newObj3.things);
console.log(refObj3.things);


//for arrays we do this by using
//.concat .map .filter .reduce
//by returing a new modified array
//(see the array-manipulation section)