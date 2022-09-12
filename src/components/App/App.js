import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import HeaderMain from "../HeaderMain/HeaderMain";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import Navigation from "../Navigation/Navigation";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";

function App() {
  let history = useHistory();

  const [isEditMenuOpen, setEditMenuOpen] = React.useState(false);

  function handleEditMenuClick() {
    setEditMenuOpen(true);
  }

  function closeMenu() {
    setEditMenuOpen(false);
  }

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <HeaderMain />
          <Main />
          <Footer />
        </Route>

        <Route path="/signup">
          <Register />
        </Route>

        <Route path="/signin">
          <Login />
        </Route>

        <Route path="/movies">
          <Header onEditMenu={handleEditMenuClick} />
          <Movies />
          <Footer />
          <Navigation isOpen={isEditMenuOpen} onClose={closeMenu} />
        </Route>

        <Route path="/saved-movies">
          <Header onEditMenu={handleEditMenuClick} />
          <SavedMovies />
          <Footer />
          <Navigation isOpen={isEditMenuOpen} onClose={closeMenu} />
        </Route>

        <Route path="/profile">
          <Header onEditMenu={handleEditMenuClick} />
          <Profile />
          <Navigation isOpen={isEditMenuOpen} onClose={closeMenu} />
        </Route>

        <Route path="*">
          <NotFound history={history} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;