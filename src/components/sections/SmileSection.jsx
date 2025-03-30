import React from "react";

const SmileSection = () => {
  return (
    <section className="py-20 bg-[#E6EBED] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-white to-[#E6EBED] opacity-50"></div>
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        <div
          className="md:w-1/2 group"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-[#2980B9]/20 group-hover:bg-transparent transition-all duration-500"></div>
            <img
              src="/recepcion.jpg"
              alt="Recepción del consultorio"
              className="rounded-lg shadow-2xl w-full transform group-hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
        <div className="md:w-1/2" data-aos="fade-left" data-aos-duration="1200">
          <h2
            className="text-[#2980B9] text-4xl font-light mb-8 transform hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Tu sonrisa, nuestra prioridad
          </h2>
          <p
            className="text-gray-700 text-lg leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Contamos con un consultorio con equipamiento tecnológico de
            vanguardia, profesionales capacitados y un equipo comprometido con
            la atención del paciente. Te brindamos una experiencia dental
            placentera y de calidad.
          </p>
          <div
            className="mt-8 transform hover:translate-x-2 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <a
              href="#contact"
              className="text-[#2980B9] text-lg font-medium flex items-center group"
            >
              Conoce más sobre nosotros
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmileSection;
