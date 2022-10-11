import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { CurrentSavedMoviesContext } from "../../contexts/CurrentSavedMoviesContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import "./App.css";
import HeaderMain from "../HeaderMain/HeaderMain";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import MoviesPage from "../../pages/MoviesPage";
import SavedMoviesPage from "../../pages/SavedMoviesPage";
import ProfilePage from "../../pages/ProfilePage";
import mainApi from "../../utils/MainApi";
import * as auth from "../../utils/auth";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

function App() {
  const [isEditMenuOpen, setEditMenuOpen] = useState(false);

  let history = useHistory();
  const { pathname } = useLocation();

  const [isRegisterError, setRegisterError] = useState(false);
  const [isLoginError, setLoginError] = useState(false);
  const [isProfileError, setProfileError] = useState(false);
  const [isErrorText, setErrorText] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSavedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    if (loggedIn) {
      const token = localStorage.getItem("jwt");
      Promise.all([mainApi.getUserInfo(token), mainApi.getSavedMovies(token)])
        .then((data) => {
          const [userData, savedMovies] = data;
          setSavedMovies(savedMovies.data.reverse());
          setCurrentUser(userData);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  
  useEffect(() => {
    checkToken() 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  function checkToken() {
    const token = localStorage.getItem("jwt");
    if (token) {
      auth
        .checkToken(token)
        .then((data) => {
          if (data) {
            setLoggedIn(true);
           history.push(pathname)
          }
        })
        .catch((err) => console.log(err));
    }
  }

  const handleLogin = (password, email) => {
    auth
      .authorize(password, email)

      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => {
        setLoginError(true);
        if (err === "Ошибка 401")
          setErrorText(
            "Возможно вы не зарегистрированы или ввели неверные данные"
          );
        if (err === "Ошибка 429")
          setErrorText(
            "Превышено максимально количество авторизации, подождите пару минут и попробуйте снова"
          );
        console.error(err);
      });
  };

  const handleRegister = (password, email, name) => {
    auth
      .register(password, email, name)
      .then((data) => {
        if (data) {
          handleLogin(password, email);
        }
      })
      .catch((err) => {
        setRegisterError(true);
        if (err === "Ошибка 400") setErrorText("Переданы некорректные данные");
        if (err === "Ошибка 409")
          setErrorText("Пользователь с таким e-mail уже существует");
        if (err === "Ошибка 500") setErrorText("Ошибка по умолчанию");
        console.error(err);
      });
  };

  const getCurrentUser = () => {
    const token = localStorage.getItem("jwt");
    mainApi
      .getUserInfo(token)
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleUpdateUserInfo = (newUserData) => {
    const { name, email } = newUserData;
    mainApi
      .handleUserInfo(name, email)
      .then(() => {
        getCurrentUser();
        setProfileError(true);
        setErrorText("Данные изменены");
      })
      .catch((err) => {
        setProfileError(true);
        if (err === "Ошибка: 400") setErrorText("Переданы некорректные данные");
        if (err === "Ошибка: 409")
          setErrorText("Редактирование данных другого пользователя невозможно");
        console.error(err);
      });
  };

  function onClickDeleteMovie(id) {
    mainApi
      .deleteSavedMovies(id)
      .then((res) => {
        if (res.data._id) {
          setSavedMovies((cards) => cards.filter((item) => item._id !== id));
        }
      })
      .catch((err) => console.log(err));
  }

  function onClickSaveMovie(movie, clickBtn, id) {
    if (clickBtn === "delete") {
      onClickDeleteMovie(id);
      return;
    }
    const newSavedMovie = {
      ...movie,
    };
    newSavedMovie.movieId = newSavedMovie.id;
    delete newSavedMovie.id;
    delete newSavedMovie.created_at;
    delete newSavedMovie.updated_at;

    mainApi
      .addSavedMovies(newSavedMovie)
      .then((res) => {
        if (res.data._id) {
          setSavedMovies((prev) => [...prev, res.data]);
        }
      })
      .catch((err) => console.log(err));
  }

  function handleEditMenuClick() {
    setEditMenuOpen(true);
  }

  function closeMenu() {
    setEditMenuOpen(false);
  }

  const handleLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({});
    setSavedMovies([]);
    history.push("/");
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentSavedMoviesContext.Provider value={isSavedMovies}>
        <div className="app">
          <Switch>
            <ProtectedRoute
              path="/movies"
              loggedIn={loggedIn}
              component={MoviesPage}
              onEditMenu={handleEditMenuClick}
              isOpen={isEditMenuOpen}
              onClose={closeMenu}
              onClickSaveMovie={onClickSaveMovie}
            />

            <ProtectedRoute
              path="/saved-movies"
              loggedIn={loggedIn}
              component={SavedMoviesPage}
              onEditMenu={handleEditMenuClick}
              isOpen={isEditMenuOpen}
              onClose={closeMenu}
              onClickDeleteMovie={onClickDeleteMovie}
            />

            <ProtectedRoute
              path="/profile"
              loggedIn={loggedIn}
              component={ProfilePage}
              onLogout={handleLogout}
              onEditMenu={handleEditMenuClick}
              isOpen={isEditMenuOpen}
              onClose={closeMenu}
              handleUpdateUserInfo={handleUpdateUserInfo}
              currentUser={currentUser}
              isProfileError={isProfileError}
              isErrorText={isErrorText}
            />

            <Route exact path="/">
              {loggedIn ? (
                <Header onEditMenu={handleEditMenuClick} />
              ) : (
                <HeaderMain />
              )}
              <Main />
              <Footer />
              <Navigation isOpen={isEditMenuOpen} onClose={closeMenu} />
            </Route>

            <Route path="/signup">
              <Register
                handleRegister={handleRegister}
                isRegisterError={isRegisterError}
                isErrorText={isErrorText}
              />
            </Route>

            <Route path="/signin">
              <Login
                handleLogin={handleLogin}
                isLoginError={isLoginError}
                isErrorText={isErrorText}
              />
            </Route>

            <Route path="*">
              <NotFound history={history} />
            </Route>
          </Switch>
        </div>
      </CurrentSavedMoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
