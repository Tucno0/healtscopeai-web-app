'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CalendarIcon, Mail, Phone, User, Calendar } from 'lucide-react';

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

interface PacienteModalProps {
  isOpen: boolean;
  onClose: () => void;
  paciente?: Paciente;
  mode: 'create' | 'edit';
  onSave: (paciente: Paciente) => void;
}

export function PacienteModal({
  isOpen,
  onClose,
  paciente,
  mode,
  onSave,
}: PacienteModalProps) {
  const [formData, setFormData] = useState<Paciente>({
    nombre: '',
    email: '',
    telefono: '',
    fechaNacimiento: '',
    estado: 'Activo',
    ultimaVisita: '',
    proximaCita: '',
  });

  useEffect(() => {
    if (paciente && mode === 'edit') {
      setFormData(paciente);
    } else {
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        fechaNacimiento: '',
        estado: 'Activo',
        ultimaVisita: '',
        proximaCita: '',
      });
    }
  }, [paciente, mode, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleChange = (field: keyof Paciente, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {mode === 'create' ? 'Nuevo Paciente' : 'Editar Paciente'}
          </DialogTitle>
          <DialogDescription>
            {mode === 'create'
              ? 'Complete la información del nuevo paciente.'
              : 'Modifique la información del paciente.'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre completo</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="nombre"
                  value={formData.nombre}
                  onChange={(e) => handleChange('nombre', e.target.value)}
                  className="pl-10"
                  placeholder="María González"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="pl-10"
                  placeholder="maria@email.com"
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="telefono">Teléfono</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="telefono"
                  value={formData.telefono}
                  onChange={(e) => handleChange('telefono', e.target.value)}
                  className="pl-10"
                  placeholder="+34 612 345 678"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="fechaNacimiento">Fecha de nacimiento</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="fechaNacimiento"
                  type="date"
                  value={formData.fechaNacimiento}
                  onChange={(e) =>
                    handleChange('fechaNacimiento', e.target.value)
                  }
                  className="pl-10"
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="estado">Estado</Label>
              <Select
                value={formData.estado}
                onValueChange={(value) => handleChange('estado', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Activo">Activo</SelectItem>
                  <SelectItem value="Inactivo">Inactivo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="ultimaVisita">Última visita</Label>
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="ultimaVisita"
                  type="date"
                  value={formData.ultimaVisita}
                  onChange={(e) => handleChange('ultimaVisita', e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="proximaCita">Próxima cita</Label>
            <div className="relative">
              <CalendarIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="proximaCita"
                type="date"
                value={formData.proximaCita || ''}
                onChange={(e) => handleChange('proximaCita', e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit">
              {mode === 'create' ? 'Crear Paciente' : 'Guardar Cambios'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
