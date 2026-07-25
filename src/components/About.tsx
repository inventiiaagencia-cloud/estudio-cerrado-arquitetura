import { LucideIcon, Menu, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section className="relative py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-white mb-6">Sobre o Estúdio Cerrado Arquitetura</h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed mb-12">
            Arquitetura que nasce do diálogo entre o lugar e aqueles que nele habitam. Nosso trabalho busca a essência do lugar — sua luz, sua materiais, seu silêncio — para criar espaços que respira com seus habitantes.
          </p>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex items-start gap-4">
              <Menu className="h-5 w-5 text-primary" aria-label="Ícone de menu" />
              <div>
                <h3 className="font-semibold text-white mb-1">Arquiteto responsável</h3>
                <p className="text-muted-foreground">Arq. [Nome do Arquiteto]</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <BookOpen className="h-5 w-5 text-primary" aria-label="Ícone de livro aberto" />
              <div>
                <h3 className="font-semibold text-white mb-1">Filosofia</h3>
                <p className="text-muted-foreground">
                  Cada projeto é uma resposta única ao contexto, priorizando a experiência sensorial do espaço sobre tendências passageiras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;