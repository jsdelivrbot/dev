import axios from 'axios';

const API_KET = '41e8941c25680b436beea1700048c460';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KET}`;

//make this a constant to avoid typos in other files since we will use this in the reducer as well.
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    // we use axios as a lighweight ajax module. 
    // We need redux promise for this to work since it's based on javascript promises.
    const request = axios.get(url);
    
    // note that we're going to return the promise as the payload and a promise doesn't actually contain data
    // but see below.
    //console.log('Request:', request);
    
    //you will see that redux promise handles this specially.
    //It is a middleware the stops and manipulates the action before it hits any reducer.
    //what it does is if it sees that the payload in the action is a promise, it stops the action,
    //waits for the promise to complete then it creates a new action with the resolved request 
    //and sends it through to the reducers. this keeps the request from sending without data.
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}