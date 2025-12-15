import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type ChatMessage = {
  id: string;
  role: "user" | "bot" | "error";
  content: string;
};

const CHAT_ENDPOINT = "https://savierbot-production.up.railway.app/chatbot/ask";

const createMessage = (role: ChatMessage["role"], content: string): ChatMessage => ({
  id: crypto.randomUUID(),
  role,
  content,
});

const initialMessage = createMessage(
  "bot",
  "¡Hola! Soy SavierBot. Pregúntame por nuestros productos, procesos o cualquier duda que tengas.",
);

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [inputValue, setInputValue] = useState("");
  const [isSending, setIsSending] = useState(false);
  const listEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      listEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = useCallback(
    async (question: string) => {
      if (!question.trim()) return;

      const sanitizedQuestion = question.trim();
      setMessages((prev) => [...prev, createMessage("user", sanitizedQuestion)]);
      setInputValue("");
      setIsSending(true);

      try {
        const response = await fetch(CHAT_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: sanitizedQuestion }),
        });

        if (!response.ok) {
          throw new Error("No pudimos contactar al asistente en este momento.");
        }

        const data = await response.json();
        const answer = data?.answer ?? data?.response ?? data?.message ?? JSON.stringify(data);

        setMessages((prev) => [...prev, createMessage("bot", answer)]);
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          createMessage(
            "error",
            error instanceof Error ? error.message : "Ocurrió un error inesperado. Intenta más tarde.",
          ),
        ]);
      } finally {
        setIsSending(false);
      }
    },
    [],
  );

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (isSending) return;
      void handleSend(inputValue);
    },
    [handleSend, inputValue, isSending],
  );

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const placeholder = useMemo(
    () => (isSending ? "Enviando tu pregunta..." : "¿Qué quieres saber hoy?"),
    [isSending],
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="w-[340px] rounded-3xl border border-border bg-background/95 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <p className="text-sm font-semibold">SavierBot</p>
              <p className="text-xs text-muted-foreground">Pregúntame sobre nuestros productos</p>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full" onClick={toggleOpen} aria-label="Cerrar chatbot">
              <X className="size-5" />
            </Button>
          </div>

          <ScrollArea className="h-80 px-4 py-3 text-sm">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn("flex", {
                    "justify-end": message.role === "user",
                    "justify-start": message.role !== "user",
                  })}
                >
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl px-4 py-2",
                      message.role === "user" && "bg-primary text-primary-foreground rounded-br-none",
                      message.role === "bot" && "bg-muted text-foreground rounded-bl-none",
                      message.role === "error" && "bg-destructive/15 text-destructive rounded-bl-none",
                    )}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              <div ref={listEndRef} />
            </div>
          </ScrollArea>

          <form onSubmit={onSubmit} className="border-t border-border p-4">
            <div className="space-y-2">
              <Textarea
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder={placeholder}
                disabled={isSending}
                rows={3}
                className="resize-none rounded-2xl"
              />
              <Button type="submit" className="w-full rounded-2xl" disabled={!inputValue.trim() || isSending}>
                {isSending ? "Preguntando..." : "Enviar pregunta"}
                <Send className="size-4" />
              </Button>
            </div>
          </form>
        </div>
      )}

      <Button
        onClick={toggleOpen}
        className="rounded-full px-6 py-6 shadow-xl shadow-primary/40"
        variant="accent"
        size="lg"
      >
        <MessageCircle className="size-5" />
        {isOpen ? "Ocultar chat" : "Chatea con SavierBot"}
      </Button>
    </div>
  );
}

export default ChatbotWidget;
