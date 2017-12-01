// This will add every core RxJS operator to the 
// Observable prototype.
// to just add what you need use:
// import 'rxjs/add/operator/switchMap';
// or
// import { switchMap } from 'rxjs/operator/switchMap';
import 'rxjs';
// import axios from 'axios';
// import {ROOT_URL} from '../../config';

import {
	PING, 
	PONG
} from '../actionTypes';


// //simple example
// const pingEpic = action$ =>
//   action$.filter(action => action.type === 'PING')
//     .mapTo({ type: 'PONG' });


// example usage async

// $action$ references a stream
// pingEpic listens to actoins of type ping and
// map them to a new action: 'PONG'
export const pingEpic = function (action$) {

	console.log('pingEpic called');
	// same as the below:
	//action$.filter(action => action.type === PING)
	action$.ofType(PING)
	.delay(1000) // Asynchronously wait 1000ms then continue
	.mapTo({ type: PONG });
}