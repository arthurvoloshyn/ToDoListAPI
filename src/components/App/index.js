import React from 'react';
import { Link as RouterLink, useLocation, useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import { Paper, AppBar, Toolbar, Grid, Link, Fab } from '@material-ui/core';
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';
import { TodosProvider } from '../../contexts/todos';
import useStyles from './styles';

const App = ({ children }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const classes = useStyles();

  const isTaskLocation = pathname.includes('tasks');

  return (
    <Paper elevation={0} className={classes.paper}>
      <AppBar color="primary" position="static" className={classes.appBar}>
        <Toolbar>
          <Link component={RouterLink} to="/" color="inherit" className={classes.link}>
            ToDo List API
          </Link>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" className={classes.grid}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>{children}</TodosProvider>
        </Grid>
      </Grid>
      {isTaskLocation && (
        <Fab color="primary" aria-label="back" className={classes.fab} onClick={history.goBack}>
          <ArrowBackIcon />
        </Fab>
      )}
    </Paper>
  );
};

App.propTypes = {
  children: propTypes.node.isRequired,
};

export default App;
