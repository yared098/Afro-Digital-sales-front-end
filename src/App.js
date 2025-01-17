import React from 'react';
import { QueryClientProvider } from 'react-query';
import queryClient from './state/queryClient';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Menu from './pages/Menu/Menu';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </Router>
  </QueryClientProvider>
);

export default App;
