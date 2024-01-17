import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
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
