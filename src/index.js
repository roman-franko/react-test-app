import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginForm from './components/LoginForm';

// потом небольшое приложение: github commits viewer
// тут нужно сделать логин форму,
// хранить авторизацию в обьекте,
// сделать скрин с листом коммитов для залогиненого пользователя + сделать небольшой свой роутер на чистом реакте


ReactDOM.render(
  <div>
    <App />
    <LoginForm />
  </div>,
  document.getElementById('root'));
