// ---------- PROTOTYPE ----------

// Every function has a prototype property that contains an object
// You can add properties and methods to the prototype object
// and then when you call for them to execute they are used
// just as if they belonged to the object.

// * prototypes are not based on inheritance, they're deligates
// they can act like backup/utiltiy functions if they're not available
// on the direct object at hand.

function getSum(num1, num2){
  return num1 + num2;
}

// Get the number of function arguments
document.write("Num of arguments : " + getSum.length + "<br />");

// You can add properties and methods to this object
function Mammal(name){
  this.name = name;
  this.getInfo = function(){
    return "The mammals name is " + this.name;
  }
}

// Use prototype to add a property
Mammal.prototype.sound = "Grrrrr";

// Use it to add a method
Mammal.prototype.makeSound = function() {
  return this.name + " says " + this.sound;
};

var grover = new Mammal("Grover");

document.write(grover.makeSound() + "<br />");

// List all properties of an object
for( var prop in grover){
  document.write(prop + " : " + grover[prop] + "<br />");
}

//storing an array of functions in an object prototype (event pattern)
function Emitter() {
    this.events = {};
}

//(adding the method "on" to the Emitter prototype)
Emitter.prototype.on = function (type, listener) {
    //this creates a new property with type as the name of the property and it's an array
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}
//the result of this Emitter object would be something like...
// {
//     uploadComplete: [function() {}, function() {}]
// }

// Check which property belongs to prototype vs. the object grover
document.write("name Property of Grover : " + grover.hasOwnProperty("name") + "<br />");

document.write("sound Property of Grover : " + grover.hasOwnProperty("sound") + "<br />");

// You can add methods to built in JS objects
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

//another prototype example...

function Person (firstname,lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstname + ' ' +
    this.lastname);
}

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

//prit out what is contained in the actual prototype
console.log(john.__proto__);
console.log(jane.__proto__);
//Person {greeting: [Function]}
//Person {greeting: [Function]}


//another example...

function Person (firstname,lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstname + ' ' +
    this.lastname);
}

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

//prit out what is contained in the actual prototype
console.log(john.__proto__);
console.log(jane.__proto__);
//Person {greeting: [Function]}
//Person {greeting: [Function]}

//example2

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

// More often then not it makes more sense to just inherit the
// prototype to speed up the lookup process

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

//using object.create to directly create a prototype
var person = {
    firstname: '',
    lastname: '',
    greet: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

console.log(john.greet() + ' ' + jane.greet());


// ---------- INTERMEDIATE FUNCTION INHERITANCE ----------

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


// ---------- CALL PARENT METHODS ----------
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