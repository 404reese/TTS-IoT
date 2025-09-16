import { Badge } from '@/components/ui/badge';
import { sidebarItems } from './Sidebar';

interface HeaderProps {
  activeTab: string;
}

export function Header({ activeTab }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            {sidebarItems.find(item => item.id === activeTab)?.label || 'Dashboard'}
          </h1>
          <p className="text-sm text-gray-600">Management Panel (Admin) - Bharat CETI</p>
        </div>
        <div className="flex items-center space-x-4">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            System Active
          </Badge>
        </div>
      </div>
    </header>
  );
}
