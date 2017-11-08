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

//Lodash
//---------------------------------------

//shallow clone 
_.clone(arrayWithNestedObjects);

//deep clone
_.cloneDeep(arrayWithNestedObjects);