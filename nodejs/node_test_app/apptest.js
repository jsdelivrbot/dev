 //this is use at top of file to make sure the javascript is formatted correctly - strictly
 //and sometime engines will only allow to use new javascript features when on strict mode
'use strict';

//use of require in multiple files and formats
var greet = require('./greet');

greet.english();
greet.spanish();


//module pattern1 example
var greet1 = require('./greetpattern1.js');
greet1();

//module pattern2 example
var greet2 = require('./greetpattern2.js');
greet2.greet();

//or call it this way
var greet2 = require('./greetpattern2.js').greet;
greet2();

//module pattern3 example (returing an object from require)
var greet3 = require('./greetpattern3.js');
greet3.greet();
greet3.greeting = 'Changed greet pattern3!';

//the greeting ends up changing to the above because node caches the first call to require
//and stores it in an object so any operation on it affects other calls to the same requre.
var greet3b = require('./greetpattern3.js');
greet3b.greet();

//module pattern4 example
//this way we are able to make the object independant from the required module
var Greet4 = require('./greetpattern4.js');
var grtr = new Greet4();
grtr.greet();

//module pattern5 example
//can't access the "greeting" property inside the module because it's protected
var greet5 = require('./greetpattern5.js').greet;
greet5();

//creation of a custom event system example (just to show how node's basically works)
var Emitter = require('./emitter.js');

var myEmitter =  new Emitter();
myEmitter.on('greet', emitterCallback);

function emitterCallback () {
    console.log('emitterCallback called!');
}

myEmitter.on('greet', function emitterCallback2 () {
    console.log('emitterCallback2 called!');
});

myEmitter.emit('greet');

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


//----------------------------------------------------//
//working with the buffer.
//----------------------------------------------------//

//Buffer is global so no need to 'require'
//use the utf8 encoding to figure out what sring of binary data this is
var buf = new Buffer('Hello', 'utf8');
console.log(buf);
//returns 49 65 6c 6f (looks that way because it's in hexidecimal format)
//now we can convert back to characters
console.log(buf.toString());
//can convet to JSON
console.log(buf.toJSON());
//can get a particular one like and array
console.log(buf[2]);

buf.write('wo');
console.log(buf.toString());
//outputs wollo because we already wrote hello to it and buffer just pushes and replaces
//existing info

//node has it's own buffer sysem but es6 has it's own way to use buffers
//just so we know...

var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
console.log(view);

//----------------------------------------------------//
//callbacks in javascript
//----------------------------------------------------//

function greetback(callback) {
    console.log('Hello!');
    var data = {
        name: 'John Doe'
    }
    callback(data);
}

greetback(function(data) {
    console.log('the callback was inovked!');
    console.log(data);
});

greetback(function(data) {
    console.log('a different callback was inovked!');
    console.log(data.name);
});

//----------------------------------------------------//
//applying buffers and callbacks in node
//----------------------------------------------------//

var fs = require('fs');
//we need to be able to read binary data from our filesystem
//we can use __dirname because it's in the same directory as this code file
//turn the 010101 into characters. //internally node loads this into a buffer
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

//however, you should almose always use the default fs.readFild (async) version
//always use async in node where possible for performance
//uses an error first callback
var greet2 = fs.readFile(__dirname + '/greet.txt', function(err, data) {
    //returns a buffer full of binary data
    console.log(data);
});
//if including utf8 it will convert it
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
    //returns a buffer full of binary data
    console.log(data);
});
//notice that hellow world is async so it appears after "Done!"
console.log('Done!');

//----------------------------------------------------//
//using streams in node
//----------------------------------------------------//

var fs2 = require('fs');

//create a readable stream to read the file
var readable = fs2.createReadStream(__dirname + '/greet2.txt');

//(stream enharits from event so it has the .on function) the event name is called 'data'
//when the stream fills up the buffer with data then it fires this event until it's all done.
//this prints out a buffer object
readable.on('data', function(chunk) {
   console.log(chunk);  
});
// to tell it to return a string, you can put properties in an object parameter
// and it will convert it. You can also specify how large you want the buffer to be (2kb)
var readable2 = fs2.createReadStream(__dirname + '/greet2.txt', {encoding: 'utf8', highWaterMark: 2 * 1024});
readable2.on('data', function(chunk) {
   console.log(chunk.length);  
});

var writable = fs2.createWriteStream(__dirname + '/greetcopy.txt');

//just listening to the data event actually starts the writing one buffer size at a time.
//so this will copy the text from greet2.txt to greetcopy.txt
readable2.on('data', function(chunk){
   console.log(chunk); 
   writable.write(chunk);
});

//----------------------------------------------------//
//using pipes in node
//----------------------------------------------------//
//pipes connect streams to other streams
//always use streams in node where possible for performance

var fs3 = require('fs');
var zlib = require('zlib');

var readable = fs3.createReadStream(__dirname + '/greet2.txt');

var writable = fs3.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs3.createWriteStream(__dirname + '/greetcopy.txt.gz');

//creates a readable/writable transform stream. When a chunk sent to it, it compresses it.
//It's output can also be piped to another writable stream. It doesn't save anywhere, it just gives a compressed output 
//(method chaining)
var gzip = zlib.createGzip();

readable.pipe(writable);

//this will read from readable, then pipe to gzip, then since the function returns the stream it's written to
// you can then pipe it to 'compressed'.
readable.pipe(gzip).pipe(compressed);