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
import { PacienteModal } from './paciente-modal';
import { DeletePacienteModal } from './delete-paciente-modal';

interface Paciente {
  id?: number;
  nombre: string;
  email: string;
  telefono: string;
  fechaNacimiento: string;
  estado: string;
  ultimaVisita: string;
  proximaCita: string | null;
}

// Datos de ejemplo para pacientes
const pacientesData: Paciente[] = [
  {
    id: 1,
    nombre: 'María González',
    email: 'maria.gonzalez@email.com',
    telefono: '+34 612 345 678',
    fechaNacimiento: '1985-03-15',
    estado: 'Activo',
    ultimaVisita: '2024-01-15',
    proximaCita: '2024-02-20',
  },
  {
    id: 2,
    nombre: 'Carlos Rodríguez',
    email: 'carlos.rodriguez@email.com',
    telefono: '+34 623 456 789',
    fechaNacimiento: '1990-07-22',
    estado: 'Activo',
    ultimaVisita: '2024-01-10',
    proximaCita: '2024-02-15',
  },
  {
    id: 3,
    nombre: 'Ana Martínez',
    email: 'ana.martinez@email.com',
    telefono: '+34 634 567 890',
    fechaNacimiento: '1978-11-08',
    estado: 'Inactivo',
    ultimaVisita: '2023-12-05',
    proximaCita: null,
  },
  {
    id: 4,
    nombre: 'Luis Fernández',
    email: 'luis.fernandez@email.com',
    telefono: '+34 645 678 901',
    fechaNacimiento: '1992-05-12',
    estado: 'Activo',
    ultimaVisita: '2024-01-20',
    proximaCita: '2024-02-25',
  },
  {
    id: 5,
    nombre: 'Sofia López',
    email: 'sofia.lopez@email.com',
    telefono: '+34 656 789 012',
    fechaNacimiento: '1988-09-30',
    estado: 'Activo',
    ultimaVisita: '2024-01-18',
    proximaCita: '2024-02-22',
  },
];

export function PacientesTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pacientes, setPacientes] = useState<Paciente[]>(pacientesData);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedPaciente, setSelectedPaciente] = useState<Paciente | undefined>(undefined);

  const filteredPacientes = pacientes.filter(
    (paciente) =>
      paciente.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paciente.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getEstadoBadge = (estado: string) => {
    return estado === 'Activo' ? (
      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
        Activo
      </Badge>
    ) : (
      <Badge variant="secondary">Inactivo</Badge>
    );
  };

  const handleCreatePaciente = (nuevoPaciente: Omit<Paciente, 'id'>) => {
    const pacienteConId: Paciente = {
      ...nuevoPaciente,
      id: Math.max(...pacientes.map((p) => p.id || 0)) + 1,
    };
    setPacientes([...pacientes, pacienteConId]);
  };

  const handleEditPaciente = (pacienteEditado: Paciente) => {
    setPacientes(
      pacientes.map((p) => (p.id === pacienteEditado.id ? pacienteEditado : p))
    );
  };

  const handleDeletePaciente = () => {
    if (selectedPaciente) {
      setPacientes(pacientes.filter((p) => p.id !== selectedPaciente.id));
    }
  };

  const openEditModal = (paciente: Paciente) => {
    setSelectedPaciente(paciente);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (paciente: Paciente) => {
    setSelectedPaciente(paciente);
    setIsDeleteModalOpen(true);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Lista de Pacientes</CardTitle>
            <Button onClick={() => setIsCreateModalOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Nuevo Paciente
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar pacientes..."
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
                <TableHead>Nombre</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Teléfono</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Última Visita</TableHead>
                <TableHead>Próxima Cita</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPacientes.map((paciente) => (
                <TableRow key={paciente.id}>
                  <TableCell className="font-medium">
                    {paciente.nombre}
                  </TableCell>
                  <TableCell>{paciente.email}</TableCell>
                  <TableCell>{paciente.telefono}</TableCell>
                  <TableCell>{getEstadoBadge(paciente.estado)}</TableCell>
                  <TableCell>{paciente.ultimaVisita}</TableCell>
                  <TableCell>
                    {paciente.proximaCita || 'Sin programar'}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openEditModal(paciente)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openDeleteModal(paciente)}
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
      <PacienteModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        mode="create"
        onSave={handleCreatePaciente}
      />

      {/* Modal de edición */}
      <PacienteModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        paciente={selectedPaciente}
        mode="edit"
        onSave={handleEditPaciente}
      />

      {/* Modal de eliminación */}
      <DeletePacienteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        paciente={selectedPaciente ? { 
          id: selectedPaciente.id || 0, 
          nombre: selectedPaciente.nombre 
        } : null}
        onConfirm={handleDeletePaciente}
      />
    </>
  );
}
