const Testimonial = () => {
  return (
    <section className="relative py-24 md:py-40 bg-[#0C0C0D] overflow-hidden">
      {/* Background textual element sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <span className="text-[15vw] font-serif whitespace-nowrap italic">Experiência Sensorial</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 flex justify-center">
             <div className="w-10 h-[1px] bg-primary"></div>
          </div>
          
          <blockquote className="text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-white leading-[1.3] md:leading-[1.2] tracking-tight">
              "Viver neste espaço é como respirar profundamente pela primeira vez. Cada detalhe foi pensado para nos conectar com a paisagem e com nossa própria essência."
            </p>
            
            <footer className="mt-12 flex flex-col items-center gap-3">
              <span className="font-mono text-[9px] tracking-[0.4em] text-primary uppercase">Proprietário Residencial</span>
              <div className="flex items-center gap-2">
                <span className="w-6 h-[1px] bg-white/20"></span>
                <cite className="not-italic font-sans text-xs text-white/50 tracking-widest uppercase">Condomínio Quinta da Baroneza, SP</cite>
                <span className="w-6 h-[1px] bg-white/20"></span>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;