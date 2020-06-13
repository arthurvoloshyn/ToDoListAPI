import React from 'react';
import propTypes from 'prop-types';
import { Grid, CircularProgress } from '@material-ui/core';

const Loader = ({ size, ...attrs }) => (
  <Grid alignContent="center" alignItems="center">
    <CircularProgress {...attrs} size={size} />
  </Grid>
);

Loader.propTypes = {
  size: propTypes.string,
};

Loader.defaultProps = {
  size: 100,
};

export default Loader;
