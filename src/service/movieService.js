import request from './request';
import { onlyUnique } from '../utils/sort';
import { repository } from '../repository/repository';

// I know that it is not a good approach, but for simplify the development process
const API_KEY = '2590ac2e9a87fbfe0e649b19ae1b91c2';

function resultToGroups(data) {
  const result = { groups: [] };

  if (!data || !data.results.length) {
    return result;
  }

  const groupNames = data.results
    .map(result => result.media_type)
    .filter(onlyUnique);

  groupNames.map(groupName => {
    return result.groups.push({
      name: groupName,
      movies: data.results.filter(result => result.media_type === groupName),
    });
  });

  return result;
}

export const MovieService = {
  async getMovies() {
    const movies = await request
      .get(`/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then(data => {
        return data;
      })
      .catch(err => {
        throw new Error(err);
      });

    const data = await repository.getData();
    data.movies = movies;
    repository.setData(data);

    return resultToGroups(movies.data);
  },

  async addNewWatched(movieSelected) {
    const data = await repository.getData();
    data.currentUser.watchedMovies.push(movieSelected);
    repository.setData(data);
  },
};
