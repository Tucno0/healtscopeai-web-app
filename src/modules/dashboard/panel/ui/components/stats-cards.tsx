'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Calendar, MessageSquare, TrendingUp } from 'lucide-react';

const statsData = [
  {
    title: 'Pacientes Activos',
    value: '1,247',
    change: '+12.5%',
    changeType: 'positive',
    icon: Users,
    description: 'vs mes anterior',
  },
  {
    title: 'Citas Hoy',
    value: '23',
    change: '+8.2%',
    changeType: 'positive',
    icon: Calendar,
    description: '5 pendientes',
  },
  {
    title: 'Mensajes Nuevos',
    value: '18',
    change: '-3.1%',
    changeType: 'negative',
    icon: MessageSquare,
    description: '3 urgentes',
  },
  {
    title: 'Ingresos Mensuales',
    value: '$45,230',
    change: '+15.3%',
    changeType: 'positive',
    icon: TrendingUp,
    description: 'vs mes anterior',
  },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statsData.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              <span
                className={
                  stat.changeType === 'positive'
                    ? 'text-green-600'
                    : 'text-red-600'
                }
              >
                {stat.change}
              </span>{' '}
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
