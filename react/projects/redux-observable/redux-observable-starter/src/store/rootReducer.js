import { combineReducers } from 'redux';
import reducers from './reducers';
//import {routerReducer} from 'react-router-redux';

export default combineReducers({
	//reducer1, reducer2, etc
	...reducers
	//routing: routerReducer,
});