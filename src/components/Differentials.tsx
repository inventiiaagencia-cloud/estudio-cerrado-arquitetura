import { Pencil, HardHat, Wind, Leaf } from "lucide-react";

const differentials = [
  {
    icon: Pencil,
    title: "Projeto Sob Medida",
    description:
      "Arquitetura autoral que rejeita fórmulas prontas. Cada traço é uma resposta direta à topografia, ao percurso do sol e às memórias de quem irá habitar o espaço.",
  },
  {
    icon: HardHat,
    title: "Acompanhamento de Obra",
    description:
      "A excelência está no detalhe executivo. Nossa equipe realiza supervisão rigorosa em canteiro, garantindo que a materialidade e a técnica respeitem o rigor do projeto.",
  },
  {
    icon: Wind,
    title: "Conforto Bioclimático",
    description:
      "Estratégias passivas de ventilação e iluminação que reduzem a dependência tecnológica. Projetamos espaços que respiram e mantêm o equilíbrio térmico natural.",
  },
  {
    icon: Leaf,
    title: "Materialidade Honesta",
    description:
      "O uso do concreto, da pedra, da madeira e do barro em sua essência. Materiais que envelhecem com dignidade, ganhando pátina e contando a história do tempo.",
  },
];

const Differentials = () => {
  return (
    <section id="metodo" className="relative py-32 md:py-48 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
            Nossa abordagem técnica e sensorial.
          </h2>
          <div className="w-24 h-[1px] bg-primary"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {differentials.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-start space-y-8 p-0 md:p-4 border-l border-white/5 hover:border-primary/40 transition-colors"
            >
              <div className="p-0">
                <item.icon className="w-10 h-10 text-primary stroke-[1px] group-hover:scale-110 transition-transform duration-500" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-white tracking-wide">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;