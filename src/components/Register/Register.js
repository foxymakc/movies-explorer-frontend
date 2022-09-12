import React, { useState } from "react";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if ( !email || !password ) return;
  };

  return (
    <div className="register">
      <header className="header__auth">
        <a href="/" className="header__auth-logo">
          <Logo />
        </a>
      </header>

      <Form
        name="form-register"
        title="Добро пожаловать!"
        FormBtnRegister
        onSubmit={handleSubmit}
        textBtn="Зарегистрироваться"
        textSpan="Уже зарегистрированы?"
        Link="/signin"
        textLink="Войти"
      >
        <Input
          type="text"
          id="name"
          name="name"
          maxLength="30"
          minLength="2"
          placeholder="Имя"
          required
          errorId="name-error"
          onChange={handleNameChange}
          value={name || "Виталий"}
        >
          Имя
        </Input>

        <Input
          type="email"
          id="email"
          name="email"
          maxLength="40"
          minLength="2"
          placeholder="E-mail"
          required
          errorId="email-error"
          onChange={handleEmailChange}
          value={email || "pochta@yandex.ru|"}
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
          onChange={handlePasswordChange}
          value={password || "**************"}
          errorText="Что-то пошло не так..."
          isError
        >
          Пароль
        </Input>
      </Form>
    </div>
  );
}

export default Register;