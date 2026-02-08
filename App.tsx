
import React, { useState } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import { UserContext } from './context/UserContext';

const App: React.FC = () => {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const navigate = useNavigate();

  const handleLogin = (name: string) => {
    setUser({ name });
    navigate('/dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <UserContext.Provider value={{ user, login: handleLogin, logout: handleLogout }}>
      <div className="min-h-screen transition-colors duration-300">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
};

export default App;
