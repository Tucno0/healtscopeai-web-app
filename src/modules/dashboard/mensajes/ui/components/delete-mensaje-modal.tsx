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
import { Trash2, AlertTriangle, MessageSquare } from 'lucide-react';

interface DeleteMensajeModalProps {
  isOpen: boolean;
  onClose: () => void;
  mensaje: { id: number; asunto: string; remitente: string } | null;
  onConfirm: () => void;
}

export function DeleteMensajeModal({
  isOpen,
  onClose,
  mensaje,
  onConfirm,
}: DeleteMensajeModalProps) {
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
            ¿Está seguro de que desea eliminar el mensaje{' '}
            <span className="font-semibold">&quot;{mensaje?.asunto}&quot;</span>?
            <br />
            <br />
            <div className="flex items-center gap-2 text-sm">
              <MessageSquare className="h-4 w-4" />
              <span>De: {mensaje?.remitente}</span>
            </div>
            <br />
            Esta acción no se puede deshacer. El mensaje será eliminado
            permanentemente.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Mantener Mensaje</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            className="bg-red-600 hover:bg-red-700 focus:ring-red-600"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Eliminar Mensaje
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
