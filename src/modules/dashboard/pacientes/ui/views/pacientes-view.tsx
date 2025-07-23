import { TitlePage } from '@/components/dashboard/title-page';
import { PacientesTable } from '@/modules/dashboard/pacientes/ui/components/pacientes-table';

export const PacientesView = () => {
  return (
    <>
      <TitlePage
        title="Gestión de Pacientes"
        description="Administra la información de tus pacientes de manera eficiente"
      />
      <PacientesTable />
    </>
  );
};
