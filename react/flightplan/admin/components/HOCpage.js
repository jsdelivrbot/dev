import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

//this is a higher order component (HOC) that wraps the incomming component 
//and attaches additional functionality to it
export default function (ComposedComponent, compData) {
    class HOCpage extends Component {

      constructor(props) {

        super(props);

        this.state = {
          height: 600
        }
        
      }

      componentDidMount() {
        // this.refs.mainFrame.style.height = 
        //set the height of the window on load for vertical align
        this.setState({height: window.innerHeight});
      }

      render() {
              //pass this.state and this.props to the composed component
              //access them both as this.props in the compoesed component
              return <ComposedComponent ref='composedComponent' {...this.props} {...this.state} />
              
          }
      }

      function mapStateToProps(state) {
        return {
          //redux state
        }
      }
          
      return connect(mapStateToProps)(HOCpage);
}