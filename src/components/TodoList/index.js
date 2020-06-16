import React, { useContext } from 'react';
import { List, Divider } from '@material-ui/core';
import { TasksContext } from '../../contexts/tasks';
import TodoListItem from '../TodoListItem';

const TodoList = () => {
  const tasks = useContext(TasksContext);
  const tasksLength = tasks.length - 1;

  if (!tasks.length) return null;

  return (
    <List>
      {tasks.map((task, i) => (
        <li key={task.id}>
          <TodoListItem {...task} />
          {i < tasksLength && <Divider />}
        </li>
      ))}
    </List>
  );
};

export default TodoList;
