import $ from 'jquery';
import Rx from 'rxjs/Rx';

//observables from events
//-------------------------------------


const input = $('#input');
const btn = $('#btn');
const output = $('#output');

// dollar sign is optional but if it's a variable that represents
// a stream it's good practice
const btnStream$ = Rx.Observable.fromEvent(btn, 'click');

btnStream$.subscribe(
	//the e value has all kinds of values captured from the element and event
	function(e) {
		console.log(e.target.innerHTML);
	},
	function(err) {
		console.log(err);
	},
	//for this there isn't any complete, it's more for fetching data
	function(){
		console.log('completed');
	} 
	);

const inputStream$ = Rx.Observable.fromEvent(input, 'keyup');

inputStream$.subscribe(
	//the e value has all kinds of values captured from the element and event
	function(e) {
		console.log(e.target.value);
		//use jquery to append
		output.append(e.target.value);
	},
	function(err) {
		console.log(err);
	},
	function(){
		console.log('completed');
	} 
	);

const moveStream$ = Rx.Observable.fromEvent(document, 'mousemove');

moveStream$.subscribe(
	//the e value has all kinds of values captured from the element and event
	function(e) {
		//use jquery to append
		output.html("X: " + e.clientX + "Y: " + e.clientY);
	},
	function(err) {
		console.log(err);
	},
	function(){
		console.log('completed');
	} 
	);