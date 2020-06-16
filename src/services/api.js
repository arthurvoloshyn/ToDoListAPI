import PATHS from '../constants/paths';

const api = {
  getTasks: async () => {
    try {
      const response = await fetch(`${PATHS.BASE_PATH}${PATHS.TASKS_PATH}`);
      return await response.json();
    } catch (e) {
      throw new Error(e);
    }
  },
  removeTask: async id => {
    try {
      const response = await fetch(`${PATHS.BASE_PATH}${PATHS.TASKS_PATH}/${id}`, {
        method: 'DELETE',
      });
      return await response.json();
    } catch (e) {
      throw new Error(e);
    }
  },
  addTask: async (id, text) => {
    try {
      const response = await fetch(`${PATHS.BASE_PATH}${PATHS.TASKS_PATH}`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, text }),
      });
      return await response.json();
    } catch (e) {
      throw new Error(e);
    }
  },
  editTask: async (id, text) => {
    try {
      const response = await fetch(`${PATHS.BASE_PATH}${PATHS.TASKS_PATH}/${id}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, text }),
      });
      return await response.json();
    } catch (e) {
      throw new Error(e);
    }
  },
};

export default api;
