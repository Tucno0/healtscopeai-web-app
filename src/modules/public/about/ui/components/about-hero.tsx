import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Bot, Sparkles, Target } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted to-muted/20 py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Innovación Tecnológica
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Las personas que hacen posible{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                LIRYAL
              </span>
            </h1>
            
            <div className="space-y-4">
              <p className="text-xl font-medium text-foreground">
                Detrás de cada avance en LIRYAL hay un equipo apasionado por la tecnología y la innovación.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestro grupo de profesionales reúne experiencia en automatización, inteligencia artificial, 
                análisis de datos y diseño web para crear soluciones que simplifican los procesos en organizaciones y clínicas.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
                Conoce Nuestro Equipo
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/40 transition-all duration-300">
                Nuestra Historia
              </Button>
            </div>
          </div>

          {/* Right Side - Human-Tech Connection Visual */}
          <div className="relative">
            <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                  {/* Human-Tech Connection Visual */}
                  <div className="relative z-10 text-center">
                    {/* Central Connection Point */}
                    <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-6 shadow-2xl animate-pulse">
                      <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Sparkles className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    
                    {/* Connection Lines */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.6" />
                          </linearGradient>
                        </defs>
                        {/* Human side */}
                        <circle cx="25" cy="50" r="8" fill="hsl(var(--primary-foreground))" fillOpacity="0.2" />
                        <line x1="25" y1="50" x2="50" y2="50" stroke="url(#connectionGradient)" strokeWidth="2" />
                        {/* Tech side */}
                        <circle cx="75" cy="50" r="8" fill="hsl(var(--secondary))" fillOpacity="0.3" />
                        <line x1="75" y1="50" x2="50" y2="50" stroke="url(#connectionGradient)" strokeWidth="2" />
                      </svg>
                    </div>
                    
                    {/* Labels */}
                    <div className="flex justify-between items-center mt-8">
                      <div className="flex flex-col items-center">
                        <Users className="w-6 h-6 text-primary mb-2" />
                        <span className="text-sm text-primary font-medium">Humanos</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Bot className="w-6 h-6 text-secondary mb-2" />
                        <span className="text-sm text-secondary font-medium">Tecnología</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-primary/30 rounded-full animate-pulse" />
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-secondary/40 rounded-full animate-pulse delay-1000" />
                  <div className="absolute top-1/2 left-8 w-1 h-1 bg-primary/50 rounded-full animate-pulse delay-500" />
                  <div className="absolute top-1/2 right-8 w-1 h-1 bg-secondary/50 rounded-full animate-pulse delay-1500" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
} 