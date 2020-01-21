import { MovieService } from '../service/movieService';

export const LOCAL_STORAGE_KEY = 'ilegra-flix-storage';

async function saveOnLocalStorage(data) {
  await localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}

async function getFromLocalStorage() {
  // eslint-disable-next-line no-return-await
  return await JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
}

export const repository = {
  async load() {
    const movieList = await MovieService.getMovies();
    saveOnLocalStorage(movieList);
  },

  async getData() {
    const movieList = await getFromLocalStorage();
    return movieList;
  },
};
