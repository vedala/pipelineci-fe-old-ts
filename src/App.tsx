import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import PageNotFound from './components/PageNotFound';
import LoginButton from './components/login';
import LogoutButton from './components/logout';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <div className="App">
        { !isAuthenticated
          ? <LoginButton />
          : <LogoutButton />
        }
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;
