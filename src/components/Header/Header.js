import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../Logo/Logo";
import accountLogo from "../../images/profile.svg";

function Header(props) {
  return (
    <header className="header">
      <div className="header__pc">
        <nav className="header__links">
          <a className="header__logo" href="/">
            <Logo />
          </a>
          <div className="header__films">
            <NavLink
              to="/movies"
              className="header__films-link"
              activeClassName="header__films-link_active"
            >
              Фильмы
            </NavLink>

            <NavLink
              to="/saved-movies"
              className="header__films-link"
              activeClassName="header__films-link_active"
            >
              Сохранённые фильмы
            </NavLink>
          </div>
        </nav>
        <div className="header__profile-btn">
          <a href="/profile" className="header__profile-btn-text">
            <img
              className="logo__profile"
              src={accountLogo}
              alt="иконка человечка"
            />
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
        <button
          className="header__btn-menu"
          id="show__menu"
          onClick={props.onEditMenu}
        ></button>
      </div>
    </header>
  );
}

export default Header;