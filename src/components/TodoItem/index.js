import React, { memo, useContext } from 'react';
import { Link as RouterLink, useHistory, useRouteMatch } from 'react-router-dom';
import propTypes from 'prop-types';
import {
  ListItemText,
  ListItem,
  IconButton,
  ListItemSecondaryAction,
  Link,
} from '@material-ui/core';
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons';
import { DispatchContext } from '../../contexts/todos';
import { removeTask } from '../../actions/actionCreator';
import useStyles from './styles';

const TodoItem = ({ text, id }) => {
  const dispatch = useContext(DispatchContext);
  const { url } = useRouteMatch();
  const history = useHistory();
  const classes = useStyles();
  const listItemTextStyles = classes.listItemText;

  const onRemove = () => dispatch(removeTask(id));
  const onEdit = e => {
    e.preventDefault();
    history.push(`${url}/${id}/edit`);
  };

  return (
    <ListItem className={classes.listItem}>
      <Link component={RouterLink} to={`${url}/${id}`} className={classes.link}>
        <ListItemText className={listItemTextStyles}>{text}</ListItemText>
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete" onClick={onRemove}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="Edit" onClick={onEdit}>
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </Link>
    </ListItem>
  );
};

TodoItem.propTypes = {
  id: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  text: propTypes.string,
  completed: propTypes.bool,
};

TodoItem.defaultProps = {
  text: 'New task',
  completed: false,
};

export default memo(TodoItem);
