'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Clock,
  CheckCircle,
  MessageSquare,
  Calendar,
} from 'lucide-react';

const activitiesData = [
  {
    id: 1,
    type: 'cita',
    title: 'Nueva cita programada',
    description: 'María González - Consulta General',
    time: 'Hace 5 minutos',
    status: 'confirmada',
    avatar: 'MG',
  },
  {
    id: 2,
    type: 'mensaje',
    title: 'Mensaje urgente recibido',
    description: 'Dr. García - Resultados de laboratorio',
    time: 'Hace 15 minutos',
    status: 'nuevo',
    avatar: 'DG',
  },
  {
    id: 3,
    type: 'paciente',
    title: 'Nuevo paciente registrado',
    description: 'Carlos Rodríguez - Datos completados',
    time: 'Hace 1 hora',
    status: 'completado',
    avatar: 'CR',
  },
  {
    id: 4,
    type: 'cita',
    title: 'Cita cancelada',
    description: 'Ana Martínez - Consulta Especializada',
    time: 'Hace 2 horas',
    status: 'cancelada',
    avatar: 'AM',
  },
  {
    id: 5,
    type: 'mensaje',
    title: 'Respuesta enviada',
    description: 'Sofia López - Consulta sobre tratamiento',
    time: 'Hace 3 horas',
    status: 'respondido',
    avatar: 'SL',
  },
];

export function RecentActivity() {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'cita':
        return <Calendar className="h-4 w-4" />;
      case 'mensaje':
        return <MessageSquare className="h-4 w-4" />;
      case 'paciente':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmada':
        return (
          <Badge className="bg-green-100 text-green-800">Confirmada</Badge>
        );
      case 'nuevo':
        return <Badge className="bg-blue-100 text-blue-800">Nuevo</Badge>;
      case 'completado':
        return (
          <Badge className="bg-green-100 text-green-800">Completado</Badge>
        );
      case 'cancelada':
        return <Badge className="bg-red-100 text-red-800">Cancelada</Badge>;
      case 'respondido':
        return <Badge className="bg-gray-100 text-gray-800">Respondido</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Actividad Reciente</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activitiesData.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={`/avatars/${activity.avatar.toLowerCase()}.jpg`}
                />
                <AvatarFallback>{activity.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center space-x-2">
                  {getActivityIcon(activity.type)}
                  <p className="text-sm font-medium">{activity.title}</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-muted-foreground">
                    {activity.time}
                  </span>
                  {getStatusBadge(activity.status)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
