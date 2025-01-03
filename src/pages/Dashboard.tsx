import React from 'react';
import { 
  Users, ShoppingCart, FileText, AlertTriangle,
  TrendingUp, DollarSign, Receipt
} from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { icon: Users, label: 'Clientes Ativos', value: '157' },
    { icon: ShoppingCart, label: 'Vendas do Mês', value: 'R$ 45.789,00' },
    { icon: FileText, label: 'Ordens Abertas', value: '12' },
    { icon: AlertTriangle, label: 'Alertas', value: '3' },
  ];

  const recentOrders = [
    { id: '001', customer: 'João Silva', service: 'Troca de Óleo', status: 'Em Andamento' },
    { id: '002', customer: 'Maria Santos', service: 'Revisão Geral', status: 'Aguardando' },
    { id: '003', customer: 'Pedro Costa', service: 'Alinhamento', status: 'Concluído' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-2">
              <stat.icon className="w-5 h-5 text-blue-500 mr-2" />
              <h3 className="text-gray-600">{stat.label}</h3>
            </div>
            <p className="text-2xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Ordens de Serviço Recentes</h2>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-medium">{order.customer}</p>
                  <p className="text-sm text-gray-600">{order.service}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  order.status === 'Concluído' ? 'bg-green-100 text-green-800' :
                  order.status === 'Em Andamento' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Resumo Financeiro</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                <span>Receitas do Mês</span>
              </div>
              <span className="font-semibold">R$ 45.789,00</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 text-red-500 mr-2" />
                <span>Despesas do Mês</span>
              </div>
              <span className="font-semibold">R$ 32.456,00</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Receipt className="w-5 h-5 text-blue-500 mr-2" />
                <span>Lucro Líquido</span>
              </div>
              <span className="font-semibold text-green-600">R$ 13.333,00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}