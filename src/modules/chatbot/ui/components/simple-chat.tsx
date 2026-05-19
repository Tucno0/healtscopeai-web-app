"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SimpleChat() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setLoading(true);
    try {
      console.log("🚀 Enviando mensaje:", message);

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      if (res.ok) {
        setResponse(data.response);
        console.log("✅ Respuesta recibida:", data.response);
      } else {
        setResponse(`Error: ${data.error}`);
        console.error("❌ Error:", data.error);
      }
    } catch (error) {
      setResponse(`Error: ${error}`);
      console.error("❌ Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>🧪 Prueba Simple - n8n</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe un mensaje..."
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <Button onClick={sendMessage} disabled={loading}>
            {loading ? "⏳" : "📤"}
          </Button>
        </div>

        {response && (
          <div className="p-3 bg-muted rounded-lg">
            <p className="text-sm font-medium">Respuesta de n8n:</p>
            <p className="text-sm mt-1">{response}</p>
          </div>
        )}

        <div className="text-xs text-muted-foreground">
          <p>🔗 Webhook: n8n.srv915337.hstgr.cloud</p>
          <p>📤 Método: GET</p>
          <p>📋 Parámetro: message</p>
        </div>
      </CardContent>
    </Card>
  );
} 