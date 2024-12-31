import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import TodoPage from './components/pages/TodoPage';
import { useAuth } from './components/hooks/useAuth';

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Navigate to="/todos" /> : <LoginPage />} />
      <Route path="/todos" element={isAuthenticated ? <TodoPage /> : <Navigate to="/" />} />
    </Routes>
  );
};

export default App;
