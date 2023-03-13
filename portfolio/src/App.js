import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Projects from './Projects'
import Projects2 from './Projects2';

function App() {
  return (
  
    <div>

      <Router>
        <div>
        <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Projects" element={<Projects2 />} />
        </Routes>
        </Router>
    </div>
    
    
    
  );
}

export default App;
