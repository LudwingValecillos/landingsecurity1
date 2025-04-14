import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence } from "framer-motion";

import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import EquipmentSection from "../components/sections/EquipmentSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import FAQSection from "../components/sections/FAQSection";
import ContactSection from "../components/sections/ContactSection";
import WhatsAppButton from "../components/WhatsAppButton";
import NVRSection from "../components/sections/NVRSection";

const SecurityLandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="font-sans">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <NVRSection />
        <EquipmentSection />
        <ProjectsSection />
        <FAQSection />
        <ContactSection />
        <WhatsAppButton />
      </div>
    </AnimatePresence>
  );
};

export default SecurityLandingPage;
