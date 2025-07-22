"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Bot, 
  Clock, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  FileText,
  Settings,
  BarChart3
} from "lucide-react";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
              <Bot className="w-4 h-4 mr-2" />
              Soluciones Digitales
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Transformamos tu{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Negocio Digital
              </span>
            </h1>
            
            <div className="space-y-4">
              <p className="text-xl font-medium text-foreground">
                ¿Buscas modernizar tu empresa o clínica con tecnología accesible y efectiva?
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Somos una startup innovadora que desarrolla soluciones digitales personalizadas 
                para empresas y clínicas. Nuestras herramientas automatizan procesos básicos, 
                mejoran la atención al cliente y optimizan tus operaciones diarias. 
                Tecnología simple pero poderosa para hacer crecer tu negocio.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  document.getElementById('nuestros-servicios')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Conoce Nuestros Servicios
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/40 transition-all duration-300">
                Solicitar Información
              </Button>
            </div>
          </div>

          {/* Right Side - Interactive Interface */}
          <div className="relative">
            <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                   {/* Video Background */}
                   <video 
                     className="absolute inset-0 w-full h-full object-cover "
                     autoPlay 
                     loop 
                     muted 
                     playsInline
                   >
                     <source src="/videos/video1.mp4" type="video/mp4" />
                     {/* Fallback background if video doesn't load */}
                   </video>
                   
                   {/* Overlay for better text readability */}
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"></div>
                  {/* Central Interface */}
                  <div className="relative z-10 text-center">
                     
                    
                    {/* Connected Icons with Better Spacing */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Left Side Icons */}
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-8">
                        
                      </div>

                      
                    </div>
                    
                      
                  </div>
                </div>
              </CardContent>
            </Card>
            
             
          </div>
        </div>
      </div>
    </section>
  );
} 