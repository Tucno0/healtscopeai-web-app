'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Trash2, AlertTriangle, Settings } from 'lucide-react';

interface DeleteAjusteModalProps {
  isOpen: boolean;
  onClose: () => void;
  ajuste: { id: number; configuracion: string; categoria: string } | null;
  onConfirm: () => void;
}

export function DeleteAjusteModal({
  isOpen,
  onClose,
  ajuste,
  onConfirm,
}: DeleteAjusteModalProps) {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            Confirmar eliminación
          </AlertDialogTitle>
          <AlertDialogDescription>
            ¿Está seguro de que desea eliminar la configuración{' '}
            <span className="font-semibold">&quot;{ajuste?.configuracion}&quot;</span>?
            <br />
            <br />
            <div className="flex items-center gap-2 text-sm">
              <Settings className="h-4 w-4" />
              <span>Categoría: {ajuste?.categoria}</span>
            </div>
            <br />
            Esta acción eliminará la configuración del sistema y podría afectar
            el funcionamiento de la aplicación. Esta acción no se puede
            deshacer.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Mantener Configuración</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            className="bg-red-600 hover:bg-red-700 focus:ring-red-600"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Eliminar Configuración
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
