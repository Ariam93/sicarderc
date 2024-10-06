import React, { useState } from 'react';
import Jurissx from './Jurissx';
import Registros from './Registros';
import { Routes, Route, Link } from 'react-router-dom';

const Dashboard = () => {
  const [records, setRecords] = useState([]);

  const handleAddRecord = (newRecord) => {
    setRecords([...records, newRecord]);
  };

  const handleDeleteRecord = (index) => {
    const updatedRecords = records.filter((_, i) => i !== index);
    setRecords(updatedRecords);
  };

  const handleEditRecord = (index) => {
    const updatedRecord = prompt("Edita los datos (usa formato JSON)", JSON.stringify(records[index]));
    if (updatedRecord) {
      const parsedRecord = JSON.parse(updatedRecord);
      const updatedRecords = [...records];
      updatedRecords[index] = parsedRecord;
      setRecords(updatedRecords);
    }
  };

  return (
    <div className="container mx-auto">
      <nav className="bg-pink-600 p-4 text-white">
        <Link to="/jurissx" className="mr-4">Registrar</Link>
        <Link to="/registros">Ver Registros</Link>
      </nav>
      <Routes>
        <Route path="/jurissx" element={<Jurissx onAdd={handleAddRecord} />} />
        <Route path="/registros" element={<Registros records={records} onDelete={handleDeleteRecord} onEdit={handleEditRecord} />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
