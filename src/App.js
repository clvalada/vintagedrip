import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Hats from './components/Hats';
import Shirts from './components/Shirts';
import Contact from './components/Contact';
import Blog from './components/Blog';

// Define App component
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Hats" element={<Hats />} />
          <Route path="Shirts" element={<Shirts />} />
          <Route path="Other" element={<Contact />} />
          <Route path="Blog" element={<Blog />} />
        </Routes>
      </div>
   </div>
  );
}

export default App;
