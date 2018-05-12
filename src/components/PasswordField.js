import React from 'react';

function PasswordField(props) {
  return (
    <div className="password-field">
      <label>Password:</label>
      <input type="password" placeholder="Enter Password" onChange={props.onPasswordChange}/>
    </div>
  );
}

export default PasswordField;
