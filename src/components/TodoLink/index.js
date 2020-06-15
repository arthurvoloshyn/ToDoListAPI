import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import propTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from '@material-ui/core';
import useStyles from './styles';

const TodoLink = ({ children, href, color, className, ...attrs }) => {
  const classes = useStyles();
  const linkClasses = classNames(classes.link, className);

  return (
    <Link {...attrs} component={RouterLink} to={href} color={color} className={linkClasses}>
      {children}
    </Link>
  );
};

TodoLink.propTypes = {
  children: propTypes.node.isRequired,
  href: propTypes.string.isRequired,
  color: propTypes.string,
  className: propTypes.string,
};

TodoLink.defaultProps = {
  color: 'inherit',
  className: '',
};

export default TodoLink;
