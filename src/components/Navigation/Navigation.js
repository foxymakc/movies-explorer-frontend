import React from "react";
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
          <a className="navigation__link" href="/">
            Главная
          </a>
          <a className="navigation__link" href="/movies">
            Фильмы
          </a>
          <a className="navigation__link" href="/saved-movies">
            Сохранённые фильмы
          </a>
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
