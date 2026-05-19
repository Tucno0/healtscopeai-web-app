import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Linkedin,
  Youtube,
  Heart,
  Shield,
  Clock,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Logo Component for Light and Dark Modes
const LIRYALLogo = () => (
  <div className="relative">
    {/* Dark mode logo */}
    <Image
      src="/icon-black.png"
      alt="LIRYAL Logo"
      width={32}
      height={32}
      className="h-8 w-8 dark:block hidden"
    />
    {/* Light mode logo */}
    <Image
      src="/icon-white.png"
      alt="LIRYAL Logo"
      width={32}
      height={32}
      className="h-8 w-8 block dark:hidden"
    />
  </div>
);

const data = {
      facebookLink: 'https://facebook.com/liryal',
    instaLink: 'https://instagram.com/liryal',
    twitterLink: 'https://twitter.com/liryal',
    linkedinLink: 'https://linkedin.com/company/liryal',
    youtubeLink: 'https://youtube.com/@liryal',
  services: {
    telemedicina: '/servicios#telemedicina',
    monitoreo: '/servicios#monitoreo',
    ia: '/servicios#ia-diagnostica',
    analytics: '/servicios#analytics',
    seguridad: '/servicios#seguridad',
    integracion: '/servicios#integracion',
  },
  about: {
    historia: '/conocenos#historia',
    equipo: '/conocenos#equipo',
    mision: '/conocenos#mision',
    valores: '/conocenos#valores',
  },
  help: {
    faqs: '/faqs',
    soporte: '/soporte',
    chat: '/chat',
    emergencias: '/emergencias',
  },
  contact: {
    email: 'contacto@liryal.com',
    phone: '+51 1 234-5678',
    address: 'Centro Médico Digital, Lima, Perú',
    emergencias: '+51 1 911-0000',
  },
  company: {
            name: 'LIRYAL',
    description:
      'Líder en soluciones de salud digital con inteligencia artificial. Transformamos la atención médica con tecnología innovadora y atención personalizada.',
  },
  features: [
    {
      icon: Shield,
      title: 'Seguridad HIPAA',
      description: 'Cumplimiento total con estándares de seguridad médica'
    },
    {
      icon: Clock,
      title: 'Atención 24/7',
      description: 'Soporte médico disponible en cualquier momento'
    },
    {
      icon: Users,
      title: 'Equipo Certificado',
      description: 'Profesionales médicos especializados'
    },
    {
      icon: Heart,
      title: 'Cuidado Personalizado',
      description: 'Atención individualizada para cada paciente'
    }
  ]
};

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: data.facebookLink },
  { icon: Instagram, label: 'Instagram', href: data.instaLink },
  { icon: Twitter, label: 'Twitter', href: data.twitterLink },
  { icon: Linkedin, label: 'LinkedIn', href: data.linkedinLink },
  { icon: Youtube, label: 'YouTube', href: data.youtubeLink },
];

const aboutLinks = [
  { text: 'Nuestra Historia', href: data.about.historia },
  { text: 'Conoce Nuestro Equipo', href: data.about.equipo },
  { text: 'Misión y Visión', href: data.about.mision },
  { text: 'Valores Corporativos', href: data.about.valores },
];

const serviceLinks = [
  { text: 'Telemedicina', href: data.services.telemedicina },
  { text: 'Monitoreo Continuo', href: data.services.monitoreo },
  { text: 'IA Diagnóstica', href: data.services.ia },
  { text: 'Analytics de Salud', href: data.services.analytics },
  { text: 'Seguridad Digital', href: data.services.seguridad },
  { text: 'Integración de Sistemas', href: data.services.integracion },
];

const helpfulLinks = [
  { text: 'Preguntas Frecuentes', href: data.help.faqs },
  { text: 'Soporte Técnico', href: data.help.soporte },
  { text: 'Chat en Vivo', href: data.help.chat, hasIndicator: true },
  { text: 'Emergencias', href: data.help.emergencias },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email, href: `mailto:${data.contact.email}` },
  { icon: Phone, text: data.contact.phone, href: `tel:${data.contact.phone}` },
  { icon: MapPin, text: data.contact.address, isAddress: true },
  { icon: Phone, text: `Emergencias: ${data.contact.emergencias}`, href: `tel:${data.contact.emergencias}`, isEmergency: true },
];

export const Footer = () => {
  return (
    <footer className="mt-16 w-full place-self-end rounded-t-xl bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-muted/20 border-t border-border shadow-lg">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {data.features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 text-primary mb-4 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center gap-3 sm:justify-start">
              <div className="relative">
                <LIRYALLogo />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl opacity-50"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  LIRYAL
                </span>
                
              </div>
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-muted-foreground sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-110 p-2 rounded-full hover:bg-primary/10"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left group">
              <p className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Sobre Nosotros</p>
              <ul className="mt-8 space-y-4 text-sm">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      className="text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block"
                      href={href}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left group">
              <p className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Nuestros Servicios</p>
              <ul className="mt-8 space-y-4 text-sm">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      className="text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block"
                      href={href}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left group">
              <p className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Enlaces Útiles</p>
              <ul className="mt-8 space-y-4 text-sm">
                {helpfulLinks.map(({ text, href, hasIndicator }) => (
                  <li key={text}>
                    <Link
                      href={href}
                      className={`${
                        hasIndicator
                          ? 'group flex justify-center gap-1.5 sm:justify-start'
                          : 'text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block'
                      }`}
                    >
                      <span className="text-muted-foreground transition-all duration-300 hover:text-primary">
                        {text}
                      </span>
                      {hasIndicator && (
                        <span className="relative flex size-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                          <span className="relative inline-flex size-2 rounded-full bg-primary" />
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left group">
              <p className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Contacto</p>
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text, href, isAddress, isEmergency }) => (
                  <li key={text}>
                    <Link
                      className={`flex items-center justify-center gap-1.5 sm:justify-start transition-all duration-300 ${
                        isEmergency ? 'text-destructive hover:text-destructive/80 hover:scale-105' : 'text-muted-foreground hover:text-primary hover:translate-x-1'
                      }`}
                      href={href || '#'}
                    >
                      <Icon className={`size-5 shrink-0 shadow-sm transition-all duration-300 ${
                        isEmergency ? 'text-destructive' : 'text-primary'
                      }`} />
                      {isAddress ? (
                        <address className="-mt-0.5 flex-1 not-italic text-muted-foreground transition-all duration-300 hover:text-primary">
                          {text}
                        </address>
                      ) : (
                        <span className="flex-1 text-muted-foreground transition-all duration-300 hover:text-primary">
                          {text}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-muted-foreground">
              <span className="block sm:inline">
                Todos los derechos reservados. LIRYAL está comprometido con tu salud y privacidad.
              </span>
            </p>

            <p className="text-muted-foreground mt-4 text-sm transition-all duration-300 sm:order-first sm:mt-0 hover:text-primary">
              &copy; 2025 {data.company.name} - Transformando la Salud Digital
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
