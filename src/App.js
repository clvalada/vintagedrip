//App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Hats from './components/Hats';
import Shirts from './components/Shirts';
import Other from './components/Misc';
import About from './components/About';
import Blog from './components/Blog';
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Hats" element={<Hats />} />
          <Route path="/Shirts" element={<Shirts />} />
          <Route path="/Other" element={<Other />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </div>
      <Footer />
   </div>
  );
}

export default App;
