import React, { Component } from 'react';
import InputField from './InputField';
import PasswordField from './PasswordField';
import ErrorMessageOnForm from './ErrorMessageOnForm';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      errorMessageShown: false
    };

    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLoginChange(e) {
    this.setState({
      name: e.target.value
    });
    this.displayErrorMessageOnForm(false);
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
    this.displayErrorMessageOnForm(false);
  }

  displayErrorMessageOnForm(enable) {
    this.setState({
      errorMessageShown: enable
    });
  }

  handleSubmit(event) {
    let name = this.state.name;
    let password = this.state.password;
    if (this.props.onLogin(name, password)) {
      this.setState({
        name: '',
        password: '',
        errorMessageShown: false
      });
      this.props.onPathChange('list');
    } else {
      this.displayErrorMessageOnForm(true);
    }
    event.preventDefault();
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <InputField label="Login:" onChange={this.handleLoginChange} placeholder="Enter login"/>

        <PasswordField onPasswordChange={this.handlePasswordChange}/>
        <ErrorMessageOnForm text="Incorrect Login / Password" enable={this.state.errorMessageShown}/>
        <input type="submit" value="Submit" className="login-submit"/>
      </form>
    );
  }
}

export default LoginForm;
