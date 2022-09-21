import React from "react";
import "./RemoveLikeBtn.css";

function RemoveLikeBtn({ onClick }) {
  return <button className="moviescard__like_remove" type="button" onClick={onClick} />;
}

export default RemoveLikeBtn;