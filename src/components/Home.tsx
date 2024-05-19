import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './logout';

function Home() {
  return (
    <div className="home">
      <LogoutButton />
      <h1>Organizations</h1>
      <Link to="/create-organization">Create Organization</Link>
    </div>
  );
}

export default Home;
