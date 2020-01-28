import { MovieService } from '../service/movieService';

export const LOCAL_STORAGE_KEY = 'ilegra-flix-storage';

async function saveOnLocalStorage(data, key = LOCAL_STORAGE_KEY) {
  await localStorage.setItem(key, JSON.stringify(data));
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

  async setData(data, key) {
    await saveOnLocalStorage(data, key);
  },

  async getData() {
    const data = await getFromLocalStorage();
    return data === null ? {} : data;
  },
};
