import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: "🔍",
    title: "Diagnóstico Inteligente",
    description: "Algoritmos de IA que analizan síntomas y proporcionan diagnósticos preliminares con alta precisión."
  },
  {
    icon: "📊",
    title: "Monitoreo en Tiempo Real",
    description: "Seguimiento continuo de signos vitales y alertas automáticas para cambios significativos."
  },
  {
    icon: "👥",
    title: "Atención Personalizada",
    description: "Planes de tratamiento individualizados basados en el historial médico y preferencias del paciente."
  },
  {
    icon: "🔒",
    title: "Seguridad Avanzada",
    description: "Cumplimiento total con HIPAA y encriptación de nivel bancario para proteger datos médicos."
  },
  {
    icon: "📱",
    title: "Acceso Móvil",
    description: "Aplicación móvil intuitiva para pacientes y profesionales de la salud."
  },
  {
    icon: "📈",
    title: "Analytics Predictivos",
    description: "Análisis predictivo para identificar tendencias de salud y prevenir complicaciones."
  }
];

export function ProductFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Características Principales
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre las herramientas innovadoras que hacen de HealthScope AI 
            la solución líder en salud digital.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 