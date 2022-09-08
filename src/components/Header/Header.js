import React from "react";
import "./Header.css";
import headerLogo from "../../images/logo.svg";

const Header = () => (
  <header className="header">
    <nav className="header__links">
      <a className="header__logo" href="/">
        <img className="logo" alt="логотип С" src={headerLogo} />
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

export default Header;
