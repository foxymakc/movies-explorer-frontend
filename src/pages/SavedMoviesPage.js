import React from "react";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import SavedMovies from "../components/SavedMovies/SavedMovies";
import Footer from "../components/Footer/Footer";

const SavedMoviesPage = (props) => (
  <React.Fragment>
    <Header onEditMenu={props.onEditMenu} />
    <SavedMovies onClickDeleteMovie={props.onClickDeleteMovie}/>
    <Footer />
    <Navigation isOpen={props.isOpen} onClose={props.onClose} />
  </React.Fragment>
);

export default SavedMoviesPage;