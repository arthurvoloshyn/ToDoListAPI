import React from 'react';
import ToDoButton from '../ToDoButton';
import TodoList from '../TodoList';

const Todo = () => (
  <>
    <ToDoButton href="/new" color="secondary">
      Create a new todo
    </ToDoButton>
    <TodoList />
  </>
);

export default Todo;
