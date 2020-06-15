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
};

export default api;
