import React, { useEffect } from "react";
import useValidation from "../../hooks/useValidation";
import "./Profile.css";

function Profile(props) {
  const { values, setValues, handleChange, errors, isValid, setIsValid } =
    useValidation();

  useEffect(() => {
    setValues(props.currentUser);
    setIsValid(true);
  }, [props.currentUser, setValues, setIsValid]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleUpdateUserInfo(values);
  };
  return (
    <section className="profile">
      <form className="profile__container" id="profile_form" onSubmit={handleSubmit}>
        <h2 className="profile__title">Привет, {props.currentUser.name}!</h2>
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
            pattern="[A-Za-zА-ЯЁа-яё -]+"
            value={values.name || ''}
            onChange={handleChange}
          />
          <span className="profile__input-error">{errors.name}</span>
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
            value={values.email || ''}
            onChange={handleChange}
          />
          <span className="profile__input-error">{errors.email}</span>
        </div>
        <fieldset className="profile__submit-group">
        { props.isProfileError && <span className="profile__submit-group-error">{props.isErrorText}</span>}
          <button
            className={(isValid && (values.name !== props.currentUser.name
              || values.email !== props.currentUser.email))
              ? 'profile__button'
              : 'profile__button profile__button-inactive'}
              disabled={(values.name === props.currentUser.name
                && values.email === props.currentUser.email) || !isValid}
            type="submit"
            id="profile__button"
          >
            
            Редактировать
          </button>
          <a className="profile__link" href="/" onClick={props.handleLogout}>
            Выйти из аккаунта
          </a>
        </fieldset>
      </form>
    </section>
  );
}

export default Profile;
