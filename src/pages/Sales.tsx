import React from 'react';
import { Plus, Search } from 'lucide-react';

export default function Sales() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Vendas</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          Nova Venda
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center mb-4">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar vendas..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}