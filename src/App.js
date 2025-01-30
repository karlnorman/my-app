import Header from './components/Header'
import Home from "./pages/Home"
import AboutUs from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import './App.css'
import { Route, Routes } from "react-router-dom"
import React from 'react';
import Navbar from './Navbar';

function App() {
  return (
    
    <>
     <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
       
       
    </div>
    </>
  );
}

export default App;
