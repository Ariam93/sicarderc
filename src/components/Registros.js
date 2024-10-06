import React from 'react';

const Registros = ({ records, onDelete, onEdit }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-pink-600">Registros Guardados</h2>
      {records.length > 0 ? (
        <table className="min-w-full mt-4 bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border">No. Prog.</th>
              <th className="px-4 py-2 border">Nombre del Paciente</th>
              <th className="px-4 py-2 border">Teléfono</th>
              <th className="px-4 py-2 border">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border">{record.progNumber}</td>
                <td className="px-4 py-2 border">{record.patientName}</td>
                <td className="px-4 py-2 border">{record.phone}</td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => onEdit(index)}
                    className="text-blue-600 hover:underline mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onDelete(index)}
                    className="text-red-600 hover:underline"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="mt-4 text-gray-600">No hay registros guardados</p>
      )}
    </div>
  );
};

export default Registros;
