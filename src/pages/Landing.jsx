import CompatibilitySection from "../components/Landing/CompatibilitySection";
import Conversion from "../components/Conversion";
import CoreServices from "../components/Landing/CoreServices";
import GlobalReach from "../components/Landing/GlobalReach";
import Hero from "../components/Landing/Hero";
import TrustedBy from "../components/Landing/TrustedBy";
import WhyUs from "../components/Landing/WhyUs";
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
      </div>
  );
}