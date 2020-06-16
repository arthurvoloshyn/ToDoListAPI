import Home from '../components/Home';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';
import NoMatch from '../components/NoMatch';

const ROUTES = [
  {
    id: 'home',
    exact: true,
    path: '/',
    component: Home,
  },
  {
    id: 'tasks',
    exact: true,
    path: '/tasks',
    component: Todo,
  },
  {
    id: 'newTask',
    path: '/tasks/new',
    component: TodoForm,
  },
  {
    id: 'task',
    exact: true,
    path: '/tasks/:id',
    component: TodoItem,
  },
  {
    id: 'editTask',
    path: '/tasks/:id/edit',
    component: TodoForm,
  },
  {
    id: 'NoMatch',
    component: NoMatch,
  },
];

export default ROUTES;
