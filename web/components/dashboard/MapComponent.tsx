import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Truck } from 'lucide-react';
import { mockProperties, mockTrucks, Property } from '@/lib/mock-data';
import { getTruckStatusColor } from '@/lib/dashboard-utils';

interface MapComponentProps {
  onPropertySelect: (property: Property) => void;
}

export function MapComponent({ onPropertySelect }: MapComponentProps) {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Area Map - Residential Zone
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg h-96 relative overflow-hidden border">
          {/* Street Grid */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            {/* Horizontal streets */}
            <line x1="0" y1="25%" x2="100%" y2="25%" stroke="#e5e7eb" strokeWidth="2" />
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#e5e7eb" strokeWidth="2" />
            <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#e5e7eb" strokeWidth="2" />
            
            {/* Vertical streets */}
            <line x1="25%" y1="0" x2="25%" y2="100%" stroke="#e5e7eb" strokeWidth="2" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#e5e7eb" strokeWidth="2" />
            <line x1="75%" y1="0" x2="75%" y2="100%" stroke="#e5e7eb" strokeWidth="2" />
          </svg>

          {/* Property Markers */}
          {mockProperties.map((property) => (
            <div
              key={property.id}
              className={`absolute w-4 h-4 rounded-full border-2 cursor-pointer transition-all hover:scale-125 z-10 ${
                property.status === 'collected' 
                  ? 'bg-green-500 border-green-600 shadow-green-200' 
                  : property.status === 'pending'
                  ? 'bg-yellow-500 border-yellow-600 shadow-yellow-200'
                  : 'bg-red-500 border-red-600 shadow-red-200'
              } shadow-lg`}
              style={{ 
                left: `${property.x}%`, 
                top: `${property.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onClick={() => onPropertySelect(property)}
              title={`${property.address} - ${property.status}`}
            />
          ))}

          {/* Truck Markers */}
          {mockTrucks.filter(truck => truck.status === 'active' || truck.status === 'returning').map((truck) => (
            <div
              key={truck.id}
              className={`absolute w-6 h-6 rounded-lg border-2 border-white cursor-pointer transition-all hover:scale-110 z-20 ${getTruckStatusColor(truck.status)} shadow-lg flex items-center justify-center`}
              style={{ 
                left: `${truck.x}%`, 
                top: `${truck.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              title={`${truck.id} - ${truck.driver}`}
            >
              <Truck className="h-3 w-3 text-white" />
            </div>
          ))}

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg z-30">
            <div className="space-y-2 text-xs">
              <div className="font-medium text-gray-700 mb-2">Legend</div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full border border-green-600"></div>
                <span>Collected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full border border-yellow-600"></div>
                <span>Pending</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full border border-red-600"></div>
                <span>Missed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded border border-white flex items-center justify-center">
                  <Truck className="h-2 w-2 text-white" />
                </div>
                <span>Active Truck</span>
              </div>
            </div>
          </div>

          {/* Zone Labels */}
          <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm rounded px-2 py-1 text-xs font-medium text-gray-700 z-20">
            Zone A
          </div>
          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded px-2 py-1 text-xs font-medium text-gray-700 z-20">
            Zone B
          </div>
          <div className="absolute bottom-16 right-4 bg-white/80 backdrop-blur-sm rounded px-2 py-1 text-xs font-medium text-gray-700 z-20">
            Zone C
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
