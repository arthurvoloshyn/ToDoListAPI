import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import propTypes from 'prop-types';
import { Button, Link } from '@material-ui/core';
import useStyles from './styles';

const ToDoButton = ({ href, color, children }) => {
  const classes = useStyles();

  return (
    <Link component={RouterLink} to={href} className={classes.link}>
      <Button variant="contained" color={color} className={classes.button}>
        {children}
      </Button>
    </Link>
  );
};

ToDoButton.propTypes = {
  href: propTypes.string.isRequired,
  color: propTypes.string,
  children: propTypes.node,
};

ToDoButton.defaultProps = {
  color: 'primary',
  children: null,
};

export default ToDoButton;
