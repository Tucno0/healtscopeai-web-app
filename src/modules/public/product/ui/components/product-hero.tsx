import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ProductHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-violet-100 py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
              Nuestro Producto
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              HealthScope{" "}
              <span className="text-purple-600">AI</span>
            </h1>
            <p className="text-lg text-gray-600">
              La plataforma de inteligencia artificial más avanzada para el sector salud. 
              Monitoreo en tiempo real, diagnósticos precisos y atención personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Solicitar Demo
              </Button>
              <Button size="lg" variant="outline">
                Ver Características
              </Button>
            </div>
          </div>
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-purple-400 to-violet-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl mb-4">🤖</div>
                    <p className="text-xl font-semibold">AI Healthcare</p>
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