import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Smartphone, 
  Brain, 
  BarChart3, 
  Shield, 
  Settings,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Sistema de Citas",
    description: "Software simple para gestionar citas y pacientes de manera eficiente.",
    features: ["Calendario integrado", "Recordatorios automáticos", "Historial básico", "Reportes simples"],
    price: "Desde $99/mes",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-200"
  },
  {
    icon: Smartphone,
    title: "App Web Responsive",
    description: "Aplicación web que funciona en cualquier dispositivo para tu negocio.",
    features: ["Diseño adaptativo", "Panel de administración", "Notificaciones", "Soporte básico"],
    price: "$149/mes",
    color: "text-green-600",
    bgColor: "bg-green-100",
    borderColor: "border-green-200"
  },
  {
    icon: Brain,
    title: "Automatización Básica",
    description: "Herramientas para automatizar tareas repetitivas de tu día a día.",
    features: ["Respuestas automáticas", "Flujos de trabajo", "Integración simple", "Configuración fácil"],
    price: "$79/mes",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    borderColor: "border-purple-200"
  },
  {
    icon: BarChart3,
    title: "Analytics Simple",
    description: "Reportes básicos para entender mejor tu negocio y clientes.",
    features: ["Métricas clave", "Gráficos simples", "Exportación de datos", "Dashboard básico"],
    price: "$59/mes",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    borderColor: "border-orange-200"
  },
  {
    icon: Shield,
    title: "Seguridad Básica",
    description: "Protección esencial para los datos de tu empresa y clientes.",
    features: ["Backup automático", "Encriptación básica", "Acceso seguro", "Cumplimiento básico"],
    price: "$89/mes",
    color: "text-red-600",
    bgColor: "bg-red-100",
    borderColor: "border-red-200"
  },
  {
    icon: Settings,
    title: "Soporte Técnico",
    description: "Acompañamiento personalizado para implementar y mantener tus soluciones.",
    features: ["Configuración inicial", "Capacitación del equipo", "Soporte por chat", "Actualizaciones"],
    price: "$199/mes",
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
    borderColor: "border-indigo-200"
  }
];

export function ServicesGrid() {
  return (
    <section id="nuestros-servicios" className="py-24 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soluciones prácticas y accesibles diseñadas específicamente para 
            empresas pequeñas y medianas que quieren crecer.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm hover:bg-card hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full ${service.bgColor} ${service.borderColor} border-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-lg font-semibold text-primary mb-4">
                    {service.price}
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:shadow-lg transition-all duration-300">
                    Más Información
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Necesitas algo personalizado?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Si no encuentras exactamente lo que buscas, podemos crear una solución 
              a medida que se adapte a tus necesidades específicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
                Conversemos
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/40 transition-all duration-300">
                Solicitar Presupuesto
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 