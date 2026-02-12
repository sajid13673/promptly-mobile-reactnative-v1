import api from "@/services/api";

export async function generate(message: string, conversationId: number | null) {
  const response = await api.post("/generate", {
    message,
    conversation_id: conversationId,
  });
  return response.data;
}
