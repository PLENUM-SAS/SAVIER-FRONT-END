import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
    text: string;
    sender: "user" | "bot";
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { text: "¡Hola! Soy SavierBot. ¿En qué puedo ayudarte hoy?", sender: "bot" }
    ]);
    const [inputText, setInputText] = useState("");
    const [loading, setLoading] = useState(false);

    // POST endpoint desde las instrucciones
    const CHATBOT_URL = "https://savierbot-production.up.railway.app/chatbot/ask";

    const handleSendMessage = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputText.trim()) return;

        const userMsg = inputText.trim();
        setMessages((prev) => [...prev, { text: userMsg, sender: "user" }]);
        setInputText("");
        setLoading(true);

        try {
            const response = await axios.post(
                CHATBOT_URL,
                { question: userMsg },
                { headers: { "Content-Type": "application/json" } }
            );

            // Asumimos que la respuesta tiene un campo 'response' o similar. 
            // Ajustar según la estructura real si es diferente.
            // Basado en el curl de ejemplo, no muestra la respuesta, pero lo standard es { response: "..." } o similar.
            // Si el usuario proporcionó un curl -d, asumimos que devuelve un JSON.
            // Vamos a intentar leer 'answer' o 'response' o todo el data.

            const botResponse = response.data.answer || response.data.response || response.data.reply || JSON.stringify(response.data);

            setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
        } catch (error) {
            console.error(error);
            setMessages((prev) => [...prev, { text: "Lo siento, tuve un problema al conectar con el servidor.", sender: "bot" }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="mb-4 w-80 md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
                    >
                        {/* Header */}
                        <div className="bg-savier-dark-green p-4 flex justify-between items-center text-white">
                            <div className="flex items-center gap-2">
                                <MessageCircle className="h-5 w-5" />
                                <h3 className="font-bold">Atención al Cliente</h3>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-white hover:bg-white/20 h-8 w-8"
                                onClick={() => setIsOpen(false)}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>

                        {/* Messages Area */}
                        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === "user"
                                                ? "bg-savier-dark-green text-white rounded-br-none"
                                                : "bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {loading && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-bl-none shadow-sm">
                                        <span className="animate-pulse text-gray-400">Escribiendo...</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex gap-2">
                            <Input
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Escribe tu pregunta..."
                                className="flex-grow focus-visible:ring-savier-dark-green"
                            />
                            <Button
                                type="submit"
                                size="icon"
                                className="bg-savier-orange hover:bg-savier-orange/90 text-white"
                                disabled={loading}
                            >
                                <Send className="h-4 w-4" />
                            </Button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-savier-dark-green text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
            >
                {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
            </motion.button>
        </div>
    );
}
