import PATHS from '../constants/paths';
import helpers from '../utils/helpers';

const api = {
  getTasks: () => helpers.getApiInstance('GET', `${PATHS.BASE_PATH}${PATHS.TASKS_PATH}`),
  removeTask: id => helpers.getApiInstance('DELETE', `${PATHS.BASE_PATH}${PATHS.TASKS_PATH}/${id}`),
  addTask: (_, text) =>
    helpers.getApiInstance('POST', `${PATHS.BASE_PATH}${PATHS.TASKS_PATH}`, { text }),
  editTask: (id, text) =>
    helpers.getApiInstance('PUT', `${PATHS.BASE_PATH}${PATHS.TASKS_PATH}/${id}`, { text }),
};

export default api;
