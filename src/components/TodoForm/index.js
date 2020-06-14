import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Paper, TextField } from '@material-ui/core';
import { getDataById } from '../../utils/helpers';
import useInputState from '../../hooks/useInputState';
import { DispatchContext, TodosContext } from '../../contexts/todos';
import { addTask, editTask } from '../../actions/actionCreator';
import useStyles from './styles';

const TodoForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useContext(DispatchContext);
  const todos = useContext(TodosContext);
  const todo = getDataById(todos, id);
  const [value, handleChange, reset] = useInputState(todo.text);
  const classes = useStyles();
  const taskLabel = id ? 'Edit the todo' : 'Add a new todo';

  const onSubmit = e => {
    e.preventDefault();

    const taskMethod = id ? editTask : addTask;
    const taskId = id || new Date().getTime();

    dispatch(taskMethod(taskId, value));
    reset();
    history.push(`/tasks/${taskId}`);
  };

  return (
    <Paper className={classes.paper}>
      <form onSubmit={onSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          label={taskLabel}
          margin="normal"
          fullWidth
          autoFocus
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
