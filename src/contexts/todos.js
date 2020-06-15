import React, { createContext } from 'react';
import propTypes from 'prop-types';
import { initState } from '../reducer/tasks';
import useFetchTaskList from '../hooks/useFetchTaskList';

const defaultDispatch = () => {};

export const TasksContext = createContext(initState);
export const DispatchContext = createContext(defaultDispatch);

export const TasksProvider = ({ children }) => {
  const [state, dispatch] = useFetchTaskList();

  return (
    <TasksContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </TasksContext.Provider>
  );
};

TasksProvider.propTypes = {
  children: propTypes.node.isRequired,
};
