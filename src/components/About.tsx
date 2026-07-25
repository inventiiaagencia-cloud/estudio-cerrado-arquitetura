import { User, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section className="relative py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Sobre o Estúdio Cerrado Arquitetura</h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
            O Estúdio Cerrado nasceu em 2011, quando o arquiteto Ricardo Almeida Fontoura decidiu deixar um grande escritório em São Paulo para desenhar casas a partir do terreno onde vai morar, e não de uma planta pronta de catálogo. Nos últimos 15 anos, o estúdio projetou mais de 40 residências e espaços comerciais no Brasil, sempre partindo de uma pergunta simples: como este lugar específico — seu clima, sua luz, sua vegetação — quer ser habitado?
          </p>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            {/* Arquiteto responsável */}
            <div className="flex items-start gap-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0b3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60"
                alt="Ricardo Almeida Fontoura"
                className="h-24 w-24 rounded-full object-cover border-2 border-primary/20"
              />
              <div>
                <h3 className="font-semibold text-white mb-1">Arquiteto responsável</h3>
                <p className="text-muted-foreground mb-2">Ricardo Almeida Fontoura</p>
                <p className="font-mono text-xs text-muted-foreground mb-1">CAU A123456-7</p>
                <p className="text-muted-foreground text-sm">
                  Formado pela FAU-USP em 2004, com passagem por escritórios em Lisboa antes de fundar o Estúdio Cerrado.
                </p>
              </div>
            </div>

            {/* Filosofia */}
            <div className="flex items-start gap-4">
              <BookOpen className="h-5 w-5 text-primary" aria-label="Ícone de livro aberto" />
              <div>
                <h3 className="font-semibold text-white mb-1">Filosofia</h3>
                <p className="text-muted-foreground">
                  Cada projeto é uma resposta única ao contexto — o terreno, o clima e a rotina de quem vai morar nele — priorizando a experiência sensorial do espaço sobre tendências passageiras.
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