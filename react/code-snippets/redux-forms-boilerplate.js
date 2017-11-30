import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { signinUser } from '../../../actions/auth';
import { connect } from 'react-redux';
import renderField from '../parts/form_fields';


class SignUp extends Component {

    handleFormSubmit(formProps) {
        //do something with the submitted form props
        console.log(formProps);
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    render() {
        //props that are pulled off of redux form
        const { handleSubmit } = this.props;

        return (
            <div className="admin-main">
            <div className="row">
                    <div className="columns small-12">
                        <h1 className="margin-bottom">Login:</h1>
                        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                            <Field
                              label="Email:"
                              name="email"
                              component={renderField}
                            />
                            <Field
                              label="Password:"
                              name="password"
                              component={renderField}
                            />
                            { this.renderAlert() }
                            <button action="submit" className="btn btn-primary">Sign in</button>
                        </form>
                    </div>
            </div>
            </div>
        );
    }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  //password strenth:
  //https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
  //let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  //let mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
  let lightRegex = new RegExp("^((?=.*[A-Z]|[a-z])(?=.*[0-9]))(?=.{6,})");
  if(!lightRegex.test(formProps.password)) {
      //six characters or more and has at least one lowercase and one uppercase alphabetical character or has at least one lowercase and one numeric character or has at least one uppercase and one numeric character
      errors.password = 'password must be at least 6 characters long with at least one numeric character';
  }

  return errors;
}

function mapStateToProps(state) {
    //have our state to show up in props as errorMessage
    return {
        errorMessage: state.auth.error,
    }
}

export default reduxForm({
    validate,
    form: 'signin',
})(
    connect(mapStateToProps)(SignUp)
    );
