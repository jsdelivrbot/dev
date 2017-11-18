//get the minimum and maximum of an array of numbers
var numbers = [3,5,7,3,7,77,12,1]

var min = Math.min.apply(null, numbers);
var max = Math.max.apply(null, numbers);

console.log(min, ' ', max);
//1, 77