import React from "react";

const VideoSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Nuestra Oficina</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Video Container */}
          <div className="w-full lg:w-3/5 rounded-xl overflow-hidden shadow-2xl">
            <div className="relative aspect-video">
              <iframe
                src="https://drive.google.com/file/d/1VtEp0KBRQh8ozG9frdhSNutTlhfXDQcU/preview"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                title="Video de Nuestra Oficina"
              ></iframe>
            </div>
          </div>

          {/* Content Container */}
          <div className="w-full lg:w-2/5 mt-8 lg:mt-0">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Visítanos en nuestra oficina
              </h3>

              <p className="text-gray-600 mb-6">
                En <span className="text-blue-500 font-bold">M-STORE</span> nos enorgullecemos de ofrecerte un espacio cómodo y seguro para que conozcas y retires tu nuevo iPhone. Ubicados estratégicamente en CABA, contamos con un showroom donde podrás verificar tu equipo antes de realizar la compra.
              </p>

              <div className="space-y-4">
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
                    <p className="text-gray-600 text-sm">
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
                    <p className="text-gray-600 text-sm">
                      Lunes a viernes de 10:00 a 19:00 hs y sábados de 10:00 a 14:00 hs.
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
                    <p className="text-gray-600 text-sm">
                      Nuestros asesores te guiarán y despejarán todas tus dudas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/5491123900395?text=Hola,%20estoy%20interesado%20en%20el%20comprar%20un%20iPhone%20y%20me%20gustaría%20saber%20más%20detalles%20sobre%20los%20productos%20disponibles%20y%20las%20ofertas%20actuales.`,
                      "_blank"
                    )
                  }
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center gap-2"
                >
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                  Agendar Visita
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
