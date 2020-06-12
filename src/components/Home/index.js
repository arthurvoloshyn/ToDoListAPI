import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Link } from '@material-ui/core';
import useStyles from './styles';

const Home = () => {
  const classes = useStyles();

  return (
    <Link component={RouterLink} to="/tasks" className={classes.link}>
      <Button variant="contained" color="primary" className={classes.button}>
        Go to the task list
      </Button>
    </Link>
  );
};

export default Home;
