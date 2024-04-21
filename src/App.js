// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './pages/Navigation';
import Clients from './pages/clients';

import "./App.css";
function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Navigation />}>
              <Route path="/" element={<Clients />} />  
              <Route path="/boattorch" element={<Home />} />
            </Route>
        </Routes>
    </Router>
  );
};

export default App;
