import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
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
import moviesApi from "../../utils/MoviesApi";
import * as auth from "../../utils/auth";

function App() {

  const [isEditMenuOpen, setEditMenuOpen] = useState(false);

  let history = useHistory();
  const location = useLocation();

  const [isRegisterError, setRegisterError] = useState(false);
  const [isLoginError, setLoginError] = useState(false);
  const [isProfileError, setProfileError] = useState(false);
  const [isErrorText, setErrorText]  = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);


  const getCurrentUser = () => {
    mainApi
      .getUserInfo()
      .then((userData) => {
        if (userData) {
          setCurrentUser(userData);
          localStorage.setItem('currentUser', JSON.stringify(userData));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    const path = location.pathname;
      auth
        .checkToken()
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            getCurrentUser();
            history.push(path);
          }
        })
        .catch((err) => {
          console.error(err);
        //history.push('/');
        });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = (password, email) => {
    auth
      .authorize(password, email)
      .then((data) => {
        if (data) {
          localStorage.setItem("jwt", data.token);
          setLoggedIn(true);
          getCurrentUser();
          history.push("/movies");
        }
      })
      .catch((err) => {
        setLoginError(true);
        if (err === "Ошибка 401") setErrorText("Возможно вы не зарегистрированы или ввели неверные данные");
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
        if (err === "Ошибка 409") setErrorText("Пользователь с таким e-mail уже существует");
        if (err === "Ошибка 500") setErrorText("Ошибка по умолчанию");
        console.error(err);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setLoggedIn(false);
    setCurrentUser({});
    history.push('/');
  };

  const handleUpdateUserInfo = (newUserData) => {
    const { name, email } = newUserData;
    mainApi.handleUserInfo(name, email)
      .then((data) => {
        setCurrentUser(data);
        getCurrentUser();
        setProfileError(true);
        setErrorText("Данные изменены");
      })
      .catch((err) => {
        setProfileError(true);
        if (err === "Ошибка: 400") setErrorText("Переданы некорректные данные");
        if (err === "Ошибка: 409") setErrorText("Редактирование данных другого пользователя невозможно");
        console.error(err);
      });
  };

  function handleEditMenuClick() {
    setEditMenuOpen(true);
  }

  function closeMenu() {
    setEditMenuOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <HeaderMain />
            <Main />
            <Footer />
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

          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            component={MoviesPage}
            onEditMenu={handleEditMenuClick}
            isOpen={isEditMenuOpen}
            onClose={closeMenu}
          />

          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMoviesPage}
            onEditMenu={handleEditMenuClick}
            isOpen={isEditMenuOpen}
            onClose={closeMenu}
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

          <Route path="*">
            <NotFound history={history} />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;