//basic functions:
//---------------------------------------------


//document functions:
document.writeln(foo);
//writes new lines with each statement

//Displays an interactive list of the properties of the specified JavaScript object
console.dir(myFunc);

//converting

//string to number
parseInt('1');

//convert to string
String(objecttostring);

//submitting a form in javascript
document.form[0].submit();

//timers

//set off a funtion after a given time
setTimeout(function, delay);
//repeatedly call a funtion at a given delay increment
setInterval(function, delay);
//instructs timer to stop
clearInterval(id)

//handling null and undefined:
//if null, undefined, NaN then make it 0
var a = someValue || 0;

// ---------- ARGUMENTS object ----------
// * note: better to use the rest parameter (...) now instead of the arguments object
//use this to create functions with a dynamic number of parameters, then cyle through each one...
displayItems("Dog", "Cat", "Pony", "Hamster", "Tortoise");

function displayItems() {
    for(j = 0; j < displayItems.length; ++j)
    documumenent.write(displayItems.arguments[j] + '<br>')
}

//note that the arguments object is like an array, but is not an array
function printArguments() {
    document.write("number of arguments = " + arguments.length  + "</br>");
    for (var i = 0; i < arguments.length; i++)
    {
        document.write("Argument " + i + " = " + arguments[i] + "</br>");
    }
    document.write("</br>");
}

printArguments();
printArguments("A", "B");
printArguments(10,20,30);

// ---------- ES6 TEMPLATE LITERALS ----------
var obj = {
    name: 'John Doe',
    greet: function() {
        console.log(`Hello ${this.name}`)
    }
}

//switch statement

switch (shape) {
    case 'cube':
        //BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)
        geometry = new THREE.CubeGeometry(1, 1, 1);
        break;
    case 'sphere':
        //SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength)
        geometry = new THREE.SphereGeometry(1, 80, 80);
        break;
    case 'plane':
        //PlaneGeometry(width, height, widthSegments, heightSegments)
        geometry = new THREE.PlaneGeometry(1, 1, 1);
        break;
}

//javascript window error event. Use this to catch errors not caught in a 
//try/catch blog. Good for debugging perhaps.

window.error = function (msg, url, line)
{
    alert("Message : " + msg + "\nURL : " + url + "\nLine : " + line);
    return true;
}
//invoke the above with this non existing function
NonExistingFunction();

//immidiately executed function/self invoked function:
//proper way to store persistant data or incrementing veriables without adding it to the global object
//this method uses closures so veriable so the variable doesn't get erased at the end of the function
//link: https://www.youtube.com/watch?v=w1s9PgtEoJs

var incrementClickCount = (function ()
{
   var clickCount = 0;
   return function () {
       return ++clickCount;
   }
})();
//put this in a button click and click multiple times...
alert(incrementClickCount());
//1,2,3

//another example of the same thing...
//in this case, "x" is passed in as a parameter to the IIFE (immidiataly invoked function expression).
var x = 42;
console.log(x);
var message = (function(x){
    return function() {
        console.log("x is" + x )
    }
})(x);
message();
//42
x = 12;
console.log(x);
//12
message();
//42

//strange javascript behavior:
//---------------------------------------------

//string characters are compared according to the numeric 
//value of the ASCII encoding of their characters.
if('luck' > 'Work')
{
  console.log(true);
} else {
  console.log(false);
}

//opporators and operands

//increment operator used in suffix
//be get asigned before a increments
var a=10;
var b=a++;
//a is 11
//b is 10


//increment operator used in prefix
var a=10;
var b=++a;
//a is 11
//b is 11

//boolean

// true = 1 false = 0
var a = true;
var b = false;
a++;b++;
//a is 2
//b is 1






// ---------- SINGLETON PATTERN ----------
// Singletons are used when you only ever want 1 object to
// be created
// Let's say you want to create a game character with fixed
// stats
function Hero(name){

  // Check if the object exists
  if(typeof Hero.instance === 'object'){

    // If it does return it
    return Hero.instance;
  }

  // if it doesn't then create the hero
  this.name = name;
  Hero.instance = this;

  return this;
}

var derekHero = new Hero("Derek");
document.write("Our hero is " + derekHero.name + "<br />");

// This won't change the name to Paul
var paulHero = new Hero("Paul");
document.write("Our hero is " + paulHero.name + "<br />");



// ---------- FACTORY PATTERN ----------
// The factory pattern can be used to generate different
// objects on request

function Sword(desc){
  this.weaponType = "Sword";
  this.metal = desc.metal || "Steel";
  this.style = desc.style || "Longsword";
  this.hasMagic = desc.hasMagic || false;
}

function Bow(desc){
  this.weaponType = "Bow";
  this.material = desc.material || "Wood";
  this.style = desc.style || "Longbow";
  this.hasMagic = desc.hasMagic || false;
}

function WeaponFactory(){};

WeaponFactory.prototype.makeWeapon = function(desc){
  var weaponClass = null;

  if(desc.weaponType === "Sword"){
    weaponClass = Sword;
  } else if (desc.weaponType === "Bow"){
    weaponClass = Bow;
  } else {
    return false;
  }

  return new weaponClass(desc);

}

var myWeaponFact = new WeaponFactory();

var bladeFist = myWeaponFact.makeWeapon({
  weaponType: "Sword",
  metal: "Dark Iron",
  style: "Scythe",
  hasMagic: true
});

document.write(bladeFist.weaponType + " of type " + bladeFist.style + " crafted from " + bladeFist.metal + "<br />");

// ---------- DECORATOR PATTERN ----------
// The decorator pattern allows you alter an object at run time
function Pizza(price){
  this.price = price || 10;
}

Pizza.prototype.getPrice = function(){
  return this.price;
}

function ExtraCheese(pizza){
  var prevPrice = pizza.price;

  pizza.price = prevPrice + 1;
}

var myPizza = new Pizza(10);

ExtraCheese(myPizza);

document.write("Cost of Pizza : $" + myPizza.price + "<br />");







