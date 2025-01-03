import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import VehicleList from '../components/vehicles/VehicleList';
import VehicleSearch from '../components/vehicles/VehicleSearch';
import type { Vehicle } from '../types';

export default function Vehicles() {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - replace with actual data fetching
  const vehicles: (Vehicle & { customerName: string })[] = [
    {
      id: '1',
      customerId: '1',
      customerName: 'João Silva',
      make: 'Toyota',
      model: 'Corolla',
      year: 2020,
      licensePlate: 'ABC-1234'
    },
    {
      id: '2',
      customerId: '2',
      customerName: 'Maria Santos',
      make: 'Honda',
      model: 'Civic',
      year: 2019,
      licensePlate: 'XYZ-5678'
    }
  ];

  const handleEdit = (vehicle: Vehicle) => {
    console.log('Edit vehicle:', vehicle);
  };

  const handleDelete = (vehicleId: string) => {
    console.log('Delete vehicle:', vehicleId);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Veículos</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          Novo Veículo
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center mb-4">
          <VehicleSearch 
            value={searchTerm}
            onChange={setSearchTerm}
          />
        </div>

        <VehicleList 
          vehicles={vehicles}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}