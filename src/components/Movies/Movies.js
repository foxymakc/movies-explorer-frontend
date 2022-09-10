import React, { useState } from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { standardMovieList } from "./../../utils/standartMovieList";
import Preloader from "./Preloader/Preloader";
import "./Movies.css";

function Movies() {
  const [isLoading, setIsLoading] = useState(true);
  const showLoadingSample = () => {
    setIsLoading(false);
  };

  setTimeout(showLoadingSample, 800);

  return (
    <main>
      <SearchForm isChecked={true} />
      <section className="moviescards">
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            moviesList={standardMovieList}
            isLoading={isLoading}
            isRenderLike={false}
          ></MoviesCardList>
        )}

        <button id="moviebtnshow" className="moviebtnshow">
          Ещё
        </button>
      </section>
    </main>
  );
}

export default Movies;
