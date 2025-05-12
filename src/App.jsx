import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState,useEffect } from 'react';
import Landing from "./pages/Landing";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import Foot from "./components/Footer.jsx";
import FAQ from "./pages/FAQ";
import NavbarComp from "./components/NavbarComp.jsx";
import Services from "./pages/Services.jsx";
import Affiliates from "./pages/Affiliates.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Layout from "./components/Layout.jsx";
import Algorithms from "./pages/Algorithms.jsx";
import PromoModal from "./components/PromoModal.jsx";
import SolicitarModal from "./components/Services/SolicitarModal";
SolicitarModal
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [solicitarOpen,setSolicitarOpen] = useState(false)

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("promoModalShown");
    if (!alreadyShown) {
      setModalOpen(true);
      sessionStorage.setItem("promoModalShown", "true");
    }
  }, []);

  return (
    <Router>

      <Layout>
        <SolicitarModal open={solicitarOpen} onClose={()=>setSolicitarOpen(false)}/>
      <PromoModal open={modalOpen} onClose={() => setModalOpen(false)} openSolicitar={()=> setSolicitarOpen(true)} />

      <Routes>
        <Route path="/" element={<Landing />} />        
        <Route path="/faq" element={<FAQ />} />        
        <Route path="/services" element={<Services />} />       
        <Route path="/afiliados" element={<Affiliates />} />        
        <Route path="/nosotros" element={<AboutUs />} />        
        <Route path="/algoritmos" element={<Algorithms />} />        
        {/* <Route path="/about" element={<About />} />  Acerca de */}
        {/* <Route path="/contact" element={<Contact />} /> Contacto */}
      </Routes>
      </Layout>

    </Router>
  );
}

export default App;