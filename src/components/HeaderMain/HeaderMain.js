import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./HeaderMain.css";

function HeaderMain() {
  return (
    <header className="header">
      <nav className="header__links">
        <NavLink className="header__logo" to="/">
          <Logo />
        </NavLink>
      </nav>
      <div className="header__profile">
        <NavLink className="header__profile-link" to="/signup">
          Регистрация
        </NavLink>
        <NavLink className="header__profile-link" to="/signin">
          Войти
        </NavLink>
      </div>
    </header>
  );
}

export default HeaderMain;