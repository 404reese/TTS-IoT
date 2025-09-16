import { 
  Recycle, 
  FileText, 
  Trash2 
} from 'lucide-react';

export const getStatusColor = (status: string) => {
  switch (status) {
    case 'collected': return 'bg-green-100 text-green-800 border-green-200';
    case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'missed': return 'bg-red-100 text-red-800 border-red-200';
    case 'active': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'maintenance': return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'returning': return 'bg-purple-100 text-purple-800 border-purple-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export const getTrashTypeIcon = (type: string) => {
  switch (type) {
    case 'plastic': return <Recycle className="h-4 w-4 text-blue-600" />;
    case 'recyclable': return <Recycle className="h-4 w-4 text-green-600" />;
    case 'paper': return <FileText className="h-4 w-4 text-amber-600" />;
    case 'glass': return <div className="h-4 w-4 rounded-full bg-teal-600"></div>;
    case 'metal': return <div className="h-4 w-4 bg-gray-600 rounded-sm"></div>;
    case 'organic': return <Trash2 className="h-4 w-4 text-green-700" />;
    default: return <Trash2 className="h-4 w-4 text-gray-600" />;
  }
};

export const getTruckStatusColor = (status: string) => {
  switch (status) {
    case 'active': return 'bg-blue-500';
    case 'maintenance': return 'bg-orange-500';
    case 'returning': return 'bg-purple-500';
    default: return 'bg-gray-500';
  }
};

export const getTrashTypeColor = (type: string) => {
  switch (type) {
    case 'plastic': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'paper': return 'bg-amber-100 text-amber-800 border-amber-200';
    case 'glass': return 'bg-teal-100 text-teal-800 border-teal-200';
    case 'metal': return 'bg-gray-100 text-gray-800 border-gray-200';
    case 'organic': return 'bg-green-100 text-green-800 border-green-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};
