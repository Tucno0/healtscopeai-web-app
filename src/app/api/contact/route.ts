import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    console.log("📤 Datos del formulario recibidos:", formData);

    // Validar campos requeridos
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    // Enviar a n8n webhook usando POST (como está configurado en n8n)
    const webhookUrl = "https://n8n.srv915337.hstgr.cloud/webhook-test/a328c3af-b4bf-40bb-b21c-2dff58e3f552";
    
    console.log("🔗 Enviando a n8n:", webhookUrl);

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'LIRYAL-ContactForm/1.0',
      },
      body: JSON.stringify(formData),
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
    console.log("✅ Formulario enviado exitosamente:", result);

    return NextResponse.json({
      success: true,
      message: "Formulario enviado exitosamente"
    });

  } catch (error) {
    console.error("❌ Error procesando formulario:", error);
    return NextResponse.json(
      { error: "Error al procesar el formulario" },
      { status: 500 }
    );
  }
} 