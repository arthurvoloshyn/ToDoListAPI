import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';

const ErrorIndicator = ({ children }) => (
  <Paper>
    <Typography color="inherit"> Something went wrong! </Typography>
    {children}
  </Paper>
);

ErrorIndicator.propTypes = {
  children: PropTypes.node,
};

ErrorIndicator.defaultProps = {
  children: null,
};

export default ErrorIndicator;
