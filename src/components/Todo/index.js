import React from 'react';
import TodoButton from '../TodoButton';
import TodoList from '../TodoList';

const Todo = () => (
  <>
    <TodoButton href="/tasks/new">Create a new todo</TodoButton>
    <TodoList />
  </>
);

export default Todo;
