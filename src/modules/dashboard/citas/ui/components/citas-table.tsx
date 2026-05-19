'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Plus, Edit, Trash2, Eye } from 'lucide-react';
import { CitaModal } from './cita-modal';
import { DeleteCitaModal } from './delete-cita-modal';

interface Cita {
  id?: number;
  paciente: string;
  fecha: string;
  hora: string;
  tipo: string;
  estado: string;
  doctor: string;
  duracion: string;
  notas?: string;
}

// Datos de ejemplo para citas
const citasData: Cita[] = [
  {
    id: 1,
    paciente: 'María González',
    fecha: '2024-02-20',
    hora: '09:00',
    tipo: 'Consulta General',
    estado: 'Confirmada',
    doctor: 'Dr. García',
    duracion: '30 min',
    notas: 'Revisión rutinaria',
  },
  {
    id: 2,
    paciente: 'Carlos Rodríguez',
    fecha: '2024-02-15',
    hora: '10:30',
    tipo: 'Revisión',
    estado: 'Pendiente',
    doctor: 'Dr. López',
    duracion: '45 min',
    notas: 'Seguimiento tratamiento',
  },
  {
    id: 3,
    paciente: 'Ana Martínez',
    fecha: '2024-02-18',
    hora: '14:00',
    tipo: 'Consulta Especializada',
    estado: 'Cancelada',
    doctor: 'Dr. Fernández',
    duracion: '60 min',
    notas: 'Consulta dermatológica',
  },
  {
    id: 4,
    paciente: 'Luis Fernández',
    fecha: '2024-02-25',
    hora: '11:00',
    tipo: 'Seguimiento',
    estado: 'Confirmada',
    doctor: 'Dr. Martínez',
    duracion: '30 min',
    notas: 'Control post-tratamiento',
  },
  {
    id: 5,
    paciente: 'Sofia López',
    fecha: '2024-02-22',
    hora: '16:30',
    tipo: 'Consulta General',
    estado: 'Pendiente',
    doctor: 'Dr. García',
    duracion: '30 min',
    notas: 'Primera consulta',
  },
];

export function CitasTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [citas, setCitas] = useState<Cita[]>(citasData);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedCita, setSelectedCita] = useState<Cita | undefined>(undefined);

  const filteredCitas = citas.filter(
    (cita) =>
      cita.paciente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cita.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cita.tipo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case 'Confirmada':
        return (
          <Badge className="bg-green-100 text-green-800">Confirmada</Badge>
        );
      case 'Pendiente':
        return (
          <Badge className="bg-yellow-100 text-yellow-800">Pendiente</Badge>
        );
      case 'Cancelada':
        return <Badge className="bg-red-100 text-red-800">Cancelada</Badge>;
      case 'Completada':
        return <Badge className="bg-blue-100 text-blue-800">Completada</Badge>;
      default:
        return <Badge variant="secondary">{estado}</Badge>;
    }
  };

  const handleCreateCita = (nuevaCita: Omit<Cita, 'id'>) => {
    const citaConId: Cita = {
      ...nuevaCita,
      id: Math.max(...citas.map((c) => c.id || 0)) + 1,
    };
    setCitas([...citas, citaConId]);
  };

  const handleEditCita = (citaEditada: Cita) => {
    setCitas(citas.map((c) => (c.id === citaEditada.id ? citaEditada : c)));
  };

  const handleDeleteCita = () => {
    if (selectedCita) {
      setCitas(citas.filter((c) => c.id !== selectedCita.id));
    }
  };

  const openEditModal = (cita: Cita) => {
    setSelectedCita(cita);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (cita: Cita) => {
    setSelectedCita(cita);
    setIsDeleteModalOpen(true);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Lista de Citas</CardTitle>
            <Button onClick={() => setIsCreateModalOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Nueva Cita
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar citas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Paciente</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Hora</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Duración</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCitas.map((cita) => (
                <TableRow key={cita.id}>
                  <TableCell className="font-medium">{cita.paciente}</TableCell>
                  <TableCell>{cita.fecha}</TableCell>
                  <TableCell>{cita.hora}</TableCell>
                  <TableCell>{cita.tipo}</TableCell>
                  <TableCell>{cita.doctor}</TableCell>
                  <TableCell>{getEstadoBadge(cita.estado)}</TableCell>
                  <TableCell>{cita.duracion}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openEditModal(cita)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openDeleteModal(cita)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Modal de creación */}
      <CitaModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        mode="create"
        onSave={handleCreateCita}
      />

      {/* Modal de edición */}
      <CitaModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        cita={selectedCita}
        mode="edit"
        onSave={handleEditCita}
      />

      {/* Modal de eliminación */}
      <DeleteCitaModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        cita={selectedCita ? { 
          id: selectedCita.id || 0, 
          paciente: selectedCita.paciente, 
          fecha: selectedCita.fecha, 
          hora: selectedCita.hora 
        } : null}
        onConfirm={handleDeleteCita}
      />
    </>
  );
}
