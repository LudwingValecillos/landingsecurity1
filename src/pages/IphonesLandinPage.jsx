function AppLandingPage() {
    return (
      <div className="font-sans">
        {/* Sección Principal */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <div className="font-bold text-xl mb-12">B Store</div>
              <h1 className="text-4xl font-bold mb-12 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="32" height="32" className="mr-2">
                  <path
                    d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5Z"
                    fill="black"
                  />
                </svg>
                iPhone 14
              </h1>
  
              <div className="flex justify-center space-x-16 mb-12">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path
                        d="M17 4h-6V2h-2v2H3c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-1 16H4V6h12v14z"
                        fill="currentColor"
                      />
                      <path d="M6 8h8v2H6zm0 4h8v2H6zm0 4h5v2H6z" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="text-sm">
                    Hasta 26h de
                    <br />
                    reproducción
                    <br />
                    de video
                  </p>
                </div>
  
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path
                        d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="text-sm">
                    Sistema de
                    <br />
                    cámara dual
                  </p>
                </div>
  
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="w-6 h-6 border border-black rounded-md flex items-center justify-center text-xs font-bold">
                      A15
                    </div>
                  </div>
                  <p className="text-sm">
                    Chip A15 Bionic
                    <br />
                    con GPU de 5
                    <br />núcleos
                  </p>
                </div>
              </div>
  
              <p className="text-lg mb-8">
                A partir de <br />
                <span className="font-bold text-2xl">R$ 3.799</span>
              </p>
  
              <div className="flex justify-center">
                <img src="/placeholder.svg?height=500&width=400" alt="iPhone 14" className="h-96 object-contain" />
              </div>
            </div>
          </div>
        </div>
  
        {/* Sección Izquierda del iPhone */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="relative w-64 h-96 mx-auto">
                  <div className="absolute inset-0 bg-black rounded-3xl overflow-hidden shadow-xl">
                    <div className="h-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" width="64" height="64" fill="white">
                        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="max-w-lg">
                  <h2 className="text-3xl font-bold mb-4">Rendimiento Increíble</h2>
                  <p className="text-gray-600 mb-6">
                    Experimenta el poder del chip A15 Bionic con GPU de 5 núcleos. Un rendimiento ultrarrápido para juegos,
                    fotografía y tareas cotidianas. El Neural Engine permite capacidades avanzadas de aprendizaje automático para
                    mejorar la fotografía y las experiencias de realidad aumentada.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <svg viewBox="0 0 24 24" width="20" height="20" className="text-purple-500 mr-2">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                      <span>Hasta un 20% más de rendimiento en CPU</span>
                    </li>
                    <li className="flex items-center">
                      <svg viewBox="0 0 24 24" width="20" height="20" className="text-purple-500 mr-2">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                      <span>Características avanzadas de cámara con fotografía computacional</span>
                    </li>
                    <li className="flex items-center">
                      <svg viewBox="0 0 24 24" width="20" height="20" className="text-purple-500 mr-2">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                      <span>Batería de larga duración con hasta 26 horas de reproducción de video</span>
                    </li>
                  </ul>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
                    Conocer Más
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Sección Derecha del iPhone */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="relative w-64 h-96 mx-auto">
                  <div className="absolute inset-0 bg-black rounded-3xl overflow-hidden shadow-xl">
                    <div className="h-full bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                        <svg viewBox="0 0 24 24" width="32" height="32">
                          <path
                            d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
                            fill="black"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="max-w-lg">
                  <h2 className="text-3xl font-bold mb-4">Sistema de Cámara Impresionante</h2>
                  <p className="text-gray-600 mb-6">
                    Captura tu mundo con un detalle impresionante con el avanzado sistema de cámara dual. La cámara principal de 12MP con sensor más grande ofrece un rendimiento increíble en condiciones de poca luz, mientras que la cámara ultra gran angular captura más de la escena. El modo cinematográfico añade hermosos efectos de profundidad a tus videos.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <svg viewBox="0 0 24 24" width="20" height="20" className="text-purple-500 mr-2">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                      <span>Sistema avanzado de cámara dual</span>
                    </li>
                    <li className="flex items-center">
                      <svg viewBox="0 0 24 24" width="20" height="20" className="text-purple-500 mr-2">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                      <span>Estilos fotográficos para una apariencia personalizada</span>
                    </li>
                    <li className="flex items-center">
                      <svg viewBox="0 0 24 24" width="20" height="20" className="text-purple-500 mr-2">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                      <span>Grabación 4K Dolby Vision HDR</span>
                    </li>
                  </ul>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
                    Explorar Cámaras
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Sección Sobre Nosotros */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="flex items-center mb-6">
                <div className="w-1 h-8 bg-purple-500 mr-4"></div>
                <h2 className="text-2xl font-bold">
                  SOBRE <span className="text-gray-500">NOSOTROS</span>
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-sm bg-purple-100 flex items-center justify-center mr-2">
                    <svg viewBox="0 0 24 24" width="16" height="16" className="text-purple-500">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Mejor plantilla</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-sm bg-purple-100 flex items-center justify-center mr-2">
                    <svg viewBox="0 0 24 24" width="16" height="16" className="text-purple-500">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Diseño único</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-sm bg-purple-100 flex items-center justify-center mr-2">
                    <svg viewBox="0 0 24 24" width="16" height="16" className="text-purple-500">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">100% Responsive</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-sm bg-purple-100 flex items-center justify-center mr-2">
                    <svg viewBox="0 0 24 24" width="16" height="16" className="text-purple-500">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Rápido e Integrado</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-sm bg-purple-100 flex items-center justify-center mr-2">
                    <svg viewBox="0 0 24 24" width="16" height="16" className="text-purple-500">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Multiplataforma</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-sm bg-purple-100 flex items-center justify-center mr-2">
                    <svg viewBox="0 0 24 24" width="16" height="16" className="text-purple-500">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Documentación</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-96">
                <div className="absolute inset-0 bg-black rounded-3xl overflow-hidden shadow-xl">
                  <div className="h-16 bg-gray-800 flex items-center justify-center">
                    <div className="w-20 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                  <div className="flex justify-center items-center h-80 bg-gray-900">
                    <div className="text-center">
                      <svg
                        viewBox="0 0 24 24"
                        width="64"
                        height="64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto mb-4"
                      >
                        <path
                          d="M8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16"
                          stroke="#8B5CF6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 12C16 14.21 14.21 16 12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8"
                          stroke="#8B5CF6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="text-xl font-bold text-white">
                        App<span className="text-purple-500">look</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Sección de Funcionalidades */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="48" height="48" className="text-purple-500">
                  <path
                    d="M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7V5h10v14zm-4.5-7L9 9h6l-2.5 3z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">ALTA RESOLUCIÓN</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="48" height="48" className="text-purple-500">
                  <path
                    d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.49 10 10-4.49 10-10 10zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm3.59 5.59L12 13.17 8.41 9.59 7 11l5 5 5-5-1.41-1.41z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">DISEÑO MODERNO</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="48" height="48" className="text-purple-500">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">INSTALACIÓN FÁCIL</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="48" height="48" className="text-purple-500">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8-1.41-1.42z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">IMPULSADOR EXTRA</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
  
        {/* Sección de Funcionalidades Adicionales */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center">
                <div className="relative w-64 h-96">
                  <div className="absolute inset-0 bg-black rounded-3xl overflow-hidden shadow-xl">
                    <div className="h-16 bg-gray-800 flex items-center justify-center">
                      <div className="w-20 h-1 bg-gray-600 rounded-full"></div>
                    </div>
                    <div className="p-4 bg-gray-900 h-80">
                      <div className="bg-purple-900 rounded-lg p-4 mb-4">
                        <div className="h-4 bg-purple-800 rounded mb-2"></div>
                        <div className="h-8 bg-purple-700 rounded mb-2"></div>
                        <div className="flex justify-between">
                          <div className="h-6 w-6 bg-purple-600 rounded-full"></div>
                          <div className="h-6 w-6 bg-purple-600 rounded-full"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-800 rounded"></div>
                        <div className="h-4 bg-gray-800 rounded"></div>
                        <div className="h-4 bg-gray-800 rounded"></div>
                        <div className="h-4 bg-gray-800 rounded"></div>
                        <div className="h-4 bg-gray-800 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg viewBox="0 0 24 24" width="24" height="24" className="text-purple-500">
                          <path
                            d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L22 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">SHOW DE VIDEO 3D</h3>
                      <p className="text-gray-600 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg viewBox="0 0 24 24" width="24" height="24" className="text-purple-500">
                          <path
                            d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">COLORES INFINITOS</h3>
                      <p className="text-gray-600 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg viewBox="0 0 24 24" width="24" height="24" className="text-purple-500">
                          <path
                            d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">ACTUALIZACIONES GRATUITAS</h3>
                      <p className="text-gray-600 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                    </p>
                    <p className="text-gray-600 text-sm mt-4">
                      Ha sobrevivido no solo cinco siglos, sino también el salto a la composición electrónica, permaneciendo
                      esencialmente inalterado. Se popularizó en los años 60 con el lanzamiento de hojas de Letraset que contenían Lorem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Sección de Capturas de Pantalla */}
        <div className="container mx-auto px-4 py-16">
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-1 h-8 bg-purple-500 mr-4"></div>
              <h2 className="text-2xl font-bold">
                NUESTRA <span className="text-gray-500">CAPTURA DE PANTALLA</span>
              </h2>
            </div>
          </div>
          <div className="flex overflow-x-auto pb-8 space-x-4">
            <div className="flex-shrink-0 w-40">
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                <div className="h-80 p-2">
                  <div className="bg-gray-800 h-full rounded-lg flex flex-col p-2">
                    <div className="h-4 w-8 bg-gray-700 rounded mb-2"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-700 rounded"></div>
                      <div className="h-4 bg-gray-700 rounded"></div>
                      <div className="h-4 bg-gray-700 rounded"></div>
                      <div className="h-4 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-40">
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                <div className="h-80 p-2">
                  <div className="bg-gray-800 h-full rounded-lg flex flex-col p-2">
                    <div className="h-6 bg-gray-700 rounded mb-2"></div>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="h-8 w-8 bg-gray-700 rounded-full mr-2"></div>
                        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="h-8 w-8 bg-gray-700 rounded-full mr-2"></div>
                        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="h-8 w-8 bg-gray-700 rounded-full mr-2"></div>
                        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-40">
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                <div className="h-80 p-2">
                  <div className="bg-purple-900 h-full rounded-lg flex flex-col p-2">
                    <div className="flex justify-between mb-4">
                      <div className="h-6 w-20 bg-purple-800 rounded"></div>
                      <div className="h-6 w-6 bg-purple-800 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 mb-4">
                      {[...Array(31)].map((_, i) => (
                        <div key={i} className="h-6 bg-purple-800 rounded-full flex items-center justify-center">
                          <span className="text-xs text-purple-300">{i + 1}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2 mt-auto">
                      <div className="h-4 bg-purple-800 rounded"></div>
                      <div className="h-4 bg-purple-800 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-40">
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                <div className="h-80 p-2">
                  <div className="bg-gray-800 h-full rounded-lg flex flex-col p-2">
                    <div className="flex justify-center items-center h-full">
                      <div className="w-24 h-24 rounded-full border-4 border-gray-700 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full border-4 border-gray-600 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-gray-700"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-40">
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                <div className="h-80 p-2">
                  <div className="bg-gray-800 h-full rounded-lg flex flex-col p-2">
                    <div className="h-40 bg-gray-700 rounded mb-4 flex items-center justify-center">
                      <div className="text-gray-500 text-xs">Imagen</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-700 rounded"></div>
                      <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                      <div className="h-8 bg-gray-700 rounded mt-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default AppLandingPage
  