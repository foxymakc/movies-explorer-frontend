import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

import "./MoviesCardList.css";

const MoviesCardList = ({ moviesList, isRenderLike }) => {
  return (
    <div className="moviescardlist">
      {moviesList.map((moviesCard) => (
        <MoviesCard
          key={moviesCard.movieId}
          movie={moviesCard}
          isRenderLike={isRenderLike}
        ></MoviesCard>
      ))}
    </div>
  );
};

export default MoviesCardList;
