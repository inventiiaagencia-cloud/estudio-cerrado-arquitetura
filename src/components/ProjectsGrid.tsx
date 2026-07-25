import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Casa Pivô",
    city: "São Paulo, SP",
    year: 2022,
    coordinates: "23°33'S 46°38'W",
    praise: "Integração sublime com a paisagem do cerrado",
    images: {
      day: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      // Night URL no longer used - applying filter via CSS instead
      night: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    },
    span: "col-span-12",
    height: "h-[70vh]",
  },
  {
    id: 2,
    name: "Refúgio Cerrado",
    city: "Chapada dos Veadeiros, GO",
    year: 2021,
    coordinates: "14°05'S 46°38'W",
    praise: "Refúgio imerso no cerrado central do Brasil",
    images: {
      day: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      night: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    },
    span: "col-span-12 md:col-span-6",
    height: "h-[60vh]",
  },
  {
    id: 3,
    name: "Pavilhão Vidro",
    city: "Rio de Janeiro, RJ",
    year: 2023,
    coordinates: "22°54'S 43°12'W",
    praise: "Transparência que dialoga com a luz única da cidade maravilhosa",
    images: {
      day: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      night: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    },
    span: "col-span-12 md:col-span-6",
    height: "h-[60vh]",
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
  const [isNight, setIsNight] = useState(false);

  return (
    <section id="obras" className="relative py-20 md:py-32 bg-background border-t border-white/5">
      <div className="w-full px-0">
        <div className="container mx-auto px-6 mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">Obras</h2>
            <p className="text-muted-foreground font-mono text-sm tracking-widest uppercase">Portfólio Selecionado</p>
          </div>
          
          <div className="flex items-center gap-1 border border-white/10 p-1">
            <button
              onClick={() => setIsNight(false)}
              className={`px-5 py-1.5 text-[9px] font-mono uppercase tracking-[0.2em] transition-all ${
                !isNight ? "bg-primary text-white" : "text-muted-foreground hover:text-white"
              }`}
            >
              Luz do Dia
            </button>
            <button
              onClick={() => setIsNight(true)}
              className={`px-5 py-1.5 text-[9px] font-mono uppercase tracking-[0.2em] transition-all ${
                isNight ? "bg-primary text-white" : "text-muted-foreground hover:text-white"
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
                    ? 'brightness(0.9) saturate(0.88) hue-rotate(-2deg) contrast(1.02)' 
                    : 'none' 
                }}
              />
              
              {/* Overlay minimalista */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[9px] tracking-[0.3em] text-primary uppercase">
                    {project.coordinates}
                  </span>
                  <h3 className="text-2xl font-serif text-white">{project.name}</h3>
                  <p className="text-xs font-light text-white/70 tracking-wider">
                    {project.praise}
                  </p>
                  <div className="flex items-center gap-3 text-xs font-mono text-white/60 tracking-wider">
                    <span>{project.city}</span>
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>

              {/* Legenda visível mobile / sempre */}
              <div className="absolute bottom-4 left-4 md:hidden">
                 <span className="font-mono text-[7px] tracking-[0.2em] text-white/50 block mb-1">
                    {project.coordinates}
                  </span>
                  <h3 className="text-lg font-serif text-white">{project.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;