import React, { memo, useContext } from 'react';
import propTypes from 'prop-types';
import { ListItemText, ListItem, IconButton, ListItemSecondaryAction } from '@material-ui/core';
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons';
import { DispatchContext } from '../../contexts/todos';
import useToggle from '../../hooks/useToggle';
import { removeTask } from '../../actions/actionCreator';
import EditTodoForm from '../EditTodoForm';
import useStyles from './styles';

const TodoItem = ({ text, id }) => {
  const [isEditing, toggle] = useToggle(false);
  const dispatch = useContext(DispatchContext);
  const classes = useStyles();
  const listItemTextStyles = classes.listItemText;

  const onRemove = () => dispatch(removeTask(id));

  return (
    <ListItem className={classes.listItem}>
      {isEditing ? (
        <EditTodoForm id={id} text={text} toggleEditForm={toggle} />
      ) : (
        <>
          <ListItemText className={listItemTextStyles}>{text}</ListItemText>
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
  text: propTypes.string,
  completed: propTypes.bool,
};

TodoItem.defaultProps = {
  text: 'New task',
  completed: false,
};

export default memo(TodoItem);
