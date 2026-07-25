import { Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-primary/20">
      <div className="container mx-auto px-6 py-8 flex flex-col items-center gap-6 text-sm">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-muted-foreground">© 2026 Estúdio Cerrado Arquitetura</p>
          <p className="text-muted-foreground">Santo André, SP</p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="h-4 w-4" aria-label="Instagram" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="h-4 w-4" aria-label="Twitter (X)" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-4 w-4" aria-label="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;