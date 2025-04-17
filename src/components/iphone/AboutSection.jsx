import React, { useEffect } from "react";
import {
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import aboutImage1 from "../../assets/images/fotterimnag.png";
import gif from "../../assets/images/giphy.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 700, // dispara más cerca del viewport
      once: true, // sólo una vez por elemento
      anchorPlacement: "top-bottom", // top of element hits bottom of viewport
    });
    AOS.refresh(); // recalcula posiciones tras cargar contenido
  }, []);
  return (
    <section className="bg-gradient-to-b from-[#101010] to-[#000000] py-12">
      <div className="container mx-auto px-4">
        {/* Título y descripción general */}
        <div
          className="text-center mb-12 relative overflow-hidden"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          {/* Fondos difuminados para efecto cromado */}

          <h2
            className="text-3xl lg:text-4xl font-bold mb-4 relative"
            data-aos="zoom-in"
            data-aos-delay="200"
            style={{
              color: "white",
              textShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
            }}
          >
            👋 Somos{" "}
            <span
              style={{
                display: "inline-block",
                position: "relative",
                backgroundImage:
                  "linear-gradient(180deg, #c0e3f2 0%, #87CDEF 50%, #5ba9c9 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fontWeight: "800",
                textShadow: "none",
                filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",
                padding: "0 4px",
              }}
            >
              M-STORE
              {/* Capa para brillos cromados */}
              <span
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: "50%",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  pointerEvents: "none",
                }}
              >
                M-STORE
              </span>
            </span>
          </h2>

          <div
            className="max-w-3xl mx-auto rounded-lg p-6 mb-6 relative"
            data-aos="fade-up"
            data-aos-delay="300"
            style={{
              background:
                "linear-gradient(135deg, rgba(37, 99, 235, 0.9) 0%, rgba(29, 78, 216, 0.9) 100%)",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
            }}
          >
            {/* Efectos de brillo cromado para el recuadro */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "30%",
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "20%",
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)",
              }}
            ></div>

            <p
              className="text-white text-center lg:text-xl relative"
              style={{
                lineHeight: "1.7",
                position: "relative",
                zIndex: 10,
                textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
              }}
            >
              Somos una empresa especializada en tecnología, y dentro de nuestra
              línea de productos, los IPhones ocupan un lugar destacado.
              Ofrecemos equipos 100% originales, con{" "}
              <span className="font-bold">
                12 meses de garantía oficial directamente con Apple y entrega
                inmediata con retiro por nuestra oficina comercial ubicada en
                CABA.
              </span>
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
              📱 Confianza y Experiencia
            </h3>
            <p className="mb-4">
              Hace más de 5 años que trabajamos con tecnología Apple, ofreciendo
              una experiencia de compra clara, segura y cercana. Sabemos lo que
              buscás: productos confiables, atención real, y precios en USD que
              realmente valen la pena.
            </p>
            <h4
              className="text-xl font-semibold text-[#87CDEF] mb-4"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              Lo que nos distingue:
            </h4>
            <ul className="space-y-3">
              {[
                "Productos 100% nuevos y originales",
                "Asesoramiento personalizado",
                "Retiro inmediato en nuestra oficina comercial en CABA",
                "El mejor precio en USD del mercado",
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
              Atención personalizada de verdad
            </h3>
            <p className="mb-4">
              En <span className="text-[#87CDEF] font-bold">M-STORE</span> te
              asesoramos de forma directa, sin scripts ni respuestas
              automáticas. Estamos para ayudarte a elegir el iPhone que mejor se
              adapta a vos, y acompañarte durante todo el proceso de compra.
            </p>
            <h4
              className="text-xl font-semibold text-[#87CDEF] mb-4"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Lo que te ofrecemos:
            </h4>
            <ul className="space-y-3">
              {[
                "Atención humana y personalizada en nuestra oficina",
                "Productos originales con garantía oficial de Apple",
                "Coordinación rápida para retiro o visitas",
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