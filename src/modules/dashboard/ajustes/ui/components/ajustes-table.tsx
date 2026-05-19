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
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  Settings,
  Bell,
  Shield,
  Palette,
} from 'lucide-react';
import { AjusteModal } from './ajuste-modal';
import { DeleteAjusteModal } from './delete-ajuste-modal';

interface Ajuste {
  id?: number;
  categoria: string;
  configuracion: string;
  valor: string;
  descripcion: string;
  ultimaModificacion: string;
  modificadoPor: string;
}

// Datos de ejemplo para ajustes
const ajustesData: Ajuste[] = [
  {
    id: 1,
    categoria: 'Notificaciones',
    configuracion: 'Notificaciones por email',
    valor: 'Activado',
    descripcion: 'Recibir notificaciones por correo electrónico',
    ultimaModificacion: '2024-02-15',
    modificadoPor: 'Admin',
  },
  {
    id: 2,
    categoria: 'Seguridad',
    configuracion: 'Autenticación de dos factores',
    valor: 'Activado',
    descripcion: 'Requerir autenticación de dos factores para el acceso',
    ultimaModificacion: '2024-02-10',
    modificadoPor: 'Admin',
  },
  {
    id: 3,
    categoria: 'Apariencia',
    configuracion: 'Tema oscuro',
    valor: 'Desactivado',
    descripcion: 'Usar tema oscuro en la interfaz',
    ultimaModificacion: '2024-02-08',
    modificadoPor: 'Usuario',
  },
  {
    id: 4,
    categoria: 'Privacidad',
    configuracion: 'Compartir datos anónimos',
    valor: 'Activado',
    descripcion: 'Compartir datos anónimos para mejorar el servicio',
    ultimaModificacion: '2024-02-05',
    modificadoPor: 'Admin',
  },
  {
    id: 5,
    categoria: 'Sistema',
    configuracion: 'Backup automático',
    valor: 'Automático',
    descripcion: 'Realizar copias de seguridad automáticas',
    ultimaModificacion: '2024-02-01',
    modificadoPor: 'Sistema',
  },
];

export function AjustesTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [ajustes, setAjustes] = useState<Ajuste[]>(ajustesData);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedAjuste, setSelectedAjuste] = useState<Ajuste | undefined>(undefined);

  const filteredAjustes = ajustes.filter(
    (ajuste) =>
      ajuste.configuracion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ajuste.categoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ajuste.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getValorBadge = (valor: string) => {
    switch (valor) {
      case 'Activado':
        return <Badge className="bg-green-100 text-green-800">Activado</Badge>;
      case 'Desactivado':
        return <Badge className="bg-red-100 text-red-800">Desactivado</Badge>;
      case 'Automático':
        return <Badge className="bg-blue-100 text-blue-800">Automático</Badge>;
      case 'Manual':
        return <Badge className="bg-yellow-100 text-yellow-800">Manual</Badge>;
      default:
        return <Badge variant="secondary">{valor}</Badge>;
    }
  };

  const getCategoriaIcon = (categoria: string) => {
    switch (categoria) {
      case 'Notificaciones':
        return <Bell className="h-4 w-4" />;
      case 'Seguridad':
        return <Shield className="h-4 w-4" />;
      case 'Apariencia':
        return <Palette className="h-4 w-4" />;
      default:
        return <Settings className="h-4 w-4" />;
    }
  };

  const handleCreateAjuste = (nuevoAjuste: Omit<Ajuste, 'id'>) => {
    const ajusteConId: Ajuste = {
      ...nuevoAjuste,
      id: Math.max(...ajustes.map((a) => a.id || 0)) + 1,
    };
    setAjustes([...ajustes, ajusteConId]);
  };

  const handleEditAjuste = (ajusteEditado: Ajuste) => {
    setAjustes(
      ajustes.map((a) => (a.id === ajusteEditado.id ? ajusteEditado : a))
    );
  };

  const handleDeleteAjuste = () => {
    if (selectedAjuste) {
      setAjustes(ajustes.filter((a) => a.id !== selectedAjuste.id));
    }
  };

  const openEditModal = (ajuste: Ajuste) => {
    setSelectedAjuste(ajuste);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (ajuste: Ajuste) => {
    setSelectedAjuste(ajuste);
    setIsDeleteModalOpen(true);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Configuraciones del Sistema</CardTitle>
            <Button onClick={() => setIsCreateModalOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Nueva Configuración
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar configuraciones..."
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
                <TableHead>Categoría</TableHead>
                <TableHead>Configuración</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Descripción</TableHead>
                <TableHead>Última Modificación</TableHead>
                <TableHead>Modificado Por</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAjustes.map((ajuste) => (
                <TableRow key={ajuste.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getCategoriaIcon(ajuste.categoria)}
                      {ajuste.categoria}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">
                    {ajuste.configuracion}
                  </TableCell>
                  <TableCell>{getValorBadge(ajuste.valor)}</TableCell>
                  <TableCell className="max-w-[200px] truncate">
                    {ajuste.descripcion}
                  </TableCell>
                  <TableCell>{ajuste.ultimaModificacion}</TableCell>
                  <TableCell>{ajuste.modificadoPor}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openEditModal(ajuste)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openDeleteModal(ajuste)}
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
      <AjusteModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        mode="create"
        onSave={handleCreateAjuste}
      />

      {/* Modal de edición */}
      <AjusteModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        ajuste={selectedAjuste}
        mode="edit"
        onSave={handleEditAjuste}
      />

      {/* Modal de eliminación */}
      <DeleteAjusteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        ajuste={selectedAjuste ? { 
          id: selectedAjuste.id || 0, 
          configuracion: selectedAjuste.configuracion, 
          categoria: selectedAjuste.categoria 
        } : null}
        onConfirm={handleDeleteAjuste}
      />
    </>
  );
}
