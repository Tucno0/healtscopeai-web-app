import { TitlePage } from '@/components/dashboard/title-page';
import { AjustesTable } from '@/modules/dashboard/ajustes/ui/components/ajustes-table';

export const AjustesView = () => {
  return (
    <>
      <TitlePage
        title="Configuración del Sistema"
        description="Personaliza la configuración de tu aplicación"
      />
      <AjustesTable />
    </>
  );
};
