import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

//this reduducer adds a key to our separate reducers which are just arrays of objects
//so thsi creates the key-value pair that our comprises our single state object.
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;