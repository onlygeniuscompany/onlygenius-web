// import Navbar from "./components/Navbar"
import CompatibilitySection from "./components/CompatibilitySection"
import Hero from "./components/Hero"
import CoreServices from "./components/CoreServices"
function App() {
  return (
    <div className="bg-black min-h-screen text-white">
        {/* Agrega tus páginas o secciones aquí */}
        <Hero/>
        <CompatibilitySection/>
        <CoreServices/>
    </div>
  )
}

export default App
