'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const data = [
  {
    name: 'Ene',
    total: 145,
  },
  {
    name: 'Feb',
    total: 167,
  },
  {
    name: 'Mar',
    total: 189,
  },
  {
    name: 'Abr',
    total: 203,
  },
  {
    name: 'May',
    total: 218,
  },
  {
    name: 'Jun',
    total: 234,
  },
  {
    name: 'Jul',
    total: 247,
  },
  {
    name: 'Ago',
    total: 256,
  },
  {
    name: 'Sep',
    total: 268,
  },
  {
    name: 'Oct',
    total: 275,
  },
  {
    name: 'Nov',
    total: 283,
  },
  {
    name: 'Dic',
    total: 291,
  },
];

export function PatientsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Crecimiento de Pacientes</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
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
            <Bar
              dataKey="total"
              fill="currentColor"
              radius={[4, 4, 0, 0]}
              className="fill-primary"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
