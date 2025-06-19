
import React from "react";
import ContactForm from "../components/AboutUs/ContactForm";
import PartnersSection from "../components/AboutUs/Partners";
import TeamSection from "../components/AboutUs/Team";
import WhyWeExist from "../components/AboutUs/WhyWeExist";
import VisionSection from "../components/AboutUs/OurVision";
import FeaturesGrid from "../components/AboutUs/Features";
import AboutSection from "../components/AboutUs/Hero";

export default function AboutUs(){
    return (
        <div >
                <AboutSection/>
                <FeaturesGrid/>
                <VisionSection/>
                <WhyWeExist/>
                <TeamSection/>
                
                <ContactForm/>
            </div>
    )
}