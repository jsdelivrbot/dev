import { FETCH_WEATHER } from '../actions/index';

//we return an array so state = []
export default function  (state = [], action) {
    //see the index.js action to see why we have the console.log here
    //console.log('Action received', action);
    
    
    
    switch (action.type) {
        case FETCH_WEATHER:
        
            // this es6 creates a new array by adding the new array incoming array to the existing state array.
            // new array is created importantly since we don't want to mutate state.
            // this way we continue to add to our cities search instead of rplacing it with every input submit
            return [action.payload.data, ...state];

    }
    
    return state;
}