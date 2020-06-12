import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

const Loader = () => (
  <Grid alignContent="center" alignItems="center">
    <CircularProgress size={100} />
  </Grid>
);

export default Loader;
