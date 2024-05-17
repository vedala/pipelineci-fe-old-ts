import React from 'react';
import LogoutButton from './logout';

function Dashboard() {
  return (
    <div className="dashboard">
      <LogoutButton />
      <h1>PipelineCI Home page</h1>
    </div>
  );
}

export default Dashboard;
