import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import useStyles from './styles';

const ErrorIndicator = ({ children }) => {
  const withChildren = !!children;
  const classes = useStyles(withChildren);

  return (
    <Paper className={classes.paper}>
      <Typography color="inherit" align="center">
        Something went wrong!
      </Typography>
      {children}
    </Paper>
  );
};

ErrorIndicator.propTypes = {
  children: PropTypes.node,
};

ErrorIndicator.defaultProps = {
  children: null,
};

export default ErrorIndicator;
