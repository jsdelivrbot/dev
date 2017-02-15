//closures

//---------------------------

//window context
var variable = "foo";

//variables are bound to the context of the object that contains them.
//only exeption to this is nested functions

var myContext = {
  displayVariable : function () {
    //window context - this overwrites the "foo"
    //version because it's not using "var"
    variable = "bar";
  },
  log : function() {
    
    document.write(this === mySecondContext);
    
    document.write("<br>");
    
  }
}

var mySecondContext = {
    logSecond : function() {
    document.write("context: mySecondContext"+ "<br>");
  }
}

//foo
document.write(variable + "<br>");

//change variable to bar
myContext.displayVariable();

//bar
document.write(variable + "<br>");

//true
//call myContext.log using the context of mySecondContext using .call
myContext.log.call(mySecondContext);

//false
//myContext.log is not still bound to mySecondContext
myContext.log();

//return a new context bound function using .bind
var boudAgain = myContext.log.bind(mySecondContext);

//true
//new variable instance of myCotext.log bound to mySecondContext
boudAgain();

//---------------------------





//javascript
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
function myFunction() {
    alert(incrementClickCount());
}        
//1,2,3


//another example of the same thing...
(function(){
var x = 42;
console.log(x);
var message = (function(x){
                return function() {
                    console.log("x is " + x )
                        }
                    })(x);
message();
//42
x = 12;
console.log(x);
//12
message();
//42

})();