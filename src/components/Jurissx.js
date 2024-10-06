import React, { useState } from 'react';

const Jurissx = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    progNumber: '',
    date: '',
    expNumber: '',
    patientName: '',
    phone: '',
    gender: '',
    age: '',
    diagnosis: '',
    referringUnit: '',
    admissionArea: '',
    referredService: '',
    admissionDiagnosis: '',
    admissionDate: '',
    dischargeDiagnosis: '',
    dischargeArea: '',
    counterRefService: '',
    counterRefDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      progNumber: '',
      date: '',
      expNumber: '',
      patientName: '',
      phone: '',
      gender: '',
      age: '',
      diagnosis: '',
      referringUnit: '',
      admissionArea: '',
      referredService: '',
      admissionDiagnosis: '',
      admissionDate: '',
      dischargeDiagnosis: '',
      dischargeArea: '',
      counterRefService: '',
      counterRefDate: ''
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-pink-600">Jurissx Form</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">No. Prog.</label>
          <input
            type="text"
            name="progNumber"
            value={formData.progNumber}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Fecha</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">No. Exp.</label>
          <input
            type="text"
            name="expNumber"
            value={formData.expNumber}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Nombre del Paciente</label>
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Género</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Edad</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Diagnóstico</label>
          <input
            type="text"
            name="diagnosis"
            value={formData.diagnosis}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Unidad Remitente</label>
          <input
            type="text"
            name="referringUnit"
            value={formData.referringUnit}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Área de Admisión</label>
          <input
            type="text"
            name="admissionArea"
            value={formData.admissionArea}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Servicio Referido</label>
          <input
            type="text"
            name="referredService"
            value={formData.referredService}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Diagnóstico de Admisión</label>
          <input
            type="text"
            name="admissionDiagnosis"
            value={formData.admissionDiagnosis}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Fecha de Admisión</label>
          <input
            type="date"
            name="admissionDate"
            value={formData.admissionDate}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Diagnóstico de Alta</label>
          <input
            type="text"
            name="dischargeDiagnosis"
            value={formData.dischargeDiagnosis}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Área de Alta</label>
          <input
            type="text"
            name="dischargeArea"
            value={formData.dischargeArea}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Servicio Contrarreferido</label>
          <input
            type="text"
            name="counterRefService"
            value={formData.counterRefService}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Fecha de Contrarreferencia</label>
          <input
            type="date"
            name="counterRefDate"
            value={formData.counterRefDate}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition duration-300"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};

export default Jurissx;
