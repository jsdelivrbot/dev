//prototypal inheritance - or factory functions
//a good modular model to use instead of inheritance
//it also takes care of the "this" binding that classes
//introduce

//factory function
const fish = function () {
  const movement = 'swim';
  return {
    move: () => console.log(movement)
  }
}

//create instance
const guppy = fish();
guppy.move();


//the great thing is that we don't have to modify the 'this' context
$('myButton').click(guppy.move)

//movement remains private
var notAccessable = guppy.movement
console.log(notAccessable);
//undefined

//another version

const proto = {
  drive () {
    console.log('Vroom!');
  }
};

function factoryCar () {
  return Object.create(proto);
}

const car3 = factoryCar();
console.log(car3.drive());


//full example
//-------------
// Factory refactored implementation:
const AutoMaker = {
  Car (bundle) {
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


//another example
//-------------------------------------------

//prototypal inheritance
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