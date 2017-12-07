//storing an array of functions in an object prototype (event pattern)
function Emitter() {
    this.events = {};
}

//(adding the method "on" to the Emitter prototype)
Emitter.prototype.on = function (type, listener) {
    //this creates a new property with type as the name of the property and it's an array
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}
//the result of this Emitter object would be something like...
// {
//     uploadComplete: [function() {}, function() {}]
// }