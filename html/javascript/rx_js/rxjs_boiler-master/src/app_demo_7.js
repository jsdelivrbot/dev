import $ from 'jquery';
import Rx from 'rxjs/Rx';

// merge & concat
//-------------------------------------

// // merge
// // allows us to merge two or more observables

// Rx.Observable.of('Hello')
// 	.merge(Rx.Observable.of('Everyone'))
// 	.subscribe(x => console.log(x));
// // Hello
// // Everyone

//-------

// //this time we merge intervals
// //this way the two observables with interweave at their given
// //intervals
// Rx.Observable.interval(200)
// 	.merge(Rx.Observable.interval(100))
// 	.take(25)
// 	.subscribe(v => console.log(v));

//-------

// //this is a better way to impliment the same thing as above
// const source1$ = Rx.Observable.interval(100).map(v => 'Merge1: ' + v);
// const source2$ = Rx.Observable.interval(200).map(v => 'Merge2: ' + v);


// Rx.Observable.merge(source1$, source2$)
// 	.take(25)
// 	.subscribe(x => console.log(x));

//-------

//-------------------------------------

// concat
// concatenates two observables

// range(start at value, amount to emit)
const source1$ = Rx.Observable.range(0, 5).map(v => 'Source1: ' + v);
const source2$ = Rx.Observable.range(6, 5).map(v => 'Source2: ' + v);


Rx.Observable.concat(source1$, source2$)
	.subscribe(x => console.log(x));
