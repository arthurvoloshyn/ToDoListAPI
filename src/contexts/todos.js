import React, { createContext } from 'react';
import propTypes from 'prop-types';
import tasks from '../reducer/tasks';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

const defaultTasks = [
  { id: 1592065460597, text: 'Mow the lawn using goats' },
  { id: 1592065475243, text: 'Release lady bugs into garden' },
];

export const TasksContext = createContext();
export const DispatchContext = createContext();

export const TasksProvider = ({ children }) => {
  const [taskList, dispatch] = useLocalStorageReducer('tasks', defaultTasks, tasks);

  return (
    <TasksContext.Provider value={taskList}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </TasksContext.Provider>
  );
};

TasksProvider.propTypes = {
  children: propTypes.node.isRequired,
};
