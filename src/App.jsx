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
import UnderConstruction from "./pages/UnderConstruction.jsx";



function App() {
  return (
    <Router>
      {/* <NavbarComp/> */}
      <Routes>
        <Route path="/" element={<UnderConstruction />} />        
        {/* <Route path="/landing" element={<Landing />} />        
        <Route path="/faq" element={<FAQ />} />        
        <Route path="/services" element={<Services />} />       
        <Route path="/afiliados" element={<Affiliates />} />        
        <Route path="/nosotros" element={<AboutUs />} />         */}

      </Routes>
      {/* <Foot/> */}

    </Router>
  );
}

export default App;