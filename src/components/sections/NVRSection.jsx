import React from "react";
import nvrImage from "../../assets/images/nvrsinfondo.png"; // Asegúrate de tener esta imagen
import nvrImage2 from "../../assets/images/casa.jpg"; // Asegúrate de tener esta imagen

const NVRSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido del lado izquierdo */}
          <div
            className="space-y-8"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-light text-blue-400">
                ¿Qué es un NVR y por qué es importante?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Un NVR (Network Video Recorder) es un dispositivo que graba
                video de cámaras IP de manera digital. A diferencia de un DVR
                tradicional, el NVR recibe la señal directamente de las cámaras
                a través de una red, permitiendo mejor calidad de imagen, acceso
                remoto y más funcionalidades avanzadas.
              </p>
            </div>

            {/* Ventajas del NVR */}
            <div className="bg-blue-900/30 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-light text-blue-400 mb-6">
                Ventajas del NVR
              </h3>
              <ul className="space-y-4">
                <li
                  className="flex items-start space-x-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <span className="text-blue-400 text-xl">✓</span>
                  <span>Calidad de imagen superior (hasta 4K)</span>
                </li>
                <li
                  className="flex items-start space-x-3"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <span className="text-blue-400 text-xl">✓</span>
                  <span>Acceso remoto desde celulares y computadoras</span>
                </li>
                <li
                  className="flex items-start space-x-3"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <span className="text-blue-400 text-xl">✓</span>
                  <span>Menos cables, ideal para instalaciones modernas</span>
                </li>
                <li
                  className="flex items-start space-x-3"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <span className="text-blue-400 text-xl">✓</span>
                  <span>
                    Funciones avanzadas como detección de movimiento y
                    reconocimiento facial
                  </span>
                </li>
              </ul>
            </div>

            {/* Para quién es recomendable */}
            <div
              className="bg-blue-900/20 rounded-2xl p-6 backdrop-blur-sm"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h3 className="text-2xl font-light text-blue-400 mb-4">
                ¿Para quién es recomendable un NVR?
              </h3>
              <p className="text-gray-300">
                Es ideal para empresas, negocios u hogares quienes buscan máxima
                seguridad con monitoreo remoto en tiempo real.
              </p>
            </div>
          </div>

          {/* Imagen del lado derecho */}
          <div
            className="relative group"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105"
              style={{
                backgroundImage: `url(${nvrImage2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src={nvrImage}
                alt="Sistema NVR"
                className="w-full h-auto object-cover rounded-2xl bg-black/80 transition-transform duration-700 hover:opacity-90"
                data-aos="zoom-in"
                data-aos-delay="600"
                data-aos-duration="1000"
              />
              {/* Overlay con efecto de gradiente */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Elementos decorativos con animaciones */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-pulse"
              data-aos="fade-down"
              data-aos-delay="800"
              data-aos-duration="1500"
            ></div>
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse"
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="1500"
            ></div>


            {/* Indicadores de tecnología animados */}
            <div className="absolute top-4 right-4 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-xs text-white bg-black/50 px-2 py-1 rounded-full">
                4K Ultra HD
              </span>
            </div>
            <div className="absolute bottom-4 left-4 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span className="text-xs text-white bg-black/50 px-2 py-1 rounded-full">
                Smart Detection
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NVRSection;
