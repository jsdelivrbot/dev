// In JavaScript there are 5 different data types that can contain values:

// string
// number
// boolean
// object
// function


//check type:
//----------------------

typeof "John"                 // Returns "string" 
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"

//convert to string
//----------------------

String(123)
//"123"

//convert to number
//----------------------

d = new Date();
Number(d)          
// 1404568027739

Number(true)
//1

Number("1");
//1

//convert to integer
//----------------------
//takes in a string and radix and returns an integer

//parseint(string,radix)
parseInt("5.3");
//5

