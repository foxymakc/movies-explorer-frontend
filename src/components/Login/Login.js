import React, { useState } from "react";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";
import "../Register/Register.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) return;
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
        title="Рады видеть!"
        onSubmit={handleSubmit}
        textBtn="Войти"
        textSpan="Ещё не зарегистрированы?"
        Link="/signup"
        textLink="Регистрация"
      >
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
          value={email}
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
          value={password}
        >
          Пароль
        </Input>
      </Form>
    </div>
  );
}

export default Login;