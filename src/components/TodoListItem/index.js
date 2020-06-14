import React, { memo } from 'react';
import { useRouteMatch } from 'react-router-dom';
import propTypes from 'prop-types';
import { ListItemText, ListItem } from '@material-ui/core';
import TodoLink from '../TodoLink';
import useStyles from './styles';

const TodoListItem = ({ text, id }) => {
  const { url } = useRouteMatch();
  const classes = useStyles();

  return (
    <ListItem className={classes.listItem} component={TodoLink} href={`${url}/${id}`}>
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
