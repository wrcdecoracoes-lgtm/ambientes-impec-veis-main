import { Button } from "@/components/ui/button";
import serviceVinyl from "@/assets/service-vinyl.jpg";
import serviceWallpaper from "@/assets/service-wallpaper.jpg";
import serviceSanca from "@/assets/service-sanca.jpg";
import serviceLaminate from "@/assets/service-laminate.jpg";
import serviceRodape from "@/assets/service-rodape.jpg";
import serviceContrapiso from "@/assets/service-contrapiso.jpg";

const services = [
  {
    title: "Piso Vinílico",
    description:
      "Instalação profissional de piso vinílico com acabamento perfeito. Ideal para quem busca praticidade, durabilidade e beleza no ambiente.",
    image: serviceVinyl,
    benefits: ["Resistente à água", "Fácil manutenção", "Conforto térmico"],
  },
  {
    title: "Piso Laminado",
    description:
      "Aplicação de piso laminado com técnica precisa e encaixe perfeito. Uma solução elegante que transforma qualquer ambiente.",
    image: serviceLaminate,
    benefits: ["Instalação rápida", "Visual sofisticado", "Custo-benefício"],
  },
  {
    title: "Papel de Parede",
    description:
      "Instalação de papel de parede com alinhamento impecável. Renove seus ambientes com estilo e personalidade única.",
    image: serviceWallpaper,
    benefits: ["Variedade de estilos", "Aplicação limpa", "Transformação rápida"],
  },
  {
    title: "Sanca de Isopor",
    description:
      "Execução de sancas em isopor com acabamento fino. Valorize seu teto com iluminação indireta e design moderno.",
    image: serviceSanca,
    benefits: ["Iluminação elegante", "Design exclusivo", "Valoriza o imóvel"],
  },
  {
    title: "Rodapé",
    description:
      "Instalação de rodapé com cortes precisos e acabamento perfeito. O toque final que faz toda a diferença no ambiente.",
    image: serviceRodape,
    benefits: ["Acabamento refinado", "Proteção das paredes", "Diversos modelos"],
  },
  {
    title: "Contrapiso",
    description:
      "Execução de contrapiso nivelado e resistente. Base fundamental para garantir a qualidade do piso final.",
    image: serviceContrapiso,
    benefits: ["Nivelamento perfeito", "Alta resistência", "Preparo adequado"],
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gold uppercase tracking-widest">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Soluções completas em acabamento
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos serviços especializados para transformar seu ambiente
            com qualidade e profissionalismo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-sm border border-border card-hover"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.benefits.map((benefit, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-accent text-accent-foreground rounded-full"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="#contato">Solicitar Orçamento</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
