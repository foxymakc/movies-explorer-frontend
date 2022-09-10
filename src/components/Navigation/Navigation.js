import React from "react";
import { NavLink } from "react-router-dom";
import accountLogo from "../../images/profile.svg";
import "./Navigation.css";

function Navigation(props) {
  return (
    <div className={`navigation ${props.isOpen ? "navigation_opened" : ""}`}>
      <nav className="navigation__container">
        <div className="navigation__links">
          <button
            className="navigation__btn-close"
            onClick={props.onClose}
          ></button>
          <NavLink
            to="/"
            className="navigation__link"
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className="navigation__link"
            activeClassName="navigation__link_active"
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className="navigation__link"
            activeClassName="navigation__link_active"
          >
            Сохранённые фильмы
          </NavLink>
        </div>
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
      </nav>
    </div>
  );
}

export default Navigation;