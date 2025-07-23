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
import { User, MessageSquare } from 'lucide-react';

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

interface MensajeModalProps {
  isOpen: boolean;
  onClose: () => void;
  mensaje?: Mensaje;
  mode: 'create' | 'edit';
  onSave: (mensaje: Mensaje) => void;
}

const categorias = [
  'Consulta',
  'Resultados',
  'Citas',
  'Urgencia',
  'Interno',
  'General',
];

const prioridades = ['Baja', 'Media', 'Alta', 'Urgente'];

export function MensajeModal({
  isOpen,
  onClose,
  mensaje,
  mode,
  onSave,
}: MensajeModalProps) {
  const [formData, setFormData] = useState<Mensaje>({
    remitente: '',
    asunto: '',
    contenido: '',
    fecha: '',
    hora: '',
    estado: 'No leído',
    prioridad: 'Media',
    categoria: '',
  });

  useEffect(() => {
    if (mensaje && mode === 'edit') {
      setFormData(mensaje);
    } else {
      const now = new Date();
      setFormData({
        remitente: '',
        asunto: '',
        contenido: '',
        fecha: now.toISOString().split('T')[0],
        hora: now.toTimeString().slice(0, 5),
        estado: 'No leído',
        prioridad: 'Media',
        categoria: '',
      });
    }
  }, [mensaje, mode, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleChange = (field: keyof Mensaje, value: string) => {
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
            {mode === 'create' ? 'Nuevo Mensaje' : 'Editar Mensaje'}
          </DialogTitle>
          <DialogDescription>
            {mode === 'create'
              ? 'Compose un nuevo mensaje.'
              : 'Modifique el contenido del mensaje.'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="remitente">Remitente</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="remitente"
                  value={formData.remitente}
                  onChange={(e) => handleChange('remitente', e.target.value)}
                  className="pl-10"
                  placeholder="Dr. García"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="categoria">Categoría</Label>
              <Select
                value={formData.categoria}
                onValueChange={(value) => handleChange('categoria', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar categoría" />
                </SelectTrigger>
                <SelectContent>
                  {categorias.map((categoria) => (
                    <SelectItem key={categoria} value={categoria}>
                      {categoria}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="asunto">Asunto</Label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="asunto"
                value={formData.asunto}
                onChange={(e) => handleChange('asunto', e.target.value)}
                className="pl-10"
                placeholder="Asunto del mensaje"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="prioridad">Prioridad</Label>
              <Select
                value={formData.prioridad}
                onValueChange={(value) => handleChange('prioridad', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar prioridad" />
                </SelectTrigger>
                <SelectContent>
                  {prioridades.map((prioridad) => (
                    <SelectItem key={prioridad} value={prioridad}>
                      {prioridad}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
                  <SelectItem value="No leído">No leído</SelectItem>
                  <SelectItem value="Leído">Leído</SelectItem>
                  <SelectItem value="Respondido">Respondido</SelectItem>
                  <SelectItem value="Archivado">Archivado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contenido">Contenido</Label>
            <Textarea
              id="contenido"
              value={formData.contenido}
              onChange={(e) => handleChange('contenido', e.target.value)}
              placeholder="Escriba el contenido del mensaje..."
              rows={6}
              required
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit">
              {mode === 'create' ? 'Enviar Mensaje' : 'Guardar Cambios'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
