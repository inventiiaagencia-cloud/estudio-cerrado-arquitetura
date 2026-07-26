import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Refúgio da Mata",
    city: "São Paulo, SP",
    year: 2022,
    coordinates: "23°33'S 46°38'W",
    praise: "Integração total com a reserva da Mata Atlântica",
    images: {
      day: "https://images.unsplash.com/photo-1600585154340-6c2cb5d967d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      night: "https://images.unsplash.com/photo-1600585154340-6c2cb5d967d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    },
    span: "col-span-12 md:col-span-6",
    height: "h-[60vh]",
  },
  {
    id: 2,
    name: "Casa do Sol",
    city: "Florianópolis, SC",
    year: 2021,
    coordinates: "27°36'S 48°34'W",
    praise: "Architettura che cattura o primeiro raio da manhã",
    images: {
      day: "https://images.unsplash.com/photo-1600585154225-4596d5be834b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      night: "https://images.unsplash.com/photo-1600585154225-4596d5be834b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    },
    span: "col-span-12 md:col-span-4",
    height: "h-[50vh]",
  },
  {
    id: 3,
    name: "Pouso dos Ventos",
    city: "Fernando de Noronha, PE",
    year: 2020,
    coordinates: "3°48'S 32°28'W",
    praise: "Arquitetura que respira com os alísios do oceano",
    images: {
      day: "https://images.unsplash.com/photo-1600585153960-2a5bbe5072e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      night: "https://images.unsplash.com/photo-1600585153960-2a5bbe5072e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    },
    span: "col-span-12 md:col-span-2",
    height: "h-[40vh]",
  },
  {
    id: 4,
    name: "Casa de Terra",
    city: "Tiradentes, MG",
    year: 2020,
    coordinates: "21°07'S 44°14'W",
    praise: "Resgate da sabedoria construtiva do barro colonial",
    images: {
      day: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      night: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    },
    span: "col-span-12 md:col-span-4",
    height: "h-[50vh]",
  },
  {
    id: 5,
    name: "Residência Horizonte",
    city: "Belo Horizonte, MG",
    year: 2023,
    coordinates: "19°55'S 43°56'W",
    praise: "Horizontes ampliados que celebram a topografia única de Belo Horizonte",
    images: {
      day: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      night: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    },
    span: "col-span-12 md:col-span-4",
    height: "h-[50vh]",
  },
  {
    id: 6,
    name: "Villa da Serra",
    city: "Petrópolis, RJ",
    year: 2024,
    coordinates: "22°30'S 43°10'W",
    praise: "Presença serrana que respeita a majestade da Mata Atlântica",
    images: {
      day: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      night: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    },
    span: "col-span-12 md:col-span-4",
    height: "h-[50vh]",
  },
];

const ProjectsGrid = () => {
  const [isNight, setIsNight] = useState(false); // Luz do Dia ativo por padrão

  return (
    <section
      id="obras"
      className="relative py-20 md:pt-32 md:pb-16 bg-background border-t border-white/5"
    >
      <div className="w-full px-0">
        <div className="container mx-auto px-6 mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">
              Obras
            </h2>
            <p className="text-muted-foreground font-mono text-sm tracking-widest uppercase">
              Portfólio Selecionado
            </p>
            <p className="text-muted-foreground font-serif text-sm italic max-w-md mx-auto mt-2">
              "A arquitetura é o aprendizado do espaço, do tempo e da ordem."
            </p>
          </div>

          <p className="w-full text-center font-mono text-[8px] tracking-[0.3em] text-primary uppercase mb-2">
            Clique aqui e mude sua experiência
          </p>

          <div className="flex items-center gap-1 border border-white/10 px-2 py-0.5">
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
          </div>
        </div>

        <div className="grid grid-cols-12 gap-1 md:gap-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative group overflow-hidden bg-stone-900 ${project.span} ${project.height}`}
            >
              <img
                src={project.images.day}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-1000 transition-filter duration-500 group-hover:scale-105"
                style={{
                  filter: isNight
                    ? 'brightness(0.55) saturate(0.8) hue-rotate(-6deg) contrast(1.1)'
                    : "none",
                }}
              />

              {/* Descrição completa na parte inferior esquerda - visível em todas as telas */}
              <div className="absolute bottom-4 left-4">
                <div className="bg-black/30 backdrop-blur-sm rounded-md px-2 py-1 max-w-[200px]">
                  <span className="font-mono text-[7px] tracking-[0.2em] text-white/50 block mb-1">
                    {project.coordinates}
                  </span>
                  <h3 className="text-lg font-serif text-white">{project.name}</h3>
                  <p className="text-xs font-mono text-white/60 mb-1">
                    {project.city}
                  </p>
                  <p className="text-xs font-mono text-white/60 mb-1">
                    {project.year}
                  </p>
                  <p className="text-xs font-light text-white/70">
                    {project.praise}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;