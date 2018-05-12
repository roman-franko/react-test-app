import React, { Component } from 'react';
import LoginField from './LoginField';
import PasswordField from './PasswordField';

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    };

    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLoginChange(e) {
    this.setState({
      login: e.target.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleSubmit(event) {
    alert([this.state.login, this.state.password].join(' / '));
    event.preventDefault();
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <LoginField onLoginChange={this.handleLoginChange} />
        <PasswordField onPasswordChange={this.handlePasswordChange}/>

        <input type="submit" value="Submit" className="login-submit"/>
      </form>
    );
  }
}
export default NameForm;
