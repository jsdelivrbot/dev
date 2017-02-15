//we use these to control context.
//context is decided at runtime when the funtion is called.
//It's always bound to the object the function was called within
//The only exception to this is in the case of a nested function

//the "that" hack 
//control context by assigning "this" to a variable:
//we'll use a nested function in this example.

var person = {
  name : "Oliver",
  outerFunc : function() {
    console.log("outer function's view of this: " + this.name);
    //without using that = this innderFunc can't access the context of name
    var that = this;
    var innerFunc = function() {
      console.log("inner function's view of this: " + that.name);
    }
    innerFunc();
  }
}

person.outerFunc();
//outer function's view of this: Oliver
//inner function's view of this: Oliver



//.call & .apply
//useful when you want to borrow a method from one object
//and use is in a separate one (simple mixin)
var ship1 = {
  weapon : "lazers",
}

var ship2 = {
  weapon : "turrets"
}

function spaceShip1(name) {
  console.log("the " + name + " ship" + " is carrying " + this.weapon);
}

function spaceShip2(name, year) {
  console.log("the " + year + " " + name + " ship" + " is carrying " + this.weapon);
}

//.call
//funtions is called with the desired context passed in and
//the parameter of the function
spaceShip1.call(ship2, "elexir");

//.apply
//same as call but with an array passed in for multiple parameters
var props = ["shadow", 2020];
spaceShip2.apply(ship1, props);




//.bind
//useful for maintaining context in callbacks and events
//
//example: pulling a function from an object into a variable
//it looses it's original context and is now just a function on it's own
let fish = {
  movement: "flap tail",
  swim: function() {
    console.log(this.movement)
  }
}

fish.swim(); //flap tail
let swimFunction = fish.swim;
swimFunction(); //undefined

//use bind to give re-give 'this' the scope of the fish object
let boundFunciton = swimFunction.bind(fish);
boundFunciton(); //flap tail