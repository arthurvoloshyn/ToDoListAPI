import React, { createContext } from 'react';
import propTypes from 'prop-types';
import useFetchTaskList from '../hooks/useFetchTaskList';
import { initState } from '../reducer/tasks';
import ErrorIndicator from '../components/ErrorIndicator';
import TodoButton from '../components/TodoButton';
import Loader from '../components/Loader';

const defaultDispatch = () => {};

export const TasksContext = createContext(initState.tasks);
export const DispatchContext = createContext(defaultDispatch);

export const TasksProvider = ({ children }) => {
  const [state, dispatch, fetchData] = useFetchTaskList();
  const { tasks, isLoading, isError } = state;

  if (isError) {
    return (
      <ErrorIndicator>
        <TodoButton onClick={fetchData}>Try again</TodoButton>
      </ErrorIndicator>
    );
  }

  if (isLoading) return <Loader />;

  return (
    <TasksContext.Provider value={tasks}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </TasksContext.Provider>
  );
};

TasksProvider.propTypes = {
  children: propTypes.node.isRequired,
};
