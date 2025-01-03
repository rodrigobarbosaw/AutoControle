import React from 'react';
import { Edit, Trash2 } from 'lucide-react';
import type { Vehicle } from '../../types';

interface VehicleListProps {
  vehicles: Vehicle[];
  onEdit: (vehicle: Vehicle) => void;
  onDelete: (vehicleId: string) => void;
}

export default function VehicleList({ vehicles, onEdit, onDelete }: VehicleListProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3 px-4">Placa</th>
            <th className="text-left py-3 px-4">Marca</th>
            <th className="text-left py-3 px-4">Modelo</th>
            <th className="text-left py-3 px-4">Ano</th>
            <th className="text-left py-3 px-4">Cliente</th>
            <th className="text-right py-3 px-4">Ações</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-4">{vehicle.licensePlate}</td>
              <td className="py-3 px-4">{vehicle.make}</td>
              <td className="py-3 px-4">{vehicle.model}</td>
              <td className="py-3 px-4">{vehicle.year}</td>
              <td className="py-3 px-4">{vehicle.customerName}</td>
              <td className="py-3 px-4 text-right">
                <button 
                  onClick={() => onEdit(vehicle)}
                  className="text-blue-500 hover:text-blue-600 mr-2"
                >
                  <Edit className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => onDelete(vehicle.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}