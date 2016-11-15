//----------------------------------------------------//
//creating a webserver in node
//----------------------------------------------------//

// var http = require('http');
// var fs = require('fs');
// 
// http.createServer(function(req, res){
//     //some of the http header name are not valid javascript names so you mush put variables in quotes
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     
//     var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
//     
//     var message = "This is template info!";
//     
//     //we just do this to demonstrate the use of templating - not a good way to do it in production
//     html = html.replace('{Message}', message);
//     res.end(html);
//     
//     //end(): last thing sending... done 
//     res.end(html);
//     
// //createserver it's self creates an object that has a .listen event that you use to indicate the port
// //(when information comes - the number for node to map to).
// //then the localhost server ip address (127.0.0.1 is the address for a local server). To access this type localhost:1337 in the browser
// }).listen(1337, '127.0.0.1');

//using streams for performance (always use streams where possible)
//----------------------------------------------------//

// var http = require('http');
// var fs = require('fs');
// 
// //create a readstream and pipe it directly to the response since response
// //is a writeable streawm and the browser is made to load chunks of data at a time.
// http.createServer(function(req, res){
//     
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/index2.htm').pipe(res);
//    
// }).listen(1337, '127.0.0.1');

//----------------------------------------------------//
//creating endpoints in node
//----------------------------------------------------//

var http = require('http');
var fs = require('fs');


http.createServer(function(req, res){
    
        //without these if statements, it would just return the same response 
        //no matter what '/someurl' is entered
        if(req.url === '/') {
            
            fs.createReadStream(__dirname + '/index.htm').pipe(res);
            
        } else if(req.url === '/api') {
            
            //use json as output
            res.writeHead(200, {'Content-Type': 'application/json'});
            var obj = {
                firstname: 'John',
                lastname: 'Doe'
            }
            //stringify - built into javascript for converting obj to a string formatted as json
            res.end(JSON.stringify(obj));
            //fs.createReadStream(__dirname + '/index2.htm').pipe(res);
        } else {
            //else return a 404 error code in the head
            res.writeHead(404);
            res.end();
        }
   
}).listen(1337, '127.0.0.1');