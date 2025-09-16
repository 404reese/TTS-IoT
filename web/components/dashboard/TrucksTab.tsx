import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Route, MapPin, Phone } from 'lucide-react';
import { mockTrucks } from '@/lib/mock-data';
import { getStatusColor } from '@/lib/dashboard-utils';

export function TrucksTab() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Fleet Management</h2>
          <p className="text-sm text-gray-600">Monitor truck locations and performance</p>
        </div>
        <Button size="sm">
          <Route className="h-4 w-4 mr-2" />
          View Routes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockTrucks.map((truck) => (
          <Card key={truck.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    Truck {truck.id}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-1">Driver: {truck.driver}</p>
                </div>
                <Badge className={getStatusColor(truck.status)}>
                  {truck.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium">{truck.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Capacity</p>
                  <p className="font-medium">{truck.capacity}</p>
                </div>
              </div>
              
              {truck.status === 'active' && (
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Route Progress</span>
                    <span>{truck.completedStops}/{truck.totalStops} stops</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all" 
                      style={{ width: `${(truck.completedStops / truck.totalStops) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <MapPin className="h-4 w-4 mr-2" />
                  Track
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
