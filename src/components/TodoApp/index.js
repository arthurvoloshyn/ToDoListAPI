import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import { Paper, AppBar, Toolbar, Grid, Fab } from '@material-ui/core';
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';
import { TasksProvider } from '../../contexts/tasks';
import TodoLink from '../TodoLink';
import useStyles from './styles';

const TodoApp = ({ children }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const classes = useStyles();

  const isTaskLocation = pathname.includes('tasks');

  return (
    <Paper className={classes.paper} elevation={0}>
      <AppBar className={classes.appBar} color="primary" position="static">
        <Toolbar>
          <TodoLink href="/">ToDo List API</TodoLink>
        </Toolbar>
      </AppBar>
      <Grid className={classes.grid} justify="center" container>
        <Grid xs={11} md={8} lg={4} item>
          <TasksProvider>{children}</TasksProvider>
        </Grid>
      </Grid>
      {isTaskLocation && (
        <Fab className={classes.fab} onClick={history.goBack} color="primary" aria-label="back">
          <ArrowBackIcon />
        </Fab>
      )}
    </Paper>
  );
};

TodoApp.propTypes = {
  children: propTypes.node.isRequired,
};

export default TodoApp;
