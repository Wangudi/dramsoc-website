import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Productions from './pages/Productions';
import Departments from './pages/Departments';
import Team from './pages/Team';
import Alumni from './pages/Alumni';
import Articles from './pages/Articles';
import Contact from './pages/Contact';
import JoinUs from './pages/JoinUs';
import Partners from './pages/Partners';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/productions" element={<Productions />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/team" element={<Team />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
