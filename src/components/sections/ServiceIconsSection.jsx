import React from "react";

const ServiceIconsSection = () => {
  const services = [
    {
      icon: (
        <svg
          className="w-12 h-12 text-white mb-4 transform transition-all duration-300 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-.553.894L16 18l-4.447-2.276a1 1 0 00-.894 0L6.447 18l-4.553-2.276A1 1 0 011 14.382V7.618a1 1 0 01.553-.894L6 4.5l4.447 2.276a1 1 0 00.894 0L15 4.5l4.553 2.276A1 1 0 0121 7.618v.36"
          />
        </svg>
      ),
      title: "Cámaras CCTV",
      description: "Sistemas de vigilancia profesional con alta resolución",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-white mb-4 transform transition-all duration-300 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Control de Acceso",
      description: "Gestión inteligente de ingresos y salidas",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-white mb-4 transform transition-all duration-300 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      ),
      title: "Alarmas",
      description: "Sistemas de alerta temprana y monitoreo 24/7",
    },
  ];

  const additionalServices = [
    {
      icon: (
        <svg
          className="w-12 h-12 text-white mb-4 transform transition-all duration-300 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
      title: "Configuración Remota",
      description: "Control y ajustes desde cualquier lugar",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-white mb-4 transform transition-all duration-300 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "Análisis de Video",
      description: "Detección inteligente de eventos",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-white mb-4 transform transition-all duration-300 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Grabación Programada",
      description: "Almacenamiento automático según horarios",
    },
  ];

  return (
    <section className="py-20 bg-[#2980B9] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px] animate-subtle-zoom"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2
          className="text-4xl md:text-5xl font-light text-white text-center mb-12
          animate-float hover:text-shadow-glow cursor-default transition-all duration-300"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Nuestros Servicios
        </h2>

        {/* Main Services */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#2980B9]/20 backdrop-blur-sm p-6 rounded-xl 
              border-2 border-white/10 hover:border-white/30
              transform hover:scale-105 hover:-translate-y-2
              transition-all duration-500 hover:shadow-2xl hover:shadow-white/10
              relative overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Hover Background Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 
                transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {service.icon}
                <h3
                  className="text-2xl font-light text-white mb-3 group-hover:text-shadow-glow
                  transition-all duration-300"
                >
                  {service.title}
                </h3>
                <p className="text-white/80 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {additionalServices.map((service, index) => (
            <div
              key={index}
              className="group bg-[#2980B9]/20 backdrop-blur-sm p-6 rounded-xl 
              border-2 border-white/10 hover:border-white/30
              transform hover:scale-105 hover:-translate-y-2
              transition-all duration-500 hover:shadow-2xl hover:shadow-white/10
              relative overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay={index * 100 + 300}
            >
              {/* Hover Background Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 
                transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {service.icon}
                <h3
                  className="text-2xl font-light text-white mb-3 group-hover:text-shadow-glow
                  transition-all duration-300"
                >
                  {service.title}
                </h3>
                <p className="text-white/80 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceIconsSection;
