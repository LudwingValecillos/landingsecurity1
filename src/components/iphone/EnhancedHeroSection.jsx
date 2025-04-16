import { useState, useEffect } from "react";
import {
  ChevronRight,
  Star,
  ShieldCheck,
  ChevronLeft,
  Gift,
  MessageCircle,
  BadgeDollarSign
} from "lucide-react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../../assets/images/sinfondoaa.png";

const EnhancedHeroSection = ({ products = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animatePhones, setAnimatePhones] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [iPhoneModels, setiPhoneModels] = useState([]);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    if (products && products.length > 0) {
      const offeredProducts = products.filter(product => product.offer === true);
      setiPhoneModels(offeredProducts);
      // Reset activeIndex if it's out of bounds
      if (activeIndex >= offeredProducts.length) {
        setActiveIndex(0);
      }
    }
  }, [products, activeIndex]);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => {
      setAnimatePhones(true);
    }, 500);

    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].clientX;
      handleSwipe();
    };

    const handleSwipe = () => {
      if (!iPhoneModels.length) return;
      
      if (touchStartX - touchEndX > 50) {
        nextSlide();
      } else if (touchStartX - touchEndX < -50) {
        prevSlide();
      }
    };

    const carousel = document.getElementById("iphone-carousel");
    if (carousel) {
      carousel.addEventListener("touchstart", handleTouchStart);
      carousel.addEventListener("touchend", handleTouchEnd);

      return () => {
        carousel.removeEventListener("touchstart", handleTouchStart);
        carousel.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [activeIndex, iPhoneModels]);

  useEffect(() => {
    // Refresh AOS when content changes
    AOS.refresh();
  }, [activeIndex]);

  const goToSlide = (index) => {
    if (!iPhoneModels.length) return;
    setActiveIndex(index);
    setAnimatePhones(false);
    setTimeout(() => {
      setAnimatePhones(true);
    }, 300);
  };

  const nextSlide = () => {
    if (!iPhoneModels.length) return;
    goToSlide((activeIndex + 1) % iPhoneModels.length);
  };

  const prevSlide = () => {
    if (!iPhoneModels.length) return;
    goToSlide((activeIndex - 1 + iPhoneModels.length) % iPhoneModels.length);
  };

  // Animation variants for Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: { 
      scale: [1, 1.05, 1],
      transition: { 
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" 
      }
    }
  };

  const renderContent = () => {
    if (!iPhoneModels || iPhoneModels.length === 0) {
      return (
        <section className="bg-gradient-to-b from-blue-100 to-purple-100 py-12 md:py-16 overflow-hidden relative">
          <div className="container mx-auto px-4 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Loading featured products...
            </motion.p>
          </div>
        </section>
      );
    }

    const currentModel = iPhoneModels[activeIndex];

    return (
      <section className="bg-gradient-to-b from-blue-100 to-purple-100 py-12 md:py-16 overflow-hidden relative">
        {/* Animated background shapes */}
        <motion.div 
          className="absolute -top-24 left-10 w-64 h-64 bg-blue-200 rounded-full opacity-30 blur-2xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute -bottom-24 right-10 w-48 h-48 bg-purple-200 rounded-full opacity-30 blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-32 h-32 bg-pink-200 rounded-full opacity-20 blur-xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />

        <div className="container mx-auto px-4">
          {/* Mobile-optimized layout - Logo and title first */}
          <div
            className={`flex flex-col ${
              isMobile ? "" : "lg:flex-row"
            } items-center gap-8`}
          >
            {/* Left Content - Prioritized in mobile */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              className={`w-full lg:w-1/2 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              {/* Brand identity with enhanced styling */}
              <div className="flex flex-col items-center lg:items-start mb-6">
                <motion.div 
                  className="flex items-center mb-3"
                  variants={fadeInUp}
                  data-aos="fade-right"
                >
                  <motion.div 
                    className="rounded-lg bg-white/30 p-2 backdrop-blur-sm shadow-lg mr-2"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                  >
                    <img src={logo} alt="M-STORE Logo" className="h-14 w-auto" />
                  </motion.div>
                </motion.div>

                <motion.h1 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-center lg:text-left"
                  variants={fadeInUp}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Comprá tu iPhone de forma{" "}
                  <motion.span 
                    className="text-blue-600"
                    initial={{ color: "#2563eb" }}
                    animate={{ color: ["#2563eb", "#4f46e5", "#2563eb"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    simple
                  </motion.span>,{" "}
                  <motion.span 
                    className="text-purple-600"
                    initial={{ color: "#9333ea" }}
                    animate={{ color: ["#9333ea", "#7e22ce", "#9333ea"] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    rápida
                  </motion.span> y{" "}
                  <motion.span 
                    className="text-green-600"
                    initial={{ color: "#16a34a" }}
                    animate={{ color: ["#16a34a", "#22c55e", "#16a34a"] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  >
                    segura
                  </motion.span>
                </motion.h1>

                <motion.div 
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 h-1 w-64 rounded-full mb-4 mx-auto lg:mx-0"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "16rem", opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  data-aos="fade-right"
                  data-aos-delay="200"
                />

                <motion.p 
                  className="text-base md:text-lg text-gray-700 leading-relaxed text-center lg:text-left"
                  variants={fadeInUp}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Encontrá el modelo que buscás, nuevo, original y listo para
                  retirar en nuestra oficina.
                  <motion.strong 
                    className="text-blue-600"
                    whileHover={{ scale: 1.05 }}
                  >
                    {" "}
                    Stock real, los mejores precios en dólares y atención
                    personalizada.{" "}
                  </motion.strong>
                </motion.p>
              </div>

              {/* Enhanced trust badges */}
              <motion.div 
                className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6"
                variants={staggerChildren}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <motion.div 
                  className="bg-white text-blue-800 px-4 py-2 rounded-lg flex items-center text-sm font-medium shadow-md border border-blue-100"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                >
                  <ShieldCheck size={18} className="mr-2 text-blue-600" /> iPhones
                  sellados y originales
                </motion.div>
                <motion.div 
                  className="bg-white text-purple-800 px-4 py-2 rounded-lg flex items-center text-sm font-medium shadow-md border border-purple-100"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                >
                  <Star size={18} className="mr-2 text-purple-600" /> 
                  Garantía oficial de Apple por un año
                </motion.div>
                <motion.div 
                  className="bg-white text-pink-800 px-4 py-2 rounded-lg flex items-center text-sm font-medium shadow-md border border-pink-100"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                >
                  <BadgeDollarSign size={18} className="mr-2 text-pink-600" /> Precios
                  competitivos en USD
                </motion.div>
              </motion.div>

              {/* Call-to-action buttons with improved contrast */}
              <div
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <motion.button
                  onClick={() => (window.location.href = "#catalogo")}
                  className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-800 transition-all flex items-center justify-center font-medium text-base shadow-lg shadow-purple-200"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explorar Catálogo
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 0.5, delay: 0.3 }}
                  >
                    <ChevronRight size={18} className="ml-1" />
                  </motion.div>
                </motion.button>

                <motion.button
                  onClick={() => (window.location.href = "#contacto")}
                  className="bg-white text-purple-700 border-2 border-purple-500 px-6 py-3 rounded-xl hover:bg-purple-50 transition-all flex items-center justify-center font-medium text-base shadow-md"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contactar Ahora
                  <MessageCircle size={18} className="ml-1" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right Content - iPhone Carousel with "Ofertas Destacadas" */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className={`w-full lg:w-1/2 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
              data-aos="fade-left"
              data-aos-delay="200"
            >
              {/* Featured Offers Label */}
              <motion.div 
                className="text-center mb-4"
                initial="initial"
                animate="animate"
                variants={pulseAnimation}
              >
                <motion.div 
                  className="inline-block bg-white px-6 py-2 rounded-full shadow-md"
                  whileHover={{ scale: 1.1, rotate: 1 }}
                >
                  <motion.span 
                    className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700"
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    ✨ Ofertas Destacadas ✨
                  </motion.span>
                </motion.div>
              </motion.div>

              <div
                id="iphone-carousel"
                className="relative h-80 sm:h-96 md:h-[450px] flex justify-center items-center touch-pan-y"
              >
                {/* Enhanced Price Tag with Discount - CORRECCIÓN: Centrado y mejorado */}
                <motion.div 
                  className="absolute top-0 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-700 px-6 py-2 rounded-full shadow-lg z-30 flex flex-col items-center"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="font-bold text-white text-lg">
                    {currentModel?.price || "USD 0"}
                  </span>
                  <motion.span 
                    className="text-xs text-white bg-red-500 px-2 py-0.5 rounded-full mt-1 font-bold"
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  >
                    {currentModel?.discount || "20% OFF"}
                  </motion.span>
                </motion.div>

                {/* iPhone Carousel - Enhanced - CORRECCIÓN: Estructura mejorada */}
                <div className="relative w-full h-full flex justify-center items-center">
                  {iPhoneModels.map((model, index) => (
                    <motion.div
                      key={index}
                      className={`absolute w-full h-full flex justify-center items-center transition-all duration-500 ${
                        index === activeIndex ? "opacity-100 z-20" : "opacity-0 z-10"
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: index === activeIndex ? 1 : 0,
                        scale: index === activeIndex ? 1 : 0.9
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Main iPhone with enhanced visual effects - CORRECCIÓN: Centrado */}
                      <motion.div
                        className="flex flex-col items-center justify-center relative"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ 
                          scale: animatePhones ? 1 : 0.9, 
                          opacity: animatePhones ? 1 : 0,
                          y: [0, -10, 0]
                        }}
                        transition={{ 
                          duration: 0.5,
                          y: {
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }
                        }}
                      >
                        {/* Reflection effect */}
                        <motion.div 
                          className="absolute -z-10 w-32 h-80 bg-gradient-to-t from-blue-300 to-purple-300 opacity-30 blur-lg"
                          animate={{ 
                            opacity: [0.3, 0.5, 0.3],
                            width: ["8rem", "9rem", "8rem"]
                          }}
                          transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse" 
                          }}
                        />

                        {/* Animated rings - CORRECCIÓN: Centrado */}
                        <motion.div 
                          className="absolute -z-10"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.2, 0.3, 0.2]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse" 
                          }}
                        >
                          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-purple-300 opacity-20"></div>
                        </motion.div>
                        <motion.div 
                          className="absolute -z-10"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.1, 0.2]
                          }}
                          transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse" 
                          }}
                        >
                          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-blue-400 opacity-20"></div>
                        </motion.div>

                        {/* Phone image - CORRECCIÓN: Centrado */}
                        <motion.img
                          src={model.image}
                          alt={model.name}
                          className="h-64 sm:h-80 md:h-64 w-auto object-contain drop-shadow-2xl z-10"
                          whileHover={{ rotate: [-1, 1, -1], transition: { duration: 0.5 } }}
                        />

                        {/* Model name card - CORRECCIÓN: Centrado y reposicionado */}
                        <motion.div 
                          className="absolute bottom-0 transform translate-y-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md w-64 text-center border-t-2 border-purple-400 z-20"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                          whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                        >
                          <span className="font-medium text-sm truncate block">
                            {model.name || "iPhone Model"}
                          </span>
                          <span className="text-xs text-gray-600">
                            {model.description || "iPhone description"}
                          </span>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  ))}

                  {/* Enhanced Navigation buttons */}
                  <motion.button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-blue-50 p-3 rounded-full shadow-lg z-30 transition-all border border-blue-100"
                    aria-label="Previous slide"
                    whileHover={{ scale: 1.1, x: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <ChevronLeft size={20} className="text-blue-600" />
                  </motion.button>
                  <motion.button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-purple-50 p-3 rounded-full shadow-lg z-30 transition-all border border-purple-100"
                    aria-label="Next slide"
                    whileHover={{ scale: 1.1, x: 2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <ChevronRight size={20} className="text-purple-600" />
                  </motion.button>
                </div>

                {/* Enhanced indicator dots */}
                <motion.div 
                  className="absolute bottom-0 transform -translate-x-1/2 flex justify-center space-x-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  {iPhoneModels.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all ${
                        index === activeIndex
                          ? "bg-gradient-to-r from-blue-600 to-purple-700 w-8 h-3 rounded-full"
                          : "bg-gray-300 w-3 h-3 rounded-full hover:bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      animate={index === activeIndex ? { 
                        scale: [1, 1.1, 1],
                        transition: { duration: 0.5 }  
                      } : {}}
                    />
                  ))}
                </motion.div>
              </div>

            </motion.div>
          </div>
        </div>

        {/* Enhanced decorative elements */}
        <motion.div 
          className="absolute -bottom-20 left-0 w-full h-24 bg-gradient-to-t from-blue-50 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        />
      </section>
    );
  };

  return renderContent();
};

export default EnhancedHeroSection;