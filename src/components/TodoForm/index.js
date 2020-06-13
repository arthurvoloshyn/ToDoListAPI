import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Paper, TextField } from '@material-ui/core';
import ACTION_TYPES from '../../constants/actionTypes';
import useInputState from '../../hooks/useInputState';
import { DispatchContext } from '../../contexts/todos';
import useStyles from './styles';

const TodoForm = () => {
  const history = useHistory();
  const [value, handleChange, reset] = useInputState('');
  const dispatch = useContext(DispatchContext);
  const classes = useStyles();

  const onSubmit = event => {
    event.preventDefault();
    const id = new Date().getTime();
    dispatch({ type: ACTION_TYPES.ADD, task: value, id });
    reset();
    history.push(`/tasks/${id}`);
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
