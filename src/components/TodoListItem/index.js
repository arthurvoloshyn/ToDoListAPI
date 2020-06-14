import React, { memo, useContext } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import propTypes from 'prop-types';
import { ListItemText, ListItem, IconButton, ListItemSecondaryAction } from '@material-ui/core';
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons';
import { DispatchContext } from '../../contexts/todos';
import { removeTask } from '../../actions/actionCreator';
import useStyles from './styles';

const TodoListItem = ({ text, id }) => {
  const dispatch = useContext(DispatchContext);
  const { url } = useRouteMatch();
  const history = useHistory();
  const classes = useStyles();

  const onRemove = e => {
    e.preventDefault();
    dispatch(removeTask(id));
  };

  const onEdit = e => {
    e.preventDefault();
    history.push(`${url}/${id}/edit`);
  };

  return (
    <ListItem className={classes.listItem} component={Link} to={`${url}/${id}`}>
      <ListItemText className={classes.listItemText}>{text}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete" onClick={onRemove}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="Edit" onClick={onEdit}>
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
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
