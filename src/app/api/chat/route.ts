import { NextRequest, NextResponse } from "next/server";
import { ChatService } from "@/modules/chatbot/lib/chat-service";

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Mensaje requerido" },
        { status: 400 }
      );
    }

    console.log("💬 Mensaje recibido:", message);

    // Enviar mensaje a n8n
    const chatService = ChatService.getInstance();
    const response = await chatService.sendMessage(message);

    console.log("✅ Respuesta enviada:", response);

    return NextResponse.json({
      response: response
    });

  } catch (error) {
    console.error("❌ Error en el chat:", error);
    return NextResponse.json(
      { error: "Error al enviar mensaje a n8n" },
      { status: 500 }
    );
  }
} 