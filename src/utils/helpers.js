const helpers = {
  getDataById: (dataArray, id) => dataArray.filter(data => data.id === id)[0] || {},

  sortById: data => data.sort((a, b) => a.id - b.id),

  addToLocalStorage: (label, data) => localStorage.setItem(label, JSON.stringify(data)),
  getFromLocalStorage: label => localStorage.getItem(label),
};

export default helpers;
