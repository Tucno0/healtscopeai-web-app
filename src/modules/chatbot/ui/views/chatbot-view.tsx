import { ChatInterface } from "../components/chat-interface";

export function ChatbotView() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-muted/20 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Chat con HealthScope AI
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pregunta sobre nuestros servicios de salud digital, precios, o cualquier consulta que tengas. 
              Nuestro asistente está aquí para ayudarte.
            </p>
          </div>

          {/* Chat Interface */}
          <div className="h-[600px] max-w-3xl mx-auto">
            <ChatInterface 
              title="HealthScope AI Assistant"
              className="h-full"
            />
          </div>

          {/* Info Section */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              ¿Necesitas ayuda más específica?{" "}
              <a href="/contacto" className="text-primary hover:underline">
                Contacta directamente con nuestro equipo
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 