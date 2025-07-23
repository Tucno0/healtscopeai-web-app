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
import { Trash2, AlertTriangle, Calendar } from 'lucide-react';

interface DeleteCitaModalProps {
  isOpen: boolean;
  onClose: () => void;
  cita: { id: number; paciente: string; fecha: string; hora: string } | null;
  onConfirm: () => void;
}

export function DeleteCitaModal({
  isOpen,
  onClose,
  cita,
  onConfirm,
}: DeleteCitaModalProps) {
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
            Confirmar cancelación
          </AlertDialogTitle>
          <AlertDialogDescription>
            ¿Está seguro de que desea cancelar la cita de{' '}
            <span className="font-semibold">{cita?.paciente}</span>?
            <br />
            <br />
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4" />
              <span>
                {cita?.fecha} a las {cita?.hora}
              </span>
            </div>
            <br />
            Esta acción cancelará la cita y se enviará una notificación al
            paciente.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Mantener Cita</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            className="bg-red-600 hover:bg-red-700 focus:ring-red-600"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Cancelar Cita
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
