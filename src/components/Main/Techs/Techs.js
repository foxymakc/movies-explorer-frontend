import React from "react";
import "./Techs.css";

const Techs = () => (
  <section className="techs" id="techs">
    <article className="techs__content">
      <h2 className="techs__title">Технологии</h2>
      <h3 className="techs__heading">7 технологий</h3>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__list">
        <li className="techs__list-container">
          <p className="techs__list-link">HTML</p>
        </li>
        <li className="techs__list-container">
          <p className="techs__list-link">CSS</p>
        </li>
        <li className="techs__list-container">
          <p className="techs__list-link">JS</p>
        </li>
        <li className="techs__list-container">
          <p className="techs__list-link">React</p>
        </li>
        <li className="techs__list-container">
          <p className="techs__list-link">Git</p>
        </li>
        <li className="techs__list-container">
          <p className="techs__list-link">Express.js</p>
        </li>
        <li className="techs__list-container">
          <p className="techs__list-link">mongoDB</p>
        </li>
      </ul>
    </article>
  </section>
);

export default Techs;
