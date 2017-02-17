import { combineEpics } from 'redux-observable';
import epics from './epics';


export default combineEpics(
	//epic1, epic2, etc.
	 ...epics
	);