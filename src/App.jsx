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
import Vps from "./pages/Vps.jsx";
import UnderConstruction from "./pages/UnderConstruction.jsx";



import Layout from "./components/Layout.jsx";
import Algorithms from "./pages/Algorithms.jsx";
import PromoModal from "./components/PromoModal.jsx";
import SolicitarModal from "./components/Services/SolicitarModal";
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [solicitarOpen, setSolicitarOpen] = useState(false);

  const redirectToDashboard = () => {
    window.location.href = "https://demo.dashboard.onlygenius.es/";
  };

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
        <SolicitarModal
          open={solicitarOpen}
          onClose={() => setSolicitarOpen(false)}
          redirect={redirectToDashboard}
        />
      <PromoModal open={modalOpen} onClose={() => setModalOpen(false)} openSolicitar={()=> setSolicitarOpen(true)} />

      <Routes>
        {/* <Route path="/" element={<UnderConstruction />} />         */}
        <Route path="/" element={<Landing />} />        
        <Route path="/faq" element={<FAQ />} />        
        <Route path="/services" element={<Services />} />
        <Route path="/afiliados" element={<Affiliates />} />
        <Route path="/vps" element={<Vps />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/algoritmos" element={<Algorithms />} />
         {/* <Route path="/contact" element={<Contact />} />  */}
      </Routes>
      </Layout>

    </Router>
  );
}

export default App;