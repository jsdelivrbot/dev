//pubsub pattern/emitters/observer pattern:
// A single object notifies many objects (observers) when a
// state change occurs

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


//another example pattern-----------------------//

var Observable = function() {
    this.subscribers = [];
}

Observable.prototype = {
    subscribe: function(subscriber) {
        // Add the subscriber object to the list
        this.subscribers.push(subscriber);
    },
    unsubscribe: function(unsubscriber) {

        // Cycle through the subscriber array and delete
        // the unsubscriber
        for (i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i] === unsubscriber) {
                this.subscribers.splice(i, 1);

                // We assume it only subscribed once so we
                // leave after it is found
                return unsubscriber.name;
            }
        }
    },
    publish: function(data) {

        // Cycle through all subscribers and send them the update
        for (i = 0; i < this.subscribers.length; i++) {
            this.subscribers[i].receiveData(data);
        }
    }
};

var OrganFanny = {
  name: "Organ Fanny",
  receiveData: function(data){
    document.write(this.name + " received your info : " + data + "<br />");
  }
}

var BoldmanYaks = {
  name: "Boldman Yaks",
    receiveData: function(data){
      document.write(this.name + " received your info : " + data + "<br />");
    }
}

// Add subscribers and alert them
observable = new Observable();
observable.subscribe(OrganFanny);
observable.subscribe(BoldmanYaks);
observable.publish('IBM at $145.30');

document.write(observable.unsubscribe(OrganFanny) + " Unsubscribed<br />");

observable.publish('IBM at $145.33');
