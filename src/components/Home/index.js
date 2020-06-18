import React from 'react';
import { Link } from 'react-router-dom';
import TodoButton from '../TodoButton';

const Home = () => (
  <TodoButton component={Link} to="/tasks">
    Go to the todo list
  </TodoButton>
);

export default Home;
