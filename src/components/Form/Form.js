import React from "react";
import "./Form.css";

const Form = ({ name, title, children, textBtn, textSpan, Link, textLink }) => (
<form className="form" name={name}>
          <h2 className="form__title">{title}</h2>
          {children}
          <fieldset className="form__submit">
            <button className="form__submit-btn" type="submit">
              {textBtn}
            </button>
            <nav className="form__links-text">
              <span className="form__links-span">{textSpan}</span>
              <a className="form__link-text" href={Link}>{textLink}</a>
            </nav>
          </fieldset>
        </form>
);

export default Form;
