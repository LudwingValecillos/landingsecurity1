import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import AboutSection from '../components/iphone/AboutSection';
import EnhancedHeroSection from '../components/iphone/EnhancedHeroSection';
import CatalogSection from '../components/iphone/CatalogSection';
import AutoPlayVideo from '../components/iphone/AutoPlayVideo';
import WhatsAppButton from '../components/WhatsAppButton';
import imgprefooter from '../assets/images/fotterimnag.png';
import ContactSection from '../components/iphone/ContactSection';

function AppLandingPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* HERO: Sección Principal */}
      <EnhancedHeroSection />
      <AutoPlayVideo />
      <AboutSection />
      <CatalogSection />
      {/* CARACTERÍSTICAS DESTACADAS */}
      <section className="py-12 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          title: "Calidad Garantizada",
          text: "Todos nuestros productos cuentan con garantía oficial y soporte técnico.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
</svg>

          ),
        },
        {
          title: "Pago Seguro",
          text: "Transacciones 100% seguras con múltiples métodos de pago certificados.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
            </svg>
          ),
        },
        {
          title: "Retiralo en nuestras oficinas",
          text: "Recibe tu iPhone en nuestras oficinas, donde te asesoramos en todo el proceso.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
            </svg>
          ),
        },
      ].map((item, index) => (
        <div key={index} className="flex flex-col sm:flex-row sm:items-start sm:text-left text-center gap-4 bg-[#87CDEF]/50 rounded-lg p-4 shadow-lg" data-aos="zoom-in" data-aos-delay={index * 200}>
          <div className="w-14 h-14 md:w-16 md:h-16 mx-auto sm:mx-0 flex items-center justify-center bg-purple-100 rounded-full">
            {item.icon}
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-1">{item.title}</h3>
            <p className=" text-sm md:text-xl">{item.text}</p>
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
      <h2 className="text-4xl font-bold">Lo que opinan nuestros clientes</h2>
      <p className="text-gray-600 mt-2">
        Más de 1.000 personas contentas con su compra. ¡Y seguimos sumando!
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-gray-50 p-6 rounded-lg shadow-md" data-aos="fade-up">
        <p className="text-gray-600 italic mb-4">
          "Me llegó el celu al toque y todo de 10. ¡Re buena onda y atentos!"
        </p>
        <div>
          <p className="text-lg font-semibold">María G.</p>
          <p className="text-sm text-gray-500">Compradora feliz</p>
        </div>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
        <p className="text-gray-600 italic mb-4">
          "Todo perfecto. Me ayudaron a elegir y el iPhone llegó impecable."
        </p>
        <div>
          <p className="text-lg font-semibold">Carlos P.</p>
          <p className="text-sm text-gray-500">Cliente contento</p>
        </div>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="400">
        <p className="text-gray-600 italic mb-4">
          "Ya compré un par de veces y siempre todo excelente. Confianza total."
        </p>
        <div>
          <p className="text-lg font-semibold">Laura M.</p>
          <p className="text-sm text-gray-500">Cliente frecuente</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* LLAMADA A LA ACCIÓN (CTA) */}
      <section className="bg-purple-600 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between" data-aos="fade-up">
            <img src={imgprefooter} alt="" className='w-52' />

          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white">
              ¿Listo para tener tu nuevo iPhone?
            </h2>
            <p className="text-lg text-gray-100 mt-2">
              Compra hoy y disfruta de ofertas exclusivas, garantía y envío rápido.
            </p>
          </div>
          <div className="text-center">
            <button onClick={() => window.open(`https://wa.me/5491123900395?text=Hola,%20estoy%20interesado%20en%20el%20comprar%20un%20iPhone%20y%20me%20gustaría%20saber%20más%20detalles%20sobre%20los%20productos%20disponibles%20y%20las%20ofertas%20actuales.`, '_blank')} className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Contactar
            </button>
          </div>
        </div>
      </section>

      <ContactSection />
      <WhatsAppButton text={true} />
    </div>
  );
}

export default AppLandingPage;
