import React from "react";
import "./AboutMe.css";
import Avatar from "../../../images/avatar.jpg";

function AboutMe() {
  return (
    <section className="aboutme" id="student">
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme__content">
        <div className="aboutme__student-info">
          <h3 className="aboutme__name">Виталий</h3>
          <p className="aboutme__profile">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutme__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className="aboutme__link"
            href="https://github.com/foxymakc"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img className="aboutme__image" src={Avatar} alt="аватарка" />
      </div>
    </section>
  );
}
export default AboutMe;