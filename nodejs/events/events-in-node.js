//this is now the node way of doing it.. same format, just require "events" from node
//and we also use a config file we've created to control the string names:
var NodeEmitter = new require('events');
var eventConfig = require('./config').events;

var NodeEmitter =  new Emitter();
myEmitter.on(eventConfig.GREET, function emitterCallbackNode () {
    console.log('emitterCallbackNode called!');
});

NodeEmitter.on(eventConfig.GREET, function emitterCallbackNode2 () {
    console.log('emitterCallbackNode2 called!');
});

NodeEmitter.emit(eventConfig.GREET);

//using the util.inherits that sets up a prototype chain so that the Greetr class
//can enherit the EventEmitter methods like 'on'
var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    this.greeting = 'Hello world!';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function (data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
   console.log('someone greeted!: ' + data); 
});

greeter1.greet('Tony');

//#Example-Greeter now the same scinario but using .call to attach the EventEmitters methods to the instance
//of the Greeter Class - essentially creating a copy of it's properties.

var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    //just this one line is added... 'this' gets passed from Greetr up the prototype chain
    //to EventEmitter so that all things that EventEmitter has access to will be included in Greetr
    //because it's an object, it's passed by reference and so you can add on the rest of the properties to the same 
    //object afterward like this.greeting
    EventEmitter.call(this);
    this.greeting = 'Hello world!';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function (data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
   console.log('someone greeted!: ' + data); 
});

greeter1.greet('Tony');

//here's a simpler example of the same thing...
//what if I want policeman to have access to everything person has access to?
//util.inherits just connects the prototypes, won't actually invoke Person without the person.call()

var util = require('util');

function Person() {
    this.firstname = 'John';
    this.lastname = 'Doe';
}
 
 Person.prototype.greet = function () {
     console.log('Hello' + this.firstname + ' ' + 
     this.lastname);
 }
 
 function Policeman() {
     //here is where you insert your this from Policeman into Person
     //basically you're passing object instances to other instances
     Person.call(this);
     this.badgenumber = '1234';
 }
 
 util.inherits(Policeman, Person);
 var officer = new Policeman();
 officer.greet();
 
 


//here's #Example-Greeter again but this time implimenting the above using the ES6 class
//'util' is no longer needed 

var EventEmitter = require('events');

//'extends' creates the prototype inheritance and also tells super what to inherit constructor functions from
class Greetr2 extends EventEmitter {
    constructor() {
        // super does what this did before: EventEmitter.call(this); 
        //you just need to specity what you're inheriting from in extends
        super();
        this.greeting = 'Hello world!';
    }
    
    greet(data) {
        console.log(`${this.greeting} : ${data}`);
        this.emit('greet', data);
    }
}

var greeter1 = new Greetr2();

greeter1.on('greet', function(data) {
   console.log('someone greeted!: ' + data); 
});

greeter1.greet('Tony');

//now we can use this example with modules (greetr.js)
var Greetr3 = require('./greetr');

var greeter4 = new Greetr3();

greeter1.on('greet', function(data){
   console.log('someone greeted!: ' + data);
});

greeter1.greet('Tony');
