import CompatibilitySection from "../components/Landing/CompatibilitySection";
import Conversion from "../components/Conversion";
import CoreServices from "../components/Landing/CoreServices";
import GlobalReach from "../components/Landing/GlobalReach";
import Hero from "../components/Landing/Hero";
import InHouseTechnologySection from "../components/Landing/InHouseTechnologySection";
import TrustedBy from "../components/Landing/TrustedBy";
import WhyUs from "../components/Landing/WhyUs";
import WhatWeDo from "../components/Landing/WhatWeDo";





export default function Landing() {
  return (
<div className="bg-[#09090B] text-[#FAFAFA] font-inter w-full overflow-x-hidden min-h-screen relative">
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: `
        radial-gradient(circle at 20% 30%, #2e2e2e 0%, transparent 40%),
        radial-gradient(circle at 70% 60%, #1f1f1f 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, #3a3a3a 0%, transparent 60%),
        radial-gradient(circle at 10% 80%, #222 0%, transparent 45%),
        radial-gradient(circle at 80% 20%, #1a1a1a 0%, transparent 50%),
        radial-gradient(circle at 60% 90%, #2d2d2d 0%, transparent 50%)
      `
    }}
  />

  <div className="relative z-10 max-w-[1280px] mx-auto px-4 w-[90%]">
        <Hero/>
        <CoreServices/>
        <CompatibilitySection/>
        <WhatWeDo/>
        <TrustedBy/>
        <GlobalReach/>
        <WhyUs/>
        <Conversion/>
        {/* <InHouseTechnologySection/> */}
      </div>
    </div>
  );
}