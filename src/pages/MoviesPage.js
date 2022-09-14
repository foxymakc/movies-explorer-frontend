import React from "react";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Movies from "../components/Movies/Movies";
import Footer from "../components/Footer/Footer";

const MoviesPage = (props) => (
  <React.Fragment>
    <Header onEditMenu={props.onEditMenu} />
    <Movies />
    <Footer />
    <Navigation isOpen={props.isOpen} onClose={props.onClose} />
  </React.Fragment>
);

export default MoviesPage;