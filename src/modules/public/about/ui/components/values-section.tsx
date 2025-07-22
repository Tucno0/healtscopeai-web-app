import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  Lightbulb, 
  Shield, 
  Users, 
  Target,
  Zap
} from "lucide-react";

const values = [
  {
    title: "Innovación",
    description: "Buscamos constantemente nuevas formas de resolver problemas con tecnología de vanguardia.",
    icon: Lightbulb,
    color: "from-primary to-secondary"
  },
  {
    title: "Colaboración",
    description: "Creemos en el poder del trabajo en equipo y la sinergia entre humanos y tecnología.",
    icon: Users,
    color: "from-secondary to-accent"
  },
  {
    title: "Eficiencia",
    description: "Nos enfocamos en crear soluciones que optimicen procesos y ahorren tiempo valioso.",
    icon: Zap,
    color: "from-accent to-primary"
  },
  {
    title: "Confiabilidad",
    description: "Construimos sistemas robustos y seguros que las organizaciones pueden confiar.",
    icon: Shield,
    color: "from-primary to-accent"
  },
  {
    title: "Impacto",
    description: "Nos esforzamos por crear un impacto positivo en las organizaciones y sus usuarios.",
    icon: Target,
    color: "from-secondary to-primary"
  },
  {
    title: "Pasión",
    description: "Amamos lo que hacemos y nos apasiona ayudar a otros a alcanzar sus objetivos.",
    icon: Heart,
    color: "from-accent to-secondary"
  }
];

export function ValuesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Nuestros Valores y Principios
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estos son los pilares que guían nuestro trabajo y definen nuestra cultura empresarial. 
            Creemos que la tecnología debe servir a las personas, no al revés.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-muted/20">
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="mt-16 text-center">
          <Card className="border-0 bg-gradient-to-r from-foreground to-muted-foreground text-background">
            <CardContent className="p-12">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold mb-6">
                  Nuestra Visión
                </h3>
                <p className="text-xl text-background/90 leading-relaxed mb-8">
                  Ser líderes en la transformación digital, creando soluciones que empoderen a las organizaciones 
                  para alcanzar su máximo potencial a través de la automatización inteligente y la inteligencia artificial.
                </p>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-background/80 mb-2">100%</div>
                    <div className="text-background/70">Compromiso con la Excelencia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-background/80 mb-2">24/7</div>
                    <div className="text-background/70">Soporte Técnico</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-background/80 mb-2">∞</div>
                    <div className="text-background/70">Innovación Continua</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 