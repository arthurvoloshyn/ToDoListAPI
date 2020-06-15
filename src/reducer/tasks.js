import ACTION_TYPES from '../constants/actionTypes';

export const initState = {
  isLoading: true,
  isError: false,
  tasks: [],
};

const tasks = (state = initState, { type, tasks, text, id }) => {
  switch (type) {
    case ACTION_TYPES.FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        tasks,
      };
    case ACTION_TYPES.FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case ACTION_TYPES.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { id, text }],
      };
    case ACTION_TYPES.REMOVE_TASK:
      return {
        ...state,
        tasks: [...state.tasks].filter(task => task.id !== id),
      };
    case ACTION_TYPES.EDIT_TASK:
      return {
        ...state,
        tasks: [...state.tasks].map(task => (task.id === id ? { ...task, text } : task)),
      };
    default:
      return state;
  }
};

export default tasks;
