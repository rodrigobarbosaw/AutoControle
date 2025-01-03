import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import ProductList from '../components/products/ProductList';
import ProductSearch from '../components/products/ProductSearch';
import type { Product } from '../types';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - replace with actual data fetching
  const products: Product[] = [
    {
      id: '1',
      name: 'Óleo de Motor 5W30',
      description: 'Óleo sintético de alta performance',
      price: 120.00,
      stock: 50,
      category: 'Lubrificantes'
    },
    {
      id: '2',
      name: 'Filtro de Óleo',
      description: 'Filtro de óleo compatível com diversos modelos',
      price: 45.00,
      stock: 30,
      category: 'Filtros'
    }
  ];

  const handleEdit = (product: Product) => {
    console.log('Edit product:', product);
  };

  const handleDelete = (productId: string) => {
    console.log('Delete product:', productId);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Produtos</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          Novo Produto
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center mb-4">
          <ProductSearch 
            value={searchTerm}
            onChange={setSearchTerm}
          />
        </div>

        <ProductList 
          products={products}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}