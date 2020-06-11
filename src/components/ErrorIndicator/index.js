import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
