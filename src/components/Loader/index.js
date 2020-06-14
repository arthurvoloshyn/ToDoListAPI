import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from './styles';

const Loader = ({ size, color, className, ...attrs }) => {
  const classes = useStyles(size);
  const loaderClasses = classNames(className, classes.loader);

  return (
    <Grid container justify="center" alignItems="center" className={loaderClasses}>
      <CircularProgress {...attrs} size={size} color={color} />
    </Grid>
  );
};

Loader.propTypes = {
  size: propTypes.number,
  color: propTypes.string,
  className: propTypes.string,
};

Loader.defaultProps = {
  size: 100,
  color: 'primary',
  className: '',
};

export default Loader;
