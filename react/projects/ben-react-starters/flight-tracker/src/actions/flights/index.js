import axios from 'axios';
import config from '../../config';
import * as actionTypes from '../types';
import base64 from 'base-64';


// export function fetchFlights(city) {

//     console.log('fetchFlights called');
//     return {
//         type: actionTypes.FETCH_FLIGHTS,
//         payload: true
//     }
// }

// // Create an instance using the config defaults provided by the library 
// // At this point the timeout config value is `0` as is the default for the library 
// var instance = axios.create(
//       // `auth` indicates that HTTP Basic auth should be used, and supplies credentials. 
//   // This will set an `Authorization` header, overwriting any existing 
//   // `Authorization` custom headers you have set using `headers`. 
//   auth: {
//     username: 'janedoe',
//     password: 's00pers3cret'
//   },);
 
// // Override timeout default for the library 
// // Now all requests will wait 2.5 seconds before timing out 
// instance.defaults.timeout = 2500;
 
// // Override timeout for this request as it's known to take a long time 
// instance.get('/longRequest', {
//   timeout: 5000
// });

export function fetchFlights(city) {

    //const url = `${config.API_FLIGHT_BASE_URL}MetarEx?airport=${'KJFK'}&startTime=${0}&howMany=${1}&offset=${0}`;
    //const url = `http://${config.API_USER_NAME}:${config.API_KEY}@flightxml.flightaware.com/json/FlightXML2/MetarEx?airport=${'KJFK'}&startTime=${0}&howMany=${1}&offset=${0}`;
    const url = "http://benjammin95:64ceb5b0c44d615ec52071ad6ab35ff80a9004e1@flightxml.flightaware.com/json/FlightXML2/MetarEx?airport=KJFK&startTime=0&howMany=1&offset=0";

    //const key = base64.encode(config.API_KEY);

    console.log('url: ', url);

    return function(dispatch) {
        axios.get( url, {
              // `auth` indicates that HTTP Basic auth should be used, and supplies credentials. 
              // This will set an `Authorization` header, overwriting any existing 
              // `Authorization` custom headers you have set using `headers`. 
              auth: {
                username: config.API_USER_NAME, 
                password: config.API_KEY
            } 
        })        
        // axios.get(url)
        // .then( response => {
        //     if(response.data.error) {
        //         dispatch(fetchFlightsError(`there was an error fetching flight data: ${response.data.error}`));
        //     } else {
        //     	console.log('response.data: ', response.data);
        //         // dispatch({
        //         //     type: actionTypes.FETCH_FLIGHTS,
        //         //     payload: response.data
        //         // });
        //     }
        // })
        .catch(() => {
            //todo: if request is bad
            dispatch(fetchFlightsError('there was an error fetching flight data'));
        });
    }
}


export function fetchFlightsError(error) {
    return {
        type: actionTypes.FETCH_FLIGHTS_ERROR,
        payload: error
    }
}






// export const FETCH_FLIGHTS= 'FETCH_FLIGHTS';

// export function fetchFlights(city) {
//     const url = `${ROOT_URL}&q=${city},us`;
//     // we use axios as a lighweight ajax module and need redux promise for this to work 
//     //since it's based on promises.
//     const request = axios.get(url);
    
//     // note that we're going to return the promise as the payload and a promise doesn't actually contain data
//     // but see below.
//     //console.log('Request:', request);
    
//     //you will see that redux promise handles this specially.
//     //It is a middleware the stops and manipulates the action before it hits any reducer.
//     //what it does is if it sees that the payload in the action is a promise, it stops the action,
//     //waits for the promise to complete then it creates a new action with the resolved request 
//     //and sends it through to the reducers. this keeps the request from sending without data.
//     return {
//         type: FETCH_WEATHER,
//         payload: request
//     }
// }
