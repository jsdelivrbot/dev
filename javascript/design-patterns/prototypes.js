/* ==========================================================================
prototypes
========================================================================== */

// Every function has a prototype property that contains an object
// You can add properties and methods to the prototype object
// and then when you call for them to execute they are used
// just as if they belonged to the object.

// * prototypes are not based on inheritance, they're deligates
// they can act like backup/utiltiy functions if they're not available
// on the direct object at hand.


function Mammal(name){
  this.name = name;
  this.getInfo = function(){
    return "The mammals name is " + this.name;
  }
}

// Use prototype to add a property and a method
Mammal.prototype.sound = "Grrrrr";
Mammal.prototype.makeSound = function() {
  return this.name + " says " + this.sound;
};

var grover = new Mammal("Grover");
console.log(grover.makeSound());

// List all properties of the object
for( var prop in grover){
  console.log(prop + " : " + grover[prop]);
}

// Check which property belongs to prototype vs. the object grover
console.log("name Property of Grover : " + grover.hasOwnProperty("name"));
console.log("sound Property of Grover : " + grover.hasOwnProperty("sound"));

/* ==========================================================================
adding to built in JS objects using prototype
========================================================================== */

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
print prototype
========================================================================== */

//prit out what is contained in the actual prototype
console.log(john.__proto__);
console.log(jane.__proto__);
//Person {greeting: [Function]}
//Person {greeting: [Function]}


/* ==========================================================================
parent/child prototype
========================================================================== */

function Animal(){
  this.name = "Animal";

  // toString is a function in the main Object that every
  // object inherits from
  this.toString = function() {
    return "My name is : " + this.name;
  };
}

function Canine(){
  this.name = "Canine";
}

function Wolf(){
  this.name = "Wolf";
}

// Overwrite the prototype for Canine and Wolf
Canine.prototype = new Animal();
Wolf.prototype = new Canine();

// After you overwrite prototype its constructor points to the
// main object object so you have to reset the constructor after
Canine.prototype.constructor = Canine;
Wolf.prototype.constructor = Wolf;

var arcticWolf = new Wolf();

// Wolf inherits toString from Animal
document.write(arcticWolf.toString() + "<br />");
document.write("Wolf instance of Animal : " + (arcticWolf instanceof Animal) + "<br />");

// Properties added to any object in the chain is inherited
Animal.prototype.sound = "Grrrrr";

Animal.prototype.getSound = function(){
  return this.name + " says " + this.sound;
}

Canine.prototype.sound = "Woof";
Wolf.prototype.sound = "Grrrr Wooof";

document.write(arcticWolf.getSound() + "<br />");

/* ==========================================================================
// More often then not it makes more sense to just inherit the
// prototype to speed up the lookup process
========================================================================== */

function Rodent(){
  this.name = "Rodent";
}

function Rat(){
  this.name = "Rat";
}

Rodent.prototype = new Animal();
Rat.prototype = Rodent.prototype;
Rodent.prototype.constructor = Rodent;
Rat.prototype.constructor = Rat;

var caneRat = new Rat();

// Wolf inherits toString from Animal
document.write(caneRat.toString() + "<br />");

/* ==========================================================================
// extend prototypes (mixin) 1
========================================================================== */

function extend(Child, Parent){
  var Temp = function(){};

  Temp.prototype = Parent.prototype;
  Child.prototype = new Temp();
  Child.prototype.constructor = Child;
}

function Deer(){
  this.name = "Deer";
  this.sound = "Snort";
}

extend(Deer, Animal);

var elk = new Deer();

document.write(elk.getSound() + "<br />");

/* ==========================================================================
// extend prototypes (mixin) 2
========================================================================== */

//jquery has the equivelent of this using $.extend();
function extend(target) {
  //check if there's a second argument, if not, exit
  if(!arguments[1]) {
    return;
  }
  
  //starting at second argument, loop through each source object
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var prop in source) {
      //source.hasOwnProperty is so we don't copy properties that are on the prototype
      //!target[prop] don't copy if already on target prop
      if (!target[prop] && source.hasOwnProperty(prop)) {
        target[prop] = source[prop];
      }
    }
  }
}

//base subjects
function Crab(name) {
  this.name = name;
}

function Fish(name) {
  this.name = name;
}

//objects to use to extend capability
var mover = {
  crawl : function() {
    return this.name + " is crawling.";
  },
  run : function() {
    return this.name + " is running."
  }
}

var eater = {
  eat: function() {
    return this.name + " is eating.";
  }
}

var swimmer = {
  swim: function() {
    return this.name + " is swimming.";
  }
}

extend(Crab.prototype, mover, eater);
extend(Fish.prototype, swimmer, eater);

var fish1 = new Fish("Nemo");
var crab1 = new Crab("Sebastian");

console.log(fish1.swim());
console.log(crab1.crawl());
console.log(crab1.eat());

/* ==========================================================================
// call parent methods
========================================================================== */

function Vehicle(name) {
  this.name = "Vehicle"
}

// Functions for the parent object
Vehicle.prototype = {
  drive: function(){
    return this.name + " drives forward";
  },
  stop: function(){
    return this.name + " stops";
  }
}

function Truck(name) {
  this.name = name
}

// Inherit from Vehicle
Truck.prototype = new Vehicle();
Truck.prototype.constructor = Truck;

// Overwrite drive parent method
Truck.prototype.drive = function(){
  // Call the parent method with apply so that the parent
  // method can access the Trucks name value
  var driveMsg = Vehicle.prototype.drive.apply(this);
  return driveMsg += " through a field";
}

var jeep = new Truck("Jeep");

document.write(jeep.drive() + "<br />");
document.write(jeep.stop() + "<br />");