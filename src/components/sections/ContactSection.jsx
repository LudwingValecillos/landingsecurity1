import React, { useState } from "react";
import contactImage from "../../assets/images/cv.avif";
import face from "../../assets/images/facebook-color-svgrepo-com.svg";
import insta from "../../assets/images/instagram-1-svgrepo-com.svg";
import social from "../../assets/images/social-svgrepo-com.svg";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      // Prepare the email data for Brevo API
      const emailData = {
        sender: {
          name: formData.nombre,
          email: "ludwingvaldev@gmail.com",
        },
        to: [
          {
            email: "admin@tiendamstore.com",
            name: "Admin",
          },
        ],
        subject: `Nueva solicitud de contacto de ${formData.nombre}`,
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2980B9;">Nueva solicitud de contacto</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
              <p><strong>Nombre:</strong> ${formData.nombre}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Teléfono:</strong> ${formData.telefono}</p>
              <p><strong>Mensaje:</strong></p>
              <p style="white-space: pre-wrap;">${formData.mensaje}</p>
            </div>
          </div>
        `,
      };

      // Send the email using Brevo API
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": import.meta.env.VITE_BREVO_API_KEY,
        },
        body: JSON.stringify(emailData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Mensaje enviado con éxito. Nos comunicaremos contigo pronto.",
        });
        // Reset form
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          mensaje: "",
        });
      } else {
        throw new Error(result.message || "Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Hubo un problema al enviar el mensaje. Por favor intenta nuevamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      className="py-20 relative overflow-hidden bg-black/60"
      id="contacto"
      style={{
        backgroundImage: `url(${contactImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="absolute inset-0 "></div>
      <div className="container mx-auto px-4 relative z-10">
        <div
          className="text-center mb-16"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl font-light text-blue-300 mb-4">
            ¿Tienes dudas?
          </h2>
          <p className="text-gray-100 text-lg">
            Contáctanos y solicita una cotización para tu sistema de seguridad
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Columna izquierda: Formulario y Mapa */}
          <div className="flex flex-col gap-8 h-full">
            {/* Formulario */}
            <div
              className="bg-white rounded-2xl shadow-xl p-5 w-full flex-1"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h3 className="text-xl font-light text-[#2980B9] mb-4 text-center">
                Solicita tu Cotización
              </h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label
                      className="block text-gray-700 mb-1 font-medium text-sm"
                      htmlFor="nombre"
                    >
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-[#2980B9] focus:ring-1 focus:ring-[#2980B9]/20 transition-all duration-300 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 mb-1 font-medium text-sm"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-[#2980B9] focus:ring-1 focus:ring-[#2980B9]/20 transition-all duration-300 text-sm"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-gray-700 mb-1 font-medium text-sm"
                    htmlFor="telefono"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-[#2980B9] focus:ring-1 focus:ring-[#2980B9]/20 transition-all duration-300 text-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 mb-1 font-medium text-sm"
                    htmlFor="mensaje"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-[#2980B9] focus:ring-1 focus:ring-[#2980B9]/20 transition-all duration-300 text-sm"
                    required
                    placeholder="Describe tu proyecto o necesidades específicas..."
                  ></textarea>
                </div>

                {submitStatus.message && (
                  <div
                    className={`p-2 rounded-lg text-sm ${
                      submitStatus.type === "success"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full ${
                    isSubmitting
                      ? "bg-gray-400"
                      : "bg-[#2980B9] hover:bg-[#2980B9]/90 hover:scale-105"
                  } text-white py-2 rounded-lg transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    "Solicitar cotización"
                  )}
                </button>
              </form>
            </div>

            {/* Mapa */}
            <div
              className="rounded-2xl overflow-hidden shadow-xl h-[250px]"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <iframe
                title="mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.997229234464!2d-58.39003602425973!3d-34.60423157295409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac41f95bf57%3A0xb5d19b7830d5cf6b!2sAv.%20Corrientes%201464%20piso%204%20Oficina%201%2C%20C1042AAN%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1743399802839!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Columna derecha: Información de contacto */}
          <div
            className="bg-white rounded-2xl shadow-xl p-6 h-full flex flex-col"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h3 className="text-xl font-light text-[#2980B9] mb-4">
              Información de contacto
            </h3>
            <div className="space-y-4 flex-1">
              <div className="flex items-start space-x-4">
                <svg
                  className="w-6 h-6 text-[#2980B9] mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <h4 className="font-medium text-gray-700">Oficina Central</h4>
                  <p className="text-gray-600">
                    Av. Corrientes 1464 piso 4 Oficina 1, Ciudad Autónoma de
                    Buenos Aires
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <svg
                  className="w-6 h-6 text-[#2980B9] mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <h4 className="font-medium text-gray-700">
                    Teléfono de contacto
                  </h4>
                  <p className="text-gray-600">1123900395</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <svg
                  className="w-6 h-6 text-[#2980B9] mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <h4 className="font-medium text-gray-700">Email</h4>
                  <p className="text-gray-600">admin@tiendamstore.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <svg
                  className="w-6 h-6 text-[#2980B9] mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=100085901675374"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-300"
                  >
                    <img src={face} alt="Facebook" className="w-8 h-8" />
                  </a>
                  <a
                    href="https://www.instagram.com/tiendamstoreok"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-300"
                  >
                    <img src={insta} alt="Instagram" className="w-8 h-8" />
                  </a>
                </div>
              </div>

              {/* Medios de Pago */}
              <div className="pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-700 mb-4">
                  Medios de Pago
                </h4>
                <div
                  className="grid grid-cols-4 sm:grid-cols-6 gap-2"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {/* Tarjetas de Crédito */}
                  <img
                    src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png"
                    alt="Visa"
                    className="h-8 object-contain"
                  />
                  <img
                    src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png"
                    alt="Mastercard"
                    className="h-8 object-contain"
                  />
                  <img
                    src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png"
                    alt="American Express"
                    className="h-8 object-contain"
                  />
                  <img
                    src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/banelco@2x.png"
                    alt="Banelco"
                    className="h-8 object-contain"
                  />
                  <img
                    src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cabal@2x.png"
                    alt="Cabal"
                    className="h-8 object-contain"
                  />
                  <img
                    src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png"
                    alt="Tarjeta Naranja"
                    className="h-8 object-contain"
                  />
                  <img
                    src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/diners@2x.png"
                    alt="Tarjeta Naranja"
                    className="h-8 object-contain"
                  />
                  <img
                    src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/link@2x.png"
                    alt="Tarjeta Naranja"
                    className="h-8 object-contain"
                  />
                  <img
                    src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-shopping@2x.png"
                    alt="Tarjeta Naranja"
                    className="h-8 object-contain"
                  />
                  <img
                    src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/provincianet@2x.png"
                    alt="Tarjeta Naranja"
                    className="h-8 object-contain"
                  />
                  <img
                    src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/argencard@2x.png"
                    alt="Tarjeta Naranja"
                    className="h-8 object-contain"
                  />
                  <img
                    src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/pagofacil@2x.png"
                    alt="Tarjeta Naranja"
                    className="h-8 object-contain"
                  />
                  <img
                    src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/rapipago@2x.png"
                    alt="Tarjeta Naranja"
                    className="h-8 object-contain"
                  />
                  <img
                    src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visadebit@2x.png"
                    alt="Tarjeta Naranja"
                    className="h-8 object-contain"
                  />
                </div>
              </div>

              {/* Botón de Tienda */}
              <div className="pt-6" data-aos="fade-up" data-aos-delay="400">
                <a
                  href="https://www.tiendamstore.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-[#2980B9] rounded-lg shadow-md hover:bg-[#2980B9]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2980B9] transform transition-all duration-300 hover:scale-105"
                >
                  <span className="mr-2">🛍️</span>
                  <p className="text-sm md:text-base font-medium">
                    Visitar Nuestra Tienda Online
                  </p>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
