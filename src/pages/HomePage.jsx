import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/images/sinfondoaa.png';
import image2 from '../assets/images/homesecurity.png';
import ipgoneback from '../assets/images/iphoneback.png';

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center">
        <img src={image} alt="" className='h-10 w-30 object-cover'/>
      </div>
      
      
      {/* Split hero section - full height with two equal columns */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Security Cameras Section - Left Half */}
        <div className="w-full md:w-1/2 relative group cursor-pointer">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${image2})`, backgroundPosition: "center"}}>
            <div className="absolute inset-0 bg-blue-900 bg-opacity-80 group-hover:bg-opacity-70 transition-all duration-300"></div>
          </div>
          
          <Link to="/security" className="block relative h-full z-10">
            <div className="flex flex-col items-center justify-center h-full text-white p-8 text-center">
              <div className="mb-6 p-4 rounded-full bg-blue-700 bg-opacity-70">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              
              <h2 className="text-4xl font-bold mb-4">Seguridad Inteligente</h2>
              <p className="text-lg mb-8 max-w-md">Protección total para tu hogar con tecnología de última generación y servicio profesional.</p>
              
              <div className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-8 rounded-lg transition-colors">
                Ver Soluciones de Seguridad
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-6 max-w-sm">
                <div className="flex flex-col items-center">
                  <div className="text-xl font-bold">24/7</div>
                  <div className="text-sm text-blue-200">Monitoreo</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-xl font-bold">HD</div>
                  <div className="text-sm text-blue-200">Alta Definición</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        
        {/* iPhones Section - Right Half */}
        <div className="w-full md:w-1/2 relative group cursor-pointer ">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${ipgoneback})`, backgroundPosition: "center"}}>
            <div className="absolute inset-0 bg-gray-900 bg-opacity-80 group-hover:bg-opacity-70 transition-all duration-300"></div>
          </div>
          
          <Link to="/iphones" className="block relative h-full z-10">
            <div className="flex flex-col items-center justify-center h-full text-white p-8 text-center">
              <div className="mb-6 p-4 rounded-full bg-gray-700 bg-opacity-70 ">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                </svg>
              </div>
              
              <h2 className="text-4xl font-bold mb-4">iPhones Premium</h2>
              <p className="text-lg mb-8 max-w-md">Los mejores dispositivos Apple certificados con garantía y servicio técnico especializado.</p>
              
              <div className="bg-gray-600 hover:bg-gray-500 text-white font-medium py-3 px-8 rounded-lg transition-colors">
                Explorar iPhones
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-6 max-w-sm">
                <div className="flex flex-col items-center">
                  <div className="text-xl font-bold">100%</div>
                  <div className="text-sm text-gray-300">Garantía</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-xl font-bold">Premium</div>
                  <div className="text-sm text-gray-300">Calidad</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;