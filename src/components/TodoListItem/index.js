import React, { memo } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import propTypes from 'prop-types';
import { ListItemText, ListItem } from '@material-ui/core';
import useStyles from './styles';

const TodoListItem = ({ text, id }) => {
  const { url } = useRouteMatch();
  const classes = useStyles();

  return (
    <ListItem className={classes.listItem} component={Link} to={`${url}/${id}`} button>
      <ListItemText className={classes.listItemText}>{text}</ListItemText>
    </ListItem>
  );
};

TodoListItem.propTypes = {
  id: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  text: propTypes.string,
};

TodoListItem.defaultProps = {
  text: 'Simple todo',
};

export default memo(TodoListItem);
