import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import TodoButton from '../TodoButton';
import TodoList from '../TodoList';

const Todo = () => {
  const { url } = useRouteMatch();

  return (
    <>
      <TodoButton href={`${url}/new`}>Create a new todo</TodoButton>
      <TodoList />
    </>
  );
};

export default Todo;
