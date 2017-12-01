/* ==========================================================================
Converting Arrays to Strings
========================================================================== */

var fruits = ["Banana", "Orange", "Apple", "Mango"];

//convert to string
console.log(fruits.toString());

//convert comma separated string to an array
var string = "foo,bar,baz";
console.log(string.split(','))

//convert into string with custom delimeter.
console.log(fruits.join("*"));

//convert to primitive value (javascript converts this primitive value to string )
console.log("value of fruits: " + fruits.valueOf());

/* ==========================================================================
Popping and Pushing
========================================================================== */

//remove the last element from an array:
var popped = fruits.pop();              
// Removes the last element ("Mango") from fruits (returns the popped item)
console.log(popped);
console.log(fruits);

//add a new element to end of array (return the new array length)
var pushed = fruits.push("Kiwi");
console.log(pushed);
console.log(fruits);

/* ==========================================================================
shifting
========================================================================== */

//remove the first element of array (returns shifted item)
var shifted = fruits.shift();
console.log(shifted);
console.log(fruits);

//add new element to beginning of array (returns new array length)
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

/* ==========================================================================
sort
========================================================================== */

// arr.sort()
var scores = [1, 10, 21, 2]; 
scores.sort(); // [1, 10, 2, 21]
// Note that 10 comes before 2,
// because '10' is mix of two characters '1' and '0' so '10' is before '2' in Unicode code point order.

// If compareFunction is supplied, the array elements are sorted according to the return value of the compare function. If a and b are two elements being compared, then:

// If compareFunction(a, b) is less than 0, sort a to an index lower than b, i.e. a comes first.
// If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behaviour, and thus not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.
// If compareFunction(a, b) is greater than 0, sort b to a lower index than a.
// compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned then the sort order is undefined.

// arr.sort(compareFunction)
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
// [1, 2, 3, 4, 5]

/* ==========================================================================
splice
========================================================================== */
//insert elements at position
//.splice(start-position, amt-elements-removed, ...rest-elements-to-add)
fruits.splice(2,0,"Lemon", "Lime");
console.log(fruits);

//remove elements at position
fruits.splice(2,1);
console.log(fruits);

/* ==========================================================================
slice
========================================================================== */

//return a new array that's a cut end piece of an array after number indicated (no elements removed from original)
var slicedFruits = fruits.slice(3);
console.log(slicedFruits);
console.log(fruits);

//slice an indicated amount bewteen item one and 3
var slicedFruits2 = fruits.slice(1,3);
console.log(slicedFruits2);
console.log(fruits);

/* ==========================================================================
concatenate
========================================================================== */

//concatenate two arrays
var tropical = ["bananna", "pineapple"];
var regular = ["apple", "grape"];
var fruitBasket = regular.concat(tropical);
console.log(fruitBasket);


/* ==========================================================================
//.map .filter. .find
========================================================================== */

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

//.find
//returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
//(use findIndex() to return the index instead)
[12, 5, 8, 130, 44].find((element) => {
  return element >= 15;
}); // 130

/* ==========================================================================
find index (works for spaced strings and arrays)
========================================================================== */
var n = str.indexOf('foobar');

/* ==========================================================================
reduce
========================================================================== */
//The return value of the function is stored in an accumulator (result/total).
//the total becomes a single value (reduce the array to a single value)
var total = frutiBasket.reduce(function(sum, item) {
return sum + item.length;
}, 0);
console.log(total);

//return a new array without undefined
let newArray = someArray.reduce(function(result, item) {
  if(item.active) {
    result.push(item.id);
  }
  return result;
}, []);


/* ==========================================================================
apply
========================================================================== */

function getMaxOfArray(numArray) {
  //use apply to populate an arbitrary 
  //number of arguments to a function
  return Math.max.apply(null, numArray);
}
var arr = [1, 2, 3];
var max = getMaxOfArray(arr)
console.log(max);

//or just use the spread operator
var max2 = Math.max(...arr);
console.log(max2);


/* ==========================================================================
every
========================================================================== */
//(true/false if fined in array)

//check if any errors in all fields
let errorSomewhere = this.state.fields.every((item) => {
    //return true or false
    return item.error;
});


/* ==========================================================================
//foreach
========================================================================== */
//itterate over an array of values and execute a function for each one
//array.forEach(function(currentValue, index, arr), thisValue);
//*it doesn't execute for blank values
//is 95% slower than for loop
//-----------------
var myArray = [3,5,7];
myArray.forEach(function(value, index){
  console.log("index: ", index);
  console.log("value: ", value);
});

/* ==========================================================================
//operating for N times
========================================================================== */

//create an array of N size (filled with undefined values)
var myarray = Array.apply(null, Array(6));

//loop for N times
Array.apply(null, Array(5)).forEach(function() {
  //...
});


/* ==========================================================================
//test if value exists in array
========================================================================== */

function inArray(needle, haystack) {
    var length = haystack.length;
    for(var i=0; i<length; i++) {
        if(haystack[i] == needle) return i;
    }
    return -1;
}
//conveniently add this to the array prototype:
Array.prototype.inArray = function inArray(value){
  for(i = 0; i < this.length; i++){
    if(this[i] === value){
      return true;
    }
  }
  return false;
}
var sampArray = [1,2,3,4,5];
document.write("3 in array : " + sampArray.inArray(3) + "<br />");


/* ==========================================================================
//loop through a collection and return deeply nested property from each item
========================================================================== */

newArray = myArray.map((item) => {
  return item.subitem[0].name;
});

/* ==========================================================================
//find next, prev. item in the array
========================================================================== */

let nextItem = '';
let prevItem = '';
let index = 0;
index = pagesCopy.indexOf(currentPage);
if(index >= 0) {
    //need -1 since index uses 0 index and length doesn't
    if(index !== pagesCopy.length - 1) {
        nextItem = pagesCopy[index + 1];
    } else {
        console.log('called')
        nextItem = '';
    }
    if(index !== 0) {
        prevItem = pagesCopy[index - 1];
    } else {
        prevItem = '';
    }
}
// console.log('prevItem: ', prevItem);
// console.log('nextItem: ', nextItem);
