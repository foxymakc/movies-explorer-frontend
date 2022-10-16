import React, { useState, useEffect } from "react";
import "./SearchForm.css";

function SearchForm({ onSubmit, onClick, movieOptions }) {
  const [searchString, setSearchString] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isСheckboxSwitch, setСheckboxSwitch] = useState(false);

  useEffect(() => {
    if (movieOptions === 'all') {
    const searchStringText = localStorage.getItem("searchStringText");
    const checkboxSwitchMovie = localStorage.getItem("checkboxSwitchMovie");
    if (searchStringText && checkboxSwitchMovie) {
      setSearchString(searchStringText);
      checkboxSwitchMovie === "true"
        ? setСheckboxSwitch(true)
        : setСheckboxSwitch(false);
    }
    } else {
      localStorage.setItem("searchSavedStringText", '');
      localStorage.setItem("checkboxSavedSwitchMovie", 'false');
      setСheckboxSwitch(false);
    }
  }, [movieOptions]);


  const handleChange = () => {
      onClick(!isСheckboxSwitch);
      setСheckboxSwitch(!isСheckboxSwitch);
  };

  const handleStringChange = (event) => {
    setSearchString(event.target.value);
    setErrorMessage(event.target.validationMessage);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchString) {
      setErrorMessage("Нужно ввести ключевое слово");
    } else if (searchString === localStorage.getItem("searchStringText")) {
      setErrorMessage("Поиск по этому ключевому слову уже осуществлён");
    } else if (searchString === localStorage.getItem("searchSavedStringText")) {
      setErrorMessage("Поиск по этому ключевому слову уже осуществлён");
    } else 
    onSubmit(searchString, isСheckboxSwitch);
  };

  return (
    <section className="searchform">
      <form
        action=""
        method="post"
        className="searchform__line"
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          type="text"
          name="search-input"
          placeholder="Фильм"
          className="searchform__input"
          required
          value={searchString}
          onChange={handleStringChange}
        />
        <input
          type="submit"
          name="search-input-btn"
          value=""
          className="searchform__input-btn"
        />
        <p className="searchform__error">{errorMessage}</p>
      </form>
      <div className="searchform__filtercheckbox">
        <label className="searchform__switch">
          <input
            className="searchform__checkbox"
            type="checkbox"
            checked={isСheckboxSwitch ? true : false}
            onChange={handleChange}
          />
          <span className="searchform__checkbox-slider searchform__checkbox-round"></span>
          <p className="searchform__checkbox-text">Короткометражки</p>
        </label>
      </div>
    </section>
  );
}

export default SearchForm;
