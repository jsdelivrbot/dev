import $ from 'jquery';
import Rx from 'rxjs/Rx';

//creating observables from scratch
//-------------------------------------

const source$ = new Rx.Observable(observer => {
	console.log('creating an observable');
	//similar to generator function
	observer.next('Hello World');

	//when we set up an error it stops the observable from
	//completing
	observer.error(new Error('Error: something went wrong!'));

	//to prove this is a stream that's constantly open
	//send a message three seconds later and set it to complete
	setTimeout(() => {
		observer.next('yet another value');
		observer.complete();
	}, 3000);


});

//Rx.Observable.of takes an argument and passes fires it as an observable
//use this with the .catch if you want it to complete anyways
source$
.catch(err => Rx.Observable.of(err))
.subscribe(
	x => {
		console.log(x);
	},
	err => {
		console.log(err);
	},
	complete => {
		console.log('completed!');
	});