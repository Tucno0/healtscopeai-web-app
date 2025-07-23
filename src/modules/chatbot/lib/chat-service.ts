// Servicio súper básico para enviar mensajes a n8n
import { config } from "@/lib/config";

export class ChatService {
  private static instance: ChatService;
  private webhookUrl: string;
  private userAgent: string;

  private constructor() {
    this.webhookUrl = config.n8n.webhookUrl;
    this.userAgent = config.n8n.userAgent;
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
          'User-Agent': this.userAgent,
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