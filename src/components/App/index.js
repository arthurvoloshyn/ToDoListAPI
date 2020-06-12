import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core';
import ROUTES from '../../constants/routes';
import { TodosProvider } from '../../contexts/todos';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <Paper elevation={0} className={classes.paper}>
        <AppBar color="primary" position="static" className={classes.appBar}>
          <Toolbar>
            <Typography color="inherit"> ToDo List API </Typography>
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
      </Paper>
    </Router>
  );
};

export default App;
