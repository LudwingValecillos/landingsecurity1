import React, { useState } from "react";
import contactImage from "../../assets/images/cv.avif";

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
      // Prepare the email data for Sendinblue API
      const emailData = {
        sender: {
          name: formData.nombre,
          email: "ludwingvaldev@gmail.com",
        },
        to: [
          {
            email: "emietchebarne@gmail.com",
            name: "Receptor",
          },
        ],
        subject: `Solicitud de cotización: ${formData.tipo_servicio}`,
        htmlContent: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nueva solicitud de cotización</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      background-color: #f9f9f9;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .header {
      text-align: center;
      padding-bottom: 20px;
      border-bottom: 1px solid #eeeeee;
    }
    .logo {
      max-width: 150px;
      margin-bottom: 15px;
    }
    h1 {
      color: #2980B9;
      margin: 0;
      font-size: 24px;
      font-weight: 600;
    }
    .content {
      padding: 20px 0;
    }
    .info-box {
      background-color: #f5f9fc;
      border-left: 4px solid #2980B9;
      padding: 15px;
      margin-bottom: 20px;
      border-radius: 0 4px 4px 0;
    }
    .info-item {
      margin-bottom: 12px;
      display: flex;
    }
    .info-label {
      font-weight: bold;
      width: 100px;
      color: #555555;
    }
    .info-value {
      flex: 1;
    }
    .message-box {
      border-radius: 4px;
      padding: 15px;
      margin-top: 20px;
    }
    .message-label {
      font-weight: bold;
      color: #2980B9;
      margin-bottom: 10px;
    }
    .footer {
      text-align: center;
      padding-top: 20px;
      border-top: 1px solid #eeeeee;
      font-size: 12px;
      color: #999999;
    }
    .button {
      display: inline-block;
      background-color: #2980B9;
      color: white;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 4px;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <!-- Puedes reemplazar esto con la URL de tu logo -->
      <!-- <img src="https://tuempresa.com/logo.png" alt="Logo" class="logo"> -->
      <h1>Nueva Solicitud de Cotización</h1>
    </div>
    
    <div class="content">
      <p>Se ha recibido una nueva solicitud de cotización con los siguientes detalles:</p>
      
      <div class="info-box">
        <div class="info-item">
          <div class="info-label">Nombre:</div>
          <div class="info-value">${formData.nombre}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Email:</div>
          <div class="info-value">${formData.email}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Teléfono:</div>
          <div class="info-value">${formData.telefono}</div>
        </div>
      </div>
      
      <div class="message-box">
        <div class="message-label">Mensaje del cliente:</div>
        <div>${formData.mensaje.replace(/\n/g, '<br>')}</div>
      </div>
      
      <center>
        <a href="mailto:${formData.email}" class="button">Responder al cliente</a>
      </center>
    </div>
    
    <div class="footer">
      <p>Este es un correo automático, por favor no responda directamente a este mensaje.</p>
      <p>&copy; ${new Date().getFullYear()} Seguridad Pro. Todos los derechos reservados.</p>
    </div>
  </div>
</body>
</html>
`
      };

      // Send the email using Sendinblue API
      const response = await fetch("https://api.sendinblue.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": "api" // Replace with environment variable in production
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
          tipo_servicio: "camaras",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formulario */}
          <div
            className="bg-white rounded-2xl shadow-xl p-8"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="nombre">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2980B9] focus:ring-2 focus:ring-[#2980B9]/20 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2980B9] focus:ring-2 focus:ring-[#2980B9]/20 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="telefono">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2980B9] focus:ring-2 focus:ring-[#2980B9]/20 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="mensaje">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2980B9] focus:ring-2 focus:ring-[#2980B9]/20 transition-all duration-300"
                  required
                  placeholder="Describe tu proyecto o necesidades específicas..."
                ></textarea>
              </div>

              {submitStatus.message && (
                <div
                  className={`p-3 rounded-lg ${
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
                } text-white py-3 rounded-lg transition-all duration-300`}
              >
                {isSubmitting ? "Enviando..." : "Solicitar cotización"}
              </button>
            </form>
          </div>

          {/* Mapa e información */}
          <div
            className="space-y-8"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            {/* Mapa */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-[300px]">
              <iframe
                title="mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878895174!2d-58.38414908477038!3d-34.60373888045943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1sen!2sar!4v1626889475183!5m2!1sen!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Información de contacto */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-light text-[#2980B9] mb-6">
                Información de contacto
              </h3>
              <div className="space-y-4">
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
                    <h4 className="font-medium text-gray-700">
                      Oficina Central
                    </h4>
                    <p className="text-gray-600">Av. Corrientes 1234, CABA</p>
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
                      Central de Monitoreo
                    </h4>
                    <p className="text-gray-600">0800-555-SEGURIDAD</p>
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
                    <p className="text-gray-600">info@seguridadpro.com</p>
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-700">
                      Horarios de atención
                    </h4>
                    <p className="text-gray-600">
                      Monitoreo: 24/7
                      <br />
                      Oficina: Lunes a Viernes 9:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
