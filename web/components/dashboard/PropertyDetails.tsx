import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Calendar, FileText } from 'lucide-react';
import { Property, mockCollectionHistory } from '@/lib/mock-data';
import { getStatusColor, getTrashTypeIcon, getTrashTypeColor } from '@/lib/dashboard-utils';

interface PropertyDetailsProps {
  selectedProperty: Property | null;
  showHistory: boolean;
  setShowHistory: (show: boolean) => void;
}

export function PropertyDetails({ selectedProperty, showHistory, setShowHistory }: PropertyDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Property Details
          </CardTitle>
          {selectedProperty && (
            <Button 
              className='bg-green-600 text-green-50 border-green-200 hover:bg-green-700'
              size="sm"
              onClick={() => setShowHistory(!showHistory)}
            >
              {showHistory ? 'Hide History' : 'View History'}
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {selectedProperty ? (
          <div className="space-y-4">
            {!showHistory ? (
              <>
                <div>
                  <h3 className="font-medium">{selectedProperty.address}</h3>
                  <Badge className={`mt-2 ${getStatusColor(selectedProperty.status)}`}>
                    {selectedProperty.status}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Current Weight</span>
                    <span className="font-medium text-green-600">{selectedProperty.weight}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Total Collected</span>
                    <span className="font-medium">{selectedProperty.totalWeight}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Collections</span>
                    <span className="font-medium">{selectedProperty.totalCollections}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Type</span>
                    <div className="flex items-center gap-1">
                      {getTrashTypeIcon(selectedProperty.type)}
                      <span className="font-medium capitalize">{selectedProperty.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Last Collection</span>
                    <span className="font-medium">{selectedProperty.lastCollection}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Property ID</span>
                    <span className="font-medium">#{selectedProperty.id.toString().padStart(3, '0')}</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Collection History</h3>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {mockCollectionHistory[selectedProperty.id]?.length || 0} Records
                  </Badge>
                </div>
                
                <div className="max-h-80 overflow-y-auto space-y-3">
                  {mockCollectionHistory[selectedProperty.id]?.map((record) => (
                    <div key={record.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border">
                          {getTrashTypeIcon(record.type)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{record.weight}</span>
                            <Badge className={`text-xs ${getTrashTypeColor(record.type)}`}>
                              {record.type}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">{record.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-green-600">+{record.points} pts</div>
                        <div className="text-xs text-gray-500 capitalize">{record.status}</div>
                      </div>
                    </div>
                  )) || (
                    <div className="text-center text-gray-500 py-4">
                      <FileText className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                      <p className="text-sm">No collection history available</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="pt-4 border-t">
              <Button className="w-full" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Collection
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 py-8">
            <MapPin className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p className="text-sm">Click on a property marker to view details</p>
            <p className="text-xs text-gray-400 mt-1">Green = Collected, Yellow = Pending, Red = Missed</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
