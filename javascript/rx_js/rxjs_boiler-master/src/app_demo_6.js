import $ from 'jquery';
import Rx from 'rxjs/Rx';

// map & pluck
//-------------------------------------

// map
//-------------------------------------

//map using interval
// const source$ = Rx.Observable.interval(100)
// 	.take(10)
// 	.map(v => v * v);

// source$.subscribe(v => console.log(v));

// 0 1 4 9...

//---------

// // map using .from
// // and multiple maps
// const source$ = Rx.Observable.from(['John', 'Tom', 'Shawn'])
// 	.map(v => v.toUpperCase())
// 	.map(v => 'I am ' + v)

// source$.subscribe(v => console.log(v));


//---------

// // do an ajax request to github
// // all this does is get a promise jquery generates 
// // from this jquery ajax req.
// function getUser(username) {
// 	return $.ajax({
// 		url: "https://api.github.com/users/" + username,
// 		dataType: 'jsonp'
// 	}).promise();
// }

// // a shorter way of doing subscribe, also
// // pass specifics from the data using map
// Rx.Observable.fromPromise(getUser('benchung5'))
// 	.map(user => user.data.name)
// 	.subscribe(name => {
// 		console.log(name);
// 	});


// pluck
//-------------------------------------

const users = [
{name: 'Will', age: 34},
{name: 'Mike', age: 35},
{name: 'Paul', age: 36},
];

// .pluckk just retuns the specified property
// of the object
const users$ = Rx.Observable.from(users)
	.pluck('name');

users$.subscribe(x => console.log(x));



