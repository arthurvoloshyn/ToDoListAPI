import React from 'react';
import TodoLink from '../TodoLink';
import TodoButton from '../TodoButton';

const Home = () => (
  <TodoLink href="/tasks">
    <TodoButton>Go to the todo list</TodoButton>
  </TodoLink>
);

export default Home;
