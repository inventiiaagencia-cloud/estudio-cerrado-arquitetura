import { FileCode2 } from "lucide-react";

const blueprints = [
  {
    id: 1,
    title: "Planta Baixa — Residência Suspensa",
    subtitle: "Estudo da implantação e fluxos integrados",
    scale: "Escala 1:100",
    year: "Estudo preliminar, 2023",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rotation: "md:-rotate-1",
  },
  {
    id: 2,
    title: "Corte AA — Pavilhão de Vidro",
    subtitle: "Análise de pé-direito duplo e iluminação zenital",
    scale: "Escala 1:50",
    year: "Projeto executivo, 2023",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rotation: "md:rotate-1",
  },
  {
    id: 3,
    title: "Elevação Norte — Casa Pátio",
    subtitle: "Cobogós e brises de madeira para conforto térmico",
    scale: "Escala 1:75",
    year: "Anteprojeto, 2022",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rotation: "md:-rotate-1",
  },
  {
    id: 4,
    title: "Estudo Volumétrico 01 — Refúgio",
    subtitle: "Acomodação da estrutura na topografia natural",
    scale: "Escala 1:200",
    year: "Croqui conceitual, 2024",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rotation: "md:rotate-1",
  },
];

const TechnicalBlueprints = () => {
  return (
    <section id="projetos" className="relative py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        {/* Cabeçalho no padrão do site */}
        <div className="max-w-4xl mb-16">
          <span className="font-mono text-[9px] md:text-xs tracking-[0.3em] text-primary uppercase block mb-2">
            PORTFÓLIO TÉCNICO
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">
            Projetos
          </h2>
          <div className="w-20 h-[1px] bg-primary mb-4"></div>
          <p className="text-muted-foreground text-sm md:text-base font-light max-w-xl">
            Pranchas técnicas, croquis e estudos de geometria solar que antecipam a experiência material de cada espaço antes da construção.
          </p>
        </div>

        {/* Grid de Pranchas (2x2 em mobile, 4 em desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {blueprints.map((item) => (
            <div
              key={item.id}
              className={`group relative bg-[#F5F3EB] text-[#1A1A1A] p-4 rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${item.rotation} border border-[#E2DFC2] flex flex-col justify-between`}
            >
              {/* Moldura / Imagem estilo papel/blueprint */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAE6D8] border border-[#D8D3C0] mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale contrast-125 opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute top-2 right-2 bg-[#F5F3EB]/90 px-2 py-0.5 border border-[#D8D3C0]">
                  <FileCode2 className="w-3.5 h-3.5 text-primary" />
                </div>
              </div>

              {/* Informações da Prancha */}
              <div className="flex flex-col flex-1 justify-between gap-3">
                <div>
                  <h3 className="font-serif font-bold text-base text-[#121212] leading-snug mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#555550] font-sans leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E0DBC8] flex items-center justify-between text-[10px] font-mono text-[#777770] uppercase tracking-wider">
                  <span>{item.scale}</span>
                  <span>{item.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalBlueprints;