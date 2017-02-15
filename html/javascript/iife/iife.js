//iife is the same as just writting (1)
//as brackets make an expression evaluate first what's inside them like
//(1+2)+1
//functions then have another optional bracket to pass in initial values:
//(function(val){})(val)

//the reasonning behind: !function at the beginning of a plugin for example...
//iife
function foo() {}
//Note that there's no semicolon: this is a function declaration; you need a separate invocation of foo() to actually run the function.
//On the other hand, !function foo() {} is an expression, but that still doesn't invoke the function, but we can now use 
!function foo() {}() 
//to do that, as () has higher precedence than !. Presumably the original example function doesn't need a self-reference so that the name then can be dropped.
//So what the author is doing is saving a byte per function expression; a more readable way of writing it would be this:
(function(){})();


