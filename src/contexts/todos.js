import React, { createContext } from 'react';
import propTypes from 'prop-types';

import reducer from '~/reducer/todo.reducer';
import useLocalStorageReducer from '~/reducer/useLocalStorageReduce';

const defaultTodos = [
  { id: 1, task: 'Mow the lawn using goats', completed: false },
  { id: 2, task: 'Release lady bugs into garden', completed: true },
];

export const Todos = createContext();
export const DispatchContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useLocalStorageReducer('todos', defaultTodos, reducer);

  return (
    <Todos.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </Todos.Provider>
  );
};

TodosProvider.propTypes = {
  children: propTypes.node.isRequired,
};
