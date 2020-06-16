import { useEffect, useCallback } from 'react';
import LOCAL_STORAGE from '../constants/localStorage';
import helpers from '../utils/helpers';
import api from '../services/api';
import useLocalStorageReducer from './useLocalStorageReducer';
import tasks, { initState } from '../reducer/tasks';
import { fetchInit, fetchSuccess, fetchFailure } from '../actions/actionCreator';

const useFetchTaskList = () => {
  const [state, dispatch] = useLocalStorageReducer(LOCAL_STORAGE.KEY, initState, tasks);

  const fetchData = useCallback(async () => {
    dispatch(fetchInit());

    try {
      const result = await api.getTasks();
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
