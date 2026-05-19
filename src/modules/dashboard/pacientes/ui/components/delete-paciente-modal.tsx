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
import { Trash2, AlertTriangle } from 'lucide-react';

interface DeletePacienteModalProps {
  isOpen: boolean;
  onClose: () => void;
  paciente: { id: number; nombre: string } | null;
  onConfirm: () => void;
}

export function DeletePacienteModal({
  isOpen,
  onClose,
  paciente,
  onConfirm,
}: DeletePacienteModalProps) {
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
            ¿Está seguro de que desea eliminar al paciente{' '}
            <span className="font-semibold">{paciente?.nombre}</span>?
            <br />
            <br />
            Esta acción no se puede deshacer. Se eliminarán todos los datos
            asociados a este paciente, incluyendo citas, historial médico y
            mensajes.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            className="bg-red-600 hover:bg-red-700 focus:ring-red-600"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Eliminar Paciente
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
