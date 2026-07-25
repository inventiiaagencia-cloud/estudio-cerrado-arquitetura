import { useState } from "react";
import { Sun, Moon } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Casa Pivô",
    city: "São Paulo, SP",
    year: 2022,
    coordinates: "23°33'S 46°38'W",
    images: {
      day:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwbW9kVW5pdCUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1600&q=80",
      night:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwbW9kVW5pdCUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1600&q=80&w=1600&q=80&fit=crop&dark=true", // We'll just use a darker version; in reality, you'd have a night photo
    },
  },
  {
    id: 2,
    name: "Refúgio Cerrado",
    city: "Chapada dos Veadeiros, GO",
    year: 2021,
    coordinates: "14°05'S 46°38'W",
    images: {
      day:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwbW9kVW5pdCUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1600&q=80",
      night:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwbW9kVW5pdCUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1600&q=80",
    },
  },
  {
    id: 3,
    name: "Pavilhão Vidro",
    city: "Rio de Janeiro, RJ",
    year: 2023,
    coordinates: "22°54'S 43°12'W",
    images: {
      day:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwbW9kVW5pdCUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1600&q=80",
      night:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwbW9kVW5pdCUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1600&q=80",
    },
  },
  {
    id: 4,
    name: "Casa de Terra",
    city: "Tiradentes, MG",
    year: 2020,
    coordinates: "21°07'S 44°14'W",
    images: {
      day:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwbW9kVW5pdCUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1600&q=80",
      night:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwbW9kVW5pdCUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1600&q=80",
    },
  },
];

const ProjectsGrid = () => {
  const [isNight, setIsNight] = useState(false);

  return (
    <section className="relative py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-serif text-white mb-4">Obras</h2>
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => setIsNight(false)}
              className={`px-4 py-2 border border-primary text-xs font-mono uppercase tracking-wider ${
                !isNight ? "bg-primary/20 text-primary" : "text-muted-foreground hover:bg-primary/20"
              }`}
            >
              Dia
            </button>
            <button
              onClick={() => setIsNight(true)}
              className={`px-4 py-2 border border-primary text-xs font-mono uppercase tracking-wider ${
                isNight ? "bg-primary/20 text-primary" : "text-muted-foreground hover:bg-primary/20"
              }`}
            >
              Noite
            </button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative flex h-[300px] w-full col-span-6 lg:col-span-4 overflow-hidden ring-1 ring-primary/20"
            >
              <img
                src={isNight ? project.images.night : project.images.day}
                alt={`${project.name} ${isNight ? "noite" : "dia"}`}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 flex flex-col gap-1 text-sm font-mono">
                <span className="text-white/90">{project.coordinates}</span>
                <span className="text-white/80">{project.name}</span>
                <span className="text-white/70">{project.city}, {project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;