import { BASE_URL } from "./auth";
const MOVIE_SERVER = "https://api.nomoreparties.co/";

class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo(token) {
    return fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => this._checkResponse(res));
  }

  handleUserInfo(name, email) {
    return fetch(`${BASE_URL}/users/me`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then((res) => this._checkResponse(res));
  }

  getSavedMovies(token) {
    return fetch(`${BASE_URL}/movies`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => this._checkResponse(res));
  }

  deleteSavedMovies(movieId) {
    return fetch(`${BASE_URL}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => this._checkResponse(res));
  }

  addSavedMovies(data) {
    return fetch(`${BASE_URL}/movies`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        country: data.country || "unknown",
        director: data.director || "unknown",
        duration: data.duration || "Nodata",
        year: data.year || "unknown",
        description: data.description || "Nodescription",
        image: MOVIE_SERVER + data.image.url,
        trailerLink: data.trailerLink || MOVIE_SERVER + data.image.url,
        thumbnail: MOVIE_SERVER + data.image.formats.thumbnail.url || "Noimage",
        movieId: data.movieId || "Nodata",
        nameRU: data.nameRU || data.nameEN,
        nameEN: data.nameEN || data.nameRU,
      }),
    }).then((res) => this._checkResponse(res));
  }
}

const mainApi = new MainApi({
  baseUrl: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default mainApi;
