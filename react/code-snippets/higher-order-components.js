import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

//this is a higher order component (HOC) that wraps the incomming component 
//and attaches additional functionality to it
export default function (ComposedComponent, compData) {
    class HOCpage extends Component {

      constructor(props) {

        super(props);
          this.state = {
            //state props...
          };
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


//to use in our component..
//optional info to pass onto our Hoc

//utilities
// import HOCpage from './HOCpage';

// class MyComponent extends Component {

//   constructor(props) {
//     super(props);
//     this.state ={

//     }
//   }

//   render() {
//     return (
//         <div> 
//           hello
//         </div>
//       )
//   }

// }

// let compData = {

// };

// export default HocFlowComponent(MyComponent, compData);