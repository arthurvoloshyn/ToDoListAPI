import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import TodoButton from '../TodoButton';
import TodoList from '../TodoList';

const Todo = () => {
  const { url } = useRouteMatch();

  return (
    <>
      <TodoButton component={Link} to={`${url}/new`}>
        Create a new todo
      </TodoButton>
      <Paper>
        <TodoList />
      </Paper>
    </>
  );
};

export default Todo;
