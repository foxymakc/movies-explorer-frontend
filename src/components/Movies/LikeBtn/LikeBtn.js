import React from "react";
import "./LikeBtn.css";

function LikeBtn({ isLike, onClick }) {
  return (
    <button
      className={!isLike ? "moviescard__like" : "moviescard__like_active"}
      type="button"
      onClick={onClick}
    ></button>
  );
}

export default LikeBtn;