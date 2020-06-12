import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import ACTION_TYPES from '../../constants/actionTypes';
import useInputState from '../../hooks/useInputState';
import { DispatchContext } from '../../contexts/todos';
import useStyles from './styles';

const EditTodoForm = ({ id, task, toggleEditForm }) => {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(task);
  const classes = useStyles();

  const onSubmit = event => {
    event.preventDefault();
    dispatch({ type: ACTION_TYPES.EDIT, id, task: value });
    reset();
    toggleEditForm();
  };

  return (
    <div className={classes.container}>
      <form onSubmit={onSubmit} className={classes.form}>
        <TextField margin="normal" value={value} onChange={handleChange} fullWidth autoFocus />
      </form>
    </div>
  );
};

EditTodoForm.propTypes = {
  id: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  task: propTypes.string,
  toggleEditForm: propTypes.func,
};

EditTodoForm.defaultProps = {
  task: 'New task',
  toggleEditForm: () => {},
};

export default EditTodoForm;
