import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi! I'm Prateek's AI assistant. Ask me anything about his experience, projects, or skills!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const chatMutation = useMutation({
    mutationFn: async (message: string) => {
      const response = await apiRequest("POST", "/api/chat", { message });
      return await response.json();
    },
    onSuccess: (data) => {
      const botMessage: Message = {
        id: Date.now().toString() + "-bot",
        content: data.response,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    },
    onError: () => {
      const errorMessage: Message = {
        id: Date.now().toString() + "-error",
        content: "I'm experiencing some technical difficulties. Please try again later or contact Prateek directly at prateeksavanur@duck.com.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || chatMutation.isPending) return;

    const userMessage: Message = {
      id: Date.now().toString() + "-user",
      content: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    chatMutation.mutate(inputMessage);
    setInputMessage("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? "scale-90" : "animate-pulse"
        }`}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="absolute bottom-16 right-0 w-80 h-96 border-border shadow-2xl">
          {/* Chat Header */}
          <CardHeader className="p-4 border-b border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                  <Bot className="w-4 h-4 text-foreground" />
                </div>
                <div>
                  <h3 className="text-foreground font-medium">Ask about Prateek</h3>
                  <p className="text-muted-foreground text-xs">AI Assistant</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </CardHeader>

          {/* Chat Messages */}
          <CardContent className="p-0">
            <div className="h-64 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start ${message.isUser ? "justify-end" : ""}`}
                >
                  {!message.isUser && (
                    <div className="w-6 h-6 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                      <Bot className="w-3 h-3 text-foreground" />
                    </div>
                  )}
                  <div
                    className={`max-w-xs rounded-lg p-3 ${
                      message.isUser
                        ? "bg-primary text-primary-foreground ml-8"
                        : "glass"
                    }`}
                  >
                    <p className={`text-sm ${message.isUser ? "text-primary-foreground" : "text-foreground"}`}>
                      {message.content}
                    </p>
                  </div>
                  {message.isUser && (
                    <div className="w-6 h-6 bg-primary bg-opacity-20 rounded-full flex items-center justify-center ml-2 mt-1 flex-shrink-0">
                      <User className="w-3 h-3 text-foreground" />
                    </div>
                  )}
                </div>
              ))}
              {chatMutation.isPending && (
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mr-2 mt-1">
                    <Bot className="w-3 h-3 text-foreground" />
                  </div>
                  <div className="glass rounded-lg p-3 max-w-xs">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-border">
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask about skills, projects..."
                  className="flex-1 bg-background border-border text-foreground text-sm"
                  disabled={chatMutation.isPending}
                />
                <Button 
                  type="submit" 
                  size="icon"
                  disabled={chatMutation.isPending || !inputMessage.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
