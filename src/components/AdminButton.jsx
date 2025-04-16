import React, { useState, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';

const AdminButton = () => {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    // Usamos la key "login" para determinar si se muestra el botón
    const loginValue = localStorage.getItem('login');
    setVisible(loginValue === 'true');
  }, []);

  const handleAdmin = () => {
    // Redirecciona a /admin
    window.location.href = '/admin';
  };

  const handleLogout = () => {
    // Borramos la key "login" del localStorage
    localStorage.removeItem('login');
    setVisible(false);
    // Opcional: puedes redireccionar o refrescar la página
    // window.location.reload();
  };

  // Cierra el menú si se hace click fuera del mismo
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!visible) return null;

  return (
    <div ref={menuRef} className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        aria-label="Abrir menú admin"
      >
        <Menu className="w-6 h-6" />
      </button>
      {menuOpen && (
        <div className="mt-2 bg-white rounded shadow-lg flex flex-col">
          <button
            onClick={handleAdmin}
            className="px-4 py-2 text-gray-800 hover:bg-gray-100 text-left"
          >
            Ir al panel de administrador
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-gray-800 hover:bg-gray-100 text-left"
          >
            Cerrar Sesión
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminButton;
