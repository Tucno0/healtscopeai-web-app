# Integración N8N Webhook - LIRYAL

## 🔗 URL del Webhook

```
https://n8n.srv915337.hstgr.cloud/webhook-test/a328c3af-b4bf-40bb-b21c-2dff58e3f552
```

## 📋 Formato de Datos Enviados

### Request (POST)
```
POST /webhook-test/a328c3af-b4bf-40bb-b21c-2dff58e3f552?message=Hola, necesito información sobre telemedicina&sessionId=web-1703123456789-abc123def&timestamp=2023-12-21T10:30:45.123Z&source=web-chat&history=[{"role":"user","content":"¿Qué servicios ofrecen?"},{"role":"assistant","content":"Ofrecemos servicios de telemedicina completos..."}]
```

### Response Esperado
```json
{
  "response": "Hola! Te ayudo con información sobre nuestros servicios de telemedicina...",
  "sources": ["servicios-telemedicina", "faq-servicios"],
  "confidence": 0.95
}
```

## 🛠️ Configuración

### Variables de Entorno Mínimas
```env
# Requerido - para habilitar n8n como proveedor
CHAT_PROVIDER=n8n

# Opcional - si no se define, usa la URL por defecto
N8N_WEBHOOK_URL=https://n8n.srv915337.hstgr.cloud/webhook-test/a328c3af-b4bf-40bb-b21c-2dff58e3f552
```

### Configuración Completa (Opcional)
```env
# Para usar OpenAI como fallback (solo si CHAT_PROVIDER=openai)
# OPENAI_API_KEY=tu_openai_api_key_aqui

# Para usar RAG con Upstash Vector (opcional)
# UPSTASH_VECTOR_REST_URL=tu_upstash_vector_url
# UPSTASH_VECTOR_REST_TOKEN=tu_upstash_vector_token

# Para caché con Upstash Redis (opcional)
# UPSTASH_REDIS_REST_URL=tu_upstash_redis_url
# UPSTASH_REDIS_REST_TOKEN=tu_upstash_redis_token
```

## 🔄 Flujo de Procesamiento

1. **Usuario envía mensaje** → Chatbot
2. **Chatbot procesa** → Determina si usar n8n o OpenAI
3. **Si n8n está habilitado** → Envía datos al webhook
4. **n8n procesa** → Workflow personalizado
5. **n8n responde** → Chatbot recibe respuesta
6. **Fallback** → Si n8n falla, usa OpenAI

## 📊 Monitoreo y Debugging

### Endpoints Disponibles

#### POST `/api/chat/n8n`
- Envía mensaje al webhook de n8n
- Captura datos para análisis

#### GET `/api/chat/n8n`
- Health check del webhook
- Verifica conectividad

### Componente de Configuración
- **Estado de conexión** en tiempo real
- **Historial de datos** enviados/recibidos
- **Pruebas manuales** del webhook
- **Debugging** con logs detallados

## 🎯 Casos de Uso

### 1. Respuestas Personalizadas
```javascript
// n8n puede procesar el mensaje y generar respuestas únicas
// basadas en reglas de negocio específicas
```

### 2. Integración con Sistemas Externos
```javascript
// n8n puede conectar con:
// - CRM para seguimiento de leads
// - Base de datos de productos
// - APIs de terceros
// - Sistemas de notificación
```

### 3. Análisis y Analytics
```javascript
// n8n puede capturar métricas como:
// - Tiempo de respuesta
// - Tipos de consultas
// - Satisfacción del usuario
// - Conversiones
```

## 🔧 Configuración en n8n

### Workflow Básico
1. **Webhook Trigger (GET)** → Recibe datos del chatbot via query parameters
2. **Data Processing** → Procesa mensaje e historial desde URL
3. **AI Integration** → Conecta con OpenAI/GPT
4. **Business Logic** → Aplica reglas de negocio
5. **Response Format** → Formatea respuesta
6. **Webhook Response** → Envía respuesta al chatbot

### Ejemplo de Workflow
```json
{
  "nodes": [
    {
      "type": "webhook",
      "name": "Chatbot Webhook",
      "parameters": {
        "httpMethod": "POST",
        "path": "webhook-test/a328c3af-b4bf-40bb-b21c-2dff58e3f552"
      }
    },
    {
      "type": "openai",
      "name": "Process Message",
      "parameters": {
        "model": "gpt-3.5-turbo",
        "messages": "={{ $json.message }}"
      }
    },
    {
      "type": "respondToWebhook",
      "name": "Send Response",
      "parameters": {
        "responseBody": {
          "response": "={{ $json.choices[0].message.content }}",
          "confidence": 0.95
        }
      }
    }
  ]
}
```

## 🚨 Troubleshooting

### Problemas Comunes

1. **Webhook no responde**
   - Verificar URL correcta
   - Comprobar que n8n esté funcionando
   - Revisar logs de n8n

2. **Error de autenticación**
   - Verificar configuración de autenticación en n8n
   - Comprobar headers de autorización si están configurados

3. **Timeout de respuesta**
   - Optimizar workflow de n8n
   - Reducir complejidad del procesamiento

### Logs de Debugging
```javascript
// Los logs se guardan en:
// - Console del navegador
// - localStorage (n8n-webhook-history)
// - Logs del servidor Next.js
```

## 📈 Métricas y Analytics

### Datos Capturados
- **Timestamp** de cada interacción
- **Mensaje** enviado por el usuario
- **Respuesta** recibida de n8n
- **Tiempo de respuesta**
- **Estado de conexión**

### Dashboard de Monitoreo
- Estado del webhook en tiempo real
- Historial de interacciones
- Métricas de rendimiento
- Alertas de errores

## 🔐 Seguridad

### Recomendaciones
1. **Usar HTTPS** para todas las comunicaciones
2. **Sanitizar datos** antes del procesamiento
3. **Limitar acceso** al webhook
4. **Monitorear logs** para detectar abusos
5. **Configurar autenticación** en n8n si es necesario

### Headers de Seguridad
```javascript
{
  'User-Agent': 'LIRYAL-Chatbot/1.0'
}
```

## 🚀 Próximos Pasos

1. **Configurar workflow** en n8n
2. **Probar integración** con datos de prueba
3. **Monitorear métricas** de rendimiento
4. **Optimizar respuestas** basado en feedback
5. **Escalar** según necesidades de tráfico 