import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json();

    // TODO: Implementar búsqueda vectorial con Upstash Vector
    // Por ahora, retornamos una respuesta básica
    
    const mockResults = [
      {
        id: "1",
        content: "HealthScope AI ofrece servicios de telemedicina desde $99/mes",
        metadata: {
          source: "servicios",
          title: "Telemedicina",
          url: "/servicios#telemedicina"
        },
        score: 0.95
      },
      {
        id: "2", 
        content: "Nuestros servicios incluyen monitoreo continuo de pacientes con IA",
        metadata: {
          source: "servicios",
          title: "Monitoreo IA",
          url: "/servicios#monitoreo"
        },
        score: 0.87
      }
    ];

    return NextResponse.json({
      results: mockResults,
      query,
      context: "Información sobre servicios de HealthScope AI"
    });
  } catch (error) {
    console.error("Error en RAG:", error);
    return NextResponse.json(
      { error: "Error en la búsqueda RAG" },
      { status: 500 }
    );
  }
} 