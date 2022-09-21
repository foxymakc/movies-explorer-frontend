import React, { useContext } from "react";
import LikeBtn from "../LikeBtn/LikeBtn";
import RemoveLikeBtn from "../RemoveLikeBtn/RemoveLikeBtn";
import { CurrentSavedMoviesContext } from "../../../contexts/CurrentSavedMoviesContext";
import "./MoviesCard.css";

function MoviesCard({ movie, movieOptions, onClickMovieBtn }) {
  const CurrentSavedMovies = useContext(CurrentSavedMoviesContext);
  const isLiked = CurrentSavedMovies.some((item) => +item.movieId === movie.id);

  const handleClickLike = () => {
    if (!isLiked) {
      onClickMovieBtn(movie, "save", null);
    } else {
      onClickMovieBtn(movie, "delete", CurrentSavedMovies[0]._id);
    }
  };

  const handleClickDelete = () => {
    onClickMovieBtn(movie._id);
  };

  function getСalculationTime(duration) {
    const hours = Math.trunc(duration / 60);
    const minutes = duration % 60;
    return hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;
  }

  return (
    <div className="moviescard">
      <a
        className="moviecard__trailer"
        target={"_blank"}
        rel="noreferrer"
        href={movie.trailerLink}
      >
        <img
          className="moviescard__image"
          src={
            movieOptions === "all"
              ? `https://api.nomoreparties.co${movie.image.url}`
              : movie.image
          }
          alt={movie.nameRU}
        />
      </a>
      <div className="moviescard__content">
        <div className="moviescard__information">
          <h2 className="moviescard__title">{movie.nameRU}</h2>
          <p className="moviescard__time">
            {getСalculationTime(movie.duration)}
          </p>
        </div>
        {movieOptions === "all" ? (
          <LikeBtn isLiked={isLiked} onClick={handleClickLike} />
        ) : (
          <RemoveLikeBtn onClick={handleClickDelete} />
        )}
      </div>
    </div>
  );
}
export default MoviesCard;