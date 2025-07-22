// Servicio súper básico para enviar mensajes a n8n

export class ChatService {
  private static instance: ChatService;
  private webhookUrl: string;

  private constructor() {
    this.webhookUrl = "https://n8n.srv915337.hstgr.cloud/webhook-test/a328c3af-b4bf-40bb-b21c-2dff58e3f552";
  }

  public static getInstance(): ChatService {
    if (!ChatService.instance) {
      ChatService.instance = new ChatService();
    }
    return ChatService.instance;
  }

  async sendMessage(message: string): Promise<string> {
    try {
      console.log("📤 Enviando mensaje a n8n:", message);
      
      // Construir URL con el mensaje como parámetro
      const url = new URL(this.webhookUrl);
      url.searchParams.set('message', message);
      
      console.log("🔗 URL completa:", url.toString());
      
      // Hacer petición GET
      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'User-Agent': 'HealthScopeAI-Chatbot/1.0',
        },
      });
      
      console.log("📥 Respuesta de n8n:", {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok
      });
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      const result = await response.json();
      console.log("📋 Datos recibidos:", result);
      
      // Devolver la respuesta de n8n
      return result.response || result.message || "No se recibió respuesta de n8n";
      
    } catch (error) {
      console.error("❌ Error enviando mensaje a n8n:", error);
      throw new Error("Error al enviar mensaje a n8n");
    }
  }
} 