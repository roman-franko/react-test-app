import React from 'react';

function InputField(props) {
  return (
    <div className="input-field">
      <label className="input-field-label">{props.label}</label>
      <input type="input" placeholder={props.placeholder} onChange={props.onChange}/>
    </div>
  );
}

export default InputField;
