import React from 'react';
//the IndexRout is helper that behaves like a route but will be shown when the url lines up with the parent
//but not one of the children
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

//just for testing...
const Greeting = () => {
    return <div>Hey there!</div>
}


export default (
    //reads:
    //"/", "/greet2", /"greet3"
    //but in order for these to show up, we must make sure that app renders
    //these child components so in app.js we do: {this.props.children}
    //IndexRoute lines up with the parent component route. in this case "/"
    //route will automatically pass the prop this.props.params.id into :id 
    //(id is the name of the parameter of the url so it could be post_id and that would work)
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex} />
        <Route path="posts/new" component={PostsNew} />
        <Route path="posts/:id" component={PostsShow} />
    </Route>
    
);

