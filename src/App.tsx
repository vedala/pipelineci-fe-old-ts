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
import { AuthenticationGuard } from './components/authentication-guard';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <div className="App">
        { !isAuthenticated
          ? <LoginButton />
          : <LogoutButton />
        }
      <Routes>
        <Route
          path="/"
          element={<AuthenticationGuard component={Dashboard} />}
        />
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
