import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import useInputState from '../../hooks/useInputState';
import { DispatchContext } from '../../contexts/todos';
import { editTask } from '../../actions/actionCreator';
import useStyles from './styles';

const EditTodoForm = ({ id, text }) => {
  const history = useHistory();
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(text);
  const classes = useStyles();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(editTask(id, value));
    reset();
    history.push(`/tasks/${id}`);
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
  text: propTypes.string,
};

EditTodoForm.defaultProps = {
  text: 'Simple todo',
};

export default EditTodoForm;
