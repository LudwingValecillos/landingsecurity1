import { useState, useEffect, useCallback, memo, useMemo, useRef } from "react";
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

// Importaciones de Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

// Componentes memorizados
const TrustBadge = memo(({ icon: Icon, text, color }) => (
  <motion.div 
    className={`bg-white text-${color}-800 px-4 py-2 rounded-lg flex items-center text-sm font-medium shadow-md border border-${color}-100`}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }}
    whileHover={{ scale: 1.05 }}
    style={{ willChange: 'transform, opacity' }}
  >
    <Icon size={18} className={`mr-2 text-${color}-600`} /> {text}
  </motion.div>
));

const NavButton = memo(({ direction, onClick, color }) => {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  return (
    <motion.button
      onClick={onClick}
      className={`absolute ${direction === "prev" ? "left-2" : "right-2"} bg-white hover:bg-${color}-50 p-3 rounded-full shadow-lg z-30 transition-all border border-${color}-100`}
      style={{ 
        willChange: 'box-shadow',
        transformOrigin: "center"
      }}
    >
      <Icon size={20} className={`text-${color}-600`} />
    </motion.button>
  );
});

const BackgroundShape = memo(({ className, animationProps }) => (
  <motion.div 
    className={className}
    animate={animationProps.animate}
    transition={animationProps.transition}
    style={{ willChange: 'transform, opacity' }}
  />
));

const EnhancedHeroSection = ({ products = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [iPhoneModels, setiPhoneModels] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const swiperRef = useRef(null);

  // Valores derivados con useMemo
  const currentModel = useMemo(() => iPhoneModels[activeIndex], [iPhoneModels, activeIndex]);
  const trustBadges = useMemo(() => [
    { icon: ShieldCheck, text: "iPhones sellados y originales", color: "blue" },
    { icon: Star, text: "Garantía oficial de Apple por un año", color: "purple" },
    { icon: BadgeDollarSign, text: "Precios competitivos en USD", color: "pink" }
  ], []);

  const backgroundShapes = useMemo(() => [
    {
      className: "absolute -top-24 left-10 w-64 h-64 bg-blue-200 rounded-full opacity-30 blur-2xl",
      animationProps: {
        animate: { scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] },
        transition: { duration: 8, repeat: Infinity }
      }
    },
    {
      className: "absolute -bottom-24 right-10 w-48 h-48 bg-purple-200 rounded-full opacity-30 blur-2xl",
      animationProps: {
        animate: { scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] },
        transition: { duration: 10, repeat: Infinity }
      }
    }
  ], []);

  // Efectos optimizados
  useEffect(() => {
    AOS.init({
      duration: 700,
      disable: isMobile // Deshabilitar AOS en móvil para mejor rendimiento
    });
  }, [isMobile]);

  useEffect(() => {
    const offeredProducts = products.filter(p => p.offer);
    setiPhoneModels(offeredProducts);
  }, [products]);

  // Handlers memoizados para la navegación del Swiper
  const nextSlide = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  const prevSlide = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const goToSlide = useCallback((index) => {
    swiperRef.current?.slideTo(index);
  }, []);

  // Animaciones optimizadas
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const phoneAnimation = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.5,
        y: isMobile ? undefined : [0, -10, 0]
      }
    }
  };

  // Renderizado
  if (!iPhoneModels.length) return null;

  return (
    <section className="relative bg-gradient-to-b from-blue-100 to-purple-100 py-12 md:py-16 overflow-hidden">
      {/* Formas de fondo optimizadas */}
      {backgroundShapes.map((shape, i) => (
        <BackgroundShape key={i} {...shape} />
      ))}

      <div className="container mx-auto px-4">
        <div className={`flex flex-col md:flex-row ${isMobile ? 'gap-8' : 'gap-16'}`}>
          {/* Contenido izquierdo */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="w-full md:w-1/2"
          >
            <div className="flex flex-col items-center md:items-start">
              <motion.div 
                className="flex items-center mb-3"
                style={{ willChange: 'transform' }}
              >
                <motion.div 
                  className="rounded-lg bg-white/30 p-2 backdrop-blur-sm shadow-lg mr-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={logo} alt="Logo" className="h-14 w-auto" />
                </motion.div>
              </motion.div>

              <motion.h1 
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold mb-3 text-center md:text-left"
              >
                Comprá tu iPhone de forma{" "}
                <motion.span 
                  className="text-blue-600"
                  style={{ willChange: 'color' }}
                >
                  simple
                </motion.span>,{" "}
                <motion.span 
                  className="text-purple-600"
                  style={{ willChange: 'color' }}
                >
                  rápida
                </motion.span> y{" "}
                <motion.span 
                  className="text-green-600"
                  style={{ willChange: 'color' }}
                >
                  segura
                </motion.span>
              </motion.h1>

              <motion.div 
                variants={fadeInUp}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 h-1 w-64 rounded-full mb-4 mx-auto md:mx-0"
              />

              <motion.p 
                variants={fadeInUp}
                className="text-base md:text-lg text-gray-700 leading-relaxed text-center md:text-left"
              >
                Encontrá el modelo que buscás, nuevo, original y listo para
                retirar en nuestra oficina.
                <motion.strong 
                  className="text-blue-600"
                >
                  {" "}Stock real, los mejores precios en dólares y atención
                  personalizada.{" "}
                </motion.strong>
              </motion.p>
            </div>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap justify-center md:justify-start gap-3 lg:mb-6"
            >
              {trustBadges.map((badge, i) => (
                <TrustBadge key={i} {...badge} />
              ))}
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="hidden lg:flex flex-col md:flex-row gap-3 justify-center md:justify-start "
            >
              <motion.button
                onClick={() => window.location.href = "#catalogo"}
                className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-800 transition-all flex items-center justify-center font-medium shadow-lg"
                whileHover={{ scale: 1.03 }}
                style={{ willChange: 'transform' }}
              >
                Explorar Catálogo
                <ChevronRight size={18} className="ml-1" />
              </motion.button>

              <motion.button
                onClick={() => window.location.href = "#contacto"}
                className="bg-white text-purple-700 border-2 border-purple-500 px-6 py-3 rounded-xl hover:bg-purple-50 transition-all flex items-center justify-center font-medium shadow-md"
                whileHover={{ scale: 1.03 }}
                style={{ willChange: 'transform' }}
              >
                Contactar Ahora
                <MessageCircle size={18} className="ml-1" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Carousel de iPhone con Swiper */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="w-full md:w-1/2 relative"
          >
            <div className="text-center mb-10" style={{ willChange: 'transform' }}>
              <div className="inline-block bg-white px-6 py-2 rounded-full shadow-md">
                <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700" style={{ backgroundPosition: '18.3124% 50%' }}>
                  ✨ Ofertas Destacadas ✨
                </span>
              </div>
            </div>
            <div 
              id="iphone-carousel"
              className="relative h-80 sm:h-96 md:h-[450px] flex justify-center items-center"
            >
              {/* Enhanced Price Tag with Discount */}
              <motion.div 
                className="absolute -top-10 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-700 px-6 py-2 rounded-full shadow-lg z-30 flex flex-col items-center"
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
                    scale: [1, 1.1, 1]
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

              {/* Swiper Carousel */}
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                navigation={false} // Usamos botones personalizados
                pagination={{ clickable: true, el: ".swiper-pagination", type: "bullets" }}
                className="w-full h-full"
              >
                {iPhoneModels.map((model, i) => (
                  <SwiperSlide key={i}>
                    <motion.div
                      variants={phoneAnimation}
                      className="relative flex flex-col items-center"
                      style={{ willChange: 'transform, opacity' }}
                    >
                      <motion.img
                        src={model.image}
                        alt={model.name}
                        className="h-64 sm:h-80 object-contain"
                        loading="lazy"
                        style={{ willChange: 'transform' }}
                      />
                      {/* Contenedor de la descripción centrado */}
                      <motion.div 
                        className="absolute -bottom-12 left-0 right-0 flex justify-center px-4"
                        style={{ willChange: 'transform' }}
                      >
                        <motion.div 
                          className="bg-white/90 backdrop-blur-sm px-2 py-1 lg:px-4 lg:py-2 rounded-xl shadow-md max-w-md w-full text-center border-t-2 border-purple-400"
                          style={{ willChange: 'transform' }}
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
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Contenedor para la paginación de Swiper */}
              <div className="swiper-pagination absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>

              {/* Botones de navegación personalizados */}
              <NavButton direction="prev" onClick={prevSlide} color="blue" />
              <NavButton direction="next" onClick={nextSlide} color="purple" />
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col md:flex-row gap-3 justify-center md:justify-start lg:hidden"
          >
            <motion.button
              onClick={() => window.location.href = "#catalogo"}
              className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-800 transition-all flex items-center justify-center font-medium shadow-lg"
              whileHover={{ scale: 1.03 }}
              style={{ willChange: 'transform' }}
            >
              Explorar Catálogo
              <ChevronRight size={18} className="ml-1" />
            </motion.button>

            <motion.button
              onClick={() => window.location.href = "#contacto"}
              className="bg-white text-purple-700 border-2 border-purple-500 px-6 py-3 rounded-xl hover:bg-purple-50 transition-all flex items-center justify-center font-medium shadow-md"
              whileHover={{ scale: 1.03 }}
              style={{ willChange: 'transform' }}
            >
              Contactar Ahora
              <MessageCircle size={18} className="ml-1" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(EnhancedHeroSection);
