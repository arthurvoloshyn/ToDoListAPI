import React, { createContext } from 'react';
import propTypes from 'prop-types';
import tasks from '../reducer/tasks';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

const defaultTodos = [
  { id: 1592065460597, text: 'Mow the lawn using goats' },
  { id: 1592065475243, text: 'Release lady bugs into garden' },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useLocalStorageReducer('todos', defaultTodos, tasks);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </TodosContext.Provider>
  );
};

TodosProvider.propTypes = {
  children: propTypes.node.isRequired,
};
