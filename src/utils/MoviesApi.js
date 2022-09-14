class MoviesApi {
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

  getAllMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }
}

const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default moviesApi;