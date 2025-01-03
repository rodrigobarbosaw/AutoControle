import React from 'react';
import { Edit, Trash2 } from 'lucide-react';
import type { Product } from '../../types';

interface ProductListProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (productId: string) => void;
}

export default function ProductList({ products, onEdit, onDelete }: ProductListProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3 px-4">Nome</th>
            <th className="text-left py-3 px-4">Categoria</th>
            <th className="text-right py-3 px-4">Estoque</th>
            <th className="text-right py-3 px-4">Preço</th>
            <th className="text-right py-3 px-4">Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-4">
                <div>
                  <div className="font-medium">{product.name}</div>
                  <div className="text-sm text-gray-500">{product.description}</div>
                </div>
              </td>
              <td className="py-3 px-4">{product.category}</td>
              <td className="py-3 px-4 text-right">{product.stock}</td>
              <td className="py-3 px-4 text-right">
                R$ {product.price.toFixed(2)}
              </td>
              <td className="py-3 px-4 text-right">
                <button 
                  onClick={() => onEdit(product)}
                  className="text-blue-500 hover:text-blue-600 mr-2"
                >
                  <Edit className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => onDelete(product.id)}
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