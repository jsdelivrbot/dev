//using a funtion constructor
function Greetr() {
    this.greeting = 'Module pattern4!'
    this.greet = function() {
        console.log(this.greeting)
    }
}

module.exports = Greetr;