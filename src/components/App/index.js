import React from 'react';
import { Switch, Route, Link as RouterLink, useLocation, useHistory } from 'react-router-dom';
import { Paper, AppBar, Toolbar, Grid, Link, Fab } from '@material-ui/core';
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';
import ROUTES from '../../constants/routes';
import { TodosProvider } from '../../contexts/todos';
import useStyles from './styles';

const App = () => {
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
          <TodosProvider>
            <Switch>
              {ROUTES.map(({ id, exact, path, component: Component }) => (
                <Route key={id} exact={exact} path={path}>
                  <Component />
                </Route>
              ))}
            </Switch>
          </TodosProvider>
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

export default App;
