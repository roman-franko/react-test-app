import React from 'react';

function ErrorMessageOnForm(props) {
  return (
    props.enable ? <span className="error-message">{props.text}</span> : ''
  );
}

export default ErrorMessageOnForm;
