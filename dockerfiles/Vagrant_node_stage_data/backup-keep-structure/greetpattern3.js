//using a funtion constructor
function Greetr() {
    this.greeting = 'Module pattern3!'
    this.greet = function() {
        console.log(this.greeting)
    }
}

module.exports = new Greetr();