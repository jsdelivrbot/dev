// import axios from 'axios';
// import {ROOT_URL} from '../../config';

import {
	PING, 
	PONG
} from '../../actionTypes';



// dispatch(ping());
//export const ping = () => ({ type: PING });
export function ping() {
	console.log('ping action called')
	return { type: PING }

}

// export function pong() {
// 	console.log('pong action called');
// 	return { type: PONG }
// }





// export function addArticle({ title, slug, body }) {
//     return function(dispatch) {

//         // post to http://192.168.99.100/api/articles/create
//         axios.post( `${ROOT_URL}/articles/create`, { title, slug, body } )
//         .then( response => {
//             if(response.data.error) {
//                 dispatch(addArticleError(`there was an error creating the article: ${response.data.error}`));
//             } else {
//                 dispatch({
//                     type: ADD_ARTICLE,
//                     payload: response.data
//                 });
//             }
//         })
//         .catch(() => {
//             //todo: if request is bad
//             dispatch(addArticleError('there was an error creating the article'));
//         });
//     }
// }


// export function addArticleError(error) {
//     return {
//         type: ADD_ARTICLE_ERROR,
//         payload: error
//     }
// }
