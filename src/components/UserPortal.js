import React, { Component } from 'react';
import CustomRouter from './CustomRouter';
import CustomRoute from './CustomRoute';
import LoginForm from './LoginForm';
import CommitsList from './CommitsList';

const knownUsers = {
  'roman-franko': {
    password: 'Password1'
  }
};

class UserPortal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      commits: []
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(name, password) {
    let user = knownUsers[name];

    if (user && user.password === password) {
      this.setState({
        currentUser: { name: name }
      });
      return true;
    } else {
      return false;
    }
  }

  handleLogout() {
    this.setState({
      currentUser: {},
      commits: []
    });
  }

  getUserName() {
    let {currentUser} = this.state
    return currentUser.name
  }

  render() {
    return (
      <CustomRouter defaultPath={'login'}>
        <CustomRoute path={'login'}>
          <LoginForm routable={true} onLogin={this.handleLogin}/>
        </CustomRoute>

        <CustomRoute path={'list'}>
          <CommitsList routable={true} onLogout={this.handleLogout} userName={() => this.getUserName()}/>
        </CustomRoute>
      </CustomRouter>
    );
  }
}

export default UserPortal;
