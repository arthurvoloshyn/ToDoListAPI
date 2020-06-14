import { useState } from 'react';

const useInputState = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const reset = () => {
    setValue('');
  };

  return [value, handleChange, reset];
};

export default useInputState;
