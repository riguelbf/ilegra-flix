import request from './request';

// I know that it is not a good approach, but for simplify the development process
const API_KEY = '2590ac2e9a87fbfe0e649b19ae1b91c2';

export const MovieService = {
   getMovies() {
    return request
      .get(`/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then(data => data)
      .catch(err => err);
  },
};
