import React, { memo, useContext } from 'react';
import propTypes from 'prop-types';
import {
  ListItemText,
  ListItem,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from '@material-ui/core';
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons';
import { DispatchContext } from '../../contexts/todos';
import useToggle from '../../hooks/useToggle';
import { toggleTask, removeTask } from '../../actions/actionCreator';
import EditTodoForm from '../EditTodoForm';
import useStyles from './styles';

const TodoItem = ({ task, completed, id }) => {
  const [isEditing, toggle] = useToggle(false);
  const dispatch = useContext(DispatchContext);
  const classes = useStyles(completed);
  const listItemTextStyles = classes.listItemText;

  const onToggle = () => dispatch(toggleTask(id));
  const onRemove = () => dispatch(removeTask(id));

  return (
    <ListItem className={classes.listItem}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleEditForm={toggle} />
      ) : (
        <>
          <Checkbox checked={completed} onClick={onToggle} />
          <ListItemText className={listItemTextStyles}>{task}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={onRemove}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

TodoItem.propTypes = {
  id: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  task: propTypes.string,
  completed: propTypes.bool,
};

TodoItem.defaultProps = {
  task: 'New task',
  completed: false,
};

export default memo(TodoItem);
