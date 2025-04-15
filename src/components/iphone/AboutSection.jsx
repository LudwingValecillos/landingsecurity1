import React from "react";
import {
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import aboutImage1 from "../../assets/images/fotterimnag.png";
import aboutImage2 from "../../assets/images/casa.jpg"; // Reemplaza con imagen del equipo o espacio físico
import gif from "../../assets/images/giphy.webp";

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#101010] to-[#000000] py-12">
      <div className="container mx-auto px-4">
        {/* Título y descripción general */}
        <div
          className="text-center mb-12"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Somos <span className="text-[#87CDEF] font-bold">M-STORE</span>
          </h2>
          <div
            className="max-w-3xl mx-auto bg-[#87CDEF]/90 rounded-lg p-6 mb-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p className="text-white text-center lg:text-xl">
              En <span className="text-[#16536d] font-bold">M-STORE</span> reinventamos la experiencia de comprar celulares. Nuestro compromiso es ofrecerte productos exclusivos y atención premium para que disfrutes lo mejor de la tecnología iPhone.
            </p>
          </div>
        </div>

        {/* Sección: Nuestra Trayectoria y Valores */}
        <div className="flex flex-col md:flex-row mb-12 max-w-5xl mx-auto">
          {/* Imagen representativa */}
          <div
            className="w-full md:w-1/2 md:pr-6 mb-6 md:mb-0"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="rounded-lg overflow-hidden">
              <img
                src={aboutImage1}
                alt="Innovación y Excelencia"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Contenido sobre la Trayectoria */}
          <div
            className="w-full md:w-1/2 flex flex-col justify-center text-white"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <h3
              className="text-2xl lg:text-3xl font-semibold text-[#87CDEF] mb-4"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              Nuestra Trayectoria
            </h3>
            <p className="mb-4">
              Con más de 5 años en el mercado, <span className="text-[#87CDEF] font-bold">M-STORE</span> se ha convertido en el referente de confianza para los amantes de la tecnología y la innovación.  
            </p>
            <ul className="space-y-3">
              {[
                "Productos originales y certificados",
                "Asesoría experta en cada compra",
                "Innovación constante",
                "Compromiso total con el cliente",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center"
                  data-aos="fade-left"
                  data-aos-delay={100 + index * 100}
                >
                  <ShieldCheckIcon className="w-6 h-6 mr-3 text-[#87CDEF]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sección: Nuestro Equipo y Compromiso */}
        <div className="flex flex-col md:flex-row-reverse mb-12 max-w-5xl mx-auto">
          {/* Imagen del equipo */}
          <div
            className="w-full md:w-1/2 md:pl-6 mb-6 md:mb-0"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <div className="rounded-lg overflow-hidden shadow-xl relative">
              <img
                src={gif}
                alt="Equipo Profesional"
                className="w-full object-cover"
                style={{ height: "300px" }}
              />
             
            </div>
          </div>

          {/* Contenido sobre Servicio y Compromiso */}
          <div
            className="w-full md:w-1/2 flex flex-col justify-center text-white"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h3
              className="text-2xl lg:text-3xl font-semibold text-[#87CDEF] mb-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Servicio y Compromiso
            </h3>
            <p className="mb-4">
              En <span className="text-[#87CDEF] font-bold">M-STORE</span> cada experiencia de compra es única. Nuestro equipo se dedica a ofrecer asesoría personalizada y un soporte postventa excepcional, para que disfrutes de la tecnología iPhone sin preocupaciones.
            </p>
            <ul className="space-y-3">
              {[
                "Atención VIP y asesoría premium",
                "Garantía oficial y autenticidad asegurada",
                "Envíos rápidos y seguros",
                "Soporte técnico 24/7",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center"
                  data-aos="fade-right"
                  data-aos-delay={100 + index * 100}
                >
                  <SparklesIcon className="w-6 h-6 mr-3 text-[#87CDEF]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Barra de Estadísticas */}
        <div
          className="flex  justify-center items-center gap-8 lg:gap-16 bg-gray-800 rounded-lg p-6 shadow-xl max-w-4xl mx-auto mt-4 lg:mt-8"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <div
            className="flex items-center gap-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <UserGroupIcon className="w-7 h-7 text-[#87CDEF]" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white">+200</span>
              <span className="text-sm text-gray-300">Clientes</span>
            </div>
          </div>

          <div
            className="flex items-center gap-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <ClockIcon className="w-7 h-7 text-[#87CDEF]" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white">5 Años</span>
              <span className="text-sm text-gray-300">Trayectoria</span>
            </div>
          </div>

          <div
            className="flex items-center gap-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <ShieldCheckIcon className="w-7 h-7 text-[#87CDEF]" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white">100%</span>
              <span className="text-sm text-gray-300">Garantía</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
