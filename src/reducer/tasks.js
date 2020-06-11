import ACTION_TYPES from '../constants/actionTypes';

const tasks = (state, { type, task, id }) => {
  switch (type) {
    case ACTION_TYPES.ADD:
      return [...state, { id, task, completed: false }];
    case ACTION_TYPES.REMOVE:
      return state.filter(todo => todo.id !== id);
    case ACTION_TYPES.TOGGLE:
      return state.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    case ACTION_TYPES.EDIT:
      return state.map(todo => (todo.id === id ? { ...todo, task } : todo));
    default:
      return state;
  }
};

export default tasks;
