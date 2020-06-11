import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = () => (
  <Grid alignContent="center" alignItems="center">
    <CircularProgress size={100} />
  </Grid>
);

export default Loader;
