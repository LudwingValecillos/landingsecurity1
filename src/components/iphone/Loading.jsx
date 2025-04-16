import React from 'react'
import logo from '../../assets/images/logo.png';
function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-white to-blue-50">
    <div className="flex flex-col items-center justify-center max-w-md w-full px-6">
      {/* Logo and animation container */}
      <div className="relative w-24 h-24 mb-6">
        {/* Pulsing circle behind logo */}
        <div className="absolute inset-0 rounded-full bg-purple-500 opacity-20 animate-ping"></div>
        
        {/* Rotating circle around logo */}
        <div className="absolute inset-[-8px] border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
        
        {/* Logo in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={logo} alt="M-Store" className="w-16 h-16" />
        </div>
      </div>
      
      {/* Loading text */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-3">
        Cargando productos
      </h1>
      
      {/* Subtitle */}
      <p className="text-gray-600 text-center mb-6">
        Estamos preparando los mejores iPhones para ti
      </p>
      
      {/* Progress bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-purple-600 rounded-full animate-loadingBar"></div>
      </div>
      
      {/* Tips or info while waiting */}
      <div className="mt-8 p-4 bg-white rounded-xl shadow-sm border border-gray-100 max-w-sm">
        <p className="text-sm text-gray-500 text-center">
          ¿Sabías que? Todos nuestros productos incluyen garantía oficial Apple y envío gratis a todo el país.
        </p>
      </div>
    </div>
    
    {/* Add custom animation for the progress bar */}
    <style jsx>{`
      @keyframes loadingBar {
        0% { width: 0%; }
        50% { width: 70%; }
        70% { width: 85%; }
        90% { width: 90%; }
        100% { width: 100%; }
      }
      
      .animate-loadingBar {
        animation: loadingBar 2.5s ease-in-out infinite;
      }
    `}</style>
  </div>
  )
}

export default Loading