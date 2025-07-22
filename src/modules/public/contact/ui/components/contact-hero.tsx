"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    name: 'Soporte Técnico',
    role: '24/7 Disponible',
    icon: Phone,
    description: 'Asistencia técnica especializada'
  },
  {
    name: 'Consultas Comerciales',
    role: 'Lun - Vie 9AM-6PM',
    icon: Mail,
    description: 'Información sobre nuestros servicios'
  },
  {
    name: 'Oficina Principal',
    role: 'Lima, Perú',
    icon: MapPin,
    description: 'Visítanos en nuestras instalaciones'
  },
  {
    name: 'Horario de Atención',
    role: 'Flexible',
    icon: Clock,
    description: 'Adaptamos a tu horario'
  }
];

export function ContactHero() {
  return (
    <section className="py-12 md:py-32 bg-gradient-to-br from-background via-muted to-muted/20">
      <div className="mx-auto max-w-6xl px-8 lg:px-0">
        <div className="text-center mb-16">
          <h1 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl text-foreground">
            Estamos aquí para ayudarte
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ¿Tienes preguntas sobre nuestros servicios? ¿Necesitas soporte técnico? 
            Nuestro equipo está listo para ayudarte con cualquier consulta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Info */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-foreground">Canales de Contacto</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="mb-6 text-lg font-medium text-foreground">Atención al Cliente</h3>
                <div className="grid grid-cols-1 gap-4 border-t py-6 md:grid-cols-2">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="bg-background size-16 rounded-full border p-0.5 shadow shadow-zinc-950/5 flex items-center justify-center">
                        <contact.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <span className="block text-sm font-medium text-foreground">{contact.name}</span>
                        <span className="text-muted-foreground block text-xs">{contact.role}</span>
                        <span className="text-muted-foreground block text-xs mt-1">{contact.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => {
                    document.getElementById('contacto-formulario')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                >
                  Enviar Mensaje
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
                  onClick={() => {
                    document.getElementById('contacto-formulario')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                >
                  Llamar Ahora
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form Preview */}
          <div className="relative">
            <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-6 shadow-2xl">
                      <Mail className="w-12 h-12 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Formulario de Contacto</h3>
                    <p className="text-muted-foreground">Completa el formulario y te responderemos en menos de 24 horas</p>
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