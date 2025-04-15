import { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Check, 
  Star, 
  ShieldCheck, 
  ChevronLeft,
  Play,
  Gift,
  RefreshCcw,
  Phone,
  MessageCircle
} from 'lucide-react';
import mobile1 from '../../assets/images/iphone16.png';
import mobile2 from '../../assets/images/iphone13azulmedianoche.png';
import mobile3 from '../../assets/images/Iphone15negro.png';
import logo from '../../assets/images/sinfondoaa.png';

const EnhancedHeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animatePhones, setAnimatePhones] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const iPhoneModels = [
    {
      id: 1,
      name: 'Apple iPhone 16 De 128 Gb negro',
      price: 'R$ 7.999',
      imageUrl: mobile1,
      feature: 'Máxima potencia',
      discount: '15% OFF',
      description:
        'Máxima potencia y eficiencia, ideal para profesionales y entusiastas de la tecnología.',
    },
    {
      id: 2,
      name: 'Apple iPhone 13 (128 Gb) - Azul Medianoche',
      price: 'R$ 6.299',
      imageUrl: mobile2,
      feature: 'Equilibrio perfecto',
      discount: '10% OFF',
      description:
        'Un gran equilibrio entre diseño y rendimiento para el uso diario.',
    },
    {
      id: 3,
      name: 'Apple iPhone 15 (128 GB) - Negro',
      price: 'R$ 5.499',
      imageUrl: mobile3,
      feature: 'Tamaño perfecto',
      discount: '12% OFF',
      description:
        'El tamaño perfecto y la potencia que necesitas para trabajar y disfrutar.',
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Trigger phone animation after initial render
    setTimeout(() => {
      setAnimatePhones(true);
    }, 500);

    // Check if device is mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add resize listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(index);
    setAnimatePhones(false);
    setTimeout(() => {
      setAnimatePhones(true);
    }, 300);
  };

  const nextSlide = () => {
    goToSlide((activeIndex + 1) % iPhoneModels.length);
  };

  const prevSlide = () => {
    goToSlide((activeIndex - 1 + iPhoneModels.length) % iPhoneModels.length);
  };

  // Function to handle swipe gestures for mobile
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
      // If swipe distance is significant enough
      if (touchStartX - touchEndX > 50) {
        // Swipe left - go to next slide
        nextSlide();
      } else if (touchStartX - touchEndX < -50) {
        // Swipe right - go to previous slide
        prevSlide();
      }
    };
    
    // Add event listeners for touch devices
    const carousel = document.getElementById('iphone-carousel');
    if (carousel) {
      carousel.addEventListener('touchstart', handleTouchStart);
      carousel.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        carousel.removeEventListener('touchstart', handleTouchStart);
        carousel.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [activeIndex]);

  return (
    <section className="bg-gradient-to-b from-blue-100 to-purple-100 py-12 md:py-16 overflow-hidden relative">
      {/* Animated background shapes */}
      <div className="absolute -top-24 left-10 w-64 h-64 bg-blue-200 rounded-full opacity-30 blur-2xl animate-pulse" />
      <div className="absolute -bottom-24 right-10 w-48 h-48 bg-purple-200 rounded-full opacity-30 blur-2xl animate-pulse" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-pink-200 rounded-full opacity-20 blur-xl animate-pulse" />
      
      <div className="container mx-auto px-4">
        {/* Mobile-optimized layout - Logo and title first */}
        <div className={`flex flex-col ${isMobile ? '' : 'lg:flex-row'} items-center gap-8`}>
          
          {/* Left Content - Prioritized in mobile */}
          <div className={`w-full lg:w-1/2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Brand identity with enhanced styling */}
            <div className="flex flex-col items-center lg:items-start mb-6">
              <div className="flex items-center mb-3">
                <div className="rounded-lg bg-white/30 p-2 backdrop-blur-sm shadow-lg mr-2">
                  <img src={logo} alt="M-STORE Logo" className="h-14 w-auto" />
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-center lg:text-left">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-800">
                  La Mejor Experiencia en iPhones
                </span>
              </h1>
              
              <div className="bg-gradient-to-r from-blue-600 to-purple-700 h-1 w-32 rounded-full mb-4 mx-auto lg:mx-0"></div>
              
              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed text-center lg:text-left">
                Encuentra el iPhone perfecto para ti con nuestra selección premium. 
                Calidad garantizada, soporte personalizado y la mejor tecnología 
                al alcance de tu mano.
              </p>
            </div>
            
            {/* Enhanced trust badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
              <div className="bg-white text-blue-800 px-4 py-2 rounded-lg flex items-center text-sm font-medium shadow-md border border-blue-100">
                <ShieldCheck size={18} className="mr-2 text-blue-600" /> Productos Originales
              </div>
              <div className="bg-white text-purple-800 px-4 py-2 rounded-lg flex items-center text-sm font-medium shadow-md border border-purple-100">
                <Star size={18} className="mr-2 text-purple-600" /> Garantía Oficial
              </div>
              <div className="bg-white text-pink-800 px-4 py-2 rounded-lg flex items-center text-sm font-medium shadow-md border border-pink-100">
                <Gift size={18} className="mr-2 text-pink-600" /> Regalo Sorpresa
              </div>
            </div>
            
            {/* Call-to-action buttons with improved contrast */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button onClick={() => window.location.href = '#catalogo'} 
                      className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-800 transition-all flex items-center justify-center font-medium text-base shadow-lg shadow-purple-200 hover:scale-105">
                Explorar Catálogo
                <ChevronRight size={18} className="ml-1 animate-bounce" />
              </button>
              
              <button onClick={() => window.location.href = '#contacto'}
                      className="bg-white text-purple-700 border-2 border-purple-500 px-6 py-3 rounded-xl hover:bg-purple-50 transition-all flex items-center justify-center font-medium text-base shadow-md hover:scale-105">
                Contactar Ahora
                <MessageCircle size={18} className="ml-1" />
              </button>
            </div>
          </div>
          
          {/* Right Content - iPhone Carousel with "Ofertas Destacadas" */}
          <div className={`w-full lg:w-1/2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Featured Offers Label */}
            <div className="text-center mb-4">
              <div className="inline-block bg-white px-6 py-2 rounded-full shadow-md">
                <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700">✨ Ofertas Destacadas ✨</span>
              </div>
            </div>
            
            <div id="iphone-carousel" className="relative h-80 sm:h-96 md:h-[450px] flex justify-center items-center touch-pan-y">
              {/* Enhanced Price Tag with Discount */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-700 px-6 py-2 rounded-full shadow-lg z-30 flex flex-col items-center">
                <span className="font-bold text-white text-lg">{iPhoneModels[activeIndex].price}</span>
                <span className="text-xs text-white bg-red-500 px-2 py-0.5 rounded-full mt-1 font-bold">{iPhoneModels[activeIndex].discount}</span>
              </div>
              
              {/* iPhone Carousel - Enhanced */}
              <div className="relative w-full h-full">
                {iPhoneModels.map((model, index) => (
                  <div 
                    key={index} 
                    className={`absolute left-0 top-0 w-full h-full transition-all duration-500 ${
                      index === activeIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'
                    }`}
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Main iPhone with enhanced visual effects */}
                      <div className={`transition-all duration-500 ${animatePhones ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
                        {/* Reflection effect */}
                        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-80 bg-gradient-to-t from-blue-300 to-purple-300 opacity-30 blur-lg"></div>
                        
                        {/* Phone image */}
                        <img 
                          src={model.imageUrl} 
                          alt={model.name}
                          className="h-64 sm:h-80 md:h-64 w-auto object-contain drop-shadow-2xl animate-float-slow"
                        />
                        
                        {/* Animated rings */}
                        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-purple-300 opacity-20 animate-pulse"></div>
                        </div>
                        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-blue-400 opacity-20 animate-pulse"></div>
                        </div>
                        
                        {/* Feature badge */}
                        <div className="absolute top-10 right-0 transform translate-x-5 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-l-full shadow-md">
                          <span className="font-medium text-sm text-purple-700">{model.feature}</span>
                        </div>
                        
                        {/* Model name card - Enhanced */}
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md max-w-xs text-center border-t-2 border-purple-400">
                          <span className="font-medium text-sm truncate block">{model.name}</span>
                          <span className="text-xs text-gray-600">{model.description}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Enhanced Navigation buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-blue-50 p-3 rounded-full shadow-lg z-30 transition-all hover:scale-110 border border-blue-100"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={20} className="text-blue-600" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-purple-50 p-3 rounded-full shadow-lg z-30 transition-all hover:scale-110 border border-purple-100"
                  aria-label="Next slide"
                >
                  <ChevronRight size={20} className="text-purple-600" />
                </button>
              </div>
              
              {/* Enhanced indicator dots */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2">
                {iPhoneModels.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all ${
                      index === activeIndex 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-700 w-8 h-3 rounded-full' 
                        : 'bg-gray-300 w-3 h-3 rounded-full hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Enhanced swipe indicator for mobile */}
            <div className="text-center mt-6 md:hidden text-sm text-gray-600 bg-white/80 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm mx-auto w-max">
              <div className="flex items-center justify-center">
                <ChevronLeft size={16} className="mr-1 text-blue-600" />
                <span>Desliza para ver más modelos</span>
                <ChevronRight size={16} className="ml-1 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute -bottom-20 left-0 w-full h-24 bg-gradient-to-t from-blue-50 to-transparent" />
    </section>
  );
};

export default EnhancedHeroSection;