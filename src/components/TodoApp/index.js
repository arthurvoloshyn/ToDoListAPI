import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import { Paper, AppBar, Toolbar, Grid, Fab, Tooltip, Zoom } from '@material-ui/core';
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';
import { TasksProvider } from '../../contexts/todos';
import TodoLink from '../TodoLink';
import useStyles from './styles';

const TodoApp = ({ children }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const classes = useStyles();

  const isTaskLocation = pathname.includes('tasks');

  return (
    <Paper elevation={0} className={classes.paper}>
      <AppBar color="primary" position="static" className={classes.appBar}>
        <Toolbar>
          <TodoLink href="/">ToDo List API</TodoLink>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" className={classes.grid}>
        <Grid item xs={11} md={8} lg={4}>
          <TasksProvider>{children}</TasksProvider>
        </Grid>
      </Grid>
      {isTaskLocation && (
        <Tooltip TransitionComponent={Zoom} title="Go back" aria-label="goBack">
          <Fab color="primary" aria-label="back" className={classes.fab} onClick={history.goBack}>
            <ArrowBackIcon />
          </Fab>
        </Tooltip>
      )}
    </Paper>
  );
};

TodoApp.propTypes = {
  children: propTypes.node.isRequired,
};

export default TodoApp;
