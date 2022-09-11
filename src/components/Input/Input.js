import React from "react";
import "./Input.css";

function Input({ children, type, isError, errorText, errorId, ...rest }) {
  return (
    <div className="input">
      <label className="input__label">{children}</label>
      <input
        type={type}
        className={`input__item ${isError ? "input__item_error" : ""}`}
        {...rest}
      />
      <span
        className={`input__error-span ${
          isError ? "input__error-span_show" : ""
        }`}
        id={errorId}
      >
        {errorText}
      </span>
    </div>
  );
}

export default Input;