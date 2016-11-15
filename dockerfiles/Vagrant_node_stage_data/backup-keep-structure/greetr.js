'use strict';

var EventEmitter = require('events');

//using a class expression (treating the class like a variable) so we can
//export it.
module.exports = class Greetr2 extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello world!';
    }
    
    greet(data) {
        console.log(`${this.greeting} : ${data}`);
        this.emit('greet', data);
    }
}