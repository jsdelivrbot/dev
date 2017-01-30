import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// the browserHistory object specifies what part of the url react-router cares about
// this is different than the History module import that comes along with react-router when it's installed
// browserHistory cares about everything after the / in the url (posts/5):
// www.blog.com/posts/5
// we could use hashHistory for example would care about this:
// www.blog.com/#posts/5
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';
import reduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));