export const LOCAL_STORAGE_KEY = 'ilegra-flix-storage';

async function saveOnLocalStorage(data, key = LOCAL_STORAGE_KEY) {
  await localStorage.setItem(key, JSON.stringify(data));
}

async function getFromLocalStorage() {
  // eslint-disable-next-line no-return-await
  return await JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
}

export const repository = {
  async setData(data, key) {
    await saveOnLocalStorage(data, key);
  },

  async getData() {
    debugger;
    const data = await getFromLocalStorage();
    return data === null ? {} : data;
  },
};
