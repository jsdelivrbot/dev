import React, { Component } from 'react';
//used to bind the component props to the redux state
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
//used to bind component props to the action creator
//this will also make sure the action's return value flows through the reducers
import { bindActionCreators } from 'redux';

//since this is now a container not a component we don't do the
//'export default' here, we handle that at the bottom using the react-redux function
//connect
class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} onClick={() => this.props.selectBook(book)} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList, so you could do:
  //return {
  // blab: 'blah'    
  //}
  //and access that via this.props.blab
  //not that whenever the applicatin state changes the component BookList will automatically re-render
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props
// on the BookList container just like mapStateToProps
function mapDispatchToProps(dispatch) {
//the purpose of bindActionCreators is to take the action return value and flow it to all reducers
// Whenever selectBook is called, the result would be passed to all of our reducers
// {  <props key> :  <action creator value>, <function dispatch > }
// the dispatch function receives the action return value and gives it to all the reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// It needs to know about this new dispatch method, selectBook. 
// Make it available as a prop.
//connetc function is imported uptop from react-redux
//it takes a function and a component and produces a container
//this binds our redux state to the component.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
