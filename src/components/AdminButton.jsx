import React, { useEffect, useState } from 'react';
import { Menu } from 'lucide-react'; // Asegurate de tener `lucide-react` instalado

const AdminButton = ({ onClick }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const userValue = localStorage.getItem('usuario');
    setVisible(userValue === 'true');
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={onClick}
      className="fixed top-4 left-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
      aria-label="Abrir menú admin"
    >
      <Menu className="w-6 h-6" />
    </button>
  );
};

export default AdminButton;
