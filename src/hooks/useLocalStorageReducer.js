import { useReducer, useEffect } from 'react';
import helpers from '../utils/helpers';

const useLocalStorageReducer = (key, defaultVal, reducer) => {
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let val;

    try {
      const data = helpers.getFromLocalStorage(key) || `${defaultVal}`;
      val = JSON.parse(data);
    } catch {
      val = defaultVal;
    }

    return val;
  });

  useEffect(() => {
    helpers.addToLocalStorage(key, state);
  }, [key, state]);

  return [state, dispatch];
};

export default useLocalStorageReducer;
