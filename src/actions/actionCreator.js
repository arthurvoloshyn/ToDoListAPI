import ACTION_TYPES from '../constants/actionTypes';

export const addTask = (id, task) => ({
  type: ACTION_TYPES.ADD,
  id,
  task,
});

export const editTask = (id, task) => ({
  type: ACTION_TYPES.EDIT,
  id,
  task,
});

export const removeTask = id => ({
  type: ACTION_TYPES.REMOVE,
  id,
});

export const toggleTask = id => ({
  type: ACTION_TYPES.TOGGLE,
  id,
});
