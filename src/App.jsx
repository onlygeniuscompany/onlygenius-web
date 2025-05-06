import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Landing from "./pages/Landing";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import Foot from "./components/Footer.jsx";
import FAQ from "./pages/FAQ";
import NavbarComp from "./components/NavbarComp.jsx";
import Services from "./pages/Services.jsx";
import Affiliates from "./pages/Affiliates.jsx";
import AboutUs from "./pages/AboutUs.jsx";



function App() {
  return (
    <Router>
      <NavbarComp/>
      <Routes>
        <Route path="/" element={<Landing />} />        
        <Route path="/faq" element={<FAQ />} />        
        <Route path="/services" element={<Services />} />       
        <Route path="/afiliados" element={<Affiliates />} />        
        <Route path="/nosotros" element={<AboutUs />} />        
        {/* <Route path="/about" element={<About />} />  Acerca de */}
        {/* <Route path="/contact" element={<Contact />} /> Contacto */}
      </Routes>
      <Foot/>

    </Router>
  );
}

export default App;