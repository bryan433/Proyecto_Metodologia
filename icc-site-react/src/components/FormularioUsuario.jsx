import React, { useState } from "react";

const FormularioUsuario = ({ visible, onClose }) => {
  const [form, setForm] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Formulario guardado:", form);
    onClose(); // Opcional: cerrar al guardar
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="relative bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-xl font-bold text-center mb-4">Formulario</h2>

        <form onSubmit={manejarEnvio} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={manejarCambio}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              placeholder="Nombre"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Apellidos <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="apellidos"
              value={form.apellidos}
              onChange={manejarCambio}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              placeholder="Apellidos"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={manejarCambio}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              placeholder="email@empresa.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Teléfono <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="telefono"
              value={form.telefono}
              onChange={manejarCambio}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              placeholder="+34 612 345 678"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-md font-semibold"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioUsuario;
