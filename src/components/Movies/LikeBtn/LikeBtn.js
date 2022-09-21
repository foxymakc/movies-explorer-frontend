import React from "react";
import "./LikeBtn.css";

function LikeBtn({ isLiked, onClick }) {
  return (
    <button
      className={!isLiked ? "moviescard__like" : "moviescard__like_active"}
      type="button"
      onClick={onClick}
    ></button>
  );
}

export default LikeBtn;