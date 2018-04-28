import axios from 'axios'

const URL = 'https://api.themoviedb.org/3';
const API_KEY = '8c9f0b25d628dc3a96bcc112d2c82e63';

const discoverMovies = () => {
  const params = {
    api_key: API_KEY,
  }

  return axios.get(`${URL}/discover/movie`, { params });
}

const searchMovies = (query) => {
  const params = {
    query,
    api_key: API_KEY,
  };

  return axios.get(`${URL}/search/movie`, { params });
}

const fetchMovie = (id) => {
  const params = {
    api_key: API_KEY,
  }

  return axios.get(`${URL}/movie/${id}`, { params });
}

export default {
  searchMovies,
  discoverMovies,
  fetchMovie
}