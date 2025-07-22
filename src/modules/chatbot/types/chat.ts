// Tipos súper básicos para el chatbot

export interface Message {
  id: string;
  content: string;
  role: "user" | "assistant" | "system";
  timestamp: Date;
}

export interface SimpleMessage {
  message: string;
}

export interface SimpleResponse {
  response: string;
  sources?: string[];
  confidence?: number;
}

export interface ChatRequest {
  message: string;
  history: Array<{
    role: "user" | "assistant" | "system";
    content: string;
  }>;
  sessionId?: string;
}

export interface VectorSearchResult {
  id: string;
  content: string;
  metadata: {
    source: string;
    title?: string;
    url?: string;
    category?: string;
    timestamp?: string;
  };
  score: number;
}

export interface RAGContext {
  query: string;
  results: VectorSearchResult[];
  context: string;
} 