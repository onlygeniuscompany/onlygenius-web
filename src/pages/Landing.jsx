import CompatibilitySection from "../components/CompatibilitySection";
import Conversion from "../components/Conversion";
import CoreServices from "../components/CoreServices";
import GlobalReach from "../components/GlobalReach";
import Hero from "../components/Hero";
import InHouseTechnologySection from "../components/InHouseTechnologySection";
import TrustedBy from "../components/TrustedBy";
import WhyUs from "../components/WhyUs";





export default function Landing() {
  return (
    <div className="bg-[#09090B] text-[#FAFAFA] font-inter w-full overflow-x-hidden min-h-screen">
      <div className="max-w-[1280px] mx-auto px-4 w-[90%]">
        <Hero/>
        <CoreServices/>
        <CompatibilitySection/>
        <TrustedBy/>
        <GlobalReach/>
        <WhyUs/>
        <Conversion/>
        {/* <InHouseTechnologySection/> */}
      </div>
    </div>
  );
}