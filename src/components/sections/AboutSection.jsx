import React from "react";
import {
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import aboutImage1 from "../../assets/images/seguridad.jpg";
import aboutImage2 from "../../assets/images/profesional.jpg";

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-blue-200 py-8">
      <div className="container mx-auto px-4">
        {/* Title and Description */}
        <div
          className="text-center mb-8"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <h2
            className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Instalación rapida y segura
          </h2>
          <div
            className="max-w-3xl mx-auto bg-blue-600 rounded-lg p-4 mb-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p className="text-white text-center">
              Nos encargamos de la instalación de cámaras de seguridad con
              técnicos especializados, garantizando un servicio profesional y
              eficiente. Contamos con diferentes planes según tus necesidades y
              presupuesto.
            </p>
          </div>
        </div>

        {/* First Feature: Technology */}
        <div className="flex flex-col md:flex-row mb-8 max-w-5xl mx-auto">
          {/* Image */}
          <div
            className="w-full md:w-1/2 md:pr-6 mb-4 md:mb-0"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="rounded-lg overflow-hidden shadow-md relative">
              <img
                src={aboutImage1}
                alt="Tecnología de Seguridad"
                className="w-full object-cover"
                style={{ height: "280px" }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white text-center py-2 text-sm">
                Tecnología Avanzada
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className="w-full md:w-1/2 flex flex-col justify-center"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <h3
              className="text-xl lg:text-2xl font-semibold text-blue-700 mb-4"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              Tecnología de Vanguardia
            </h3>

            <ul className="space-y-2">
              {[
                "Cámaras HD con visión nocturna",
                "Sistemas de alarma inteligentes",
                "Control desde tu celular",
                "Seguridad 24/7",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-900"
                  data-aos="fade-left"
                  data-aos-delay={100 + index * 100}
                >
                  <ShieldCheckIcon className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Second Feature: Service */}
        <div className="flex flex-col md:flex-row-reverse mb-8 max-w-5xl mx-auto">
          {/* Image */}
          <div
            className="w-full md:w-1/2 md:pl-6 mb-4 md:mb-0"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <div className="rounded-lg overflow-hidden shadow-md relative">
              <img
                src={aboutImage2}
                alt="Servicio Profesional"
                className="w-full object-cover"
                style={{ height: "280px" }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white text-center py-2 text-sm">
                Servicio Garantizado
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className="w-full md:w-1/2 flex flex-col justify-center"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h3
              className="text-xl lg:text-2xl font-semibold text-blue-700 mb-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Servicio Profesional
            </h3>

            <ul className="space-y-2">
              {[
                "Instalación profesional certificada",
                "Mantenimiento preventivo regular",
                "Soporte técnico 24/7",
                "Respuesta rápida a emergencias",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-900"
                  data-aos="fade-right"
                  data-aos-delay={100 + index * 100}
                >
                  <SparklesIcon className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Bar */}
        <div
          className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 bg-white rounded-lg p-4 shadow-md max-w-4xl mx-auto mt-8"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <div
            className="flex items-center gap-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <UserGroupIcon className="w-6 h-6 text-blue-600" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-800">+1000</span>
              <span className="text-xs text-gray-600">Clientes</span>
            </div>
          </div>

          <div
            className="flex items-center gap-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <ClockIcon className="w-6 h-6 text-blue-600" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-800">5 Años</span>
              <span className="text-xs text-gray-600">Experiencia</span>
            </div>
          </div>

          <div
            className="flex items-center gap-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <ShieldCheckIcon className="w-6 h-6 text-blue-600" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-800">100%</span>
              <span className="text-xs text-gray-600">Seguridad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
