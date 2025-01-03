import React from 'react';
import { Search } from 'lucide-react';

export default function Tutorials() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Vídeos Tutoriais</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center mb-4">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar tutoriais..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}