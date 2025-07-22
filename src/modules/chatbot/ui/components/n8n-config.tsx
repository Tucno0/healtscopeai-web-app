"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

interface WebhookData {
  timestamp: string;
  data: {
    request?: any;
    response?: any;
    timestamp?: string;
  };
}

export function N8NConfig() {
  const [webhookStatus, setWebhookStatus] = useState<string>("checking");
  const [webhookData, setWebhookData] = useState<WebhookData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const webhookUrl = "https://n8n.srv915337.hstgr.cloud/webhook-test/a328c3af-b4bf-40bb-b21c-2dff58e3f552";

  useEffect(() => {
    checkWebhookHealth();
    loadWebhookHistory();
  }, []);

  const checkWebhookHealth = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/chat/n8n");
      const data = await response.json();
      
      setWebhookStatus(data.status);
    } catch (error) {
      console.error("Error checking webhook health:", error);
      setWebhookStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const loadWebhookHistory = () => {
    if (typeof window !== 'undefined') {
      try {
        const history = JSON.parse(localStorage.getItem('n8n-webhook-history') || '[]');
        setWebhookData(history);
      } catch (error) {
        console.error("Error loading webhook history:", error);
      }
    }
  };

  const testWebhook = async () => {
    try {
      setIsLoading(true);
      
      const testMessage = {
        message: "Hola, esto es una prueba del webhook de n8n",
        history: [],
        sessionId: `test-${Date.now()}`
      };

      const response = await fetch("/api/chat/n8n", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testMessage),
      });

      const result = await response.json();
      
      if (response.ok) {
        alert("✅ Webhook funcionando correctamente\nRespuesta: " + result.response);
      } else {
        alert("❌ Error en webhook: " + result.error);
      }
      
      // Recargar datos después de la prueba
      loadWebhookHistory();
      
    } catch (error) {
      console.error("Error testing webhook:", error);
      alert("❌ Error al probar el webhook");
    } finally {
      setIsLoading(false);
    }
  };

  const clearHistory = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('n8n-webhook-history');
      setWebhookData([]);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🔗 Configuración N8N Webhook
            <Badge variant={webhookStatus === "healthy" ? "default" : "destructive"}>
              {webhookStatus === "healthy" ? "Conectado" : 
               webhookStatus === "unhealthy" ? "Desconectado" : 
               webhookStatus === "checking" ? "Verificando..." : "Error"}
            </Badge>
          </CardTitle>
          <CardDescription>
            Webhook URL: {webhookUrl}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Button 
              onClick={checkWebhookHealth} 
              disabled={isLoading}
              variant="outline"
            >
              🔄 Verificar Estado
            </Button>
            <Button 
              onClick={testWebhook} 
              disabled={isLoading}
            >
              🧪 Probar Webhook
            </Button>
          </div>

          {webhookStatus === "unhealthy" && (
            <Alert>
              <AlertDescription>
                El webhook de n8n no está respondiendo. Verifica que la URL sea correcta y que n8n esté funcionando.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            📊 Datos Capturados del Webhook
            <Button onClick={clearHistory} variant="outline" size="sm">
              🗑️ Limpiar
            </Button>
          </CardTitle>
          <CardDescription>
            Historial de datos enviados y recibidos del webhook de n8n
          </CardDescription>
        </CardHeader>
        <CardContent>
          {webhookData.length === 0 ? (
            <p className="text-muted-foreground text-center py-4">
              No hay datos capturados aún. Prueba enviar un mensaje al chatbot.
            </p>
          ) : (
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {webhookData.slice().reverse().map((item, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      {new Date(item.timestamp).toLocaleString()}
                    </span>
                    <Badge variant="secondary">
                      #{webhookData.length - index}
                    </Badge>
                  </div>
                  
                  {item.data.request && (
                    <div>
                      <h4 className="text-sm font-semibold text-green-600">📤 Enviado:</h4>
                      <pre className="text-xs bg-green-50 p-2 rounded overflow-x-auto">
                        {JSON.stringify(item.data.request, null, 2)}
                      </pre>
                    </div>
                  )}
                  
                  {item.data.response && (
                    <div>
                      <h4 className="text-sm font-semibold text-blue-600">📥 Recibido:</h4>
                      <pre className="text-xs bg-blue-50 p-2 rounded overflow-x-auto">
                        {JSON.stringify(item.data.response, null, 2)}
                      </pre>
                    </div>
                  )}
                  
                  <Separator />
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
