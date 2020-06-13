import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import propTypes from 'prop-types';
import { Button, Link } from '@material-ui/core';
import useStyles from './styles';

const TodoButton = ({ href, color, children }) => {
  const classes = useStyles();

  return (
    <Link component={RouterLink} to={href} className={classes.link}>
      <Button variant="contained" color={color} className={classes.button}>
        {children}
      </Button>
    </Link>
  );
};

TodoButton.propTypes = {
  href: propTypes.string.isRequired,
  color: propTypes.string,
  children: propTypes.node,
};

TodoButton.defaultProps = {
  color: 'primary',
  children: null,
};

export default TodoButton;
