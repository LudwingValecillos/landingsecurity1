import React, { useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import mobile1 from '../../assets/images/iphone16.png';
import mobile2 from '../../assets/images/iphone13azulmedianoche.png';
import mobile3 from '../../assets/images/Iphone15negro.png';
import mobile4 from '../../assets/images/iphone16rosa.png';
import mobile5 from '../../assets/images/iphone16azulultramarino.png';
import mobile6 from '../../assets/images/iphone16titanionegro.png';

const CatalogSection = ({ products = [] }) => {
  const mobileCarouselRef = useRef(null);
  const desktopCarouselRef = useRef(null);

  // Lógica para desktop: Permitir sólo que se capture scroll horizontal (wheel)
  useEffect(() => {
    const handleWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        return;
      }
      e.stopPropagation();
    };

    const mobileCarousel = mobileCarouselRef.current;
    const desktopCarousel = desktopCarouselRef.current;

    if (mobileCarousel) {
      const carouselElement = mobileCarousel.querySelector('.carousel');
      if (carouselElement) {
        carouselElement.addEventListener('wheel', handleWheel, { passive: false });
      }
    }

    if (desktopCarousel) {
      const carouselElement = desktopCarousel.querySelector('.carousel');
      if (carouselElement) {
        carouselElement.addEventListener('wheel', handleWheel, { passive: false });
      }
    }

    return () => {
      if (mobileCarousel) {
        const carouselElement = mobileCarousel.querySelector('.carousel');
        if (carouselElement) {
          carouselElement.removeEventListener('wheel', handleWheel);
        }
      }
      if (desktopCarousel) {
        const carouselElement = desktopCarousel.querySelector('.carousel');
        if (carouselElement) {
          carouselElement.removeEventListener('wheel', handleWheel);
        }
      }
    };
  }, []);

  useEffect(() => {
    const carouselContainer = mobileCarouselRef.current;
    if (!carouselContainer) return;

    let startX = null;
    let startY = null;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (startX === null || startY === null) return;
      const diffX = Math.abs(e.touches[0].clientX - startX);
      const diffY = Math.abs(e.touches[0].clientY - startY);
      if (diffY > diffX) {
        e.stopPropagation();
      }
    };

    carouselContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
    carouselContainer.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      carouselContainer.removeEventListener('touchstart', handleTouchStart);
      carouselContainer.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section id="catalogo" className="relative py-16 bg-gray-50">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold">Catálogo de iPhones</h2>
          <p className="text-gray-600 mt-2">
            Descubre los modelos que tenemos para ti y elige el que se adapte a tu estilo de vida.
          </p>
        </div>

        {/* Vista móvil - Carrusel */}
        <div className="block md:hidden" ref={mobileCarouselRef}>
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            stopOnHover={true}
            swipeable={true}
            emulateTouch={true}
            className="custom-carousel"
            centerMode={true}
            centerSlidePercentage={90}
            selectedItem={0}
            showIndicators={true}
            useKeyboardArrows={false}
          >
            {products.map((iphone) => (
              <div key={iphone.id} className="pb-10">
                <div className="bg-white rounded-xl shadow-lg p-4 mx-1 transform transition-all duration-300 hover:scale-[1.02]">
                  <div className="relative aspect-square mb-4 p-2">
                    <img
                      src={iphone.image}
                      alt={iphone.name}
                      className="w-full h-full object-contain animate-float-slow"
                    />
                  </div>
                  <div className="px-2">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2 min-h-[3.5rem]">
                      {iphone.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2 min-h-[2.5rem]">
                      {iphone.description}
                    </p>
                    <p className="font-bold text-xl text-purple-600 mb-4">
                      {iphone.price}
                    </p>
                    <button className="bg-purple-600 text-white px-6 py-2.5 rounded-full hover:bg-purple-700 transition-all duration-300 w-full font-medium shadow-md hover:shadow-lg active:scale-95">
                      Comprar Ahora
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Vista desktop - Carrusel */}
        <div className="hidden md:block" ref={desktopCarouselRef}>
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={6000}
            stopOnHover={true}
            swipeable={true}
            emulateTouch={true}
            className="custom-carousel-desktop"
            centerMode={true}
            centerSlidePercentage={33.33}
            selectedItem={0}
            showIndicators={true}
            useKeyboardArrows={false}
          >
            {products.map((iphone) => (
              <div key={iphone.id} className="pb-10 px-2">
                <div className="bg-white rounded-xl shadow-lg p-4 mx-2 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <div className="relative aspect-square mb-4 p-2">
                    <img
                      src={iphone.image}
                      alt={iphone.name}
                      className="w-full h-full object-contain animate-float-slow"
                    />
                  </div>
                  <div className="px-2">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2 min-h-[3.5rem]">
                      {iphone.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2 min-h-[2.5rem]">
                      {iphone.description}
                    </p>
                    <p className="font-bold text-xl text-purple-600 mb-4">
                      {iphone.price}
                    </p>
                    <button
                      onClick={() =>
                        window.open(
                          `https://wa.me/5491123900395?text=Hola,%20estoy%20interesado%20en%20el%20${encodeURIComponent(iphone.name)}`,
                          '_blank'
                        )
                      }
                      className="bg-purple-600 text-white px-6 py-2.5 rounded-full hover:bg-purple-700 transition-all duration-300 w-full font-medium shadow-md hover:shadow-lg active:scale-95"
                    >
                      Comprar Ahora
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <style jsx>{`
        .custom-carousel .carousel,
        .custom-carousel-desktop .carousel {
          /* Para desktop, mantenemos la acción horizontal */
          touch-action: pan-x;
        }
        /* En móviles se utiliza "auto" para permitir ambos gestos.
           La lógica en touchmove se encarga de liberar el scroll vertical. */
        @media (max-width: 767px) {
          .custom-carousel .carousel {
            touch-action: auto;
          }
        }

        .custom-carousel .carousel .control-arrow,
        .custom-carousel-desktop .carousel .control-arrow {
          background: rgba(255, 255, 255, 0.9);
          height: 40px;
          width: 40px;
          padding: 0;
          border-radius: 50%;
          margin: 0 10px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .custom-carousel .carousel .control-arrow:hover,
        .custom-carousel-desktop .carousel .control-arrow:hover {
          background: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .custom-carousel .carousel .control-arrow:before,
        .custom-carousel-desktop .carousel .control-arrow:before {
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          margin: 0;
        }

        .custom-carousel .carousel .control-prev.control-arrow:before,
        .custom-carousel-desktop .carousel .control-prev.control-arrow:before {
          border-right: 10px solid #666;
          margin-left: -3px;
        }

        .custom-carousel .carousel .control-next.control-arrow:before,
        .custom-carousel-desktop .carousel .control-next.control-arrow:before {
          border-left: 10px solid #666;
          margin-right: -3px;
        }

        .custom-carousel .carousel .control-dots,
        .custom-carousel-desktop .carousel .control-dots {
          bottom: -5px;
          margin: 0;
          padding: 10px 0;
        }

        .custom-carousel .carousel .dot,
        .custom-carousel-desktop .carousel .dot {
          background: #e2e8f0;
          box-shadow: none;
          border: none;
          width: 8px;
          height: 8px;
          margin: 0 4px;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .custom-carousel .carousel .dot.selected,
        .custom-carousel-desktop .carousel .dot.selected {
          background: #805ad5;
          width: 24px;
          border-radius: 4px;
        }

        .custom-carousel .carousel.carousel-slider,
        .custom-carousel-desktop .carousel.carousel-slider {
          overflow: visible;
        }

        .custom-carousel .carousel .slide,
        .custom-carousel-desktop .carousel .slide {
          padding: 10px 0;
        }
        
        /* Estilos específicos para desktop */
        .custom-carousel-desktop .carousel .control-arrow {
          height: 50px;
          width: 50px;
        }
        
        .custom-carousel-desktop .carousel .control-arrow:before {
          border-top: 12px solid transparent;
          border-bottom: 12px solid transparent;
        }
        
        .custom-carousel-desktop .carousel .control-prev.control-arrow:before {
          border-right: 12px solid #666;
        }
        
        .custom-carousel-desktop .carousel .control-next.control-arrow:before {
          border-left: 12px solid #666;
        }
        
        /* Para pantallas más grandes, ajusta la cantidad de elementos visibles */
        @media (min-width: 1280px) {
          .custom-carousel-desktop .carousel {
            centerSlidePercentage: 25;
          }
        }
      `}</style>
    </section>
  );
};

export default CatalogSection;
