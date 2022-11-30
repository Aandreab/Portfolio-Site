import React from 'react';
import "./App.css"
import Home from "./routes/home/Home.jsx"
import About from "./routes/about/About.jsx"
import Portfolio from "./routes/portfolio/Portfolio.jsx"
import Contact from "./routes/contact/Contact.jsx"
import Footer from './components/footer';
import { Link, Outlet, Routes, Route } from "react-router-dom";
function App() {
  return (
    <main className="App">

      <nav className="main-nav-container">
        <div className='nav-links'>
          <Link className="nav-link" to="/Home">Home</Link>
          <Link className="nav-link" to="/Portfolio">Portfolio</Link>
          <Link className="nav-link" to="/About">About</Link>
          <Link className="nav-link" to="/Contact">Contact</Link>
        </div>
      </nav>
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
      <Outlet />
      <Footer/>
    </main>
  );
}

export default App;
