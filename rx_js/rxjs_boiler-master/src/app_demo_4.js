import $ from 'jquery';
import Rx from 'rxjs/Rx';


//creating an observable from a promise
//-----------------------------------

// const myPromise = new Promise((resolve, reject) => {
// 	console.log('Creating Promise');
// 	setTimeout(() => {
// 		resolve('Hello from promise');
// 	}, 3000);
// });

// myPromise.then(x => {
// 	console.log(x);
// });

// //instead of an event or an array like object we feed it a promise
// const source$ = Rx.Observable.fromPromise(myPromise);

// //x is the promise resolve
// source$.subscribe(x => console.log(x));

//-----------------------------------

// do an ajax request to github

function getUser(username) {
	//get a promise jquery generates from this ajax req
	return $.ajax({
		url: "https://api.github.com/users/" + username,
		dataType: 'jsonp'
	}).promise();
}

// Rx.Observable.fromPromise(getUser('benchung5'))
// .subscribe(x => {
// 	//console.log(x);
// 	$('#name').text(x.data.name);
// 	$('#blog').text(x.data.blog);
// 	$('#repos').text('Public Repos: ' + x.data.public_repos);

// });

const inputSource$ = Rx.Observable.fromEvent($('#input'), 'keyup');

//the double subscribe isn't the best thing to do
//normally mergemap or switchmap would be better
inputSource$.subscribe(e => {
	Rx.Observable.fromPromise(getUser(e.target.value))
	.subscribe(x => {
		//console.log(x);
		$('#name').text(x.data.name);
		$('#blog').text(x.data.blog);
		$('#repos').text('Public Repos: ' + x.data.public_repos);

	});
});


