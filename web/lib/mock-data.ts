// Mock data for the admin dashboard

export interface Property {
  id: number;
  address: string;
  status: 'collected' | 'pending' | 'missed';
  weight: string;
  type: 'mixed' | 'recyclable' | 'organic' | 'plastic' | 'paper' | 'glass' | 'metal';
  lastCollection: string;
  lat: number;
  lng: number;
  x: number;
  y: number;
  totalWeight: string;
  totalCollections: number;
}

export interface Truck {
  id: string;
  driver: string;
  status: 'active' | 'maintenance' | 'returning';
  location: string;
  capacity: string;
  route: string;
  completedStops: number;
  totalStops: number;
  x: number;
  y: number;
}

export interface Employee {
  id: number;
  name: string;
  role: string;
  zone: string;
  status: 'active' | 'maintenance' | 'inactive';
  phone: string;
  email: string;
}

export interface CollectionRecord {
  id: number;
  date: string;
  type: 'plastic' | 'paper' | 'glass' | 'metal' | 'organic';
  weight: string;
  points: number;
  status: 'completed' | 'pending' | 'missed';
}

export const mockProperties: Property[] = [
  { 
    id: 1, 
    address: '123 Oak Street', 
    status: 'collected', 
    weight: '2.4kg', 
    type: 'mixed', 
    lastCollection: '2025-01-15', 
    lat: 40.7128, 
    lng: -74.0060, 
    x: 25, 
    y: 30,
    totalWeight: '45.8kg',
    totalCollections: 28
  },
  { 
    id: 2, 
    address: '456 Pine Avenue', 
    status: 'pending', 
    weight: '1.8kg', 
    type: 'recyclable', 
    lastCollection: '2025-01-12', 
    lat: 40.7130, 
    lng: -74.0058, 
    x: 45, 
    y: 25,
    totalWeight: '38.2kg',
    totalCollections: 24
  },
  { 
    id: 3, 
    address: '789 Elm Drive', 
    status: 'collected', 
    weight: '3.2kg', 
    type: 'organic', 
    lastCollection: '2025-01-15', 
    lat: 40.7126, 
    lng: -74.0062, 
    x: 35, 
    y: 45,
    totalWeight: '52.1kg',
    totalCollections: 31
  },
  { 
    id: 4, 
    address: '321 Maple Road', 
    status: 'missed', 
    weight: '2.1kg', 
    type: 'mixed', 
    lastCollection: '2025-01-10', 
    lat: 40.7132, 
    lng: -74.0056, 
    x: 65, 
    y: 35,
    totalWeight: '41.7kg',
    totalCollections: 26
  },
  { 
    id: 5, 
    address: '654 Birch Lane', 
    status: 'collected', 
    weight: '1.6kg', 
    type: 'recyclable', 
    lastCollection: '2025-01-15', 
    lat: 40.7124, 
    lng: -74.0064, 
    x: 55, 
    y: 55,
    totalWeight: '33.9kg',
    totalCollections: 22
  },
  { 
    id: 6, 
    address: '987 Cedar Court', 
    status: 'pending', 
    weight: '2.8kg', 
    type: 'mixed', 
    lastCollection: '2025-01-13', 
    lat: 40.7135, 
    lng: -74.0055, 
    x: 75, 
    y: 20,
    totalWeight: '47.3kg',
    totalCollections: 29
  },
  { 
    id: 7, 
    address: '147 Willow Way', 
    status: 'collected', 
    weight: '1.9kg', 
    type: 'organic', 
    lastCollection: '2025-01-15', 
    lat: 40.7122, 
    lng: -74.0068, 
    x: 15, 
    y: 60,
    totalWeight: '36.4kg',
    totalCollections: 25
  },
  { 
    id: 8, 
    address: '258 Spruce Street', 
    status: 'missed', 
    weight: '2.5kg', 
    type: 'recyclable', 
    lastCollection: '2025-01-11', 
    lat: 40.7140, 
    lng: -74.0050, 
    x: 85, 
    y: 40,
    totalWeight: '44.6kg',
    totalCollections: 27
  },
];

export const mockTrucks: Truck[] = [
  { id: 'T001', driver: 'John Smith', status: 'active', location: 'Zone A', capacity: '75%', route: 'Route 1', completedStops: 12, totalStops: 18, x: 30, y: 35 },
  { id: 'T002', driver: 'Sarah Johnson', status: 'maintenance', location: 'Depot', capacity: '0%', route: 'N/A', completedStops: 0, totalStops: 0, x: 10, y: 10 },
  { id: 'T003', driver: 'Mike Davis', status: 'active', location: 'Zone B', capacity: '45%', route: 'Route 2', completedStops: 8, totalStops: 15, x: 70, y: 50 },
  { id: 'T004', driver: 'Lisa Wong', status: 'returning', location: 'Zone C', capacity: '95%', route: 'Route 3', completedStops: 14, totalStops: 14, x: 50, y: 25 },
];

export const mockEmployees: Employee[] = [
  { id: 1, name: 'John Smith', role: 'Driver', zone: 'Zone A', status: 'active', phone: '+1 (555) 123-4567', email: 'john.smith@company.com' },
  { id: 2, name: 'Sarah Johnson', role: 'Driver', zone: 'Maintenance', status: 'maintenance', phone: '+1 (555) 234-5678', email: 'sarah.johnson@company.com' },
  { id: 3, name: 'Mike Davis', role: 'Driver', zone: 'Zone B', status: 'active', phone: '+1 (555) 345-6789', email: 'mike.davis@company.com' },
  { id: 4, name: 'Lisa Wong', role: 'Driver', zone: 'Zone C', status: 'active', phone: '+1 (555) 456-7890', email: 'lisa.wong@company.com' },
  { id: 5, name: 'Tom Wilson', role: 'Supervisor', zone: 'All Zones', status: 'active', phone: '+1 (555) 567-8901', email: 'tom.wilson@company.com' },
];

export const mockCollectionHistory: Record<number, CollectionRecord[]> = {
  1: [
    { id: 1, date: '2025-01-15', type: 'plastic', weight: '1.2kg', points: 12, status: 'completed' },
    { id: 2, date: '2025-01-15', type: 'paper', weight: '0.8kg', points: 8, status: 'completed' },
    { id: 3, date: '2025-01-15', type: 'organic', weight: '0.4kg', points: 4, status: 'completed' },
    { id: 4, date: '2025-01-12', type: 'glass', weight: '1.5kg', points: 15, status: 'completed' },
    { id: 5, date: '2025-01-12', type: 'metal', weight: '0.6kg', points: 6, status: 'completed' },
    { id: 6, date: '2025-01-10', type: 'plastic', weight: '1.8kg', points: 18, status: 'completed' },
    { id: 7, date: '2025-01-08', type: 'paper', weight: '1.1kg', points: 11, status: 'completed' },
    { id: 8, date: '2025-01-05', type: 'organic', weight: '2.3kg', points: 23, status: 'completed' },
  ],
  2: [
    { id: 1, date: '2025-01-12', type: 'plastic', weight: '0.9kg', points: 9, status: 'completed' },
    { id: 2, date: '2025-01-12', type: 'paper', weight: '0.9kg', points: 9, status: 'completed' },
    { id: 3, date: '2025-01-09', type: 'glass', weight: '1.2kg', points: 12, status: 'completed' },
    { id: 4, date: '2025-01-09', type: 'metal', weight: '0.4kg', points: 4, status: 'completed' },
    { id: 5, date: '2025-01-06', type: 'organic', weight: '1.7kg', points: 17, status: 'completed' },
    { id: 6, date: '2025-01-03', type: 'plastic', weight: '1.3kg', points: 13, status: 'completed' },
  ],
  3: [
    { id: 1, date: '2025-01-15', type: 'organic', weight: '2.1kg', points: 21, status: 'completed' },
    { id: 2, date: '2025-01-15', type: 'plastic', weight: '0.7kg', points: 7, status: 'completed' },
    { id: 3, date: '2025-01-15', type: 'paper', weight: '0.4kg', points: 4, status: 'completed' },
    { id: 4, date: '2025-01-13', type: 'glass', weight: '1.8kg', points: 18, status: 'completed' },
    { id: 5, date: '2025-01-11', type: 'metal', weight: '0.8kg', points: 8, status: 'completed' },
    { id: 6, date: '2025-01-08', type: 'organic', weight: '2.5kg', points: 25, status: 'completed' },
    { id: 7, date: '2025-01-05', type: 'plastic', weight: '1.4kg', points: 14, status: 'completed' },
  ],
  4: [
    { id: 1, date: '2025-01-10', type: 'plastic', weight: '1.1kg', points: 11, status: 'completed' },
    { id: 2, date: '2025-01-10', type: 'paper', weight: '1.0kg', points: 10, status: 'completed' },
    { id: 3, date: '2025-01-07', type: 'glass', weight: '1.6kg', points: 16, status: 'completed' },
    { id: 4, date: '2025-01-07', type: 'organic', weight: '1.9kg', points: 19, status: 'completed' },
    { id: 5, date: '2025-01-04', type: 'metal', weight: '0.7kg', points: 7, status: 'completed' },
  ],
  5: [
    { id: 1, date: '2025-01-15', type: 'plastic', weight: '0.8kg', points: 8, status: 'completed' },
    { id: 2, date: '2025-01-15', type: 'paper', weight: '0.8kg', points: 8, status: 'completed' },
    { id: 3, date: '2025-01-13', type: 'glass', weight: '1.1kg', points: 11, status: 'completed' },
    { id: 4, date: '2025-01-11', type: 'organic', weight: '1.4kg', points: 14, status: 'completed' },
    { id: 5, date: '2025-01-08', type: 'metal', weight: '0.5kg', points: 5, status: 'completed' },
    { id: 6, date: '2025-01-05', type: 'plastic', weight: '1.2kg', points: 12, status: 'completed' },
  ],
  6: [
    { id: 1, date: '2025-01-13', type: 'plastic', weight: '1.4kg', points: 14, status: 'completed' },
    { id: 2, date: '2025-01-13', type: 'paper', weight: '1.4kg', points: 14, status: 'completed' },
    { id: 3, date: '2025-01-10', type: 'glass', weight: '1.7kg', points: 17, status: 'completed' },
    { id: 4, date: '2025-01-08', type: 'organic', weight: '2.2kg', points: 22, status: 'completed' },
    { id: 5, date: '2025-01-05', type: 'metal', weight: '0.9kg', points: 9, status: 'completed' },
  ],
  7: [
    { id: 1, date: '2025-01-15', type: 'organic', weight: '1.2kg', points: 12, status: 'completed' },
    { id: 2, date: '2025-01-15', type: 'plastic', weight: '0.4kg', points: 4, status: 'completed' },
    { id: 3, date: '2025-01-15', type: 'paper', weight: '0.3kg', points: 3, status: 'completed' },
    { id: 4, date: '2025-01-12', type: 'glass', weight: '1.3kg', points: 13, status: 'completed' },
    { id: 5, date: '2025-01-09', type: 'metal', weight: '0.6kg', points: 6, status: 'completed' },
    { id: 6, date: '2025-01-06', type: 'organic', weight: '1.8kg', points: 18, status: 'completed' },
  ],
  8: [
    { id: 1, date: '2025-01-11', type: 'plastic', weight: '1.3kg', points: 13, status: 'completed' },
    { id: 2, date: '2025-01-11', type: 'paper', weight: '1.2kg', points: 12, status: 'completed' },
    { id: 3, date: '2025-01-08', type: 'glass', weight: '1.5kg', points: 15, status: 'completed' },
    { id: 4, date: '2025-01-05', type: 'organic', weight: '2.0kg', points: 20, status: 'completed' },
    { id: 5, date: '2025-01-02', type: 'metal', weight: '0.8kg', points: 8, status: 'completed' },
  ],
};
