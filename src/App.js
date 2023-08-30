import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from './about/about';
import Portfolio from './portfolio/portfolio';
import Contact from './contact/contact';
import Resume from './resume/resume';
import Footer from './footer/footer'; // Make sure the import path is correct
import './App.css';


function NavigationHeader() {
  return (
    <nav className="nav-header">
      <div className="nav-brand">
        Jordan's React Portfolio
      </div>
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationHeader />

        {/* Wrap your routes with a <Routes> component */}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        <Footer /> {/* Add the Footer component */}
      </div>
    </Router>
  );
}


export default App;
