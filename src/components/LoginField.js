import React from 'react';

function LoginField(props) {
  return (
    <div className="login-field">
      <label className="login-field">Login:</label>
      <input type="email" placeholder="Enter Email" onChange={props.onLoginChange}/>
    </div>
  );
}

export default LoginField;
