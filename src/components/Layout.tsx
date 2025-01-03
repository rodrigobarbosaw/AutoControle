import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, Users, Package, Wrench, UserCog, FileText, ShoppingCart, 
  ShoppingBag, Receipt, Wallet, DollarSign, FileSpreadsheet,
  Video, Bell
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Users, label: 'Clientes', path: '/customers' },
    { icon: Package, label: 'Produtos', path: '/products' },
    { icon: Wrench, label: 'Serviços', path: '/services' },
    { icon: UserCog, label: 'Profissionais', path: '/professionals' },
    { icon: FileText, label: 'Ordens de Serviço', path: '/work-orders' },
    { icon: ShoppingCart, label: 'Vendas', path: '/sales' },
    { icon: ShoppingBag, label: 'Compras', path: '/purchases' },
    { icon: Receipt, label: 'Contas a Pagar', path: '/payables' },
    { icon: Wallet, label: 'Contas a Receber', path: '/receivables' },
    { icon: DollarSign, label: 'Controle de Caixa', path: '/cash-flow' },
    { icon: FileSpreadsheet, label: 'Notas Fiscais', path: '/invoices' },
    { icon: Video, label: 'Vídeos', path: '/tutorials' },
    { icon: Bell, label: 'Alertas', path: '/alerts' },
  ];

  return (
    <div className="w-64 bg-gray-800 min-h-screen p-4">
      <div className="text-white text-xl font-bold mb-8 p-4">
        Auto Service Pro
      </div>
      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-lg mb-1"
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-8">
        <Outlet />
      </main>
    </div>
  );
}