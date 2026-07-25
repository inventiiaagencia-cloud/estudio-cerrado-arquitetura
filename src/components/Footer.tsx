import { Instagram, Twitter, Linkedin, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background pt-32 pb-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
          {/* Logo / Title */}
          <div className="md:col-span-5">
            <h2 className="text-3xl font-serif text-white mb-6">Estúdio Cerrado Arquitetura</h2>
            <p className="text-muted-foreground max-w-sm leading-relaxed font-light">
              Escritório focado em arquitetura de alto padrão, onde o luxo se manifesta na pureza dos materiais e no silêncio dos espaços.
            </p>
          </div>

          {/* Links / Contact */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase">Contato</span>
            <div className="flex flex-col gap-3 font-mono text-xs tracking-wider text-white/60">
              <a href="https://wa.me/5511910183401" className="hover:text-primary transition-colors">WhatsApp: +55 11 91018-3401</a>
              <a href="mailto:contato@estudiocerrado.com" className="hover:text-primary transition-colors">contato@estudiocerrado.com</a>
            </div>
          </div>

          {/* Location */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase">Localização</span>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <p className="text-sm text-white/80">Santo André, SP & Atendimento Nacional</p>
                <span className="font-mono text-[10px] text-white/40 italic">23°39'S 46°32'W</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/5">
          <p className="font-mono text-[9px] tracking-widest text-white/30 uppercase">
            © 2026 Estúdio Cerrado Arquitetura. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-8">
            <a href="#" className="text-white/40 hover:text-primary transition-colors">
              <Instagram className="h-4 w-4 stroke-[1.5px]" aria-label="Instagram" />
            </a>
            <a href="#" className="text-white/40 hover:text-primary transition-colors">
              <Twitter className="h-4 w-4 stroke-[1.5px]" aria-label="Twitter (X)" />
            </a>
            <a href="#" className="text-white/40 hover:text-primary transition-colors">
              <Linkedin className="h-4 w-4 stroke-[1.5px]" aria-label="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;