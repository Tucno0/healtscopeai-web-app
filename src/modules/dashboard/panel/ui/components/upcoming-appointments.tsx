'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Clock, User } from 'lucide-react';

const appointmentsData = [
  {
    id: 1,
    patient: 'María González',
    time: '09:00',
    date: 'Hoy',
    type: 'Consulta General',
    doctor: 'Dr. García',
    status: 'confirmada',
    avatar: 'MG',
  },
  {
    id: 2,
    patient: 'Carlos Rodríguez',
    time: '10:30',
    date: 'Hoy',
    type: 'Revisión',
    doctor: 'Dr. López',
    status: 'pendiente',
    avatar: 'CR',
  },
  {
    id: 3,
    patient: 'Ana Martínez',
    time: '14:00',
    date: 'Mañana',
    type: 'Consulta Especializada',
    doctor: 'Dr. Fernández',
    status: 'confirmada',
    avatar: 'AM',
  },
  {
    id: 4,
    patient: 'Luis Fernández',
    time: '11:00',
    date: 'Mañana',
    type: 'Seguimiento',
    doctor: 'Dr. Martínez',
    status: 'confirmada',
    avatar: 'LF',
  },
  {
    id: 5,
    patient: 'Sofia López',
    time: '16:30',
    date: 'Mañana',
    type: 'Consulta General',
    doctor: 'Dr. García',
    status: 'pendiente',
    avatar: 'SL',
  },
];

export function UpcomingAppointments() {
  const getStatusBadge = (status: string) => {
    return status === 'confirmada' ? (
      <Badge className="bg-green-100 text-green-800">Confirmada</Badge>
    ) : (
      <Badge className="bg-yellow-100 text-yellow-800">Pendiente</Badge>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Próximas Citas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {appointmentsData.map((appointment) => (
            <div key={appointment.id} className="flex items-center space-x-4">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={`/avatars/${appointment.avatar.toLowerCase()}.jpg`}
                />
                <AvatarFallback>{appointment.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{appointment.patient}</p>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      {appointment.time} - {appointment.date}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {appointment.type}
                </p>
                <div className="flex items-center space-x-2">
                  <User className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    {appointment.doctor}
                  </span>
                  {getStatusBadge(appointment.status)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
