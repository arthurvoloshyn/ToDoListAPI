import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Paper, TextField } from '@material-ui/core';
import helpers from '../../utils/helpers';
import api from '../../services/api';
import useInputState from '../../hooks/useInputState';
import useDialog from '../../hooks/useDialog';
import useBreakpoint from '../../hooks/useBreakpoint';
import { DispatchContext, TasksContext } from '../../contexts/todos';
import { addTask, editTask } from '../../actions/actionCreator';
import TodoDialog from '../TodoDialog';
import useStyles from './styles';

const TodoForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useContext(DispatchContext);
  const tasks = useContext(TasksContext);
  const task = helpers.getDataById(tasks, id);
  const [value, handleChange, reset] = useInputState(task.text);
  const [open, handleOpen, handleClose] = useDialog(false);
  const fullScreen = useBreakpoint('sm');
  const classes = useStyles();
  const taskLabel = task.id ? 'Edit the todo' : 'Add a new todo';

  const onSubmit = async e => {
    e.preventDefault();

    const taskAction = task.id ? editTask : addTask;
    const taskId = task.id || `${new Date().getTime()}`;
    const apiMethod = api[taskAction.name];

    try {
      await apiMethod(taskId, value);
      dispatch(taskAction(taskId, value));
      reset();
      history.push(`/tasks/${taskId}`);
    } catch {
      handleOpen();
    }
  };

  return (
    <>
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
      <TodoDialog
        open={open}
        handleClose={handleClose}
        fullScreen={fullScreen}
        title="Something went wrong..."
      >
        Error, please try again later.
      </TodoDialog>
    </>
  );
};

export default TodoForm;
