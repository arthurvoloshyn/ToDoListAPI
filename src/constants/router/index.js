export const ROUTERS = [
  {
    id: 'Home',
    path: '/',
    component: Home,
    exact: true,
  },
  {
    id: 'Tasks',
    path: '/tasks',
    component: Tasks,
    exact: true,
  },
  {
    id: 'Task',
    path: '/tasks/:id',
    component: Task,
    exact: false,
  },
  {
    id: 'NoMatch',
    path: '*',
    component: NoMatch,
    exact: false,
  },
];

export default ROUTERS;
