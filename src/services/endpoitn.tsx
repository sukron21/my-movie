const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const Movies = {
  getPopularMovies: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
  getMovieById: `${BASE_URL}/movie/`,
  searchMovies: `${BASE_URL}/search/movie?api_key=${API_KEY}`,
  //   FilterListTable: "/api/sales-performance/leads/filter/list",
};
