import { MessageSquare } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isNight, setIsNight] = useState(true); // Default to true for Crepúsculo

  const handleOpenChat = () => {
    window.dispatchEvent(new CustomEvent("open-chat"));
  };

  return (
    <div className="relative w-full">
      {/* Video de fundo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        preload="auto"
        poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: isNight
            ? 'brightness(0.55) saturate(0.8) hue-rotate(-6deg) contrast(1.1)'
            : 'none'
        }}
      >
        <source src="/videos/videohero.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>

      {/* Conteúdo */}
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center text-center px-6 py-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-[1.1] tracking-tight">
            Projetos que pertencem ao lugar onde nascem.
          </h1>
          <p className="text-white/60 text-sm mb-4">Clique e mude sua experiencia</p>
          
          <div className="flex items-center justify-center gap-1 border border-white/10 px-1 py-0.5 mb-8">
            {/* Crepúsculo button on left (default active) */}
            <button
              onClick={() => setIsNight(true)}
              className={`px-5 py-1.5 text-[9px] font-mono uppercase tracking-[0.2em] transition-all ${
                isNight
                  ? "bg-primary text-white"
                  : "bg-black/50 text-muted-foreground hover:text-white hover:bg-black/60"
              }`}
            >
              Crepúsculo
            </button>
            {/* Luz do Dia button on right */}
            <button
              onClick={() => setIsNight(false)}
              className={`px-5 py-1.5 text-[9px] font-mono uppercase tracking-[0.2em] transition-all ${
                !isNight
                  ? "bg-primary text-white"
                  : "bg-black/50 text-muted-foreground hover:text-white hover:bg-black/60"
              }`}
            >
              Luz do Dia
            </button>
          </div>

          {/* Botão de Agende uma consultoria */}
          <button
            onClick={handleOpenChat}
            className="flex items-center gap-2 px-6 py-3.5 bg-primary text-white rounded-md shadow-lg hover:bg-primary/90 transition-all font-mono text-xs uppercase tracking-wider hover:scale-105"
          >
            <MessageSquare className="h-4 w-4" />
            Agende uma consultoria
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;