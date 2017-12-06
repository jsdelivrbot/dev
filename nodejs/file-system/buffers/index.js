/*----------------------------------------------------
buffers
----------------------------------------------------*/

// we need to be able to read binary data from our filesystem
// fs stands for file system
var fs = require('fs');

//Buffer is global so no need to 'require' (not the same as es6 buffers)
//use the utf8 encoding to figure out what string of binary data this is
var buf = new Buffer('Hello', 'utf8');
console.log('buffer: ', buf);
//returns 49 65 6c 6f (looks that way because it's in hexidecimal format)

//now we can convert back to characters
console.log('buffer to string: ', buf.toString());

//can convet to JSON
console.log('buffer to JSON: ', buf.toJSON());

//can get a particular one like and array
console.log('specific buffer part: ', buf[2]);

buf.write('wo');
console.log('altered buffer to string: ', buf.toString());
//outputs wollo because we already wrote hello to it and buffer just pushes and replaces
//existing info

//we can use __dirname because it's in the same directory as this code file
//turn the 010101 into characters. Internally node loads this into a buffer
var sampleTextBuffer = fs.readFileSync(__dirname + '/sample-text.txt');
console.log('sample text buffer sync to string: ', sampleTextBuffer);

//however, you should almose always use the default fs.readFild (async) version
//always use async in node where possible for performance
//uses an error first callback
var greet2 = fs.readFile(__dirname + '/sample-text.txt', function(err, data) {
    //returns a buffer full of binary data
    console.log('sample text buffer async to string: ', data);
});
//if including utf8 it will convert it
var greet2 = fs.readFile(__dirname + '/sample-text.txt', 'utf8', function(err, data) {
    console.log('converted sample text buffer to string: ', data);
});