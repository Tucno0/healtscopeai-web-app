import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Code, 
  Database, 
  Palette, 
  Users, 
  Target,
  Award,
  Zap
} from "lucide-react";

const members = [
  {
    name: 'Dr. Ana Martínez',
    role: 'CEO & Fundadora',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'Carlos Rodríguez',
    role: 'CTO',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'María González',
    role: 'Lead Developer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'Luis Fernández',
    role: 'Data Scientist',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },
];

// const engineeringTeam = [
//   {
//     name: 'Sofía Ramírez',
//     role: 'Frontend Developer',
//     avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
//   },
//   {
//     name: 'Diego Morales',
//     role: 'Backend Developer',
//     avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
//   },
//   {
//     name: 'Valeria Torres',
//     role: 'Full Stack Developer',
//     avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
//   },
//   {
//     name: 'Roberto Silva',
//     role: 'DevOps Engineer',
//     avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face',
//   },
// ];

// const marketingTeam = [
//   {
//     name: 'Carmen Vega',
//     role: 'Marketing Manager',
//     avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
//   },
//   {
//     name: 'Alejandro Ruiz',
//     role: 'Content Strategist',
//     avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
//   },
//   {
//     name: 'Patricia López',
//     role: 'Digital Marketing',
//     avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',
//   },
//   {
//     name: 'Fernando Castro',
//     role: 'SEO Specialist',
//     avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
//   },
// ];

export function TeamSection() {
  return (
    <section className="py-12 md:py-32 bg-gradient-to-br from-background to-muted/20">
      <div className="mx-auto max-w-6xl px-8 lg:px-0">
        <div className="text-center mb-16">
          <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl text-foreground">
            Nuestro equipo
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conoce a las personas apasionadas que hacen posible LIRYAL. 
            Nuestro equipo combina experiencia técnica con innovación para crear 
            soluciones que transforman negocios.
          </p>
        </div>

        <div>
          {/* <h3 className="mb-6 text-lg font-medium text-foreground">Liderazgo</h3> */}
          <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
            {members.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5 mx-auto">
                  <img 
                    className="aspect-square rounded-full object-cover" 
                    src={member.avatar} 
                    alt={member.name} 
                    height="80" 
                    width="80" 
                    loading="lazy" 
                  />
                </div>
                <span className="mt-2 block text-sm font-medium text-foreground">{member.name}</span>
                <span className="text-muted-foreground block text-xs">{member.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="mt-12">
          <h3 className="mb-6 text-lg font-medium text-foreground">Ingeniería</h3>
          <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
            {engineeringTeam.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5 mx-auto">
                  <img 
                    className="aspect-square rounded-full object-cover" 
                    src={member.avatar} 
                    alt={member.name} 
                    height="80" 
                    width="80" 
                    loading="lazy" 
                  />
                </div>
                <span className="mt-2 block text-sm font-medium text-foreground">{member.name}</span>
                <span className="text-muted-foreground block text-xs">{member.role}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="mb-6 text-lg font-medium text-foreground">Marketing</h3>
          <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
            {marketingTeam.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5 mx-auto">
                  <img 
                    className="aspect-square rounded-full object-cover" 
                    src={member.avatar} 
                    alt={member.name} 
                    height="80" 
                    width="80" 
                    loading="lazy" 
                  />
                </div>
                <span className="mt-2 block text-sm font-medium text-foreground">{member.name}</span>
                <span className="text-muted-foreground block text-xs">{member.role}</span>
              </div>
            ))}
          </div>
        </div> */}

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Nuestra Misión
            </h3>
            <p className="text-lg text-primary-foreground/90 leading-relaxed max-w-4xl mx-auto mb-8">
              Ayudar a las personas a resolver tareas repetitivas de manera más rápida y eficiente 
              gracias a la automatización con inteligencia artificial. Creemos en el poder de la 
              tecnología para mejorar la calidad de vida y optimizar los procesos empresariales.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground/80 mb-2">12+</div>
                <div className="text-primary-foreground/70">Profesionales</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground/80 mb-2">50+</div>
                <div className="text-primary-foreground/70">Proyectos Completados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground/80 mb-2">100%</div>
                <div className="text-primary-foreground/70">Satisfacción del Cliente</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 