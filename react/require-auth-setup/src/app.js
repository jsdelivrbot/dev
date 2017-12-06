import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//requireAuth can be used here or it can wrap the component it's self when it get's exported
import requireAuth from './components/require_authentication';
import Main from './components/main';
import Home from './components/home';
import Protected from './components/protected';
import Resources from './components/resources';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
	      <Main>
		      <Switch>
			      <Route exact path="/" component={Home} />

			      <Route path="/resources" component={requireAuth(Resources)} />
		      </Switch> 
	      </Main>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));