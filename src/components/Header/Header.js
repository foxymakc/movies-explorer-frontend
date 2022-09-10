import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import accountLogo from "../../images/profile.svg"

const Header = (props) => (
  <header className="header">
    <div className="header__pc">
    <nav className="header__links">
      <a className="header__logo" href="/">
        <Logo />
      </a>
      <div className="header__films">
        <a className="header__films-link" href="/movies">
          Фильмы
        </a>
        <a className="header__films-link" href="/saved-movies">
          Сохранённые фильмы
        </a>
      </div>
    </nav>
    <div className="header__profile-btn">
      <a href="/profile" className="header__profile-btn-text">
        <img className="logo__profile" src={accountLogo} alt="иконка человечка"  />
        Аккаунт
      </a>
    </div>
    </div>
    <div className="header__tab">
      <nav className="header__links">
        <a className="header__logo" href="/">
          <Logo />
        </a>
      </nav>
      <button className="header__btn-menu" id="show__menu" onClick={props.onEditMenu}></button>
    </div>
  </header>
);

export default Header;
