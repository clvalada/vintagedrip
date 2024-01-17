import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Navbar from './Navbar';

// Define App component
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
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
