'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const data = [
  {
    name: 'Ene',
    ingresos: 32000,
    gastos: 18000,
  },
  {
    name: 'Feb',
    ingresos: 35000,
    gastos: 19000,
  },
  {
    name: 'Mar',
    ingresos: 38000,
    gastos: 20000,
  },
  {
    name: 'Abr',
    ingresos: 42000,
    gastos: 22000,
  },
  {
    name: 'May',
    ingresos: 45000,
    gastos: 24000,
  },
  {
    name: 'Jun',
    ingresos: 48000,
    gastos: 26000,
  },
  {
    name: 'Jul',
    ingresos: 52000,
    gastos: 28000,
  },
  {
    name: 'Ago',
    ingresos: 55000,
    gastos: 30000,
  },
  {
    name: 'Sep',
    ingresos: 58000,
    gastos: 32000,
  },
  {
    name: 'Oct',
    ingresos: 62000,
    gastos: 34000,
  },
  {
    name: 'Nov',
    ingresos: 65000,
    gastos: 36000,
  },
  {
    name: 'Dic',
    ingresos: 68000,
    gastos: 38000,
  },
];

export function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Análisis Financiero</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
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
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
              labelFormatter={(label) => `${label} 2024`}
            />
            <Area
              type="monotone"
              dataKey="ingresos"
              stroke="#10b981"
              fill="#10b981"
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="gastos"
              stroke="#ef4444"
              fill="#ef4444"
              fillOpacity={0.3}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
        <div className="flex justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-muted-foreground">Ingresos</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-sm text-muted-foreground">Gastos</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
