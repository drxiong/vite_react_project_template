// src/App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu'
import Pages from './routes';
const App: React.FC = () => {
  return (
    <Router>
      <Menu />
      <Pages />
    </Router>
  );
};

export default App;
