//React component boilerplates
//------------------------------------------------------------------//
//------------------------------------------------------------------//



//minimal model for creating a component
//------------------------------------------------------------------//
import React from 'react';

//variations:
// (props) => {
// ({prop1, prop2}) => {
// is the equivelent to:
// (props) => {
// const prop1 = props.prop1;
// const prop2 = props.prop2;
// it automatically grabs that variable and
// populates it in a variable called prop1 and 2

export default () => {

        return (
                <div>
                {this.props.children}
                </div>
        );
}


//basic funtional component boilerplate:
//------------------------------------------------------------------//
import React from 'react';
    // below is the equivelent of:
    // const VideoListItem = (props) => {
    // const video = props.video;
    // it automatically grabs that variable and
    // populates it in a variable called video
export default VideoListItem = ({video, onVideoSelect}) => {    
    return (
      <li onClick={() => onVideoSelect(video)} className="list-group-item">
      </li>  
    );
};


//class based component boilerplate
//------------------------------------------------------------------//
import React, { Component } from 'react';
import ChildComponent from './childComponent';

export default class MyComponent extends Component {

/*
you must call super when using a react component constructor:
  constructor() {
  super();
If you want to use this.props in the constructor, you need to pass props to super.
So the below is best practice anyhow:
*/
  constructor(props) {
  super(props);
    this.state = {
      isPriority : false
    };
  }

  setState() {
    if(this.state.isPriority === false) {
        this.setState({ isPriority: true });
    }
    console.log(this.state.isPriority);
  }

  //guide to a components expected usage
  //what props needs to be passed
propTypes() {
  return {
        arrayProp: React.PropTypes.array,
        boolProp: React.PropTypes.bool,
        funcProp: React.PropTypes.func,
        numProp: React.PropTypes.number,
        objProp: React.PropTypes.object,
        stringProp: React.PropTypes.string,
    }
}
  //initially know exactly what external behaviours the component is using/dependent on
  mixins() {}

  //lifecycle methods: 
  
  //before componed is created
  getInitialState() { }
  getDefaultProps() { }
  
  //mounting/updating/mounted cycle
  componentWillMount() { }
  componentWillReceiveProps() { }
  //fires when the component first renders
  componentWillUnmount() {
          //do something
  }
   //fired when component first renders
  componentDidMount() {
          //do something
  }



  // componentWillMount: function()
  // componentDidMount: function()
  // componentWillReceiveProps: function(nextProps)
  // componentWillUpdate: function(nextProps, nextState)
  // componentDidUpdate: function(prevProps, prevState)
  // componentWillUnmount: function()

  //custom methods prefixed with an underscore
  _parstData() {}
  _onSelect() {}

  //put this last
  render() {
          //{this.props.incomingProp}
          //displays a prop passed into this component
          //passedProp={this.state.isPriority}
          //passes a prop containing out isPriority state to ChildComponent
          //then can be accessed by: this.props.passedProp
    return (
      <div>
        <button onClick={this.setState.bind(this)}>Edit</button>
        {this.props.incomingProp}
        <ChildComponent passedProp={this.state.isPriority}/>
      </div>
    );
  }
}

//redux component boilerplate
//------------------------------------------------------------------//

import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/articles';


class ArticlesIndex extends Component {
    
    render() {
        return (
            <div>
                <div>
                </div>
            </div>
        );
    }
}

//state referred to below is redux state not react component state.
function mapStateToProps(state) {
    return {
        articles : state.articles.all,
        articleDeleted : state.articles.articleDeleted
    };
}

// the below is a shorthand way of doing this:
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({fetchArticles}, dispatch);
// }
// export default connect(null, mapDispatchToProps)(PostsIndex);
export default connect(mapStateToProps, actions)(ArticlesIndex);


//-----------------

//Dispatching from Events
//events should be passed down from Container to Presentational Components. 
//It turns out react-redux helps with that too in cases where an event simply needs to dispatch an action:

///...

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    toggleActive: function() {
      dispatch({ ... });
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListContainer);

//In the Presentation Component, we can do onClick={this.props.toggleActive} 
//just as we did before but this time we didn't have to write the event itself.

//the manual way of calling actions
//------------------------------------------------------------------//

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/articles';


class SearchForm extends Component {

  onSubmit(formProps) {
    // dispatch Injected by react-redux:
    this.props.dispatch(actions.searchArticles(formProps));
  }

  render() {
    return (
      <div >
      </div>
      )
  }
}


function mapStateToProps(state) {
  return {
    //categoryAdded: state.category.categoryAdded,
  }
}

export default connect(mapStateToProps)(SearchForm)



