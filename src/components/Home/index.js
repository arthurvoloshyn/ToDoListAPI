import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, Button } from '@material-ui/core';

const Home = () => (
  <Paper>
    <Button variant="contained" color="primary">
      <Link to="/tasks">Go to the task list</Link>
    </Button>
  </Paper>
);

export default Home;
