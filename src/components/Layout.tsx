import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, Users, Car, FileText, Calculator, UserCog,
  Package, Wrench, ShoppingCart, ShoppingBag, Receipt, 
  Wallet, DollarSign, FileSpreadsheet, Video, Bell, Menu, X
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const mainMenuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Users, label: 'Clientes', path: '/customers' },
    { icon: Car, label: 'Veículos', path: '/vehicles' },
    { icon: FileText, label: 'Ordens de Serviço', path: '/work-orders' },
    { icon: Calculator, label: 'Orçamentos', path: '/budget' },
    { icon: UserCog, label: 'Profissionais', path: '/professionals' },
  ];

  const financialMenuItems = [
    { icon: Receipt, label: 'Contas a Pagar', path: '/payables' },
    { icon: Wallet, label: 'Contas a Receber', path: '/receivables' },
    { icon: DollarSign, label: 'Controle de Caixa', path: '/cash-flow' },
    { icon: FileSpreadsheet, label: 'Notas Fiscais', path: '/invoices' },
  ];

  const inventoryMenuItems = [
    { icon: Package, label: 'Produtos', path: '/products' },
    { icon: Wrench, label: 'Serviços', path: '/services' },
    { icon: ShoppingBag, label: 'Compras', path: '/purchases' },
    { icon: ShoppingCart, label: 'Vendas', path: '/sales' },
  ];

  const utilityMenuItems = [
    { icon: Video, label: 'Vídeos', path: '/tutorials' },
    { icon: Bell, label: 'Alertas', path: '/alerts' },
  ];

  const renderMenuItems = (items: typeof mainMenuItems) => (
    items.map((item) => (
      <Link
        key={item.path}
        to={item.path}
        className="flex items-center text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-lg mb-1"
        onClick={onClose}
      >
        <item.icon className="w-5 h-5 mr-3" />
        <span>{item.label}</span>
      </Link>
    ))
  );

  const sidebarClasses = `
    fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 p-4 transform transition-transform duration-300 ease-in-out
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    md:relative md:translate-x-0
  `;

  return (
    <div className={sidebarClasses}>
      <div className="flex items-center justify-between text-white mb-8 p-4">
        <span className="text-xl font-bold">Auto Service Pro</span>
        <button 
          onClick={onClose}
          className="md:hidden text-gray-300 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      <nav className="space-y-6">
        {/* Main Menu */}
        <div>
          {renderMenuItems(mainMenuItems)}
        </div>

        {/* Financial Menu */}
        <div className="border-t border-gray-700 pt-4">
          {renderMenuItems(financialMenuItems)}
        </div>

        {/* Inventory Menu */}
        <div className="border-t border-gray-700 pt-4">
          {renderMenuItems(inventoryMenuItems)}
        </div>

        {/* Utility Menu */}
        <div className="border-t border-gray-700 pt-4">
          {renderMenuItems(utilityMenuItems)}
        </div>
      </nav>
    </div>
  );
};

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      {/* Main Content */}
      <div className="flex-1">
        {/* Mobile Header */}
        <div className="md:hidden bg-gray-800 p-4 flex items-center justify-between">
          <span className="text-white text-xl font-bold">Auto Service Pro</span>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="text-gray-300 hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <main className="bg-gray-100 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}