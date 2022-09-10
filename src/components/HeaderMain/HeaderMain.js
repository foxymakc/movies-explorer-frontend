import React from "react";
import Logo from "../Logo/Logo";
import "./HeaderMain.css";

const HeaderMain = () => (
  <header className="header">
    <nav className="header__links">
      <a className="header__logo" href="/">
        <Logo />
      </a>
    </nav>
    <div className="header__profile">
      <a className="header__profile-link" href="/signup">
        Регистрация
      </a>
      <a className="header__profile-link" href="/signin">
        Войти
      </a>
    </div>
  </header>
);

export default HeaderMain;
