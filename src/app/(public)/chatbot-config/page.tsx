"use client";

import { N8NConfigComponent } from "@/modules/chatbot/ui/components/n8n-config";

export default function ChatbotConfigPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Configuración del Chatbot</h1>
          <p className="text-muted-foreground mt-2">
            Configura las integraciones y comportamiento del chatbot
          </p>
        </div>
        
        <N8NConfigComponent />
        
        <div className="text-sm text-muted-foreground bg-muted p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Instrucciones para configurar n8n:</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>En n8n, crea un nuevo workflow</li>
            <li>Agrega un nodo &quot;Webhook&quot; como trigger</li>
            <li>Configura el webhook para recibir datos POST</li>
            <li>Agrega tu lógica de procesamiento de mensajes</li>
            <li>Asegúrate de que el workflow responda con: <code>{`{ "response": "tu respuesta aquí" }`}</code></li>
            <li>Activa el workflow y copia la URL del webhook</li>
            <li>Pega la URL arriba y prueba la conexión</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
