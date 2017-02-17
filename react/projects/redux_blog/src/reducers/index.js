import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
//the as statement is done by the author to avoid any naming conflicts 
//from other existing reducers
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
