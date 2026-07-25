import { Phone } from "lucide-react";

const Hero = () => {
  // Placeholder image - replace with actual project image
  const heroImageUrl =
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwbW9kVW5pdCUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1600&q=80";

  return (
    <div className="relative w-full">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwbW9kVW5pdCUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1600&q=80')"
        }}
        aria-hidden="true"
      ></div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center text-center px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-[1.1] tracking-tight">
            Projetos que pertencem ao lugar onde nascem.
          </h1>
          <div className="flex justify-center">
            <a
              href="https://wa.me/5511910183401"
              className="flex items-center gap-3 px-10 py-5 border border-primary bg-primary/10 hover:bg-primary transition-all duration-500 text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-white"
            >
              <Phone className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;