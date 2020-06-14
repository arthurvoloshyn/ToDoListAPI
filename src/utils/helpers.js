export const getDataById = (dataArray, id) => dataArray.filter(data => data.id === +id)[0] || {};
