import React, { useState } from 'react';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';

export default function Customers() {
  const [searchTerm, setSearchTerm] = useState('');

  const customers = [
    {
      id: '1',
      name: 'João Silva',
      email: 'joao.silva@email.com',
      phone: '(11) 98765-4321',
      vehicles: [
        { make: 'Toyota', model: 'Corolla', year: 2020, plate: 'ABC-1234' }
      ]
    },
    // Add more mock data as needed
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Clientes</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          Novo Cliente
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center mb-4">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar clientes..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Nome</th>
                <th className="text-left py-3 px-4">Email</th>
                <th className="text-left py-3 px-4">Telefone</th>
                <th className="text-left py-3 px-4">Veículos</th>
                <th className="text-right py-3 px-4">Ações</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{customer.name}</td>
                  <td className="py-3 px-4">{customer.email}</td>
                  <td className="py-3 px-4">{customer.phone}</td>
                  <td className="py-3 px-4">
                    {customer.vehicles.map((vehicle) => (
                      <div key={vehicle.plate}>
                        {vehicle.make} {vehicle.model} ({vehicle.year})
                      </div>
                    ))}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button className="text-blue-500 hover:text-blue-600 mr-2">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button className="text-red-500 hover:text-red-600">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}