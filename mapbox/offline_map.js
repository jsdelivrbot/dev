import { connect } from 'react-redux';
import React, { Component } from 'react';
import MapboxGl from 'mapbox-gl/dist/mapbox-gl.js';
import style from '../data/mapStyle2';

//react component using just mapbox-gl to render a map
class OfflineMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    console.log('mounted')
    new MapboxGl.Map({
      container: this.container,
      style: style
    })
  }

  sourceLoaded() {
    console.log('source loaded');
  }

  render() {
    
    return (
      <div className='offline-map' ref={(x) => { this.container = x }} style={{ width: '100vw', height: '100vh', position: 'absolute'}}>
      </div>
    );

  }
}

function mapStateToProps(state) {
  return {
  	// filteredRoutes: state.routes.route,
  }
}

export default connect(mapStateToProps)(OfflineMap);