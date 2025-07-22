import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

// Inicializar OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    // Crear el contexto del sistema
    const systemPrompt = `Eres un asistente de HealthScope AI, una empresa especializada en soluciones de salud digital con inteligencia artificial. 

Tu función es ayudar a los usuarios con información sobre:
- Nuestros servicios de telemedicina
- Monitoreo continuo de pacientes
- IA diagnóstica
- Analytics de salud
- Seguridad digital
- Integración de sistemas

Información de la empresa:
- Ubicación: Lima, Perú
- Teléfono: +51 1 234-5678
- Email: contacto@healtscopeai.com
- Servicios desde $59/mes hasta $199/mes

Sé amigable, profesional y proporciona información útil sobre nuestros servicios. Si no tienes información específica sobre algo, sugiere contactar directamente con nuestro equipo.

Responde siempre en español.`;

    // Crear el historial de mensajes
    const messages = [
      { role: "system", content: systemPrompt },
      ...history,
      { role: "user", content: message },
    ];

    // Llamar a OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
      temperature: 0.7,
      max_tokens: 500,
    });

    // Retornar la respuesta
    return NextResponse.json({
      response: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error en el chat:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
} 