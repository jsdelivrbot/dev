
//rest operator
//----------------------------------------------------------//

//used as a better alternative to the arguments object
//better because:
//creates an array rather than an array-like object
//can be used inside a nested function without having to change it's name 
//(since arguments object is created for each function)

function inspectArgs(...args) {
  return args.length;
}

console.log(inspectArgs('Hello', 'World'));
//2

//can also comnine this with regular comma separated args
function inspectArgs(regular, ...args) {
  return regular + args.length;
}

console.log(inspectArgs(5, 'Hello', 'World'));
//7

//also used in destructuring to extract part of an array
let produce = ['watermelon', 'carrots', 'onion', 'broccoli']
let extractedItem1, extractedArray;
[extractedItem1, ...extractedArray] = produce;
console.log(extractedItem1);
console.log(extractedArray);


//the spread operator uses iteration protocals to iterate over elements
//object must impliment [Symbol.iterator]
//to make it itterable.
let iterable = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                let value = this[index];
                let done = index >= this.length;
                index++;
                return { value, done };
            }
        };
    }
};
// for (let item of iterable) {
//     console.log(item); // 'a', 'b', 'c'
// }

//now we can use rest to destructure the object into an array
var array = [...iterable]

console.log(array);

//spread operator
//----------------------------------------------------------//

//array construction

//insert on initialization
let melons = ['watermelon', 'cantelope']
let fruit = ['apples', 'organges', ...melons];
console.log(fruit);

//concatenate
let fruit = ['apples', 'oranges'];
let veggies = ['onion', 'broccoli'];

let produce = [...fruit, ...veggies];
console.log(produce);

//clone an array
let fruit = ['apples', 'oranges'];
let fruitInstance = [...fruit];

console.log(fruitInstance);
console.log(fruitInstance  === fruit);


//function arguments from an array

let fruits = ['apples', 'oranges', 'grapes'];
let veggies = ['onion', 'broccoli'];

fruits.push(...veggies);
//evaluates to
//fruits.push('onion', 'broccoli');

console.log(fruits);
