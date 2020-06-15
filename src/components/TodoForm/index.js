import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Paper, TextField } from '@material-ui/core';
import helpers from '../../utils/helpers';
import useInputState from '../../hooks/useInputState';
import { DispatchContext, TasksContext } from '../../contexts/todos';
import { addTask, editTask } from '../../actions/actionCreator';
import useStyles from './styles';

const TodoForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useContext(DispatchContext);
  const { tasks } = useContext(TasksContext);
  const task = helpers.getDataById(tasks, id);
  const [value, handleChange, reset] = useInputState(task.text);
  const classes = useStyles();
  const taskLabel = task.id ? 'Edit the todo' : 'Add a new todo';

  const onSubmit = e => {
    e.preventDefault();

    const taskAction = task.id ? editTask : addTask;
    const taskId = task.id || new Date().getTime();

    dispatch(taskAction(taskId, value));
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
