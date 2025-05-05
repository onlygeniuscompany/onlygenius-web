import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Landing from "./pages/Landing";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import Foot from "./components/Footer";
import FAQ from "./pages/FAQ";
import NavbarComp from "./components/NavbarComp.jsx";


function App() {
  return (
    <Router>
      <NavbarComp/>
      <Routes>
        <Route path="/" element={<Landing />} />        {/* Página principal */}
        <Route path="/faq" element={<FAQ />} />        {/* Página principal */}
        {/* <Route path="/about" element={<About />} />  Acerca de */}
        {/* <Route path="/contact" element={<Contact />} /> Contacto */}
      </Routes>
      <Foot/>

    </Router>
  );
}

export default App;