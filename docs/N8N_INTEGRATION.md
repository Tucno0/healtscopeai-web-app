# Integración Chatbot con n8n

Esta guía te explica cómo conectar tu chatbot web con n8n para que las respuestas sean procesadas por tu workflow de n8n en lugar de OpenAI.

## 🔧 Configuración Rápida

### 1. Configurar el Workflow en n8n

Crea un workflow en n8n con la siguiente estructura:

```
Webhook Trigger → Tu Lógica de Procesamiento → Response
```

#### Webhook Trigger
- **Método HTTP**: POST
- **Path**: `/webhook/chatbot` (o el path que prefieras)
- **Response Mode**: Responding to Webhook

#### Formato de Datos Esperados

Tu webhook recibirá:
```json
{
  "message": "Mensaje del usuario",
  "history": [
    {"role": "user", "content": "mensaje anterior"},
    {"role": "assistant", "content": "respuesta anterior"}
  ],
  "sessionId": "web-1234567890-abc123",
  "timestamp": "2025-01-21T10:30:00.000Z",
  "source": "web-chat"
}
```

#### Formato de Respuesta Requerido

Tu workflow debe responder con:
```json
{
  "response": "La respuesta que se mostrará al usuario",
  "sources": ["opcional: fuentes de información"],
  "confidence": 0.95
}
```

### 2. Ejemplo de Workflow en n8n

1. **Webhook Node**:
   - HTTP Request Method: POST
   - Response: Immediately

2. **Function Node** (opcional para procesamiento):
```javascript
// Procesar el mensaje recibido
const message = $json.message;
const history = $json.history;
const sessionId = $json.sessionId;

// Tu lógica aquí
// Puedes conectar con OpenAI, Claude, o tu propia IA

return {
  message: message,
  processedHistory: history,
  sessionId: sessionId
};
```

3. **HTTP Request Node** (para llamar a tu IA):
   - Method: POST
   - URL: Tu endpoint de IA
   - Body: Los datos procesados

4. **Function Node** (para formatear respuesta):
```javascript
// Formatear la respuesta final
const aiResponse = $json.response; // Respuesta de tu IA

return {
  response: aiResponse,
  sources: [],
  confidence: 0.9
};
```

### 3. Configurar la Aplicación Web

#### Opción A: Usar Variables de Entorno (Configuración Global)

Añade a tu `.env.local`:
```env
CHAT_PROVIDER=n8n
N8N_WEBHOOK_URL=https://tu-n8n-instance.com/webhook/chatbot
N8N_API_KEY=tu_api_key_opcional
```

#### Opción B: Usar la Interfaz de Configuración (Recomendado)

1. Ve a `/chatbot-config` en tu aplicación
2. Activa la integración con n8n
3. Ingresa la URL de tu webhook
4. Prueba la conexión
5. Envía un mensaje de prueba

## 🚀 Casos de Uso

### 1. Migrar desde WhatsApp
Si ya tienes un workflow funcionando con WhatsApp, puedes reutilizarlo:

1. **Mantén tu lógica actual**: El procesamiento de mensajes puede ser el mismo
2. **Agrega el webhook**: Simplemente agrega un webhook trigger al inicio
3. **Adapta el formato**: Asegúrate de responder en el formato JSON correcto

### 2. Workflow Híbrido
Puedes combinar múltiples fuentes de respuestas:

```
Webhook → Determinar Tipo → OpenAI | Base de Conocimiento | API Externa
```

### 3. Con Base de Datos
Guarda el historial de conversaciones:

```
Webhook → Guardar Mensaje → Procesar → Guardar Respuesta → Responder
```

## 🔄 Flujo de Datos

```
Usuario Web → Chat Widget → API Next.js → n8n Webhook → Tu Lógica → Respuesta → Usuario
```

## 🛠️ Desarrollo y Testing

### Probar el Webhook Localmente

Si tienes n8n corriendo localmente:
```bash
# n8n en localhost:5678
N8N_WEBHOOK_URL=http://localhost:5678/webhook/test-chatbot
```

### Debugar Problemas

1. **Verificar logs en n8n**: Revisa las ejecuciones del workflow
2. **Usar console de navegador**: Revisa errores de conexión
3. **Probar webhook directamente**: Usa Postman o curl para probar

```bash
curl -X POST http://localhost:5678/webhook/test-chatbot \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Hola",
    "history": [],
    "sessionId": "test-123",
    "source": "web-chat"
  }'
```

## 📝 Mejores Prácticas

1. **Manejo de Errores**: Siempre incluye manejo de errores en tu workflow
2. **Timeouts**: Configura timeouts apropiados para evitar respuestas lentas
3. **Logs**: Mantén logs detallados para debugging
4. **Fallback**: La aplicación automáticamente usará OpenAI si n8n falla
5. **Autenticación**: Usa API keys si tu n8n está público

## 🔐 Seguridad

- Usa HTTPS para webhooks en producción
- Configura autenticación con API keys
- Valida y sanitiza los datos de entrada
- No expongas información sensible en logs

## 📊 Monitoreo

Puedes monitorear:
- Tiempo de respuesta de webhooks
- Tasa de éxito/fallo
- Volumen de mensajes
- Uso de diferentes fuentes de respuesta

## 🆘 Troubleshooting

### Error: "n8n webhook failed"
- Verifica que el webhook esté activo
- Confirma la URL del webhook
- Revisa que el workflow esté publicado

### Error: "Error al comunicarse con n8n"
- Verifica conectividad de red
- Confirma que n8n esté corriendo
- Revisa configuración de CORS si aplica

### Respuestas vacías
- Verifica el formato de respuesta del workflow
- Asegúrate de que el campo "response" esté presente
- Revisa logs del workflow en n8n
