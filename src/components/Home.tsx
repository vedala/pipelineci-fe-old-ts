import React from 'react';
import LogoutButton from './logout';

function Home() {
  return (
    <div className="home">
      <LogoutButton />
      <h1>PipelineCI Home page</h1>
    </div>
  );
}

export default Home;
