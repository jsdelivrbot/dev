
//mixin using prototypes and a custom extend function
//-----------------------------------------//

//jquery has the equivelent of this using $.extend();
function extend(target) {
  //check if there's a second argument, if not, exit
  if(!arguments[1]) {
    return;
  }
  
  //starting at second argument, loop through each source object
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var prop in source) {
      //source.hasOwnProperty is so we don't copy properties that are on the prototype
      //!target[prop] don't copy if already on target prop
      if (!target[prop] && source.hasOwnProperty(prop)) {
        target[prop] = source[prop];
      }
    }

  }

  
}

//base subjects

function Crab(name) {
  this.name = name;
}

function Fish(name) {
  this.name = name;
}

//objects to use to extend capability

var mover = {
  crawl : function() {
    return this.name + " is crawling.";
  },
  run : function() {
    return this.name + " is running."
  }
}

var eater = {
  eat: function() {
    return this.name + " is eating.";
  }
}

var swimmer = {
  swim: function() {
    return this.name + " is swimming.";
  }
}

extend(Crab.prototype, mover, eater);
extend(Fish.prototype, swimmer, eater);

var fish1 = new Fish("Nemo");
var crab1 = new Crab("Sebastian");

console.log(fish1.swim());
console.log(crab1.crawl());
console.log(crab1.eat());




