import CompatibilitySection from "./components/CompatibilitySection";
import CoreServices from "./components/CoreServices";
import Foot from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import TrustedBy from "./components/TrustedBy";
import WhyUs from "./components/WhyUs";





export default function App() {
  return (
    <div className="bg-[#09090B] text-[#FAFAFA] font-inter w-full overflow-x-hidden min-h-screen">
      <div className="max-w-[1280px] mx-auto px-4 w-[90%]">
        <NavBar/>
        <Hero/>
        <CoreServices/>
        <CompatibilitySection/>
        <TrustedBy/>
        <WhyUs/>
        <Foot/>
      </div>
    </div>
  );
}