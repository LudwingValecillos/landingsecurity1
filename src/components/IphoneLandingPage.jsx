import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence } from "framer-motion";
import IphoneHeroSection from "./sections/IphoneHeroSection";
import IphoneCatalogSection from "./sections/IphoneCatalogSection";
import Footer from "./sections/Footer";

const IphoneLandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="font-sans">
        <IphoneHeroSection />
        <IphoneCatalogSection />
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default IphoneLandingPage;