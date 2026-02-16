import { generate } from "@/services/conversation.service.api";
import React, { createContext, useContext, useState } from "react";

type Conversation = {
  id: number;
  message: string;
};

type ConversationContextType = {
  conversations: Conversation[];
  submitQuery: (message: string, conversationId: number | null) => Promise<any>;
};

const ConversationContext = createContext<ConversationContextType | undefined>(
  undefined,
);

export function ConversationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  const submitQuery = async (
    message: string,
    conversationId: number | null,
  ) => {
    const response = await generate(message, conversationId);
    return response;
  };

  return (
    <ConversationContext.Provider value={{ conversations, submitQuery }}>
      {children}
    </ConversationContext.Provider>
  );
}

export function useConversations() {
  const ctx = useContext(ConversationContext);
  if (!ctx) {
    throw new Error(
      "useConversations must be used within ConversationProvider",
    );
  }
  return ctx;
}
