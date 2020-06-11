import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import ACTION_TYPES from '../../constants/actionTypes';
import useInputState from '../../hooks/useInputState';
import { DispatchContext } from '../../contexts/todos';
import styles from './styles';

const TodoForm = () => {
  const [value, handleChange, reset] = useInputState('');
  const dispatch = useContext(DispatchContext);

  const onSubmit = event => {
    event.preventDefault();
    dispatch({ type: ACTION_TYPES.ADD, task: value });
    reset();
  };

  return (
    <Paper style={styles.paper}>
      <form onSubmit={onSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add new Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
