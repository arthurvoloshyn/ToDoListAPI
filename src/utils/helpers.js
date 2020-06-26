const { setItem, getItem } = window.localStorage;

const helpers = {
  getDataById: (dataArray, id) => dataArray.filter(data => data.id === id)[0] || {},

  sortById: (data = []) => data.sort((a, b) => a.id - b.id),

  addToLocalStorage: (label, data) => setItem(label, JSON.stringify(data)),
  getFromLocalStorage: label => getItem(label),

  getApiInstance: async (method, url, data) => {
    let init = { method };
    const initWithData = {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    init = data ? { ...init, ...initWithData } : init;

    try {
      const response = await fetch(url, init);
      return await response.json();
    } catch (e) {
      throw new Error(e);
    }
  },
};

export default helpers;
