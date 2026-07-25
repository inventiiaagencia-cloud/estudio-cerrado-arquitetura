import { Phone } from "lucide-react";

const Hero = () => {
  // Placeholder image - replace with actual project image
  const heroImageUrl =
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80";

  return (
    <div className="relative w-full">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-center bg-cover"
        aria-hidden="true"
      ></div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative flex h-[100vh] w-full flex-col items-center justify-center text-center px-6 pt-20 pb-10">
        <h1 className="text-5xl font-serif text-white mx-auto mb-6 leading-tight">
          Projetos que pertencem ao lugar onde nascem.
        </h1>
        <a
          href="https://wa.me/5511910183401"
          className="flex items-center gap-3 px-8 py-4 border border-primary hover:bg-primary/20 hover:border-primary transition-colors text-xs font-mono uppercase tracking-wider text-primary hover:text-white"
        >
          <Phone className="h-4 w-4" />
          Falar no WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Hero;