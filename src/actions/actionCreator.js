import ACTION_TYPES from '../constants/actionTypes';

export const addTask = (id, text) => ({
  type: ACTION_TYPES.ADD_TASK,
  id,
  text,
});

export const editTask = (id, text) => ({
  type: ACTION_TYPES.EDIT_TASK,
  id,
  text,
});

export const removeTask = id => ({
  type: ACTION_TYPES.REMOVE_TASK,
  id,
});
