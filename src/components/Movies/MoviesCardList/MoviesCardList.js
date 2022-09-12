import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

import "./MoviesCardList.css";

function MoviesCardList({ moviesList, isRenderLike }) {
  return (
    <div className="moviescard-list">
      {moviesList.map((moviesCard) => (
        <MoviesCard
          key={moviesCard.movieId}
          movie={moviesCard}
          isRenderLike={isRenderLike}
        ></MoviesCard>
      ))}
    </div>
  );
}

export default MoviesCardList;