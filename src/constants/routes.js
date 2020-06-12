import Home from '../components/Home';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import Todo from '../components/TodoItem';
import EditTodoForm from '../components/EditTodoForm';
import NoMatch from '../components/NoMatch';

const ROUTES = [
  {
    id: 'Home',
    exact: true,
    path: '/',
    component: Home,
  },
  {
    id: 'Tasks',
    exact: true,
    path: '/tasks',
    component: TodoList,
  },
  {
    id: 'New',
    exact: false,
    path: '/new',
    component: TodoForm,
  },
  {
    id: 'Task',
    exact: true,
    path: '/tasks/:id',
    component: Todo,
  },
  {
    id: 'Edit',
    exact: false,
    path: '/tasks/:id/edit',
    component: EditTodoForm,
  },
  {
    id: 'NoMatch',
    exact: false,
    path: '*',
    component: NoMatch,
  },
];

export default ROUTES;
