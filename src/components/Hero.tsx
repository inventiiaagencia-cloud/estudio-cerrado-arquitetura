import { Phone } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isNight, setIsNight] = useState(true); // Changed default to true for Crepúsculo

  return (
    <div className="relative w-full">
      {/* Video de fundo – pré-carregado e com placeholder para carregamento rápido */}
      <video
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline   /* Safari iOS */
        preload="auto"
        poster="/videos/videohero-poster.jpg" /* você pode colocar uma imagem miniatura aqui */
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-[1.1] tracking-tight">
            Projetos que pertencem ao lugar onde nascem.
          </h1>
          <p className="text-white/60 text-sm mb-4">Clique e mude sua experiencia</p>
          <div className="flex items-center justify-center gap-1 border border-white/10 px-1 py-0.5">
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
        </div>
      </div>
    </div>
  );
};

export default Hero;