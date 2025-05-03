import Navbar from "./components/Navbar"
import CompatibilitySection from "./components/CompatibilitySection"
import Hero from "./components/Hero"
function App() {
  return (
    <div className="bg-black min-h-screen text-white">
        {/* Agrega tus páginas o secciones aquí */}
        <Hero/>
        <CompatibilitySection/>
    </div>
  )
}

export default App
