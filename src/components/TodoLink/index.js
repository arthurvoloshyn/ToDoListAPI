import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import propTypes from 'prop-types';
import { Link } from '@material-ui/core';
import useStyles from './styles';

const TodoLink = ({ href, color, children, defaultVariant, ...attrs }) => {
  const classes = useStyles();

  if (defaultVariant) return <RouterLink {...attrs} to={href} />;

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
  defaultVariant: propTypes.bool,
};

TodoLink.defaultProps = {
  color: 'inherit',
  defaultVariant: false,
};

export default TodoLink;
