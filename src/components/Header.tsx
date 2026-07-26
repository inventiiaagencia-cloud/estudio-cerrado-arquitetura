import { MessageSquare } from "lucide-react";

const Header = () => {
  const handleOpenChat = () => {
    window.dispatchEvent(new CustomEvent("open-chat"));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0D0D0E]/80 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Monograma + Nome */}
        <a href="#" className="flex items-center gap-3.5 group">
          <img
            src="/favicon.svg"
            alt="Estúdio Cerrado"
            className="w-9 h-9 object-contain rounded transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-serif text-base tracking-wide text-white group-hover:text-primary transition-colors">
              Estúdio Cerrado
            </span>
            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/40">
              Arquitetura & Design
            </span>
          </div>
        </a>

        {/* Links de navegação */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-white/60">
          <a href="#obras" className="hover:text-primary transition-colors">
            Obras
          </a>
          <a href="#metodo" className="hover:text-primary transition-colors">
            Método
          </a>
          <a href="#projetos" className="hover:text-primary transition-colors">
            Projetos
          </a>
          <a href="#depoimentos" className="hover:text-primary transition-colors">
            Depoimentos
          </a>
        </nav>

        {/* Botão de Ação rápida */}
        <button
          onClick={handleOpenChat}
          className="flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/40 text-primary hover:bg-primary hover:text-white transition-all rounded text-xs font-mono tracking-wider uppercase"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Consultoria</span>
        </button>
      </div>
    </header>
  );
};

export default Header;