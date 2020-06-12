import React, { useContext } from 'react';
import { Paper, TextField } from '@material-ui/core';
import ACTION_TYPES from '../../constants/actionTypes';
import useInputState from '../../hooks/useInputState';
import { DispatchContext } from '../../contexts/todos';
import useStyles from './styles';

const TodoForm = () => {
  const [value, handleChange, reset] = useInputState('');
  const dispatch = useContext(DispatchContext);
  const classes = useStyles();

  const onSubmit = event => {
    event.preventDefault();
    dispatch({ type: ACTION_TYPES.ADD, task: value, id: new Date().getTime() });
    reset();
  };

  return (
    <Paper className={classes.paper}>
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