import { http } from './api';
import apiSettings from './settings';

const { BASE_URL, API_KEY } = apiSettings;

export const fetchMovies = (page = 1) => {
  return http.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`
  );
};
