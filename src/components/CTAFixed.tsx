import { MessageSquare, Send, X, Sparkles, Building2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const QUICK_PROMPTS = [
  "Gostaria de agendar uma consultoria"
];

const CTAFixed = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // Load initial messages from sessionStorage if available
  const [messages, setMessages] = useState<Array<{
    id: string;
    text: string;
    sender: 'user' | 'bot';
    loading?: boolean;
    timestamp?: string;
  }>>(() => {
    try {
      const saved = sessionStorage.getItem('estudio_cerrado_chat_messages');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Load or initialize chatId for the active session
  const [chatId, setChatId] = useState<string>(() => {
    try {
      const savedId = sessionStorage.getItem('estudio_cerrado_chat_id');
      if (savedId) return savedId;
      const newId = crypto.randomUUID();
      sessionStorage.setItem('estudio_cerrado_chat_id', newId);
      return newId;
    } catch {
      return crypto.randomUUID();
    }
  });

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Save messages to sessionStorage whenever they change
  useEffect(() => {
    try {
      // Filter out temporary loading messages before saving
      const cleanMessages = messages.filter(m => !m.loading);
      sessionStorage.setItem('estudio_cerrado_chat_messages', JSON.stringify(cleanMessages));
    } catch (e) {
      console.error("Error saving chat state to sessionStorage", e);
    }
  }, [messages]);

  // Listen to open-chat custom event dispatched from Hero or other components
  useEffect(() => {
    const handleOpenChat = () => setIsChatOpen(true);
    window.addEventListener("open-chat", handleOpenChat);
    return () => window.removeEventListener("open-chat", handleOpenChat);
  }, []);

  // Scroll to bottom when messages change or chat is opened
  useEffect(() => {
    if (isChatOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isChatOpen]);

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const sendMessage = async (textToSend?: string) => {
    const messageContent = textToSend || input;
    if (!messageContent.trim() || !chatId || isLoading) return;

    const userMessageId = Date.now().toString();
    const botMessageId = userMessageId + '-bot';
    const timestamp = getCurrentTime();

    // Add user message
    setMessages(prev => [
      ...prev,
      { id: userMessageId, text: messageContent, sender: 'user', timestamp }
    ]);

    // Add bot loading message
    setMessages(prev => [
      ...prev,
      { id: botMessageId, text: '', sender: 'bot', loading: true }
    ]);

    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      const response = await fetch("https://webhook-vpslocal.inventiia.com.br/webhook/arquitetos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ chatId, message: messageContent }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      
      let botMessageText = 'Desculpe, não consegui processar sua mensagem.';
      if (typeof data === 'string') {
        botMessageText = data;
      } else if (data && typeof data === 'object') {
        if (data.message) {
          botMessageText = data.message;
        } else if (data.output) {
          botMessageText = data.output;
        } else if (data.reply) {
          botMessageText = data.reply;
        } else {
          botMessageText = JSON.stringify(data);
        }
      } else {
        botMessageText = String(data);
      }

      setMessages(prev => 
        prev.map(msg => 
          msg.id === botMessageId 
            ? { ...msg, text: botMessageText, loading: false, timestamp: getCurrentTime() } 
            : msg
        )
      );
    } catch (error: any) {
      console.error("Failed to send message:", error);
      setMessages(prev => 
        prev.map(msg => 
          msg.id === botMessageId 
            ? { ...msg, text: `Desculpe, tivemos um problema na conexão. (${error.message || 'Erro inesperado'})`, loading: false, timestamp: getCurrentTime() } 
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Chat Icon Button with 24h Label */}
      {!isChatOpen && (
        <div className="flex flex-col items-center gap-1.5 animate-fadeIn">
          <span className="bg-[#18181B]/95 backdrop-blur-md text-white/90 text-[10px] font-mono tracking-wider uppercase px-3 py-1 rounded-full border border-white/10 shadow-xl whitespace-nowrap">
            Atendimento 24h/por dia
          </span>
          <button
            onClick={() => setIsChatOpen(true)}
            aria-label="Abrir chat de consultoria"
            className="group relative flex items-center justify-center w-14 h-14 bg-[#18181B] text-white rounded-full shadow-2xl hover:bg-primary border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-primary"></span>
            </span>
            <MessageSquare className="h-6 w-6 text-white group-hover:rotate-6 transition-transform duration-300" />
          </button>
        </div>
      )}
      
      {/* Chic Chat Drawer / Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-bottom justify-center sm:justify-end sm:p-6 bg-black/60 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full sm:w-[400px] h-[90vh] sm:h-[580px] bg-[#121214] border border-white/10 rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            
            {/* Header Chique */}
            <div className="relative px-5 py-4 bg-[#18181C] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-primary/30">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#18181C]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-sm font-medium tracking-wide text-white">Estúdio Cerrado</h3>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-primary/90 bg-primary/10 px-1.5 py-0.5 rounded border border-primary/20">
                      Exclusivo
                    </span>
                  </div>
                  <p className="text-[11px] text-white/50 font-light tracking-wide">Atendimento com especialista</p>
                </div>
              </div>

              <button
                onClick={() => setIsChatOpen(false)}
                className="p-1.5 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Fechar conversa"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body / Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar bg-gradient-to-b from-[#121214] to-[#0D0D0E]">
              {messages.length === 0 && (
                <div className="h-full flex flex-col justify-center items-center text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-serif text-base text-white mb-1">Seja bem-vindo ao Estúdio Cerrado</h4>
                  <p className="text-xs text-white/50 max-w-[260px] font-light leading-relaxed mb-6">
                    Como podemos ajudar a transformar seu terreno ou espaço em uma obra de arquitetura autoral?
                  </p>

                  <div className="w-full space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/30 block text-left mb-1">Sugestão de início:</span>
                    {QUICK_PROMPTS.map((prompt, idx) => (
                      <button
                        key={idx}
                        onClick={() => sendMessage(prompt)}
                        className="w-full text-left text-xs text-white/80 bg-white/[0.03] hover:bg-primary/20 border border-white/10 hover:border-primary/40 rounded-lg p-2.5 transition-all duration-200 flex items-center justify-between group"
                      >
                        <span>{prompt}</span>
                        <Send className="w-3.5 h-3.5 text-white/30 group-hover:text-primary transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div 
                    className={`max-w-[85%] px-4 py-3 text-xs leading-relaxed transition-all ${
                      msg.sender === 'user' 
                        ? 'bg-primary text-white rounded-2xl rounded-tr-xs shadow-md' 
                        : 'bg-[#1C1C20] text-white/90 border border-white/10 rounded-2xl rounded-tl-xs shadow-sm'
                    }`}
                  >
                    {msg.loading ? (
                      <div className="flex items-center gap-2 py-1">
                        <span className="text-xs text-white/60 font-mono tracking-wider">Analisando resposta</span>
                        <div className="flex space-x-1">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    ) : (
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                    )}
                  </div>
                  
                  {msg.timestamp && !msg.loading && (
                    <span className="text-[9px] font-mono text-white/30 mt-1 px-1">
                      {msg.timestamp}
                    </span>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-[#18181C] border-t border-white/10">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                className="relative flex items-center bg-[#0D0D0E] border border-white/10 focus-within:border-primary/60 rounded-xl transition-all duration-200"
              >
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  rows={1}
                  placeholder="Escreva sua mensagem..."
                  className="w-full py-3 pl-4 pr-12 bg-transparent text-xs text-white placeholder-white/30 focus:outline-none resize-none custom-scrollbar max-h-24"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-2 rounded-lg bg-primary text-white disabled:opacity-30 disabled:hover:bg-primary hover:bg-primary/90 transition-all"
                  aria-label="Enviar"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              <div className="text-center mt-2">
                <span className="text-[9px] font-mono text-white/30 tracking-widest uppercase">
                  Estúdio Cerrado • Arquitetura & Design
                </span>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default CTAFixed;