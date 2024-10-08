// src/components/auth/InputField.jsx
import React from 'react';

const InputField = ({ type, placeholder, name, value, onChange }) => (
  <div className="input-field-wrapper">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input-field"
      aria-label={placeholder}
    />
  </div>
);

export default InputField;
