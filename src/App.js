import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserPortal from './components/UserPortal';

// потом небольшое приложение: github commits viewer
// тут нужно сделать логин форму,
// хранить авторизацию в обьекте,
// сделать скрин с листом коммитов для залогиненого пользователя
// + сделать небольшой свой роутер на чистом реакте

function AppHeader(props) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Github Commits Viewer</h1>
    </header>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <UserPortal />
      </div>
    );
  }
}

export default App;
