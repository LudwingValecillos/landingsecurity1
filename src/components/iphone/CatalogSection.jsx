import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import mobile1 from '../../assets/images/iphone16.png';
import mobile2 from '../../assets/images/iphone13azulmedianoche.png';
import mobile3 from '../../assets/images/Iphone15negro.png';
import mobile4 from '../../assets/images/iphone16rosa.png';
import mobile5 from '../../assets/images/iphone16azulultramarino.png';
import mobile6 from '../../assets/images/iphone16titanionegro.png';

const CatalogSection = () => {
  const iphonesCatalog = [
    {
      id: 1,
      name: 'Apple iPhone 16 De 128 Gb negro',
      price: 'R$ 7.999',
      imageUrl: mobile1,
      description:
        'Máxima potencia y eficiencia, ideal para profesionales y entusiastas de la tecnología.',
    },
    {
      id: 2,
      name: 'Apple iPhone 13 (128 Gb) - Azul Medianoche',
      price: 'R$ 6.299',
      imageUrl: mobile2,
      description:
        'Un gran equilibrio entre diseño y rendimiento para el uso diario.',
    },
    {
      id: 3,
      name: 'Apple iPhone 15 (128 GB) - Negro',
      price: 'R$ 5.499',
      imageUrl: mobile3,
      description:
        'El tamaño perfecto y la potencia que necesitas para trabajar y disfrutar.',
    },
    {
      id: 4,
      name: 'Apple iPhone 16 De 128 Gb Rosa',
      price: 'R$ 4.799',
      imageUrl: mobile4,
      description:
        'Diseño elegante, tecnología avanzada y excelente calidad de cámara.',
    },
    {
      id: 5,
      name: 'Apple iPhone 16 De 128 Gb Azul Ultramarino',
      price: 'R$ 2.999',
      imageUrl: mobile5,
      description:
        'Compacto, potente y accesible, ideal para quienes buscan calidad y economía.',
    },
    {
      id: 6,
      name: 'Apple iPhone 16 Pro (128 Gb) - Titanio Negro',
      price: 'R$ 2.999',
      imageUrl: mobile6,
      description:
        'Compacto, potente y accesible, ideal para quienes buscan calidad y economía.',
    },
  ];

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
        <div className="block md:hidden">
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
          >
            {iphonesCatalog.map((iphone) => (
              <div key={iphone.id} className="pb-10">
                <div className="bg-white rounded-xl shadow-lg p-4 mx-1 transform transition-all duration-300 hover:scale-[1.02]">
                  <div className="relative aspect-square mb-4 p-2">
                    <img
                      src={iphone.imageUrl}
                      alt={iphone.name}
                      className="w-full h-full object-contain animate-float-slow"
                    />
                  </div>
                  <div className="px-2">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2 min-h-[3.5rem]">{iphone.name}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2 min-h-[2.5rem]">{iphone.description}</p>
                    <p className="font-bold text-xl text-purple-600 mb-4">{iphone.price}</p>
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
        <div className="hidden md:block">
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
          >
            {iphonesCatalog.map((iphone) => (
              <div key={iphone.id} className="pb-10 px-2">
                <div className="bg-white rounded-xl shadow-lg p-4 mx-2 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <div className="relative aspect-square mb-4 p-2">
                    <img
                      src={iphone.imageUrl}
                      alt={iphone.name}
                      className="w-full h-full object-contain animate-float-slow"
                    />
                  </div>
                  <div className="px-2">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2 min-h-[3.5rem]">{iphone.name}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2 min-h-[2.5rem]">{iphone.description}</p>
                    <p className="font-bold text-xl text-purple-600 mb-4">{iphone.price}</p>
                    <button onClick={() => window.open(`https://wa.me/5491123900395?text=Hola,%20estoy%20interesado%20en%20el%20${encodeURIComponent(iphone.name)}`, '_blank')} className="bg-purple-600 text-white px-6 py-2.5 rounded-full hover:bg-purple-700 transition-all duration-300 w-full font-medium shadow-md hover:shadow-lg active:scale-95">
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
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }
        
        .custom-carousel .carousel .control-arrow:hover,
        .custom-carousel-desktop .carousel .control-arrow:hover {
          background: white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
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