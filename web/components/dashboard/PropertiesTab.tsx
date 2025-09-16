import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, FileText } from 'lucide-react';
import { mockProperties, mockCollectionHistory, Property } from '@/lib/mock-data';
import { getStatusColor, getTrashTypeIcon } from '@/lib/dashboard-utils';

interface PropertiesTabProps {
  setSelectedProperty: (property: Property) => void;
  setShowHistory: (show: boolean) => void;
  setActiveTab: (tab: string) => void;
}

export function PropertiesTab({ setSelectedProperty, setShowHistory, setActiveTab }: PropertiesTabProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Residential Properties</h2>
          <p className="text-sm text-gray-600">Manage collection status and property details</p>
        </div>
        <Button size="sm">
          <MapPin className="h-4 w-4 mr-2" />
          View on Map
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockProperties.map((property) => (
          <Card key={property.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-medium">{property.address}</h3>
                  <p className="text-sm text-gray-600">ID: #{property.id.toString().padStart(3, '0')}</p>
                </div>
                <Badge className={getStatusColor(property.status)}>
                  {property.status}
                </Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Current Weight</span>
                  <span className="font-medium text-green-600">{property.weight}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Collected</span>
                  <span className="font-medium">{property.totalWeight}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Collections</span>
                  <span className="font-medium">{property.totalCollections}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Type</span>
                  <div className="flex items-center gap-1">
                    {getTrashTypeIcon(property.type)}
                    <span className="text-sm capitalize">{property.type}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Last Collection</span>
                  <span className="text-sm">{property.lastCollection}</span>
                </div>
              </div>

              {/* Collection History Preview */}
              <div className="mt-4 pt-3 border-t">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-600">Recent Collections</span>
                  <span className="text-xs text-gray-500">{mockCollectionHistory[property.id]?.length || 0} total</span>
                </div>
                <div className="flex gap-1">
                  {mockCollectionHistory[property.id]?.slice(0, 5).map((record, index) => (
                    <div 
                      key={index}
                      className="w-6 h-6 rounded border flex items-center justify-center"
                      style={{ 
                        backgroundColor: record.type === 'plastic' ? '#dbeafe' : 
                                        record.type === 'paper' ? '#fef3c7' :
                                        record.type === 'glass' ? '#ccfbf1' :
                                        record.type === 'metal' ? '#f3f4f6' : '#dcfce7'
                      }}
                      title={`${record.type} - ${record.weight}`}
                    >
                      {getTrashTypeIcon(record.type)}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => {
                    setSelectedProperty(property);
                    setActiveTab('overview');
                  }}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Locate
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => {
                    setSelectedProperty(property);
                    setShowHistory(true);
                    setActiveTab('overview');
                  }}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  History
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
