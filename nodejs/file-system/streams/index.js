/*----------------------------------------------------
streams in node
----------------------------------------------------*/

var fs = require('fs');

// create a readable stream to read the file
var readStream = fs.createReadStream(__dirname + '/sample-text.txt');

// (stream enharits from event so it has the .on function) the event name is called 'data'
// when the stream fills up the buffer with data then it fires this event until it's all done.
// this prints out a buffer object
readStream.on('data', function(chunk) {
   console.log('chunk: ', chunk);  
});

// to tell it to return a string, you can put properties in an object parameter
// and it will convert it. You can also specify how large you want the buffer to be (2kb)
var readStream2 = fs.createReadStream(__dirname + '/sample-text.txt', { encoding: 'utf8', highWaterMark: 2 * 1024 });
readStream2.on('data', function(chunk) {
   console.log('reading chunk: ', chunk.length);  
});

// create a write stream to write to the filesystem
var writeSteam = fs.createWriteStream(__dirname + '/sample-text-copy.txt');

// just listening to the data event actually starts the writing one buffer size at a time.
// so this will copy the text from greet2.txt to greetcopy.txt
readStream2.on('data', function(chunk){
   console.log('writting chunk: ', chunk.length);
   //print out the actual text:
   //console.log('chunk: ', chunk);
   writeSteam.write(chunk);
});
