import CompatibilitySection from "../components/Landing/CompatibilitySection";
import Conversion from "../components/Conversion";
import CoreServices from "../components/Landing/CoreServices";
import GlobalReach from "../components/Landing/GlobalReach";
import Hero from "../components/Landing/Hero";
import InHouseTechnologySection from "../components/Landing/InHouseTechnologySection";
import TrustedBy from "../components/Landing/TrustedBy";
import WhyUs from "../components/Landing/WhyUs";





export default function Landing() {
  return (
    <div className="bg-[radial-gradient(circle_at_20%_30%,#2e2e2e_0%,transparent_40%),radial-gradient(circle_at_70%_60%,#1f1f1f_0%,transparent_50%),radial-gradient(circle_at_50%_50%,#3a3a3a_0%,#0a0a0a_50%)]  text-[#FAFAFA] font-inter w-full overflow-x-hidden min-h-screen">
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