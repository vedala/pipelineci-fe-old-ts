import React from 'react';
import LoginButton from './login';
import LogoutButton from './logout';
import SignupButton from './signup';

const Landing = ({ isAuthenticated }) => {
  return (
    <div className="dashboard">
      { !isAuthenticated
        ? <> <LoginButton /> <SignupButton /> </>
        : <LogoutButton />
      }
      <h1>Welcome to PipelineCI</h1>
    </div>
  );
}

export default Landing;
