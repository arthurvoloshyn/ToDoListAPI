import Home from '../components/Home';
import NoMatch from '../components/NoMatch';
import TodoForm from '../components/TodoForm';
import EditTodoForm from '../components/EditTodoForm';
import Todo from '../components/Todo';

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
    component: Todo,
  },
  {
    id: 'New',
    exact: false,
    path: '/new',
    component: TodoForm,
  },
  {
    id: 'Task',
    exact: false,
    path: '/tasks/:id',
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
