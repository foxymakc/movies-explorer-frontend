import React from "react";
import "./AboutProject.css";

const AboutProject = () => (
    <section className="aboutproject" id="about">
    <article>
      <h2 className="aboutproject__title">О проекте</h2>
      <ul className="aboutproject__columns">
        <li className="aboutproject__column">
          <h3 className="aboutproject__column-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="aboutproject__column-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="aboutproject__column">
          <h3 className="aboutproject__column-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="aboutproject__column-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно
            было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="aboutproject__line">
        <p className="aboutproject__line-title">1 неделя</p>
        <p className="aboutproject__line-title">4 недели</p>
        <p className="aboutproject__line-text">Back-end</p>
        <p className="aboutproject__line-text">Front-end</p>
      </div>
    </article>
  </section>
);

export default AboutProject;
