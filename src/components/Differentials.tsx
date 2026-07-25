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
    <section id="metodo" className="relative py-20 md:py-36 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
            Nossa abordagem técnica e sensorial.
          </h2>
          <div className="w-20 h-[1px] bg-primary"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {differentials.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-start space-y-6 p-0 md:p-3 border-l border-white/5 hover:border-primary/40 transition-colors"
            >
              <div className="p-0">
                <item.icon className="w-9 h-9 text-primary stroke-[1px] group-hover:scale-105 transition-transform duration-500" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-serif text-white tracking-wide">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm font-light">
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