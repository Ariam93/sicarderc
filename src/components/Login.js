import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí va tu lógica de autenticación
  };

  return (
    <div className="relative w-full h-screen bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        src="https://videos.pexels.com/video-files/3163534/3163534-sd_640_360_30fps.mp4" // Cambia este enlace al de tu video
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute inset-0"></div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
        >
          <h2 className="text-2xl font-bold text-pink-500 text-center mb-6">Inicia Sesión</h2>

          <div className="mb-4">
            <label className="block text-pink-500 mb-2" htmlFor="user">
              Usuario
            </label>
            <input
              type="text"
              id="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="w-full p-2 border-2 border-pink-500 rounded-md focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label className="block text-pink-500 mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border-2 border-pink-500 rounded-md focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-colors"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
