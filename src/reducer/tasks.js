import ACTION_TYPES from '../constants/actionTypes';

const tasks = (state, { type, text, id }) => {
  switch (type) {
    case ACTION_TYPES.ADD_TASK:
      return [...state, { id, text }];
    case ACTION_TYPES.REMOVE_TASK:
      return state.filter(todo => todo.id !== id);
    case ACTION_TYPES.EDIT_TASK:
      return state.map(todo => (todo.id === id ? { ...todo, text } : todo));
    default:
      return state;
  }
};

export default tasks;
