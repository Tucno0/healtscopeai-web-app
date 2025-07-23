import { PanelView } from '@/modules/dashboard/panel/ui/views/panel-view';

// Configuración para evitar pre-renderizado
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const PanelPage = () => {
  return <PanelView />;
};

export default PanelPage;
