export const ROUTERS = [
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
    component: Tasks,
  },
  {
    id: 'Task',
    exact: false,
    path: '/tasks/:id',
    component: Task,
  },
  {
    id: 'NoMatch',
    exact: false,
    path: '*',
    component: NoMatch,
  },
];

export default ROUTERS;
