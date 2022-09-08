import React from "react";
import "./NavTab.css";

const NavTab = () => (
    <nav className="navtab">
    <ul className="navtab__links">
      <li className="navtab__link-container">
        <a className="navtab__link" href="#about">О проекте</a>
      </li>
      <li className="navtab__link-container">
        <a className="navtab__link" href="#techs">Технологии</a>
      </li>
      <li className="navtab__link-container">
        <a className="navtab__link" href="#student">Студент</a>
      </li>
    </ul>
  </nav>
);

export default NavTab;
