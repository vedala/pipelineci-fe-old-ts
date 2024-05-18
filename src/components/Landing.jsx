import React from 'react';
import { Link } from 'react-router-dom';
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
      { isAuthenticated && <Link to="/home">Go To App</Link> }
    </div>
  );
}

export default Landing;
