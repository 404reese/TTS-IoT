import { Settings } from 'lucide-react';
import { sidebarItems } from './Sidebar';

interface PlaceholderTabProps {
  activeTab: string;
}

export function PlaceholderTab({ activeTab }: PlaceholderTabProps) {
  const item = sidebarItems.find(item => item.id === activeTab);
  const Icon = item?.icon || Settings;
  
  return (
    <div className="flex items-center justify-center h-96">
      <div className="text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon className="h-8 w-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          {item?.label}
        </h3>
        <p className="text-gray-600">This section is coming soon.</p>
      </div>
    </div>
  );
}
