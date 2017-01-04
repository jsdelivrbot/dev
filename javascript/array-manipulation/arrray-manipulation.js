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





let professions = []
for (var i = 0; i <= foundProfessions.length; i++) {
 //professions.push(foundProfessions[i].body);
 //console.log(foundProfessions[i].body);
 professions.push(foundProfessions[i]);
}

//find the body of the profession using the professionId to lookup the reducer data
let data = _.find(this.props.professions, function(item){ return item.id == professionId; });
let body = data.body;

//check if the user alreay selected the list item
var inListAlready = _.some(selectedItemList, function (item) {
  return item.id === professionId;
});
//add if not alreay in list and keep list to 5 items max
if(!inListAlready && selectedItemList.length <= 4) {
  //update the button list
  selectedItemList.push({id: professionId, body: body});
  //update the currently selected item (stored in the reducer)
  this.props.dispatch(changeProfession(professionId, true));
}

//.every
//(true/false if fined in array)
//---------------------------------------

//check if any errors in all fields
let errorSomewhere = this.state.fields.every((item) => {
    //return true or false
    return item.error;
});

//Lodash
//---------------------------------------

//filter through an array of objects
_.filter(datastore, function(item){
  return item.incubatorIdentification.parent === 'Food';
});

//.some to return some objects from array of objects
var foundEngagements = _.some(mockDataStore.businessEngagedIn, function (item) {
  if(item === true) { return item }

});

//.omit return everything but the specified props
const props = _.omit(this.props, 'todo');

//find and replace
//-----------------
//copy the profession object at the incoming index payload
var data = _.find(INITIAL_STATE, function(item){ return item.id == action.idPayload; });
//set it to true
data.isSet = action.isSetPayload;
//console.log("found data: " + data);

// Find item index using indexOf+find
// look in to the initial state array to find the id of he passed action payload
var index = _.indexOf(INITIAL_STATE, _.find(INITIAL_STATE, {id: action.idPayload}));
//console.log("found index: " + index);

// Replace item at index using native splice
INITIAL_STATE.splice(index, 1, data);

//-----------------


//reset all

for (let i =0; i <= myArray.length; i++ ) {
  if(myArray[i].isSet === true) {
    var data = myArray[i];
    data.isSet = "false";
    
    //console.log(data);
    // Replace item at index using splice
  myArray.splice(i, 1, data);
    //console.log(INITIAL_STATE);
  }
}
