/* ==========================================================================
getters/setters
========================================================================== */

// ---------- PRIVATE PROPERTIES ----------
// All properties in an object are public in that any function
// can modify or delete these properties.
// You can make properties private by declaring them as
// variables in a constructor

function SecretCode(){
  // This value can't be accessed directly
  var secretNum = 78;

  // This function can access secretNum
  this.guessNum = function(num){
    if(num > 78){
      return "Lower";
    } else if(num < 78){
      return "Higher";
    } else {
      return "You Guessed It";
    }
  }
}

var secret = new SecretCode();

// Returns undefined
document.write("Value of secretNum : " + secret.secretNum + "<br />");

document.write("Is 70 the number : " + secret.guessNum(70) + "<br />");

// Even if we add another function it can't access the secretNum
SecretCode.prototype.getSecret = function(){
  return this.secretNum;
}

document.write("The secret number is " + secret.getSecret() + "<br />");

// ---------- GETTERS AND SETTERS ----------
// Getters and Setters can protect data, or provide useful
// ways to set its value
// I'll show you a bunch of getters and setters you may come
// in contact with
var address = {
    street: "No Street",
    city: "No City",
    state: "No State",

    // Provides styled data all at once
    get getAddress() {
        return this.street + ", " + this.city + ", " + this.state;
    },

    // Allows the user to set 3 values with 1
    set setAddress (theAddress) {
        var parts = theAddress.toString().split(", ");
        this.street = parts[0] || '';
        this.city = parts[1] || '';
        this.state = parts[2] || '';
    }
}

address.setAddress = "123 Main St, Pittsburgh, PA";
document.write("Address : " + address.getAddress + "<br />");
document.write("City : " + address.city + "<br />");

// ---------- CONSTRUCTOR GETTERS AND SETTERS ----------
// Still used even though it is (Deprecated)
function Coordinates(){
  this.latitude = 0.0;
  this.longitude = 0.0;
}

// Define the getter with the prototype to assign it to with
// the property name and the getter function
Object.__defineGetter__.call(Coordinates.prototype, "getCoords", function(){
    return "Lat : " + this.latitude + " Long: " + this.longitude;
});

// Define the setter with the prototype to assign it to with
// the property name and the setter function
Object.__defineSetter__.call(Coordinates.prototype, "setCoords", function(coords){
    var parts = coords.toString().split(", ");
    this.latitude = parts[0] || '';
    this.longitude = parts[1] || '';
});

var testCoords = new Coordinates();

testCoords.setCoords = "40.71, 74.00";

document.write("Coordinates : " + testCoords.getCoords + "<br />");

// ---------- GETTERS AND SETTERS WITH DEFINEPROPERTY ----------
function Point(){
  this.xPos = 0;
  this.yPos = 0;
}

// Use defineProperty to set getters and setters
// Pass the prototype to attach to along with the property name
// and define the functions to associate with get and set
Object.defineProperty(Point.prototype, "pointPos", {
  get: function(){
    return "X: " + this.xPos + " Y: " + this.yPos;
  },
  set: function(thePoint){
    var parts = thePoint.toString().split(", ");
    this.xPos = parts[0] || '';
    this.yPos = parts[1] || '';
  }
});

var aPoint = new Point();

aPoint.pointPos = "100, 200";

document.write("Point Position : " + aPoint.pointPos + "<br />");

// ---------- ECMASCRIPT 5.1 GETTERS AND SETTERS ----------

var Circle = function (radius) {
    this._radius  = radius;
};

Circle.prototype = {
    set radius(radius) { this._radius = radius; },
    get radius() { return this._radius; },
    get area() { return Math.PI * (this._radius * this._radius); }
};
var circ = new Circle(10);

circ.radius = 15;

document.write("A circle with radius " + circ.radius + " has an area of " + circ.area.toFixed(2) + "<br />");
