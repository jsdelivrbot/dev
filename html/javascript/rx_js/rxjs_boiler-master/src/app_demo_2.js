import $ from 'jquery';
import Rx from 'rxjs/Rx';

//observables from array-like objects
//-------------------------------------

// const numbers = [33,44,55,66,77];

// const numbers$ = Rx.Observable.from(numbers);

// numbers$.subscribe(
// 	v => {
// 		console.log(v)
// 	},
// 	err => {
// 		console.log(err);
// 	},
// 	complete => {
// 		//this time we get the complete function being hit
// 		//this did not aplly when using fromEvent
// 		console.log('Completed');
// });

////---------------------------

// //typical json request:

// const posts = [
// 	{title: 'Post One', Body: 'This is the body'},
// 	{title: 'Post Two', Body: 'This is the body'},
// 	{title: 'Post Three', Body: 'This is the body'},
// ];

// const posts$ = Rx.Observable.from(posts);

// posts$.subscribe(
// 	post => {
// 		$('#posts').append('<li>' + post.title + '</li>');
// 	},
// 	err => {
// 		console.log(err);
// 	},
// 	complete => {
// 		//this time we get the complete function being hit
// 		//this did not aplly when using fromEvent
// 		console.log('Completed');
// });

////---------------------------

// //we can use sets to input different kinds of values
// const set = new Set(['Hello', 44, {title: 'My Title'}])

// const set$ = Rx.Observable.from(set);

// set$.subscribe(
// 	v => {
// 		console.log(v);
// 	},
// 	err => {
// 		console.log(err);
// 	},
// 	complete => {
// 		//this time we get the complete function being hit
// 		//this did not aplly when using fromEvent
// 		console.log('Completed');
// });

////---------------------------

//map is the same as set only that we use key/value pairs
const map = new Map([[1,2], [3,4], [5,6]]);

const map$ = Rx.Observable.from(map);

map$.subscribe(
	v => {
		console.log(v);
	},
	err => {
		console.log(err);
	},
	complete => {
		//this time we get the complete function being hit
		//this did not aplly when using fromEvent
		console.log('Completed');
});
