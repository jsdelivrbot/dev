import $ from 'jquery';
import Rx from 'rxjs/Rx';

// mergemap & switchmap
// eliminates the need to double subscribe
//-------------------------------------

// Now there's no need to double subscribe like below
// using the data from one observable to feed to another one
Rx.Observable.of('Hello')
	.subscribe(v => {
		Rx.Observable.of(v + ' Everyone')
			.subscribe(x => console.log(x))
	});

// Hello Everyone

//---------

// no using mergeMap...
// think of mergeMap as a .subscribe
Rx.Observable.of('Hello')
	.mergeMap(v => {
		return Rx.Observable.of(v + ' Everyone');
	})
	.subscribe(x => console.log(x));

	// Hello Everyone


//-------------------------------------

// switchMap
// (used to be called 'flatmap')
// transforms items emitted by an observable
// into an observable then flattens the emissions
// into a single observable

// similar to example in demo 4
// do an ajax request to github
function getUser(username) {
	//get a promise jquery generates from this ajax req
	return $.ajax({
		url: "https://api.github.com/users/" + username,
		dataType: 'jsonp'
	}).promise();
}

// get the value from the key input
// 
const inputSource$ = Rx.Observable.fromEvent($('#input'), 'keyup')
	.map(e => e.target.value)
	.swithMap(v => {
		return Rx.Observable.fromPromise(getUser(v));
	})

inputSource$.subscribe(x => {
	$('#name').text(x.data.name);
	$('#blog').text(x.data.blog);
	$('#repos').text('Public Repos: ' + x.data.public_repos);

});



