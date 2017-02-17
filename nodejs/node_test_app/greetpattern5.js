//this variable won't be agailable 
//revealing module pattern... we expose only the methods/properties 
// that we want exposed via the return object
var greeting = 'Greet pattern5!';

function greet() {
    console.log(greeting);
}

module.exports = {
    greet: greet
}
