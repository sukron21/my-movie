// src/services/movieService.js
import axios from "axios";
import { API_KEY, BASE_URL } from "../../helper/env";

export const movieService = {
  getPopularMovies: (page: number) =>
    axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`),

  getNowPlayingMovies: (page: number) =>
    axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&page=${page}`),

  getTopRaterMovies: (page: number) =>
    axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`),

  getUpCamingMovies: (page: number) =>
    axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=${page}`),

  getMovieById: (id: number) =>
    axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`),

  searchMovies: (page: number, query: string) =>
    axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&page=${page}&query=${query}`
    ),
};
