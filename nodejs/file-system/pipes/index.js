/*----------------------------------------------------
using pipes in node
----------------------------------------------------*/
//pipes connect streams to other streams
//always use streams in node where possible for performance

var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/sample-text.txt');
var compressed = fs.createWriteStream(__dirname + '/sample-text.txt.gz');

//creates a readable/writable transform stream. When a chunk sent to it, it compresses it.
//It's output can also be piped to another writable stream. It doesn't save anywhere, it just gives a compressed output 
//(method chaining)
var gzip = zlib.createGzip();

//this will read from readable, then pipe to gzip, then since the function returns the stream it's written to
// you can then pipe it to 'compressed' and make the .gz file.
readable.pipe(gzip).pipe(compressed);