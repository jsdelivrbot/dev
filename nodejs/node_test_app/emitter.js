function Emitter() {
    this.events = {};
}

//adding the method "on" to the Emitter prototype
Emitter.prototype.on = function (type, listener) {
    //this creates a new property with type as the name of the property and it's an array
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

//the result would be something like...
// {
//     uploadComplete: [function() {}, function() {}]
// }

//adding the method "emit" to the Emitter prototype
Emitter.prototype.emit = function(type) {
    if(this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

module.exports = Emitter;