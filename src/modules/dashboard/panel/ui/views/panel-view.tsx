import { TitlePage } from '@/components/dashboard/title-page';
import { StatsCards } from '@/modules/dashboard/panel/ui/components/stats-cards';
import { RecentActivity } from '@/modules/dashboard/panel/ui/components/recent-activity';
import { UpcomingAppointments } from '@/modules/dashboard/panel/ui/components/upcoming-appointments';
import { PatientsChart } from '@/modules/dashboard/panel/ui/components/patients-chart';
import { AppointmentsChart } from '@/modules/dashboard/panel/ui/components/appointments-chart';
import { RevenueChart } from '@/modules/dashboard/panel/ui/components/revenue-chart';

export const PanelView = () => {
  return (
    <>
      <TitlePage
        title="Hola! Jhon Doe, bienvenido de nuevo"
        description="Aquí puedes ver un resumen de las actividades más recientes"
      />

      {/* Tarjetas de estadísticas */}
      <div className="mb-6">
        <StatsCards />
      </div>

      {/* Gráficos principales */}
      <div className="grid gap-6 md:grid-cols-2 mb-6">
        <PatientsChart />
        <AppointmentsChart />
      </div>

      {/* Gráfico de ingresos */}
      <div className="mb-6">
        <RevenueChart />
      </div>

      {/* Actividad reciente y próximas citas */}
      <div className="grid gap-6 md:grid-cols-2">
        <RecentActivity />
        <UpcomingAppointments />
      </div>
    </>
  );
};
