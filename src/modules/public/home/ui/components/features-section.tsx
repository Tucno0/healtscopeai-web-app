import {
  Paintbrush,
  Rocket,
  Book,
  PlusCircle,
  Search,
  ChartLine,
  Users,
} from 'lucide-react';

const features = [
  {
    icon: <Search className="h-6 w-6" />,
    title: 'Diagnóstico Asistido por IA',
    desc: 'Aprovecha algoritmos avanzados de IA para diagnósticos precisos y oportunos, reduciendo errores y mejorando la atención al paciente.',
  },
  {
    icon: <ChartLine className="h-6 w-6" />,
    title: 'Análisis Predictivo',
    desc: 'Obtén insights accionables con análisis predictivos, permitiendo intervenciones proactivas y planes de tratamiento personalizados.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Atención Colaborativa',
    desc: 'Fomenta una colaboración fluida entre los equipos de atención médica, asegurando una atención coordinada y una comunicación mejorada.',
  },
];

export const FeaturesSection = () => {
  return (
    <section className="relative py-14">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="relative mx-auto max-w-2xl sm:text-center">
          <div className="relative z-10">
            <h3 className="font-geist mt-4 text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl">
              Características Clave
            </h3>
            <p className="font-geist mt-3 text-foreground/60">
              HEALTSCOPEAI ofrece un conjunto de potentes características
              diseñadas para transformar la prestación de servicios de salud.
            </p>
          </div>
          <div
            className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px]"
            style={{
              background:
                'linear-gradient(152.92deg, rgba(192, 15, 102, 0.2) 4.54%, rgba(192, 11, 109, 0.26) 34.2%, rgba(192, 15, 102, 0.1) 77.55%)',
            }}
          ></div>
        </div>
        <hr className="mx-auto mt-5 h-px w-1/2 bg-foreground/30" />
        <div className="relative mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="transform-gpu space-y-3 rounded-xl border bg-transparent p-4 [box-shadow:0_-20px_80px_-20px_#ff7aa42f_inset]"
              >
                <div className="w-fit transform-gpu rounded-full border p-4 text-primary [box-shadow:0_-20px_80px_-20px_#ff7aa43f_inset] dark:[box-shadow:0_-20px_80px_-20px_#ff7aa40f_inset]">
                  {item.icon}
                </div>
                <h4 className="font-geist text-lg font-bold tracking-tighter">
                  {item.title}
                </h4>
                <p className="text-gray-500">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
