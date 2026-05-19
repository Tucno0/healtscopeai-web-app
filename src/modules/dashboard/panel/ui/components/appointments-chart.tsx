'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const data = [
  {
    name: 'Lun',
    confirmadas: 12,
    pendientes: 8,
    canceladas: 2,
  },
  {
    name: 'Mar',
    confirmadas: 15,
    pendientes: 6,
    canceladas: 1,
  },
  {
    name: 'Mié',
    confirmadas: 18,
    pendientes: 9,
    canceladas: 3,
  },
  {
    name: 'Jue',
    confirmadas: 14,
    pendientes: 7,
    canceladas: 2,
  },
  {
    name: 'Vie',
    confirmadas: 16,
    pendientes: 5,
    canceladas: 1,
  },
  {
    name: 'Sáb',
    confirmadas: 10,
    pendientes: 4,
    canceladas: 1,
  },
  {
    name: 'Dom',
    confirmadas: 8,
    pendientes: 3,
    canceladas: 0,
  },
];

export function AppointmentsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Estado de Citas por Semana</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="confirmadas"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="pendientes"
              stroke="#f59e0b"
              strokeWidth={2}
              dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="canceladas"
              stroke="#ef4444"
              strokeWidth={2}
              dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="flex justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-muted-foreground">Confirmadas</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-sm text-muted-foreground">Pendientes</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-sm text-muted-foreground">Canceladas</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
