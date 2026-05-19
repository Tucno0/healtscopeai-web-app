import { TitlePage } from '@/components/dashboard/title-page';
import { CitasTable } from '@/modules/dashboard/citas/ui/components/citas-table';

export const CitasView = () => {
  return (
    <>
      <TitlePage
        title="Gestión de Citas"
        description="Programa y administra las citas de tus pacientes"
      />
      <CitasTable />
    </>
  );
};
