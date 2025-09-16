'use client';

import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { OverviewTab } from './OverviewTab';
import { PropertiesTab } from './PropertiesTab';
import { TrucksTab } from './TrucksTab';
import { EmployeesTab } from './EmployeesTab';
import { PlaceholderTab } from './PlaceholderTab';
import type { Property } from '@/lib/mock-data';

export function DashboardLayout() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <OverviewTab 
            selectedProperty={selectedProperty}
            setSelectedProperty={setSelectedProperty}
            showHistory={showHistory}
            setShowHistory={setShowHistory}
          />
        );
      case 'properties':
        return (
          <PropertiesTab 
            setSelectedProperty={setSelectedProperty}
            setShowHistory={setShowHistory}
            setActiveTab={setActiveTab}
          />
        );
      case 'trucks':
        return <TrucksTab />;
      case 'employees':
        return <EmployeesTab />;
      default:
        return <PlaceholderTab activeTab={activeTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      
      <div className="flex-1 flex flex-col">
        <Header activeTab={activeTab} />
        
        <div className="flex-1 p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}
