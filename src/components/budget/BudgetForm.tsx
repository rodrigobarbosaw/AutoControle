import React from 'react';
import { Calculator } from 'lucide-react';
import type { Service, Product } from '../../types';

interface BudgetFormProps {
  services: Service[];
  products: Product[];
  onSubmit: (data: BudgetFormData) => void;
}

export interface BudgetFormData {
  customerName: string;
  phone: string;
  vehicle: string;
  selectedServices: { id: string; quantity: number }[];
  selectedProducts: { id: string; quantity: number }[];
  observations: string;
}

export default function BudgetForm({ services, products, onSubmit }: BudgetFormProps) {
  const [formData, setFormData] = React.useState<BudgetFormData>({
    customerName: '',
    phone: '',
    vehicle: '',
    selectedServices: [],
    selectedProducts: [],
    observations: ''
  });

  const total = React.useMemo(() => {
    const servicesTotal = formData.selectedServices.reduce((acc, item) => {
      const service = services.find(s => s.id === item.id);
      return acc + (service?.price || 0) * item.quantity;
    }, 0);

    const productsTotal = formData.selectedProducts.reduce((acc, item) => {
      const product = products.find(p => p.id === item.id);
      return acc + (product?.price || 0) * item.quantity;
    }, 0);

    return servicesTotal + productsTotal;
  }, [formData.selectedServices, formData.selectedProducts, services, products]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nome do Cliente</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.customerName}
            onChange={e => setFormData(prev => ({ ...prev, customerName: e.target.value }))}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">WhatsApp</label>
          <input
            type="tel"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.phone}
            onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Veículo</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Marca, Modelo, Ano"
            value={formData.vehicle}
            onChange={e => setFormData(prev => ({ ...prev, vehicle: e.target.value }))}
            required
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Serviços</h3>
        {services.map(service => (
          <div key={service.id} className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <p className="font-medium">{service.name}</p>
              <p className="text-sm text-gray-500">{service.description}</p>
              <p className="text-blue-600">R$ {service.price.toFixed(2)}</p>
            </div>
            <input
              type="number"
              min="0"
              className="w-20 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Qtd"
              onChange={e => {
                const quantity = parseInt(e.target.value) || 0;
                setFormData(prev => ({
                  ...prev,
                  selectedServices: quantity > 0
                    ? [...prev.selectedServices.filter(s => s.id !== service.id), { id: service.id, quantity }]
                    : prev.selectedServices.filter(s => s.id !== service.id)
                }));
              }}
            />
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Peças</h3>
        {products.map(product => (
          <div key={product.id} className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <p className="font-medium">{product.name}</p>
              <p className="text-sm text-gray-500">{product.description}</p>
              <p className="text-blue-600">R$ {product.price.toFixed(2)}</p>
            </div>
            <input
              type="number"
              min="0"
              max={product.stock}
              className="w-20 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Qtd"
              onChange={e => {
                const quantity = parseInt(e.target.value) || 0;
                setFormData(prev => ({
                  ...prev,
                  selectedProducts: quantity > 0
                    ? [...prev.selectedProducts.filter(p => p.id !== product.id), { id: product.id, quantity }]
                    : prev.selectedProducts.filter(p => p.id !== product.id)
                }));
              }}
            />
          </div>
        ))}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Observações</label>
        <textarea
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          rows={3}
          value={formData.observations}
          onChange={e => setFormData(prev => ({ ...prev, observations: e.target.value }))}
        />
      </div>

      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div className="text-lg font-medium">Total: R$ {total.toFixed(2)}</div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg flex items-center"
        >
          <Calculator className="w-5 h-5 mr-2" />
          Gerar Orçamento
        </button>
      </div>
    </form>
  );
}