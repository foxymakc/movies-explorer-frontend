import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__copyright">
        <p className="footer__copyright-text">&copy; 2022</p>
        <div className="footer__links">
          <a
            className="footer__link"
            href="https://practicum.yandex.ru"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__link"
            href="https://github.com/foxymakc/movies-explorer-frontend"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;