import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
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
