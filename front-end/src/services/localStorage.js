export const localStorageSaveItem = (key, value) => {
  if (typeof value !== 'string') {
    localStorage.setItem(key, JSON.stringify(value));
  }
  localStorage.setItem(key, value);
};

export const getLocalStorageItem = (key) => JSON.parse(localStorage.getItem(key));
