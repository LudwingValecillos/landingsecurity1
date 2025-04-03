// import React from "react";
// import image from "../../assets/images/puertomadero2.jpg";
// const ProjectsSection = () => {
//   const videos = [
//     {
//       title: "Nuestra Historia",
//       description:
//         "Conoce más sobre nosotros y nuestra trayectoria en el mundo de la seguridad",
//       videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1",
//       stats: "15+ años de experiencia",
//     },
//     {
//       title: "Servicios de Seguridad",
//       description:
//         "Descubre cómo protegemosa tu hogar y negocio con tecnología de vanguardia",
//       videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
//       stats: "1000+ clientes satisfechos",
//     },
//   ];

//   return (
//     <section className="py-20 relative overflow-hidden bg-black/50" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundBlendMode: "overlay" }}>
//       <div className="absolute "></div>
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="text-center mb-16">
//           <h2
//             className="text-4xl font-light text-blue-300 mb-4"
//             data-aos="fade-down"
//             data-aos-duration="1000"
//           >
//             Conoce Nuestra Empresa
//           </h2>
//           <p
//             className="text-gray-600 text-lg text-white"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             Videos informativos sobre nuestros servicios y trayectoria
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {videos.map((video, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
//               data-aos="fade-up"
//               data-aos-delay={index * 200}
//             >
//               <div className="relative aspect-video">
//                 <iframe
//                   src={video.videoUrl}
//                   title={video.title}
//                   className="w-full h-full"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//               <div className="p-6">
//                 <h3 className="text-2xl font-light text-[#2980B9] mb-2">
//                   {video.title}
//                 </h3>
//                 <p className="text-gray-600 mb-4">{video.description}</p>
//                 <div className="flex items-center justify-between">
//                   <span className="text-gray-500 text-sm">{video.stats}</span>
//                   <button className="bg-[#2980B9] text-white px-4 py-2 rounded-full text-sm hover:bg-opacity-90 transition-colors duration-300">
//                     Ver más
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;
import React, { useEffect } from "react";
import image from "../../assets/images/puertomadero.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

// Importa framer-motion solo si está instalado
let motion;
try {
  motion = require("framer-motion");
} catch (e) {
  // Si framer-motion no está disponible, creamos un objeto de reemplazo
  motion = {
    section: "section",
    div: "div",
    h2: "h2",
    p: "p",
    svg: "svg",
    blockquote: "blockquote"
  };
}

const ProjectsSection = () => {
  useEffect(() => {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1000,
        once: false,
        mirror: true
      });
    }
  }, []);

  const testimonials = [
    {
      name: "Juan M.",
      rating: 5,
      text: "Instalaron todo rapidísimo y el soporte fue de diez. Ahora veo mi casa desde el celu sin drama.",
      position: "Cliente Residencial",
      plan: "Plan Premium"
    },
    {
      name: "Laura G.",
      rating: 5,
      text: "Puse el Plan Intermedio en mi negocio y anda perfecto. Los recomiendo con los ojos cerrados.",
      position: "Dueña de Negocio",
      plan: "Plan Intermedio"
    },
    {
      name: "Carlos R.",
      rating: 5,
      text: "Las cámaras se ven genial y dejaron todo impecable. Muy contento con el servicio.",
      position: "Cliente Corporativo",
      plan: "Plan Premium"
    }
];


  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg 
          key={i} 
          className={`w-5 h-5 transition-transform duration-200 hover:scale-110 ${i < rating ? "text-yellow-400" : "text-gray-300"}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <section 
      className="py-20 relative overflow-hidden" 
      style={{ 
        backgroundImage: `url(${image})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center"
      }}
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      <div className="absolute inset-0 bg-black/20 transition-opacity duration-500"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-light text-blue-100 mb-4 transition-all duration-300 hover:scale-105 hover:text-blue-200"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Conoce Nuestra Empresa
          </h2>
          <p
            className="text-white text-lg mb-8 transition-all duration-300 hover:scale-102"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Testimonios de clientes satisfechos con nuestro servicio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-md p-8 rounded-xl shadow-xl border border-white/20 h-full flex flex-col 
                         transition-all duration-300 hover:scale-103 hover:bg-black/50 hover:shadow-2xl"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-medium text-white mb-1 transition-colors duration-300 hover:text-blue-300">
                  {testimonial.name}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-blue-300 text-sm transition-all duration-300 hover:text-blue-200 hover:scale-105">
                    {testimonial.position}
                  </p>
                  <p className="text-gray-400 text-sm transition-all duration-300 hover:text-gray-200 hover:scale-105">
                    {testimonial.plan}
                  </p>
                </div>
                <div className="flex mt-3 transition-opacity duration-500" data-aos="fade-up">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent my-4 w-full 
                              transition-all duration-500 hover:via-blue-400"></div>
              
              <blockquote className="relative flex-grow">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-2 -translate-y-2 w-8 h-8 text-blue-400 opacity-50
                             transition-all duration-300 hover:scale-110 hover:rotate-12"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-white relative z-10 pl-6 text-lg leading-relaxed
                              transition-all duration-300 hover:text-shadow-sm" data-aos="fade-bottom">
                  {testimonial.text}
                </p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;