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
import { Settings, Shield, Bell, Palette, User } from 'lucide-react';

interface Ajuste {
  id?: number;
  categoria: string;
  configuracion: string;
  valor: string;
  descripcion: string;
  ultimaModificacion: string;
  modificadoPor: string;
}

interface AjusteModalProps {
  isOpen: boolean;
  onClose: () => void;
  ajuste?: Ajuste;
  mode: 'create' | 'edit';
  onSave: (ajuste: Ajuste) => void;
}

const categorias = [
  'Notificaciones',
  'Seguridad',
  'Apariencia',
  'Privacidad',
  'Sistema',
  'Redes',
];

const valores = ['Activado', 'Desactivado', 'Automático', 'Manual'];

export function AjusteModal({
  isOpen,
  onClose,
  ajuste,
  mode,
  onSave,
}: AjusteModalProps) {
  const [formData, setFormData] = useState<Ajuste>({
    categoria: '',
    configuracion: '',
    valor: 'Activado',
    descripcion: '',
    ultimaModificacion: '',
    modificadoPor: '',
  });

  useEffect(() => {
    if (ajuste && mode === 'edit') {
      setFormData(ajuste);
    } else {
      const now = new Date();
      setFormData({
        categoria: '',
        configuracion: '',
        valor: 'Activado',
        descripcion: '',
        ultimaModificacion: now.toISOString().split('T')[0],
        modificadoPor: 'Admin',
      });
    }
  }, [ajuste, mode, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleChange = (field: keyof Ajuste, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const getCategoriaIcon = (categoria: string) => {
    switch (categoria) {
      case 'Notificaciones':
        return <Bell className="h-4 w-4" />;
      case 'Seguridad':
        return <Shield className="h-4 w-4" />;
      case 'Apariencia':
        return <Palette className="h-4 w-4" />;
      case 'Privacidad':
        return <Shield className="h-4 w-4" />;
      default:
        return <Settings className="h-4 w-4" />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {mode === 'create' ? 'Nueva Configuración' : 'Editar Configuración'}
          </DialogTitle>
          <DialogDescription>
            {mode === 'create'
              ? 'Configure una nueva opción del sistema.'
              : 'Modifique la configuración existente.'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
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
                      <div className="flex items-center gap-2">
                        {getCategoriaIcon(categoria)}
                        {categoria}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="valor">Valor</Label>
              <Select
                value={formData.valor}
                onValueChange={(value) => handleChange('valor', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar valor" />
                </SelectTrigger>
                <SelectContent>
                  {valores.map((valor) => (
                    <SelectItem key={valor} value={valor}>
                      {valor}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="configuracion">Configuración</Label>
            <div className="relative">
              <Settings className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="configuracion"
                value={formData.configuracion}
                onChange={(e) => handleChange('configuracion', e.target.value)}
                className="pl-10"
                placeholder="Nombre de la configuración"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="descripcion">Descripción</Label>
            <Textarea
              id="descripcion"
              value={formData.descripcion}
              onChange={(e) => handleChange('descripcion', e.target.value)}
              placeholder="Descripción detallada de la configuración..."
              rows={3}
              required
            />
          </div>

          {mode === 'edit' && (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="ultimaModificacion">Última modificación</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="ultimaModificacion"
                    type="date"
                    value={formData.ultimaModificacion}
                    onChange={(e) =>
                      handleChange('ultimaModificacion', e.target.value)
                    }
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="modificadoPor">Modificado por</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="modificadoPor"
                    value={formData.modificadoPor}
                    onChange={(e) =>
                      handleChange('modificadoPor', e.target.value)
                    }
                    className="pl-10"
                    placeholder="Admin"
                  />
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit">
              {mode === 'create' ? 'Crear Configuración' : 'Guardar Cambios'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
