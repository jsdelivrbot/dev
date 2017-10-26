//deep clone
//but will only work if there are no functions wihin the object
JSON.parse(JSON.stringify(objectToClone));

//Lodash
//---------------------------------------

//shallow clone 
_.clone(arrayWithNestedObjects);

//deep clone
_.cloneDeep(arrayWithNestedObjects);