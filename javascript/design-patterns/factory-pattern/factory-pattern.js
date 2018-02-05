/* ==========================================================================
//basic idea
========================================================================== */

//factory function
var Fish = {
  movement: 'swim',
  init: function() {
  	return {
  	  move: () => console.log(this.movement)
  	}
  }
}

//create instance
var guppy = Fish.init();
guppy.move();
//swim


//the great thing is that we don't have to modify the 'this' context
$('myButton').click(guppy.move)

//movement remains private
console.log(guppy.movement);
//undefined

/* ==========================================================================
full example
========================================================================== */

// Factory refactored implementation:
const AutoMaker = {
  Car: function(bundle) {
    return Object.create(this.bundle[bundle]);
  },

  bundle: {
    premium: {
      drive () {
        console.log('Vrooom!');
      },
      getOptions: function () {
        return ['leather', 'wood', 'pearl'];
      }
    }
  }
};

// The refactored factory expects:
const newCar = AutoMaker.Car('premium');
newCar.drive(); // 'Vrooom!'


/* ==========================================================================
//example 1
========================================================================== */

var module = function() {

	function createInput(type) {
		var el = document.createElement('input');
		el.type = type;

		return el;
	}

	var controls = {
		text: function(options) {
			var el = createInput("text");
			if(typeof options.value !== "undefined") {
				el.value = options.value;
			}
			return el;
		},
		checkbox: function(options) {
			var el = createInput('checkbox');
			if(typeof options.checked !== "undefined") {
				el.checked = options.checked;
			}
			return el;
		}
	};

	return {
		create: function (options) {
			var type = options.type ? options.type.toLowerCase() : undefined;
			//if no type or we don't have that type in controls
			if(!type || controls[type]) {
				//throw new {
					//message: type + "is not supported."
				//};
			}
		return controls[type](options);	
		}
	}

}

var myMod = module();
var text = myMod.create({ type: "text", value: "hello factory" });
var check = myMod.create({ type: "checkbox", checked: true })

console.log(text);
console.log(check);

/* ==========================================================================
//prototypal - factory function
========================================================================== */

// same as above examples, only you use Object.create to return the object
// this sets up the prototype on object creation
var proto = {
  drive: function() {
    console.log('Vroom!');
  }
};

function factoryCar() {
  return Object.create(proto);
}

var car3 = factoryCar();
car3.drive();

/* ==========================================================================
//prototypal - factory function with custom props
========================================================================== */

//this time, specify custom props you's like your
//object to have on creation (can be used as mixin pattern)

var human = {
 species: "human",
 create: function(values) {
  var instance = Object.create(this);
  Object.keys(values).forEach(function(key) {
    instance[key] = values[key];
  });
  return instance;
 },
 saySpecies: function() {
  console.log(this.species);
 },
 sayName: function() {
  console.log(this.name);
 }
};

var musician = human.create({
  species: "musician",
  playInstrument: function() {
    console.log("plays " + this.instrument);
  }
});

var will = musician.create({
  name: "Will",
  instrument: "drums"
});

will.playInstrument(); // plays drums
will.sayName(); //will


