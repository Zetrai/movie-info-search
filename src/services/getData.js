import axios from 'axios';

const API_KEY_MOVIE_DB = '9bed4127fd872ab3b4f3c43a99ee8e99';
const API_KEY_OMDB = '5b5b3312';
const baseUrl_OMDB = `https://www.omdbapi.com/?apikey=${API_KEY_OMDB}`;

export const getMovieDataByName = async (_query) => {
  return await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY_MOVIE_DB}&query=${_query}`,
  );
};

export const getMovieDetails = async (_id) => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${_id}?api_key=${API_KEY_MOVIE_DB}`,
  );
};

export const getOMDBDetails = async (_id) => {
  return await axios.get(`${baseUrl_OMDB}&i=${_id}`);
};
