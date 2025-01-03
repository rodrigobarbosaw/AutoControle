import React from 'react';
import { Search } from 'lucide-react';

interface ProductSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ProductSearch({ value, onChange }: ProductSearchProps) {
  return (
    <div className="relative flex-1">
      <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Buscar produtos..."
        className="w-full pl-10 pr-4 py-2 border rounded-lg"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}