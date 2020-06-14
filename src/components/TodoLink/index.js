import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import propTypes from 'prop-types';
import { Link } from '@material-ui/core';
import useStyles from './styles';

const TodoLink = ({ href, color, children, ...attrs }) => {
  const classes = useStyles();

  return (
    <Link {...attrs} component={RouterLink} to={href} color={color} className={classes.link}>
      {children}
    </Link>
  );
};

TodoLink.propTypes = {
  children: propTypes.node.isRequired,
  href: propTypes.string.isRequired,
  color: propTypes.string,
};

TodoLink.defaultProps = {
  color: 'inherit',
};

export default TodoLink;
