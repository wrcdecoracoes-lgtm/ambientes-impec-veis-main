import { Users, Award, Clock, Shield } from "lucide-react";

const differentials = [
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description:
      "Cada projeto recebe atenção individual. Entendemos suas necessidades e oferecemos soluções sob medida para seu ambiente.",
  },
  {
    icon: Award,
    title: "Mão de Obra Qualificada",
    description:
      "Nossa equipe é formada por profissionais experientes e certificados, garantindo execução com técnica e precisão.",
  },
  {
    icon: Shield,
    title: "Acabamento Impecável",
    description:
      "Trabalhamos com os melhores materiais e técnicas modernas para entregar um resultado que supera expectativas.",
  },
  {
    icon: Clock,
    title: "Pontualidade e Garantia",
    description:
      "Cumprimos prazos rigorosamente e oferecemos garantia em todos os serviços executados.",
  },
];

const Differentials = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gold uppercase tracking-widest">
            Por Que Nos Escolher
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Compromisso com excelência em cada detalhe do seu projeto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-accent rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <item.icon className="w-10 h-10 text-gold group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
