import React, { useContext, Fragment } from 'react';
import { List, Divider } from '@material-ui/core';
import { TodosContext } from '../../contexts/todos';
import TodoListItem from '../TodoListItem';

const TodoList = () => {
  const tasks = useContext(TodosContext);
  const tasksLength = tasks.length - 1;

  if (!tasks.length) return null;

  return (
    <List>
      {tasks.map((task, i) => (
        <Fragment key={task.id}>
          <TodoListItem {...task} />
          {i < tasksLength && <Divider />}
        </Fragment>
      ))}
    </List>
  );
};

export default TodoList;
