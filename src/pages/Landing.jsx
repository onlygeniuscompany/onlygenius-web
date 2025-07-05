import CompatibilitySection from "../components/Landing/CompatibilitySection";
import Conversion from "../components/Conversion";
import CoreServices from "../components/Landing/CoreServices";
import GlobalReach from "../components/Landing/GlobalReach";
import Hero from "../components/Landing/Hero";
import InHouseTechnologySection from "../components/Landing/InHouseTechnologySection";
import TrustedBy from "../components/Landing/TrustedBy";
import WhyUs from "../components/Landing/WhyUs";
import WhatWeDo from "../components/Landing/WhatWeDo";
import PartnersSection from "../components/Landing/Partners";
import TestimonialWithVideo from "../components/Landing/VideoComp"
import FlagCarousel from "../components/Landing/FlagCarousel";



export default function Landing() {
  return (
    <div>
        <Hero/>
        <PartnersSection/>
        <CoreServices/>
        <CompatibilitySection/>
        <TestimonialWithVideo/>
        <TrustedBy/>
        <GlobalReach/>
        <FlagCarousel />
        <WhyUs/>
        <Conversion/>
        {/* <InHouseTechnologySection/> */}
      </div>
  );
}