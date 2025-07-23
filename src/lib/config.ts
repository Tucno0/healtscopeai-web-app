// Configuración centralizada de variables de entorno
export const config = {
  whatsapp: {
    phoneNumber: process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER || "51999123456",
    defaultMessage: process.env.NEXT_PUBLIC_WHATSAPP_DEFAULT_MESSAGE || "Hola! Me gustaría obtener más información sobre sus servicios.",
    tooltipText: process.env.NEXT_PUBLIC_WHATSAPP_TOOLTIP_TEXT || "¡Chatea con nosotros!",
  },
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000",
  },
  n8n: {
    webhookUrl: process.env.N8N_WEBHOOK_URL || "https://n8n.srv915337.hstgr.cloud/webhook-test/a328c3af-b4bf-40bb-b21c-2dff58e3f552",
    userAgent: process.env.N8N_USER_AGENT || "HealthScopeAI-Chatbot/1.0",
  },
} as const; 