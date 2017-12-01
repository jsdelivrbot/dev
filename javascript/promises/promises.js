
/* ==========================================================================
basic promise
========================================================================== */

var myAction = new Promise((resolve, reject) => setTimeout(resolve,1000));

myAction
.then(
	function(resolve, reject) {
		console.log('first function resolved!');
	})
.then(() => console.log('second function resolved!'));

/* ==========================================================================
promise.all
========================================================================== */

//resolve when all promises are complete

function save(data) {
	return new Promise((resolve, reject) => setTimeout(resolve(data + '_complete'),1000));
}

let item1 = save('foo');
let item2 = save('bar');

Promise.all([item1, item2]).then((resolve, reject) => {
	console.log('resolve: ', resolve);
	console.log('reject: ', regect);
	//["foo_complete", "bar_complete"]
});