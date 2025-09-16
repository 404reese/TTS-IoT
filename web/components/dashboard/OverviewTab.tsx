import { KPICards } from './KPICards';
import { MapComponent } from './MapComponent';
import { PropertyDetails } from './PropertyDetails';
import { Property } from '@/lib/mock-data';

interface OverviewTabProps {
  selectedProperty: Property | null;
  setSelectedProperty: (property: Property | null) => void;
  showHistory: boolean;
  setShowHistory: (show: boolean) => void;
}

export function OverviewTab({ 
  selectedProperty, 
  setSelectedProperty, 
  showHistory, 
  setShowHistory 
}: OverviewTabProps) {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <KPICards />

      {/* Map and Property Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <MapComponent onPropertySelect={setSelectedProperty} />
        <PropertyDetails 
          selectedProperty={selectedProperty}
          showHistory={showHistory}
          setShowHistory={setShowHistory}
        />
      </div>
    </div>
  );
}
