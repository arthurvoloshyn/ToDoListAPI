import { useEffect, useCallback } from 'react';
import helpers from '../utils/helpers';
import api from '../services/api';
import tasks, { initState } from '../reducer/tasks';
import { fetchInit, fetchSuccess, fetchFailure } from '../actions/actionCreator';
import useLocalStorageReducer from './useLocalStorageReducer';

const useFetchTaskList = () => {
  const [state, dispatch] = useLocalStorageReducer('tasks', initState, tasks);

  const fetchData = useCallback(async () => {
    dispatch(fetchInit());

    try {
      const result = await api.getTasks();
      console.log(result);
      const sortedTaskList = helpers.sortById(result);

      dispatch(fetchSuccess(sortedTaskList));
    } catch {
      dispatch(fetchFailure());
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [state, dispatch, fetchData];
};

export default useFetchTaskList;
