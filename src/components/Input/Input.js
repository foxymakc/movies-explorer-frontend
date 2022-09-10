import React from "react";
import "./Input.css";

const Input = ({ children, type, isError, errorText, errorId, ...rest}) => (
  <div className="input">
    <label className="input__label">{children}</label>
    <input
      type={type}
      className="input__item"
      {...rest}
    />
    <span className={`input__error-span ${isError ? 'input__error-span_show' : ''}`} id={errorId}>{errorText}</span>
  </div>
);

export default Input;
