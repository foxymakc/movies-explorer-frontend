import React, { useEffect } from 'react';
import Form from "../Form/Form";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";
import useValidation from "../../hooks/useValidation";
import "../Register/Register.css";

function Login(props) {
  const { values, handleChange, errors, isValid, resetForm } = useValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleLogin(values.password, values.email);
  };
console.log(isValid);
  return (
    <div className="register">
      <header className="header__auth">
        <a href="/" className="header__auth-logo">
          <Logo />
        </a>
      </header>

      <Form
        name="form-register"
        title="Рады видеть!"
        isSignInError={props.isSignInError}
        isDisabled={!isValid}
        onSubmit={handleSubmit}
        textBtn="Войти"
        textSpan="Ещё не зарегистрированы?"
        Link="/signup"
        textLink="Регистрация"
        isLoginError={props.isLoginError}
        isErrorText={props.isErrorText}
      >
        <Input
          type="email"
          id="email"
          name="email"
          maxLength="40"
          minLength="2"
          placeholder="E-mail"
          pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$"
          required
          errorId="email-error"
          errorText={errors.email}
          onChange={handleChange}
          value={values.email || ''}
        >
          E-mail
        </Input>

        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Пароль"
          required
          errorId="password-error"
          errorText={errors.password}
          onChange={handleChange}
          value={values.password || ''}
        >
          Пароль
        </Input>
      </Form>
    </div>
  );
}

export default Login;