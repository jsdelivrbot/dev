function *foo() {
	//generator stops at the yield expression , sends the foo value out
	//then when it's restarted, it returns the new processed value.
	//it's like yield is requesting a value
	var x = 1 + (yield "foo");
	console.log(x);
}

//note, the yield is not a statement but an expression
//.. we would then need a generator iterator to interact with the generator function

//-------------------------------------------

//we use a generator iterator to ineract with generator functions
function  *foo() {
	yield 1;
	yield 2;
}
//it is an iterator
var it = foo();
//to start iterating over our iterator call it.next()
//it will also return an object with the value and info:
var message1 = it.next();
console.log(message1);
var message2 = it.next();
console.log(message2);
var message3 = it.next();
//note that we need to call next again after last yield
//to make done: true
console.log(message3);


//-------------------------------------------

function *foo(x) {
	// sends 6, receives 12 where yield is
	// y is now 24
    var y = 2 * (yield (x + 1));
    // sends 8, receives 13 where yield is
    // z = 13
    var z = yield (y / 3);
    // 5 + 24 + 13 = 42
    return (x + y + z);
}

var it = foo( 5 );

// note: not sending anything into `next()` here
console.log( it.next() );       // { value:6, done:false }
console.log( it.next( 12 ) );   // { value:8, done:false }
console.log( it.next( 13 ) );   // { value:42, done:true }

//-------------------------------------------

//practical example:

const fetch = require('node-fetch');
//*indicates it's a generator function

run(function *() {
	const uri = 'http://jsonplaceholder.typicode.com/posts/1';
	//fetch returns a promise and goes into the yeild keyword
	const response = yield fetch(uri);
	const post = yield response.json();
	const title = post.title;
	console.log('Title:', title);
})

//the takes the above function as an argument

function run(generator) {
	//this calls generator and return an iterator
	const iterator = generator();
	//next() actually runs the function up to the first yeild keyword
	const iteration = iterator.next();
	//iteration.value will be the promise received from it
	const promise = iteration.value;
	promise.then( x => {
		const anotherIterator = iterator.next(x);
		const anotherPromise = anotherIterator.value;
		anotherPromise.then( y => iterator.next(y))
	})
}