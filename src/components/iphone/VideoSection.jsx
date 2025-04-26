import React, { useEffect, useRef } from "react";
import video1 from "../../assets/images/large1.mp4";
import video2 from "../../assets/images/large2.mp4";
import video3 from "../../assets/images/large3.mp4";
import logo from "../../assets/images/logo.png";
import imageVideo2 from "../../assets/images/place1.png"
import imageVideo3 from "../../assets/images/place2.png"

import { CalendarDays } from "lucide-react";

const VideoSection = () => {
  // Referencia solo para el primer video que sí se reproducirá automáticamente
  const firstVideoRef = useRef(null);

  // Efecto para el autoplay solo del primer video
  useEffect(() => {
    // Solo configuramos observer para el primer video
    if (firstVideoRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry && entry.isIntersecting) {
            // Retrasamos la reproducción para evitar bloqueo de UI
            setTimeout(() => {
              firstVideoRef.current?.play().catch((err) =>
                console.error("Error al reproducir el primer video:", err)
              );
              // Desconectamos el observer después de la reproducción
              observer.disconnect();
            }, 300);
          }
        },
        { threshold: 0.3, rootMargin: "100px" }
      );

      observer.observe(firstVideoRef.current);
      
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  const handleVisitClick = () => {
    window.open(
      "https://wa.me/5491123900395?text=Hola,%20estoy%20interesado%20en%20el%20comprar%20un%20iPhone%20y%20me%20gustaría%20saber%20más%20detalles%20sobre%20los%20productos%20disponibles%20y%20las%20ofertas%20actuales.",
      "_blank"
    );
  };
  useEffect(() => {
    // Observador para cargar el iframe del mapa cuando sea visible
    const mapObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const iframe = entry.target;
            if (iframe.getAttribute('src') === 'about:blank') {
              iframe.setAttribute('src', iframe.dataset.src);
            }
            mapObserver.unobserve(iframe);
          }
        });
      },
      { threshold: 0.1, rootMargin: '200px' }
    );
  
    // Observar todos los iframes
    document.querySelectorAll('iframe[data-src]').forEach(iframe => {
      mapObserver.observe(iframe);
    });
  
    return () => {
      mapObserver.disconnect();
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Nuestra Oficina</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3"></div>
          <p className="textt-black text-center text-xl font-bold mt-4 mx-auto">
            Conoce nuestras instalaciones y el proceso de compra segura que te
            ofrecemos para tu nuevo iPhone
          </p>
        </div>

        {/* Videos horizontales */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
          {/* Primer video - con autoplay */}
          <div className="w-full rounded-xl overflow-hidden shadow-2xl mb-8">
            <div className="relative aspect-video">
              <h3 className="absolute top-0 left-0 bg-blue-500 text-white px-3 py-1 text-sm rounded-br-lg z-10">
                Nuestras Instalaciones
              </h3>
              <video
                ref={firstVideoRef}
                className="absolute inset-0 object-cover w-full h-full"
                muted
                playsInline
                preload="metadata"
                loop
                poster="/api/placeholder/640/360"
                controls
              >
                <source src={video1} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            <div className="bg-gray-50 rounded-b-lg p-3 text-center">
              <p className="textt-black">
                <span className="text-blue-500">↑</span> Conoce nuestra oficina
                en el centro de CABA
              </p>
            </div>
          </div>

          {/* Segundo video - sin autoplay */}
          <div className="w-full rounded-xl overflow-hidden shadow-2xl mb-8">
  <div className="relative aspect-video">
    <h3 className="absolute top-0 left-0 bg-blue-500 text-white px-3 py-1 text-sm rounded-br-lg z-10">
      Retirá tu iPhone en <span className="font-bold"> M-STORE</span>
    </h3>
    <video
      className="absolute inset-0 object-cover w-full h-full"
      muted
      playsInline
      preload="none"
      loop
      poster={imageVideo2}
      controls
    >
      <source src={video3} type="video/mp4" />
      Tu navegador no soporta el elemento de video.
    </video>
  </div>
  <div className="bg-gray-50 rounded-b-lg p-3 text-center">
    <p className="textt-black">
      <span className="text-blue-500">↑</span> Te invitamos a nuestra
      oficina en el centro de CABA para retirar tu iPhone.
    </p>
  </div>
</div>
        </div>

        {/* Contenedor para video vertical e información */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Video vertical - sin autoplay */}
          <div className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-xl">
            <div className="relative aspect-[9/16]">
              <h3 className="absolute top-0 left-0 bg-purple-500 text-white px-3 py-1 text-sm rounded-br-lg z-10">
                Proceso de Compra
              </h3>
              <video
                className="absolute inset-0 object-cover w-full h-full"
                muted
                playsInline
                preload="none"
                loop
                poster={imageVideo3}
                controls
              >
                <source src={video2} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            <div className="bg-gray-50 rounded-b-lg p-3 text-center">
              <p className="textt-black">
                <span className="text-purple-500">↑</span> Conoce el proceso de
                asesoramiento y compra
              </p>
            </div>
          </div>

          {/* Información */}
          <div className="w-full md:w-2/3">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100 h-full">
              <h3 className="text-xl text-center lg:text-2xl font-bold text-gray-800">
                Visítanos en nuestra oficina
              </h3>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>

              <p className="textt-black mb-6">
                En <span className="text-blue-500 font-bold">M-STORE</span> nos
                enorgullecemos de ofrecerte un espacio cómodo y seguro para que
                conozcas y retires tu nuevo iPhone. Ubicados estratégicamente en
                CABA, contamos con un showroom donde podrás verificar tu equipo
                antes de realizar la compra.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Feature boxes */}
                <div className="flex items-start gap-3">
                  <div className="text-blue-500 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Ubicación Céntrica
                    </h4>
                    <p className="textt-black text-sm">
                      En pleno centro de CABA, con fácil acceso por transporte
                      público.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-blue-500 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Horario Extendido
                    </h4>
                    <p className="textt-black text-sm">
                      Lunes a viernes de 10:00 a 19:00 hs y sábados de 10:00 a
                      14:00 hs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-blue-500 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12c0 4.972-4.03 9-9 9s-9-4.028-9-9 4.03-9 9-9 9 4.028 9 9Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Atención Personalizada
                    </h4>
                    <p className="textt-black text-sm">
                      Nuestros asesores te guiarán y despejarán todas tus dudas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-purple-500 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Compra Segura</h4>
                    <p className="textt-black text-sm">
                      Verificá tu equipo antes de finalizar la compra y obtené
                      garantía oficial.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map - lazy loaded */}
              <div className="rounded-2xl shadow-xl h-64 mt-2">
                <iframe
                  title="mapa"
                  loading="lazy"
                  src="about:blank"
                  data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.997229234464!2d-58.39003602425973!3d-34.60423157295409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac41f95bf57%3A0xb5d19b7830d5cf6b!2sAv.%20Corrientes%201464%20piso%204%20Oficina%201%2C%20C1042AAN%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1743399802839!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-2xl"
                  onLoad={(e) => {
                    // Cuando el iframe esté visible, cargar el mapa real
                    if (e.target.getAttribute('src') === 'about:blank') {
                      e.target.setAttribute('src', e.target.dataset.src);
                    }
                  }}
                ></iframe>
              </div>

              <div className="mt-8 flex flex-col lg:flex-row items-center justify-evenly gap-4">
                <button
                  onClick={handleVisitClick}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center gap-2 w-full md:w-auto justify-center"
                >
                  <CalendarDays />
                  Agendar Visita
                </button>
                <a
                  href="https://tiendamstore.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center gap-2 w-full md:w-auto justify-center"
                >
                  <img src={logo} alt="Logo" className="w-7 h-6 text-center" />
                  Visita Nuestra Tienda Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Agregamos un cargador para el mapa


export default VideoSection;