import { Phone } from "lucide-react";
import { useState } from "react";

const CTAFixed = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

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
              onClick={() => setIsChatOpen(false)}
              className="text-white/60 hover:text-white"
            >
              ✕
            </button>
          </div>
          
          <div className="mb-4 text-white/80 text-sm">
            Fale diretamente com nosso arquiteto para agendar sua consultoria personalizada.
          </div>
          
          <form className="space-y-4" onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const message = formData.get("message") as string;
            if (message.trim()) {
              sendMessage(message);
              setIsChatOpen(false);
              e.target.reset();
            }
          }}>
            <div>
              <label className="block text-white/70 mb-1 font-mono text-xs">Sua mensagem</label>
              <textarea
                name="message"
                rows="4"
                className="w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-white placeholder-white/40 focus:border-primary focus:outline-none"
                placeholder="Descreva seu projeto ou dúvidas..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-mono text-xs uppercase tracking-wider"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

async function sendMessage(message: string) {
  try {
    const chatId = crypto.randomUUID();
    const response = await fetch("https://webhook-vpslocal.inventiia.com.br/webhook/arquitetos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chatId, message }),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Show success toast
    if (typeof window !== 'undefined') {
      // Import sonner toast dynamically to avoid SSR issues
      const { toast } = await import("sonner");
      toast.success("Mensagem enviada com sucesso!");
    }
  } catch (error) {
    console.error("Failed to send message:", error);
    if (typeof window !== 'undefined') {
      const { toast } = await import("sonner");
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    }
  }
}

export default CTAFixed;