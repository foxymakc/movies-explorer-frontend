import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm(props) {
  const [isChecked, setIsChecked] = useState(props.isChecked);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <section className="searchform">
      <form
        action=""
        method="post"
        className="searchform__line"
        onSubmit={props.onSubmit}
      >
        <input
          type="text"
          name="search-input"
          placeholder="Фильм"
          className="searchform__input"
          required
        />
        <input
          type="submit"
          name="search-input-btn"
          value=""
          className="searchform__input-btn"
        />
      </form>
      <div className="searchform__filtercheckbox">
        <label className="searchform__switch">
          <input
            className="searchform__checkbox"
            type="checkbox"
            checked={isChecked}
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