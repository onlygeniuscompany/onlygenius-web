
import React from "react";
import ContactForm from "../components/AboutUs/ContactForm";
import PartnersSection from "../components/AboutUs/Partners";
import TeamSection from "../components/AboutUs/Team";
import WhyWeExist from "../components/AboutUs/WhyWeExist";
import VisionSection from "../components/AboutUs/OurVision";
import FeaturesGrid from "../components/AboutUs/Features";
import WhatWeDo from "../components/AboutUs/WhatWeDo";
import AboutSection from "../components/AboutUs/Hero";

export default function AboutUs(){
    return (
        <div className="bg-[radial-gradient(circle_at_20%_30%,#2e2e2e_0%,transparent_40%),radial-gradient(circle_at_70%_60%,#1f1f1f_0%,transparent_50%),radial-gradient(circle_at_50%_50%,#3a3a3a_0%,#0a0a0a_50%)]  text-[#FAFAFA] font-inter w-full overflow-x-hidden min-h-screen">
            <div className="max-w-[1280px] mx-auto px-4 w-[90%]">
                <AboutSection/>
                <WhatWeDo/>
                <FeaturesGrid/>
                <VisionSection/>
                <WhyWeExist/>
                <TeamSection/>
                
                <PartnersSection/>
                <ContactForm/>
            </div>
        </div>
    )
}