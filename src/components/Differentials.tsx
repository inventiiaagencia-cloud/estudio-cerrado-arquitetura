import { Zap, Activity, Droplets, ThermometerSun } from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      icon: Zap,
      title: "Projeto Sob Medida",
      description:
        "Cada projeto é desenvolvido exclusivamente para o cliente e o local, respeitando a topografia, a vegetação e a cultura do entorno.",
    },
    {
      icon: Activity,
      title: "Acompanhamento de Obra Completo",
      description:
        "Estamos presentes em todas as etapas, desde o estudo preliminar até a finalização, garantindo a qualidade e a fidelity ao projeto original.",
    },
    {
      icon: Droplets,
      title: "Conforto Bioclimático",
      description:
        "Projetamos com o clima, não contra ele. Aproveitamos a luz natural, a ventilação e a inércia térmica para reduzir o consumo energético.",
    },
    {
      icon: ThermometerSun,
      title: "Materialidade Honesta",
      description:
        "Utilizamos materiais locais e naturais, deixando aparente sua textura e origem, criando envelhecimento com dignidade e baixa manutenção.",
    },
  ];

  return (
    <section className="relative py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-white text-center mb-16">
          Como trabalhamos
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((diff) => (
            <div
              key={diff.title}
              className="flex flex-col items-center text-center p-6 border border-primary/20"
            >
              <div className="mb-4">
                <diff.icon className="h-6 w-6 text-primary" aria-label={diff.title} />
              </div>
              <h3 className="font-semibold text-white mb-2">{diff.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {diff.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;