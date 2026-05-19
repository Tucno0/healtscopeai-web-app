import { TitlePage } from '@/components/dashboard/title-page';
import { MensajesTable } from '@/modules/dashboard/mensajes/ui/components/mensajes-table';

export const MensajesView = () => {
  return (
    <>
      <TitlePage
        title="Centro de Mensajes"
        description="Gestiona la comunicación con tus pacientes y equipo"
      />
      <MensajesTable />
    </>
  );
};
