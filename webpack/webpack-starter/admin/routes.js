import React from 'react';
//the IndexRoute is helper that behaves like a route but will be shown when the url lines up with the parent
//but not one of the children
import { Route, IndexRoute } from 'react-router';

//components
import App from './components/App';
import Page from './components/Page';
import FlightsIndex from './components/FlightsIndex';
import FlightsInternal from './components/FlightsInternal';

//<Route path="posts/:id" component={PostsShow} />
export default (
    //in order for these to show up, we must make sure that app renders
    //these child components so in app.js we do: {this.props.children}
    //IndexRoute lines up with the parent component route. in this case "/"
    //route will automatically pass the prop this.props.params.type into :type 
    //(id is the name of the parameter of the url so it could be post_id and that would work)
    <Route path="/" component={App}>
        <IndexRoute component={Page} componentType="FlightsIndex" />
        <Route path="/:flightType" component={Page} componentType="FlightsInternal" />
    </Route>
    
);