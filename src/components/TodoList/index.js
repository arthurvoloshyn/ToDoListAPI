import React, { useContext, Fragment } from 'react';
import { Paper, List, Divider } from '@material-ui/core';
import { TodosContext } from '../../contexts/todos';
import TodoItem from '../TodoItem';

const TodoList = () => {
  const todos = useContext(TodosContext);
  const todosLength = todos.length - 1;

  if (!todos.length) return null;

  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <Fragment key={todo.id}>
            <TodoItem {...todo} />
            {i < todosLength && <Divider />}
          </Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
