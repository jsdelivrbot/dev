import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    
    constructor (props) {
        super(props) 
        
        this.state = {term: ''}
        
        //bind the context of onInputChange instead of using the fat arrow fuction
        //this is how we can connect the meaning of "this" to the input
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    onInputChange(event) {
        console.log(event.target.value);
        this.setState({term: event.target.value});
    }
    
    onFormSubmit(event) {
        //this will prevent the browser from submitting the form
        //we want to use a form anyways to harness the return key submission.
        event.preventDefault();
        
        //fetch weather data
        this.props.fetchWeather(this.state.term);
        //this will cause it to re-render (clear the searchbar)
        this.setState({ term: '' });
    }
    
    render() {
        return(
            <form className="input-group" onSubmit={this.onFormSubmit}>
            <input
                placeholder="Get a five-day forecast in your favourite cities"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}
             />
            <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

//the null is because the first argument is for state but here we don't use it
export default connect(null, mapDispatchToProps)(SearchBar);