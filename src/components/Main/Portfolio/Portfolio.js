import React from "react";
import "./Portfolio.css";

const Portfolio = () => (
  <section className="portfolio" id="portfolio">
    <h2 className="portfolio__title">Портфолио</h2>
    <ul className="portfolio__links">
      <li className="portfolio__link-conteiner">
        <a
          className="portfolio__link"
          href="https://github.com/foxymakc/how-to-learn"
          target="_blank"
          rel="noreferrer"
        >
          Статичный сайт
        </a>
      </li>
      <li className="portfolio__link-conteiner">
        <a
          className="portfolio__link"
          href="https://github.com/foxymakc/russian-travel"
          target="_blank"
          rel="noreferrer"
        >
          Адаптивный сайт
        </a>
      </li>
      <li className="portfolio__link-conteiner">
        <a
          className="portfolio__link"
          href="https://github.com/foxymakc/mesto"
          target="_blank"
          rel="noreferrer"
        >
          Одностраничное приложение
        </a>
      </li>
    </ul>
  </section>
);

export default Portfolio;
