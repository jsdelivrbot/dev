import $ from 'jquery';
import Rx from 'rxjs/Rx';

// interval, timer & range
// useful for testing and learning
//-------------------------------------

//interval

// const source$ = Rx.Observable.interval(100)
// 	// use take to specity an end point to our interval
// 	.take(5);

// // source$.subscribe(x => console.log(x));

// // ..and with err and complete
// source$.subscribe(
// 	x => console.log(x),
// 	err => console.log(err),
// 	complete => console.log('complete')
// 	);


//-------------------------------------

// timer
// difference from interval is this sets the time to start
// then the interval

// const source$ = Rx.Observable.timer(1000, 100)
// 	// use take to specity an end point to our interval
// 	.take(5);

// // source$.subscribe(x => console.log(x));

// // ..and with err and complete
// source$.subscribe(
// 	x => console.log(x),
// 	err => console.log(err),
// 	complete => console.log('complete')
// 	);

//-------------------------------------

// range
// this all gets emitted at once and you set the range
// of numbers to emit

const source$ = Rx.Observable.range(25, 100)

// source$.subscribe(x => console.log(x));

// ..and with err and complete
source$.subscribe(
	x => console.log(x),
	err => console.log(err),
	complete => console.log('complete')
	);


