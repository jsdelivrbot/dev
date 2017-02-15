// This is the classical inheritance pattern (constructor functions)
// don't use inheritance much if at all
// this is just for reference 

// ---------- JAVASCRIPT CLASSES (constructor funtions) ----------
// Creating multiple objects of the same type with Constructor
// Functions. Constructors provide the functions that classes
// provide in other languages - notice the "this" which makes these properties
// accessable and indavidualized to instances of the class. (then new is called the function constructor is
//invoked and, 'this' points to an empty object and adds on properties and methods
// object with properties and methods)
//naming convention:
//capital in the construction name, camel case for methods, lowercase for properties
function Person(name, street) {

  // this allows us to refer to an object even though we
  // don't know its name before it is created
  this.name = name;
  this.street = street;
  this.info = function(){
    return "My name is " + this.name + " and I live on " + this.street;
  }
}

// You call constructor functions with new
var bobSmith = new Person("Bob Smith", "234 Main St");

document.write(bobSmith.info() + "<br />");

// instanceof tells you if an object is of a certain type
document.write("Bob is a person : " + (bobSmith instanceof Person) + "<br />");

// You can pass an object to a function and change values
function changeName(person){
  person.name = "Sue Smith";
}
changeName(bobSmith);
document.write("Bob became " + bobSmith.name + "<br />");

//in javascript objects are passed by reference and variables by value

//pass by value
function change(b) {
    b = 2;
}

var a = 1;
change(a);
console.log(a);
//1

//pass by reference
function changeObj(d) {
    d.prop1 = function() {};
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);
//{ prop1: [Function], prop2: {}}

// Objects are only equal if they reference the same object
var person1 = new Person("Paul", "123 Main");
var person2 = new Person("Paul", "123 Main");

document.write("Are they equal " + (person1 == person2) + "<br />");

//note that you can you should make constructor functions with parameters, but you don't
//have to call them when making a new instance.

function User(username, password) {
    this.username = username;
    this.passoword = password;
    this.displayUser = function() {
        document.write(this.username + '<br>' + this.password);
    }
}

john = new User('Jonny', 'ginkgo5');
//or
maggie = new User();
maggie.username = 'Maggie';
maggie.password = 'starlight4';

//also note that you can call a method outside of the function constructor.
//(not recommended, but it is valid)

function User(username, password) {
    this.username = username;
    this.passoword = password;
    this.displayUser = displayUser;
}

function displayUser() {
    document.write(this.username + '<br>' + this.password);
}