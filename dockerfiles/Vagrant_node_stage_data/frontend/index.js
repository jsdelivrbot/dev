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
import { Router, Route, browserHistory } from 'react-router';

import requireAuth from './components/require_authentication';
import App from './components/app';
import Resources from './components/resources';
import reducers from './reducers';
// import routes from './routes';
// import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware()(createStore);

//the Provider wraps the redux store and watches for when it changes
//then it will update any child compentents it contains.
//Our higher order component wraps the Resources component:
//{requireAuth(Resources)} here so it applies just to this instance. 
//The other way to do do it at the component level to apply to all instances.
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
          <Route path="resources" component={requireAuth(Resources)} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));