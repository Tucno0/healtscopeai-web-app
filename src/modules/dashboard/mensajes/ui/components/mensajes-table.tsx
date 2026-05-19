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
import { MensajeModal } from './mensaje-modal';
import { DeleteMensajeModal } from './delete-mensaje-modal';

interface Mensaje {
  id?: number;
  remitente: string;
  asunto: string;
  contenido: string;
  fecha: string;
  hora: string;
  estado: string;
  prioridad: string;
  categoria: string;
}

// Datos de ejemplo para mensajes
const mensajesData: Mensaje[] = [
  {
    id: 1,
    remitente: 'Dr. García',
    asunto: 'Resultados de laboratorio',
    contenido:
      'Los resultados del análisis están listos. Por favor, revise el archivo adjunto.',
    fecha: '2024-02-15',
    hora: '09:30',
    estado: 'No leído',
    prioridad: 'Alta',
    categoria: 'Resultados',
  },
  {
    id: 2,
    remitente: 'María González',
    asunto: 'Consulta sobre tratamiento',
    contenido:
      'Tengo algunas dudas sobre la medicación recetada. ¿Podría aclarar las dosis?',
    fecha: '2024-02-14',
    hora: '14:15',
    estado: 'Leído',
    prioridad: 'Media',
    categoria: 'Consulta',
  },
  {
    id: 3,
    remitente: 'Dr. López',
    asunto: 'Confirmación de cita',
    contenido:
      'Su cita para mañana a las 10:00 ha sido confirmada. Llegue 10 minutos antes.',
    fecha: '2024-02-13',
    hora: '16:45',
    estado: 'Respondido',
    prioridad: 'Baja',
    categoria: 'Citas',
  },
  {
    id: 4,
    remitente: 'Sistema',
    asunto: 'Recordatorio de medicación',
    contenido: 'Recordatorio: Tome su medicación a las 8:00 AM y 8:00 PM.',
    fecha: '2024-02-12',
    hora: '08:00',
    estado: 'Archivado',
    prioridad: 'Media',
    categoria: 'General',
  },
  {
    id: 5,
    remitente: 'Dr. Fernández',
    asunto: 'Urgencia médica',
    contenido:
      'Necesito contactarle urgentemente sobre su último análisis. Llame al consultorio.',
    fecha: '2024-02-11',
    hora: '11:20',
    estado: 'No leído',
    prioridad: 'Urgente',
    categoria: 'Urgencia',
  },
];

export function MensajesTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [mensajes, setMensajes] = useState<Mensaje[]>(mensajesData);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedMensaje, setSelectedMensaje] = useState<Mensaje | undefined>(undefined);

  const filteredMensajes = mensajes.filter(
    (mensaje) =>
      mensaje.remitente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mensaje.asunto.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mensaje.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case 'No leído':
        return <Badge className="bg-blue-100 text-blue-800">No leído</Badge>;
      case 'Leído':
        return <Badge className="bg-gray-100 text-gray-800">Leído</Badge>;
      case 'Respondido':
        return (
          <Badge className="bg-green-100 text-green-800">Respondido</Badge>
        );
      case 'Archivado':
        return (
          <Badge className="bg-yellow-100 text-yellow-800">Archivado</Badge>
        );
      default:
        return <Badge variant="secondary">{estado}</Badge>;
    }
  };

  const getPrioridadBadge = (prioridad: string) => {
    switch (prioridad) {
      case 'Urgente':
        return <Badge className="bg-red-100 text-red-800">Urgente</Badge>;
      case 'Alta':
        return <Badge className="bg-orange-100 text-orange-800">Alta</Badge>;
      case 'Media':
        return <Badge className="bg-yellow-100 text-yellow-800">Media</Badge>;
      case 'Baja':
        return <Badge className="bg-green-100 text-green-800">Baja</Badge>;
      default:
        return <Badge variant="secondary">{prioridad}</Badge>;
    }
  };

  const handleCreateMensaje = (nuevoMensaje: Omit<Mensaje, 'id'>) => {
    const mensajeConId: Mensaje = {
      ...nuevoMensaje,
      id: Math.max(...mensajes.map((m) => m.id || 0)) + 1,
    };
    setMensajes([...mensajes, mensajeConId]);
  };

  const handleEditMensaje = (mensajeEditado: Mensaje) => {
    setMensajes(
      mensajes.map((m) => (m.id === mensajeEditado.id ? mensajeEditado : m))
    );
  };

  const handleDeleteMensaje = () => {
    if (selectedMensaje) {
      setMensajes(mensajes.filter((m) => m.id !== selectedMensaje.id));
    }
  };

  const openEditModal = (mensaje: Mensaje) => {
    setSelectedMensaje(mensaje);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (mensaje: Mensaje) => {
    setSelectedMensaje(mensaje);
    setIsDeleteModalOpen(true);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Lista de Mensajes</CardTitle>
            <Button onClick={() => setIsCreateModalOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Nuevo Mensaje
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar mensajes..."
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
                <TableHead>Remitente</TableHead>
                <TableHead>Asunto</TableHead>
                <TableHead>Categoría</TableHead>
                <TableHead>Prioridad</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMensajes.map((mensaje) => (
                <TableRow key={mensaje.id}>
                  <TableCell className="font-medium">
                    {mensaje.remitente}
                  </TableCell>
                  <TableCell className="max-w-[200px] truncate">
                    {mensaje.asunto}
                  </TableCell>
                  <TableCell>{mensaje.categoria}</TableCell>
                  <TableCell>{getPrioridadBadge(mensaje.prioridad)}</TableCell>
                  <TableCell>{mensaje.fecha}</TableCell>
                  <TableCell>{getEstadoBadge(mensaje.estado)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openEditModal(mensaje)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openDeleteModal(mensaje)}
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
      <MensajeModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        mode="create"
        onSave={handleCreateMensaje}
      />

      {/* Modal de edición */}
      <MensajeModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        mensaje={selectedMensaje}
        mode="edit"
        onSave={handleEditMensaje}
      />

      {/* Modal de eliminación */}
      <DeleteMensajeModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        mensaje={selectedMensaje ? { 
          id: selectedMensaje.id || 0, 
          asunto: selectedMensaje.asunto, 
          remitente: selectedMensaje.remitente 
        } : null}
        onConfirm={handleDeleteMensaje}
      />
    </>
  );
}
