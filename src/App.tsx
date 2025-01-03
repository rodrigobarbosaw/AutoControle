import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Products from './pages/Products';
import Services from './pages/Services';
import Professionals from './pages/Professionals';
import WorkOrders from './pages/WorkOrders';
import Sales from './pages/Sales';
import Purchases from './pages/Purchases';
import Payables from './pages/Payables';
import Receivables from './pages/Receivables';
import CashFlow from './pages/CashFlow';
import Invoices from './pages/Invoices';
import Tutorials from './pages/Tutorials';
import Alerts from './pages/Alerts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="products" element={<Products />} />
          <Route path="services" element={<Services />} />
          <Route path="professionals" element={<Professionals />} />
          <Route path="work-orders" element={<WorkOrders />} />
          <Route path="sales" element={<Sales />} />
          <Route path="purchases" element={<Purchases />} />
          <Route path="payables" element={<Payables />} />
          <Route path="receivables" element={<Receivables />} />
          <Route path="cash-flow" element={<CashFlow />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="alerts" element={<Alerts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;