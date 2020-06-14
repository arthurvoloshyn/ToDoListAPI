import React from 'react';
import propTypes from 'prop-types';
import { Grid, CircularProgress } from '@material-ui/core';

const Loader = ({ size, color, ...attrs }) => (
  <Grid container justify="center">
    <CircularProgress {...attrs} size={size} color={color} />
  </Grid>
);

Loader.propTypes = {
  size: propTypes.string,
  color: propTypes.string,
};

Loader.defaultProps = {
  size: 100,
  color: 'primary',
};

export default Loader;
