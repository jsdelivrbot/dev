//pubsub pattern/emitters:

//basic hand made emitter-------------------//


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

var myEmitter =  new Emitter();
myEmitter.on('greet', emitterCallback);

function emitterCallback () {
    console.log('emitterCallback called!');
}

myEmitter.on('greet', function emitterCallback2 () {
    console.log('emitterCallback2 called!');
});

myEmitter.emit('greet');







//another pattern
//https://gist.github.com/learncodeacademy/777349747d8382bfb722

//the event system
var events = {
  events: {},
  on: function (eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },
  off: function(eventName, fn) {
    if (this.events[eventName]) {
      for (var i = 0; i < this.events[eventName].length; i++) {
        if (this.events[eventName][i] === fn) {
          this.events[eventName].splice(i, 1);
          break;
        }
      };
    }
  },
  emit: function (eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(function(fn) {
        fn(data);
      });
    }
  }
};

//example handler
var someHandle = function (args) {
    console.log('Fired! ' + args + ' people.')
}

//invokation:
events.on('peopleChanged', someHandle);
events.emit('peopleChanged', 3);
