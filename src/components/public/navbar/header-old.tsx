import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const HeaderOld = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                S
              </span>
            </div>
            <span className="font-bold text-xl text-foreground">Scribbly</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/servicios"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="/producto"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Producto
            </Link>
            <Link
              href="/conocenos"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Conocenos
            </Link>
            <Link
              href="/contacto"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline" size="sm">
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
