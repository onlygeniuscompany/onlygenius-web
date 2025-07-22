
import React, { useEffect } from "react";
import ContactForm from "../components/AboutUs/ContactForm";
import TeamSection from "../components/AboutUs/Team";
import WhyWeExist from "../components/AboutUs/WhyWeExist";
import VisionSection from "../components/AboutUs/OurVision";
import FeaturesGrid from "../components/AboutUs/Features";
import AboutSection from "../components/AboutUs/Hero";
export default function AboutUs(){
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const el = document.querySelector(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);
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