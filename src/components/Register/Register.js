import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";
import useValidation from "../../hooks/useValidation";
import "./Register.css";

function Register(props) {
  const { values, handleChange, errors, isValid, resetForm } = useValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleRegister(values.password, values.email, values.name);
  };

  return (
    <div className="register">
      <header className="header__auth">
        <NavLink to="/" className="header__auth-logo">
          <Logo />
        </NavLink>
      </header>

      <Form
        name="form-register"
        title="Добро пожаловать!"
        FormBtnRegister
        isDisabled={!isValid}
        onSubmit={handleSubmit}
        textBtn="Зарегистрироваться"
        textSpan="Уже зарегистрированы?"
        Link="/signin"
        textLink="Войти"
        isRegisterError={props.isRegisterError}
        isErrorText={props.isErrorText}
      >
        <Input
          type="text"
          id="name"
          name="name"
          maxLength="30"
          minLength="2"
          placeholder="Имя"
          pattern="[A-Za-zА-ЯЁа-яё -]+"
          required
          errorId="name-error"
          onChange={handleChange}
          value={values.name || ""}
          errorText={errors.name}
        >
          Имя
        </Input>

        <Input
          type="email"
          id="email"
          name="email"
          maxLength="40"
          minLength="2"
          pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$"
          placeholder="E-mail"
          required
          errorId="email-error"
          onChange={handleChange}
          value={values.email || ""}
          errorText={errors.email}
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
          onChange={handleChange}
          value={values.password || ""}
          errorText={errors.password}
        >
          Пароль
        </Input>
      </Form>
    </div>
  );
}

export default Register;