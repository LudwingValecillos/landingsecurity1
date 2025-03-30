import React from "react";
import {
  FaceSmileIcon,
  VideoCameraIcon,
  DevicePhoneMobileIcon,
  CloudArrowUpIcon,
} from "@heroicons/react/24/outline";

const TechnologySection = () => {
  const technologies = [
    {
      title: "Reconocimiento Facial",
      description: "Sistema avanzado de identificación de personas con IA",
      icon: FaceSmileIcon,
      delay: 0,
    },
    {
      title: "Analítica de Video",
      description:
        "Detección de objetos y comportamientos sospechosos en tiempo real",
      icon: VideoCameraIcon,
      delay: 200,
    },
    {
      title: "App de Control",
      description: "Gestión remota de cámaras y alertas desde tu smartphone",
      icon: DevicePhoneMobileIcon,
      delay: 400,
    },
    {
      title: "Almacenamiento Cloud",
      description: "Respaldo seguro en la nube con acceso 24/7",
      icon: CloudArrowUpIcon,
      delay: 600,
    },
  ];

  return (
    <section className="py-20 bg-[#2980B9] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2980B9] to-[#2980B9]/70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div
          className="text-center mb-16"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl font-light mb-4">Tecnología Avanzada</h2>
          <p className="text-xl opacity-90">
            Soluciones Inteligentes
            <br />
            <span className="text-lg opacity-75">
              Innovación en Seguridad Digital
            </span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={tech.delay}
                data-aos-duration="1000"
              >
                <div className="flex items-center gap-8">
                  <div className="relative w-32 h-32 flex-shrink-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[#2980B9]/10 rounded-xl group-hover:bg-transparent transition-all duration-300"></div>
                    <Icon className="w-20 h-20 text-[#2980B9] transform group-hover:scale-110 transition-all duration-500" />
                  </div>
                  <div>
                    <h3 className="text-[#2980B9] text-2xl font-semibold mb-3 group-hover:text-[#2980B9]/80 transition-colors duration-300">
                      {tech.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#E6EBED] to-transparent"
        data-aos="fade-up"
        data-aos-duration="1500"
      ></div>
    </section>
  );
};

export default TechnologySection;
