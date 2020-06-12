import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core';
import ROUTES from '../../constants/routes';
import { TodosProvider } from '../../contexts/todos';
import styles from './styles';

const App = () => (
  <Router>
    <Paper elevation={0} style={styles.paper}>
      <AppBar color="primary" position="static" style={styles.appBar}>
        <Toolbar>
          <Typography color="inherit"> ToDo List API </Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={styles.grid}>
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

export default App;
