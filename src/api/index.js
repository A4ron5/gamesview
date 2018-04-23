import axios from 'axios'

const URL = 'https://api.themoviedb.org/3';
const KEY = '8c9f0b25d628dc3a96bcc112d2c82e63';

const searchMovies = (query) => {
  const params = {
    query,
    api_key: KEY,
  };

  return axios.get(`${URL}/search/movie`, { params });
}

const discoverMovies = () => {
  const params = {
    api_key: KEY,
  }

  return axios.get(`${URL}/discover/movie`, { params })
}

export default {
  searchMovies,
  discoverMovies
}