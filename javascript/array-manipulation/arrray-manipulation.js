//Converting Arrays to Strings
//---------------------------------------

var fruits = ["Banana", "Orange", "Apple", "Mango"];

//convert to string
console.log(fruits.toString());

//convert into string with custom delimeter.
console.log(fruits.join("*"));

//convert to primitive value (javascript converts this primitive value to string )
console.log("value of fruits: " + fruits.valueOf());


//Popping and Pushing
//---------------------------------------

//remove the last element from an array:
var popped = fruits.pop();              
// Removes the last element ("Mango") from fruits (returns the popped item)
console.log(popped);
console.log(fruits);

//add a new element to end of array (return the new array length)
var pushed = fruits.push("Kiwi");
console.log(pushed);
console.log(fruits);

//Shifting
//---------------------------------------

//remove the first element of array (returns shifted item)
var shifted = fruits.shift();
console.log(shifted);
console.log(fruits);

//add new element to beginning of  (returns new array length)
var unshifted = fruits.unshift("Mango");
console.log(unshifted);
console.log(fruits);

//Changing
//---------------------------------------
fruits[0] = "Grape";
console.log(fruits);

//quick way to add to end
fruits[fruits.length] = "Grape";
console.log(fruits);

//Splice
//---------------------------------------

//insert elements at position
//.splice(start-position, amt-elements-removed, ...rest-elements-to-add)
fruits.splice(2,0,"Lemon", "Lime");
console.log(fruits);

//remove elements at position
fruits.splice(2,1);
console.log(fruits);

//Slice
//---------------------------------------

//return a new array that's a cut end piece of an array after number indicated (no elements removed from original)
var slicedFruits = fruits.slice(3);
console.log(slicedFruits);
console.log(fruits);

//slice an indicated amount bewteen item one and 3
var slicedFruits2 = fruits.slice(1,3);
console.log(slicedFruits2);
console.log(fruits);

//concatenate
//---------------------------------------

//concatenate two arrays
var tropical = ["bananna", "pineapple"];
var regular = ["apple", "grape"];
var fruitBasket = regular.concat(tropical);
console.log(fruitBasket);

//looping through
//---------------------------------------


//.map .filter. .reduce
//---------------------------------------

//.map
// execute for each item in array and what's returned goes into a new array.
var mapped = fruitBasket.map(function(item) {
    return item.length;
});
console.log(mapped);

//.filter
//execute for each item and create new array of relevant items for each item that has a return value is true.
var found = fruitBasket.filter(function(item) {
    return item === "bananna" || item === "apple";
});

console.log(found);


//.reduce
//execute for each item and use the sum (indicated by the sarting value of the second argument)
//to apply to each item.
//the last itteration is the resulting return value (since sum holds the sum of each other item we keep that information)
var total = frutiBasket.reduce(function(sum, item) {
return sum + item.length;
}, 0);

console.log(total);


//array tricks  
//---------------------------------------

//using Array.apply in interesting ways..
// returns a newly-created array instance with undefined in each value
var a = Array.apply(null, Array(9));
console.log(a);

//a trick to making an equivelent of a foreach statement
//in this case the array is used for nothing but to set foreach against.
Array.apply(null, Array(5)).forEach(function(){
  console.log('called');
});


//same thing, but use .map for the item and index
//and it also allows us to return a new array
var c = Array.apply(null, Array(5)).map(function(item, index){
  //in this case we don't use 'item' because all items are undefined anyways
  return index;
});

console.log(c);

//use apply to populate an arbitrary number of arguments
//to a function
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
var arr = [1, 2, 3];
var max = getMaxOfArray(arr)
console.log(max);

//or just use the spread operator
var max2 = Math.max(...arr);
console.log(max2);

//fill holes in an array
//can also use _.compact in underscore
function fillHoles(arr) {
  var result = [];
  for(var i=0; i < arr.length; i++) {
    result[i] = arr[i];
  }
  return result;
}
var holedArray = ["a",,"b"];
console.log(holedArray);
console.log(fillHoles(["a",,"b"]));
//[ 'a', undefined, 'b' ]