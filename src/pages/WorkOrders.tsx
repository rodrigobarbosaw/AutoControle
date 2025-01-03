import React, { useState } from 'react';
import { Plus, Search, FileText, Printer } from 'lucide-react';

export default function WorkOrders() {
  const [searchTerm, setSearchTerm] = useState('');

  const workOrders = [
    {
      id: '1',
      customer: 'João Silva',
      vehicle: 'Toyota Corolla 2020',
      services: ['Troca de Óleo', 'Alinhamento'],
      status: 'Em Andamento',
      mechanic: 'Carlos Santos',
      total: 450.00,
      date: '2024-03-15'
    },
    // Add more mock data as needed
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Ordens de Serviço</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          Nova Ordem
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center mb-4">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar ordens..."
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
                <th className="text-left py-3 px-4">Nº</th>
                <th className="text-left py-3 px-4">Cliente</th>
                <th className="text-left py-3 px-4">Veículo</th>
                <th className="text-left py-3 px-4">Serviços</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Mecânico</th>
                <th className="text-right py-3 px-4">Total</th>
                <th className="text-center py-3 px-4">Ações</th>
              </tr>
            </thead>
            <tbody>
              {workOrders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{order.id}</td>
                  <td className="py-3 px-4">{order.customer}</td>
                  <td className="py-3 px-4">{order.vehicle}</td>
                  <td className="py-3 px-4">
                    {order.services.join(', ')}
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      order.status === 'Concluído' ? 'bg-green-100 text-green-800' :
                      order.status === 'Em Andamento' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{order.mechanic}</td>
                  <td className="py-3 px-4 text-right">
                    R$ {order.total.toFixed(2)}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button className="text-blue-500 hover:text-blue-600 mr-2">
                      <FileText className="w-5 h-5" />
                    </button>
                    <button className="text-gray-500 hover:text-gray-600">
                      <Printer className="w-5 h-5" />
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