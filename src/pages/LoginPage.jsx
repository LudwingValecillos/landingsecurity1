import React, { useState } from 'react';

const Login = () => {
  const [Usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [saludo, setSaludo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple
    if (!Usuario || !password) {
      setSaludo('Por favor, completa todos los campos');
      return;
    }
    if(Usuario == "admin" && password == "admin"){
      setSaludo("Hola")
      localStorage.setItem("login", true);
      window.location.href = "/";
    }else {
      setSaludo("Usurio o contraseña incorrecto")
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Iniciar Sesión</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="Usuario" className="block text-blue-800 font-semibold mb-1">Usuario</label>
            <input
              type="Usuario"
              id="Usuario"
              value={Usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Tu usuario"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-blue-800 font-semibold mb-1">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Tu contraseña"
            />
          </div>

         
          {saludo ? (
            <div className="text-red-500 text-sm font-medium">{saludo}</div>
          ): ""}
         
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
