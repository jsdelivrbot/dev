import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

//validate
import { validate, addDashes } from '../lib/validateFields';


class Form extends Component {

    constructor(props) {
    super(props);
      this.state = {
        //keep track if it's valid
        //in this component for pressing enter on form submission
        isValid: false
      }
    }

    //fired when component first renders
    componentDidMount() {

      this.init();

    }

    init() {
      //check if any fields have been used.
      //if all are blank, don't validate
      let used = false;

      for (var i=0; i < this.props.fields.length; i++) {
          if (this.props.fields[i].value !== '' || null) {
              used = true;
          }
      }

      if (used === true) {
        //update-validate all fields
        for (let ii = 0; ii <= (this.props.fields.length - 1); ii++ ) {

          this.updateFields(this.props.fields[ii].id, this.props.fields[ii].value);
        }
      }
    }

    updateFields(input, value) {

      //find/copy the field from our fields state
      //then update fields state with new data
      //----------------------------------------
      //find our field in state object
      let field = _.filter(this.props.fields, (item) => {
          return item.id === input;
      });
      //if field found
      if (field) {
        //set to active
        if(value !== '') {
          field[0].active = true;
        } else {
          field[0].active = false;
        }
        //validate the current filed
        let returnedError = validate(field[0].validate, value);
        field[0].error = returnedError[field[0].validate];


        //if phone number - add dashes, else just pass on the value
        if ((!field[0].error) && (field[0].id === 'phone')) {
            //add dashes to phone number:
            let dashedPhone = addDashes(value);
            if(dashedPhone) {
              field[0].value = dashedPhone;
            }
        } else {
          //or just pass on the value
          field[0].value = value;
        }


        //check if all fields are filled in and with no errors
        let passed = true;
        for (var i=0; i < this.props.fields.length; i++) {
            if ((this.props.fields[i].value === '') || (this.props.fields[i].error)) {
                passed = false;
            }
        }

        //check if errors somewhere or if current field has error
        if((!field[0].error) && passed) {
          //send back valid data to parent component
          this.props.updateValid(true);
          this.setState({ isValid: true });
        } else {
          this.props.updateValid(false);
          this.setState({ isValid: false });

        }

        //update fields state with our new data
        //----------------------------------------
        //copy field state
        let fieldsCopy = this.props.fields.slice();
        // Find item index using indexOf+find
        var index = _.indexOf(fieldsCopy, _.find(fieldsCopy, {id: field[0].id}));
        // Replace item at index with our modified field
        fieldsCopy.splice(index, 1, field[0]);
        //at the end replace the state object
        this.props.updateFields( fieldsCopy );
      }

      
    }


    //store the input data in the reducers
    updateInput(input, evt) {

      let inputValue = evt.target.value;
      this.updateFields(input, inputValue)
      this.forceUpdate();

    }

    onSubmit(e) {
      if(this.state.isValid) {
        //just let the enter button submit for form
      } else {
        //prevent form submission
        e.preventDefault();
        return false;
      }
    }

    renderFields() {

      return this.props.fields.map((item) => {
        return (
          <div className="field-container" key={item.id}>
            <div className="text-help">
            { item.value &&
              item.error
            }
            </div>
            <form onSubmit={this.onSubmit.bind(this)}>
            <input ref='emailInput' type="text" className="form-control" placeholder={item.label}
              value={item.value} onChange={this.updateInput.bind(this, item.id)} className="input-email"
              />
            </form>
          </div>
        );

      });

    }

  render() {

    return (
        <div className={"flow-form " + this.props.classProp}>
          {this.renderFields()}
        </div>
    )
  }
}

export default Form;
