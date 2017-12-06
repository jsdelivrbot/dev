 //usinte ES6 classes--------------------------//
 //note that it's just "syntactic sugar" it doesn't change the way function constructors and prototypes work,
 //just how it's typed so remember to understand how this all works before using ES6 classes. It doesn't work like calsses
 //in other languages

//this is an example in the older method...

function Personage(fisrtname, lastname) {
    this.firstname = fisrtname;
    this.lastname = lastname;
}
 
 Personage.prototype.greet = function () {
     console.log('Hello' + this.firstname + ' ' + 
     this.lastname);
 }
 
var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(jane.__proto__ === jane.__proto__);

//translates to this:

class Personagecls {
    //anything added inside 'constructor' works like a function constructor
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    //anything added outside of it are automatically put on the prototype
    greet() {
        console.log('Hello' + this.firstname + ' ' +
        this.lastname);
    }
}
    
var john = new Personagecls('John', 'Doe');
john.greet();

var jane = new Personagecls('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(jane.__proto__ === jane.__proto__);