import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Landing from './components/Landing';
import PageNotFound from './components/PageNotFound';
import { AuthenticationGuard } from './components/authentication-guard';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing isAuthenticated={isAuthenticated} />} />
          <Route
            path="/home"
            element={<AuthenticationGuard component={Home} />}
          />
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
