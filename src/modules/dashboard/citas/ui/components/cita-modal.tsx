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
import { Textarea } from '@/components/ui/textarea';
import { Clock, User, Calendar } from 'lucide-react';

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

interface CitaModalProps {
  isOpen: boolean;
  onClose: () => void;
  cita?: Cita;
  mode: 'create' | 'edit';
  onSave: (cita: Cita) => void;
}

const tiposCita = [
  'Consulta General',
  'Revisión',
  'Consulta Especializada',
  'Seguimiento',
  'Urgencia',
  'Control',
];

const doctores = [
  'Dr. García',
  'Dr. López',
  'Dr. Fernández',
  'Dr. Martínez',
  'Dr. Rodríguez',
];

const duraciones = ['15 min', '30 min', '45 min', '60 min', '90 min'];

export function CitaModal({
  isOpen,
  onClose,
  cita,
  mode,
  onSave,
}: CitaModalProps) {
  const [formData, setFormData] = useState<Cita>({
    paciente: '',
    fecha: '',
    hora: '',
    tipo: '',
    estado: 'Pendiente',
    doctor: '',
    duracion: '30 min',
    notas: '',
  });

  useEffect(() => {
    if (cita && mode === 'edit') {
      setFormData(cita);
    } else {
      setFormData({
        paciente: '',
        fecha: '',
        hora: '',
        tipo: '',
        estado: 'Pendiente',
        doctor: '',
        duracion: '30 min',
        notas: '',
      });
    }
  }, [cita, mode, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleChange = (field: keyof Cita, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {mode === 'create' ? 'Nueva Cita' : 'Editar Cita'}
          </DialogTitle>
          <DialogDescription>
            {mode === 'create'
              ? 'Programe una nueva cita para el paciente.'
              : 'Modifique los detalles de la cita.'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="paciente">Paciente</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="paciente"
                  value={formData.paciente}
                  onChange={(e) => handleChange('paciente', e.target.value)}
                  className="pl-10"
                  placeholder="María González"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="doctor">Doctor</Label>
              <Select
                value={formData.doctor}
                onValueChange={(value) => handleChange('doctor', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar doctor" />
                </SelectTrigger>
                <SelectContent>
                  {doctores.map((doctor) => (
                    <SelectItem key={doctor} value={doctor}>
                      {doctor}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fecha">Fecha</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="fecha"
                  type="date"
                  value={formData.fecha}
                  onChange={(e) => handleChange('fecha', e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="hora">Hora</Label>
              <div className="relative">
                <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="hora"
                  type="time"
                  value={formData.hora}
                  onChange={(e) => handleChange('hora', e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="tipo">Tipo de consulta</Label>
              <Select
                value={formData.tipo}
                onValueChange={(value) => handleChange('tipo', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar tipo" />
                </SelectTrigger>
                <SelectContent>
                  {tiposCita.map((tipo) => (
                    <SelectItem key={tipo} value={tipo}>
                      {tipo}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="duracion">Duración</Label>
              <Select
                value={formData.duracion}
                onValueChange={(value) => handleChange('duracion', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar duración" />
                </SelectTrigger>
                <SelectContent>
                  {duraciones.map((duracion) => (
                    <SelectItem key={duracion} value={duracion}>
                      {duracion}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

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
                <SelectItem value="Pendiente">Pendiente</SelectItem>
                <SelectItem value="Confirmada">Confirmada</SelectItem>
                <SelectItem value="Cancelada">Cancelada</SelectItem>
                <SelectItem value="Completada">Completada</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notas">Notas adicionales</Label>
            <Textarea
              id="notas"
              value={formData.notas || ''}
              onChange={(e) => handleChange('notas', e.target.value)}
              placeholder="Información adicional sobre la cita..."
              rows={3}
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit">
              {mode === 'create' ? 'Programar Cita' : 'Guardar Cambios'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
