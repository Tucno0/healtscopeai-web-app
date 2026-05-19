import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Clock, 
  User, 
  TrendingUp, 
  Users,
  CheckCircle,
  Zap,
  Shield,
  BarChart3
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Ahorro de Tiempo",
    description: "Automatizamos tareas repetitivas para que puedas enfocarte en lo que realmente importa para tu negocio.",
    color: "text-green-600",
    bgColor: "bg-green-100",
    borderColor: "border-green-200"
  },
  {
    icon: User,
    title: "Mejor Atención al Cliente",
    description: "Herramientas que mejoran la comunicación y el seguimiento con tus clientes de manera eficiente.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20"
  },
  {
    icon: TrendingUp,
    title: "Crecimiento Sostenible",
    description: "Soluciones escalables que crecen junto con tu empresa, sin grandes inversiones iniciales.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20"
  },
  {
    icon: CheckCircle,
    title: "Procesos Optimizados",
    description: "Organizamos y simplificamos tus operaciones diarias para mayor eficiencia y menos errores.",
    color: "text-muted-foreground",
    bgColor: "bg-muted/20",
    borderColor: "border-muted/30"
  }
];

export function ServicesList() {
  return (
    <section id="servicios-section" className="py-24 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        {/* Benefits Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Como startup, entendemos los desafíos de las empresas pequeñas y medianas. 
            Ofrecemos soluciones prácticas y accesibles que realmente funcionan.
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm hover:bg-card">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${benefit.bgColor} ${benefit.borderColor} border-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Nuestro Enfoque
            </h3>
            <p className="text-muted-foreground">
              Trabajamos de manera cercana y personalizada con cada cliente
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Implementación Rápida</h4>
              <p className="text-sm text-muted-foreground">Soluciones que puedes usar desde el primer día</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Soporte Personalizado</h4>
              <p className="text-sm text-muted-foreground">Acompañamiento directo durante todo el proceso</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-accent-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Resultados Medibles</h4>
              <p className="text-sm text-muted-foreground">Seguimiento claro del impacto en tu negocio</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Listo para dar el siguiente paso?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Conversemos sobre cómo podemos ayudar a tu empresa a crecer 
              con tecnología simple y efectiva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                Agenda una Consulta Gratuita
              </button>
              <button className="px-8 py-3 border border-primary/30 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300">
                Ver Nuestros Proyectos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 