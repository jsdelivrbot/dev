
//basic
//---------------------------------------------------------------------------------------------//
//capitalized types indicate that it's a component and not an HTML element
//you can create a component this way:

function MyComponent() {
  return <div>Hello</div>;
}


//modularized components
//---------------------------------------------------------------------------------------------//
//using dot notation
//can use it for exporting mulitple react components from a module

import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}

//passing in the component type as props to be able to choose
//your component on the fly
import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // JSX type must be a capitalized variable.
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}


//spread
//---------------------------------------------------------------------------------------------//
//useful when building generic containers
//use it sparingly so as to not pass in a bunch of irrelevant props
//the below evaluates to:
//<Greeting firstName="Ben" lastName="Hector" />
function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}

//children
//---------------------------------------------------------------------------------------------//
//You can pass any JavaScript expression as children, by enclosing it within {}

function Item(props) {
  return <li>{props.message}</li>;
}

function TodoList() {
  const todos = ['finish doc', 'submit pr', 'nag dan to review'];
  return (
    <ul>
      {todos.map((message) => <Item key={message} message={message} />)}
    </ul>
  );
}

//In JSX expressions that contain both an opening tag and a closing tag, 
//the content between those tags is passed as a special prop: props.children
function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}

// Calls the children callback numTimes to produce a repeated component
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}


//in a redux example:

//parent compoent
<Route path="/admin-react" component={App}>
  <IndexRoute component={Signin} />
</Route>

//child component:
export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
            </div>
        );
    }
}


//hiding/showing components:
//---------------------------------------------------------------------------------------------//

//since components will only render if the expression eveluates to true...
<div />
<div></div>
<div>{false}</div>
<div>{null}</div>
<div>{true}</div>
//these are all equivelent

//therefore we can do this
//to render the header component if showHeader is true:
<div>
  {showHeader && <Header />}
  <Content />
</div>

//One caveat is that some "falsy" values, such as the 0 number, are still rendered by React. 
//For example, this code will not behave as you might expect because 0 will be printed when props.messages is an empty array:

<div>
  {props.messages.length &&
    <MessageList messages={props.messages} />
  }
</div>
//To fix this, make sure that the expression before && is always boolean:

<div>
  {props.messages.length > 0 &&
    <MessageList messages={props.messages} />
  }
</div>

