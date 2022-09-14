import React  from "react";
import "./Form.css";

function Form({
  name,
  title,
  children,
  FormBtnRegister,
  textBtn,
  textSpan,
  Link,
  textLink,
  isDisabled,
  onSubmit,
  isRegisterError,
  isLoginError,
  isErrorText
}) {
  return (
    <form className="form" name={name} noValidate onSubmit={onSubmit} >
      <h2 className="form__title">{title}</h2>
      {children}
      <fieldset
        className={
          FormBtnRegister ? "form__submit-register" : "form__submit-login"
        }
      >
        { isRegisterError && <span className="form__error">{isErrorText}</span>}
        { isLoginError && <span className="form__error">{isErrorText}</span>}
        <button
          className={isDisabled ? "form__submit-btn form__submit-btn_inactive" : "form__submit-btn"}
          type="submit"
          disabled={isDisabled}
        >
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