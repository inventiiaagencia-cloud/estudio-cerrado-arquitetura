import { Phone } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const CTAFixed = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [chatId, setChatId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Generate chatId when chat opens
  useEffect(() => {
    if (isChatOpen && !chatId) {
      const newChatId = crypto.randomUUID();
      setChatId(newChatId);
    }
  }, [isChatOpen, chatId]);

  const sendMessage = async () => {
    if (!input.trim() || !chatId) return;

    const userMessage = {
      id: Date.now().toString(),
      text: input,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch("https://webhook-vpslocal.inventiia.com.br/webhook/arquitetos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ chatId, message: input }),
      });

      if (!response.ok) {
        // Try to get error details
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      // Get the actual response from the webhook
      const data = await response.json();
      
      // Extract text from webhook response - adjust based on your webhook's actual format
      let botMessageText = '';
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
          // Fallback: show JSON stringified
          botMessageText = JSON.stringify(data);
        }
      } else {
        botMessageText = String(data);
      }

      const botMessage = {
        id: Date.now().toString() + 'b',
        text: botMessageText,
        sender: 'bot'
      };

      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to send message:", error);
      setIsLoading(false);
      // Show error toast
      if (typeof window !== 'undefined') {
        import("sonner").then(({ toast }) => {
          toast.error(`Erro ao enviar mensagem: ${error.message}`);
        });
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsChatOpen(true)}
        className="flex items-center gap-2 px-4 py-3 bg-primary text-white rounded-md shadow-lg hover:bg-primary/90 transition-colors font-mono text-xs uppercase tracking-wider"
      >
        <Phone className="h-4 w-4" />
        Agende uma consultoria
      </button>
      
      {/* Chat Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm hidden" 
           style={{ display: isChatOpen ? 'flex' : 'none' }}>
        <div className="relative w-96 max-w-xs bg-background border border-white/10 rounded-lg p-6 shadow-xl">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold text-white">Chat com nosso especialista</h3>
            <button
              onClick={() => {
                setIsChatOpen(false);
                setMessages([]);
                setChatId('');
                setInput('');
              }}
              className="text-white/60 hover:text-white"
            >
              ✕
            </button>
          </div>
          
          <div className="mb-4 h-[300px] overflow-y-auto pr-2">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`mb-3 max-w-[80%] ${
                  msg.sender === 'user' 
                    ? 'ml-auto bg-primary/20 text-white rounded-br-lg rounded-bl-lg rounded-tl-lg' 
                    : 'mr-auto bg-black/30 text-white/90 rounded-br-lg rounded-bl-lg rounded-tr-lg'
                } p-3`}
              >
                <p className="text-sm">{msg.text}</p>
                <span className="block text-xs text-white/40 mt-1">
                  {msg.sender === 'user' ? 'Você' : 'Especialista'}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <form 
            className="space-y-3" 
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
          >
            <div className="flex items-center">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                rows="2"
                placeholder="Digite sua mensagem..."
                className="flex-1 min-h-[44px] w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-white placeholder-white/40 focus:border-primary focus:outline-none resize-none"
                disabled={isLoading}
              />
              {!isLoading && (
                <button
                  type="submit"
                  className="ml-2 px-3 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-mono text-xs uppercase tracking-wider"
                >
                  Enviar
                </button>
              )}
              {isLoading && (
                <div className="ml-2 h-4 w-4 border-2 border-primary border-t-transparent border-r-transparent border-b-primary animate-spin rounded-full"/>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CTAFixed;