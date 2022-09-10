import React from "react";
import "./Form.css";

function Form({ name, title, children, FormBtnRegister, textBtn, textSpan, Link, textLink }) {
  return (
    <form className="form" name={name}>
      <h2 className="form__title">{title}</h2>
      {children}
      <fieldset className={FormBtnRegister
        ? 'form__submit-register'
        : 'form__submit-login'}>
        <button className="form__submit-btn" type="submit">
          {textBtn}
        </button>
        <nav className="form__links-text">
          <span className="form__links-span">{textSpan}</span>
          <a className="form__link-text" href={Link}>
            {textLink}
          </a>
        </nav>
      </fieldset>
    </form>
  );
}

export default Form;