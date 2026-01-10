import { Award, Users, Clock, Shield } from "lucide-react";

const stats = [
  { icon: Award, value: "10+", label: "Anos de Experiência" },
  { icon: Users, value: "500+", label: "Clientes Satisfeitos" },
  { icon: Clock, value: "100%", label: "Pontualidade" },
  { icon: Shield, value: "Garantia", label: "Em Todos os Serviços" },
];

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-section-alt">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <span className="text-sm font-medium text-gold uppercase tracking-widest">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-6">
              Especialistas em acabamento e decoração
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Somos uma empresa especializada em serviços de instalação e
              acabamento, com anos de experiência transformando ambientes
              residenciais e comerciais. Nossa equipe é formada por
              profissionais qualificados e comprometidos com a excelência.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Trabalhamos com os melhores materiais do mercado e técnicas
              modernas para garantir um resultado impecável. Do primeiro
              contato à entrega final, você conta com atendimento
              personalizado e transparente.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {[
                "Profissionais certificados e experientes",
                "Materiais de alta qualidade",
                "Prazos respeitados rigorosamente",
                "Garantia em todos os serviços",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-sm border border-border text-center card-hover"
              >
                <stat.icon className="w-10 h-10 text-gold mx-auto mb-4" />
                <div className="text-3xl font-serif font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
