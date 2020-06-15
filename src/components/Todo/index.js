import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import TodoLink from '../TodoLink';
import TodoButton from '../TodoButton';
import TodoList from '../TodoList';

const Todo = () => {
  const { url } = useRouteMatch();

  return (
    <>
      <TodoLink href={`${url}/new`}>
        <TodoButton>Create a new todo</TodoButton>
      </TodoLink>
      <Paper>
        <TodoList />
      </Paper>
    </>
  );
};

export default Todo;
