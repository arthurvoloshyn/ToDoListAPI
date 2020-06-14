import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import propTypes from 'prop-types';
import { Link } from '@material-ui/core';
import useStyles from './styles';

const TodoLink = ({ href, color, children, baseVariant, ...attrs }) => {
  const classes = useStyles();

  if (baseVariant) return <RouterLink {...attrs} to={href} />;

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
  baseVariant: propTypes.bool,
};

TodoLink.defaultProps = {
  color: 'inherit',
  baseVariant: false,
};

export default TodoLink;
