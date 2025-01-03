import React from 'react';
import BudgetForm, { BudgetFormData } from '../components/budget/BudgetForm';
import { generateWhatsAppMessage } from '../utils/whatsapp';

export default function Budget() {
  // Mock data - replace with actual data fetching
  const services = [
    {
      id: '1',
      name: 'Troca de Óleo',
      description: 'Troca de óleo completa com filtro',
      price: 150.00,
      estimatedTime: 60
    },
    {
      id: '2',
      name: 'Alinhamento',
      description: 'Alinhamento computadorizado',
      price: 120.00,
      estimatedTime: 45
    }
  ];

  const products = [
    {
      id: '1',
      name: 'Óleo Motor 5W30',
      description: 'Óleo sintético de alta performance',
      price: 45.00,
      stock: 10,
      category: 'Lubrificantes'
    },
    {
      id: '2',
      name: 'Filtro de Óleo',
      description: 'Filtro de óleo compatível com diversos modelos',
      price: 35.00,
      stock: 15,
      category: 'Filtros'
    }
  ];

  const handleSubmit = (formData: BudgetFormData) => {
    const selectedServices = formData.selectedServices.map(item => {
      const service = services.find(s => s.id === item.id)!;
      return {
        name: service.name,
        price: service.price,
        quantity: item.quantity
      };
    });

    const selectedProducts = formData.selectedProducts.map(item => {
      const product = products.find(p => p.id === item.id)!;
      return {
        name: product.name,
        price: product.price,
        quantity: item.quantity
      };
    });

    const total = [
      ...selectedServices.map(s => s.price * s.quantity),
      ...selectedProducts.map(p => p.price * p.quantity)
    ].reduce((a, b) => a + b, 0);

    const message = generateWhatsAppMessage({
      customerName: formData.customerName,
      vehicle: formData.vehicle,
      services: selectedServices,
      products: selectedProducts,
      total,
      observations: formData.observations
    });

    const phone = formData.phone.replace(/\D/g, '');
    window.open(`https://wa.me/55${phone}?text=${message}`);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Orçamento</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <BudgetForm
          services={services}
          products={products}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}