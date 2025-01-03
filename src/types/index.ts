export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  vehicles: Vehicle[];
}

export interface Vehicle {
  id: string;
  customerId: string;
  make: string;
  model: string;
  year: number;
  licensePlate: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedTime: number;
}

export interface Professional {
  id: string;
  name: string;
  specialization: string;
  phone: string;
  email: string;
  active: boolean;
}

export interface WorkOrder {
  id: string;
  customerId: string;
  vehicleId: string;
  services: ServiceItem[];
  products: ProductItem[];
  mechanicId: string;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  totalAmount: number;
  createdAt: Date;
  completedAt?: Date;
}

export interface ServiceItem {
  serviceId: string;
  quantity: number;
  price: number;
}

export interface ProductItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Sale {
  id: string;
  workOrderId?: string;
  customerId: string;
  items: ProductItem[];
  totalAmount: number;
  paymentMethod: string;
  date: Date;
}

export interface Purchase {
  id: string;
  supplierId: string;
  items: ProductItem[];
  totalAmount: number;
  status: 'pending' | 'completed' | 'cancelled';
  date: Date;
}

export interface Account {
  id: string;
  description: string;
  amount: number;
  dueDate: Date;
  type: 'payable' | 'receivable';
  status: 'pending' | 'paid' | 'overdue';
}

export interface CashFlow {
  id: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  date: Date;
  category: string;
}

export interface Invoice {
  id: string;
  number: string;
  customerId: string;
  items: ProductItem[];
  totalAmount: number;
  date: Date;
  status: 'draft' | 'issued' | 'cancelled';
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  category: string;
}

export interface Alert {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'error';
  date: Date;
  read: boolean;
}