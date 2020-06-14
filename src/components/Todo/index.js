import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import TodoButton from '../TodoButton';
import TodoList from '../TodoList';

const Todo = () => {
  const { url } = useRouteMatch();

  return (
    <>
      <TodoButton href={`${url}/new`}>Create a new todo</TodoButton>
      <Paper>
        <TodoList />
      </Paper>
    </>
  );
};

export default Todo;
