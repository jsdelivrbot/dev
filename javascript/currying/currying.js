/*
we call the function and return another function
then use the second parenthesis as a parameter to executed 
on this returned function
console.log(sum(1)(3));
*/


function sum(a) {
  let x = a + 1;
  return function(x){return x + a};
}

//4

//we can use currying to make many nested functions
var greetDeeplyCurried = function(greeting) {
  return function(separator) {
    return function(emphasis) {
      return function(name) {
        console.log(greeting + separator + name + emphasis);
      };
    };
  };
};

var greetAwkwardly = greetDeeplyCurried("Hello")("...")("?");
greetAwkwardly("Heidi"); //"Hello...Heidi?"
greetAwkwardly("Eddie"); //"Hello...Eddie?"

//we can then pass as many parameters as we'd like to make custom variations

var sayHello = greetDeeplyCurried("Hello")(", ");
sayHello(".")("Heidi"); //"Hello, Heidi."
sayHello(".")("Eddie"); //"Hello, Eddie."

//and subordinate variations

var askHello = sayHello("?");
askHello("Heidi"); //"Hello, Heidi?"
askHello("Eddie"); //"Hello, Eddie?"

//more info on this at this link
https://www.sitepoint.com/currying-in-functional-javascript/