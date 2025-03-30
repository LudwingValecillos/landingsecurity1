import React from "react";

const WelcomeSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#E6EBED]/50 to-white z-0"></div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div
          className="md:w-1/2"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <h2 className="text-[#2980B9] text-4xl font-light mb-8 transform hover:scale-105 transition-all duration-300">
            Bienvenidos a la Consulta de la Dra. Marianela Sora
          </h2>
          <p
            className="text-gray-700 mb-8 leading-relaxed text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Con más de 25 años de experiencia en odontología, nuestro
            consultorio cuenta con equipamiento tecnológico de vanguardia,
            profesionales capacitados y un equipo comprometido con la atención
            del paciente. Te brindamos una experiencia dental placentera,
            utilizando tecnología de última generación y procedimientos de
            calidad siguiendo los mejores protocolos del sector.
          </p>
          <h3
            className="text-[#2980B9] text-2xl mb-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            ¿Listo para tu sonrisa ideal?
          </h3>
          <button
            className="bg-[#2980B9] text-white px-8 py-3 rounded-full text-lg
            hover:bg-[#2980B9]/80 transition-all duration-300 transform hover:scale-105
            hover:shadow-xl"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Pedir un Turno
          </button>
        </div>
        <div
          className="md:w-1/2 transform hover:scale-105 transition-all duration-500"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#2980B9]/20 rounded-lg transition-all duration-300 hover:bg-transparent"></div>
            <img
              src="/consultorio.jpg"
              alt="Consultorio dental"
              className="rounded-lg shadow-2xl w-full transform hover:rotate-2 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
