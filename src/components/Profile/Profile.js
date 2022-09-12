import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <form className="profile__container" id="profile_form">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <div className="profile__input">
          <label className="profile__input-label">Имя</label>
          <input
            type="text"
            className="profile__input-item"
            id="name"
            name="name"
            maxLength="30"
            minLength="2"
            placeholder="Имя"
            required
            pattern="^[A-Za-z]([A-Za-z]| |-){1,28}[A-Za-z]$"
            value="Виталий"
          />
        </div>
        <div className="profile__input">
          <label className="profile__input-label">E-mail</label>
          <input
            type="email"
            className="profile__input-item"
            id="email"
            name="email"
            placeholder="Почта"
            required
            pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$"
            value="pochta@yandex.ru"
          />
        </div>
        <fieldset className="profile__submit-group">
          <button
            className="profile__button"
            type="submit"
            id="profile__button"
          >
            Редактировать
          </button>
          <a className="profile__link" href="/signout">
            Выйти из аккаунта
          </a>
        </fieldset>
      </form>
    </section>
  );
}

export default Profile;