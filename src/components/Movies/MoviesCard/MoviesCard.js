import React, { useState } from "react";
import LikeBtn from "../LikeBtn/LikeBtn";
import RemoveLikeBtn from "../RemoveLikeBtn/RemoveLikeBtn";
import "./MoviesCard.css";

function MoviesCard({ movie, isRenderLike }) {
  const [isLike, setIsLike] = useState(false);
  const handleClickLike = () => setIsLike(!isLike);

  return (
    <div className="moviescard">
      <img
        className="moviescard__image"
        src={movie.thumbnail}
        alt={movie.nameRU}
      />
      <div className="moviescard__content">
        <div className="moviescard__information">
          <h2 className="moviescard__title">{movie.nameRU}</h2>
          <p className="moviescard__time">{movie.duration}</p>
        </div>
        {isRenderLike ? (
          <RemoveLikeBtn />
        ) : (
          <LikeBtn isLike={isLike} onClick={handleClickLike} />
        )}
      </div>
    </div>
  );
}
export default MoviesCard;
