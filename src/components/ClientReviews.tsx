import { Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    quote:
      "A nossa casa deixou de ser apenas um lugar de passagem e virou um verdadeiro refúgio. A luz natural ao longo do dia transforma completamente a energia dos ambientes. É uma arquitetura viva e acolhedora.",
    author: "Mariana & Carlos Silveira",
    city: "São Paulo, SP",
    project: "Contrataram: Casa Pivô",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    quote:
      "Construir no meio do cerrado parecia um desafio gigantesco, mas o Ricardo entendeu o terreno melhor do que ninguém. O conforto térmico sem ar-condicionado é impressionante.",
    author: "Eduardo Rezende",
    city: "Chapada dos Veadeiros, GO",
    project: "Contratou: Refúgio Cerrado",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    quote:
      "O rigor nos detalhes e a transparência do pavilhão nos conectam com a paisagem de uma forma que nunca imaginamos ser possível. Cada janela emoldura um quadro vivo da natureza.",
    author: "Sofia & Lucas Mendes",
    city: "Rio de Janeiro, RJ",
    project: "Contrataram: Pavilhão Vidro",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
];

const ClientReviews = () => {
  return (
    <section id="depoimentos" className="relative py-24 bg-[#0A0A0B] border-t border-white/5">
      <div className="container mx-auto px-6">
        {/* Cabeçalho */}
        <div className="max-w-4xl mb-16">
          <span className="font-mono text-[9px] md:text-xs tracking-[0.3em] text-primary uppercase block mb-2">
            HISTÓRIAS QUE HABITAMOS
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">
            O que dizem nossos clientes
          </h2>
          <div className="w-20 h-[1px] bg-primary"></div>
        </div>

        {/* Grid de Depoimentos (3 Colunas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-[#161618] border border-white/10 hover:border-primary/40 transition-colors duration-300 p-8 flex flex-col justify-between relative group"
            >
              {/* Ícone de Aspas Terracota */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Texto do Depoimento */}
              <p className="text-white/80 font-serif italic text-base leading-relaxed mb-8 flex-1">
                "{item.quote}"
              </p>

              {/* Dados do Autor e Projeto */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover border border-primary/30 shrink-0"
                />
                <div className="flex flex-col">
                  <h3 className="font-sans font-medium text-white text-sm">
                    {item.author}
                  </h3>
                  <span className="text-xs text-white/50">{item.city}</span>
                  <span className="font-mono text-[10px] text-primary tracking-wider uppercase mt-0.5">
                    {item.project}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;