import React, { useContext } from 'react';
import { useHistory, useRouteMatch, useParams } from 'react-router-dom';
import { Paper, Typography, Box, IconButton, Container, Zoom, Tooltip } from '@material-ui/core';
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons';
import BREAKPOINTS from '../../constants/breakpoints';
import helpers from '../../utils/helpers';
import api from '../../services/api';
import useDialog from '../../hooks/useDialog';
import useBreakpoint from '../../hooks/useBreakpoint';
import { DispatchContext, TasksContext } from '../../contexts/tasks';
import { removeTask } from '../../actions/actionCreator';
import TodoLink from '../TodoLink';
import TodoButton from '../TodoButton';
import TodoDialog from '../TodoDialog';
import useStyles from './styles';

const TodoListItem = () => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useContext(DispatchContext);
  const tasks = useContext(TasksContext);
  const [open, handleOpen, handleClose] = useDialog(false);
  const fullScreen = useBreakpoint(BREAKPOINTS.SMALL);
  const classes = useStyles();

  const task = helpers.getDataById(tasks, id);

  const onRemove = async e => {
    e.preventDefault();

    try {
      const response = await api.deleteTask(task.id);
      const { id } = response;

      dispatch(removeTask(id));
      history.push('/tasks');
    } catch {
      handleOpen();
    }
  };

  const onEdit = e => {
    e.preventDefault();
    history.push(`${url}/edit`);
  };

  return (
    <>
      <TodoLink href="/tasks">
        <TodoButton>Go back to the todo list</TodoButton>
      </TodoLink>
      <Paper>
        <Container className={classes.container}>
          <Box className={classes.textBox}>
            <Typography className={classes.typography} component="span">
              {task.text}
            </Typography>
          </Box>
          <Box className={classes.secondaryAction}>
            <Tooltip TransitionComponent={Zoom} title="Delete" aria-label="delete" arrow>
              <IconButton onClick={onRemove}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} title="Edit" aria-label="edit" arrow>
              <IconButton onClick={onEdit}>
                <EditIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Container>
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

export default TodoListItem;
