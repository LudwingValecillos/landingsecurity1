import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import mobile1 from '../../assets/images/iphone16.png';
import mobile2 from '../../assets/images/iphone13azulmedianoche.png';
import mobile3 from '../../assets/images/Iphone15negro.png';
import mobile4 from '../../assets/images/iphone16rosa.png';
import mobile5 from '../../assets/images/iphone16azulultramarino.png';
import mobile6 from '../../assets/images/iphone16titanionegro.png';

const CatalogSection = ({ products = [] }) => {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section id="catalogo" className="relative py-16 bg-gray-50">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800">Catálogo de iPhones</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Descubre los modelos que tenemos para ti y elige el que se adapte a tu estilo de vida.
          </p>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Vista móvil */}
        <div className="block md:hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={15}
            slidesPerView={1.2}
            centeredSlides={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="mobile-swiper"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 border border-gray-100">
                  <div className="relative pt-[100%] bg-gradient-to-b from-gray-50 to-white">
                    <img
                      src={product.image || mobile1}
                      alt={product.name}
                      className="absolute top-0 left-0 w-full h-full object-contain p-4"
                    />
                    <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Nuevo
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-1 text-gray-800">{product.name}</h3>
                    <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.description}</p>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-center">
                        <span className="text-2xl text-center font-bold text-purple-600">${product.price}</span>
                      </div>
                      <button 
                        onClick={() =>
                          window.open(
                            `https://wa.me/5491123900395?text=Hola,%20estoy%20interesado%20en%20el%20${encodeURIComponent(product.name)}`,
                            '_blank'
                          )
                        }
                        className="bg-purple-600 text-white w-full py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm flex items-center justify-center"
                      >
                        Contactanos
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Vista desktop */}
        <div className="hidden md:block">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="desktop-swiper"
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30
              }
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl border border-gray-100 h-full flex flex-col">
                  <div className="relative pt-[90%] bg-gradient-to-b from-gray-50 to-white">
                    <img
                      src={product.image || mobile1}
                      alt={product.name}
                      className="absolute top-0 left-0 w-full h-full object-contain p-6"
                    />
                    <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Nuevo
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-1 text-gray-800">{product.name}</h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-purple-600">${product.price}</span>
                      </div>
                      <button
                        onClick={() =>
                          window.open(
                            `https://wa.me/5491123900395?text=Hola,%20estoy%20interesado%20en%20el%20${encodeURIComponent(product.name)}`,
                            '_blank'
                          )
                        }
                        className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm"
                      >
                        Contactanos
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .mobile-swiper,
        .desktop-swiper {
          padding: 30px 10px;
        }

        :global(.swiper-button-next),
        :global(.swiper-button-prev) {
          background: rgba(255, 255, 255, 0.9);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        :global(.swiper-button-next:hover),
        :global(.swiper-button-prev:hover) {
          background: white;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
        }

        :global(.swiper-button-next::after),
        :global(.swiper-button-prev::after) {
          font-size: 18px;
          color: #805ad5;
          font-weight: bold;
        }

        :global(.swiper-pagination-bullet) {
          background: #e2e8f0;
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }

        :global(.swiper-pagination-bullet-active) {
          background: #805ad5;
          width: 24px;
          border-radius: 4px;
        }

        @media (min-width: 768px) {
          :global(.swiper-button-next),
          :global(.swiper-button-prev) {
            width: 50px;
            height: 50px;
          }

          :global(.swiper-button-next::after),
          :global(.swiper-button-prev::after) {
            font-size: 22px;
          }
        }
      `}</style>
    </section>
  );
};

export default CatalogSection;