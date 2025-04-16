import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import AboutSection from "../components/iphone/AboutSection";
import EnhancedHeroSection from "../components/iphone/EnhancedHeroSection";
import CatalogSection from "../components/iphone/CatalogSection";
import AutoPlayVideo from "../components/iphone/AutoPlayVideo";
import WhatsAppButton from "../components/WhatsAppButton";
import imgprefooter from "../assets/images/fotterimnag.png";
import ContactSection from "../components/iphone/ContactSection";
import VideoSection from "../components/iphone/VideoSection";
import {
  fetchProducts
} from '../data/api';
import Loading from "../components/iphone/Loading";
import AdminButton from "../components/AdminButton";

function AppLandingPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data.filter(product => product.active === true));
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (loading) {
    return (
     <Loading/>
    );
  }

  return (
    <div className="font-sans text-gray-800">
      {/* HERO: Sección Principal */}
      <EnhancedHeroSection products={products} />
      <AutoPlayVideo />
      <AboutSection />
      <CatalogSection products={products} />
      {/* CARACTERÍSTICAS DESTACADAS */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              ¿Por qué elegir <span className="text-blue-600">M-STORE</span>?
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Nuestra prioridad es brindarte la mejor experiencia en la compra
              de tu iPhone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Garantía oficial Apple",
                text: "Todos nuestros iPhones son 100% originales y cuentan con 12 meses de garantía directa con Apple. ¡Tranquilidad asegurada!",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                    />
                  </svg>
                ),
                gradient: "from-green-400 to-emerald-600",
                bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
                borderColor: "border-green-200",
              },
              {
                title: "Pago en dólares sin sorpresas",
                text: "Acordás el precio al momento de la visita. Sin cargos ocultos ni comisiones extras. ¡Transparencia total!",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="size-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                    />
                  </svg>
                ),
                gradient: "from-blue-400 to-purple-600",
                bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
                borderColor: "border-blue-200",
              },
              {
                title: "Retiro inmediato en CABA",
                text: "Coordinás tu visita, venís a nuestra oficina y te llevás tu iPhone en el momento. ¡Sin esperas ni demoras!",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="size-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                    />
                  </svg>
                ),
                gradient: "from-amber-400 to-orange-600",
                bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
                borderColor: "border-amber-200",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex flex-col rounded-xl overflow-hidden border ${item.borderColor} shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${item.bgColor}`}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className={`h-2 bg-gradient-to-r ${item.gradient}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br ${item.gradient} text-white shadow-md`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold ml-4 text-gray-800">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.text}
                  </p>
                  <div className="mt-4 flex justify-end">
                    <div
                      className={`h-1 w-12 rounded-full bg-gradient-to-r ${item.gradient}`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS Y CONFIRMACIÓN */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Lo que dicen quienes ya vinieron a{" "}
              <span className="text-blue-600">M-STORE</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              data-aos="fade-up"
            >
              <p className="text-gray-600 italic mb-4">
                “Fui a la oficina, vi el equipo y me lo llevé en el momento.
                Todo original y en perfecto estado.”
              </p>
              <div>
                <p className="text-lg font-semibold">María G.</p>
                <p className="text-sm text-gray-500">Compradora satisfecha</p>
              </div>
            </div>
            <div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p className="text-gray-600 italic mb-4">
                “Me atendieron súper bien. Fuy con mi mama y tuvieron muchísima
                paciencia en explicarle como funcionaba.”
              </p>
              <div>
                <p className="text-lg font-semibold">Agos P.</p>
                <p className="text-sm text-gray-500">Comprador presencial</p>
              </div>
            </div>
            <div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p className="text-gray-600 italic mb-4">
                “Ya fui dos veces a buscar iPhones y siempre la misma atención
                impecable. Son de confianza.”
              </p>
              <div>
                <p className="text-lg font-semibold">Axel D.</p>
                <p className="text-sm text-gray-500">Cliente recurrente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LLAMADA A LA ACCIÓN (CTA) */}
      <section className="bg-purple-600 py-16">
        <div
          className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between"
          data-aos="fade-up"
        >
          <img src={imgprefooter} alt="" className="w-52" />

          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white">
              ¿Listo para tener tu nuevo iPhone?
            </h2>
            <p className="text-lg text-gray-100 mt-2">
              Compra hoy y disfruta de ofertas exclusivas y con garantía
              oficial!
            </p>
          </div>
          <div className="text-center">
            <button
              onClick={() =>
                window.open(
                  `https://wa.me/5491123900395?text=Hola,%20estoy%20interesado%20en%20el%20comprar%20un%20iPhone%20y%20me%20gustaría%20saber%20más%20detalles%20sobre%20los%20productos%20disponibles%20y%20las%20ofertas%20actuales.`,
                  "_blank"
                )
              }
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Contactar
            </button>
          </div>
        </div>
      </section>

<AdminButton />
      <VideoSection />
      <ContactSection />
      <WhatsAppButton text={true} />
    </div>
  );
}

export default AppLandingPage;
